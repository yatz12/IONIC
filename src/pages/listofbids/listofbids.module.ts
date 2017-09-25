import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Listofbids } from './listofbids';

@NgModule({
  declarations: [
    Listofbids,
  ],
  imports: [
    IonicPageModule.forChild(Listofbids),
  ],
  exports: [
    Listofbids
  ]
})
export class ListofbidsModule {}
