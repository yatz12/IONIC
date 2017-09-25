import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,LoadingController} from 'ionic-angular';
import{Security}from'../../providers/security'
import{Observable}from'rxjs/Rx'

/**
 * Generated class for the Tradesmanpostdetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Tradesmanpostdetail',
	segment:'Tradesmanpostdetail'
})
@Component({
  selector: 'page-tradesmanpostdetail',
  templateUrl: 'tradesmanpostdetail.html',
})
export class Tradesmanpostdetail {
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
count=1;
count1=1;
count2=1;
count3=1;
count4=1;
heart:boolean
responseid:boolean
likeid=0
starid=0
highestbid
starttime
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,public loadingCtrl:LoadingController,public securityprovider:Security) {
  
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
        localStorage['tradeslat']=this.jobdata[this.index].latitude
        localStorage['tradeslng']=this.jobdata[this.index].longitude
       this.heart=false
            this.responseid=false
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
viewonmap()
{
  this.navCtrl.push('ViewonMapTradesbid')
}



report()
{

this.navCtrl.push('Report',{reportid:this.id})


}
  ionViewDidLoad() {
    console.log('ionViewDidLoad Tradesmanpostdetail');
     let loading=this.loadingCtrl.create({content:'Please Wait..'})
     Observable.of(loading).flatMap(loading=>loading.present())
     .flatMap(()=>this.securityprovider.Highestbiding(localStorage['jobidtrades']))
       .subscribe(data=>{
         loading.dismiss()

            if(data.result.bids!=null){

         console.log('hi'+data.result.bids.price)
         this.highestbid=data.result.bids.price
       }
       else{
         console.log('bid0')
        this.highestbid=0 
       }


       })



  }
bidpost()
{
	let prompt = this.alertCtrl.create({
      title: 'Confirmation!!',
      message: "Confirm to show up to Bidding time and location to give the Bid in Person",
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {


 this.triggerbid()

            






            console.log(data.title);
           

          }
        }
      ]
    });
    prompt.present();
}



tap(id)
{

if(id==1)
{
 
   this.starid=1
 var x1=document.getElementById('star1')
 x1.style.color="orange"
var x2=document.getElementById('star2')
 x2.style.color="grey"
  var x3=document.getElementById('star3')
 x3.style.color="grey"
 var x4=document.getElementById('star4')
 x4.style.color="grey" 
 var x5=document.getElementById('star5')
 x5.style.color="grey"


}
else if (id==2) {

   this.starid=2
   var x1=document.getElementById('star1')
 x1.style.color="orange"
 var x2=document.getElementById('star2')
 x2.style.color="orange"
  var x3=document.getElementById('star3')
 x3.style.color="grey"
 var x4=document.getElementById('star4')
 x4.style.color="grey" 
 var x5=document.getElementById('star5')
 x5.style.color="grey"
}
else if (id==3) {
   this.starid=3
    var x1=document.getElementById('star1')
 x1.style.color="orange"
 var x2=document.getElementById('star2')
 x2.style.color="orange"
  var x3=document.getElementById('star3')
 x3.style.color="orange"
 var x4=document.getElementById('star4')
 x4.style.color="grey" 
 var x5=document.getElementById('star5')
 x5.style.color="grey"
}
else if (id==4) {
   this.starid=4
   var x1=document.getElementById('star1')
 x1.style.color="orange"
 var x2=document.getElementById('star2')
 x2.style.color="orange"
  var x3=document.getElementById('star3')
 x3.style.color="orange"
  
    var x4=document.getElementById('star4')
 x4.style.color="orange"
 var x5=document.getElementById('star5')
 x5.style.color="grey"
}
else if (id==5) {
   this.starid=5 
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
}

like()
{
  this.heart=true
  this.likeid=1
}

triggerbid()
{
  // if(isNaN(price)==true)
  // {

  //            let alert=this.alertCtrl.create({
        
  //             subTitle:'Bid can only be in numbers' ,
  //             buttons:['ok']

  //           })
  //           alert.present();



  // }
  // else{
    var price='1000'
    let loading=this.loadingCtrl.create({
  content:'Please Wait..'
})
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.securityprovider.bid(this.id,this.likeid,this.starid,price,localStorage['email']))
.subscribe(data=>{
  loading.dismiss()
          if(data.result.status==1)
          {
            this.responseid=true

             let alert=this.alertCtrl.create({
        
              subTitle:data.result.message,
              buttons:['ok']

            })
            alert.present();
         setTimeout(()=>{
this.navCtrl.setRoot('Mybids')
       },5000)
          }
          else{
            
          
 let alert=this.alertCtrl.create({
         
              subTitle:data.result.message,
              buttons:['ok']

            })
            alert.present();
 
 }

})
  



}




}
