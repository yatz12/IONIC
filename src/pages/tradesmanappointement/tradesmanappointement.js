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
import { Observable } from 'rxjs/Rx';
import { Security } from '../../providers/security';
/**
 * Generated class for the Tradesmanappointement page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Tradesmanappointement = (function () {
    function Tradesmanappointement(navCtrl, navParams, securityprovider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.securityprovider = securityprovider;
        this.loadingCtrl = loadingCtrl;
        this.appointementdatalist = [];
    }
    Tradesmanappointement.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Wait..' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.checkappointement(localStorage['email']); })
            .subscribe(function (data) {
            loading.dismiss();
            _this.appointementdata = data.result.appointment_data;
            for (var i = 0; i < _this.appointementdata.length; i++) {
                _this.appointementdatalist.push({ image: _this.appointementdata[i].job.user_image, firstname: _this.appointementdata[i].job.firstname,
                    feedback_phrase: _this.appointementdata[i].feedback_phrase, image1: _this.appointementdata[i].job.image1,
                    image2: _this.appointementdata[i].job.image2, image3: _this.appointementdata[i].job.image3,
                    job_title: _this.appointementdata[i].job.job_title, job_description: _this.appointementdata[i].job.job_description,
                    job_location: _this.appointementdata[i].job.job_location, date: _this.appointementdata[i].date, time: _this.appointementdata[i].time,
                    job_category: _this.appointementdata[i].job.job_category,
                    lat: _this.appointementdata[i].job.latitude,
                    lng: _this.appointementdata[i].job.longitude
                });
            }
        });
    };
    Tradesmanappointement.prototype.tapondetail = function (i) {
        this.navCtrl.push('Tradesmanappointdetail', { appointementdatalist: this.appointementdatalist, i: i });
    };
    return Tradesmanappointement;
}());
Tradesmanappointement = __decorate([
    IonicPage({
        name: 'Tradesmanappointement',
        segment: 'Tradesmanappointement'
    }),
    Component({
        selector: 'page-tradesmanappointement',
        templateUrl: 'tradesmanappointement.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Security, LoadingController])
], Tradesmanappointement);
export { Tradesmanappointement };
//# sourceMappingURL=tradesmanappointement.js.map