// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxt/image", "@nuxt/icon", "@vite-pwa/nuxt"],
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "My Tauri App",
      short_name: "TauriApp",
      theme_color: "#ffffff",
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0', // This allows the network to find the server
    port: 3000
  },
});
