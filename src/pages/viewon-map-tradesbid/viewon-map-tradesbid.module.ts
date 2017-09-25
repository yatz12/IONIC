import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewonMapTradesbid } from './viewon-map-tradesbid';

@NgModule({
  declarations: [
    ViewonMapTradesbid,
  ],
  imports: [
    IonicPageModule.forChild(ViewonMapTradesbid),
  ],
  exports: [
    ViewonMapTradesbid
  ]
})
export class ViewonMapTradesbidModule {}
