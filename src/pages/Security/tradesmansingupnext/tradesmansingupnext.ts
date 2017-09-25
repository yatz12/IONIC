import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,AlertController} from 'ionic-angular';
import{FormBuilder,FormGroup,Validators}from'@angular/forms'
import{Observable}from'rxjs/Rx'
import{Security}from'../../../providers/security'

/**
 * Generated class for the Tradesmansingupnext page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Tradesmansingupnext',
	segment:'Tradesmansingupnext'
})
@Component({
  selector: 'page-tradesmansingupnext',
  templateUrl: 'tradesmansingupnext.html',
})
export class Tradesmansingupnext {
  Bidform1:FormGroup
  firstName
  lastName
  pic
  checktest
  constructor(public alertCtrl:AlertController,public loadingCtrl:LoadingController,public securityprovider:Security,public navCtrl: NavController, public navParams: NavParams,public formBuilder:FormBuilder) {
  let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
           this.Bidform1 = formBuilder.group({

      Email: ['', Validators.compose([Validators.maxLength(50), Validators.pattern(emailRegex), Validators.required])],
   password:['', Validators.compose( [Validators.maxLength(25),Validators.minLength(6),Validators.pattern(''), Validators.required])] 
    
  });
// this.firstName=this.navParams.get('firstName')
// this.lastName=this.navParams.get('lastName')
this.pic=this.navParams.get('pic')
  this.checktest=false
  }
  login(){
  	this.navCtrl.push('Tradesmanlogin')
  }
 terms(){
    this.navCtrl.push('Termsnconditions')
  }
bidregister()
{
  if(this.checktest==false)
{
let alert=this.alertCtrl.create({
          subTitle:'Please Accept Terms and Conditions To Continue!',
          buttons:['ok']
        })
        alert.present();
}
else if(this.checktest==true){
let loading=this.loadingCtrl.create({content:'Please Wait..'})
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.securityprovider.tradesmansignup(localStorage['tradesfirstName'],localStorage['tradeslastName'],this.pic,this.Bidform1.controls["Email"].value,this.Bidform1.controls["password"].value,localStorage['tradesAddress'],localStorage['Phoneno']))
.subscribe(data=>{
  loading.dismiss();
  if(data.result.status==1){




        let alert=this.alertCtrl.create({
          subTitle:'Successfully Signup!',
          buttons:['ok']
        })
        alert.present();
  this.navCtrl.push('Tradesmanlogin')



}
else if(data.result.status==0)
{

        let alert=this.alertCtrl.create({
          subTitle:'Email ALready Exist!',
          buttons:['ok']
        })
        alert.present();


}
})
}
 	// this.navCtrl.push('Tradesmanlogin')
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad Tradesmansingupnext');
  }

}
