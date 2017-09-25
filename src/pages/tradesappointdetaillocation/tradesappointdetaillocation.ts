import { Component ,ViewChild,ElementRef} from '@angular/core';
import { LoadingController,IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import{Geolocation}from'ionic-native'
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'
declare var google;
/**
 * Generated class for the Tradesappointdetaillocation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Tradesappointdetaillocation',
	segment:'Tradesappointdetaillocation'
})
@Component({
  selector: 'page-tradesappointdetaillocation',
  templateUrl: 'tradesappointdetaillocation.html',
})
export class Tradesappointdetaillocation {
@ViewChild('detailmap') Elementmap:ElementRef
detailmap:any
lat
lng
job_location
  constructor(public securityprovider:Security,public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
         this.lat=this.navParams.get('lat')
         this.lng=this.navParams.get('lng')
          this.job_location=this.navParams.get('job_location')
// alert(localStorage['lngtrades']+'+'++'+'+this.job_location)

  }

ionViewDidLoad(){
  //   console.log('ionViewDidLoad Tradesappointdetaillocation');
  // Geolocation.getCurrentPosition().then((position)=>{
  // 	let tradesmap=document.getElementById('tradesmap')
  // 	this.map=new google.maps.Map(tradesmap,{
  // 		center: {lat:localStorage['lattrades'], lng:localStorage['lngtrades']},
  // 		zoom:15,
  // 	    mapTypeId: google.maps.MapTypeId.ROADMAP,
  //       disableDefaultUI:true
  // 	})
  // })
  this.loadMap()










 }
 loadMap(){
   let latlng=new google.maps.LatLng(localStorage['lattrades'],localStorage['lngtrades']);
  let mapOptions={
    center:latlng,
    zoom:15,
     mapTypeId: google.maps.MapTypeId.ROADMAP
  }

this.detailmap=new google.maps.Map(this.Elementmap.nativeElement,mapOptions)
this.addMarker(localStorage['lattrades'],localStorage['lngtrades'])







 }
addMarker(a,b)
{
// alert(a+'--'+b)
 var posloc=new google.maps.LatLng(a,b)
var marker=new google.maps.Marker
({
  position:posloc,
  animation: google.maps.Animation.DROP,
    map:this.detailmap,
     icon: 'assets/img/004-gps.png',

})


}
close()
{
this.viewCtrl.dismiss('Tradesmanappointdetail')

}





}
