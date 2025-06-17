import { generateRobotsTxt } from "@nuxtjs/robots/util";

export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src/',

  app: {
    baseURL: '/'
  },

  css: [
    'assets/scss/style.scss',
  ],

  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    'nuxt-delay-hydration',
    '@nuxtjs/color-mode'
  ],

  // colorMode: {
  //   preference: 'light'
  // },

  site: {
    url: '',
  },

  robots: { robotsTxt: false },

  build: {
    transpile: ['mdi-vue']
  },

  devtools: { enabled: true },
  compatibilityDate: '2025-03-17'
})