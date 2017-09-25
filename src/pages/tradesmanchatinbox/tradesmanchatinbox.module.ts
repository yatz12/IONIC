import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tradesmanchatinbox } from './tradesmanchatinbox';

@NgModule({
  declarations: [
    Tradesmanchatinbox,
  ],
  imports: [
    IonicPageModule.forChild(Tradesmanchatinbox),
  ],
  exports: [
    Tradesmanchatinbox
  ]
})
export class TradesmanchatinboxModule {}
