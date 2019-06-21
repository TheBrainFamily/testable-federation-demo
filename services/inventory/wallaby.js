module.exports = function(wallaby) {
  return {
    files: [
      "*.js",
      "*.ts",
      {
        pattern: "*.test.js",
        instrument: false,
        load: false,
        ignore: true
      },
      {
        pattern: "*.test.ts",
        instrument: false,
        load: false,
        ignore: true
      },
    ],
    tests: [
      "*.test.js",
      "*.test.ts",
    ],

    env: {
      type: "node",
      runner: "node"
    },

    testFramework: "jest"
  };
};
