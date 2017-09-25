import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Buyplantrades } from './buyplantrades';

@NgModule({
  declarations: [
    Buyplantrades,
  ],
  imports: [
    IonicPageModule.forChild(Buyplantrades),
  ],
  exports: [
    Buyplantrades
  ]
})
export class BuyplantradesModule {}
