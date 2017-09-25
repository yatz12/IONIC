import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicRating } from './ionic-rating';

@NgModule({
  declarations: [
    IonicRating,
  ],
  imports: [
    IonicPageModule.forChild(IonicRating),
  ],
  exports: [
    IonicRating
  ]
})
export class IonicRatingModule {}
