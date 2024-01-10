module.exports = {
    extends: [
        'stylelint-config-standard',
        // 'stylelint-config-html/vue',
        // 'stylelint-config-standard-scss',
        // 'stylelint-config-recommended-scss',
        // 'stylelint-config-recommended-vue/scss',
        // 'stylelint-config-prettier-scss',
    ],
    // add your custom config here
    // https://stylelint.io/user-guide/configuration
    rules: {
        "block-no-empty": true,
        "unit-allowed-list": ["rem"]

    },
}
