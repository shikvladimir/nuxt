// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    /* Options */
  },
  css: [
      'primevue/resources/themes/lara-light-green/theme.css',
      '@/assets/scss/global.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },

  nitro: {
    inlineDynamicImports: true,
    serveStatic: true,
  }
})
