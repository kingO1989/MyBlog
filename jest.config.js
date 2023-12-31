module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.test.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    transform: {

        '^.+\\.(js|jsx)$': 'babel-jest',

    },
    transformIgnorePatterns: [
        '//node_modules'
    ],

    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/styleMock.js',
    }

    // setupFiles: ["./testenv.js"]
}