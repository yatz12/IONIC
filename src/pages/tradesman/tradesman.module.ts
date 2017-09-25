import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tradesman } from './tradesman';

@NgModule({
  declarations: [
    Tradesman,
  ],
  imports: [
    IonicPageModule.forChild(Tradesman),
  ],
  exports: [
    Tradesman
  ]
})
export class TradesmanModule {}
