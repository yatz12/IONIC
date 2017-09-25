import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tradesmanappointdetail } from './tradesmanappointdetail';

@NgModule({
  declarations: [
    Tradesmanappointdetail,
  ],
  imports: [
    IonicPageModule.forChild(Tradesmanappointdetail),
  ],
  exports: [
    Tradesmanappointdetail
  ]
})
export class TradesmanappointdetailModule {}
