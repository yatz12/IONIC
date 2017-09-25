import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardBidWork } from './dashboard-bid-work';

@NgModule({
  declarations: [
    DashboardBidWork,
  ],
  imports: [
    IonicPageModule.forChild(DashboardBidWork),
  ],
  exports: [
    DashboardBidWork
  ]
})
export class DashboardBidWorkModule {}
