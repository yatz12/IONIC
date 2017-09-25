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
import { NavController, IonicPage, LoadingController, AlertController, ModalController } from 'ionic-angular';
import { Observable } from "rxjs/Rx";
import { Security } from '../../../providers/security';
import { UserDataProvider } from '../../../providers/user-data';
import { Facebook } from 'ionic-native';
import { Events } from 'ionic-angular';
var HomePage = (function () {
    function HomePage(modalCtrl, events, userDataProvider, securityProvider, navCtrl, alertCtrl, loadingCtrl) {
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.userDataProvider = userDataProvider;
        this.securityProvider = securityProvider;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.email = 'ytuxedo786@gmail.com';
        this.password = 'vishal786';
        this.FB_APP_ID = 272952999837098;
        this.fb_status1 = 1;
        this.fb_status2 = 2;
        this.navid = 2;
        this.navid1 = 3;
        Facebook.browserInit(this.FB_APP_ID, "v2.8");
    }
    HomePage.prototype.Bidlog = function () {
        var _this = this;
        localStorage['navid'] = this.navid;
        this.events.publish('user:created', localStorage['navid']);
        var loading = this.loadingCtrl.create({ content: 'wait' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityProvider.login(_this.email, _this.password, _this.fb_status2); })
            .subscribe(function (data) {
            loading.dismiss();
            if (data.result.status == 1) {
                var alert_1 = _this.alertCtrl.create({
                    subTitle: 'Login Succesfully!',
                    buttons: ['ok']
                });
                alert_1.present();
                _this.getData(data.result.result.id);
                // localStorage['id']=data.result.result.id
                localStorage['id'] = data.result.result.email;
                localStorage['fbstatus'] = data.result.result.fb_status;
                localStorage['contactid'] = 1;
                _this.navCtrl.setRoot('Bidwork');
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    subTitle: 'Your email or password is incorrect',
                    buttons: ['ok']
                });
                alert_2.present();
            }
        });
    };
    HomePage.prototype.getData = function (id) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'wait' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityProvider.userData(id); })
            .subscribe(function (data) {
            loading.dismiss();
            if (data.result.status == 1) {
                _this.userDataProvider.newData();
                _this.userDataProvider.current = data.result.user_data;
                localStorage['firstname'] = data.result.user_data.firstname;
            }
            else {
                console.log(data);
            }
        });
    };
    HomePage.prototype.Signup = function () {
        // alert('user_name'+this.name+'user_id'+this.user_id)
        this.navCtrl.push('Signup');
    };
    HomePage.prototype.forgetpassword = function () {
        this.navCtrl.push('Forgotpassword');
    };
    HomePage.prototype.doFbLogin = function () {
        var _this = this;
        var permissions = new Array();
        var nav = this.navCtrl;
        permissions = ["public_profile", "email"];
        Facebook.login(permissions)
            .then(function (response) {
            var userId = response.authResponse.userID;
            var params = new Array();
            Facebook.api("/me?fields=name,gender,email", params)
                .then(function (user) {
                user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                _this.username = user.name;
                _this.unique_id = response.authResponse.userID;
                _this.emailfb = user.email;
                _this.image = user.picture;
                localStorage['firstname'] = _this.username;
                _this.doFbLogin1();
            });
        }, function (error) {
            alert('This app is under development mode PLEASE USE ADMINSTRATION CREDENTIALS');
        });
    };
    HomePage.prototype.doFbLogin1 = function () {
        var _this = this;
        localStorage['navid1'] = this.navid1;
        this.events.publish('user:created', localStorage['navid1']);
        // let modal=this.modalCtrl.create('Licenseuploadtradesman');
        // modal.present();
        //  var a=1310717582378598
        //  var b='Yatash Sharma'
        // alert(this.unique_id+'fb'+this.username+'email'+this.emailfb)
        var loading = this.loadingCtrl.create({ content: 'wait' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityProvider.loginWithFb(_this.unique_id, _this.username, _this.fb_status1, _this.emailfb, _this.image); })
            .subscribe(function (data) {
            loading.dismiss();
            if (data.status == 1) {
                var alert_3 = _this.alertCtrl.create({
                    subTitle: 'Login Succesfully!',
                    buttons: ['ok']
                });
                alert_3.present();
                // localStorage['id']=data.result.id
                localStorage['id'] = data.result.email;
                localStorage['fbstatus'] = data.result.fb_status;
                localStorage['contactid'] = 1;
                _this.navCtrl.setRoot('Bidwork');
            }
            else {
                var alert_4 = _this.alertCtrl.create({
                    subTitle: 'Your email or password is incorrect',
                    buttons: ['ok']
                });
                alert_4.present();
            }
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    IonicPage({
        name: 'HomePage',
        segment: 'HomePage-page'
    }),
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [ModalController, Events, UserDataProvider, Security, NavController, AlertController, LoadingController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map