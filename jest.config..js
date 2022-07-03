const path = require("path");

// Third-party libraries distributed as ES2015 modules tha must be transpiled with Babel.
const ES6Deps = require("./es6.deps.js");

// Jest configuration
// https://jestjs.io/docs/en/configuration
module.exports = {
  // Enable DOM tests support
  testEnvironment: "jsdom",

  // Base URL for the jsdom environment
  testURL: "http://localhost",

  // Test all files in the "test" folder either suffixed with "-test.js", "-test.jsx", or
  // having ".test.js", ".test.jsx" extensions
  testRegex: "/.*[-.]test\\.[tj]sx?$",

  transform: {
    // Transform all js and jsx files with Babel
    "\\.jsx?$": path.join(__dirname, "jest.transformer.js"),
    "^.+\\.tsx?$": path.join(__dirname, "jest.transformer.js"),
    "^.+\\.s?css$": path.join(__dirname, "..", "testing/css-stub.js"),
  },

  // Force transpilation of third-party libraries distributed as ES2015 modules. Skip the rest
  transformIgnorePatterns: [`node_modules[\\\/](?!${ES6Deps.join("|")})`],

  // Code search paths
  modulePaths: ["src/"],

  setupFiles: [
    // Configure environment variables for the test environment
    path.join(__dirname, "jest.env.js"),

    // Configure Enzyme support
    path.join(__dirname, "jest.enzyme.js"),

    // Fix some react server-pside quirks
    path.join(__dirname, "jest.react.js"),

    // Load the amiga-core polyfills
    require.resolve("amiga-polyfills"),

    // Configure global data
    path.join(__dirname, "jest.globals.js"),

  ],

  snapshotSerializers: [
    // Serialize React elements rendered with Enzyme
    "enzyme-to-json/serializer",
  ],

  // Imported CSS/images mocks
  moduleNameMapper: {
    "\\.css$": path.join(__dirname, "jest.nullmapper.js"),
    "\\.scss$": path.join(__dirname, "jest.nullmapper.js"),
    "\\.icon\\.svg$": path.join(__dirname, "jest.svgiconmapper.js"),
    "\\.(png|jpe?g|gif|svg)$": path.join(__dirname, "jest.nullmapper.js"),
  },

  // Do not create coverage reports by default. Use the --coverage CLI option to override it
  collectCoverage: false,

  // Dump the coverage reports into the "coverage" folder
  coverageDirectory: "coverage",

  // Project's path which coverage will be reported
  //collectCoverageFrom: ["src/**/*.js", "src/**/*.jsx", "src/**/*.tsx", "src/**/*.ts"],
  collectCoverageFrom: ["**/*.jsx", "**/*.ts", "**/*.tsx", "!**/index.ts", "!**/index.tsx"],

  // Generate coverage reports in textm HTML, lcov and clover format
  coverageReporters: ["text", "html", "lcov", "clover"],

  // Postprocess test result to create a Bamboo format compatible report
  testResultsProcessor: "jest-bamboo-reporter",

  reporters: ["default", "jest-sonar"],

  // Avoid infinite loops when using the --watch option. The test-report.json
  // (jest-bamboo-reporter) gets regenerated on each test run.
  watchPathIgnorePatterns: ["<rootDir>/test-report.json"],
};
