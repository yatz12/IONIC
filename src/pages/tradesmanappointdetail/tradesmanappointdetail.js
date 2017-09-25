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
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
/**
 * Generated class for the Tradesmanappointdetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Tradesmanappointdetail = (function () {
    function Tradesmanappointdetail(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.appointementdatalist = this.navParams.get('appointementdatalist');
        this.i = this.navParams.get('i');
        console.log('appointementdatalist' + this.i);
        this.image1 = this.appointementdatalist[this.i].image1;
        this.image2 = this.appointementdatalist[this.i].image2;
        this.image3 = this.appointementdatalist[this.i].image3;
        this.job_title = this.appointementdatalist[this.i].job_title;
        this.job_description = this.appointementdatalist[this.i].job_description;
        this.job_location = this.appointementdatalist[this.i].job_location;
        this.date = this.appointementdatalist[this.i].date;
        this.time = this.appointementdatalist[this.i].time;
        this.job_category = this.appointementdatalist[this.i].job_category;
        this.lat = this.appointementdatalist[this.i].lat;
        this.lng = this.appointementdatalist[this.i].lng;
        localStorage['lattrades'] = this.lat;
        localStorage['lngtrades'] = this.lng;
        if (this.image1 == null) {
            this.img1 = true;
        }
        else {
            this.img11 = true;
        }
        if (this.image2 == null) {
            this.img2 = true;
        }
        else {
            this.img12 = true;
        }
        if (this.image3 == null) {
            this.img3 = true;
        }
        else {
            this.img13 = true;
        }
    }
    Tradesmanappointdetail.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tradesmanappointdetail');
    };
    Tradesmanappointdetail.prototype.VIEWLOACATION = function () {
        var _this = this;
        var modal = this.modalCtrl.create('Tradesappointdetaillocation');
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.navCtrl.setRoot(data);
        });
        // this.navCtrl.push('Tradesappointdetaillocation')
        // this.navCtrl.setRoot('Tradesappointdetaillocation')
    };
    return Tradesmanappointdetail;
}());
Tradesmanappointdetail = __decorate([
    IonicPage({
        name: 'Tradesmanappointdetail',
        segment: 'Tradesmanappointdetail'
    }),
    Component({
        selector: 'page-tradesmanappointdetail',
        templateUrl: 'tradesmanappointdetail.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ModalController])
], Tradesmanappointdetail);
export { Tradesmanappointdetail };
//# sourceMappingURL=tradesmanappointdetail.js.map