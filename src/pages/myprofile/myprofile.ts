import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController, LoadingController,AlertController } from 'ionic-angular';
import { Camera }from'ionic-native';
import { UserDataProvider } from '../../providers/user-data';
import { Observable } from "rxjs/Rx";
import { ENV } from '../../app/env';
import { Security } from '../../providers/security';
import{Events}from'ionic-angular'
@IonicPage({
	name:'Myprofile',
	segment:'Myprofile-page'
})
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class Myprofile {
  public base64Image: string;
  public pic:string;
    address
    email
    firstname
    id
    image
    lastname
    phone_number
  constructor(private securityProvider:Security,
              private userDataProvider:UserDataProvider,
              public loadingCtrl:LoadingController,
              public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public actionsheet:ActionSheetController,
              public events:Events) {
     this.address=this.userDataProvider.current.address;
     this.email=this.userDataProvider.current.email;
     this.firstname=this.userDataProvider.current.firstname;
     this.userDataProvider.current.image!=null ? this.pic=this.userDataProvider.current.image : this.pic="assets/img/user.svg";
     this.lastname=this.userDataProvider.current.lastname;
     this.phone_number=this.userDataProvider.current.phone_number;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Myprofile');
  }
  edit(){
    // alert(this.phone_number)
 if(isNaN(this.phone_number)){
             let alert=this.alertCtrl.create({
              subTitle:'Phone-no Invalid',
              buttons:['ok']
            })
           alert.present();
        }
 
        if(this.phone_number% 1 !== 0){
         let alert=this.alertCtrl.create({
              subTitle:'Phone-no Invalid',
              buttons:['ok']
            })
           alert.present();   
        }
 
        if(this.phone_number < 1000000000){
            let alert=this.alertCtrl.create({
              subTitle:'Phone-no Invalid',
              buttons:['ok']
            })
           alert.present();
        }





else{





    let pic
    if(this.pic=="assets/img/user.svg" || this.pic==this.userDataProvider.current.image){
      pic=null;
    }
    else{
      pic=this.pic
    }
    let loading = this.loadingCtrl.create({content: 'wait'});
        Observable.of(loading).flatMap(loading => loading.present())
      .flatMap(() => this.securityProvider.editProfile({
                                                        user_id:this.userDataProvider.current.id,
                                                        firstname:this.firstname,
                                                        lastname:this.lastname,
                                                        email:this.email,
                                                        phone_number:this.phone_number,
                                                        address:this.address,
                                                        image:pic
                                                      }))
      .subscribe(data=>{
          loading.dismiss();
            //alert(JSON.stringify(data));
          if(data.result.status==1){
            this.userDataProvider.current.address = this.address;
            this.userDataProvider.current.email = this.email;
            this.userDataProvider.current.firstname = this.firstname;
            this.userDataProvider.current.image = this.pic;
            this.userDataProvider.current.lastname = this.lastname;
            this.userDataProvider.current.phone_number = this.phone_number;

             localStorage['image']=data.result.image_link

            this.events.publish('custimage:created',localStorage['image']) 
            if(data.result.image_link!=""){
            this.pic=data.result.image_link;
            
            }
            let alert=this.alertCtrl.create({
              subTitle:data.result.message,
              buttons:['ok']

            })
            alert.present();
            //   this.getData(data.result.result.id)
              this.navCtrl.setRoot('Bidwork')          
          }
          else 
          {
           // let alert=this.alertCtrl.create({
           //    subTitle:'Your email or password is incorrect',
           //    buttons:['ok']
           //  })
           // alert.present();
          }
      })
    }
  }
  ImageUpload()
  {
    let actionsheet=this.actionsheet.create({
    	title:'Image Upload!',
    	buttons:[{
    		text:'Upload From Gallery',
    		handler:()=>{
            this.gallery()
    		},
    	}
    	,
    	{
    		text:'Take A Snap',
    		handler:()=>{
    		    this.camera()
    		}
    	}]

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
              saveToPhotoAlbum: false,
                correctOrientation: true
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
              saveToPhotoAlbum: false,
                correctOrientation: true
            }).then((imageData) => {
            this.pic = "data:image/jpeg;base64," + imageData;
            // alert(this.pic)
            }, (err) => {
              // alert('Camera is not Working')
            })
  }
}
