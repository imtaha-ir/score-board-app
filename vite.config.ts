import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/score-board-app/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Score Board",
        short_name: "Score Board",
        description: "An offline score board for keeping track of players.",
        start_url: "/score-board-app/",
        scope: "/score-board-app/",
        display: "standalone",
        theme_color: "#111827",
        background_color: "#f8fafc",
        icons: [
          {
            src: "/score-board-app/score-board-icon.svg",
            sizes: "192x192",
            type: "image/svg+xml",
            purpose: "any",
          },
          {
            src: "/score-board-app/score-board-icon.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
