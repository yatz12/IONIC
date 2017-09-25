import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Signupnext } from './signupnext';

@NgModule({
  declarations: [
    Signupnext,
  ],
  imports: [
    IonicPageModule.forChild(Signupnext),
  ],
  exports: [
    Signupnext
  ]
})
export class SignupnextModule {}
