import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import{Observable}from'rxjs/Rx';
import {Security}from'../../providers/security';

/**
 * Generated class for the Mybids page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Mybids',
	segment:'Mybids'

})
@Component({
  selector: 'page-mybids',
  templateUrl: 'mybids.html',
})
export class Mybids {
mybids
mybiddata=[]
  constructor(public securityprovider:Security,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {
  

  }

  ionViewDidLoad() {
let loading=this.loadingCtrl.create({content:'Please Wait..'})
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.securityprovider.mybids(localStorage['email']))
.subscribe(data=>{
  loading.dismiss()

 this.mybids=data.result.bids 
var i
for(i=0;i<this.mybids.length;i++)
{

this.mybiddata.push({'email':this.mybids[i].job[0].email,'job_category':this.mybids[i].job[0].job_category,'job_title':this.mybids[i].job[0].job_title,'price':this.mybids[i].job[0].price,'user_image':this.mybids[i].job[0].user_image,'job_description':this.mybids[i].job[0].job_description,'image1':this.mybids[i].job[0].image1,'image2':this.mybids[i].job[0].image2,'image3':this.mybids[i].job[0].image3,'joblocation':this.mybids[i].job[0].job_location,'end_time':this.mybids[i].job[0].end_time,'date':this.mybids[i].job[0].date})

}


})
  }
  tapdetail(i){
    this.navCtrl.push('Mybiddetail',{mybiddata:this.mybiddata,i:i})
  }

}
