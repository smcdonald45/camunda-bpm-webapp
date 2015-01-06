module.exports = function(config) {
  'use strict';
  var grunt = config.grunt;

  return {
    options: {},

    plugin: {
     files: [
        {
          expand: true,
          cwd: '<%= pkg.gruntConfig.pluginDir %>/',
          src: [
            '**'
          ],
          dest: '<%= pkg.gruntConfig.buildTarget %>/'
        }
      ]
    }
  };
};
