package org.camunda.bpm.admin.impl.web.filter.plugin;

import org.camunda.bpm.admin.Admin;
import org.camunda.bpm.admin.plugin.spi.AdminPlugin;
import org.camunda.bpm.cockpit.Cockpit;
import org.camunda.bpm.cockpit.plugin.spi.CockpitPlugin;
import org.camunda.bpm.webapp.impl.engine.ProcessEnginesFilter;

public class AdminProcessEnginesFilter extends ProcessEnginesFilter<AdminPlugin> {
  
  public AdminProcessEnginesFilter() {
    super("admin", Admin.getRuntimeDelegate());
  }

}
