import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Config, Option } from '../../../core/models/option';
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
  selectedConfig?: Config;

  get towHitch(): boolean {
    return this.cs.carSettings().hasTow;
  }

  get yokeSteering(): boolean {
    return this.cs.carSettings().hasYoke;
  }

  constructor(private cs: ConfiguratorService) {}

  ngOnInit(): void {
    this.cs
      .getOptions(this.cs.carSettings().model?.code ?? '')
      .subscribe((options) => {
        this.options = options;
        this.selectedConfig = this.cs.carSettings().config;
      });
  }

  sameConfig(c1: Config, c2: Config): boolean {
    return c1?.id === c2?.id;
  }

  updateConfig(): void {
    if (this.selectedConfig?.id !== this.cs.carSettings().config?.id) {
      this.cs.carSettings.update((settings) => ({
        ...settings,
        config: this.selectedConfig,
      }));
    }
  }

  checkElem(elem: string, value: Event): void {
    this.cs.carSettings.update((settings) => ({
      ...settings,
      [elem]: (value.target as HTMLInputElement).checked,
    }));
  }
}
