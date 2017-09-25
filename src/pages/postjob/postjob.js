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
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { Security } from '../../providers/security';
import { UserDataProvider } from '../../providers/user-data';
import { Geolocation } from 'ionic-native';
var Postjob = (function () {
    function Postjob(alertCtrl, userDataProvider, securityprovider, navCtrl, navParams, loadingCtrl) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.userDataProvider = userDataProvider;
        this.securityprovider = securityprovider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        Geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.bidlat1 = position.coords.latitude;
            _this.bidlng1 = position.coords.longitude;
        }, function (err) {
            console.log(err);
        });
    }
    Postjob.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Postjob');
        var loading = this.loadingCtrl.create({ content: 'Wait..' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.jobcategory(); })
            .subscribe(function (data) {
            loading.dismiss();
            // console.log(data.result.status)
            if (data.result.status == 1) {
                _this.userDataProvider.JobCategorydata();
                _this.userDataProvider.JOBCATEGORY.user_data = data.result.user_data;
                _this.jobcategory = data.result.user_data;
                console.log('data' + data.result.user_data);
                console.log('data2' + _this.userDataProvider.JOBCATEGORY);
            }
        });
    };
    Postjob.prototype.Bidnext = function () {
        localStorage['job_title'] = this.job_title;
        localStorage['job_category'] = this.job_category;
        localStorage['job_description'] = this.job_description;
        // localStorage['price']=this.Price
        localStorage['price'] = 1;
        var partial = {
            jobtitle: this.job_title,
            jobcategory: this.job_category,
            jobdescription: this.job_description
            // price:this.Price
        };
        var mandatoryfields = [];
        if (!partial.jobtitle) {
            mandatoryfields.push('JobTitle');
        }
        if (!partial.jobcategory) {
            mandatoryfields.push('JobCategory');
        }
        if (!partial.jobdescription) {
            mandatoryfields.push('jobdescription');
        }
        // if(!partial.price)
        // {
        //   mandatoryfields.push('price')
        // }
        if (mandatoryfields.length > 0) {
            var alertctr = this.alertCtrl.create({
                title: 'Mandatory Feilds!',
                message: mandatoryfields.join(','),
                buttons: ['Ok']
            });
            alertctr.present();
        }
        else {
            this.navCtrl.push('Postjobnext', { bidlat1: this.bidlat1, bidlng1: this.bidlng1 });
        }
    };
    Postjob.prototype.tap = function () {
    };
    return Postjob;
}());
Postjob = __decorate([
    IonicPage({
        name: 'Postjob',
        segment: 'Postjob-page'
    }),
    Component({
        selector: 'page-postjob',
        templateUrl: 'postjob.html',
    }),
    __metadata("design:paramtypes", [AlertController, UserDataProvider, Security, NavController, NavParams, LoadingController])
], Postjob);
export { Postjob };
//# sourceMappingURL=postjob.js.map