/* jshint node:true */
"use strict";

module.exports = function(grunt) {
  // Measure the time each task takes to run
  require('time-grunt')(grunt);

  // Load plugin configuration from `tasks/options`.
  require('load-grunt-config')(grunt, {
    init: true,
    config: {
      pkg: grunt.file.readJSON("package.json")
    }
  });
};

