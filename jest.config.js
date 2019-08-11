module.exports = {
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    globals: {
        'ts-jest': {
          diagnostics: false
        }
    },
    testPathIgnorePatterns: ['/node_modules/'],
    // setup enzyme
    snapshotSerializers: ["enzyme-to-json/serializer"],
    // jest-enzyme 环境配置有问题，暂时用不了。
    setupFilesAfterEnv: [
        "<rootDir>/config/setup-enzyme.js",
        "<rootDir>/config/setup-test.js"
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.{ts,tsx}",
        "!**/node_modules/**"
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file-mock.js",
        "\\.(css|scss)$": "<rootDir>/__mocks__/style-mock.js"
    }
}