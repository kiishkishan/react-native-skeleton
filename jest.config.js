/*
* Cellcard Selfcare Application 17.6.2019
* Copyright © 2019 Cellcard. All rights reserved.
 */

module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/e2e/',
        '/storybook/',
        '/android/',
        '/ios/',
        '/app/utilities/environments/'
    ],
    collectCoverageFrom: [
        'app/**/*.{js,jsx}',
        '!**/storybook/**',
        '!**/app/assets/plugins/**',
        '!**/node_modules/**',
        '!**/e2e/**',
        '!**/ios/**',
        '!**/app/utilities/environments/**'
    ],
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?react-native|react-navigation|@react-native-community/AsyncStorage)'
    ],
    collectCoverage: true,
    setupFiles: ['./setupJest.js'],
    automock: false
};
