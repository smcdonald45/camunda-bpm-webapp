package org.camunda.bpm.cockpit.impl.web.filter.plugin;

import org.camunda.bpm.cockpit.Cockpit;
import org.camunda.bpm.cockpit.plugin.spi.CockpitPlugin;
import org.camunda.bpm.webapp.impl.engine.ProcessEnginesFilter;

public class CockpitProcessEnginesFilter extends ProcessEnginesFilter<CockpitPlugin> {
  
  public CockpitProcessEnginesFilter() {
    super("cockpit", Cockpit.getRuntimeDelegate());
  }

}
