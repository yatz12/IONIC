import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tradesmanlogin } from './tradesmanlogin';

@NgModule({
  declarations: [
    Tradesmanlogin,
  ],
  imports: [
    IonicPageModule.forChild(Tradesmanlogin),
  ],
  exports: [
    Tradesmanlogin
  ]
})
export class TradesmanloginModule {}
