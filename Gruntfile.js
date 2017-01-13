`use strict`;
require('dotenv-safe').config();
const path = require('path');

const gruntConfig = (grunt) => {
  //load-grunt-tasks loads all grunt tasks automatically
  require(`load-grunt-tasks`)(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON(`package.json`),
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          // captureFile: 'results.txt', // Optionally capture the reporter output to a file
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false, // Optionally clear the require cache before running tests (defaults to false)
          noFail: false // Optionally set to not fail on failed tests (will still fail on other errors)
        },
        src: ['./microservice/**/spec.js', './microservice/**/*.spec.js']
      }
    },
    jshint: {
      cucumber: ['Gruntfile.js', 'test/features/step_definitions/*.js'],
      options: {
        node: true,
        strict: true,
        globalstrict: true
      }
    },
    eslint: {
      options: {
        configFile: '.eslintrc.yml'
      },
      target: ['./srv/**/*.js', './src/**/*.js']
    },
    //create markdown file from git commit logs
    conventionalChangelog: {
      options: {
        changelogOpts: {
          // conventional-changelog options go here
          preset: 'angular',
          outputUnreleased: true,
          releaseCount: 0
        },
        context: {
          // context goes here
        },
        gitRawCommitsOpts: {
          // git-raw-commits options go here
        },
        parserOpts: {
          // conventional-commits-parser options go here
        },
        writerOpts: {
          // conventional-changelog-writer options go here
        }
      },
      release: {
        src: 'CHANGELOG.md',
        dest: 'CHANGELOG.md'
      }
    }

  });

  grunt.registerTask('default', ['jshint', 'exec']);
};

module.exports = gruntConfig;
