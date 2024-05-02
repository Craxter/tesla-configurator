import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ConfiguratorService } from '../configurator.service';

@Component({
  selector: 'app-configurator',
  standalone: true,
  imports: [JsonPipe, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './configurator.component.html',
  styleUrl: './configurator.component.scss',
})
export class ConfiguratorComponent {
  carSettings$ = this.cs.carSettings;

  constructor(private cs: ConfiguratorService) {}
}
