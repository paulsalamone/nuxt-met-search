module.exports = {
    extends: [
      'stylelint-config-standard',
      'stylelint-config-html/vue',
      'stylelint-config-standard-scss',
      'stylelint-config-recommended-scss',
      'stylelint-config-recommended-vue/scss',
      'stylelint-config-prettier-scss',
    ],
    // add your custom config here
    // https://stylelint.io/user-guide/configuration
    rules: {
    //   indentation: 2,
    //   'declaration-colon-space-after': 'always',
    //   'annotation-no-unknown': null,
    //   'at-rule-no-unknown': null,
    //   'scss/no-global-function-names': null,
    //   'selector-class-pattern': null,
    //   // 'defaultSeverity': 'warning'
    //   'selector-pseudo-class-no-unknown': [
    //     true,
    //     {
    //       ignorePseudoClasses: ['deep'],
    //     },
    //   ],
    },
    ignoreFiles: ['assets/styles/reset.scss', '500.html'],
  }
  