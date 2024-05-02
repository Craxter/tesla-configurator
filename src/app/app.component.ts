import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfiguratorComponent } from './feature/configurator/configurator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe, ConfiguratorComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = 'Angular';
}
