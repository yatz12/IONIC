import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Subscriptionpayment } from './subscriptionpayment';

@NgModule({
  declarations: [
    Subscriptionpayment,
  ],
  imports: [
    IonicPageModule.forChild(Subscriptionpayment),
  ],
  exports: [
    Subscriptionpayment
  ]
})
export class SubscriptionpaymentModule {}
