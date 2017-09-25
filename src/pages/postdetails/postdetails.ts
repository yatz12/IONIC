import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import{Security}from'../../providers/security'
import{Observable}from'rxjs/Rx'
import{SocialSharing}from'ionic-native'


/**
 * Generated class for the Postdetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Postdetails',
	segment:'Postdetails-page'
})
@Component({
  selector: 'page-postdetails',
  templateUrl: 'postdetails.html',
})
export class Postdetails {
id
jobdata
index
jobtitle
jobdescription
joblocation
jobcategory
date
jobloc
endtime
image1
image2
image3
img1:boolean
img2:boolean
img3:boolean
img11:boolean
img12:boolean
img13:boolean
price
rating
starttime
  constructor(public navCtrl: NavController, public navParams: NavParams,public securityprovider:Security,public loadingCtrl:LoadingController) {
        this.id=this.navParams.get('id')
        this.jobdata=this.navParams.get('jobdata')
        this.index=this.navParams.get('index')
        this.jobtitle=this.jobdata[this.index].job_title
        this.jobdescription=this.jobdata[this.index].job_description
        this.jobcategory=this.jobdata[this.index].job_category
        this.jobloc=this.jobdata[this.index].job_location  
        this.date=this.jobdata[this.index].date
        this.starttime=this.jobdata[this.index].start_time
        this.endtime=this.jobdata[this.index].end_time
        this.image1=this.jobdata[this.index].image1
        this.image2=this.jobdata[this.index].image2
        this.image3=this.jobdata[this.index].image3 
        this.price=this.jobdata[this.index].price 
        this.rating=this.jobdata[this.index].avg_rating 
         
console.log('pika'+JSON.stringify(this.jobdata))
            if(this.image1==null)
            {
                 this.img1=true
                 
            }
            else{
              this.img11=true
            }
               
             if(this.image2==null)
            {
                 this.img2=true
                  
            }
            else{
              this.img12=true
            }

             if(this.image3==null)
            {
                 this.img3=true
                
            }
            else{
              this.img13=true
            }
 
 
    








}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Postdetails');
  }
  share(){
    // let a="hlkhklhklh"
    // let b="dsds"
SocialSharing.share("Hi,I Have just Posted A job for "+this.jobcategory+" .these are the specifications for the job. "+this.jobdescription+" As,I have posted this job on "+this.date+","+this.endtime+" You will be given $ "+this.price+" After being hired by us "+" Job location will be disclosed after biding on app.So,go through this link to bid on job ",this.jobtitle,null,"https://play.google.com/store")
.then(()=>{

},
()=>{
   
})
  }
  delpost()

{
  let loading=this.loadingCtrl.create({content:'Please wait..'})
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.securityprovider.delpost(localStorage['id'],localStorage['fbstatus'],this.id))
.subscribe(data=>{
  loading.dismiss();
  this.navCtrl.setRoot('Mypost')
 
 })
  }

}
