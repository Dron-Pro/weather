import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { CustomMaterialModule } from '@shared/custom-material';
import { CitiesWeatherRoutingModule } from './cities-weather.routing';
import { CitiesWeatherComponent } from './cities-weather.component';
import { CitiesWeatherListComponent, CityWeatherForecastComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    ScrollingModule,
    CustomMaterialModule,
    CitiesWeatherRoutingModule
  ],
  declarations: [
    CitiesWeatherComponent,
    CitiesWeatherListComponent,
    CityWeatherForecastComponent
  ]
})
export class CitiesWeatherModule {}
