import { Component, ViewChild } from '@angular/core';
import { Nav, Platform ,AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{NativeStorage}from'ionic-native'
import{HomePage}from'../pages/Security/home/home'
import{Bidwork}from'../pages/bidwork/bidwork'
import{Events}from'ionic-angular'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav)nav:Nav
  rootPage:any = 'Signupscreen';
  id
 navid
 navbar1
 navbar2
 navbar
 fbtoken
 logout
 pagesemail
 sidemenuemailfb
 sidemenuemailfbimage
 emailtrades
 fbemailtrades
 fbtradesemail
 fbtradesimage
 tradesimage
 custimage
  pages: Array<{title: string, component: any,logo:string}>;
  pages1: Array<{title: string, component: any,logo:string}>;
  pages2: Array<{title: string, component: any,logo:string}>;
  pages4: Array<{title: string, component: any,logo:string}>;
  constructor(public alertCtrl:AlertController,public events:Events,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {



    platform.ready().then(() => {


        //  platform.registerBackButtonAction(()=>{
    
        //    if(this.nav.canGoBack()){
        //      this.nav.pop()
        //    }
        //    else{

        //      let alert=this.alertCtrl.create({
        //         title: 'Exit?',
        // message: 'Do you want to exit the app?',
        // buttons: [
        //   {
        //     text: 'Cancel',
        //     role: 'cancel',
        //     handler: () => {
        //     alert=null
        //     }
        //   },
        //   {
        //     text: 'Exit',
        //     handler: () => {

        //       platform.exitApp();
        //     }
        //   }
        // ]
        //      })
        //      alert.present()

        //    }
        //  })

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      platform.pause.subscribe(()=>{
        // alert('app is paused')
      })
      platform.resume.subscribe(()=>{
        // alert('app is resume')
      })

    // let env = this;
    //   NativeStorage.getItem('user')
    //   .then( function (data) {
    //     // user is previously logged and we have his data
    //     // we will let him access the app
    //     env.nav.push(Bidwork);
    //     splashScreen.hide();
    //   }, function (error) {
    //     //we don't have the user data so we will ask him to log in
    //     env.nav.push(HomePage);
    //     splashScreen.hide();
    //   });

    //   statusBar.styleDefault();


    });
   

events.subscribe('user:created', (user) => {

this.navbar=user
// alert(this.navbar)

})

events.subscribe('logout:created',(logout)=>{
  // alert(logout)
  this.logout=logout
    delete localStorage['tradesdashboard']
  delete localStorage['tradesmannormalloginstatus']
})
events.subscribe('sidemenuemail:created',(sidemenuemail)=>{
this.pagesemail=sidemenuemail
})

events.subscribe('sidemenuemailfb:created',(sidemenuemailfb)=>{
this.sidemenuemailfb=sidemenuemailfb
})
events.subscribe('sidemenuemailfbimage:created',(sidemenuemailfbimage)=>{
  this.sidemenuemailfbimage=sidemenuemailfbimage
})
events.subscribe('emailtrades:created',(emailtrades)=>{
     // alert(emailtrades)
this.emailtrades=emailtrades
})
events.subscribe('fbemailtrades:created',(fbemailtrades)=>{
  this.fbemailtrades=fbemailtrades
})
events.subscribe('fbemailtrades:created',(fbemailtrades)=>{
  this.fbemailtrades=fbemailtrades
})
events.subscribe('fbtradesemail:created',(fbtradesemail)=>{
  this.fbtradesemail=fbtradesemail
})
events.subscribe('fbtradesimage:created',(fbtradesimage)=>{
  this.fbtradesimage=fbtradesimage
})
events.subscribe('tradesimage:created',(tradesimage)=>{
    // alert(tradesimage)
  this.tradesimage=tradesimage
})
events.subscribe('custimage:created',(custimage)=>{
  // alert(custimage)
  this.custimage=custimage
})
// events.subscribe('fbuser:created',(fbtoken)=>{
//   alert('hi'+fbtoken)
//   this.fbtoken=fbtoken
// })
// if(this.logout==1)
// {
//   this.rootPage='Signupscreen'
//   delete localStorage['tradesdashboard']
//   delete localStorage['tradesmannormalloginstatus']
//   alert('get')
// }
if(  localStorage['fb_token']!=null)
{

    this.rootPage='Authenticatefblogin';
}

if(localStorage['tradesdashboard']!=null)
{
  // alert('check1')
 // this.rootPage='DashboardBidWork'; 
}
if(localStorage['tradesmannormalloginstatus']==1)
{
    // alert('check2')
 // this.rootPage='DashboardBidWork'; 
}






     this.pages = [
      { title: 'Home', component:'Bidwork', logo:'ios-home'},
      { title: 'My Profile', component: 'Myprofile' , logo:'ios-person'},
      { title: 'My Posts', component: 'Mypost' , logo:'ios-folder'},
      // { title: 'Ratings', component: 'Rating' , logo:'ios-star'},
      // { title: 'Chat', component:'Inbox', logo:'ios-chatboxes'},
      { title: 'FAQ', component: 'Faq' , logo:'md-help'},
      { title: 'About App', component: 'Aboutapp' , logo:'ios-information-circle'},
        {title:'Contact Us',component:'Contactusbidwork',logo:'ios-call'},
      { title: 'Logout', component: 'HomePage', logo:'ios-log-out'}
      // {title:'Maplo',component:'Maplo',logo:'ios-home'}
    
    ];



    this.pages2 = [
      { title: 'Home', component:'Bidwork', logo:'ios-home'},
      { title: 'My Posts', component: 'Mypost' , logo:'ios-folder'},
      // { title: 'Ratings', component: 'Rating' , logo:'ios-star'},
      // { title: 'Chat', component:'Inbox', logo:'ios-chatboxes'},
      { title: 'FAQ', component: 'Faq' , logo:'md-help'},
      { title: 'About App', component: 'Aboutapp' , logo:'ios-information-circle'},
      { title: 'Logout', component: 'HomePage', logo:'ios-log-out'},
         {title:'Contact Us',component:'Contactusbidwork',logo:'ios-call'},
              { title: 'Logout', component: 'HomePage', logo:'ios-log-out'},
    ];




      this.pages1 = [
      {title:'Search Jobs',component:'DashboardBidWork',logo:'ios-home'},
      { title: 'Confirmed Showing', component: 'Mybids' , logo:'ios-folder'},
      { title: 'Appointment', component: 'Tradesmanappointement' , logo:'ios-bookmarks'},
      { title: 'Near By Jobs', component: 'Nearbyjobs' , logo:'ios-pin'},
         {title:'Contact Us',component:'Contactusbidwork',logo:'ios-call'},
            // { title: 'Chat', component:'Inbox', logo:'ios-chatboxes'},
               { title: 'My Profile', component: 'Mytradesprofile', logo:'ios-person'},
               // {title:'Subscribe',component:'Subscriptionpayment',logo:'ios-card'},
                 { title: 'Logout', component: 'Tradesmanlogin', logo:'ios-log-out'}
                 


  ];
this.pages4 = [
      {title:'Search Jobs',component:'DashboardBidWork',logo:'ios-home'},
      { title: 'Confirmed Showing', component: 'Mybids' , logo:'ios-folder'},
      { title: 'Appointment', component: 'Tradesmanappointement' , logo:'ios-bookmarks'},
      { title: 'Near By Jobs', component: 'Nearbyjobs' , logo:'ios-pin'},
      {title:'Contact Us',component:'Contactusbidwork',logo:'ios-call'},
     // { title: 'Chat', component:'Inbox', logo:'ios-chatboxes'},
      // {title:'Subscribe',component:'Subscriptionpayment',logo:'ios-card'},

      { title: 'Logout', component: 'Tradesmanlogin', logo:'ios-log-out'},
                

  ];
 
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
