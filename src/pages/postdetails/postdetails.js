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
import { Security } from '../../providers/security';
import { Observable } from 'rxjs/Rx';
import { SocialSharing } from 'ionic-native';
/**
 * Generated class for the Postdetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Postdetails = (function () {
    function Postdetails(navCtrl, navParams, securityprovider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.securityprovider = securityprovider;
        this.loadingCtrl = loadingCtrl;
        this.id = this.navParams.get('id');
        this.jobdata = this.navParams.get('jobdata');
        this.index = this.navParams.get('index');
        this.jobtitle = this.jobdata[this.index].job_title;
        this.jobdescription = this.jobdata[this.index].job_description;
        this.jobcategory = this.jobdata[this.index].job_category;
        this.jobloc = this.jobdata[this.index].job_location;
        this.date = this.jobdata[this.index].date;
        this.endtime = this.jobdata[this.index].end_time;
        this.image1 = this.jobdata[this.index].image1;
        this.image2 = this.jobdata[this.index].image2;
        this.image3 = this.jobdata[this.index].image3;
        this.price = this.jobdata[this.index].price;
        this.rating = this.jobdata[this.index].avg_rating;
        if (this.image1 == null) {
            this.img1 = true;
        }
        else {
            this.img11 = true;
        }
        if (this.image2 == null) {
            this.img2 = true;
        }
        else {
            this.img12 = true;
        }
        if (this.image3 == null) {
            this.img3 = true;
        }
        else {
            this.img13 = true;
        }
    }
    Postdetails.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Postdetails');
    };
    Postdetails.prototype.share = function () {
        // let a="hlkhklhklh"
        // let b="dsds"
        SocialSharing.share("Hi,I Have just Posted A job for " + this.jobcategory + " .these are the specifications for the job. " + this.jobdescription + " As,I have posted this job on " + this.date + "," + this.endtime + " You will be given $ " + this.price + " After being hired by us " + " Job location will be disclosed after biding on app.So,go through this link to bid on job ", this.jobtitle, null, "https://play.google.com/store")
            .then(function () {
        }, function () {
        });
    };
    Postdetails.prototype.delpost = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait..' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.delpost(localStorage['id'], localStorage['fbstatus'], _this.id); })
            .subscribe(function (data) {
            loading.dismiss();
            _this.navCtrl.setRoot('Mypost');
        });
    };
    return Postdetails;
}());
Postdetails = __decorate([
    IonicPage({
        name: 'Postdetails',
        segment: 'Postdetails-page'
    }),
    Component({
        selector: 'page-postdetails',
        templateUrl: 'postdetails.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Security, LoadingController])
], Postdetails);
export { Postdetails };
//# sourceMappingURL=postdetails.js.map