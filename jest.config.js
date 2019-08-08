module.exports = {
    "roots": ["<rootDir>/src"],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
      ],
      // setup enzyme
      setupFilesAfterEnv: ["<rootDir>/src/config/setup-test.ts"],
      snapshotSerializers: ["enzyme-to-json/serializer"]
}