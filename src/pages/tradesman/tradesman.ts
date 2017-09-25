import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'
/**
 * Generated class for the Tradesman page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tradesman',
  templateUrl: 'tradesman.html',
})
export class Tradesman {
job_data
totalbids=[]
  constructor(public securityprovider:Security,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tradesman');
         let loading=this.loadingCtrl.create({content:'Please Wait..'})
       Observable.of(loading).flatMap(loading=>loading.present())
       .flatMap(()=>this.securityprovider.listofBids(localStorage['id']))
       .subscribe(data=>{
         loading.dismiss()
         this.job_data=data.result.job_data


         console.log(data.result.job_data)
         // for(var i=0;i<this.job_data;i++)
         // {

         // console.log('hi'+this.job_data[i].bid)	
         
         // }
         for(let value of this.job_data)
         {
                 // console.log('trigger'+value.bid.length)

           this.totalbids.push({tradesbids:value.bid.length,job_category:value.job_category,end_time:value.end_time})

console.log(this.totalbids)



         }
       
           

       })










  }
  tap(i)
  {
  	console.log(i)
  	this.navCtrl.push('Listofcategorydetails',{job_data:this.job_data,i:i})
  }

}
