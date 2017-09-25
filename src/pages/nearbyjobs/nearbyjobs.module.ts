import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Nearbyjobs } from './nearbyjobs';

@NgModule({
  declarations: [
    Nearbyjobs,
  ],
  imports: [
    IonicPageModule.forChild(Nearbyjobs),
  ],
  exports: [
    Nearbyjobs
  ]
})
export class NearbyjobsModule {}
