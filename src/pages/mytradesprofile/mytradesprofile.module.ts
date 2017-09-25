import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mytradesprofile } from './mytradesprofile';

@NgModule({
  declarations: [
    Mytradesprofile,
  ],
  imports: [
    IonicPageModule.forChild(Mytradesprofile),
  ],
  exports: [
    Mytradesprofile
  ]
})
export class MytradesprofileModule {}
