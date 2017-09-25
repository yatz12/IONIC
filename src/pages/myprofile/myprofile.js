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
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController, AlertController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { UserDataProvider } from '../../providers/user-data';
import { Observable } from "rxjs/Rx";
import { ENV } from '../../app/env';
import { Security } from '../../providers/security';
var Myprofile = (function () {
    function Myprofile(securityProvider, userDataProvider, loadingCtrl, navCtrl, navParams, alertCtrl, actionsheet) {
        this.securityProvider = securityProvider;
        this.userDataProvider = userDataProvider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.actionsheet = actionsheet;
        this.address = this.userDataProvider.current.address;
        this.email = this.userDataProvider.current.email;
        this.firstname = this.userDataProvider.current.firstname;
        this.userDataProvider.current.image != null ? this.pic = ENV.imgApi + '/public/userImage/' + this.userDataProvider.current.image : this.pic = "assets/img/user.svg";
        this.lastname = this.userDataProvider.current.lastname;
        this.phone_number = this.userDataProvider.current.phone_number;
    }
    Myprofile.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Myprofile');
    };
    Myprofile.prototype.edit = function () {
        var _this = this;
        var pic;
        if (this.pic == "assets/img/user.svg" || this.pic == ENV.imgApi + '/public/userImage/' + this.userDataProvider.current.image) {
            pic = null;
        }
        else {
            pic = this.pic;
        }
        var loading = this.loadingCtrl.create({ content: 'wait' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityProvider.editProfile({
            user_id: _this.userDataProvider.current.id,
            firstname: _this.firstname,
            lastname: _this.lastname,
            email: _this.email,
            phone_number: _this.phone_number,
            address: _this.address,
            image: pic
        }); })
            .subscribe(function (data) {
            loading.dismiss();
            //alert(JSON.stringify(data));
            if (data.result.status == 1) {
                _this.userDataProvider.current.address = _this.address;
                _this.userDataProvider.current.email = _this.email;
                _this.userDataProvider.current.firstname = _this.firstname;
                _this.userDataProvider.current.image = _this.pic;
                _this.userDataProvider.current.lastname = _this.lastname;
                _this.userDataProvider.current.phone_number = _this.phone_number;
                if (data.result.image_link != "") {
                    _this.pic = ENV.imgApi + '/public/userImage/' + data.result.image_link;
                }
                var alert_1 = _this.alertCtrl.create({
                    subTitle: 'Update Succesfully!',
                    buttons: ['ok']
                });
                alert_1.present();
                //   this.getData(data.result.result.id)
                //   this.navCtrl.setRoot('Bidwork')          
            }
            else {
                // let alert=this.alertCtrl.create({
                //    subTitle:'Your email or password is incorrect',
                //    buttons:['ok']
                //  })
                // alert.present();
            }
        });
    };
    Myprofile.prototype.ImageUpload = function () {
        var _this = this;
        var actionsheet = this.actionsheet.create({
            title: 'Image Upload!',
            buttons: [{
                    text: 'Upload From Gallery',
                    handler: function () {
                        _this.gallery();
                    },
                },
                {
                    text: 'Take A Snap',
                    handler: function () {
                        _this.camera();
                    }
                }]
        });
        actionsheet.present();
    };
    Myprofile.prototype.camera = function () {
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
    Myprofile.prototype.gallery = function () {
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
    return Myprofile;
}());
Myprofile = __decorate([
    IonicPage({
        name: 'Myprofile',
        segment: 'Myprofile-page'
    }),
    Component({
        selector: 'page-myprofile',
        templateUrl: 'myprofile.html',
    }),
    __metadata("design:paramtypes", [Security,
        UserDataProvider,
        LoadingController,
        NavController,
        NavParams,
        AlertController,
        ActionSheetController])
], Myprofile);
export { Myprofile };
//# sourceMappingURL=myprofile.js.map