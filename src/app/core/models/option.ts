export class Option {
  constructor(
    public configs: Config[],
    public towHitch: boolean,
    public yoke: boolean
  ) {}
}

export class Config {
  constructor(
    public id: number,
    public description: string,
    public range: number,
    public speed: number,
    public price: number
  ) {}
}
