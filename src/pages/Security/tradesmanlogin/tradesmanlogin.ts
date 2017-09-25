import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,AlertController,ModalController} from 'ionic-angular';
import { Events } from 'ionic-angular';
import{Facebook,NativeStorage}from'ionic-native'
import { Observable } from "rxjs/Rx";
import { Security }from'../../../providers/security'
import { UserDataProvider } from '../../../providers/user-data'

/**
 * Generated class for the Tradesmanlogin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Tradesmanlogin',
	segment:'Tradesmanlogin'
})
@Component({
  selector: 'page-tradesmanlogin',
  templateUrl: 'tradesmanlogin.html',
})
export class Tradesmanlogin {
id=1
email
password
FB_APP_ID: number = 272952999837098;
fb_status1=1
fb_status2=2
username
unique_id
resultsonline
checktest1
  constructor(public modalCtrl:ModalController,public alertCtrl:AlertController,private userDataProvider:UserDataProvider,private securityProvider:Security,public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public events:Events) {
 Facebook.browserInit(this.FB_APP_ID, "v2.8");
   this.email=localStorage['email1']
 this.password=localStorage['password1']
 this.checktest1=localStorage['checktest1']
 //  alert(this.email)
 // alert(this.password)
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad Tradesmanlogin');
           if(localStorage['email']!=null){
                                
                   // alert('in')               
                       let loading=this.loadingCtrl.create({content:'Please Wait..'})
       Observable.of(loading).flatMap(loading=>loading.present())
       .flatMap(()=>this.securityProvider.LOGOUT(localStorage['email']))
       .subscribe(data=>{
         loading.dismiss()
           this.events.publish('logout:created',localStorage['logindirect'])  
          delete localStorage['email']                
                   localStorage['logindirect']=1  

       })

 }
           else{
                  // alert('out')
           }



  }

 Bidlog(){
  localStorage['navid']=this.id
  if(this.checktest1==true)
{
localStorage['email1']=this.email
localStorage['password1']=this.password
localStorage['checktest1']=this.checktest1
}
 this.events.publish('user:created',localStorage['navid'])
  let loading = this.loadingCtrl.create({content: 'wait'});
        Observable.of(loading).flatMap(loading => loading.present())
      .flatMap(() => this.securityProvider.login(this.email,this.password,this.fb_status2))
      .subscribe(data=>{
          loading.dismiss();
          if(data.result.status==1){
            

              this.getData(data.result.result.id)
              localStorage['id']=data.result.result.id
              localStorage['fbstatus']=data.result.result.fb_status
              localStorage['tradesmannormalloginstatus']=data.result.status
              localStorage['email']=data.result.result.email
              localStorage['image']=data.result.result.image
                    localStorage['contactid']=2
                          this.resultsonline=data.result.result.all
                           this.events.publish('emailtrades:created',localStorage['email'])   
                           this.events.publish('tradesimage:created',localStorage['image'])                 
          }
          else 
          {
           let alert=this.alertCtrl.create({
              subTitle:data.result.message,
              buttons:['ok']
            })
           alert.present();

          }
      })
  }
  getData(id){
    let loading = this.loadingCtrl.create({content: 'wait'});
        Observable.of(loading).flatMap(loading => loading.present())
      .flatMap(() => this.securityProvider.userData(id))
      .subscribe(data=>{
          loading.dismiss();
          if(data.result.status==1){
            this.userDataProvider.newData();
            this.userDataProvider.current=data.result.user_data
            localStorage['firstname']=data.result.user_data.firstname
            localStorage['lastname']=data.result.user_data.lastname
            localStorage['phone_number']=data.result.user_data.phone_number
            localStorage['address']=data.result.user_data.address
             localStorage['image']=data.result.user_data.image
                 console.log('phone'+localStorage['phone_number'])
             localStorage['email']=data.result.user_data.email
             console.log('Email--->'+localStorage['email'])
             let alert=this.alertCtrl.create({
              subTitle:'Login Successfully!',
              buttons:['ok']

            })
            alert.present();
            this.navCtrl.setRoot('DashboardBidWork',{resultsonline:this.resultsonline})   
          }
          else 
          {
            console.log(data)
          }
      })
  }
  Signup()
  {
    // alert('user_name'+this.name+'user_id'+this.user_id)
    this.navCtrl.push('Tradesmansignup')
  }
  forgetpassword(){
    this.navCtrl.push('Tradesmanforgetpassword')
  }


 doFbLogin(){
   // alert('We will send you this module in next update')
    let permissions = new Array<string>();
    let nav = this.navCtrl;

    permissions = ["public_profile","email"];


    Facebook.login(permissions)
    .then((response)=>{
      let userId = response.authResponse.userID;
      let params = new Array<string>();

 
      Facebook.api("/me?fields=name,gender,email", params)
      .then((user)=> {
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";

      
                  localStorage['tradesfbimage']=user.picture
            localStorage['username']=user.name
            localStorage['unique_id']=response.authResponse.userID
              localStorage['email']=user.email
            this.events.publish('fbtradesemail:created',localStorage['email']) 
            this.events.publish('fbtradesimage:created',localStorage['tradesfbimage'])

            this.doFbLogin1();
      })
    }, (error)=>{
      alert('The App is under development mode')
    });
  }


 doFbLogin1(){
    localStorage['contactid']=2
 //  localStorage['navid']=this.id
 // this.events.publish('user:created',localStorage['navid'])

   let modal=this.modalCtrl.create('Licenseuploadtradesman')
   modal.present();
   modal.onDidDismiss((data)=>{
     this.navCtrl.setRoot(data)
   })
  // let loading = this.loadingCtrl.create({content: 'wait'});
  //       Observable.of(loading).flatMap(loading =>   loading.present())
  //     .flatMap(() => this.securityProvider.loginWithFb(this.unique_id,this.username,this.fb_status1))
  //     .subscribe(data=>{
  //         loading.dismiss();
  //         if(data.status==1){
  //           let alert=this.alertCtrl.create({
  //             subTitle:'Login Succesfully!',
  //             buttons:['ok']

  //           })
  //           alert.present();
             
  //             localStorage['id']=data.result.id
  //             localStorage['fbstatus']=data.result.fb_status
  //              this.navCtrl.setRoot('DashboardBidWork')    
  //         }
  //         else 
  //         {
  //          let alert=this.alertCtrl.create({
  //             subTitle:'Your email or password is incorrect',
  //             buttons:['ok']
  //           })
  //          alert.present();
  //         }
  //     })
  }

}
