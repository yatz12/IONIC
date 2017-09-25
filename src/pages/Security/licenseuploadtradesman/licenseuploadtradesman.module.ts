import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Licenseuploadtradesman } from './licenseuploadtradesman';

@NgModule({
  declarations: [
    Licenseuploadtradesman,
  ],
  imports: [
    IonicPageModule.forChild(Licenseuploadtradesman),
  ],
  exports: [
    Licenseuploadtradesman
  ]
})
export class LicenseuploadtradesmanModule {}
