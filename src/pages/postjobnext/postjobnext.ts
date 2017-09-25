import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import{UserDataProvider}from'../../providers/user-data';
import{ModalAutocompleteItems}from'../modal-autocomplete-items/modal-autocomplete-items'
import{Geolocation}from'ionic-native'
declare var google:any;
/**
 * Generated class for the Postjobnext page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
	name:'Postjobnext',
	segment:'Postjobnext-page'
})
@Component({
  selector: 'page-postjobnext',
  templateUrl: 'postjobnext.html',
})
export class Postjobnext  implements OnInit {
userdata
 address:any = {
        place: '',
        set: false,
    };
    placesService:any;
    map: any;
    markers = [];
    placedetails: any;
       bidlat;
       bidlng;
         bidlat1;
         bidlng1;

  constructor(public userDataProvider:UserDataProvider,public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
   this.bidlat1=this.navParams.get('bidlat1')
    this.bidlng1=this.navParams.get('bidlng1')

  }







  ionViewDidLoad() {
    console.log('ionViewDidLoad Postjobnext');
  }
tap()
{
this.navCtrl.push('JobPostlocation')	  	 
  // alert('USERDATA'+this.userDataProvider.JOBCATEGORY.user_data)
}

 ngOnInit() {
        this.initMap();
        this.initPlacedetails();
    }

    showModal() {
        // reset 
        this.reset();
        // show modal|
        let modal = this.modalCtrl.create(ModalAutocompleteItems);
        modal.onDidDismiss(data => {
            console.log('page > modal dismissed > data > ', data);
            if(data){
                this.address.place = data.description;
                // get details
                this.getPlaceDetail(data.place_id);
            }                
        })
        modal.present();
    }

    private reset() {
        this.initPlacedetails();
        this.address.place = '';
        this.address.set = false;

    }

    private getPlaceDetail(place_id:string):void {
        var self = this;
        var request = {
            placeId: place_id
        };
        this.placesService = new google.maps.places.PlacesService(this.map);
        this.placesService.getDetails(request, callback);
        function callback(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log('page > getPlaceDetail > place > ', place);
                // set full address
                self.placedetails.address = place.formatted_address;
                self.placedetails.lat = place.geometry.location.lat();
                self.placedetails.lng = place.geometry.location.lng();
                for (var i = 0; i < place.address_components.length; i++) {
                    let addressType = place.address_components[i].types[0];
                    let values = {
                        short_name: place.address_components[i]['short_name'],
                        long_name: place.address_components[i]['long_name']
                    }
                    if(self.placedetails.components[addressType]) {
                        self.placedetails.components[addressType].set = true;
                        self.placedetails.components[addressType].short = place.address_components[i]['short_name'];
                        self.placedetails.components[addressType].long = place.address_components[i]['long_name'];
                    }                                     
                }                  
                // set place in map
                self.map.setCenter(place.geometry.location);
                self.createMapMarker(place);
                // populate
                self.address.set = true;
                console.log('page > getPlaceDetail > details > ', self.placedetails);
            }else{
                console.log('page > getPlaceDetail > status > ', status);
            }
        }
    }

    private initMap() {
 // var point = {lat:this.bidlat1, lng:this.bidlng1}; 
 //        let divMap = (<HTMLInputElement>document.getElementById('map'));
 //        this.map = new google.maps.Map(divMap, {
 //            center: point,
 //            zoom: 15,
 //            disableDefaultUI: true,
 //            draggable: false,
 //            zoomControl: true,
 //            mapTypeId: google.maps.MapTypeId.ROADMAP,
 //        });
    
 //    this.addMarker(this.bidlat1,this.bidlng1)
    


        Geolocation.getCurrentPosition().then((position) => {
      console.log(position)
         let mapEle = document.getElementById('map');
      this.map = new google.maps.Map(mapEle,{
      center: {lat:position.coords.latitude, lng: position.coords.longitude},
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    });

     google.maps.event.addListenerOnce(this.map, 'idle', () => {
     mapEle.classList.add('show-map');
     google.maps.event.trigger(mapEle, 'resize');
    });
       let latlan = this;
       this.addMarker(position.coords.latitude,position.coords.longitude);

 
    }, (err) => {
      console.log(err);
    });




    }




addMarker(a,b){

  let marker = new google.maps.Marker({
    map: this.map,
   
     position: {lat:a, lng: b},
        icon: 'assets/001-signs.png',

  });
  let content = "<b>Current-Location!</b>";  

 console.log('hi');

  }











    private createMapMarker(place:any):void {
        // alert(this.address.place)
        var placeLoc = place.geometry.location;
       this.bidlat=place.geometry.location.lat()
       this.bidlng=place.geometry.location.lng()
       
        var marker = new google.maps.Marker({
          map: this.map,
          position: placeLoc
        });    
        this.markers.push(marker);
        setTimeout(()=>{this.navCtrl.push('JobPostlocation',{lat:this.bidlat,lng:this.bidlng,address:this.address.place})},3000)
    
    }
    

    private initPlacedetails() {
        this.placedetails = {
            address: '',
            lat: '',
            lng: '',
            components: {
                route: { set: false, short:'', long:'' },                           // calle 
                street_number: { set: false, short:'', long:'' },                   // numero
                sublocality_level_1: { set: false, short:'', long:'' },             // barrio
                locality: { set: false, short:'', long:'' },                        // localidad, ciudad
                administrative_area_level_2: { set: false, short:'', long:'' },     // zona/comuna/partido 
                administrative_area_level_1: { set: false, short:'', long:'' },     // estado/provincia 
                country: { set: false, short:'', long:'' },                         // pais
                postal_code: { set: false, short:'', long:'' },                     // codigo postal
                postal_code_suffix: { set: false, short:'', long:'' },              // codigo postal - sufijo
            }    
        };        
} 

}
