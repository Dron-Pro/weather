import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ConfigurationModule } from './configuration';
import { InterceptorsModule } from './interceptors';
import { ApiModule } from './api';

@NgModule({
    imports: [
        HttpClientModule,
        ConfigurationModule,
        InterceptorsModule,
        ApiModule
    ]
})
export class CoreModule {}
