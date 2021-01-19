import { of } from 'rxjs';

import { OpenWeatherService } from './openweather.service';

describe('OpenWeatherService', () => {
  let sut: OpenWeatherService;

  let http;
  let configurationService;

  beforeEach(() => {
    http = {
      get: jest.fn()
    };

    configurationService = {
      baseUrl: 'mockbaseUrl'
    };

    sut = new OpenWeatherService(
      http,
      configurationService
    );
  });

  describe('getWeather', () => {
    const id = 'mockId';

    beforeEach(() => {
      http.get.mockReturnValue(of(null));
    });

    it('should send request for weather', () => {
      sut.getWeather(id).subscribe();

      expect(http.get).toHaveBeenCalledWith(
        'mockbaseUrl/weather',
        {
          params: { id, units: 'metric' }
        }
      );
    });
  });

  describe('getWeatherForecast', () => {
    const lat = 'mockLat';
    const lon = 'mockLon';
    const exclude = ['mockExclude1', 'mockExclude2'];

    beforeEach(() => {
      http.get.mockReturnValue(of(null));
    });

    it('should send request for forecast', () => {
      sut.getWeatherForecast(lat, lon, exclude).subscribe();

      expect(http.get).toHaveBeenCalledWith(
        'mockbaseUrl/onecall',
        {
          params: { lat, lon, exclude: 'mockExclude1,mockExclude2', units: 'metric' }
        }
      );
    });
  });
});
