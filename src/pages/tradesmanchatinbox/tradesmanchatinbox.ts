import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content,LoadingController } from 'ionic-angular';
import * as io from 'socket.io-client'
import{NgZone}from'@angular/core'
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'
import{LocalNotifications}from'ionic-native'
/**
 * Generated class for the Tradesmanchatinbox page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tradesmanchatinbox',
  templateUrl: 'tradesmanchatinbox.html',
})
export class Tradesmanchatinbox {
 @ViewChild(Content) content: Content;
socket
chatinp
zone
chats
conversation_id
name
chathistorymessage
  constructor(public navCtrl: NavController,ngzone:NgZone,public navparams:NavParams,public loadingCtrl:LoadingController,public securityprovider:Security) {
  	 this.zone = ngzone;
        this.chats = [];
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
       this.socket=io.connect('http://192.254.177.240:3003',{'force new connection':true});

       this.socket.on('connect_failed',(connect_failed)=> {
   // alert('Sorry, there seems to be an issue with the connection_failed!'+connect_failed);
})
       this.socket.on('disconnect',(disconnect)=> {
   // alert("Sorry, there seems to be an issue with the disconnection!"+disconnect);
})

       this.socket.on('error',(error)=> {
   // alert("Sorry, there seems to be an issue with the error!"+error);
})
       this.socket.on('connecting',(connecting)=> {
    // alert("mubarka connecting!"+connecting);
})


              
                          this.socket.on('reconnecting',(reconnecting)=> {

    // alert("Sorry, there seems to be an issue with the reconnecting!"+reconnecting);


})
       
                          this.socket.on('reconnect_failed',(reconnect_failed)=> {
    // alert("Sorry, there seems to be an issue with the  reconnectfailed!"+reconnect_failed);
})

                          this.socket.on('connect',(connect)=> {
    // alert("connection connected!");
})
                          
        this.socket.on('message', (msg) => {
            this.zone.run(() => {
            this.chats.push(msg);
                  setTimeout(()=>{this.content.scrollToBottom(0)},0)
                   // alert('check'+JSON.stringify(msg))
                // alert('check'+msg)
                if(msg.flag==1)
                {
                  // alert('custmsg'+msg.message)
                      LocalNotifications.schedule({
                        text:msg.message
                      })
                }

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
            // this.socket.emit('message', msg);
            this.socket.emit('subscribe', this.conversation_id);
             this.socket.emit('message', {
                   room:this.conversation_id,
                message:msg,
                flag:0

             });
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
