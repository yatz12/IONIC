import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import {Geolocation}from'ionic-native';
import{Observable}from'rxjs/Rx'
import{Security}from'../../providers/security'
declare var google;
/**
 * Generated class for the Nearbyjobs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Nearbyjobs',
	segment:'Nearbyjobs'
})
@Component({
  selector: 'page-nearbyjobs',
  templateUrl: 'nearbyjobs.html',
})
export class Nearbyjobs {
map:any
map1:any
map2:any
currentlat
currentlng
allmilesdiv:boolean
hunderedmilesdiv:boolean
twohunderedmilesdiv:boolean
bigdata
bigdata2
bigdata3
markers:any=[]
markers1:any=[]
markers2:any=[]
mapchange
  constructor(public securityprovider:Security,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {
  this.allmilesdiv=true
 this.hunderedmilesdiv=false
 this.twohunderedmilesdiv=false
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Nearbyjobs');
 Geolocation.getCurrentPosition().then((position)=>{
  let nearbytrades=document.getElementById('nearbytrades')
  this.currentlat=position.coords.latitude
  this.currentlng=position.coords.longitude
  this.map=new google.maps.Map(nearbytrades,{
  	center:{lat:position.coords.latitude,lng:position.coords.longitude},
  	zoom:15,
  	mapTypeId: google.maps.MapTypeId.ROADMAP,
   disableDefaultUI:true  	
  })
 
this.addMarker(position.coords.latitude,position.coords.longitude)
this.allmiles(position.coords.latitude,position.coords.longitude)
 })

}
allmiles(a,b)
{

  let event=1
  let loading=this.loadingCtrl.create({
  content:'Please Wait..'
})

Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.securityprovider.nearby(localStorage['email'],a,b,event))
.subscribe(data=>{
  loading.dismiss()
  
if(data.result.status==1)
{
this.bigdata=data.result.jobs

this.alladdMarker1()
// this.allmilesdiv=false
// this.hunderedmilesdiv=true
// this.hundredmiles()
}


})
}
alladdMarker1()
{

let latarr=[]
let lngarr=[]
let id=[]
let email=[]
let job_category=[]
let job_title=[]
let job_description=[]
let image1=[]
let image2=[]
let image3=[]
let job_location=[]
let date=[]
let start_time=[]
let end_time=[]
let firstname=[]
let user_image=[]
let i:number=0;

// let j:number=0;
// let k:number=0;
// let l:number=0;
for(let valuelatlng of this.bigdata)
{

latarr[i]=valuelatlng.latitude
lngarr[i]=valuelatlng.longitude
id[i]=valuelatlng.id
email[i]=valuelatlng.email
job_category[i]=valuelatlng.job_category
job_title[i]=valuelatlng.job_title
job_description[i]=valuelatlng.job_description
image1[i]=valuelatlng.image1
image2[i]=valuelatlng.image2
image3[i]=valuelatlng.image3
job_location[i]=valuelatlng.job_location
date[i]=valuelatlng.date
start_time[i]=valuelatlng.start_time
end_time[i]=valuelatlng.end_time
firstname[i]=valuelatlng.firstname
user_image[i]=valuelatlng.user_image
console.log(valuelatlng.latitude+'--'+valuelatlng.longitude)
let latlng=new google.maps.LatLng(latarr[i],lngarr[i])
let marker=new google.maps.Marker({
  map:this.map,
   animation: google.maps.Animation.DROP,
   position: latlng,
   icon: 'assets/img/001-signs-2.png',
});

this.markers.push(marker);
this.addinfowindow(marker,latarr[i],lngarr[i],id[i],email[i],job_category[i],
  job_title[i],job_description[i],
  image1[i],image2[i],image3[i],
  job_location[i],date[i],start_time[i],end_time[i]
  ,firstname[i],user_image[i]
)
i++
// j++
}
}
addinfowindow(marker,lat,lng,id,email,job_category,job_title,
  job_description,image1,image2,image3,job_location
  ,date,start_time,end_time,firstname,user_image)
{
  google.maps.event.addListener(marker, 'click', () => {

   console.log(lat);
   console.log(lng);
   console.log(id);
   console.log(email)
   console.log(job_category)
   console.log(job_title)

console.log(job_description);
   console.log(image1);
   console.log(image2);
   console.log(image3)
   console.log(job_location)
   console.log(date)

   console.log(start_time);
   console.log(end_time);
   console.log(firstname)
   console.log(user_image)

   this.navCtrl.push('Nearbyjobsdetail',{email:email,job_category:job_category,
     job_title:job_title,job_description:job_description,
     image1:image1,image2:image2,image3:image3,
     job_location:job_location,date:date,start_time:start_time,      
     end_time:end_time,firstname:firstname,user_image:user_image
   })
 });


}

hundredmiles(){
    this.allmilesdiv=false
    this.twohunderedmilesdiv=false
this.hunderedmilesdiv=true
 Geolocation.getCurrentPosition().then((position)=>{
  let nearbytrades=document.getElementById('nearbytradeshundred')
  this.map1=new google.maps.Map(nearbytrades,{
    center:{lat:position.coords.latitude,lng:position.coords.longitude},
    zoom:15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
   disableDefaultUI:true
   
  })
 console.log('pikabu')
this.alladdMarker2()

 })


}
addMarker(a,b)
{
// alert(a+'--'+b)
 var posloc=new google.maps.LatLng(a,b)
var marker=new google.maps.Marker
({
	position:posloc,
	animation: google.maps.Animation.DROP,
    map:this.map,
     icon: 'assets/img/004-gps.png',

})


}
onChange(event){
  this.mapchange=event

  let loading=this.loadingCtrl.create({
  content:'Please Wait..'
})

Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.securityprovider.nearby(localStorage['email'],this.currentlat,this.currentlng,event))
.subscribe(data=>{
  loading.dismiss()

  console.log('check'+this.mapchange)
if(this.mapchange==2)
{
  this.bigdata2=data.result.jobs
this.hundredmiles()
console.log('sa')
}
else if(this.mapchange==3)
{
  this.bigdata3=data.result.jobs
  console.log('adasd')
this.twohundredmiles()

}
// if(data.result.status==1)
// {
// this.bigdata=data.result.jobs
// }


})
}


twohundredmiles(){
    this.allmilesdiv=false
    this.hunderedmilesdiv=false
this.twohunderedmilesdiv=true

 Geolocation.getCurrentPosition().then((position)=>{
  let nearbytrades=document.getElementById('nearbytradestwohundred')
  this.map2=new google.maps.Map(nearbytrades,{
    center:{lat:position.coords.latitude,lng:position.coords.longitude},
    zoom:15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
   disableDefaultUI:true
       
  })
 console.log('kop')

this.alladdMarker3()
 })


}

alladdMarker2()
{

let latarr=[]
let lngarr=[]
let id=[]
let email=[]
let job_category=[]
let job_title=[]
let job_description=[]
let image1=[]
let image2=[]
let image3=[]
let job_location=[]
let date=[]
let start_time=[]
let end_time=[]
let firstname=[]
let user_image=[]
let i:number=0;
let j:number=0;
for(let valuelatlng of this.bigdata2)
{

latarr[i]=valuelatlng.latitude
lngarr[i]=valuelatlng.longitude
id[i]=valuelatlng.id
email[i]=valuelatlng.email
job_category[i]=valuelatlng.job_category
job_title[i]=valuelatlng.job_title
job_description[i]=valuelatlng.job_description
image1[i]=valuelatlng.image1
image2[i]=valuelatlng.image2
image3[i]=valuelatlng.image3
job_location[i]=valuelatlng.job_location
date[i]=valuelatlng.date
start_time[i]=valuelatlng.start_time
end_time[i]=valuelatlng.end_time
firstname[i]=valuelatlng.firstname
user_image[i]=valuelatlng.user_image




console.log(valuelatlng.latitude+'--'+valuelatlng.longitude)
let latlng=new google.maps.LatLng(latarr[i],lngarr[i])
let marker=new google.maps.Marker({
  map:this.map1,
   animation: google.maps.Animation.DROP,
      position: latlng,
        icon: 'assets/img/002-signs-1.png'
});

this.markers1.push(marker);
this.addinfowindow(marker,latarr[i],lngarr[i],id[i],email[i],job_category[i],
  job_title[i],job_description[i],
  image1[i],image2[i],image3[i],
  job_location[i],date[i],start_time[i],end_time[i]
  ,firstname[i],user_image[i]
)


i++
j++
}
}
alladdMarker3()
{

let latarr=[]
let lngarr=[]
let id=[]
let email=[]
let job_category=[]
let job_title=[]
let job_description=[]
let image1=[]
let image2=[]
let image3=[]
let job_location=[]
let date=[]
let start_time=[]
let end_time=[]
let firstname=[]
let user_image=[]
let i:number=0;
let j:number=0;
for(let valuelatlng of this.bigdata3)
{

latarr[i]=valuelatlng.latitude
lngarr[i]=valuelatlng.longitude
id[i]=valuelatlng.id
email[i]=valuelatlng.email
job_category[i]=valuelatlng.job_category
job_title[i]=valuelatlng.job_title
job_description[i]=valuelatlng.job_description
image1[i]=valuelatlng.image1
image2[i]=valuelatlng.image2
image3[i]=valuelatlng.image3
job_location[i]=valuelatlng.job_location
date[i]=valuelatlng.date
start_time[i]=valuelatlng.start_time
end_time[i]=valuelatlng.end_time
firstname[i]=valuelatlng.firstname
user_image[i]=valuelatlng.user_image
console.log(valuelatlng.latitude+'--'+valuelatlng.longitude)
let latlng=new google.maps.LatLng(latarr[i],lngarr[j])
let marker=new google.maps.Marker({
  map:this.map2,
   animation: google.maps.Animation.DROP,
      position: latlng,
        icon: 'assets/img/001-signs.png'
});

this.markers2.push(marker);
this.addinfowindow(marker,latarr[i],lngarr[i],id[i],email[i],job_category[i],
  job_title[i],job_description[i],
  image1[i],image2[i],image3[i],
  job_location[i],date[i],start_time[i],end_time[i]
  ,firstname[i],user_image[i]
)
i++
j++
}
}


}
