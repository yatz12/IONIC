import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Logscreen } from './logscreen';

@NgModule({
  declarations: [
    Logscreen,
  ],
  imports: [
    IonicPageModule.forChild(Logscreen),
  ],
  exports: [
    Logscreen
  ]
})
export class LogscreenModule {}
