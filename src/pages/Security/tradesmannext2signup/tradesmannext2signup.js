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
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Camera } from 'ionic-native';
/**
 * Generated class for the Tradesmannext2signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Tradesmannext2signup = (function () {
    function Tradesmannext2signup(navCtrl, navParams, actionsheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionsheetCtrl = actionsheetCtrl;
        this.pic = "assets/img/pa-1.png";
    }
    Tradesmannext2signup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tradesmannext2signup');
    };
    Tradesmannext2signup.prototype.ImagUpload = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Image Upload!',
            buttons: [{
                    text: 'Uplaod From Gallery',
                    handler: function () {
                        _this.gallery();
                    }
                }, {
                    text: 'Uplaod From Camera',
                    handler: function () {
                        _this.camera();
                    }
                }
            ]
        });
        actionsheet.present();
    };
    Tradesmannext2signup.prototype.next = function () {
        // this.navCtrl.push('Tradesmansingupnext')
        if (this.pic == "assets/img/pa-1.png") {
            alert('Please Upload Busineess Owner License');
        }
        else {
            this.navCtrl.push('Tradesmansingupnext', { pic: this.pic });
        }
    };
    Tradesmannext2signup.prototype.camera = function () {
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
        }, function (err) { alert('Camera is not Working'); });
    };
    Tradesmannext2signup.prototype.gallery = function () {
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
        }, function (err) { alert('Camera is not Working'); });
    };
    return Tradesmannext2signup;
}());
Tradesmannext2signup = __decorate([
    IonicPage({
        name: 'Tradesmannext2signup',
        segment: 'Tradesmannext2signup'
    }),
    Component({
        selector: 'page-tradesmannext2signup',
        templateUrl: 'tradesmannext2signup.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ActionSheetController])
], Tradesmannext2signup);
export { Tradesmannext2signup };
//# sourceMappingURL=tradesmannext2signup.js.map