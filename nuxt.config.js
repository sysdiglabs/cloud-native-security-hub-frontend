import { getSitemapRoutes } from './infrastructure/Sitemap'
require('dotenv').config()

export default {
  mode: 'universal',
  head: {
    titleTemplate: 'PromCat - %s',
    title: 'A resource catalog for enterprise-class Prometheus monitoring',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Discover and share Prometheus best practices and configurations' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ]
  },
  modern: 'server',
  loading: { color: '#E74C24' },
  css: ['./assets/scss/custom.scss'],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  serverMiddleware: [
    {
      path: '/health',
      handler: (req, res, next) => {
        res.setHeader('Content-Type', 'text/plain')
        res.end('PASS')
      }
    }
  ],
  pwa: {
    workbox: {
      offlineAnalytics: true,
      runtimeCaching: [
        {
          urlPattern: process.env.API_URL + '/.*',
          handler: 'staleWhileRevalidate',
          method: 'GET'
        },
        {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: 'https://fonts.gstatic.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: '/.(?:png|gif|jpg|jpeg|webp|svg)$',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {
            cacheName: 'images',
            cacheExpiration: {
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
            }
          }
        }
      ]
    }
  },
  webfontloader: {
    custom: {
      families: [
        'Lato'
      ],
      urls: [
        'https://fonts.googleapis.com/css?family=Lato&display=swap'
      ]
    }
  },
  styleResources: {
    scss: [
      './assets/scss/_variables.scss',
      './node_modules/bootstrap/scss/_functions.scss',
      './node_modules/bootstrap/scss/_variables.scss',
      './node_modules/bootstrap/scss/mixins/_breakpoints.scss'
    ]
  },
  plugins: [
    '~/plugins/services.js',
    { src: '~/plugins/search.js', ssr: false }
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics'
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-webfontloader',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources'
  ],
  sitemap: {
    hostname: process.env.BASE_URL,
    path: '/sitemap.xml',
    gzip: true,
    routes () {
      return getSitemapRoutes()
    },
    generate: false
  },
  build: {
    extend (config, ctx) {
    }
  }
}
