module.exports = (wallaby) => {
  const path = require('path');
  return {
    debug: true,
    testFramework: 'mocha',
    files: [
      {pattern: 'modules/**/node_modules/**', ignore: true},
      {pattern: 'modules/**/imports/**', ignore: true},
      {pattern: 'modules/**/*-spec.js', ignore: true},
      'modules/atlassian-plugin/atlassian-connect.json',
      'modules/**/*.js'
    ],
    tests: [
      {pattern: 'modules/**/node_modules/**', ignore: true},
      {pattern: 'modules/**/imports/**', ignore: true},
      'modules/**/*-spec.js',
    ],
    env: {type: 'node'},
    compilers: {'**/*.js': wallaby.compilers.babel()},
    setup: (wallaby) => {
      require("babel-polyfill");
    },
  }
};