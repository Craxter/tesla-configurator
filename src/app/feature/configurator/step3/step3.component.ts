import { CurrencyPipe } from '@angular/common';
import { Component, Signal, computed } from '@angular/core';
import { ConfiguratorService } from '../../configurator.service';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss',
})
export class Step3Component {
  carConfig = this.cs.carSettings;
  total: Signal<number> = computed(
    () =>
      (this.carConfig().color?.price ?? 0) +
      (this.carConfig().config?.price ?? 0) +
      (this.carConfig().hasTow ? 1000 : 0) +
      (this.carConfig().hasYoke ? 1000 : 0)
  );
  constructor(private cs: ConfiguratorService) {}
}
