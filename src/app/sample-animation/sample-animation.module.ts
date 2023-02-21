import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { IonicModule } from '@ionic/angular';

import { SampleAnimationPageRoutingModule } from './sample-animation-routing.module';

import { SampleAnimationPage } from './sample-animation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SampleAnimationPageRoutingModule,
    // BrowserAnimationsModule
  ],
  declarations: [SampleAnimationPage]
})
export class SampleAnimationPageModule {}
