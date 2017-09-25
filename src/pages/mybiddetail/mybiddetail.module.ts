import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mybiddetail } from './mybiddetail';

@NgModule({
  declarations: [
    Mybiddetail,
  ],
  imports: [
    IonicPageModule.forChild(Mybiddetail),
  ],
  exports: [
    Mybiddetail
  ]
})
export class MybiddetailModule {}
