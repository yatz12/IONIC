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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the Nearbyjobsdetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Nearbyjobsdetail = (function () {
    function Nearbyjobsdetail(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.email = this.navParams.get('email');
        this.job_category = this.navParams.get('job_category');
        this.job_title = this.navParams.get('job_title');
        this.job_description = this.navParams.get('job_description');
        this.image1 = this.navParams.get('image1');
        this.image2 = this.navParams.get('image2');
        this.image3 = this.navParams.get('image3');
        this.job_location = this.navParams.get('job_location');
        this.date = this.navParams.get('date');
        this.start_time = this.navParams.get('start_time');
        this.end_time = this.navParams.get('end_time');
        this.firstname = this.navParams.get('firstname');
        this.user_image = this.navParams.get('user_image');
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
    Nearbyjobsdetail.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Nearbyjobsdetail');
    };
    return Nearbyjobsdetail;
}());
Nearbyjobsdetail = __decorate([
    IonicPage({
        name: 'Nearbyjobsdetail',
        segment: 'Nearbyjobsdetail'
    }),
    Component({
        selector: 'page-nearbyjobsdetail',
        templateUrl: 'nearbyjobsdetail.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], Nearbyjobsdetail);
export { Nearbyjobsdetail };
//# sourceMappingURL=nearbyjobsdetail.js.map