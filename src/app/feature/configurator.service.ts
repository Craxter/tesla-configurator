import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { CarConfig } from '../core/models/car-config';
import { Model } from '../core/models/model';
import { Option } from '../core/models/option';

@Injectable({
  providedIn: 'root',
})
export class ConfiguratorService {
  carSettings: WritableSignal<CarConfig> = signal(new CarConfig());

  constructor(private http: HttpClient) {}

  getModels(): Observable<Model[]> {
    return this.http.get<Model[]>('/models');
  }

  getOptions(model: string): Observable<Option> {
    return this.http.get<Option>(`/options/${model}`);
  }
}
