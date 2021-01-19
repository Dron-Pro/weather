import { NgModule } from '@angular/core';

import { OpenWeatherService } from './openweather/openweather.service';

@NgModule({
    providers: [
        OpenWeatherService
    ]
})
export class ApiModule {}
