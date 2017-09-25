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
import { Observable } from "rxjs/Rx";
import { Security } from '../../../providers/security';
/**
 * Generated class for the Signupnext page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Signupnext = (function () {
    function Signupnext(alertCtrl, securityProvider, loadingCtrl, navCtrl, navParams, formBuilder) {
        this.alertCtrl = alertCtrl;
        this.securityProvider = securityProvider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        this.Bidform1 = formBuilder.group({
            Email: ['', Validators.compose([Validators.maxLength(50), Validators.pattern(emailRegex), Validators.required])],
            password: ['', Validators.compose([Validators.maxLength(25), Validators.minLength(6), Validators.pattern(''), Validators.required])]
            // check:['', Signupnext.isValid]
        });
        this.FirstName = this.navParams.get("firstName");
        this.LastName = this.navParams.get("lastName");
        this.Address = this.navParams.get("address");
        this.Phoneno = this.navParams.get("Phoneno");
    }
    Signupnext.isValid = function (control) {
        if (control.value == false) {
            return {
                "too young": true
            };
        }
        return null;
    };
    Signupnext.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signupnext');
    };
    // bidregister(){
    // 	this.navCtrl.setRoot('Bidwork')
    // }
    Signupnext.prototype.login = function () {
        this.navCtrl.push('HomePage');
    };
    Signupnext.prototype.bidregister = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'wait' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityProvider.Signup(_this.FirstName, _this.LastName, _this.Address, _this.Phoneno, _this.Bidform1.controls["Email"].value, _this.Bidform1.controls["password"].value); })
            .subscribe(function (data) {
            loading.dismiss();
            if (data.result.status == 1) {
                var alert_1 = _this.alertCtrl.create({
                    subTitle: 'SignIn Succesfully!',
                    buttons: ['ok']
                });
                alert_1.present();
                _this.navCtrl.push('HomePage');
            }
            else if (data.result.status == 0) {
                var alert_2 = _this.alertCtrl.create({
                    subTitle: 'Try Again!',
                    buttons: ['ok']
                });
                alert_2.present();
            }
        });
    };
    return Signupnext;
}());
Signupnext = __decorate([
    IonicPage({
        name: 'Signupnext',
        segment: 'Signupnext-page'
    }),
    Component({
        selector: 'page-signupnext',
        templateUrl: 'signupnext.html',
    }),
    __metadata("design:paramtypes", [AlertController, Security, LoadingController, NavController, NavParams, FormBuilder])
], Signupnext);
export { Signupnext };
//# sourceMappingURL=signupnext.js.map