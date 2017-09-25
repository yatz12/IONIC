import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the Listofcategorydetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Listofcategorydetails',
	segment:'Listofcategorydetails'
})
@Component({
  selector: 'page-listofcategorydetails',
  templateUrl: 'listofcategorydetails.html',
})
export class Listofcategorydetails {
jobdata
i
image
jobdatacategories
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
    
   this.jobdata=this.navParams.get('job_data')
this.i=this.navParams.get('i')
 this.jobdatacategories=this.jobdata[this.i].bid
// alert('pikabu'+this.jobdata[this.i].bid)
if(this.jobdatacategories=='')
{
	let alert=this.alertCtrl.create({
		subTitle:'No Bid Found For this Category',
		buttons:['ok']

	})
	alert.present()
}
  }

  ionViewDidLoad() {
   
  }

}
