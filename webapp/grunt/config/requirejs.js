module.exports = function(config) {
  'use strict';

  var deps = [
    'angular'
  ];

  var rConf = {
    options: {
      stubModules: ['text'],

      //optimize: 'uglify2',
      optimize: 'none',
      preserveLicenseComments: false,
      generateSourceMaps: true,

      baseUrl: '<%= pkg.gruntConfig.pluginDir %>/',
      // baseUrl: config.clientDir,

      paths: {
        'angular': 'empty:',
        'text': 'bower_components/requirejs-text/text'
      }
    },

    core: {
      options: {
        out: '<%= pkg.gruntConfig.buildTarget %>/base/app/plugin.js',
        include: ['base/app/plugin'],
        exclude: ['text'],
        insertRequire: ['base/app/plugin']
      }
    },
    jobDefinition: {
      options: {
        out: '<%= pkg.gruntConfig.buildTarget %>/jobDefinition/app/plugin.js',
        include: ['jobDefinition/app/plugin'],
        exclude: ['text'],
        insertRequire: ['jobDefinition/app/plugin']
      }
    }

  };

  return rConf;
};
