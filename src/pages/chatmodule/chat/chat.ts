import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
	name:'Chat',
	segment:'Chat-page'
})
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class Chat {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chat');
  }

}
