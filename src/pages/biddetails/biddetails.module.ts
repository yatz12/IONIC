import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Biddetails } from './biddetails';

@NgModule({
  declarations: [
    Biddetails,
  ],
  imports: [
    IonicPageModule.forChild(Biddetails),
  ],
  exports: [
    Biddetails
  ]
})
export class BiddetailsModule {}
