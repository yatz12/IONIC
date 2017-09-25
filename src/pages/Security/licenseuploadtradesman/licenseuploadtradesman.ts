import { Component } from '@angular/core';
import { Events,IonicPage, NavController, NavParams,ActionSheetController,LoadingController,AlertController,ViewController} from 'ionic-angular';
import{Camera}from'ionic-native'
import { Observable } from "rxjs/Rx";
import { Security }from'../../../providers/security'



/**
 * Generated class for the Licenseuploadtradesman page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Licenseuploadtradesman',
	segment:'Licenseuploadtradesman'
})
@Component({
  selector: 'page-licenseuploadtradesman',
  templateUrl: 'licenseuploadtradesman.html',
})
export class Licenseuploadtradesman {
pic
fb_status1=1
fb_type=2
fb_code=null
  constructor(public viewCtrl:ViewController,public events:Events,public alertCtrl:AlertController,private securityProvider:Security,public navCtrl: NavController, public navParams: NavParams,public actionsheetCtrl:ActionSheetController,public loadingCtrl: LoadingController) {
  	this.pic="assets/img/pa-1.png"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Licenseuploadtradesman');
  }
ImagUpload()
{
let actionsheet=this.actionsheetCtrl.create({
	title:'Image Upload!',
	buttons:[{
		text:'Upload From Gallery',
		handler:()=>{
       this.gallery()
		}
	},{

       text:'Upload From Camera',
		handler:()=>{
this.camera()
		}


	}
	]



	})
actionsheet.present();
}



camera(){
    Camera.getPicture({
              quality: 75,
              destinationType: Camera.DestinationType.DATA_URL,
              sourceType: Camera.PictureSourceType.CAMERA,
              encodingType: Camera.EncodingType.JPEG,
              targetHeight:500,
              targetWidth:500,
              saveToPhotoAlbum: false
            }).then((imageData) => {
            this.pic = "data:image/jpeg;base64," + imageData;
            // alert(this.pic)
            }, (err) => {
              // alert('Camera is not Working')
            })
  }
  gallery()
  {     
  	    Camera.getPicture({
              quality: 75,
              destinationType: Camera.DestinationType.DATA_URL,
              sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
              encodingType: Camera.EncodingType.JPEG,
              targetHeight:500,
              targetWidth:500,
              saveToPhotoAlbum: false
            }).then((imageData) => {
            this.pic = "data:image/jpeg;base64," + imageData;
            // alert(this.pic)
            }, (err) => {

              // alert('Camera is not Working')
            })
  }


next(){



let loading = this.loadingCtrl.create({content: 'wait'});
        Observable.of(loading).flatMap(loading =>   loading.present())
      // .flatMap(() => this.securityProvider.loginWithFb1(localStorage['unique_id'],localStorage['username'],this.fb_status1,localStorage['email']))
       .flatMap(() => this.securityProvider.loginWithFb1(localStorage['unique_id'],localStorage['username'],this.fb_status1,localStorage['email'],this.pic,this.fb_type))
     // .flatMap(() => this.securityProvider.loginWithFb1(22323242001,'rawakeqhilawan',this.fb_status1,'khdfnwwqweqwww@mailinator.com',this.pic,this.fb_type))
      .subscribe(data=>{
          loading.dismiss();
          if(data.status==1){
            let alert=this.alertCtrl.create({
              subTitle:data.fb_token,
              buttons:['ok']

            })
            alert.present();
             localStorage['fb_token']=data.fb_token
              localStorage['id']=data.result.id
              localStorage['fbstatus']=data.result.fb_status
              localStorage['email']=data.result.email
               //this.navCtrl.setRoot('Authenticatefblogin')    
               this.viewCtrl.dismiss('Authenticatefblogin')
                       
          
          }
          else 
          {

                     
              //    localStorage['fb_token']=data.fb_token
              //     localStorage['id']=data.result.id
              // localStorage['fbstatus']=data.result.fb_status
              // localStorage['email']=data.result.email
 this.events.publish('fbuser:created',localStorage['fb_token'])
  // this.events.publish('fbtradesemail:created',localStorage['email'])
          let alert=this.alertCtrl.create({
              subTitle:data.message,
              buttons:['ok']
            })
           alert.present();
          //this.navCtrl.setRoot('Authenticatefblogin')
          this.viewCtrl.dismiss('Authenticatefblogin')
          }
      })
}

}
