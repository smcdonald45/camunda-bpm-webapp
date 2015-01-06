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
        'text': '../../bower_components/requirejs-text/text'
      }
    },

    core: {
      options: {
        packages: [{"name":"cockpit-plugin-base",
                    "location":"'<%= pkg.gruntConfig.pluginDir %>/base/app/",
                    "main":"plugin"}
                   ],
        baseUrl: '<%= pkg.gruntConfig.pluginDir %>/base/app/',
        out: '<%= pkg.gruntConfig.buildTarget %>/base/app/plugin.js',
        include: ['plugin'],
        exclude: ['text']
      }
    },
    jobDefinition: {
      options: {
        packages: [{"name":"cockpit-plugin-jobDefinition",
                    "location":"<%= pkg.gruntConfig.pluginDir %>/jobDefinition/app/",
                    "main":"plugin"}],
        baseUrl: '<%= pkg.gruntConfig.pluginDir %>/jobDefinition/app/',
        out: '<%= pkg.gruntConfig.buildTarget %>/jobDefinition/app/plugin.js',
        include: ['plugin'],
        exclude: ['text']
      }
    }

  };

  return rConf;
};
