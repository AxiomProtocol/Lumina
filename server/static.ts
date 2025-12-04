import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { db } from "./db";
import { users } from "@shared/schema";
import { eq, or } from "drizzle-orm";

function isUUID(str: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // Handle profile pages with dynamic OG meta tags
  app.use("/profile/:identifier", async (req, res, next) => {
    try {
      const identifier = req.params.identifier;
      
      // Fetch user data
      const whereCondition = isUUID(identifier)
        ? eq(users.id, identifier)
        : eq(users.username, identifier);
      
      const [user] = await db.select().from(users).where(whereCondition).limit(1);
      
      if (!user) {
        // User not found, serve default page
        return res.sendFile(path.resolve(distPath, "index.html"));
      }

      // Read the index.html template
      let html = await fs.promises.readFile(path.resolve(distPath, "index.html"), "utf-8");
      
      const displayName = user.displayName || user.username;
      const description = user.bio || `Check out ${displayName}'s profile on Lumina`;
      const profileUrl = `https://joinlumina.io/profile/${user.username}`;
      
      // Build absolute avatar URL
      let avatarUrl = user.avatarUrl || "";
      if (avatarUrl && !avatarUrl.startsWith("http")) {
        avatarUrl = `https://joinlumina.io${avatarUrl}`;
      }
      
      // Replace OG meta tags
      html = html.replace(
        /<meta property="og:title" content="[^"]*"/,
        `<meta property="og:title" content="${displayName} | Lumina"`
      );
      html = html.replace(
        /<meta property="og:description" content="[^"]*"/,
        `<meta property="og:description" content="${escapeHtml(description)}"`
      );
      html = html.replace(
        /<meta property="og:url" content="[^"]*"/,
        `<meta property="og:url" content="${profileUrl}"`
      );
      html = html.replace(
        /<meta property="og:type" content="[^"]*"/,
        `<meta property="og:type" content="profile"`
      );
      
      if (avatarUrl) {
        html = html.replace(
          /<meta property="og:image" content="[^"]*"/,
          `<meta property="og:image" content="${avatarUrl}"`
        );
      }
      
      // Replace Twitter meta tags
      html = html.replace(
        /<meta name="twitter:card" content="[^"]*"/,
        `<meta name="twitter:card" content="summary"`
      );
      html = html.replace(
        /<meta name="twitter:title" content="[^"]*"/,
        `<meta name="twitter:title" content="${displayName} | Lumina"`
      );
      html = html.replace(
        /<meta name="twitter:description" content="[^"]*"/,
        `<meta name="twitter:description" content="${escapeHtml(description)}"`
      );
      
      if (avatarUrl) {
        html = html.replace(
          /<meta name="twitter:image" content="[^"]*"/,
          `<meta name="twitter:image" content="${avatarUrl}"`
        );
      }
      
      // Replace page title
      html = html.replace(
        /<title>[^<]*<\/title>/,
        `<title>${displayName} | Lumina</title>`
      );

      res.set("Content-Type", "text/html");
      res.send(html);
    } catch (error) {
      console.error("Error generating OG tags for profile:", error);
      // Fall back to default page
      res.sendFile(path.resolve(distPath, "index.html"));
    }
  });

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
