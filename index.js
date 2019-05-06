module.exports = {
  extends: ['react-app', 'prettier', 'prettier/flowtype', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: false,
        parser: 'flow',
      },
    ],
    'block-scoped-var': 'warn',
    camelcase: 'warn',
    curly: ['error', 'all'],
  },
};
