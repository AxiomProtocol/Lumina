// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract LuminaMarketplace is Ownable, ReentrancyGuard {
    struct Listing {
        address seller;
        address nftContract;
        uint256 tokenId;
        uint256 quantity;
        uint256 pricePerToken; // in USDC (6 decimals)
        bool isActive;
    }

    mapping(uint256 => Listing) public listings;
    uint256 public nextListingId;

    IERC20 public immutable usdc;
    uint256 public constant PROTOCOL_FEE_BPS = 250; // 2.5%
    uint256 public constant ROYALTY_BPS = 750; // 7.5% to original creator
    address public protocolFeeRecipient;

    // nftContract => royalty recipient (creator)
    mapping(address => address) public royaltyRecipient;

    event Listed(uint256 indexed listingId, address indexed seller, address indexed nftContract, uint256 tokenId, uint256 quantity, uint256 pricePerToken);
    event Sale(uint256 indexed listingId, address indexed buyer, uint256 quantity, uint256 totalPrice);
    event ListingCancelled(uint256 indexed listingId);

    constructor(address _usdc, address _protocolFeeRecipient, address _initialOwner) Ownable(_initialOwner) {
        usdc = IERC20(_usdc);
        protocolFeeRecipient = _protocolFeeRecipient;
    }

    function setRoyaltyRecipient(address nftContract, address recipient) external onlyOwner {
        royaltyRecipient[nftContract] = recipient;
    }

    function list(address nftContract, uint256 tokenId, uint256 quantity, uint256 pricePerToken) external returns (uint256 listingId) {
        require(quantity > 0, "Quantity must be > 0");
        require(pricePerToken > 0, "Price must be > 0");

        IERC1155(nftContract).safeTransferFrom(msg.sender, address(this), tokenId, quantity, "");

        listingId = nextListingId++;
        listings[listingId] = Listing({
            seller: msg.sender,
            nftContract: nftContract,
            tokenId: tokenId,
            quantity: quantity,
            pricePerToken: pricePerToken,
            isActive: true
        });

        emit Listed(listingId, msg.sender, nftContract, tokenId, quantity, pricePerToken);
    }

    function buy(uint256 listingId, uint256 quantity) external nonReentrant {
        Listing storage listing = listings[listingId];
        require(listing.isActive, "Listing not active");
        require(quantity <= listing.quantity, "Not enough quantity");

        uint256 totalPrice = listing.pricePerToken * quantity;
        uint256 protocolFee = (totalPrice * PROTOCOL_FEE_BPS) / 10000;
        uint256 royalty = (totalPrice * ROYALTY_BPS) / 10000;
        uint256 sellerProceeds = totalPrice - protocolFee - royalty;

        usdc.transferFrom(msg.sender, protocolFeeRecipient, protocolFee);

        address royaltyAddr = royaltyRecipient[listing.nftContract];
        if (royaltyAddr != address(0) && royalty > 0) {
            usdc.transferFrom(msg.sender, royaltyAddr, royalty);
        } else {
            sellerProceeds += royalty;
        }

        usdc.transferFrom(msg.sender, listing.seller, sellerProceeds);

        listing.quantity -= quantity;
        if (listing.quantity == 0) {
            listing.isActive = false;
        }

        IERC1155(listing.nftContract).safeTransferFrom(address(this), msg.sender, listing.tokenId, quantity, "");

        emit Sale(listingId, msg.sender, quantity, totalPrice);
    }

    function cancelListing(uint256 listingId) external nonReentrant {
        Listing storage listing = listings[listingId];
        require(listing.seller == msg.sender || msg.sender == owner(), "Not authorized");
        require(listing.isActive, "Not active");

        listing.isActive = false;
        IERC1155(listing.nftContract).safeTransferFrom(address(this), listing.seller, listing.tokenId, listing.quantity, "");

        emit ListingCancelled(listingId);
    }

    function onERC1155Received(address, address, uint256, uint256, bytes memory) public virtual returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(address, address, uint256[] memory, uint256[] memory, bytes memory) public virtual returns (bytes4) {
        return this.onERC1155BatchReceived.selector;
    }
}
