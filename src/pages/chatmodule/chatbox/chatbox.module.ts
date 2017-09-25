import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Chatbox } from './chatbox';

@NgModule({
  declarations: [
    Chatbox,
  ],
  imports: [
    IonicPageModule.forChild(Chatbox),
  ],
  exports: [
    Chatbox
  ]
})
export class ChatboxModule {}
