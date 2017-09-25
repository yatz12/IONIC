import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import{LocalNotifications}from'@ionic-native/local-notifications'
import{LocalNotifications}from'ionic-native'
@IonicPage({
  name:'Signupscreen',
  segment:'Signupscreen-page'
})
@Component({
  selector: 'page-signupscreen',
  templateUrl: 'signupscreen.html',
})
export class Signupscreen {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signupscreen');
  }
Login(){
  	this.navCtrl.setRoot('Logscreen')
  }
signup()
{
	this.navCtrl.push('Signup')
}
signup1(){
  // alert('ho')
  // LocalNotifications.schedule({
  //   id:1,
  //   text:'Ho'
  // })

  this.navCtrl.push('Tradesmansignup')
}
}
