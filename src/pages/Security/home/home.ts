import { Component } from '@angular/core';
import { NavController, IonicPage ,LoadingController, AlertController ,ModalController} from 'ionic-angular';
import { Observable } from "rxjs/Rx";
import { Security }from'../../../providers/security'
import { UserDataProvider } from '../../../providers/user-data'
import{Facebook,NativeStorage}from'ionic-native'
import{Events}from'ionic-angular'
@IonicPage({
  name:'HomePage',
  segment:'HomePage-page'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
// email='ytuxedo786@gmail.com'
// password='vishal786'
checktest
email
password
FB_APP_ID: number = 272952999837098;
name;
user_id;
fb_status1=1
fb_status2=2
username
unique_id
navid=2
navid1=3
emailfb
image
onlinedata
resultsonline
datalength
fbimage
  constructor(public modalCtrl:ModalController,public events:Events,private userDataProvider:UserDataProvider,private securityProvider:Security,public navCtrl: NavController,public alertCtrl:AlertController,public loadingCtrl: LoadingController) {
 Facebook.browserInit(this.FB_APP_ID, "v2.8");
 this.email=localStorage['email2']
 this.password=localStorage['password2']
 this.checktest=localStorage['checktest2']
 // alert(this.email)
 // alert(this.password)

// alert('ds'+this.checktest)
  }
   ionViewDidLoad() {
         // var today=new Date()
         // var time=today.getHours()
         // alert('hi'+time)

    // console.log('ionViewDidLoad Tradesmanlogin');
           if(localStorage['id']!=null){
                                
                   // alert('in')               
                       let loading=this.loadingCtrl.create({content:'Please Wait..'})
       Observable.of(loading).flatMap(loading=>loading.present())
       .flatMap(()=>this.securityProvider.LOGOUT(localStorage['id']))
       .subscribe(data=>{
         loading.dismiss()
        
       })

 }
           else{
                  // alert('out')
           }
          



  }
  Bidlog(){
if(this.checktest==true)
{
localStorage['email2']=this.email
localStorage['password2']=this.password
localStorage['checktest2']=this.checktest
}



  localStorage['navid']=this.navid
  this.events.publish('user:created',localStorage['navid'])
  let loading = this.loadingCtrl.create({content: 'wait'});
        Observable.of(loading).flatMap(loading => loading.present())
      .flatMap(() => this.securityProvider.login(this.email,this.password,this.fb_status2))
      .subscribe(data=>{
          loading.dismiss();
          if(data.result.status==1){
            let alert=this.alertCtrl.create({
              subTitle:'Login Succesfully!',
              buttons:['ok']

            })
            alert.present();
              this.getData(data.result.result.id)
              // localStorage['id']=data.result.result.id
              localStorage['id']=data.result.result.email
                 localStorage['image']=data.result.result.image
              localStorage['fbstatus']=data.result.result.fb_status
              localStorage['contactid']=1
            localStorage['useronline']=data.result.result.all
            this.resultsonline=data.result.result.all
            localStorage['datalength']=this.resultsonline.length

  this.events.publish('sidemenuemail:created',localStorage['id'])
  this.events.publish('custimage:created',localStorage['image']) 


         
            // this.onlinedata=data.result.result.all
            // this.userDataProvider.onlinedata();
            console.log('home'+localStorage['datalength'])
              // console.log('usersdata'+JSON.stringify(localStorage['usersonline']))
// console.log('length'+this.resultsonline.length)
// for(var j=0;j<this.resultsonline.length;j++){

// this
// }
                // console.log('see data'+JSON.stringify(localStorage['usersonline']))
              this.navCtrl.setRoot('Bidwork',{onlinedata:this.resultsonline})          
          }
          else 
          {
           let alert=this.alertCtrl.create({
              subTitle:'Your email or password is incorrect',
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
    this.navCtrl.push('Signup')
    // alert(this.checktest)
  }
  forgetpassword(){
    this.navCtrl.push('Forgotpassword')
  }


 doFbLogin(){
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

      
        
            this.username=user.name
            this.unique_id=response.authResponse.userID
            this.emailfb=user.email
            this.image=user.picture
        

            localStorage['firstname']=this.username

            
            
            this.doFbLogin1();

      })
    }, (error)=>{
      alert('This app is under development mode PLEASE USE ADMINSTRATION CREDENTIALS')
    });
  }


 doFbLogin1(){
    localStorage['navid1']=this.navid1
  this.events.publish('user:created',localStorage['navid1'])
// let modal=this.modalCtrl.create('Licenseuploadtradesman');
// modal.present();
  //  var a=1310717582378598
  //  var b='Yatash Sharma'
   // alert(this.unique_id+'fb'+this.username+'email'+this.emailfb)
  let loading = this.loadingCtrl.create({content: 'wait'});
        Observable.of(loading).flatMap(loading =>   loading.present())
      .flatMap(() => this.securityProvider.loginWithFb(this.unique_id,this.username,this.fb_status1,this.emailfb,this.image))
       // .flatMap(() => this.securityProvider.loginWithFb(42322331,'yatash',this.fb_status1,'yatash@gmail.com','https://graph.facebook.com/1310717582378598/picture?type=large'))
      .subscribe(data=>{
          loading.dismiss();
          if(data.status==1){
            let alert=this.alertCtrl.create({
              subTitle:'Login Successfully!',
              buttons:['ok']

            })
            alert.present();
             
              // localStorage['id']=data.result.id
                  localStorage['id']=data.result.email
              localStorage['fbstatus']=data.result.fb_status
                                       localStorage['fbimage']=data.result.image   
                                       this.events.publish('sidemenuemailfbimage:created',localStorage['fbimage'])


                localStorage['contactid']=1
                   localStorage['usersonline']=data.result.all
                 this.events.publish('sidemenuemailfb:created',localStorage['id'])
                this.navCtrl.setRoot('Bidwork')          
          }
          else 
          {
           let alert=this.alertCtrl.create({
              subTitle:'Your email or password is incorrect',
              buttons:['ok']
            })
           alert.present();
          }
      })
  }



}
