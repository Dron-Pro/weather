import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiesWeatherComponent } from './cities-weather.component';
import { CitiesWeatherListComponent, CityWeatherForecastComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: CitiesWeatherComponent,
    children: [
      {
        path: '',
        redirectTo: 'cities',
        pathMatch: 'full'
      },
      {
        path: 'cities',
        component: CitiesWeatherListComponent
      },
      {
        path: 'cities/:id',
        component: CityWeatherForecastComponent
      },
      {
        path: '**',
        redirectTo: 'cities',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitiesWeatherRoutingModule { }
