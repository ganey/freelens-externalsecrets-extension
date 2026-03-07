module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@freelensapp/extensions$": "<rootDir>/__mocks__/@freelensapp/extensions.ts",
    "^@freelensapp/extensions/renderer$": "<rootDir>/__mocks__/@freelensapp/extensions.ts",
  },
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
};
