import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

import { CitiesWeatherService } from './cities-weather.service';

@Component({
  selector: 'app-cities-weather',
  templateUrl: './cities-weather.component.html',
  styleUrls: ['./cities-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CitiesWeatherService]
})
export class CitiesWeatherComponent {

  developBy = 'Andrey Bubnov';

  @HostBinding('class.app-cities-weather') hostClass = true;

}
