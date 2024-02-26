module.exports = {
    root: true,
    extends: '@react-native',
    rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'prettier/prettier': [
            'error',
            {
                arrowParens: 'avoid',
                bracketSameLine: true,
                singleQuote: true,
                trailingComma: false,
                semi: false,
                jsxSingleQuote: true,
                tabWidth: 4,
                endOfLine: 'auto',
                useTabs: false
            }
        ],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off'
    }
}
