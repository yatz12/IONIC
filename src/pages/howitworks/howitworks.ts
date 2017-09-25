import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController} from 'ionic-angular';
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'
@IonicPage({
	name:'Howitworks',
	segment:'Howitworks-page'
})
@Component({
  selector: 'page-howitworks',
  templateUrl: 'howitworks.html',
})
export class Howitworks {
how
  constructor(public loadinCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams,public securityprovider:Security) {
  }


  ionViewDidLoad() {
    let loading=this.loadinCtrl.create({content:'wait'})
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.securityprovider.howitworks())
.subscribe(data=>{
  loading.dismiss()
  this.how=data.result.how

})
  }
  submit()
  {
    this.navCtrl.setRoot('Bidwork')
  }

}
