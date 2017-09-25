import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import{Observable}from'rxjs/Rx';
import {Security}from'../../../providers/security';
@IonicPage({
	name:'Inbox',
	segment:'Inbox-page'
})
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class Inbox {
onlinedata
onlinedataarray=[]
conversation_id
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController,public securityprovider:Security) {
  	this.onlinedata=this.navParams.get('onlinedata')
console.log('onlinedatainbox'+JSON.stringify(this.onlinedata))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Inbox');
  }
bidchat(tradeschat,name)
{
let loading=this.loadingCtrl.create({content:'Please Wait..'})
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.securityprovider.conversation(tradeschat,localStorage['id']))
.subscribe(data=>{
  loading.dismiss()
           this.conversation_id=data.result.chat_conversation.random_id
  
      
this.navCtrl.push('Chatbox',{conversation_id:this.conversation_id,name:name})



})















}
}
