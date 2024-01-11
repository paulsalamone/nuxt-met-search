module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'plugin:nuxt/recommended',
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
      '@nuxtjs/eslint-config-typescript'
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
    },
    plugins: [
      'vue',
      '@typescript-eslint'
    ],
    rules: {
      indent: ['error', 2],
      'padded-blocks': 0,
      'no-console': 'off',
      'comma-dangle': 0,
      'vue/singleline-html-element-content-newline': 0,
      'vue/multi-word-component-names': 0,
      'prettier/prettier': 0,
      'vue/no-v-html': 0,
      'comma-spacing': 0,
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }]
    },
    ignorePatterns: [
      'mgnl-apps/**/*',
      '**/*.Args.*',
      '**/*.model.*',
      'lib/*',
      'helpers/*',
      'magnolia.config.js',
      'storybook-static',
      'qa/node_modules/*',
      'node_modules/*',
      'qa/cypress/reports',
    ]
  }
  