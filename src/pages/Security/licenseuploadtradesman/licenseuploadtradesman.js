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
import { Events, IonicPage, NavController, NavParams, ActionSheetController, LoadingController, AlertController, ViewController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { Observable } from "rxjs/Rx";
import { Security } from '../../../providers/security';
/**
 * Generated class for the Licenseuploadtradesman page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Licenseuploadtradesman = (function () {
    function Licenseuploadtradesman(viewCtrl, events, alertCtrl, securityProvider, navCtrl, navParams, actionsheetCtrl, loadingCtrl) {
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.securityProvider = securityProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionsheetCtrl = actionsheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fb_status1 = 1;
        this.fb_type = 2;
        this.fb_code = null;
        this.pic = "assets/img/pa-1.png";
    }
    Licenseuploadtradesman.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Licenseuploadtradesman');
    };
    Licenseuploadtradesman.prototype.ImagUpload = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Image Upload!',
            buttons: [{
                    text: 'Upload From Gallery',
                    handler: function () {
                        _this.gallery();
                    }
                }, {
                    text: 'Upload From Camera',
                    handler: function () {
                        _this.camera();
                    }
                }
            ]
        });
        actionsheet.present();
    };
    Licenseuploadtradesman.prototype.camera = function () {
        var _this = this;
        Camera.getPicture({
            quality: 75,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            targetHeight: 500,
            targetWidth: 500,
            saveToPhotoAlbum: false
        }).then(function (imageData) {
            _this.pic = "data:image/jpeg;base64," + imageData;
            // alert(this.pic)
        }, function (err) {
            // alert('Camera is not Working')
        });
    };
    Licenseuploadtradesman.prototype.gallery = function () {
        var _this = this;
        Camera.getPicture({
            quality: 75,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: Camera.EncodingType.JPEG,
            targetHeight: 500,
            targetWidth: 500,
            saveToPhotoAlbum: false
        }).then(function (imageData) {
            _this.pic = "data:image/jpeg;base64," + imageData;
            // alert(this.pic)
        }, function (err) {
            // alert('Camera is not Working')
        });
    };
    Licenseuploadtradesman.prototype.next = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'wait' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityProvider.loginWithFb1(localStorage['unique_id'], localStorage['username'], _this.fb_status1, localStorage['email'], _this.pic, _this.fb_type); })
            .subscribe(function (data) {
            loading.dismiss();
            if (data.status == 1) {
                var alert_1 = _this.alertCtrl.create({
                    subTitle: data.fb_token,
                    buttons: ['ok']
                });
                alert_1.present();
                localStorage['fb_token'] = data.fb_token;
                localStorage['id'] = data.result.id;
                localStorage['fbstatus'] = data.result.fb_status;
                //this.navCtrl.setRoot('Authenticatefblogin')    
                _this.viewCtrl.dismiss('Authenticatefblogin');
            }
            else {
                localStorage['fb_token'] = data.fb_token;
                _this.events.publish('fbuser:created', localStorage['fb_token']);
                var alert_2 = _this.alertCtrl.create({
                    subTitle: data.message,
                    buttons: ['ok']
                });
                alert_2.present();
                //this.navCtrl.setRoot('Authenticatefblogin')
                _this.viewCtrl.dismiss('Authenticatefblogin');
            }
        });
    };
    return Licenseuploadtradesman;
}());
Licenseuploadtradesman = __decorate([
    IonicPage({
        name: 'Licenseuploadtradesman',
        segment: 'Licenseuploadtradesman'
    }),
    Component({
        selector: 'page-licenseuploadtradesman',
        templateUrl: 'licenseuploadtradesman.html',
    }),
    __metadata("design:paramtypes", [ViewController, Events, AlertController, Security, NavController, NavParams, ActionSheetController, LoadingController])
], Licenseuploadtradesman);
export { Licenseuploadtradesman };
//# sourceMappingURL=licenseuploadtradesman.js.map