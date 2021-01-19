import { of } from 'rxjs';

import * as config from './cities-weather.config';
import { CitiesWeatherService } from './cities-weather.service';

describe('CitiesWeatherService', () => {
  let sut: CitiesWeatherService;

  let openWeather;

  beforeEach(() => {
    openWeather = {
      getWeather: jest.fn(),
      getWeatherForecast: jest.fn()
    };

    sut = new CitiesWeatherService(
      openWeather
    );
  });

  describe('$cities', () => {
    const citiesIds = ['mockId1', 'mockId2', 'mockId3'];

    beforeEach(() => {
      openWeather.getWeather.mockReturnValue(() => of(null));
    });

    it('should get weather data according to citiesIds', () => {
      sut.citiesIds.next(citiesIds);

      sut.$cities.subscribe();

      expect(openWeather.getWeather).toHaveBeenNthCalledWith(1, 'mockId1');
      expect(openWeather.getWeather).toHaveBeenNthCalledWith(2, 'mockId2');
      expect(openWeather.getWeather).toHaveBeenNthCalledWith(3, 'mockId3');
      expect(openWeather.getWeather).toHaveBeenCalledTimes(3);
    });
  });

  describe('$getForecast', () => {
    const lat = 'mockLat';
    const lon = 'mockLon';

    beforeEach(() => {
      openWeather.getWeatherForecast.mockReturnValue(of(null));
    });

    it('should get forecast data according to coord', () => {
      sut.$getForecast(lat, lon).subscribe();

      expect(openWeather.getWeatherForecast).toHaveBeenCalledWith(lat, lon, config.EXCLUDE_DATA);
    });
  });
});
