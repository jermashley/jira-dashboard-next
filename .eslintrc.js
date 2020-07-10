module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: `babel-eslint`,
    sourceType: `module`,
  },
  extends: [`@chiedolabs/eslint-config-nextjs`, `plugin:prettier/recommended`, `prettier`],
  plugins: [`prettier`],
  rules: {
    semi: `off`,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    quotes: [
      2,
      `backtick`,
      {
        allowTemplateLiterals: true,
      },
    ],
  },
}