import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'
/**
 * Generated class for the Report page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Report',
	segment:'Report'

})
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class Report {
jobid
message
reportid
  constructor(public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController,public securityprovider:Security) {
   this.reportid=this.navParams.get('reportid')

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Report');
  }
submit()
{
	console.log('ionViewDidLoad Tradesmanpostdetail');
     let loading=this.loadingCtrl.create({content:'Please Wait..'})
     Observable.of(loading).flatMap(loading=>loading.present())
     .flatMap(()=>this.securityprovider.report(this.reportid,localStorage['email'],this.message))
       .subscribe(data=>{
         loading.dismiss()
            let alert=this.alertCtrl.create({
          subTitle:'Your Report Has been Succesfully Recorded!',
          buttons:['ok']
        })
        alert.present();
      })
     }
     }
