import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,AlertController} from 'ionic-angular';
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'
/**
 * Generated class for the Biddetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Biddetails',
	segment:'Biddetails-page'
})
@Component({
  selector: 'page-biddetails',
  templateUrl: 'biddetails.html',
})
export class Biddetails {
categoryjobsdetail
datepick
timepick
phrase
feedbackphrase
constructor(public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController,public securityprovider:Security) {

this.categoryjobsdetail=this.navParams.get('categoryjobsdetail')
console.log(this.categoryjobsdetail.rating)


  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad Biddetails');
    if(localStorage['rating']==1)
{
	
var x1=document.getElementById('star1')
x1.style.color="orange"

}
else if(localStorage['rating']==2)
{
	
var x1=document.getElementById('star1')
x1.style.color="orange"
var x2=document.getElementById('star2')
x2.style.color="orange"

}
else if(localStorage['rating']==3)
{
	
var x1=document.getElementById('star1')
x1.style.color="orange"
var x2=document.getElementById('star2')
x2.style.color="orange"
var x3=document.getElementById('star3')
x3.style.color="orange"

}
else if(localStorage['rating']==4)
{
	
var x1=document.getElementById('star1')
x1.style.color="orange"
var x2=document.getElementById('star2')
x2.style.color="orange"
var x3=document.getElementById('star3')
x3.style.color="orange"
var x4=document.getElementById('star4')
x4.style.color="orange"

}
else if(localStorage['rating']==5)
{

var x1=document.getElementById('star1')
x1.style.color="orange"
var x2=document.getElementById('star2')
x2.style.color="orange"
var x3=document.getElementById('star3')
x3.style.color="orange"
var x4=document.getElementById('star4')
x4.style.color="orange"
var x5=document.getElementById('star5')
x5.style.color="orange"
}


let loading=this.loadingCtrl.create({content:'wait'})
    Observable.of(loading).flatMap(loading=>loading.present())
    .flatMap(()=>this.securityprovider.feedbackphrase())
    .subscribe(data=>{
      loading.dismiss()
      this.phrase=data.result.feedback
 })

  }



tapBid()
{
this.timepick='xxxx'
this.datepick='xxxx'

 let partial={

  feedbackphrase:this.feedbackphrase

   }
let madatoryFields:string[]=[];

if(!partial.feedbackphrase)
{
  madatoryFields.push('FeedbackPhrase')
}

if(madatoryFields.length>0)
{
 let alertctr=this.alertCtrl.create({
  title:'Mandatory Feilds!',
  message:madatoryFields.join(','),
    buttons:['Ok']
})
alertctr.present();
}

else{

let loading=this.loadingCtrl.create({content:'wait'})
    Observable.of(loading).flatMap(loading=>loading.present())
    .flatMap(()=>this.securityprovider.Bidappointement(this.datepick,this.timepick,this.feedbackphrase,localStorage['id'],this.categoryjobsdetail.job_id,this.categoryjobsdetail.email))
    .subscribe(data=>{
      loading.dismiss()
      // this.phrase=data.result.feedback
      if(data.result.status){
  let alert=this.alertCtrl.create({
              subTitle:'Appointment Succesfully Fixed',
              buttons:[{
                text:'OK',
                handler:data=>{
                  this.navCtrl.setRoot('Bidwork')
                }
              }]
            })
            alert.present();


      }
      else{
        let alert=this.alertCtrl.create({
              subTitle:'Something Went Wrong',
              buttons:[{
                text:'OK',
                handler:data=>{
                  // this.navCtrl.setRoot('Bidwork')
                }
              }]
            })
            alert.present();
      }
    
 })
}
}



}
