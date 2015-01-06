module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  var pkg = require('./package.json');

  var config = pkg.gruntConfig || {};

  config.grunt = grunt;
  config.pkg = pkg;

  grunt.initConfig({
    // the default value should be the "dev" destination
    // this is not exactly the best solution, but otherwise, when tasks are "rerunned"
    // with the watch tasks, the value get lost...
    // so, it's fine for the "dist" build mode
    // who will override the value but only run once
    buildTarget:      config.devTarget,

    pkg:              pkg,

    requirejs:        require('./grunt/config/requirejs')(config),

    //copy:             require('./grunt/config/copy')(config),

    clean:            require('./grunt/config/clean')(config)
  });

  grunt.registerTask('build', function() {
    grunt.task.run(['clean', 'requirejs']);
  });

  grunt.registerTask('default', ['build']);
};
