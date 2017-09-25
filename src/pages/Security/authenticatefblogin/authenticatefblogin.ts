import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,Events,AlertController } from 'ionic-angular';
import { Observable } from "rxjs/Rx";
import { Security }from'../../../providers/security'

/**
 * Generated class for the Authenticatefblogin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Authenticatefblogin',
	segment:'Authenticatefblogin'
})
@Component({
  selector: 'page-authenticatefblogin',
  templateUrl: 'authenticatefblogin.html',
})
export class Authenticatefblogin {
id=4
alert
  constructor(public alertCtrl:AlertController,public events:Events,public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,private securityProvider:Security) {
  }

  ionViewDidLoad() {
    // this.events.publish('fbtradesemail:created',localStorage['email'])
    console.log('ionViewDidLoad Authenticatefblogin');
  }
fbtrigger()
{
	 localStorage['navid']=this.id
 this.events.publish('user:created',localStorage['navid'])
	let loading = this.loadingCtrl.create({content: 'wait'});
        Observable.of(loading).flatMap(loading =>   loading.present())
      // .flatMap(() => this.securityProvider.loginWithFb1(localStorage['unique_id'],localStorage['username'],this.fb_status1,localStorage['email']))
       .flatMap(() => this.securityProvider.authenticatefb(localStorage['fb_token']))
      .subscribe(data=>{
          loading.dismiss();
if(data.status==1)
{
	localStorage['tradesdashboard']=data.result.id
             this.navCtrl.setRoot('DashboardBidWork')
 }             
else 
{
  this.alert=this.alertCtrl.create({
    subTitle:'Verifying Your License',
    buttons:['ok']
  })
  this.alert.present()

// alert('Verifying Your license')
}



          
      })
}
}
