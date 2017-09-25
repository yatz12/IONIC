import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the Logscreen page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Logscreen',
	segment:'Logscreen-page'
})
@Component({
  selector: 'page-logscreen',
  templateUrl: 'logscreen.html',
})
export class Logscreen {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Logscreen');
  }
login()
{
this.navCtrl.push('HomePage')
}
login1()
{
	
	this.navCtrl.push('Tradesmanlogin')
}
}
