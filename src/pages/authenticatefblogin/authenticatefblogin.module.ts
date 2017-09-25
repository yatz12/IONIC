import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Authenticatefblogin } from './authenticatefblogin';

@NgModule({
  declarations: [
    Authenticatefblogin,
  ],
  imports: [
    IonicPageModule.forChild(Authenticatefblogin),
  ],
  exports: [
    Authenticatefblogin
  ]
})
export class AuthenticatefbloginModule {}
