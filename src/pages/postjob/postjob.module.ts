import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Postjob } from './postjob';

@NgModule({
  declarations: [
    Postjob,
  ],
  imports: [
    IonicPageModule.forChild(Postjob),
  ],
  exports: [
    Postjob
  ]
})
export class PostjobModule {}
