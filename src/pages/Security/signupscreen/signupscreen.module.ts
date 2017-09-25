import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Signupscreen } from './signupscreen';

@NgModule({
  declarations: [
    Signupscreen,
  ],
  imports: [
    IonicPageModule.forChild(Signupscreen),
  ],
  exports: [
    Signupscreen
  ]
})
export class SignupscreenModule {}
