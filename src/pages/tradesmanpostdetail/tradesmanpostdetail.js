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
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Security } from '../../providers/security';
import { Observable } from 'rxjs/Rx';
/**
 * Generated class for the Tradesmanpostdetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Tradesmanpostdetail = (function () {
    function Tradesmanpostdetail(navCtrl, navParams, alertCtrl, loadingCtrl, securityprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.securityprovider = securityprovider;
        this.count = 1;
        this.count1 = 1;
        this.count2 = 1;
        this.count3 = 1;
        this.count4 = 1;
        this.likeid = 0;
        this.starid = 0;
        this.id = this.navParams.get('id');
        this.jobdata = this.navParams.get('jobdata');
        this.index = this.navParams.get('index');
        this.jobtitle = this.jobdata[this.index].job_title;
        this.jobdescription = this.jobdata[this.index].job_description;
        this.jobcategory = this.jobdata[this.index].job_category;
        this.jobloc = this.jobdata[this.index].job_location;
        this.date = this.jobdata[this.index].date;
        this.endtime = this.jobdata[this.index].end_time;
        this.image1 = this.jobdata[this.index].image1;
        this.image2 = this.jobdata[this.index].image2;
        this.image3 = this.jobdata[this.index].image3;
        this.price = this.jobdata[this.index].price;
        this.heart = false;
        this.responseid = false;
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
    Tradesmanpostdetail.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Tradesmanpostdetail');
        var loading = this.loadingCtrl.create({ content: 'Please Wait..' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.Highestbiding(localStorage['jobidtrades']); })
            .subscribe(function (data) {
            loading.dismiss();
            if (data.result.bids != null) {
                console.log('hi' + data.result.bids.price);
                _this.highestbid = data.result.bids.price;
            }
            else {
                console.log('bid0');
                _this.highestbid = 0;
            }
        });
    };
    Tradesmanpostdetail.prototype.bidpost = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Post Bid',
            message: "Enter Bid To See the Location",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Enter in $'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.triggerbid(data.title);
                        console.log(data.title);
                    }
                }
            ]
        });
        prompt.present();
    };
    Tradesmanpostdetail.prototype.tap = function (id) {
        if (id == 1) {
            this.starid = 1;
            var x1 = document.getElementById('star1');
            x1.style.color = "orange";
            var x2 = document.getElementById('star2');
            x2.style.color = "grey";
            var x3 = document.getElementById('star3');
            x3.style.color = "grey";
            var x4 = document.getElementById('star4');
            x4.style.color = "grey";
            var x5 = document.getElementById('star5');
            x5.style.color = "grey";
        }
        else if (id == 2) {
            this.starid = 2;
            var x1 = document.getElementById('star1');
            x1.style.color = "orange";
            var x2 = document.getElementById('star2');
            x2.style.color = "orange";
            var x3 = document.getElementById('star3');
            x3.style.color = "grey";
            var x4 = document.getElementById('star4');
            x4.style.color = "grey";
            var x5 = document.getElementById('star5');
            x5.style.color = "grey";
        }
        else if (id == 3) {
            this.starid = 3;
            var x1 = document.getElementById('star1');
            x1.style.color = "orange";
            var x2 = document.getElementById('star2');
            x2.style.color = "orange";
            var x3 = document.getElementById('star3');
            x3.style.color = "orange";
            var x4 = document.getElementById('star4');
            x4.style.color = "grey";
            var x5 = document.getElementById('star5');
            x5.style.color = "grey";
        }
        else if (id == 4) {
            this.starid = 4;
            var x1 = document.getElementById('star1');
            x1.style.color = "orange";
            var x2 = document.getElementById('star2');
            x2.style.color = "orange";
            var x3 = document.getElementById('star3');
            x3.style.color = "orange";
            var x4 = document.getElementById('star4');
            x4.style.color = "orange";
            var x5 = document.getElementById('star5');
            x5.style.color = "grey";
        }
        else if (id == 5) {
            this.starid = 5;
            var x1 = document.getElementById('star1');
            x1.style.color = "orange";
            var x2 = document.getElementById('star2');
            x2.style.color = "orange";
            var x3 = document.getElementById('star3');
            x3.style.color = "orange";
            var x4 = document.getElementById('star4');
            x4.style.color = "orange";
            var x5 = document.getElementById('star5');
            x5.style.color = "orange";
        }
    };
    Tradesmanpostdetail.prototype.like = function () {
        this.heart = true;
        this.likeid = 1;
    };
    Tradesmanpostdetail.prototype.triggerbid = function (price) {
        var _this = this;
        if (isNaN(price) == true) {
            var alert_1 = this.alertCtrl.create({
                subTitle: 'Bid can only be in numbers',
                buttons: ['ok']
            });
            alert_1.present();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please Wait..'
            });
            Observable.of(loading_1).flatMap(function (loading) { return loading.present(); })
                .flatMap(function () { return _this.securityprovider.bid(_this.id, _this.likeid, _this.starid, price, localStorage['email']); })
                .subscribe(function (data) {
                loading_1.dismiss();
                if (data.result.status == 1) {
                    _this.responseid = true;
                    var alert_2 = _this.alertCtrl.create({
                        subTitle: data.result.message,
                        buttons: ['ok']
                    });
                    alert_2.present();
                    setTimeout(function () {
                        _this.navCtrl.setRoot('Mybids');
                    }, 5000);
                }
                else {
                    var alert_3 = _this.alertCtrl.create({
                        subTitle: data.result.message,
                        buttons: ['ok']
                    });
                    alert_3.present();
                }
            });
        }
        //  if(this.highestbid>price){
        // let alert=this.alertCtrl.create({
        //               subTitle:'Please make sure that your bid is higher Customer and Other Tradesman Bid',
        //               buttons:['ok']
        //             })
        //             alert.present();
        // }
        // else
        // {
        // if(price==NaN){
        // console.log('ra')
        // }
        // }
    };
    return Tradesmanpostdetail;
}());
Tradesmanpostdetail = __decorate([
    IonicPage({
        name: 'Tradesmanpostdetail',
        segment: 'Tradesmanpostdetail'
    }),
    Component({
        selector: 'page-tradesmanpostdetail',
        templateUrl: 'tradesmanpostdetail.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController, LoadingController, Security])
], Tradesmanpostdetail);
export { Tradesmanpostdetail };
//# sourceMappingURL=tradesmanpostdetail.js.map