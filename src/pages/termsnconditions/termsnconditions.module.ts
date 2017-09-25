import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Termsnconditions } from './termsnconditions';

@NgModule({
  declarations: [
    Termsnconditions,
  ],
  imports: [
    IonicPageModule.forChild(Termsnconditions),
  ],
  exports: [
    Termsnconditions
  ]
})
export class TermsnconditionsModule {}
