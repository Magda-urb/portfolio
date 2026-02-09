// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "github_pages",
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
})
