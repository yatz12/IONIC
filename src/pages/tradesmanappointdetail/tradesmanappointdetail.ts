import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

/**
 * Generated class for the Tradesmanappointdetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Tradesmanappointdetail',
	segment:'Tradesmanappointdetail'
})
@Component({
  selector: 'page-tradesmanappointdetail',
  templateUrl: 'tradesmanappointdetail.html',
})
export class Tradesmanappointdetail {
image1
image2
image3
img1:boolean
img2:boolean
img3:boolean
img11:boolean
img12:boolean
img13:boolean
appointementdatalist
i
job_title
job_description
job_location
date
time
job_category
lat
lng
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
 this.appointementdatalist=this.navParams.get('appointementdatalist')
 this.i=this.navParams.get('i')
console.log('appointementdatalist'+this.i)

this.image1=this.appointementdatalist[this.i].image1
this.image2=this.appointementdatalist[this.i].image2
this.image3=this.appointementdatalist[this.i].image3
this.job_title=this.appointementdatalist[this.i].job_title
this.job_description=this.appointementdatalist[this.i].job_description
this.job_location=this.appointementdatalist[this.i].job_location

this.date=this.appointementdatalist[this.i].date
this.time=this.appointementdatalist[this.i].time
this.job_category=this.appointementdatalist[this.i].job_category
this.lat=this.appointementdatalist[this.i].lat
this.lng=this.appointementdatalist[this.i].lng

localStorage['lattrades']=this.lat
localStorage['lngtrades']=this.lng

 if(this.image1==null)
            {
                 this.img1=true
                 
            }
            else{
              this.img11=true
            }
               
             if(this.image2==null)
            {
                 this.img2=true
                  
            }
            else{
              this.img12=true
            }

             if(this.image3==null)
            {
                 this.img3=true
                
            }
            else{
              this.img13=true
            }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tradesmanappointdetail');
  }

  VIEWLOACATION()
  {
let  modal=this.modalCtrl.create('Tradesappointdetaillocation')
modal.present();
modal.onDidDismiss(data=>{
this.navCtrl.setRoot(data)
})
// this.navCtrl.push('Tradesappointdetaillocation')

       

    // this.navCtrl.setRoot('Tradesappointdetaillocation')
  }

}
