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
        packages: [{"name":"cockpit-plugin-base",
                    "location":"'<%= pkg.gruntConfig.pluginDir %>/base/app/"}
                   ],
        baseUrl: '<%= pkg.gruntConfig.pluginDir %>',
        out: '<%= pkg.gruntConfig.buildTarget %>/base/app/plugin.js',
        include: ['base/app/plugin'],
        exclude: ['text']
      }
    },
    jobDefinition: {
      options: {
        packages: [{"name":"cockpit-plugin-jobDefinition",
                    "location":"<%= pkg.gruntConfig.pluginDir %>/jobDefinition/app/"}],
        baseUrl: '<%= pkg.gruntConfig.pluginDir %>',
        out: '<%= pkg.gruntConfig.buildTarget %>/jobDefinition/app/plugin.js',
        include: ['jobDefinition/app/plugin'],
        exclude: ['text']
      }
    }

  };

  return rConf;
};
