import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ActionSheetController,LoadingController,AlertController,Events} from 'ionic-angular';
import { Camera }from'ionic-native';
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'
import { ENV } from '../../app/env';
/**
 * Generated class for the Mytradesprofile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Mytradesprofile',
	segment:'Mytradesprofile'
})
@Component({
  selector: 'page-mytradesprofile',
  templateUrl: 'mytradesprofile.html',
})
export class Mytradesprofile {
firstname
lastname
email
address
phoneno
pic



  constructor(public events:Events,public alertCtrl:AlertController,public secutriyprovider:Security,public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams, public actionsheet:ActionSheetController) {
  

this.firstname=localStorage['firstname']
this.lastname=localStorage['lastname']
this.email=localStorage['email']
this.address=localStorage['address']
this.phoneno=localStorage['phone_number']
console.log('image'+localStorage['image'])
if(localStorage['image']=='null')
{
this.pic="assets/img/aa.jpg"
}
else if(localStorage['image']!=null)
{
this.pic=localStorage['image']	
}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mytradesprofile');
 
  
 







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




  edit(){
  	let loading = this.loadingCtrl.create({content: 'wait'});
        Observable.of(loading).flatMap(loading => loading.present())
      .flatMap(() => this.secutriyprovider.editProfile({
                                                        user_id:localStorage['id'],
                                                        firstname:this.firstname,
                                                        lastname:this.lastname,
                                                        email:this.email,
                                                        phone_number:this.phoneno,
                                                        address:this.address,
                                                        image:this.pic
                                                      }))
      .subscribe(data=>{
          loading.dismiss();
            if(data.result.status==1)
            {
              
               localStorage['image']=data.result.image_link
               localStorage['firstname']=data.result.firstname
               localStorage['lastname']=data.result.lastname
               localStorage['email']=data.result.email
               localStorage['address']=data.result.address
               localStorage['phone_number']=data.result.phone_number
                 


 this.events.publish('tradesimage:created',localStorage['image']) 
let alert=this.alertCtrl.create({
              subTitle:'Update Succesfully!',
              buttons:['ok']

            })
            alert.present();
            this.navCtrl.setRoot('DashboardBidWork')
            }
            else{
let alert=this.alertCtrl.create({
              subTitle:'Something Went Wrong',
              buttons:['ok']

            })
            alert.present();
            }
          
      })
  }

}
