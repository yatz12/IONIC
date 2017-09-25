import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Postjobnext } from './postjobnext';

@NgModule({
  declarations: [
    Postjobnext,
  ],
  imports: [
    IonicPageModule.forChild(Postjobnext),
  ],
  exports: [
    Postjobnext
  ]
})
export class PostjobnextModule {}
