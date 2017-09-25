import { Component } from '@angular/core';
import { NavController, IonicPage ,LoadingController,AlertController,NavParams} from 'ionic-angular';
import { Observable} from "rxjs/Rx";
import{Security}from'../../../providers/security'

/**
 * Generated class for the Tradesmanforgetpassword page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Tradesmanforgetpassword',
	segment:'Tradesmanforgetpassword'
})
@Component({
  selector: 'page-tradesmanforgetpassword',
  templateUrl: 'tradesmanforgetpassword.html',
})
export class Tradesmanforgetpassword {

 Email
  constructor(public navCtrl: NavController,public alertCtrl:AlertController,private securityProvider:Security,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Forgotpassword');
  }
  Bidsend()
  {
  	 
    let loading = this.loadingCtrl.create({content: 'wait'});
      Observable.of(loading).flatMap(loading => loading.present())
    .flatMap(() => this.securityProvider.forgetpassword(this.Email))
    .subscribe(data=>{
        loading.dismiss();
        if(data.result.status==1){
          let alert=this.alertCtrl.create({
            subTitle:'Email has been sent you mail',
            buttons:['ok']

          })
       
          alert.present();
            this.navCtrl.setRoot('Tradesmanlogin')         
        }
        else if(data.result.status==0)
        {
          let alert=this.alertCtrl.create({
            subTitle:'Email does not exist',
            buttons:['ok']
          })
          alert.present();
        }
        
    })
  }

}
