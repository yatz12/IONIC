import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'

/**
 * Generated class for the Aboutapp page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	 name:'Aboutapp',
  segment:'Aboutapp-page'})
@Component({
  selector: 'page-aboutapp',
  templateUrl: 'aboutapp.html',
})
export class Aboutapp {
description
  constructor(public securityprovider:Security,public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let loading=this.loadingCtrl.create({content:'wait'})
    Observable.of(loading).flatMap(loading=>loading.present())
    .flatMap(()=>this.securityprovider.aboutus())
    .subscribe(data=>{
    	loading.dismiss()
    	this.description=data.result.description

    })
  }

}
