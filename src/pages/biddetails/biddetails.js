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
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { Security } from '../../providers/security';
/**
 * Generated class for the Biddetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Biddetails = (function () {
    function Biddetails(alertCtrl, navCtrl, navParams, loadingCtrl, securityprovider) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.securityprovider = securityprovider;
        this.categoryjobsdetail = this.navParams.get('categoryjobsdetail');
        console.log(this.categoryjobsdetail.rating);
    }
    Biddetails.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Biddetails');
        if (localStorage['rating'] == 1) {
            var x1 = document.getElementById('star1');
            x1.style.color = "orange";
        }
        else if (localStorage['rating'] == 2) {
            var x1 = document.getElementById('star1');
            x1.style.color = "orange";
            var x2 = document.getElementById('star2');
            x2.style.color = "orange";
        }
        else if (localStorage['rating'] == 3) {
            var x1 = document.getElementById('star1');
            x1.style.color = "orange";
            var x2 = document.getElementById('star2');
            x2.style.color = "orange";
            var x3 = document.getElementById('star3');
            x3.style.color = "orange";
        }
        else if (localStorage['rating'] == 4) {
            var x1 = document.getElementById('star1');
            x1.style.color = "orange";
            var x2 = document.getElementById('star2');
            x2.style.color = "orange";
            var x3 = document.getElementById('star3');
            x3.style.color = "orange";
            var x4 = document.getElementById('star4');
            x4.style.color = "orange";
        }
        else if (localStorage['rating'] == 5) {
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
        var loading = this.loadingCtrl.create({ content: 'wait' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.feedbackphrase(); })
            .subscribe(function (data) {
            loading.dismiss();
            _this.phrase = data.result.feedback;
        });
    };
    Biddetails.prototype.tapBid = function () {
        var _this = this;
        var partial = {
            datepick: this.datepick,
            feedbackphrase: this.feedbackphrase,
            timepick: this.timepick,
        };
        var madatoryFields = [];
        if (!partial.datepick) {
            madatoryFields.push('Date');
        }
        if (!partial.feedbackphrase) {
            madatoryFields.push('FeedbackPhrase');
        }
        if (!partial.timepick) {
            madatoryFields.push('Time');
        }
        if (madatoryFields.length > 0) {
            var alertctr = this.alertCtrl.create({
                title: 'Mandatory Feilds!',
                message: madatoryFields.join(','),
                buttons: ['Ok']
            });
            alertctr.present();
        }
        else {
            var loading_1 = this.loadingCtrl.create({ content: 'wait' });
            Observable.of(loading_1).flatMap(function (loading) { return loading.present(); })
                .flatMap(function () { return _this.securityprovider.Bidappointement(_this.datepick, _this.timepick, _this.feedbackphrase, localStorage['id'], _this.categoryjobsdetail.job_id, _this.categoryjobsdetail.email); })
                .subscribe(function (data) {
                loading_1.dismiss();
                // this.phrase=data.result.feedback
                if (data.result.status) {
                    var alert_1 = _this.alertCtrl.create({
                        subTitle: 'Appointment Succesfully Fixed',
                        buttons: [{
                                text: 'OK',
                                handler: function (data) {
                                    _this.navCtrl.setRoot('Bidwork');
                                }
                            }]
                    });
                    alert_1.present();
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        subTitle: 'Something Went Wrong',
                        buttons: [{
                                text: 'OK',
                                handler: function (data) {
                                    // this.navCtrl.setRoot('Bidwork')
                                }
                            }]
                    });
                    alert_2.present();
                }
            });
        }
    };
    return Biddetails;
}());
Biddetails = __decorate([
    IonicPage({
        name: 'Biddetails',
        segment: 'Biddetails-page'
    }),
    Component({
        selector: 'page-biddetails',
        templateUrl: 'biddetails.html',
    }),
    __metadata("design:paramtypes", [AlertController, NavController, NavParams, LoadingController, Security])
], Biddetails);
export { Biddetails };
//# sourceMappingURL=biddetails.js.map