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
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Security } from '../../../providers/security';
/**
 * Generated class for the Tradesmansingupnext page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Tradesmansingupnext = (function () {
    function Tradesmansingupnext(alertCtrl, loadingCtrl, securityprovider, navCtrl, navParams, formBuilder) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.securityprovider = securityprovider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        this.Bidform1 = formBuilder.group({
            Email: ['', Validators.compose([Validators.maxLength(50), Validators.pattern(emailRegex), Validators.required])],
            password: ['', Validators.compose([Validators.maxLength(25), Validators.minLength(6), Validators.pattern(''), Validators.required])]
        });
        // this.firstName=this.navParams.get('firstName')
        // this.lastName=this.navParams.get('lastName')
        this.pic = this.navParams.get('pic');
    }
    Tradesmansingupnext.prototype.login = function () {
        this.navCtrl.push('Tradesmanlogin');
    };
    Tradesmansingupnext.prototype.bidregister = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please Wait..' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.tradesmansignup(localStorage['tradesfirstName'], localStorage['tradeslastName'], _this.pic, _this.Bidform1.controls["Email"].value, _this.Bidform1.controls["password"].value, localStorage['tradesAddress'], localStorage['Phoneno']); })
            .subscribe(function (data) {
            loading.dismiss();
            if (data.result.status == 1) {
                var alert_1 = _this.alertCtrl.create({
                    subTitle: 'Succesfully Signup!',
                    buttons: ['ok']
                });
                alert_1.present();
                _this.navCtrl.push('Tradesmanlogin');
            }
            else if (data.result.status == 0) {
                var alert_2 = _this.alertCtrl.create({
                    subTitle: 'Email ALready Exist!',
                    buttons: ['ok']
                });
                alert_2.present();
            }
        });
        // this.navCtrl.push('Tradesmanlogin')
    };
    Tradesmansingupnext.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tradesmansingupnext');
    };
    return Tradesmansingupnext;
}());
Tradesmansingupnext = __decorate([
    IonicPage({
        name: 'Tradesmansingupnext',
        segment: 'Tradesmansingupnext'
    }),
    Component({
        selector: 'page-tradesmansingupnext',
        templateUrl: 'tradesmansingupnext.html',
    }),
    __metadata("design:paramtypes", [AlertController, LoadingController, Security, NavController, NavParams, FormBuilder])
], Tradesmansingupnext);
export { Tradesmansingupnext };
//# sourceMappingURL=tradesmansingupnext.js.map