import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Howitworks } from './howitworks';

@NgModule({
  declarations: [
    Howitworks,
  ],
  imports: [
    IonicPageModule.forChild(Howitworks),
  ],
  exports: [
    Howitworks
  ]
})
export class HowitworksModule {}
