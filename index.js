function moduleExists(mod) {
  try {
    require.resolve(mod);
    return true;
  } catch (e) {
    return false;
  }
}

const config = {
  extends: ['react-app'],
  plugins: [],
  rules: {
    'block-scoped-var': 'warn',
    camelcase: 'warn',
    curly: ['error', 'all'],
    'react/prop-types': 'warn',
  },
};

if (moduleExists('eslint-config-prettier')) {
  config.extends.push('prettier');
  config.plugins.push('prettier');
  config.rules['prettier/prettier'] = [
    'error',
    {
      singleQuote: true,
      trailingComma: 'es5',
      bracketSpacing: false,
    },
  ];
}

if (moduleExists('eslint-plugin-jest')) {
  config.extends.push('react-app/jest');
}

module.exports = config;
