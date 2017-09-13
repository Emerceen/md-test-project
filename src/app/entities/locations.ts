export interface LocationsInterface {
  distance: number;
}

export class Locations {
  static fromData(data: LocationsInterface): Locations {
    return new Locations(data.distance);
  }

  constructor(
    public distance: number
  ) { }
}
