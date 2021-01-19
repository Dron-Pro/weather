import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ConfigurationService } from '@core/configuration';
import { Weather } from './entities/weather';
import { Forecast } from './entities/forecast';
import { WeatherDto } from './entities/dto/weather-dto';
import { ForecastDto } from './entities/dto/forecast-dto';
import { Hour } from './entities/hour';

@Injectable()
export class OpenWeatherService {

  constructor(
    private http: HttpClient,
    private configuration: ConfigurationService
  ) {}

  getWeather(id: string): Observable<Weather> {
    return this.http.get<WeatherDto>(
      `${this.configuration.baseUrl}/weather`,
      {
        params: { id, units: 'metric' }
      }
    ).pipe(
      map(this.mapWeather)
    );
  }

  getWeatherForecast(lat: string, lon: string, exclude: string[]): Observable<Forecast> {
    return this.http.get<ForecastDto>(
      `${this.configuration.baseUrl}/onecall`,
      {
        params: { lat, lon, exclude: exclude.join(','), units: 'metric' }
      }
    ).pipe(
      map(this.mapForecast)
    );
  }

  private mapWeather(data: WeatherDto): Weather {
    return new Weather(
      data.id,
      data.coord,
      data.name,
      data.main.temp,
      data.wind.speed
    );
  }

  private mapForecast(data: ForecastDto): Forecast {
    return new Forecast(
      data.timezone,
      data.hourly.map(({ dt, temp, wind_speed }) => new Hour(dt, temp, wind_speed))
    );
  }
}
