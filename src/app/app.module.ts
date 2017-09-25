import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import {Security} from '../providers/security';
import {UserDataProvider} from '../providers/user-data';
import { HttpModule } from '@angular/http';
import{ModalAutocompleteItems}from'../pages/modal-autocomplete-items/modal-autocomplete-items'

import{IonicRating}from'../components/ionic-rating/ionic-rating';
import{LocalNotifications}from'ionic-native'
import{ImagePicker}from'@ionic-native/image-picker'
import{FileTransfer,FileTransferObject,FileUploadOptions}from'@ionic-native/file-transfer'

@NgModule({
  declarations: [
    MyApp,
    ModalAutocompleteItems,
    IonicRating
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ModalAutocompleteItems
  ],
  providers: [
  FileTransfer,
  FileTransferObject,
  ImagePicker,
  LocalNotifications,
  StatusBar,
  SplashScreen,
  Security,
  UserDataProvider,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}
