import path from "path"
import { defineConfig } from "vite"
import postcss from "./postcss.config.js"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  css: {
    postcss,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico"],
      manifest: {
        name: "Upkkar Setu",
        short_name: "Upkaar Setu",
        description: "Data collection app for Tiny Miracles",
        icons: [
          { src: "favicon.png", sizes: "128x128", type: "image/png" },
          { src: "splash2.png", sizes: "512x512", type: "image/png" },
        ],
        theme_color: "#00293B",
        background_color: "#FFFFFF",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "portrait",
      },
      strategies: "injectManifest",
      devOptions: { enabled: true },
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "")
        },
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
