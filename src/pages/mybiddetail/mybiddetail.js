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
 * Generated class for the Mybiddetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Mybiddetail = (function () {
    function Mybiddetail(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mybiddata = this.navParams.get('mybiddata');
        this.index = this.navParams.get('i');
        this.image1 = this.mybiddata[this.index].image1;
        this.image2 = this.mybiddata[this.index].image2;
        this.image3 = this.mybiddata[this.index].image3;
        this.jobtitle = this.mybiddata[this.index].job_title;
        this.jobcategory = this.mybiddata[this.index].job_category;
        this.jobdescription = this.mybiddata[this.index].job_description;
        this.jobloc = this.mybiddata[this.index].joblocation;
        this.endtime = this.mybiddata[this.index].end_time;
        this.date = this.mybiddata[this.index].date;
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
    Mybiddetail.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Mybiddetail');
    };
    return Mybiddetail;
}());
Mybiddetail = __decorate([
    IonicPage({
        name: 'Mybiddetail',
        segment: 'Mybiddetail'
    }),
    Component({
        selector: 'page-mybiddetail',
        templateUrl: 'mybiddetail.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], Mybiddetail);
export { Mybiddetail };
//# sourceMappingURL=mybiddetail.js.map