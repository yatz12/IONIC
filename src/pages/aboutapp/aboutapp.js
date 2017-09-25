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
 * Generated class for the Aboutapp page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Aboutapp = (function () {
    function Aboutapp(securityprovider, loadingCtrl, navCtrl, navParams) {
        this.securityprovider = securityprovider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Aboutapp.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'wait' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.aboutus(); })
            .subscribe(function (data) {
            loading.dismiss();
            _this.description = data.result.description;
        });
    };
    return Aboutapp;
}());
Aboutapp = __decorate([
    IonicPage({
        name: 'Aboutapp',
        segment: 'Aboutapp-page'
    }),
    Component({
        selector: 'page-aboutapp',
        templateUrl: 'aboutapp.html',
    }),
    __metadata("design:paramtypes", [Security, LoadingController, NavController, NavParams])
], Aboutapp);
export { Aboutapp };
//# sourceMappingURL=aboutapp.js.map