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
 * Generated class for the Tradesman page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Tradesman = (function () {
    function Tradesman(securityprovider, navCtrl, navParams, loadingCtrl) {
        this.securityprovider = securityprovider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.totalbids = [];
    }
    Tradesman.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Tradesman');
        var loading = this.loadingCtrl.create({ content: 'Please Wait..' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.listofBids(localStorage['id']); })
            .subscribe(function (data) {
            loading.dismiss();
            _this.job_data = data.result.job_data;
            console.log(data.result.job_data);
            // for(var i=0;i<this.job_data;i++)
            // {
            // console.log('hi'+this.job_data[i].bid)	
            // }
            for (var _i = 0, _a = _this.job_data; _i < _a.length; _i++) {
                var value = _a[_i];
                // console.log('trigger'+value.bid.length)
                _this.totalbids.push({ tradesbids: value.bid.length, job_category: value.job_category, end_time: value.end_time });
                console.log(_this.totalbids);
            }
        });
    };
    Tradesman.prototype.tap = function (i) {
        console.log(i);
        this.navCtrl.push('Listofcategorydetails', { job_data: this.job_data, i: i });
    };
    return Tradesman;
}());
Tradesman = __decorate([
    IonicPage(),
    Component({
        selector: 'page-tradesman',
        templateUrl: 'tradesman.html',
    }),
    __metadata("design:paramtypes", [Security, NavController, NavParams, LoadingController])
], Tradesman);
export { Tradesman };
//# sourceMappingURL=tradesman.js.map