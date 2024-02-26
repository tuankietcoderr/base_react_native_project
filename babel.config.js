module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'module:react-native-dotenv',
            {
                allowUndefined: true
            }
        ],
        [
            'module-resolver',
            {
                alias: {
                    '@': './src'
                }
            }
        ],
        ['react-native-reanimated/plugin']
    ]
}
