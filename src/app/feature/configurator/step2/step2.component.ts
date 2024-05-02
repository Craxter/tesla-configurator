import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Config, Option } from '../../../core/models/model';
import { ConfiguratorService } from '../../configurator.service';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss',
})
export class Step2Component implements OnInit {
  options?: Option;
  _config?: Config;
  _tow = false;
  _yoke = false;

  get selectedConfig(): Config | undefined {
    return this._config;
  }

  set selectedConfig(config: Config | undefined) {
    this._config = config;
    this.cs.carSettings.update((settings) => ({ ...settings, config }));
  }

  get towHitch(): boolean {
    return this._tow;
  }

  set towHitch(hasTow: boolean) {
    this._tow = hasTow;
    this.cs.carSettings.update((settings) => ({ ...settings, hasTow }));
  }

  get yokeSteering(): boolean {
    return this._yoke;
  }

  set yokeSteering(hasYoke: boolean) {
    this._yoke = hasYoke;
    this.cs.carSettings.update((settings) => ({ ...settings, hasYoke }));
  }

  constructor(private cs: ConfiguratorService) {}

  ngOnInit(): void {
    this.cs
      .getOptions(this.cs.carSettings().model?.code ?? 'X')
      .subscribe((options) => {
        this.options = options;
        this._config = this.cs.carSettings().config;
        this._tow = this.cs.carSettings().hasTow;
        this._yoke = this.cs.carSettings().hasYoke;
      });
  }
}
