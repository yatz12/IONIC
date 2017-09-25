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
var Howitworks = (function () {
    function Howitworks(loadinCtrl, navCtrl, navParams, securityprovider) {
        this.loadinCtrl = loadinCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.securityprovider = securityprovider;
    }
    Howitworks.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadinCtrl.create({ content: 'wait' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.howitworks(); })
            .subscribe(function (data) {
            loading.dismiss();
            _this.how = data.result.how;
        });
    };
    Howitworks.prototype.submit = function () {
        this.navCtrl.setRoot('Bidwork');
    };
    return Howitworks;
}());
Howitworks = __decorate([
    IonicPage({
        name: 'Howitworks',
        segment: 'Howitworks-page'
    }),
    Component({
        selector: 'page-howitworks',
        templateUrl: 'howitworks.html',
    }),
    __metadata("design:paramtypes", [LoadingController, NavController, NavParams, Security])
], Howitworks);
export { Howitworks };
//# sourceMappingURL=howitworks.js.map