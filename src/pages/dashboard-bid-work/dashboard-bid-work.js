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
import { LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { Security } from '../../providers/security';
import { Events } from 'ionic-angular';
/**
 * Generated class for the DashboardBidWork page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DashboardBidWork = (function () {
    function DashboardBidWork(events, loadingCtrl, security, navCtrl, navParams) {
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.security = security;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.id = 1;
        this.structure = { lower: 33, upper: 400 };
        this.tapsearch = false;
        this.tapsearch1 = true;
        this.mainpopup = true;
        this.popupfilter = false;
        this.popupfilterdata = false;
        this.popupfilterdatasort = false;
    }
    DashboardBidWork.prototype.ionViewDidLoad = function () {
        //    localStorage['navid']=this.id
        // this.events.publish('user:created',localStorage['navid'])
        // alert('check'+localStorage['navid'])
        var _this = this;
        if (localStorage['navid'] == 1) {
            localStorage['navid'] = 1;
            this.events.publish('user:created', localStorage['navid']);
        }
        else {
            localStorage['navid'] = 4;
            this.events.publish('user:created', localStorage['navid']);
        }
        var loading = this.loadingCtrl.create({ content: 'Wait..' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.security.jobSearch(localStorage['email']); })
            .subscribe(function (data) {
            loading.dismiss();
            _this.Jobsdata = data.result.job;
            _this.jobdata = data.result.job;
            _this.initializeItems();
        });
    };
    DashboardBidWork.prototype.search = function (searchid) {
        this.searchid = searchid;
        this.tapsearch = true;
        this.tapsearch1 = false;
    };
    DashboardBidWork.prototype.initializeItems = function () {
        this.Jobsdata = this.Jobsdata;
    };
    DashboardBidWork.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (this.searchid == 1) {
            if (val && val.trim() != '') {
                this.Jobsdata = this.Jobsdata.filter(function (value) {
                    return (value.job_title.toUpperCase().indexOf(val.toUpperCase()) > -1);
                });
            }
            else {
                this.Jobsdata = this.jobdata;
            }
        }
        else if (this.searchid == 2) {
            if (val && val.trim() != '') {
                this.Jobsdata = this.Jobsdata.filter(function (value) {
                    return (value.job_category.toUpperCase().indexOf(val.toUpperCase()) > -1);
                });
            }
            else {
                this.Jobsdata = this.jobdata;
            }
        }
    };
    DashboardBidWork.prototype.close = function () {
        this.popupfilter = false;
        this.popup2 = false;
        this.popup1 = false;
    };
    DashboardBidWork.prototype.Bidpost = function (id, i) {
        localStorage['jobidtrades'] = id;
        this.navCtrl.push('Tradesmanpostdetail', { id: id, jobdata: this.jobdata, index: i });
    };
    DashboardBidWork.prototype.filter = function () {
        this.popupfilter = true;
    };
    DashboardBidWork.prototype.sort = function () {
        this.popup2 = true;
    };
    DashboardBidWork.prototype.taprange = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'wait' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.security.tradesmanfilter(_this.structure.lower, _this.structure.upper); })
            .subscribe(function (data) {
            loading.dismiss();
            _this.popupfilter = false;
            _this.mainpopup = false;
            _this.popupfilterdata = true;
            _this.popup2 = false;
            _this.Jobsdata = data.result.job;
            _this.jobdata = data.result.job;
        });
    };
    DashboardBidWork.prototype.onChange = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Please wait.." });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.security.tradesmancategory(event); })
            .subscribe(function (data) {
            loading.dismiss();
            _this.mainpopup = false;
            _this.popup2 = false;
            _this.popupfilterdata = false;
            _this.popupfilterdatasort = true;
            _this.popupfilter = false;
            _this.Jobsdata = data.result.job;
            _this.jobdata = data.result.job;
        });
    };
    DashboardBidWork.prototype.category = function () {
        var _this = this;
        console.log('ionViewDidLoad Postjob');
        var loading = this.loadingCtrl.create({ content: 'Wait..' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.security.jobcategory(); })
            .subscribe(function (data) {
            loading.dismiss();
            _this.popup1 = true;
            if (data.result.status == 1) {
                _this.jobcategory = data.result.user_data;
            }
        });
    };
    DashboardBidWork.prototype.onSelectChange = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Please wait.." });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.security.tradesmancategory1(event); })
            .subscribe(function (data) {
            loading.dismiss();
            console.log(data.result.job_data);
            _this.popup1 = false;
            _this.mainpopup = false;
            _this.popupfilterdatasortcategory = true;
            _this.popup2 = false;
            _this.popupfilterdata = false;
            _this.Jobsdata = data.result.job;
            _this.jobdata = data.result.job;
        });
    };
    return DashboardBidWork;
}());
DashboardBidWork = __decorate([
    IonicPage({
        name: 'DashboardBidWork',
        segment: 'DashboardBidWork'
    }),
    Component({
        selector: 'page-dashboard-bid-work',
        templateUrl: 'dashboard-bid-work.html',
    }),
    __metadata("design:paramtypes", [Events, LoadingController, Security, NavController, NavParams])
], DashboardBidWork);
export { DashboardBidWork };
//# sourceMappingURL=dashboard-bid-work.js.map