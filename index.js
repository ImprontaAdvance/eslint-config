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
                trailingComma: 'all',
                bracketSpacing: false,
                jsxBracketSameLine: true,
                parser: 'flow',
                tabWidth: 4,
            },
        ],
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
