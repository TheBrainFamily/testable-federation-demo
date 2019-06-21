module.exports = function(wallaby) {
  return {
    files: [
      "services/**/*.js",
      "services/**/*.ts",
      {
        pattern: "services/**/*.test.js",
        instrument: false,
        load: false,
        ignore: true
      },
      {
        pattern: "services/**/*.test.ts",
        instrument: false,
        load: false,
        ignore: true
      },
      { pattern: "services/**/node_modules/**", ignore: true }
    ],
    tests: [
      "services/**/*.test.js",
      "services/**/*.test.ts",
      { pattern: "services/**/node_modules/**", ignore: true }
    ],

    env: {
      type: "node",
      runner: "node"
    },

    testFramework: "jest"
  };
};
