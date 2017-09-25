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
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Facebook } from 'ionic-native';
import { Observable } from "rxjs/Rx";
import { Security } from '../../../providers/security';
import { UserDataProvider } from '../../../providers/user-data';
/**
 * Generated class for the Tradesmanlogin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Tradesmanlogin = (function () {
    function Tradesmanlogin(modalCtrl, alertCtrl, userDataProvider, securityProvider, loadingCtrl, navCtrl, navParams, events) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.userDataProvider = userDataProvider;
        this.securityProvider = securityProvider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.id = 1;
        this.FB_APP_ID = 272952999837098;
        this.fb_status1 = 1;
        this.fb_status2 = 2;
        Facebook.browserInit(this.FB_APP_ID, "v2.8");
    }
    Tradesmanlogin.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tradesmanlogin');
    };
    Tradesmanlogin.prototype.Bidlog = function () {
        var _this = this;
        localStorage['navid'] = this.id;
        this.events.publish('user:created', localStorage['navid']);
        var loading = this.loadingCtrl.create({ content: 'wait' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityProvider.login(_this.email, _this.password, _this.fb_status2); })
            .subscribe(function (data) {
            loading.dismiss();
            if (data.result.status == 1) {
                _this.getData(data.result.result.id);
                localStorage['id'] = data.result.result.id;
                localStorage['fbstatus'] = data.result.result.fb_status;
                localStorage['tradesmannormalloginstatus'] = data.result.status;
                localStorage['contactid'] = 2;
                _this.navCtrl.setRoot('DashboardBidWork');
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    subTitle: data.result.message,
                    buttons: ['ok']
                });
                alert_1.present();
            }
        });
    };
    Tradesmanlogin.prototype.getData = function (id) {
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
                localStorage['lastname'] = data.result.user_data.lastname;
                localStorage['phone_number'] = data.result.user_data.phone_number;
                localStorage['address'] = data.result.user_data.address;
                localStorage['image'] = data.result.user_data.image;
                console.log('phone' + localStorage['phone_number']);
                localStorage['email'] = data.result.user_data.email;
                console.log('Email--->' + localStorage['email']);
                var alert_2 = _this.alertCtrl.create({
                    subTitle: 'Login Succesfully!',
                    buttons: ['ok']
                });
                alert_2.present();
            }
            else {
                console.log(data);
            }
        });
    };
    Tradesmanlogin.prototype.Signup = function () {
        // alert('user_name'+this.name+'user_id'+this.user_id)
        this.navCtrl.push('Tradesmansignup');
    };
    Tradesmanlogin.prototype.forgetpassword = function () {
        this.navCtrl.push('Tradesmanforgetpassword');
    };
    Tradesmanlogin.prototype.doFbLogin = function () {
        var _this = this;
        // alert('We will send you this module in next update')
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
                localStorage['username'] = user.name;
                localStorage['unique_id'] = response.authResponse.userID;
                localStorage['email'] = user.email;
                _this.doFbLogin1();
            });
        }, function (error) {
            alert('This app is under development mode PLEASE USE ADMINSTRATION CREDENTIALS');
        });
    };
    Tradesmanlogin.prototype.doFbLogin1 = function () {
        var _this = this;
        localStorage['contactid'] = 2;
        //  localStorage['navid']=this.id
        // this.events.publish('user:created',localStorage['navid'])
        var modal = this.modalCtrl.create('Licenseuploadtradesman');
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.navCtrl.setRoot(data);
        });
        // let loading = this.loadingCtrl.create({content: 'wait'});
        //       Observable.of(loading).flatMap(loading =>   loading.present())
        //     .flatMap(() => this.securityProvider.loginWithFb(this.unique_id,this.username,this.fb_status1))
        //     .subscribe(data=>{
        //         loading.dismiss();
        //         if(data.status==1){
        //           let alert=this.alertCtrl.create({
        //             subTitle:'Login Succesfully!',
        //             buttons:['ok']
        //           })
        //           alert.present();
        //             localStorage['id']=data.result.id
        //             localStorage['fbstatus']=data.result.fb_status
        //              this.navCtrl.setRoot('DashboardBidWork')    
        //         }
        //         else 
        //         {
        //          let alert=this.alertCtrl.create({
        //             subTitle:'Your email or password is incorrect',
        //             buttons:['ok']
        //           })
        //          alert.present();
        //         }
        //     })
    };
    return Tradesmanlogin;
}());
Tradesmanlogin = __decorate([
    IonicPage({
        name: 'Tradesmanlogin',
        segment: 'Tradesmanlogin'
    }),
    Component({
        selector: 'page-tradesmanlogin',
        templateUrl: 'tradesmanlogin.html',
    }),
    __metadata("design:paramtypes", [ModalController, AlertController, UserDataProvider, Security, LoadingController, NavController, NavParams, Events])
], Tradesmanlogin);
export { Tradesmanlogin };
//# sourceMappingURL=tradesmanlogin.js.map