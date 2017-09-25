import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Nearbyjobsdetail } from './nearbyjobsdetail';

@NgModule({
  declarations: [
    Nearbyjobsdetail,
  ],
  imports: [
    IonicPageModule.forChild(Nearbyjobsdetail),
  ],
  exports: [
    Nearbyjobsdetail
  ]
})
export class NearbyjobsdetailModule {}
