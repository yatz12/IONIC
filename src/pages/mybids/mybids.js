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
 * Generated class for the Mybids page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Mybids = (function () {
    function Mybids(securityprovider, navCtrl, navParams, loadingCtrl) {
        this.securityprovider = securityprovider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.mybiddata = [];
    }
    Mybids.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please Wait..' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.mybids(localStorage['email']); })
            .subscribe(function (data) {
            loading.dismiss();
            _this.mybids = data.result.bids;
            var i;
            for (i = 0; i < _this.mybids.length; i++) {
                _this.mybiddata.push({ 'email': _this.mybids[i].job[0].email, 'job_category': _this.mybids[i].job[0].job_category, 'job_title': _this.mybids[i].job[0].job_title, 'price': _this.mybids[i].job[0].price, 'user_image': _this.mybids[i].job[0].user_image, 'job_description': _this.mybids[i].job[0].job_description, 'image1': _this.mybids[i].job[0].image1, 'image2': _this.mybids[i].job[0].image2, 'image3': _this.mybids[i].job[0].image3, 'joblocation': _this.mybids[i].job[0].job_location, 'end_time': _this.mybids[i].job[0].end_time, 'date': _this.mybids[i].job[0].date });
            }
        });
    };
    Mybids.prototype.tapdetail = function (i) {
        this.navCtrl.push('Mybiddetail', { mybiddata: this.mybiddata, i: i });
    };
    return Mybids;
}());
Mybids = __decorate([
    IonicPage({
        name: 'Mybids',
        segment: 'Mybids'
    }),
    Component({
        selector: 'page-mybids',
        templateUrl: 'mybids.html',
    }),
    __metadata("design:paramtypes", [Security, NavController, NavParams, LoadingController])
], Mybids);
export { Mybids };
//# sourceMappingURL=mybids.js.map