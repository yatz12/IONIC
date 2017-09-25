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
 * Generated class for the Listofbids page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Listofbids = (function () {
    function Listofbids(securityprovider, navCtrl, navParams, loadingCtrl) {
        this.securityprovider = securityprovider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    Listofbids.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Listofbids');
        var loading = this.loadingCtrl.create({ content: 'Please Wait..' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.listofBids(localStorage['id']); })
            .subscribe(function (data) {
            loading.dismiss();
            _this.job_data = data.result.job_data;
            console.log(data.result.job_data);
        });
    };
    Listofbids.prototype.biddetails = function (i) {
        this.categoryjobs = this.job_data[i].bid;
        this.navCtrl.push('Bidcategorydetail', { categoryjobs: this.categoryjobs });
    };
    return Listofbids;
}());
Listofbids = __decorate([
    IonicPage({
        name: 'Listofbids',
        segment: 'Listofbids-page'
    }),
    Component({
        selector: 'page-listofbids',
        templateUrl: 'listofbids.html',
    }),
    __metadata("design:paramtypes", [Security, NavController, NavParams, LoadingController])
], Listofbids);
export { Listofbids };
//# sourceMappingURL=listofbids.js.map