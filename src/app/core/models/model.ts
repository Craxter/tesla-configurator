export class Model {
  constructor(
    public code: string,
    public description: string,
    public colors: Color[]
  ) {}
}

export class Color {
  constructor(
    public code: string,
    public description: string,
    public price: number
  ) {}
}

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
