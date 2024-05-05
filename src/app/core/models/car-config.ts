import { Color, Model } from './model';
import { Config } from './option';

export class CarConfig {
  constructor(
    public model?: Model,
    public color?: Color,
    public config?: Config,
    public hasTow: boolean = false,
    public hasYoke: boolean = false
  ) {}
}
