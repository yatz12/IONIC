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
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { Observable } from 'rxjs/Rx';
import { Security } from '../../providers/security';
/**
 * Generated class for the Nearbyjobs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Nearbyjobs = (function () {
    function Nearbyjobs(securityprovider, navCtrl, navParams, loadingCtrl) {
        this.securityprovider = securityprovider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.markers = [];
        this.markers1 = [];
        this.markers2 = [];
        this.allmilesdiv = true;
        this.hunderedmilesdiv = false;
        this.twohunderedmilesdiv = false;
    }
    Nearbyjobs.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Nearbyjobs');
        Geolocation.getCurrentPosition().then(function (position) {
            var nearbytrades = document.getElementById('nearbytrades');
            _this.currentlat = position.coords.latitude;
            _this.currentlng = position.coords.longitude;
            _this.map = new google.maps.Map(nearbytrades, {
                center: { lat: position.coords.latitude, lng: position.coords.longitude },
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true
            });
            _this.addMarker(position.coords.latitude, position.coords.longitude);
            _this.allmiles(position.coords.latitude, position.coords.longitude);
        });
    };
    Nearbyjobs.prototype.allmiles = function (a, b) {
        var _this = this;
        var event = 1;
        var loading = this.loadingCtrl.create({
            content: 'Please Wait..'
        });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.nearby(localStorage['email'], a, b, event); })
            .subscribe(function (data) {
            loading.dismiss();
            if (data.result.status == 1) {
                _this.bigdata = data.result.jobs;
                _this.alladdMarker1();
                // this.allmilesdiv=false
                // this.hunderedmilesdiv=true
                // this.hundredmiles()
            }
        });
    };
    Nearbyjobs.prototype.alladdMarker1 = function () {
        var latarr = [];
        var lngarr = [];
        var id = [];
        var email = [];
        var job_category = [];
        var job_title = [];
        var job_description = [];
        var image1 = [];
        var image2 = [];
        var image3 = [];
        var job_location = [];
        var date = [];
        var start_time = [];
        var end_time = [];
        var firstname = [];
        var user_image = [];
        var i = 0;
        // let j:number=0;
        // let k:number=0;
        // let l:number=0;
        for (var _i = 0, _a = this.bigdata; _i < _a.length; _i++) {
            var valuelatlng = _a[_i];
            latarr[i] = valuelatlng.latitude;
            lngarr[i] = valuelatlng.longitude;
            id[i] = valuelatlng.id;
            email[i] = valuelatlng.email;
            job_category[i] = valuelatlng.job_category;
            job_title[i] = valuelatlng.job_title;
            job_description[i] = valuelatlng.job_description;
            image1[i] = valuelatlng.image1;
            image2[i] = valuelatlng.image2;
            image3[i] = valuelatlng.image3;
            job_location[i] = valuelatlng.job_location;
            date[i] = valuelatlng.date;
            start_time[i] = valuelatlng.start_time;
            end_time[i] = valuelatlng.end_time;
            firstname[i] = valuelatlng.firstname;
            user_image[i] = valuelatlng.user_image;
            console.log(valuelatlng.latitude + '--' + valuelatlng.longitude);
            var latlng = new google.maps.LatLng(latarr[i], lngarr[i]);
            var marker = new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                position: latlng,
                icon: 'assets/img/001-signs-2.png',
            });
            this.markers.push(marker);
            this.addinfowindow(marker, latarr[i], lngarr[i], id[i], email[i], job_category[i], job_title[i], job_description[i], image1[i], image2[i], image3[i], job_location[i], date[i], start_time[i], end_time[i], firstname[i], user_image[i]);
            i++;
            // j++
        }
    };
    Nearbyjobs.prototype.addinfowindow = function (marker, lat, lng, id, email, job_category, job_title, job_description, image1, image2, image3, job_location, date, start_time, end_time, firstname, user_image) {
        var _this = this;
        google.maps.event.addListener(marker, 'click', function () {
            console.log(lat);
            console.log(lng);
            console.log(id);
            console.log(email);
            console.log(job_category);
            console.log(job_title);
            console.log(job_description);
            console.log(image1);
            console.log(image2);
            console.log(image3);
            console.log(job_location);
            console.log(date);
            console.log(start_time);
            console.log(end_time);
            console.log(firstname);
            console.log(user_image);
            _this.navCtrl.push('Nearbyjobsdetail', { email: email, job_category: job_category,
                job_title: job_title, job_description: job_description,
                image1: image1, image2: image2, image3: image3,
                job_location: job_location, date: date, start_time: start_time,
                end_time: end_time, firstname: firstname, user_image: user_image
            });
        });
    };
    Nearbyjobs.prototype.hundredmiles = function () {
        var _this = this;
        this.allmilesdiv = false;
        this.twohunderedmilesdiv = false;
        this.hunderedmilesdiv = true;
        Geolocation.getCurrentPosition().then(function (position) {
            var nearbytrades = document.getElementById('nearbytradeshundred');
            _this.map1 = new google.maps.Map(nearbytrades, {
                center: { lat: position.coords.latitude, lng: position.coords.longitude },
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true
            });
            console.log('pikabu');
            _this.alladdMarker2();
        });
    };
    Nearbyjobs.prototype.addMarker = function (a, b) {
        // alert(a+'--'+b)
        var posloc = new google.maps.LatLng(a, b);
        var marker = new google.maps.Marker({
            position: posloc,
            animation: google.maps.Animation.DROP,
            map: this.map,
            icon: 'assets/img/004-gps.png',
        });
    };
    Nearbyjobs.prototype.onChange = function (event) {
        var _this = this;
        this.mapchange = event;
        var loading = this.loadingCtrl.create({
            content: 'Please Wait..'
        });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.nearby(localStorage['email'], _this.currentlat, _this.currentlng, event); })
            .subscribe(function (data) {
            loading.dismiss();
            console.log('check' + _this.mapchange);
            if (_this.mapchange == 2) {
                _this.bigdata2 = data.result.jobs;
                _this.hundredmiles();
                console.log('sa');
            }
            else if (_this.mapchange == 3) {
                _this.bigdata3 = data.result.jobs;
                console.log('adasd');
                _this.twohundredmiles();
            }
            // if(data.result.status==1)
            // {
            // this.bigdata=data.result.jobs
            // }
        });
    };
    Nearbyjobs.prototype.twohundredmiles = function () {
        var _this = this;
        this.allmilesdiv = false;
        this.hunderedmilesdiv = false;
        this.twohunderedmilesdiv = true;
        Geolocation.getCurrentPosition().then(function (position) {
            var nearbytrades = document.getElementById('nearbytradestwohundred');
            _this.map2 = new google.maps.Map(nearbytrades, {
                center: { lat: position.coords.latitude, lng: position.coords.longitude },
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true
            });
            console.log('kop');
            _this.alladdMarker3();
        });
    };
    Nearbyjobs.prototype.alladdMarker2 = function () {
        var latarr = [];
        var lngarr = [];
        var id = [];
        var email = [];
        var job_category = [];
        var job_title = [];
        var job_description = [];
        var image1 = [];
        var image2 = [];
        var image3 = [];
        var job_location = [];
        var date = [];
        var start_time = [];
        var end_time = [];
        var firstname = [];
        var user_image = [];
        var i = 0;
        var j = 0;
        for (var _i = 0, _a = this.bigdata2; _i < _a.length; _i++) {
            var valuelatlng = _a[_i];
            latarr[i] = valuelatlng.latitude;
            lngarr[i] = valuelatlng.longitude;
            id[i] = valuelatlng.id;
            email[i] = valuelatlng.email;
            job_category[i] = valuelatlng.job_category;
            job_title[i] = valuelatlng.job_title;
            job_description[i] = valuelatlng.job_description;
            image1[i] = valuelatlng.image1;
            image2[i] = valuelatlng.image2;
            image3[i] = valuelatlng.image3;
            job_location[i] = valuelatlng.job_location;
            date[i] = valuelatlng.date;
            start_time[i] = valuelatlng.start_time;
            end_time[i] = valuelatlng.end_time;
            firstname[i] = valuelatlng.firstname;
            user_image[i] = valuelatlng.user_image;
            console.log(valuelatlng.latitude + '--' + valuelatlng.longitude);
            var latlng = new google.maps.LatLng(latarr[i], lngarr[i]);
            var marker = new google.maps.Marker({
                map: this.map1,
                animation: google.maps.Animation.DROP,
                position: latlng,
                icon: 'assets/img/002-signs-1.png'
            });
            this.markers1.push(marker);
            this.addinfowindow(marker, latarr[i], lngarr[i], id[i], email[i], job_category[i], job_title[i], job_description[i], image1[i], image2[i], image3[i], job_location[i], date[i], start_time[i], end_time[i], firstname[i], user_image[i]);
            i++;
            j++;
        }
    };
    Nearbyjobs.prototype.alladdMarker3 = function () {
        var latarr = [];
        var lngarr = [];
        var id = [];
        var email = [];
        var job_category = [];
        var job_title = [];
        var job_description = [];
        var image1 = [];
        var image2 = [];
        var image3 = [];
        var job_location = [];
        var date = [];
        var start_time = [];
        var end_time = [];
        var firstname = [];
        var user_image = [];
        var i = 0;
        var j = 0;
        for (var _i = 0, _a = this.bigdata3; _i < _a.length; _i++) {
            var valuelatlng = _a[_i];
            latarr[i] = valuelatlng.latitude;
            lngarr[i] = valuelatlng.longitude;
            id[i] = valuelatlng.id;
            email[i] = valuelatlng.email;
            job_category[i] = valuelatlng.job_category;
            job_title[i] = valuelatlng.job_title;
            job_description[i] = valuelatlng.job_description;
            image1[i] = valuelatlng.image1;
            image2[i] = valuelatlng.image2;
            image3[i] = valuelatlng.image3;
            job_location[i] = valuelatlng.job_location;
            date[i] = valuelatlng.date;
            start_time[i] = valuelatlng.start_time;
            end_time[i] = valuelatlng.end_time;
            firstname[i] = valuelatlng.firstname;
            user_image[i] = valuelatlng.user_image;
            console.log(valuelatlng.latitude + '--' + valuelatlng.longitude);
            var latlng = new google.maps.LatLng(latarr[i], lngarr[j]);
            var marker = new google.maps.Marker({
                map: this.map2,
                animation: google.maps.Animation.DROP,
                position: latlng,
                icon: 'assets/img/001-signs.png'
            });
            this.markers2.push(marker);
            this.addinfowindow(marker, latarr[i], lngarr[i], id[i], email[i], job_category[i], job_title[i], job_description[i], image1[i], image2[i], image3[i], job_location[i], date[i], start_time[i], end_time[i], firstname[i], user_image[i]);
            i++;
            j++;
        }
    };
    return Nearbyjobs;
}());
Nearbyjobs = __decorate([
    IonicPage({
        name: 'Nearbyjobs',
        segment: 'Nearbyjobs'
    }),
    Component({
        selector: 'page-nearbyjobs',
        templateUrl: 'nearbyjobs.html',
    }),
    __metadata("design:paramtypes", [Security, NavController, NavParams, LoadingController])
], Nearbyjobs);
export { Nearbyjobs };
//# sourceMappingURL=nearbyjobs.js.map