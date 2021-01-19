import { Injectable } from '@angular/core';

import { Environment } from './environment.model';

@Injectable()
export class ConfigurationService {
  get baseUrl(): string {
    return this.environment.baseApiUrl;
  }

  get appId(): string {
    return this.environment.appId;
  }

  constructor(
    private environment: Environment
  ) {}
}
