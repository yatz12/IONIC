import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import{Observable}from'rxjs/Rx';
import {Security}from'../../providers/security';
/**
 * Generated class for the Tradesmaninbox page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Tradesmaninbox',
	segment:'Tradesmaninbox'
})
@Component({
  selector: 'page-tradesmaninbox',
  templateUrl: 'tradesmaninbox.html',
})
export class Tradesmaninbox {
resultsonline
conversation_id
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController,public securityprovider:Security) {
  this.resultsonline=this.navParams.get('resultsonline')
  console.log('resultsonline'+JSON.stringify(this.resultsonline))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tradesmaninbox');
  }
  bidchat(custemail,name){
    // alert(custemail)
let loading=this.loadingCtrl.create({content:'Please Wait..'})
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.securityprovider.tradesconversation(custemail,localStorage['email']))
.subscribe(data=>{
  loading.dismiss()
 this.conversation_id=data.result.chat_conversation.random_id
this.navCtrl.push('Tradesmanchatinbox',{conversation_id:this.conversation_id,name:name})

})


  }

}
