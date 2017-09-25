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
import { ModalController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Signup = Signup_1 = (function () {
    function Signup(formbuilder, modalctrl, navCtrl, navParams) {
        this.formbuilder = formbuilder;
        this.modalctrl = modalctrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Bidform = formbuilder.group({
            firstName: ['', Validators.compose([Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            lastName: ['', Validators.compose([Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            Address: ['',],
            Phoneno: ['', Signup_1.isValid]
        });
    }
    Signup.isValid = function (control) {
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
    Signup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup');
    };
    Signup.prototype.next = function () {
        // alert(this.Bidform.controls["firstName"].value+','+this.Bidform.controls["lastName"].value)
        this.navCtrl.push('Signupnext', { firstName: this.Bidform.controls["firstName"].value, lastName: this.Bidform.controls["lastName"].value, address: this.Bidform.controls["Address"].value, Phoneno: this.Bidform.controls["Phoneno"].value });
    };
    return Signup;
}());
Signup = Signup_1 = __decorate([
    IonicPage({
        name: 'Signup',
        segment: 'Signup-page'
    }),
    Component({
        selector: 'page-signup',
        templateUrl: 'signup.html',
    }),
    __metadata("design:paramtypes", [FormBuilder, ModalController, NavController, NavParams])
], Signup);
export { Signup };
var Signup_1;
//# sourceMappingURL=signup.js.map