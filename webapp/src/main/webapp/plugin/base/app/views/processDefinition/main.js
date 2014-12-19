define([
  'angular',
  './processInstanceTable',
  './calledProcessDefinitionTable',
  './updateSuspensionStateDialog',
  './activityInstanceStatisticsOverlay',
  './updateSuspensionStateAction'
], function(
  angular,
  processInstanceTable,
  calledProcessDefinitionTable,
  updateSuspensionStateDialog,
  activityInstanceStatisticsOverlay,
  updateSuspensionStateAction
) {
  'use strict';

  var ngModule = angular.module('cockpit.plugin.base.views.processDefinition', []);

  ngModule.config(processInstanceTable);
  ngModule.config(calledProcessDefinitionTable);
  ngModule.config(updateSuspensionStateDialog);
  ngModule.config(activityInstanceStatisticsOverlay);
  ngModule.config(updateSuspensionStateAction);

  return ngModule;

});

