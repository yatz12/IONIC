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
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { Security } from '../../providers/security';
import { UserDataProvider } from '../../providers/user-data';
/**
 * Generated class for the Mypost page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Mypost = (function () {
    function Mypost(userDataProvider, navCtrl, navParams, loadingCtrl, securityprovider) {
        this.userDataProvider = userDataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.securityprovider = securityprovider;
        this.structure = { lower: 33, upper: 400 };
        this.popup = false;
        this.popup1 = false;
        this.popup2 = false;
        this.bidpopup1 = true;
        this.bidpopup2 = false;
        this.bidpopup3 = false;
        this.bidpopup4 = false;
    }
    Mypost.prototype.onSelectChange = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Please wait.." });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.postdetailscategory(localStorage['id'], localStorage['fbstatus'], event); })
            .subscribe(function (data) {
            loading.dismiss();
            console.log(data.result.job_data);
            _this.jobdata2 = data.result.job_data;
            _this.popup1 = false;
            _this.bidpopup1 = false;
            _this.bidpopup3 = true;
            _this.bidpopup2 = false;
        });
    };
    Mypost.prototype.ondateChange = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait..' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.pricedetailsort(localStorage['id'], localStorage['fbstatus'], event); })
            .subscribe(function (data) {
            loading.dismiss();
            _this.jobdata3 = data.result.job_data;
            _this.popup2 = false;
            _this.bidpopup1 = false;
            _this.bidpopup3 = false;
            _this.bidpopup2 = false;
            _this.bidpopup4 = true;
        });
    };
    Mypost.prototype.onpriceChange = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait..' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.pricedetailsort(localStorage['id'], localStorage['fbstatus'], event); })
            .subscribe(function (data) {
            loading.dismiss();
            _this.jobdata3 = data.result.job_data;
            _this.popup2 = false;
            _this.bidpopup1 = false;
            _this.bidpopup3 = false;
            _this.bidpopup2 = false;
            _this.bidpopup4 = true;
        });
    };
    Mypost.prototype.sort = function () {
        this.popup2 = true;
    };
    Mypost.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait..' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.postdetails(localStorage['id'], localStorage['fbstatus']); })
            .subscribe(function (data) {
            loading.dismiss();
            if (data.result.status == 1) {
                // console.log(data.result.job_data)
                _this.jobdata = data.result.job;
                if (data.result.job[0].fb_status == 2) {
                    _this.firstname = data.result.job[0].user_firstname;
                    _this.image = 'http://titan.promaticstechnologies.com/bidwork/public/userImage/' + data.result.job[0].user_image;
                }
                else if (data.result.job[0].fb_status == 1) {
                    _this.firstname = data.result.job[0].username;
                    _this.image = data.result.job[0].user_image;
                }
            }
            else if (data.result.status == 0) {
            }
        });
    };
    Mypost.prototype.filter = function () {
        this.popup = true;
    };
    Mypost.prototype.category = function () {
        var _this = this;
        console.log('ionViewDidLoad Postjob');
        var loading = this.loadingCtrl.create({ content: 'Wait..' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.jobcategory(); })
            .subscribe(function (data) {
            loading.dismiss();
            // console.log(data.result.status)
            if (data.result.status == 1) {
                _this.popup1 = true;
                _this.userDataProvider.JobCategorydata();
                _this.userDataProvider.JOBCATEGORY.user_data = data.result.user_data;
                _this.jobcategory = data.result.user_data;
                console.log('data' + data.result.user_data);
                console.log('data2' + _this.userDataProvider.JOBCATEGORY);
            }
        });
    };
    Mypost.prototype.Bidpost = function (id, i) {
        this.navCtrl.push('Postdetails', { id: id, jobdata: this.jobdata, index: i });
    };
    Mypost.prototype.taprange = function () {
        var _this = this;
        this.id = localStorage['id'],
            this.fbstatus = localStorage['fbstatus'];
        var loading = this.loadingCtrl.create({ content: 'wait' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.filter(_this.id, _this.fbstatus, _this.structure.lower, _this.structure.upper); })
            .subscribe(function (data) {
            loading.dismiss();
            console.log(data.result.job_data);
            _this.jobdata1 = data.result.job_data;
            _this.popup = false;
            _this.bidpopup1 = false;
            _this.bidpopup2 = true;
            _this.bidpopup3 = false;
        });
    };
    return Mypost;
}());
Mypost = __decorate([
    IonicPage({
        name: 'Mypost',
        segment: 'Mypost-page'
    }),
    Component({
        selector: 'page-mypost',
        templateUrl: 'mypost.html',
    }),
    __metadata("design:paramtypes", [UserDataProvider, NavController, NavParams, LoadingController, Security])
], Mypost);
export { Mypost };
//# sourceMappingURL=mypost.js.map