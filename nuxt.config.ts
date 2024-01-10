import StylelintPlugin from 'vite-plugin-stylelint'


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt Test Project',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
    
    },
  css: ['assets/main.scss'],
  devtools: { enabled: true },
  devServer: {
    port: 3001,
    url: "http://localhost:3001",
  },
  vite: {
    plugins: [
      StylelintPlugin({
          include: ['assets/**/*.scss', '**/*.vue', '**/*.scss']})
    ],

  }

  
});
