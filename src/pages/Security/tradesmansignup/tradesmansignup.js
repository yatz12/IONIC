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
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { FormBuilder, Validators } from '@angular/forms';
var Tradesmansignup = Tradesmansignup_1 = (function () {
    function Tradesmansignup(alertCtrl, actionsheetCtrl, formbuilder, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.formbuilder = formbuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Bidform = formbuilder.group({
            firstName: ['', Validators.compose([Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            lastName: ['', Validators.compose([Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            Address: ['',],
            Phoneno: ['', Tradesmansignup_1.isValid]
        });
        this.pic = "assets/img/pa-1.png";
    }
    Tradesmansignup.isValid = function (control) {
        if (isNaN(control.value)) {
            return {
                "not a number": true
            };
        }
        if (control.value % 1 !== 0) {
            return {
                "not a whole number": true
            };
        }
        if (control.value < 1000000000) {
            return {
                "too young": true
            };
        }
        return null;
    };
    Tradesmansignup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tradesmansignup');
    };
    Tradesmansignup.prototype.ImagUpload = function () {
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
    Tradesmansignup.prototype.camera = function () {
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
            alert(_this.pic);
        }, function (err) { alert('Camera is not Working'); });
    };
    Tradesmansignup.prototype.gallery = function () {
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
            alert(_this.pic);
        }, function (err) { alert('Camera is not Working'); });
    };
    Tradesmansignup.prototype.next = function () {
        localStorage['tradesfirstName'] = this.Bidform.controls["firstName"].value;
        localStorage['tradeslastName'] = this.Bidform.controls["lastName"].value;
        localStorage['tradesAddress'] = this.Bidform.controls["Address"].value;
        localStorage['Phoneno'] = this.Bidform.controls["Phoneno"].value;
        this.navCtrl.push('Tradesmannext2signup');
        // let alert=this.alertCtrl.create({
        //            subTitle:'Please Upload Your Busineess  License',
        //            buttons:[{
        //              text:'OK',
        //              handler:data=>{
        //                this.navCtrl.setRoot('Mypost')
        //              }
        //            }]
        //          })
        //          alert.present();
        // this.navCtrl.push('Tradesmansingupnext',{firstName:this.Bidform.controls["firstName"].value,lastName:this.Bidform.controls["lastName"].value,Address:this.Bidform.controls["Address"].value,Phoneno:this.Bidform.controls["Phoneno"].value})
    };
    return Tradesmansignup;
}());
Tradesmansignup = Tradesmansignup_1 = __decorate([
    IonicPage({
        name: 'Tradesmansignup',
        segment: 'Tradesmansignup'
    }),
    Component({
        selector: 'page-tradesmansignup',
        templateUrl: 'tradesmansignup.html',
    }),
    __metadata("design:paramtypes", [AlertController, ActionSheetController, FormBuilder, NavController, NavParams])
], Tradesmansignup);
export { Tradesmansignup };
var Tradesmansignup_1;
//# sourceMappingURL=tradesmansignup.js.map