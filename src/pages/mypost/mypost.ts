import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'
import { UserDataProvider } from '../../providers/user-data';

/**
 * Generated class for the Mypost page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Mypost',
	segment:'Mypost-page'
})
@Component({
  selector: 'page-mypost',
  templateUrl: 'mypost.html',
})
export class Mypost {
Username
jobdata
 structure: any = { lower: 33, upper: 400 };
 popup:boolean
 id
fbstatus
bidpopup1:boolean;
bidpopup2:boolean;
bidpopup3:boolean;
bidpopup4:boolean;
jobdata1
jobdata2
jobdata3
image
popup1;
jobcategory
popup2
firstname
  constructor(private userDataProvider:UserDataProvider,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController,public securityprovider:Security) {

this.popup=false
this.popup1=false
this.popup2=false
this.bidpopup1=true
this.bidpopup2=false
 this.bidpopup3=false
 this.bidpopup4=false

 }
  onSelectChange(event)
{
  let loading=this.loadingCtrl.create({content:"Please wait.."})
    Observable.of(loading).flatMap(loading=>loading.present())
    .flatMap(()=>this.securityprovider.postdetailscategory(localStorage['id'],localStorage['fbstatus'],event))
     .subscribe(data=>{
     loading.dismiss();
     console.log(data.result.job_data)
     this.jobdata2=data.result.job_data
       this.popup1=false
       this.bidpopup1=false
       this.bidpopup3=true
       this.bidpopup2=false
      
     })  



}

ondateChange(event)
{

let loading=this.loadingCtrl.create({content:'Please wait..'})
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.securityprovider.pricedetailsort(localStorage['id'],localStorage['fbstatus'],event))
.subscribe(data=>{
  loading.dismiss();
  this.jobdata=data.result.job_data 
  this.popup2=false

this.bidpopup1=false
 this.bidpopup3=false
  this.bidpopup2=false
 this.bidpopup4=true
 

})

}
onpriceChange(event)
{

let loading=this.loadingCtrl.create({content:'Please wait..'})
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.securityprovider.pricedetailsort(localStorage['id'],localStorage['fbstatus'],event))
.subscribe(data=>{
  loading.dismiss();
     this.jobdata3=data.result.job_data 
     this.popup2=false
     this.bidpopup1=false
     this.bidpopup3=false
     this.bidpopup2=false
     this.bidpopup4=true
    
})

}





sort(){

 
this.popup2=true

}

  ionViewDidLoad() {
let loading=this.loadingCtrl.create({content:'Please wait..'});
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.securityprovider.postdetails(localStorage['id'],localStorage['fbstatus']))
.subscribe(data=>{
  loading.dismiss();
  if(data.result.status==1){
  // console.log(data.result.job_data)
     this.jobdata=data.result.job

          if(data.result.job[0].fb_status==2){

     this.firstname=data.result.job[0].user_firstname
     this.image='http://europa.promaticstechnologies.com/bidwork/public/userImage/'+data.result.job[0].user_image
 
}

else if(data.result.job[0].fb_status==1)
{
 this.firstname=data.result.job[0].username
this.image=data.result.job[0].user_image


}



 }
 else if(data.result.status==0){

 }
 })
 



  }
  filter()
  {
    this.popup=true
  }
  category()
  {
    
 console.log('ionViewDidLoad Postjob');
    let loading=this.loadingCtrl.create({content:'Wait..'});
    Observable.of(loading).flatMap(loading=>loading.present())
    .flatMap(()=>this.securityprovider.jobcategory())
    .subscribe(data=>{
      loading.dismiss();
      // console.log(data.result.status)
      if(data.result.status==1)
      {
         this.popup1=true
          this.userDataProvider.JobCategorydata();
          this.userDataProvider.JOBCATEGORY.user_data=data.result.user_data 
          this.jobcategory=data.result.user_data
    console.log('data'+data.result.user_data)
    console.log('data2'+this.userDataProvider.JOBCATEGORY)
   
  
      }

    })
  


  }
Bidpost(id,i){
this.navCtrl.push('Postdetails',{id:id,jobdata:this.jobdata,index:i})
}
taprange()
{
this.id=localStorage['id'],
this.fbstatus=localStorage['fbstatus']
let loading = this.loadingCtrl.create({content: 'wait'});
        Observable.of(loading).flatMap(loading => loading.present())
      .flatMap(() => this.securityprovider.filter(this.id,this.fbstatus,this.structure.lower,this.structure.upper))
      .subscribe(data=>{
          loading.dismiss();
          console.log(data.result.job_data)
     this.jobdata1=data.result.job_data 
       this.popup=false
       this.bidpopup1=false
       this.bidpopup2=true
        this.bidpopup3=false
      
         
      })


}
}
