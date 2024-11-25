// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path')

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern", "legacy"
        },
      },
    },
  },

  nitro: {
    output: {
      publicDir: path.join(__dirname, 'docs/')
    }
  },

  app: {
    baseURL: '/docs/',
  },

  modules: ['@nuxt/image'],
})