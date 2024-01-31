// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    /* Options */
  },
  css: ['primevue/resources/themes/lara-light-green/theme.css'],
  // runtimeConfig: {
  //   apiSecretPath: 'NUXT_API_SECRET_PATH',
  //   apiSecretKey: 'NUXT_API_SECRET_KEY',
  //   public: {
  //     apiBaseUrl: 'NUXT_PUBLIC_API_BASE_URL',
  //     apiBaseToken: 'NUXT_PUBLIC_API_BASE_TOKEN',
  //   }
  // },
  nitro: {
    inlineDynamicImports: true,
    serveStatic: true,
    // output: {
    //   dir: '.output',
    //   serverDir: '.output/server',
    //   publicDir: '.output/public'
    // }
  }
})
