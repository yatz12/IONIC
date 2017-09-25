import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Listofcategorydetails } from './listofcategorydetails';

@NgModule({
  declarations: [
    Listofcategorydetails,
  ],
  imports: [
    IonicPageModule.forChild(Listofcategorydetails),
  ],
  exports: [
    Listofcategorydetails
  ]
})
export class ListofcategorydetailsModule {}
