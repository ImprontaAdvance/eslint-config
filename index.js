module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:flowtype/recommended',
        'prettier',
        'prettier/flowtype',
        'prettier/react',
    ],
    plugins: ['react', 'jsx-a11y', 'import', 'flowtype', 'prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'es5',
                bracketSpacing: false,
                jsxBracketSameLine: true,
                parser: 'flow',
                tabWidth: 4,
            },
        ],
        'block-scoped-var': 'warn',
        camelcase: 'warn',
        curly: ['error', 'all'],
    },
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
    },
    env: {
        es6: true,
        node: true,
    },
};
