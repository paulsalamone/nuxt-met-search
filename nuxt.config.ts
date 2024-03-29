import eslintPlugin from 'vite-plugin-eslint'
import StylelintPlugin from 'vite-plugin-stylelint'

const publicRuntimeConfig = {
  apiBase: 'https://collectionapi.metmuseum.org/public/collection',
metObjectsPath: '/v1/objects',
metDepartmentsPath: '/v1/departments',
metSearchPath: '/v1/search'
}
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
  css: ['assets/styles/main.scss'],
  modules: [
    '@pinia/nuxt',
  ],
  devtools: { enabled: true },
  devServer: {
    port: 3001,
    url: "http://localhost:3001",
  },
  vite: {
    css: {
      // css.preprocessorOptions: https://vitejs.dev/config/shared-options.html#css-preprocessoroptions
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "./assets/styles/1-settings/importer.scss"; 
          @import "./assets/styles/2-tools/importer.scss"; 
          @import "./assets/styles/3-elements/importer.scss"; 
          @import "./assets/styles/4-utilities/importer.scss"; 
          `
        }
      }
    },
    plugins: [
      // eslintPlugin({
      //   failOnError: false
      // }),
      StylelintPlugin({
        // include: ['assets/**/*.scss', '**/*.vue', '**/*.scss']
      })
      // StylelintPlugin({
      //   include: ['assets/**/*.scss', '**/*.vue', '**/*.scss']
      //   // TODO: decide, if we want this:
      //   // emitErrorAsWarning: true
      // })
    ]
  },
  // Runtime Configuration: https://nuxt.com/docs/api/configuration/nuxt-config#runtimeconfig
  runtimeConfig: {
    configSecret: "Ich liebe Filiz",
    public: publicRuntimeConfig
  },

  
});
