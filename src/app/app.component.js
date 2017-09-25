var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';
var MyApp = (function () {
    function MyApp(events, platform, statusBar, splashScreen) {
        var _this = this;
        this.events = events;
        this.rootPage = 'Signupscreen';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // let env = this;
            //   NativeStorage.getItem('user')
            //   .then( function (data) {
            //     // user is previously logged and we have his data
            //     // we will let him access the app
            //     env.nav.push(Bidwork);
            //     splashScreen.hide();
            //   }, function (error) {
            //     //we don't have the user data so we will ask him to log in
            //     env.nav.push(HomePage);
            //     splashScreen.hide();
            //   });
            //   statusBar.styleDefault();
        });
        events.subscribe('user:created', function (user) {
            _this.navbar = user;
            // alert(this.navbar)
        });
        // events.subscribe('fbuser:created',(fbtoken)=>{
        //   alert('hi'+fbtoken)
        //   this.fbtoken=fbtoken
        // })
        if (localStorage['fb_token'] != null) {
            this.rootPage = 'Authenticatefblogin';
        }
        if (localStorage['tradesdashboard'] != null) {
            this.rootPage = 'DashboardBidWork';
        }
        if (localStorage['tradesmannormalloginstatus'] == 1) {
            this.rootPage = 'DashboardBidWork';
        }
        this.pages = [
            { title: 'Home', component: 'Bidwork', logo: 'ios-home' },
            { title: 'My Profile', component: 'Myprofile', logo: 'ios-person' },
            { title: 'My Posts', component: 'Mypost', logo: 'ios-folder' },
            { title: 'Ratings', component: 'Rating', logo: 'ios-star' },
            { title: 'Chat', component: 'Inbox', logo: 'ios-chatboxes' },
            { title: 'FAQ', component: 'Faq', logo: 'md-help' },
            { title: 'About App', component: 'Aboutapp', logo: 'ios-information-circle' },
            { title: 'Logout', component: 'HomePage', logo: 'ios-log-out' },
            { title: 'Contact Us', component: 'Contactusbidwork', logo: 'ios-call' }
        ];
        this.pages2 = [
            { title: 'Home', component: 'Bidwork', logo: 'ios-home' },
            { title: 'My Posts', component: 'Mypost', logo: 'ios-folder' },
            { title: 'Ratings', component: 'Rating', logo: 'ios-star' },
            { title: 'Chat', component: 'Inbox', logo: 'ios-chatboxes' },
            { title: 'FAQ', component: 'Faq', logo: 'md-help' },
            { title: 'About App', component: 'Aboutapp', logo: 'ios-information-circle' },
            { title: 'Logout', component: 'HomePage', logo: 'ios-log-out' },
            { title: 'Contact Us', component: 'Contactusbidwork', logo: 'ios-call' },
            { title: 'Logout', component: 'Tradesmanlogin', logo: 'ios-log-out' },
        ];
        this.pages1 = [
            { title: 'Search Jobs', component: 'DashboardBidWork', logo: 'ios-home' },
            { title: 'My bids', component: 'Mybids', logo: 'ios-folder' },
            { title: 'Appointment', component: 'Tradesmanappointement', logo: 'ios-bookmarks' },
            { title: 'Near By Jobs', component: 'Nearbyjobs', logo: 'ios-pin' },
            { title: 'Contact Us', component: 'Contactusbidwork', logo: 'ios-call' },
            { title: 'Chat', component: 'Inbox', logo: 'ios-chatboxes' },
            { title: 'My Profile', component: 'Mytradesprofile', logo: 'ios-person' },
            { title: 'Subscribe', component: 'Subscriptionpayment', logo: 'ios-card' },
            { title: 'Logout', component: 'Tradesmanlogin', logo: 'ios-log-out' }
        ];
        this.pages4 = [
            { title: 'Search Jobs', component: 'DashboardBidWork', logo: 'ios-home' },
            { title: 'My bids', component: 'Mybids', logo: 'ios-folder' },
            { title: 'Appointment', component: 'Tradesmanappointement', logo: 'ios-bookmarks' },
            { title: 'Near By Jobs', component: 'Nearbyjobs', logo: 'ios-pin' },
            { title: 'Contact Us', component: 'Contactusbidwork', logo: 'ios-call' },
            { title: 'Subscribe', component: 'Subscriptionpayment', logo: 'ios-card' },
            { title: 'Logout', component: 'Tradesmanlogin', logo: 'ios-log-out' },
        ];
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Events, Platform, StatusBar, SplashScreen])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map