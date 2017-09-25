import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'
@IonicPage({
  name:'Bidwork',
  segment:'Bidwork-page'
})
@Component({
  selector: 'page-bidwork',
  templateUrl: 'bidwork.html',
})
export class Bidwork {
resultsonline
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController,public security:Security) {
    this.resultsonline=this.navParams.get('onlinedata')
  console.log('data'+JSON.stringify(this.resultsonline))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bidwork');
  }
  BidPost()
  {
this.navCtrl.push('Postjob')
  }
  howitworks(){
this.navCtrl.push('Howitworks')
  }
Tradesman()
{
  this.navCtrl.push('Tradesman')
}
Listofbids(){
  this.navCtrl.push('Listofbids')
}
onlinedatausers(){
  let loading=this.loadingCtrl.create({content:'Wait..'})
    Observable.of(loading).flatMap(loading=>loading.present())
    .flatMap(()=>this.security.custonline(localStorage['id']))
    .subscribe(data=>{
      loading.dismiss()
        this.resultsonline=data.result.all
        // this.navCtrl.push('Inbox',{resultsonline:this.resultsonline})
         this.navCtrl.push('Inbox',{onlinedata:this.resultsonline})

      
    })
 
}
}
