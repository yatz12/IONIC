import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Geolocation}from'ionic-native'
declare var google;
/**
 * Generated class for the ViewonMapTradesbid page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'ViewonMapTradesbid',
	segment:'ViewonMapTradesbid'
})
@Component({
  selector: 'page-viewon-map-tradesbid',
  templateUrl: 'viewon-map-tradesbid.html',
})
export class ViewonMapTradesbid {
@ViewChild('viewmap') Elementmap:ElementRef
viewmap:any
lat
lng
job_location

  constructor(public navCtrl: NavController, public navParams: NavParams) {
		console.log('dssd'+localStorage['tradeslat']+','+localStorage['tradeslng'])
this.lat=parseFloat(localStorage['tradeslat'])
this.lng=parseFloat(localStorage['tradeslng'])

		  }

  ionViewDidLoad() {
      this.loadMap()
  }
  loadMap(){
   let latlng=new google.maps.LatLng(this.lat,this.lng);
  let mapOptions={
    center:latlng,
    zoom:15,
     mapTypeId: google.maps.MapTypeId.ROADMAP
  }

this.viewmap=new google.maps.Map(this.Elementmap.nativeElement,mapOptions)
this.addMarker(this.lat,this.lng)

 }
addMarker(a,b)
{
// alert(a+'--'+b)
 var posloc=new google.maps.LatLng(a,b)
var marker=new google.maps.Marker
({
  position:posloc,
  animation: google.maps.Animation.DROP,
    map:this.viewmap,
     icon: 'assets/img/004-gps.png',

})


}
close()
{
this.navCtrl.pop()

}

}
