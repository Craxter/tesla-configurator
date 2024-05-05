import { Routes } from '@angular/router';
import { ConfiguratorComponent } from './feature/configurator/configurator.component';

export const routes: Routes = [
  {
    path: '',
    component: ConfiguratorComponent,
    loadChildren: () =>
      import('./feature/configurator/configurator.routes').then(
        (m) => m.routes
      ),
  },
];
