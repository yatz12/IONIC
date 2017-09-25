var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data';
import { ModalAutocompleteItems } from '../modal-autocomplete-items/modal-autocomplete-items';
import { Geolocation } from 'ionic-native';
/**
 * Generated class for the Postjobnext page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Postjobnext = (function () {
    function Postjobnext(userDataProvider, navCtrl, navParams, modalCtrl) {
        this.userDataProvider = userDataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.address = {
            place: '',
            set: false,
        };
        this.markers = [];
        this.bidlat1 = this.navParams.get('bidlat1');
        this.bidlng1 = this.navParams.get('bidlng1');
    }
    Postjobnext.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Postjobnext');
    };
    Postjobnext.prototype.tap = function () {
        this.navCtrl.push('JobPostlocation');
        // alert('USERDATA'+this.userDataProvider.JOBCATEGORY.user_data)
    };
    Postjobnext.prototype.ngOnInit = function () {
        this.initMap();
        this.initPlacedetails();
    };
    Postjobnext.prototype.showModal = function () {
        var _this = this;
        // reset 
        this.reset();
        // show modal|
        var modal = this.modalCtrl.create(ModalAutocompleteItems);
        modal.onDidDismiss(function (data) {
            console.log('page > modal dismissed > data > ', data);
            if (data) {
                _this.address.place = data.description;
                // get details
                _this.getPlaceDetail(data.place_id);
            }
        });
        modal.present();
    };
    Postjobnext.prototype.reset = function () {
        this.initPlacedetails();
        this.address.place = '';
        this.address.set = false;
    };
    Postjobnext.prototype.getPlaceDetail = function (place_id) {
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
                    var addressType = place.address_components[i].types[0];
                    var values = {
                        short_name: place.address_components[i]['short_name'],
                        long_name: place.address_components[i]['long_name']
                    };
                    if (self.placedetails.components[addressType]) {
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
            }
            else {
                console.log('page > getPlaceDetail > status > ', status);
            }
        }
    };
    Postjobnext.prototype.initMap = function () {
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
        var _this = this;
        //    this.addMarker(this.bidlat1,this.bidlng1)
        Geolocation.getCurrentPosition().then(function (position) {
            console.log(position);
            var mapEle = document.getElementById('map');
            _this.map = new google.maps.Map(mapEle, {
                center: { lat: position.coords.latitude, lng: position.coords.longitude },
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true
            });
            google.maps.event.addListenerOnce(_this.map, 'idle', function () {
                mapEle.classList.add('show-map');
                google.maps.event.trigger(mapEle, 'resize');
            });
            var latlan = _this;
            _this.addMarker(position.coords.latitude, position.coords.longitude);
        }, function (err) {
            console.log(err);
        });
    };
    Postjobnext.prototype.addMarker = function (a, b) {
        var marker = new google.maps.Marker({
            map: this.map,
            position: { lat: a, lng: b },
            icon: 'assets/001-signs.png',
        });
        var content = "<b>Current-Location!</b>";
        console.log('hi');
    };
    Postjobnext.prototype.createMapMarker = function (place) {
        var _this = this;
        // alert(this.address.place)
        var placeLoc = place.geometry.location;
        this.bidlat = place.geometry.location.lat();
        this.bidlng = place.geometry.location.lng();
        var marker = new google.maps.Marker({
            map: this.map,
            position: placeLoc
        });
        this.markers.push(marker);
        setTimeout(function () { _this.navCtrl.push('JobPostlocation', { lat: _this.bidlat, lng: _this.bidlng, address: _this.address.place }); }, 3000);
    };
    Postjobnext.prototype.initPlacedetails = function () {
        this.placedetails = {
            address: '',
            lat: '',
            lng: '',
            components: {
                route: { set: false, short: '', long: '' },
                street_number: { set: false, short: '', long: '' },
                sublocality_level_1: { set: false, short: '', long: '' },
                locality: { set: false, short: '', long: '' },
                administrative_area_level_2: { set: false, short: '', long: '' },
                administrative_area_level_1: { set: false, short: '', long: '' },
                country: { set: false, short: '', long: '' },
                postal_code: { set: false, short: '', long: '' },
                postal_code_suffix: { set: false, short: '', long: '' },
            }
        };
    };
    return Postjobnext;
}());
Postjobnext = __decorate([
    IonicPage({
        name: 'Postjobnext',
        segment: 'Postjobnext-page'
    }),
    Component({
        selector: 'page-postjobnext',
        templateUrl: 'postjobnext.html',
    }),
    __metadata("design:paramtypes", [UserDataProvider, NavController, NavParams, ModalController])
], Postjobnext);
export { Postjobnext };
//# sourceMappingURL=postjobnext.js.map