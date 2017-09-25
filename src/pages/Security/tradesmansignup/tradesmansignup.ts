import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ActionSheetController,AlertController} from 'ionic-angular';
import{Camera}from'ionic-native'
import{FormBuilder,FormGroup,Validators}from'@angular/forms'
import{FormControl}from'@angular/forms'
@IonicPage({
	name:'Tradesmansignup',
	segment:'Tradesmansignup'
})
@Component({
  selector: 'page-tradesmansignup',
  templateUrl: 'tradesmansignup.html',
})
export class Tradesmansignup {
  Bidform:FormGroup
  pic
  constructor(public alertCtrl:AlertController,public actionsheetCtrl:ActionSheetController,public formbuilder:FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
  this.Bidform=formbuilder.group({
    firstName: ['', Validators.compose([Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    lastName:['', Validators.compose([Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    // Address:['', ],
    Phoneno:['',Tradesmansignup.isValid]
       })
  this.pic="assets/img/pa-1.png"
  }
  static isValid(control: FormControl): any {
 
        if(isNaN(control.value)){
            return {
                "not a number": true
            };
        }
 
        if(control.value % 1 !== 0){
            return {
                "not a whole number": true
            };
        }
 
        if(control.value < 1000000000){
            return {
                "too young": true
            };
        }

        return null;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tradesmansignup');
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
            alert(this.pic)
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
            alert(this.pic)
            }, (err) => {
              // alert('Camera is not Working')
            })
  }
  next(){

  
localStorage['tradesfirstName']=this.Bidform.controls["firstName"].value
localStorage['tradeslastName']=this.Bidform.controls["lastName"].value
localStorage['tradesAddress']='null'
localStorage['Phoneno']=this.Bidform.controls["Phoneno"].value

  this.navCtrl.push('Tradesmannext2signup')

  	// let alert=this.alertCtrl.create({
   //            subTitle:'Please Upload Your Busineess  License',
   //            buttons:[{
   //              text:'OK',
   //              handler:data=>{
   //                this.navCtrl.setRoot('Mypost')
   //              }
   //            }]
   //          })
   //          alert.present();
   // this.navCtrl.push('Tradesmansingupnext',{firstName:this.Bidform.controls["firstName"].value,lastName:this.Bidform.controls["lastName"].value,Address:this.Bidform.controls["Address"].value,Phoneno:this.Bidform.controls["Phoneno"].value})

  }
}
