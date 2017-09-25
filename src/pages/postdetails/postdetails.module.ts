import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Postdetails } from './postdetails';

@NgModule({
  declarations: [
    Postdetails,
  ],
  imports: [
    IonicPageModule.forChild(Postdetails),
  ],
  exports: [
    Postdetails
  ]
})
export class PostdetailsModule {}
