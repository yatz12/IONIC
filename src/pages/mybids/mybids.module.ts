import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mybids } from './mybids';

@NgModule({
  declarations: [
    Mybids,
  ],
  imports: [
    IonicPageModule.forChild(Mybids),
  ],
  exports: [
    Mybids
  ]
})
export class MybidsModule {}
