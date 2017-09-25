import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bidcategorydetail } from './bidcategorydetail';

@NgModule({
  declarations: [
    Bidcategorydetail,
  ],
  imports: [
    IonicPageModule.forChild(Bidcategorydetail),
  ],
  exports: [
    Bidcategorydetail
  ]
})
export class BidcategorydetailModule {}
