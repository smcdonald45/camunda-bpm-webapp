define([
  'angular',
  './dashboard/processDefinitionStatisticsData',
  './processDefinition/activityInstanceStatisticsData'
], function(
  angular,
  processDefinitionStatisticsData,
  activityInstanceStatisticsData
) {

  var ngModule = angular.module('cockpit.plugin.base.data', []);

  ngModule.config(processDefinitionStatisticsData);
  ngModule.config(activityInstanceStatisticsData);

  return ngModule;
});

