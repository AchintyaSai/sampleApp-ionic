import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampleAnimationPage } from './sample-animation.page';

const routes: Routes = [
  {
    path: '',
    component: SampleAnimationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleAnimationPageRoutingModule {}
