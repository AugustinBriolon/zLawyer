export default {
  target: "static",
  ssr: false,
  router: {
    base: '/logiciel-avocats/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "zLawyer",
    htmlAttrs: {
      lang: "fr",
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
      { hid: 'title', name: 'title', content: 'La solution de gestion de cabinets d’avocats simple, ergonomique, sans engagement !'},
      { hid: 'description', name: 'description', content: 'La solution de gestion de cabinets d’avocats simple, ergonomique, sans engagement !' },


      // Twitter
      { hid: 't-type',name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: "La solution de gestion de cabinets d’avocats simple, ergonomique, sans engagement !" },
      { name: 'twitter:description', content: "La solution de gestion de cabinets d’avocats simple, ergonomique, sans engagement !" },
      { name: 'twitter:image', content: '/ogImage.png' },

      { name: 'format-detection', content: 'telephone=no' },
      // Open Graph
      { hid: 'og-type',property: 'og:type', content: 'website' },
      { hid: 'og-url',property: 'og:url', content: 'https://www.zlawyer.fr/logiciel-avocats/' },
      { hid: 'og-title',property: 'og:title', content: "La solution de gestion de cabinets d’avocats simple, ergonomique, sans engagement !" },
      { hid: 'og-desc',property: 'og:description', content: "La solution de gestion de cabinets d’avocats simple, ergonomique, sans engagement !" },
      { hid: 'og-image',property: 'og:image', content: '/ogImage.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://www.zlawyer.fr/logiciel-avocats/' },
    ],
    script: [
      {
        id: "ze-snippet",
        src: "https://static.zdassets.com/ekr/snippet.js?key=e2d18a03-a4bd-4b4d-986b-292fec2fcd83",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
    'nuxt-gsap-module',
  ],

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/recaptcha"],

  publicRuntimeConfig: {
    recaptcha: {
      /* reCAPTCHA options */
      hideBadge: false,
      language: "FR", // Recaptcha language (v2)
      //mode: 'enterprise',       // Mode: 'base', 'enterprise'
      siteKey: "6LeLYOUgAAAAAMLyGgi4_Owoy-HHuvQAgjoElWHN", // Site key for requests
      version: 2, // Version
      size: "normal", // Size: 'compact', 'normal', 'invisible' (v2)
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: "https://www.zlawyer.fr/logiciel-avocats/",
    extend (config, ctx) {
      config.performance.maxAssetSize = 700 * 1024
    }
  },
};
