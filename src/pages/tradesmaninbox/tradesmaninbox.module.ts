import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tradesmaninbox } from './tradesmaninbox';

@NgModule({
  declarations: [
    Tradesmaninbox,
  ],
  imports: [
    IonicPageModule.forChild(Tradesmaninbox),
  ],
  exports: [
    Tradesmaninbox
  ]
})
export class TradesmaninboxModule {}
