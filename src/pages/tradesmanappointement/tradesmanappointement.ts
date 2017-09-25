import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'
/**
 * Generated class for the Tradesmanappointement page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Tradesmanappointement',
	segment:'Tradesmanappointement'
})
@Component({
  selector: 'page-tradesmanappointement',
  templateUrl: 'tradesmanappointement.html',
})
export class Tradesmanappointement {
appointementdata
appointementdatalist=[]
  constructor(public navCtrl: NavController, public navParams: NavParams,public securityprovider:Security,public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    let loading=this.loadingCtrl.create({content:'Wait..'});
    Observable.of(loading).flatMap(loading=>loading.present())
    .flatMap(()=>this.securityprovider.checkappointement(localStorage['email']))
    .subscribe(data=>{
      loading.dismiss()
        this.appointementdata=data.result.appointment_data

            for(var i=0;i<this.appointementdata.length;i++)
            {
                      this.appointementdatalist.push({image:this.appointementdata[i].job.user_image,firstname:this.appointementdata[i].job.firstname,
                        feedback_phrase:this.appointementdata[i].feedback_phrase,image1:this.appointementdata[i].job.image1,
                        image2:this.appointementdata[i].job.image2,image3:this.appointementdata[i].job.image3,
                        job_title:this.appointementdata[i].job.job_title,job_description:this.appointementdata[i].job.job_description,
                        job_location:this.appointementdata[i].job.job_location,date:this.appointementdata[i].date,time:this.appointementdata[i].time,
                        job_category:this.appointementdata[i].job.job_category,
                           lat:this.appointementdata[i].job.latitude,
                           lng:this.appointementdata[i].job.longitude
                               })

            }


    })
  }

  tapondetail(i){

this.navCtrl.push('Tradesmanappointdetail',{appointementdatalist:this.appointementdatalist,i:i})

  }
 



}
