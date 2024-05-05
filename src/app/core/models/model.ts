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
