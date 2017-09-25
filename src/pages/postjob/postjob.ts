import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'
import{UserDataProvider}from'../../providers/user-data'
import{Geolocation}from'ionic-native'
declare var google:any;
@IonicPage({
  name:'Postjob',
  segment:'Postjob-page'
})
@Component({
  selector: 'page-postjob',
  templateUrl: 'postjob.html',
})
export class Postjob {
userdata
jobcategory
  bidlat1;
  bidlng1;
  job_title;
  job_category;
  job_description;
  Price;
  constructor(public alertCtrl:AlertController,public userDataProvider:UserDataProvider,public securityprovider:Security,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {
      Geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          this.bidlat1=position.coords.latitude
          this.bidlng1=position.coords.longitude

    }, (err) => {
      console.log(err);
    });

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Postjob');
    let loading=this.loadingCtrl.create({content:'Wait..'});
    Observable.of(loading).flatMap(loading=>loading.present())
    .flatMap(()=>this.securityprovider.jobcategory())
    .subscribe(data=>{
      loading.dismiss();
      // console.log(data.result.status)
      if(data.result.status==1)
      {
          this.userDataProvider.JobCategorydata();
          this.userDataProvider.JOBCATEGORY.user_data=data.result.user_data 
          this.jobcategory=data.result.user_data
    console.log('data'+data.result.user_data)
    console.log('data2'+this.userDataProvider.JOBCATEGORY)
  
      }

    })
  }
  Bidnext()
  {
 localStorage['job_title']=this.job_title
localStorage['job_category']=this.job_category
localStorage['job_description']=this.job_description
// localStorage['price']=this.Price
localStorage['price']=1
let partial={
  jobtitle:this.job_title,
  jobcategory:this.job_category,
  jobdescription:this.job_description
  // price:this.Price
}
let mandatoryfields:string[]=[];
if(!partial.jobtitle)
{
  mandatoryfields.push('JobTitle')
}
if(!partial.jobcategory)
{
  mandatoryfields.push('JobCategory')
}
if(!partial.jobdescription)
{
  mandatoryfields.push('jobdescription')
}
// if(!partial.price)
// {
//   mandatoryfields.push('price')
// }
 if(mandatoryfields.length>0)
 {
let alertctr=this.alertCtrl.create({
  title:'Mandatory Feilds!',
  message:mandatoryfields.join(','),
    buttons:['Ok']
})
alertctr.present();
 }

else {
  	this.navCtrl.push('Maplo',{bidlat1:this.bidlat1,bidlng1:this.bidlng1})
  }
  }
  tap()
  {
    
  }

}
