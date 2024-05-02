import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { ConfiguratorService } from '../configurator.service';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';

const Step2Guard: CanActivateFn = () => {
  return inject(ConfiguratorService).carSettings().model
    ? true
    : inject(Router).navigate(['']);
};

const Step3Guard: CanActivateFn = () => {
  return inject(ConfiguratorService).carSettings().config
    ? true
    : inject(Router).navigate(['step2'], { skipLocationChange: true });
};

export const routes: Routes = [
  { path: '', component: Step1Component },
  { path: 'step2', component: Step2Component, canActivate: [Step2Guard] },
  { path: 'step3', component: Step3Component, canActivate: [Step3Guard] },
];
