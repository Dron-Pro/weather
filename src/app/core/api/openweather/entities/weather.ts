export class Weather {
  constructor(
    readonly id: number,
    readonly coord: {
      lat: number;
      lon: number;
    },
    readonly name: string,
    readonly temp: number,
    readonly speed: number
  ) {}
}
