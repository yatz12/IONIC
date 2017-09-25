import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tradesmannext } from './tradesmannext';

@NgModule({
  declarations: [
    Tradesmannext,
  ],
  imports: [
    IonicPageModule.forChild(Tradesmannext),
  ],
  exports: [
    Tradesmannext
  ]
})
export class TradesmannextModule {}
