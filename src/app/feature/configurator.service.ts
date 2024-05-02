import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Color, Config, Model, Option } from '../core/models/model';

@Injectable({
  providedIn: 'root',
})
export class ConfiguratorService {
  carSettings: WritableSignal<{
    model?: Model;
    color?: Color;
    config?: Config;
    hasTow: boolean;
    hasYoke: boolean;
  }> = signal({
    hasTow: false,
    hasYoke: false,
  });

  constructor(private http: HttpClient) {}

  getModels(): Observable<Model[]> {
    return this.http.get<Model[]>('/models');
  }

  getOptions(model: string): Observable<Option> {
    return this.http.get<Option>(`/options/${model}`);
  }
}
