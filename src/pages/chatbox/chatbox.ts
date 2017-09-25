
import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,Content,ToastController,LoadingController} from 'ionic-angular';
import * as io from 'socket.io-client'
import{NgZone}from'@angular/core'
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'
import{LocalNotifications}from'ionic-native'
/**
 * Generated class for the Chatbox page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Chatbox',
	segment:'Chatbox'
})
@Component({
  selector: 'page-chatbox',
  templateUrl: 'chatbox.html',
})
export class Chatbox {
  @ViewChild(Content) content:Content
socket
chatinp
zone
chats
tradeschat
conversation_id
flag
name
chathistory
chathistorymessage
// static get parameters()
// {
// 	return [NgZone];
// }
  constructor(public securityprovider:Security,public loadingCtrl:LoadingController,public navCtrl: NavController,ngzone:NgZone,public navparams:NavParams,public toastCtrl:ToastController) {
  	 // alert('hi')







     this.zone = ngzone;
        this.chats = [];
        this.tradeschat=[];
        this.chatinp ='';
        this.conversation_id=this.navparams.get('conversation_id')
        this.name=this.navparams.get('name')
        // alert(this.conversation_id)
        // this.socket = io('192.254.177.240:3001');

//            this.socket=io.connect('192.254.177.240:3001',{
//     'reconnection': true,
//     'reconnectionDelay': 1000,
//     'reconnectionDelayMax' : 5000,
//     'reconnectionAttempts': 5
// });
       // this.socket=io.connect('http://192.254.177.240:3001',{'force new connection':true});
       // this.socket=io.connect('http://192.254.177.240:3001',{'force new connection':true});
       // this.socket=io.connect('http://europa.promaticstechnologies.com:3002/listUsers',{'force new connection':true})
       // this.socket=io.connect('http://europa.promaticstechnologies.com:3003',{'force new connection':true})
         this.socket=io.connect('http://europa.promaticstechnologies.com:3003',{'force new connection':true})
       this.socket.on('connect_failed',(connect_failed)=> {
   // alert('Sorry, there seems to be an issue with the connection_failed!'+connect_failed);
   let toast1=this.toastCtrl.create({
     message:'Sorry, there seems to be an issue with the connection_failed!',
     duration:3000,
     position:'top'
   })
   toast1.onDidDismiss(()=>{
console.log('over')
   })
   toast1.present();

})
       this.socket.on('disconnect',(disconnect)=> {
   // alert("Sorry, there seems to be an issue with the disconnection!"+disconnect);
let toast2=this.toastCtrl.create({
     message:'Sorry, there seems to be an issue with the disconnection!',
     duration:3000,
     position:'top'
   })
   toast2.onDidDismiss(()=>{
console.log('over')
   })
   toast2.present();

})

       this.socket.on('error',(error)=> {
   // alert("Sorry, there seems to be an issue with the error!"+error);
   let toast3=this.toastCtrl.create({
     message:'Something Went Wrong!',
     duration:3000,
     position:'top'
   })
   toast3.onDidDismiss(()=>{
console.log('here '+error+'ERror'+JSON.stringify(error))
   })
   toast3.present();
})
       this.socket.on('connecting',(connecting)=> {
 let toast4=this.toastCtrl.create({
     message:'Connecting With the Server!',
     duration:3000,
     position:'top'
   })
   toast4.onDidDismiss(()=>{
console.log('over')
   })
   toast4.present();
})


              
                          this.socket.on('reconnecting',(reconnecting)=> {

   

 let toast5=this.toastCtrl.create({
     message:'Sorry, there seems to be an issue with the reconnection!',
     duration:3000,
     position:'top'
   })
   toast5.onDidDismiss(()=>{
console.log('over')
   })
   toast5.present();
})
       
                          this.socket.on('reconnect_failed',(reconnect_failed)=> {

     let toast6=this.toastCtrl.create({
     message:'Sorry, there seems to be an issue with the  reconnectfailed!',
     duration:3000,
     position:'top'
   })
   toast6.onDidDismiss(()=>{
console.log('over')
   })
   toast6.present();
})

                          this.socket.on('connect',(connect)=> {
     let toast7=this.toastCtrl.create({
     message:'Connection Successful',
     duration:3000,
     position:'top'
   })
   toast7.onDidDismiss(()=>{
console.log('over')
   })
   toast7.present();
})
                          
        this.socket.on('message', (msg) => {
            this.zone.run(() => {
               setTimeout(()=>{this.content.scrollToBottom(0)},0)
           
                 // alert(msg.flag)
                 //  if(msg.flag==1)
                 //  {

                  // this.tradeschat.push(msg.message) 
                  // alert('left'+JSON.stringify(this.tradeschat))
                  // } 
                  // else{         
                this.chats.push(msg);
                if(msg.flag==0)
                {
                  // alert('tradesmsg'+msg.message)
                   LocalNotifications.schedule({
                     text:msg.message
                   })
                }
               // alert(JSON.stringify(msg))

                  // alert('right'+JSON.stringify(this.chats))
                  // }  
                // alert('check'+JSON.stringify(msg))

            });
        }, (error) => {
            alert('uncheck'+JSON.stringify(error));
        })
        ;

    }
    ionViewDidEnter()
    {

        let loading=this.loadingCtrl.create({content:'Please Wait..'})
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.securityprovider.chathistory(this.conversation_id))
.subscribe(data=>{
  loading.dismiss()

console.log('hi'+JSON.stringify(data.result.feedback))
this.chathistorymessage=data.result.feedback




})

 }
    send(msg) {
//     	 this.socket = io('192.254.177.240:3001');
//     	 this.socket.on('connect_failed',(connect_failed)=> {
//    alert('Sorry, there seems to be an issue with the connection_failed!'+connect_failed);
// })
//        this.socket.on('disconnect',(disconnect)=> {
//    alert("Sorry, there seems to be an issue with the disconnection!"+disconnect);
// })

//        this.socket.on('error',(error)=> {
//    alert("Sorry, there seems to be an issue with the error!"+error);
// })
//        this.socket.on('connecting',(connecting)=> {
//     alert("mubarka connecting!"+connecting);
// })
//               this.socket.on('reconnect',(reconnect)=> {
//     alert("Sorry, there seems to be an issue with the  reconnect!"+reconnect);
// })
              
//                           this.socket.on('reconnecting',(reconnecting)=> {
//     alert("Sorry, there seems to be an issue with the reconnecting!"+reconnecting);
// })
       
//                           this.socket.on('reconnect_failed',(reconnect_failed)=> {
//     alert("Sorry, there seems to be an issue with the  reconnectfailed!"+reconnect_failed);
// })

//                           this.socket.on('connect',(connect)=> {
//     alert("mubarka!"+connect);
// })
        if(msg != ''){
          // var conversation_id='1234'
          // alert('hi')
            // this.socket.emit('subscribe',conversation_id)
             // this.socket.emit('message', {
             //     room: conversation_id,
             //     msg:msg
             // });
             this.socket.emit('subscribe', this.conversation_id);
             this.socket.emit('message', {
                   room:this.conversation_id,
                message:msg,
                flag:1

             });
            // this.socket.emit('message', msg);
            // this.socket.emit("error", msg);
            // alert('1st'+msg)
            
            // alert(msg)
        }
         // alert('chat_info'+JSON.stringify(this.chats))
        this.chatinp = '';
    }
    tap()
    {
      
    }

}
