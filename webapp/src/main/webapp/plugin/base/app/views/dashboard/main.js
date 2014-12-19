define([
  'angular',
  './processDefinitionList',
  './processDefinitionTiles'
], function(
  angular,
  processDefinitionList,
  processDefinitionTiles
) {
  'use strict';

  var ngModule = angular.module('cockpit.plugin.base.views.dashboard', []);

  ngModule.config(processDefinitionList);
  ngModule.config(processDefinitionTiles);

  return ngModule;

});
