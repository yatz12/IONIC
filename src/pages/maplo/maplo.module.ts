import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Maplo } from './maplo';

@NgModule({
  declarations: [
    Maplo,
  ],
  imports: [
    IonicPageModule.forChild(Maplo),
  ],
  exports: [
    Maplo
  ]
})
export class MaploModule {}
