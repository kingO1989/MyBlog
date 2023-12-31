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
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/src/styleMock.js',
    }

    // setupFiles: ["./testenv.js"]
}