define(['angular', './views/main', './data/main'],
function(angular, viewsModule, dataModule) {
  angular.module('cockpit.plugin.jobDefinition', [viewsModule.name, dataModule.name]);
});
