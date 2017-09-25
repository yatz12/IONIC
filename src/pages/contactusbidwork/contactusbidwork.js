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
/**
 * Generated class for the Contactusbidwork page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Contactusbidwork = (function () {
    function Contactusbidwork(securityprovider, alertCtrl, loadingCtrl, navCtrl, navParams) {
        this.securityprovider = securityprovider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Contactusbidwork.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Contactusbidwork');
    };
    Contactusbidwork.prototype.submit = function () {
        var _this = this;
        var partial = {
            useremail: this.useremail,
            phoneno: this.phoneno,
            message: this.message
            // price:this.Price
        };
        var mandatoryfields = [];
        if (!partial.useremail) {
            mandatoryfields.push('Email');
        }
        if (!partial.phoneno) {
            mandatoryfields.push('Phone');
        }
        if (!partial.message) {
            mandatoryfields.push('Message');
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
            var loading_1 = this.loadingCtrl.create({
                content: 'Please Wait..'
            });
            Observable.of(loading_1).flatMap(function (loading) { return loading.present(); })
                .flatMap(function () { return _this.securityprovider.contact(localStorage['contactid'], _this.useremail, _this.phoneno, _this.message); })
                .subscribe(function (data) {
                loading_1.dismiss();
                var alertctr = _this.alertCtrl.create({
                    title: 'Thank You',
                    message: data.result.message,
                    buttons: ['Ok']
                });
                alertctr.present();
            });
        }
    };
    return Contactusbidwork;
}());
Contactusbidwork = __decorate([
    IonicPage({
        name: 'Contactusbidwork',
        segment: 'Contactusbidwork'
    }),
    Component({
        selector: 'page-contactusbidwork',
        templateUrl: 'contactusbidwork.html',
    }),
    __metadata("design:paramtypes", [Security, AlertController, LoadingController, NavController, NavParams])
], Contactusbidwork);
export { Contactusbidwork };
//# sourceMappingURL=contactusbidwork.js.map