import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tradesmanpostdetail } from './tradesmanpostdetail';

@NgModule({
  declarations: [
    Tradesmanpostdetail,
  ],
  imports: [
    IonicPageModule.forChild(Tradesmanpostdetail),
  ],
  exports: [
    Tradesmanpostdetail
  ]
})
export class TradesmanpostdetailModule {}
