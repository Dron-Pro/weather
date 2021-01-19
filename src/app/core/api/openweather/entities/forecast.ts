import { Hour } from './hour';

export class Forecast {
  constructor(
    readonly timezone: string,
    readonly hourly: Hour[]
  ) {}
}
