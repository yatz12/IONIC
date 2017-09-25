var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * Generated class for the IonicRating component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var IonicRating = (function () {
    function IonicRating() {
        this.numStars = 5;
        this.readOnly = true;
        this.value = 5;
        this.clicked = new EventEmitter();
        this.stars = [];
        console.log('Hello IonicRating Component');
    }
    IonicRating.prototype.ngAfterViewInit = function () {
        this.calc();
    };
    IonicRating.prototype.calc = function () {
        this.stars = [];
        var tmp = this.value;
        for (var i = 0; i < this.numStars; i++, tmp--)
            if (tmp >= 1)
                this.stars.push("star");
            else if (tmp < 1 && tmp > 0)
                this.stars.push("star-half");
            else
                this.stars.push("star-outline");
    };
    IonicRating.prototype.starClicked = function (index) {
        if (!this.readOnly) {
            this.value = index + 1;
            this.calc();
            this.clicked.emit(this.value);
        }
    };
    return IonicRating;
}());
__decorate([
    Input(),
    __metadata("design:type", Number)
], IonicRating.prototype, "numStars", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], IonicRating.prototype, "readOnly", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], IonicRating.prototype, "value", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], IonicRating.prototype, "clicked", void 0);
IonicRating = __decorate([
    Component({
        selector: 'ionic-rating',
        templateUrl: 'ionic-rating.html'
    }),
    __metadata("design:paramtypes", [])
], IonicRating);
export { IonicRating };
//# sourceMappingURL=ionic-rating.js.map