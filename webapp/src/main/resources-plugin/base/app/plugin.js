/* global define: false */

/**
 * @namespace cam.cockpit.plugin
 */

/**
 * @namespace cam.cockpit.plugin.base
 */
console.log("loaded plugin js");
require(['angular',
        './views/main',
        './resources/main',
        './data/main'
], function(angular, viewsModule, resourcesModule, dataModule) {
  console.log("defining cockpit base plugin");
  debugger;
  angular.module('cockpit.plugin.base', [viewsModule.name, resourcesModule.name, dataModule.name]);
});
