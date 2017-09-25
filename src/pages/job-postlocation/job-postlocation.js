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
import { Observable } from 'rxjs/Rx';
import { Security } from '../../providers/security';
/**
 * Generated class for the JobPostlocation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var JobPostlocation = (function () {
    function JobPostlocation(alertCtrl, securityprovider, navCtrl, navParams, actionsheet, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.securityprovider = securityprovider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionsheet = actionsheet;
        this.loadingCtrl = loadingCtrl;
        this.jobarray = [];
        this.apic = "assets/img/001-sign.png";
        this.bpic = "assets/img/001-sign.png";
        this.cpic = "assets/img/001-sign.png";
        this.lat = this.navParams.get('lat');
        this.lng = this.navParams.get('lng');
        this.address = this.navParams.get('address');
    }
    JobPostlocation.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JobPostlocation');
    };
    JobPostlocation.prototype.ImageUpload1 = function () {
        var _this = this;
        var actionsheet = this.actionsheet.create({
            title: 'Image Upload!',
            buttons: [{
                    text: 'Upload From Gallery',
                    handler: function () {
                        _this.gallery1();
                    },
                },
                {
                    text: 'Take A Snap',
                    handler: function () {
                        _this.camera1();
                    }
                }]
        });
        actionsheet.present();
    };
    JobPostlocation.prototype.gallery1 = function () {
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
            _this.apic = "data:image/jpeg;base64," + imageData;
        }, function (err) { console.log('hi'); });
    };
    JobPostlocation.prototype.camera1 = function () {
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
            _this.apic = "data:image/jpeg;base64," + imageData;
        }, function (err) { console.log('hi'); });
    };
    JobPostlocation.prototype.ImageUpload2 = function () {
        var _this = this;
        var actionsheet = this.actionsheet.create({
            title: 'Image Upload!',
            buttons: [{
                    text: 'Upload From Gallery',
                    handler: function () {
                        _this.gallery2();
                    },
                },
                {
                    text: 'Take A Snap',
                    handler: function () {
                        _this.camera2();
                    }
                }]
        });
        actionsheet.present();
    };
    JobPostlocation.prototype.gallery2 = function () {
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
            _this.bpic = "data:image/jpeg;base64," + imageData;
        }, function (err) { console.log('hi'); });
    };
    JobPostlocation.prototype.camera2 = function () {
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
            _this.bpic = "data:image/jpeg;base64," + imageData;
        }, function (err) { console.log('hi'); });
    };
    JobPostlocation.prototype.ImageUpload3 = function () {
        var _this = this;
        var actionsheet = this.actionsheet.create({
            title: 'Image Upload!',
            buttons: [{
                    text: 'Upload From Gallery',
                    handler: function () {
                        _this.gallery3();
                    },
                },
                {
                    text: 'Take A Snap',
                    handler: function () {
                        _this.camera3();
                    }
                }]
        });
        actionsheet.present();
    };
    JobPostlocation.prototype.gallery3 = function () {
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
            _this.cpic = "data:image/jpeg;base64," + imageData;
        }, function (err) { console.log('hi'); });
    };
    JobPostlocation.prototype.camera3 = function () {
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
            _this.cpic = "data:image/jpeg;base64," + imageData;
        }, function (err) { console.log('hi'); });
    };
    JobPostlocation.prototype.postjob = function () {
        var _this = this;
        var partial = {
            date: this.date,
            start_time: this.start_time,
            end_time: this.end_time
        };
        var mandatoryfields = [];
        if (!partial.date) {
            mandatoryfields.push('Date');
        }
        if (!partial.start_time) {
            mandatoryfields.push('StartTime');
        }
        if (!partial.end_time) {
            mandatoryfields.push('EndTime');
        }
        if (mandatoryfields.length > 0) {
            var alertctr = this.alertCtrl.create({
                title: 'Mandatory Feilds!',
                message: mandatoryfields.join(','),
                buttons: ['Ok']
            });
            alertctr.present();
        }
        else {
            if (this.apic == "assets/img/001-sign.png") {
                this.apic = null;
            }
            if (this.bpic == "assets/img/001-sign.png") {
                this.bpic = null;
            }
            if (this.cpic == "assets/img/001-sign.png") {
                this.cpic = null;
            }
            // this.jobarray.push(this.apic,this.bpic,this.cpic)   
            var loading_1 = this.loadingCtrl.create({ content: 'Wait..' });
            Observable.of(loading_1).flatMap(function (loading) { return loading.present(); })
                .flatMap(function () { return _this.securityprovider.jobbpostservice(localStorage['id'], localStorage['job_title'], localStorage['job_category'], localStorage['job_description'], localStorage['price'], _this.address, _this.lat, _this.lng, _this.apic, _this.bpic, _this.cpic, _this.date, _this.start_time, _this.end_time, localStorage['fbstatus']); })
                .subscribe(function (data) {
                loading_1.dismiss();
                console.log(data.result.status);
                if (data.result.status == 1) {
                    var alert_1 = _this.alertCtrl.create({
                        subTitle: 'Post Uploaded Succesfully',
                        buttons: [{
                                text: 'OK',
                                handler: function (data) {
                                    _this.navCtrl.setRoot('Mypost');
                                }
                            }]
                    });
                    alert_1.present();
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        subTitle: 'Something Went Wrong',
                        buttons: ['ok']
                    });
                    alert_2.present();
                }
            });
        }
    };
    return JobPostlocation;
}());
JobPostlocation = __decorate([
    IonicPage({
        name: 'JobPostlocation',
        segment: 'JobPostlocation'
    }),
    Component({
        selector: 'page-job-postlocation',
        templateUrl: 'job-postlocation.html',
    }),
    __metadata("design:paramtypes", [AlertController, Security, NavController, NavParams, ActionSheetController, LoadingController])
], JobPostlocation);
export { JobPostlocation };
//# sourceMappingURL=job-postlocation.js.map