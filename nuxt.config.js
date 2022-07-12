export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'zLawyer',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module',
  ],

  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/recaptcha',
  ],

  publicRuntimeConfig: {
    recaptcha: {
      /* reCAPTCHA options */
      hideBadge: false,
      language: 'FR',   // Recaptcha language (v2)
      //mode: 'enterprise',       // Mode: 'base', 'enterprise'
      siteKey: process.env.RECAPTCHA_SITE_KEY,    // Site key for requests
      version: 2,    // Version
      size: 'normal'        // Size: 'compact', 'normal', 'invisible' (v2)
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
