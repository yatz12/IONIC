import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as io from 'socket.io-client'
import{NgZone}from'@angular/core'

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
socket
chatinp
zone
chats
// static get parameters()
// {
// 	return [NgZone];
// }
  constructor(public navCtrl: NavController,ngzone:NgZone) {
  	 this.zone = ngzone;
        this.chats = [];
        this.chatinp ='';
        // this.socket = io('192.254.177.240:3001');

//            this.socket=io.connect('192.254.177.240:3001',{
//     'reconnection': true,
//     'reconnectionDelay': 1000,
//     'reconnectionDelayMax' : 5000,
//     'reconnectionAttempts': 5
// });
       this.socket=io.connect('http://192.254.177.240:3001',{'force new connection':true});

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
    // alert("mubarka!"+connect);
})
                          
        this.socket.on('message', (msg) => {
            this.zone.run(() => {
                this.chats.push(msg);
                // alert('check'+msg)

            });
        }, (error) => {
            alert('uncheck'+JSON.stringify(error));
        })
        ;

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
            this.socket.emit('message', msg);
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
