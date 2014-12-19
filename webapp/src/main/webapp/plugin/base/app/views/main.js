define([
  'angular',
  './dashboard/main',
  './processDefinition/main',
  './processInstance/main'
], function(
  angular,
  dashboardModule,
  processDefinitionModule,
  processInstanceModule
) {

  var ngModule = angular.module('cockpit.plugin.base.views', [
    dashboardModule.name,
    processDefinitionModule.name,
    processInstanceModule.name
  ]);

  return ngModule;

});
