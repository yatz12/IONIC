import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ActionSheetController,LoadingController,AlertController} from 'ionic-angular';
import{Camera}from'ionic-native'
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'
import{ImagePicker}from'@ionic-native/image-picker'
import{FileTransfer,FileUploadOptions,FileTransferObject}from'@ionic-native/file-transfer'
import{Http}from'@angular/http'

/**
 * Generated class for the JobPostlocation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage(
{
	name:'JobPostlocation',
	segment:'JobPostlocation'
})
@Component({
  selector: 'page-job-postlocation',
  templateUrl: 'job-postlocation.html',
})
export class JobPostlocation {
apic
bpic
cpic
jobarray=[];
lat
lng
address
date
start_time
end_time
image1
image2
image3
imagepick
width
height
imagearray=[]
imageprint
tap1:boolean
tap2:boolean
tap3:boolean

  constructor(public http:Http,public transfer:FileTransfer,public imagepicker:ImagePicker,public alertCtrl:AlertController,public securityprovider:Security,public navCtrl: NavController, public navParams: NavParams,public actionsheet:ActionSheetController,public loadingCtrl:LoadingController) {
  	this.apic="assets/img/001-sign.png"
    this.bpic="assets/img/001-sign.png"
    this.cpic="assets/img/001-sign.png"
  this.lat=this.navParams.get('lat')
  this.lng=this.navParams.get('lng')
this.address=this.navParams.get('address')

this.date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
this.tap1=true
 this.tap2=true
 this.tap3=true 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobPostlocation');
  }
validcheck()
{




}
ImageUpload1()
{
	let actionsheet=this.actionsheet.create({
    	title:'Image Upload!',
    	buttons:[{
    		text:'Upload From Gallery',
    		handler:()=>{
                this.gallery1() 
                this.tap1=false    
    		},
    	}
    	,
    	{
    		text:'Take A Snap',
    		handler:()=>{
    		this.camera1();
        this.tap1=false
    		}
    	}]

    })
    actionsheet.present();
}

gallery1(){
 
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

            this.apic = "data:image/jpeg;base64," + imageData;
           
            }, (err) => {console.log('hi')})
}
camera1()
{
  
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
            this.apic = "data:image/jpeg;base64," + imageData;
            }, (err) => {console.log('hi')})
}


ImageUpload2()
{
	let actionsheet=this.actionsheet.create({
    	title:'Image Upload!',
    	buttons:[{
    		text:'Upload From Gallery',
    		handler:()=>{
                 this.gallery2();
                 this.tap2=false         
    		},
    	}
    	,
    	{
    		text:'Take A Snap',
    		handler:()=>{
    		this.camera2();
        this.tap2=false
    		}
    	}]

    })
    actionsheet.present();
}

gallery2()
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
            this.bpic = "data:image/jpeg;base64," + imageData;
            
            }, (err) => {console.log('hi')})
}
camera2()
{
  
Camera.getPicture({
              quality: 75,
              destinationType: Camera.DestinationType.DATA_URL,
              sourceType: Camera.PictureSourceType.CAMERA,
              encodingType: Camera.EncodingType.JPEG,
              targetHeight:500,
              targetWidth:500,
              saveToPhotoAlbum: false
            }).then((imageData) => {
            this.bpic = "data:image/jpeg;base64," + imageData;
            
            }, (err) => {console.log('hi')})
}

ImageUpload3()
{
	let actionsheet=this.actionsheet.create({
    	title:'Image Upload!',
    	buttons:[{
    		text:'Upload From Gallery',
    		handler:()=>{
                    this.gallery3();
                    this.tap3=false         
    		},
    	}
    	,
    	{
    		text:'Take A Snap',
    		handler:()=>{
    		 this.camera3()
         this.tap3=false
    		}
    	}]

    })
    actionsheet.present();
}


gallery3()
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
            this.cpic = "data:image/jpeg;base64," + imageData;
            
            }, (err) => {console.log('hi')})
}

camera3()
{
  
Camera.getPicture({
              quality: 75,
              destinationType: Camera.DestinationType.DATA_URL,
              sourceType: Camera.PictureSourceType.CAMERA,
              encodingType: Camera.EncodingType.JPEG,
              targetHeight:500,
              targetWidth:500,
              saveToPhotoAlbum: false
            }).then((imageData) => {
            this.cpic = "data:image/jpeg;base64," + imageData;
            
            }, (err) => {console.log('hi')})
}
postjob()
{

if(this.start_time>this.end_time||this.start_time==this.end_time)
{
let alert=this.alertCtrl.create({
  subTitle:'Start time is more than End Time',
  buttons:['OK']
})
alert.present()
}
else if(this.start_time<this.end_time)
{







 let partial={
  date:this.date,
  start_time:this.start_time,
  end_time:this.end_time
}
let mandatoryfields:string[]=[];
if(!partial.date)
{
  mandatoryfields.push('Date')
}
if(!partial.start_time)
{
  mandatoryfields.push('StartTime')
}
if(!partial.end_time)
{
  mandatoryfields.push('EndTime')
}
 if(mandatoryfields.length>0)
 {
let alertctr=this.alertCtrl.create({
  title:'Mandatory Feilds!',
  message:mandatoryfields.join(','),
    buttons:['OK']
})
alertctr.present();
 }
 else{
	if(this.apic=="assets/img/001-sign.png")
	{

		this.apic=null
		
	}
        
if(this.bpic=="assets/img/001-sign.png")
	{
		this.bpic=null
	
	}
     if(this.cpic=="assets/img/001-sign.png")
	{
		this.cpic=null
	
	}
   // this.jobarray.push(this.apic,this.bpic,this.cpic)   
let loading =this.loadingCtrl.create({content:'Wait..'});
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.securityprovider.jobbpostservice(localStorage['id'],
 localStorage['job_title'],
localStorage['job_category'],
localStorage['job_description'],
localStorage['price'],
this.address,
this.lat,
this.lng,
this.apic,
this.bpic,
this.cpic,
this.date,
this.start_time,
this.end_time,
localStorage['fbstatus']
)) 
 .subscribe(data=>{
          loading.dismiss();
          console.log(data.result.status)
        if(data.result.status==1)
        {
            let alert=this.alertCtrl.create({
              subTitle:'Your Job is Posted',
              buttons:[{
                text:'OK',
                handler:data=>{
                  this.navCtrl.setRoot('Mypost')
                }
              }]
            })
            alert.present();
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
}
pickimage()
{
this.imagepicker.getPictures(Option).then((results)=>{
for(var i=0;i<results.length;i++)
{
  // alert(results[i])
  this.imagepick=results[i]
this.imagearray.push({image:this.imagepick})


//   var c=document.createElement('canvas');
//      var ctx=c.getContext("2d");
//      var img=new Image();
//      img.onload = ()=>{
//        c.width=this.width;
//        c.height=this.height;
//        ctx.drawImage(img, 0,0);
//      };
//      img.src=this.imagepick;
//      var dataURL = c.toDataURL("image/jpeg");
//  this.imagearray.push({image:dataURL})
// this.imageprint=this.imagearray[0].image
if(results.length==i+1)
{
this.filesend(this.imagearray)
}
// alert(this.imageprint)
// alert('pikabu'+JSON.stringify(this.imagearray))
} 

  },(err)=>{
    alert(err)
  })
}
filesend(imagearray)
{
// alert('file'+JSON.stringify(imagearray))
var imagearrays='dsds'
   let options: FileUploadOptions = {
  fileKey: "image",
            chunkedMode: false,
            mimeType: "image/jpg"
  }
  // alert(JSON.stringify(imagearray))
  const filetransfer:FileTransferObject=this.transfer.create()
filetransfer.upload(imagearrays,'http://europa.promaticstechnologies.com/bidwork/api/image/upload',options).then((data)=>{
alert('hi'+JSON.stringify(data))
},(err)=>{
alert('bi'+JSON.stringify(err))
})

}

service()
{
var data=JSON.stringify({
  image:'asdas'
})

this.http.post('http://europa.promaticstechnologies.com/bidwork/api/image/upload',data).subscribe(data=>{
console.log(data)
})

}


}
