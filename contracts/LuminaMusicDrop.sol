// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LuminaMusicDrop is ERC1155, Ownable, ReentrancyGuard {
    string public name;
    string public symbol;

    // tokenId => supply cap
    mapping(uint256 => uint256) public maxSupply;
    // tokenId => current minted count
    mapping(uint256 => uint256) public totalMinted;
    // tokenId => price in USDC (6 decimals)
    mapping(uint256 => uint256) public mintPrice;
    // tokenId => active
    mapping(uint256 => bool) public isMintActive;

    // USDC on Arbitrum One
    IERC20 public immutable usdc;
    address public immutable protocolFeeRecipient;
    uint256 public constant PROTOCOL_FEE_BPS = 500; // 5%

    // Dividend tracking: cumulative rewards per share per tokenId
    mapping(uint256 => uint256) public cumulativeRewardsPerShare; // scaled by 1e18
    mapping(address => mapping(uint256 => uint256)) public rewardDebt; // holder => tokenId => debt
    mapping(address => mapping(uint256 => uint256)) public pendingRewards; // holder => tokenId => pending

    event TokenMinted(address indexed minter, uint256 indexed tokenId, uint256 quantity, uint256 totalPaid);
    event RewardsDistributed(uint256 indexed tokenId, uint256 amount);
    event RewardsClaimed(address indexed holder, uint256 indexed tokenId, uint256 amount);

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _uri,
        address _usdc,
        address _protocolFeeRecipient,
        address _initialOwner
    ) ERC1155(_uri) Ownable(_initialOwner) {
        name = _name;
        symbol = _symbol;
        usdc = IERC20(_usdc);
        protocolFeeRecipient = _protocolFeeRecipient;
    }

    function setupToken(
        uint256 tokenId,
        uint256 _maxSupply,
        uint256 _mintPrice // in USDC smallest unit (6 decimals), $1 = 1_000_000
    ) external onlyOwner {
        maxSupply[tokenId] = _maxSupply;
        mintPrice[tokenId] = _mintPrice;
    }

    function setMintActive(uint256 tokenId, bool active) external onlyOwner {
        isMintActive[tokenId] = active;
    }

    function mint(uint256 tokenId, uint256 quantity) external nonReentrant {
        require(isMintActive[tokenId], "Mint not active");
        require(totalMinted[tokenId] + quantity <= maxSupply[tokenId], "Exceeds max supply");

        uint256 totalCost = mintPrice[tokenId] * quantity;
        if (totalCost > 0) {
            uint256 protocolFee = (totalCost * PROTOCOL_FEE_BPS) / 10000;
            uint256 creatorShare = totalCost - protocolFee;

            usdc.transferFrom(msg.sender, protocolFeeRecipient, protocolFee);
            usdc.transferFrom(msg.sender, owner(), creatorShare);
        }

        // Update reward debt for new holdings
        _updateRewardDebt(msg.sender, tokenId);

        totalMinted[tokenId] += quantity;
        _mint(msg.sender, tokenId, quantity, "");

        emit TokenMinted(msg.sender, tokenId, quantity, totalCost);
    }

    // Distribute secondary sale royalties to all holders
    function distributeRewards(uint256 tokenId) external payable {
        require(totalMinted[tokenId] > 0, "No tokens minted");
        uint256 rewardAmount = msg.value;
        cumulativeRewardsPerShare[tokenId] += (rewardAmount * 1e18) / totalMinted[tokenId];
        emit RewardsDistributed(tokenId, rewardAmount);
    }

    function claimableRewards(address holder, uint256 tokenId) public view returns (uint256) {
        uint256 holderBalance = balanceOf(holder, tokenId);
        uint256 accumulated = (holderBalance * cumulativeRewardsPerShare[tokenId]) / 1e18;
        return pendingRewards[holder][tokenId] + accumulated - rewardDebt[holder][tokenId];
    }

    function claimRewards(uint256 tokenId) external nonReentrant {
        uint256 rewards = claimableRewards(msg.sender, tokenId);
        require(rewards > 0, "No rewards to claim");

        rewardDebt[msg.sender][tokenId] = (balanceOf(msg.sender, tokenId) * cumulativeRewardsPerShare[tokenId]) / 1e18;
        pendingRewards[msg.sender][tokenId] = 0;

        (bool success, ) = msg.sender.call{value: rewards}("");
        require(success, "Transfer failed");

        emit RewardsClaimed(msg.sender, tokenId, rewards);
    }

    function _updateRewardDebt(address account, uint256 tokenId) internal {
        uint256 holderBalance = balanceOf(account, tokenId);
        if (holderBalance > 0) {
            uint256 accumulated = (holderBalance * cumulativeRewardsPerShare[tokenId]) / 1e18;
            pendingRewards[account][tokenId] += accumulated - rewardDebt[account][tokenId];
        }
        rewardDebt[account][tokenId] = (balanceOf(account, tokenId) * cumulativeRewardsPerShare[tokenId]) / 1e18;
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal virtual override {
        // Update reward debts on transfer
        for (uint256 i = 0; i < ids.length; i++) {
            if (from != address(0)) _updateRewardDebt(from, ids[i]);
            if (to != address(0)) _updateRewardDebt(to, ids[i]);
        }
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    receive() external payable {}
}
