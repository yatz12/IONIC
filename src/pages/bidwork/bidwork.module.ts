import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bidwork } from './bidwork';

@NgModule({
  declarations: [
    Bidwork,
  ],
  imports: [
    IonicPageModule.forChild(Bidwork),
  ],
  exports: [
    Bidwork
  ]
})
export class BidworkModule {}
