import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tradesmansignup } from './tradesmansignup';

@NgModule({
  declarations: [
    Tradesmansignup,
  ],
  imports: [
    IonicPageModule.forChild(Tradesmansignup),
  ],
  exports: [
    Tradesmansignup
  ]
})
export class TradesmansignupModule {}
