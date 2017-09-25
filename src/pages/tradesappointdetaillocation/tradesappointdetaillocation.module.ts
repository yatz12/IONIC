import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tradesappointdetaillocation } from './tradesappointdetaillocation';

@NgModule({
  declarations: [
    Tradesappointdetaillocation,
  ],
  imports: [
    IonicPageModule.forChild(Tradesappointdetaillocation),
  ],
  exports: [
    Tradesappointdetaillocation
  ]
})
export class TradesappointdetaillocationModule {}
