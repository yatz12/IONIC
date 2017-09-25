import { Component } from '@angular/core';
import {LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'
import { Events } from 'ionic-angular';
/**
 * Generated class for the DashboardBidWork page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'DashboardBidWork',
	segment:'DashboardBidWork'
})
@Component({
  selector: 'page-dashboard-bid-work',
  templateUrl: 'dashboard-bid-work.html',
})
export class DashboardBidWork {
  id=1
tapsearch:boolean
tapsearch1:boolean
Jobsdata
jobdata
searchid
popupfilter
mainpopup
Jobsdata1
 structure: any = { lower: 33, upper: 400 };
 popupfilterdata
 popup2
 popupfilterdatasort
 jobcategory
 popup1
 popupfilterdatasortcategory
resultsonline
  constructor(public events:Events,public loadingCtrl:LoadingController,public security:Security,public navCtrl: NavController, public navParams: NavParams) {
// this.resultsonline=this.navParams.get('resultsonline')
this.tapsearch=false
  this.tapsearch1=true
  this.mainpopup=true
  this.popupfilter=false
  this.popupfilterdata=false
  this.popupfilterdatasort=false
  }
  onlinedatausers()
  {

let loading=this.loadingCtrl.create({content:'Wait..'})
    Observable.of(loading).flatMap(loading=>loading.present())
    .flatMap(()=>this.security.custonline(localStorage['email']))
    .subscribe(data=>{
      loading.dismiss()
        this.resultsonline=data.result.all
        this.navCtrl.push('Tradesmaninbox',{resultsonline:this.resultsonline})

      
    })


  }
 refresh()
 {
   this.navCtrl.setRoot('DashboardBidWork')
 }

  ionViewDidLoad() {
 //    localStorage['navid']=this.id
 // this.events.publish('user:created',localStorage['navid'])
// alert('check'+localStorage['navid'])
// localStorage['imagemain']='http://europa.promaticstechnologies.com/bidwork//public/userImage/'+localStorage['image']
         this.events.publish('emailtrades:created',localStorage['email']) 
         this.events.publish('tradesimage:created',localStorage['image'])  
if(localStorage['navid']==1)
{
localStorage['navid']=1
  this.events.publish('user:created',localStorage['navid'])
}
else
{


localStorage['navid']=4
  this.events.publish('user:created',localStorage['navid'])

}

 let loading=this.loadingCtrl.create({content:'Wait..'})
    Observable.of(loading).flatMap(loading=>loading.present())
    .flatMap(()=>this.security.jobSearch(localStorage['email']))
    .subscribe(data=>{
    	loading.dismiss()
    	this.Jobsdata=data.result.job
       this.jobdata=data.result.job
        this.jobcategory=data.result.catagories
   this.initializeItems();
    	
    })
  }

search(searchid)
{
  this.searchid=searchid
this.tapsearch=true
this.tapsearch1=false
}
initializeItems() {
   
    this.Jobsdata=this.Jobsdata;

  }
   getItems(ev:any) {

    this.initializeItems();


    let val = ev.target.value;

  if(this.searchid==1)
  {
    if (val && val.trim() != '') {
      this.Jobsdata = this.Jobsdata.filter((value) => {
        return (value.job_title.toUpperCase().indexOf(val.toUpperCase()) > -1);
      })

    }
    else
    {
      this.Jobsdata=this.jobdata;
    }

}
else if(this.searchid==2)
{

 if (val && val.trim() != '') {
      this.Jobsdata = this.Jobsdata.filter((value) => {
        return (value.job_category.toUpperCase().indexOf(val.toUpperCase()) > -1);
      })

    }
    else
    {
      this.Jobsdata=this.jobdata;
    }

  }
}

close()
{
  this.popupfilter=false
   this.popup2=false
   this.popup1=false

}


Bidpost(id,i)
{
  localStorage['jobidtrades']=id
this.navCtrl.push('Tradesmanpostdetail',{id:id,jobdata:this.jobdata,index:i})

}
filter()
{
  this.popupfilter=true
}

sort(){

 
this.popup2=true

}



taprange()
{

let loading = this.loadingCtrl.create({content: 'wait'});
        Observable.of(loading).flatMap(loading => loading.present())
      .flatMap(() => this.security.tradesmanfilter(this.structure.lower,this.structure.upper))
      .subscribe(data=>{
          loading.dismiss();
      this.popupfilter=false
      this.mainpopup=false
      this.popupfilterdata=true
      this.popup2=false
      this.Jobsdata=data.result.job
      this.jobdata=data.result.job
      
         
      })


}

  onChange(event)
{
 
  let loading=this.loadingCtrl.create({content:"Please wait.."})
    Observable.of(loading).flatMap(loading=>loading.present())
    .flatMap(()=>this.security.tradesmancategory(event,localStorage['email']))
     .subscribe(data=>{
     loading.dismiss();
    this.mainpopup=false
      this.popup2=false
this.popupfilterdata=false
   this.popupfilterdatasort=true
   this.popupfilter=false
    this.Jobsdata=data.result.job
    this.jobdata=data.result.job
           
     })  

}
  category()
  {
    
 console.log('ionViewDidLoad Postjob');
    let loading=this.loadingCtrl.create({content:'Wait..'});
    Observable.of(loading).flatMap(loading=>loading.present())
    .flatMap(()=>this.security.jobcategory())
    .subscribe(data=>{
      loading.dismiss();
  this.popup1=true
 if(data.result.status==1)
      {
    this.jobcategory=data.result.user_data

      }

    })

  }


  onSelectChange(event)
{
  let loading=this.loadingCtrl.create({content:"Please wait.."})
    Observable.of(loading).flatMap(loading=>loading.present())
    .flatMap(()=>this.security.tradesmancategory1(event,localStorage['email']))
     .subscribe(data=>{
     loading.dismiss();
     console.log(data.result.job_data)
 this.popup1=false
 this.mainpopup=false 
 this.popupfilterdatasortcategory=true
  this.popup2=false
 this.popupfilterdata=false
 this.Jobsdata=data.result.job
 this.jobdata=data.result.job

})  



}




}
