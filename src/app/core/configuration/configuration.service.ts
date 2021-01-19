import { Injectable } from '@angular/core';

import { environment } from '@env/environment';

@Injectable()
export class ConfigurationService {
  get baseUrl(): string {
    return environment.baseApiUrl;
  }

  get appId(): string {
    return environment.appId;
  }
}
