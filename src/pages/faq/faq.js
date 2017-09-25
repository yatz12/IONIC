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
/**
 * Generated class for the Faq page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Faq = (function () {
    function Faq(navCtrl, navParams, loadinCtrl, securityprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadinCtrl = loadinCtrl;
        this.securityprovider = securityprovider;
        this.count = 0;
        this.showadd = true;
        this.removeadd = false;
    }
    Faq.prototype.question = function (i) {
        this.count++;
        if (this.count % 2 != 0) {
            this.answer = i;
        }
        else {
            this.answer = 'p';
        }
    };
    Faq.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadinCtrl.create({ content: 'wait' });
        Observable.of(loading).flatMap(function (loading) { return loading.present(); })
            .flatMap(function () { return _this.securityprovider.faq(); })
            .subscribe(function (data) {
            loading.dismiss();
            _this.faqdata = data.result.faq;
        });
    };
    Faq.prototype.add = function () {
        var x = document.getElementById('tap');
        x.style.backgroundColor = "black";
        this.showadd = false;
        this.removeadd = true;
    };
    Faq.prototype.remove = function () {
        this.showadd = true;
        this.removeadd = false;
    };
    return Faq;
}());
Faq = __decorate([
    IonicPage({
        name: 'Faq',
        segment: 'Faq-page'
    }),
    Component({
        selector: 'page-faq',
        templateUrl: 'faq.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, LoadingController, Security])
], Faq);
export { Faq };
//# sourceMappingURL=faq.js.map