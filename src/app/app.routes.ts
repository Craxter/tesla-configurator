import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/configurator/configurator.routes').then(m => m.routes)
  }
];
