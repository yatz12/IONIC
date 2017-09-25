import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'
/**
 * Generated class for the Faq page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Faq',
	segment:'Faq-page'
})
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class Faq {
showadd:boolean
removeadd:boolean
faqdata
faqsdata
answer;
count=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadinCtrl:LoadingController,public securityprovider:Security) {
  this.showadd=true
  this.removeadd=false

       


  }
question(i){
	this.count++;
	if(this.count%2!=0){
		this.answer=i;
	}
	else{
		this.answer='p';
	}
}
  ionViewDidLoad() {
   

let loading=this.loadinCtrl.create({content:'wait'})
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.securityprovider.faq())
.subscribe(data=>{
	loading.dismiss()
	this.faqdata=data.result.faq

})


  }
add()
{
 var x=document.getElementById('tap')
 x.style.backgroundColor="black"
this.showadd=false
this.removeadd=true
}
remove(){
this.showadd=true
this.removeadd=false
}
}
