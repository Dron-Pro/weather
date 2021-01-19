import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { exhaustMap, shareReplay } from 'rxjs/operators';

import { OpenWeatherService, Weather, Forecast } from '@core/api';
import * as config from './cities-weather.config';

@Injectable()
export class CitiesWeatherService {
  citiesIds = new BehaviorSubject<string[]>(config.CITIES_IDS);

  $cities: Observable<Weather[]> = this.citiesIds.asObservable().pipe(
    exhaustMap(ids => forkJoin(ids.map(id => this.openWeather.getWeather(id)))),
    shareReplay(1)
  );

  constructor(
    private openWeather: OpenWeatherService
  ) {}

  refresh(): void {
    this.citiesIds.next(this.citiesIds.getValue());
  }

  $getForecast(lat: string, lon: string): Observable<Forecast> {
    return this.openWeather.getWeatherForecast(lat, lon, config.EXCLUDE_DATA);
  }
}
