import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tradesmanappointement } from './tradesmanappointement';

@NgModule({
  declarations: [
    Tradesmanappointement,
  ],
  imports: [
    IonicPageModule.forChild(Tradesmanappointement),
  ],
  exports: [
    Tradesmanappointement
  ]
})
export class TradesmanappointementModule {}
