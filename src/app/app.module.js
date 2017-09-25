var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Security } from '../providers/security';
import { UserDataProvider } from '../providers/user-data';
import { HttpModule } from '@angular/http';
import { ModalAutocompleteItems } from '../pages/modal-autocomplete-items/modal-autocomplete-items';
import { IonicRating } from '../components/ionic-rating/ionic-rating';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            ModalAutocompleteItems,
            IonicRating
        ],
        imports: [
            BrowserModule,
            HttpModule,
            IonicModule.forRoot(MyApp),
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            ModalAutocompleteItems
        ],
        providers: [
            StatusBar,
            SplashScreen,
            Security,
            UserDataProvider,
            { provide: ErrorHandler, useClass: IonicErrorHandler }
        ],
        schemas: [NO_ERRORS_SCHEMA]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map