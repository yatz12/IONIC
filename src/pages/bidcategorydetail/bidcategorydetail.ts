import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Bidcategorydetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Bidcategorydetail',
	segment:'Bidcategorydetail'
})
@Component({
  selector: 'page-bidcategorydetail',
  templateUrl: 'bidcategorydetail.html',
})
export class Bidcategorydetail {
categoryjobs
categoryjobsdetail
  constructor(public navCtrl: NavController, public navParams: NavParams) {
       this.categoryjobs=this.navParams.get('categoryjobs')
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bidcategorydetail');
  }
categorytap(i)
{
  this.categoryjobsdetail=this.categoryjobs[i]
  localStorage['rating']=this.categoryjobsdetail.rating
this.navCtrl.push('Biddetails',{categoryjobsdetail:this.categoryjobsdetail})
}
}
