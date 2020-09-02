export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'VotRomania',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Vot România este o platformă dezvoltată de Code for Romania care  simplifică pe înțelesul cetățenilor ghidul electoral al alegerilor locale, care vor avea loc la finalul lunii septembrie 2020.',
      },
      { property: 'og:title', content: 'Vot România' },
      {
        property: 'og:image',
        content: 'https://votromania.ro/assets/og_image.png',
      },
      {
        property: 'og:description',
        content:
          'Vot România este o platformă dezvoltată de Code for Romania care  simplifică pe înțelesul cetățenilor ghidul electoral al alegerilor locale, care vor avea loc la finalul lunii septembrie 2020.',
      },
      { property: 'og:url', content: 'https://votromania.ro' },
      { property: 'og:type', content: 'website' },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~/scss/style.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-i18n'],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en-US.js',
      },
      {
        code: 'hu',
        name: 'Hungarian',
        file: 'hu-HU.js',
      },
      {
        code: 'ro',
        name: 'Romania',
        file: 'ro-RO.js',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ro',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}