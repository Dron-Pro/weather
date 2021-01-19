import { NgModule } from '@angular/core';

import { environment } from '@env/environment';
import { Environment } from './environment.model';
import { ConfigurationService } from './configuration.service';

@NgModule({
  providers: [
    {
      provide: Environment,
      useValue: environment
    },
    ConfigurationService
  ]
})
export class ConfigurationModule {}
