import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Nearbyjobsdetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Nearbyjobsdetail',
	segment:'Nearbyjobsdetail'
})
@Component({
  selector: 'page-nearbyjobsdetail',
  templateUrl: 'nearbyjobsdetail.html',
})
export class Nearbyjobsdetail {
email
job_category
job_title
job_description
image1
image2
image3
job_location
date
start_time
end_time
firstname
user_image
img1:boolean
img2:boolean
img3:boolean
img11:boolean
img12:boolean
img13:boolean
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.email=this.navParams.get('email')
     this.job_category=this.navParams.get('job_category')
     this.job_title=this.navParams.get('job_title')
     this.job_description=this.navParams.get('job_description')
     this.image1=this.navParams.get('image1')
     this.image2=this.navParams.get('image2')
     this.image3=this.navParams.get('image3')
     this.job_location=this.navParams.get('job_location')
     this.date=this.navParams.get('date')
     this.start_time=this.navParams.get('start_time')
     this.end_time=this.navParams.get('end_time')
     this.firstname=this.navParams.get('firstname')
     this.user_image=this.navParams.get('user_image')

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
    console.log('ionViewDidLoad Nearbyjobsdetail');
  }

}
