import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'
/**
 * Generated class for the Listofbids page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage(
{
	name:'Listofbids',
	segment:'Listofbids-page'
})
@Component({
  selector: 'page-listofbids',
  templateUrl: 'listofbids.html',
})
export class Listofbids {
job_data
 categoryjobs
  constructor(public securityprovider:Security,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Listofbids');

       let loading=this.loadingCtrl.create({content:'Please Wait..'})
       Observable.of(loading).flatMap(loading=>loading.present())
       .flatMap(()=>this.securityprovider.listofBids(localStorage['id']))
       .subscribe(data=>{
         loading.dismiss()
         this.job_data=data.result.job_data
         console.log(data.result.job_data)
       })





  }
biddetails(i)
{
  this.categoryjobs=this.job_data[i].bid
	this.navCtrl.push('Bidcategorydetail',{categoryjobs:this.categoryjobs})
}
}
