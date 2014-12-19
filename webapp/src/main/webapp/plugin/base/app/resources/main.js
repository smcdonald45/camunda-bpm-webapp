define([
  'angular',
  './processDefinition',
  './processInstance'
], function(
  angular,
  processDefinitionResource,
  processInstanceResource
) {

  var ngModule = angular.module('cockpit.plugin.base.resources', []);

  ngModule.factory('PluginProcessDefinitionResource', processDefinitionResource);
  ngModule.factory('PluginProcessInstanceResource', processInstanceResource);

  return ngModule;
});

