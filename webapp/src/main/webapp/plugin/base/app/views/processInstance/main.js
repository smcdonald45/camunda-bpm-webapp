define([
  'angular',
  './incidentsTab',
  './variableInstancesTab',
  './updateSuspensionStateDialog',
  './jobRetryDialog',
  './cancelProcessInstanceDialog',
  './activityInstanceStatisticsOverlay',
  './addVariableDialog',
  './addVariableAction',
  './cancelProcessInstanceAction',
  './userTasksTable',
  './updateSuspensionStateAction',
  './jobRetryBulkDialog',
  './calledProcessInstanceTable',
  './variableInstanceInspectDialog',
  './variableInstanceUploadDialog',
  './jobRetryBulkAction'
], function(
  angular,
  incidentsTab,
  variableInstancesTab,
  updateSuspensionStateDialog,
  jobRetryDialog,
  cancelProcessInstanceDialog,
  activityInstanceStatisticsOverlay,
  addVariableDialog,
  addVariableAction,
  cancelProcessInstanceAction,
  userTasksTable,
  updateSuspensionStateAction,
  jobRetryBulkDialog,
  calledProcessInstanceTable,
  variableInstanceInspectDialog,
  variableInstanceUploadDialog,
  jobRetryBulkAction
) {
  'use strict';

  var ngModule = angular.module("cockpit.plugin.base.views.processInstance", []);

  ngModule.config(incidentsTab);
  ngModule.config(variableInstancesTab);
  ngModule.config(updateSuspensionStateDialog);
  ngModule.config(jobRetryDialog);
  ngModule.config(cancelProcessInstanceDialog);
  ngModule.config(activityInstanceStatisticsOverlay);
  ngModule.config(addVariableDialog);
  ngModule.config(addVariableAction);
  ngModule.config(cancelProcessInstanceAction);
  ngModule.config(userTasksTable);
  ngModule.config(updateSuspensionStateAction);
  ngModule.config(jobRetryBulkDialog);
  ngModule.config(calledProcessInstanceTable);
  ngModule.config(variableInstanceInspectDialog);
  ngModule.config(variableInstanceUploadDialog);
  ngModule.config(jobRetryBulkAction);

  return ngModule;

});
