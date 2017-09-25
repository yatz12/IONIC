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
import { NavController, IonicPage, LoadingController, AlertController } from 'ionic-angular';
import { Observable } from "rxjs/Rx";
import { Security } from '../../../providers/security';
/**
 * Generated class for the Tradesmanforgetpassword page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Tradesmanforgetpassword = (function () {
    function Tradesmanforgetpassword(navCtrl, alertCtrl, securityProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.securityProvider = securityProvider;
        this.loadingCtrl = loadingCtrl;
    }
    Tradesmanforgetpassword.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Forgotpassword');
    };
    Tradesmanforgetpassword.prototype.Bidsend = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'wait' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityProvider.forgetpassword(_this.Email); })
            .subscribe(function (data) {
            loading.dismiss();
            if (data.result.status == 1) {
                var alert_1 = _this.alertCtrl.create({
                    subTitle: 'Email has been sent you mail',
                    buttons: ['ok']
                });
                alert_1.present();
                _this.navCtrl.setRoot('Tradesmanlogin');
            }
            else if (data.result.status == 0) {
                var alert_2 = _this.alertCtrl.create({
                    subTitle: 'Email does not exist',
                    buttons: ['ok']
                });
                alert_2.present();
            }
        });
    };
    return Tradesmanforgetpassword;
}());
Tradesmanforgetpassword = __decorate([
    IonicPage({
        name: 'Tradesmanforgetpassword',
        segment: 'Tradesmanforgetpassword'
    }),
    Component({
        selector: 'page-tradesmanforgetpassword',
        templateUrl: 'tradesmanforgetpassword.html',
    }),
    __metadata("design:paramtypes", [NavController, AlertController, Security, LoadingController])
], Tradesmanforgetpassword);
export { Tradesmanforgetpassword };
//# sourceMappingURL=tradesmanforgetpassword.js.map