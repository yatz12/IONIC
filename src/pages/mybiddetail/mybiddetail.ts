import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Mybiddetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Mybiddetail',
	segment:'Mybiddetail'
})
@Component({
  selector: 'page-mybiddetail',
  templateUrl: 'mybiddetail.html',
})
export class Mybiddetail {
mybiddata
index
image1
image2
image3
jobtitle
jobcategory
jobdescription
jobloc
endtime
date
img1:boolean
img2:boolean
img3:boolean
img11:boolean
img12:boolean
img13:boolean
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.mybiddata=this.navParams.get('mybiddata')
     this.index=this.navParams.get('i')

this.image1=this.mybiddata[this.index].image1
this.image2=this.mybiddata[this.index].image2
this.image3=this.mybiddata[this.index].image3
this.jobtitle=this.mybiddata[this.index].job_title
this.jobcategory=this.mybiddata[this.index].job_category
this.jobdescription=this.mybiddata[this.index].job_description
this.jobloc=this.mybiddata[this.index].joblocation
this.endtime=this.mybiddata[this.index].end_time
this.date=this.mybiddata[this.index].date
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
    console.log('ionViewDidLoad Mybiddetail');
  }


}
