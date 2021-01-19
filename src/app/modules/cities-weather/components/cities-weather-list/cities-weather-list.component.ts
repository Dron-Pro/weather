import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Weather } from '@core/api';
import { CitiesWeatherService } from '../../cities-weather.service';

@Component({
  selector: 'app-cities-weather-list',
  templateUrl: './cities-weather-list.component.html',
  styleUrls: ['./cities-weather-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesWeatherListComponent {

  $cities = this.citiesWeather.$cities;

  @HostBinding('class.app-cities-weather-list') hostClass = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private citiesWeather: CitiesWeatherService
  ) {}

  refresh(): void {
    this.citiesWeather.refresh();
  }

  navigateToForecast({ id, coord: { lat, lon } }: Weather): void {
    this.router.navigate([`./${id}`], { queryParams: { lat, lon }, relativeTo: this.route });
  }
}
