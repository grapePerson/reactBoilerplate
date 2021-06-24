module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier', 'stylelint-config-sass-guidelines'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: ['stylelint-scss'],
  rules: {
    'max-nesting-depth': 10,
    'order/properties-alphabetical-order': null,
    'scss/dollar-variable-pattern': null,
    'scss/at-mixin-pattern': null,
    'scss/percent-placeholder-pattern': null,
    'selector-class-pattern': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
};
