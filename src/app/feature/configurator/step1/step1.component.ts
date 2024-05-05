import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { CarConfig } from '../../../core/models/car-config';
import { Color, Model } from '../../../core/models/model';
import { ConfiguratorService } from '../../configurator.service';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, FormsModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss',
})
export class Step1Component implements OnInit{
  models$: Observable<Model[]> = this.cs.getModels();
  public selectedModel?: Model;
  public selectedColor?: Color;

  constructor(private cs: ConfiguratorService) {}

  ngOnInit(): void {
    const { model, color } = this.cs.carSettings();
    this.selectedModel = model;
    this.selectedColor = color;
  }

  sameModel(m1: Model, m2: Model): boolean {
    return m1?.code === m2?.code;
  }

  updateModel(): void {
    if (this.selectedModel?.code !== this.cs.carSettings().model?.code) {
      this.selectedColor = this.selectedModel?.colors[0];
      this.cs.carSettings.set(
        new CarConfig(this.selectedModel, this.selectedColor)
      );
    }
  }

  updateColor(): void {
    if (this.selectedColor?.code !== this.cs.carSettings().color?.code) {
      this.cs.carSettings.update((settings) => ({
        ...settings,
        color: this.selectedColor,
      }));
    }
  }
}
