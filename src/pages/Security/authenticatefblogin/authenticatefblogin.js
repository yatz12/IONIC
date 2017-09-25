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
import { IonicPage, NavController, NavParams, LoadingController, Events } from 'ionic-angular';
import { Observable } from "rxjs/Rx";
import { Security } from '../../../providers/security';
/**
 * Generated class for the Authenticatefblogin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Authenticatefblogin = (function () {
    function Authenticatefblogin(events, loadingCtrl, navCtrl, navParams, securityProvider) {
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.securityProvider = securityProvider;
        this.id = 4;
    }
    Authenticatefblogin.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Authenticatefblogin');
    };
    Authenticatefblogin.prototype.fbtrigger = function () {
        var _this = this;
        localStorage['navid'] = this.id;
        this.events.publish('user:created', localStorage['navid']);
        var loading = this.loadingCtrl.create({ content: 'wait' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityProvider.authenticatefb(localStorage['fb_token']); })
            .subscribe(function (data) {
            loading.dismiss();
            if (data.status == 1) {
                localStorage['tradesdashboard'] = data.result.id;
                _this.navCtrl.setRoot('DashboardBidWork');
            }
            else {
                alert('Verfying Your license');
            }
        });
    };
    return Authenticatefblogin;
}());
Authenticatefblogin = __decorate([
    IonicPage({
        name: 'Authenticatefblogin',
        segment: 'Authenticatefblogin'
    }),
    Component({
        selector: 'page-authenticatefblogin',
        templateUrl: 'authenticatefblogin.html',
    }),
    __metadata("design:paramtypes", [Events, LoadingController, NavController, NavParams, Security])
], Authenticatefblogin);
export { Authenticatefblogin };
//# sourceMappingURL=authenticatefblogin.js.map