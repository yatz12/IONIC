var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { LoadingController, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Security } from '../../providers/security';
/**
 * Generated class for the Tradesappointdetaillocation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Tradesappointdetaillocation = (function () {
    function Tradesappointdetaillocation(securityprovider, loadingCtrl, navCtrl, navParams, viewCtrl) {
        this.securityprovider = securityprovider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.lat = this.navParams.get('lat');
        this.lng = this.navParams.get('lng');
        this.job_location = this.navParams.get('job_location');
        // alert(localStorage['lngtrades']+'+'++'+'+this.job_location)
    }
    Tradesappointdetaillocation.prototype.ionViewDidLoad = function () {
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
        this.loadMap();
    };
    Tradesappointdetaillocation.prototype.loadMap = function () {
        var latlng = new google.maps.LatLng(localStorage['lattrades'], localStorage['lngtrades']);
        var mapOptions = {
            center: latlng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.detailmap = new google.maps.Map(this.Elementmap.nativeElement, mapOptions);
        this.addMarker(localStorage['lattrades'], localStorage['lngtrades']);
    };
    Tradesappointdetaillocation.prototype.addMarker = function (a, b) {
        // alert(a+'--'+b)
        var posloc = new google.maps.LatLng(a, b);
        var marker = new google.maps.Marker({
            position: posloc,
            animation: google.maps.Animation.DROP,
            map: this.detailmap,
            icon: 'assets/img/004-gps.png',
        });
    };
    Tradesappointdetaillocation.prototype.close = function () {
        this.viewCtrl.dismiss('Tradesmanappointdetail');
    };
    return Tradesappointdetaillocation;
}());
__decorate([
    ViewChild('detailmap'),
    __metadata("design:type", ElementRef)
], Tradesappointdetaillocation.prototype, "Elementmap", void 0);
Tradesappointdetaillocation = __decorate([
    IonicPage({
        name: 'Tradesappointdetaillocation',
        segment: 'Tradesappointdetaillocation'
    }),
    Component({
        selector: 'page-tradesappointdetaillocation',
        templateUrl: 'tradesappointdetaillocation.html',
    }),
    __metadata("design:paramtypes", [Security, LoadingController, NavController, NavParams, ViewController])
], Tradesappointdetaillocation);
export { Tradesappointdetaillocation };
//# sourceMappingURL=tradesappointdetaillocation.js.map