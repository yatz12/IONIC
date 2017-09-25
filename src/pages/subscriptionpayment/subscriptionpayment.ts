import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,AlertController} from 'ionic-angular';
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'
import{PayPalPayment, PayPalConfiguration,PayPal}from'ionic-native'
/**
 * Generated class for the Subscriptionpayment page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Subscriptionpayment',
	segment:'Subscriptionpayment'
})
@Component({
  selector: 'page-subscriptionpayment',
  templateUrl: 'subscriptionpayment.html',
})
export class Subscriptionpayment {
payment: PayPalPayment = new PayPalPayment('10.10', 'USD', 'TV', 'sale');
currencies = ['EUR', 'USD'];
payPalEnvironment: string = 'payPalEnvironmentSandbox';
 subscribedata
 uniqueid
 email
 state
 createtime

  constructor(public alertCtrl:AlertController,public securityprovider:Security,public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Subscriptionpayment');


let loading=this.loadingCtrl.create({content:'Wait..'});
    Observable.of(loading).flatMap(loading=>loading.present())
    .flatMap(()=>this.securityprovider.subscribeplans())
    .subscribe(data=>{
      loading.dismiss();
  // this.popup1=true
 if(data.result.status==1)
      {
      	this.subscribedata=data.result.subscription_data
    // this.jobcategory=data.result.user_data

      }

    })





  }

test()
{

	alert(JSON.stringify(this.payment))
}



slides = [
    {
      title: "Welcome to the Docs!",
      description: "$",
      image: "10",
      month:3
    },
    {
      title: "What is Ionic?",
      description: "$",
      image: "50",
       month:6
    },
    {
      title: "What is Ionic Cloud?",
      description: "$",
      image: "80",
      month:12
    }
];



 buyplan(a,b,c,d,planid) {


// alert('hi')

this.payment.amount=a
if(b=='€')
{
this.payment.currency='EUR'
}
else{
	this.payment.currency='USD'
}
this.payment.shortDescription=c

// alert(planid)
// this.payment.intent=c
// alert(this.payment.amount+','+this.payment.currency+','+this.payment.shortDescription+','+this.payment.intent)
// alert(JSON.stringify(this.payment))
		PayPal.init({
			PayPalEnvironmentProduction:'',
			PayPalEnvironmentSandbox: 'ATtFbMh1w6xrP8IMqlIcJoKtbJiBquhFys_TUmSQjyVKNduFIK3ttH84mdrXQLyvCZd4lzfGm1N3wxXU'
		}).then(() => {
			PayPal.prepareToRender(this.payPalEnvironment, new PayPalConfiguration({})).then(() => {
				PayPal.renderSinglePaymentUI(this.payment).then((response) => {
					// alert(`Successfully paid. Status = ${response.response.state}`);
					// alert(JSON.stringify(response))
                   // alert('pikabu'+response.response.id+'+'+response.response.state+'+'+response.response.create_time+'+'+response.response.intent+'+'+JSON.stringify(response.response))
        

 this.bidpayplan(response.response.id,response.response.state,this.payment.intent,this.payment.amount,planid,response.response.create_time)
					// console.log(response);
				}, () => {
					alert('Error or render dialog closed without being successful');
				});
			}, () => {
				alert('Error in configuration');
			});
		}, () => {
			alert('Error in initialization, maybe PayPal isn\'t supported or something else');
		});
// this.bidpayplan(this.payment.intent,this.payment.amount,planid)
}


bidpayplan(uniqueid,state,intent,amount,planid,create_time)
{

// this.uniqueid='PAY-1AB23456CD789012EF34GHIJ'
this.email= localStorage['email']
// this.state='approved'
// this.createtime='2016-10-03T13:33:33Z'
// alert('pikabupikabu'+uniqueid+','+this.email+','+intent+','+amount+','+state+','+create_time+','+planid)

let loading=this.loadingCtrl.create({content:'Wait..'});
    Observable.of(loading).flatMap(loading=>loading.present())
    .flatMap(()=>this.securityprovider.payplan(uniqueid,this.email,intent,amount,state,create_time,planid))
    .subscribe(data=>{
      loading.dismiss();
  // this.popup1=true
   let alert=this.alertCtrl.create({
          subTitle:'Payment Successfully Done!',
          buttons:['ok']
        })
        alert.present();
this.navCtrl.setRoot('DashboardBidWork')



    })







}



closetab(){
	this.navCtrl.setRoot('DashboardBidWork')
}

}
