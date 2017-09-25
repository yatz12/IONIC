import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';
import{Camera}from'ionic-native'
/**
 * Generated class for the Tradesmannext2signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Tradesmannext2signup',
	segment:'Tradesmannext2signup'
})
@Component({
  selector: 'page-tradesmannext2signup',
  templateUrl: 'tradesmannext2signup.html',
})
export class Tradesmannext2signup {
 pic
  constructor(public navCtrl: NavController, public navParams: NavParams,public actionsheetCtrl:ActionSheetController) {
    this.pic="assets/img/pa-1.png"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tradesmannext2signup');
  }
ImagUpload()
{
let actionsheet=this.actionsheetCtrl.create({
	title:'Image Upload!',
	buttons:[{
		text:'Uplaod From Gallery',
		handler:()=>{
       this.gallery()
		}
	},{

       text:'Uplaod From Camera',
		handler:()=>{
this.camera()
		}


	}
	]



	})
actionsheet.present();
}
next(){
	// this.navCtrl.push('Tradesmansingupnext')
	if(this.pic=="assets/img/pa-1.png"){

alert('Please Upload Busineess Owner License')


  }
  else{

this.navCtrl.push('Tradesmansingupnext',{pic:this.pic}) 
}
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
