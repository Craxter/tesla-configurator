import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Color, Model } from '../../../core/models/model';
import { ConfiguratorService } from '../../configurator.service';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, FormsModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss',
})
export class Step1Component {
  models$: Observable<Model[]> = this.cs.getModels();
  private _model?: Model;
  private _color?: Color;

  get selectedModel(): Model | undefined {
    return this._model;
  }

  set selectedModel(model: Model | undefined) {
    this._model = model;
    this.cs.carSettings.update((settings) => ({
      ...settings,
      model,
      config: undefined,
    }));
    if (model) this.selectedColor = model.colors[0];
  }

  get selectedColor(): Color | undefined {
    return this._color;
  }

  set selectedColor(color: Color | undefined) {
    this._color = color;
    this.cs.carSettings.update((settings) => ({ ...settings, color }));
  }

  constructor(private cs: ConfiguratorService) {}

  ngOnInit(): void {
    const { model, color } = this.cs.carSettings();
    this._model = model;
    this._color = color;
  }
}
