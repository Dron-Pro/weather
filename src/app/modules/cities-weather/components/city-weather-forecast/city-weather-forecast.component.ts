import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, shareReplay } from 'rxjs/operators';

import { CitiesWeatherService } from '../../cities-weather.service';

@Component({
  selector: 'app-city-weather-forecast',
  templateUrl: './city-weather-forecast.component.html',
  styleUrls: ['./city-weather-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityWeatherForecastComponent {

  $forecast = this.route.queryParamMap.pipe(
    switchMap(queryParamMap => this.citiesWeather.$getForecast(queryParamMap.get('lat'), queryParamMap.get('lon')))
  ).pipe(shareReplay(1));

  @HostBinding('class.app-city-weather-forecast') hostClass = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private citiesWeather: CitiesWeatherService
  ) {}

  navigateToCities(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
