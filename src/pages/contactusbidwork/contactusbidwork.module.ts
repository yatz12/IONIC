import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contactusbidwork } from './contactusbidwork';

@NgModule({
  declarations: [
    Contactusbidwork,
  ],
  imports: [
    IonicPageModule.forChild(Contactusbidwork),
  ],
  exports: [
    Contactusbidwork
  ]
})
export class ContactusbidworkModule {}
