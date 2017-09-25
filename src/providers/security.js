var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ENV } from '../app/env';
var Security = (function () {
    function Security(http) {
        this.http = http;
        console.log('Hello Security Provider');
    }
    Security.prototype.payplan = function (unique_id, email, intent, amount, state, createtime, planid) {
        return this.http.post(ENV.mainApi + '/payment/form', {
            unique_id: unique_id,
            email: email,
            intent: intent,
            price: amount,
            state: state,
            create_time: createtime,
            plan_id: planid
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.subscribeplans = function () {
        return this.http.get(ENV.mainApi + '/subscription/plans', {})
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.contact = function (type, email, phone, message) {
        return this.http.post(ENV.mainApi + '/contact/form', {
            email: email,
            message: message,
            type: type,
            phone_number: phone
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.Signup = function (firstname, lastname, address, phone_number, email, password) {
        return this.http.post(ENV.mainApi + '/signup', {
            firstname: firstname,
            lastname: lastname,
            address: address,
            phone_number: phone_number,
            email: email,
            password: password,
            type: 1
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.checkappointement = function (email) {
        return this.http.post(ENV.mainApi + '/check/appointment', {
            trad_email: email
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.nearby = function (email, latitude, longitude, event) {
        return this.http.post(ENV.mainApi + '/nearbylocation', {
            email: email,
            latitude: latitude,
            longitude: longitude,
            miles: event
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.mybids = function (email) {
        return this.http.post(ENV.mainApi + '/bids', {
            email: email
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.listofBids = function (email) {
        return this.http.post(ENV.mainApi + '/list/bid', {
            email: email
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.feedbackphrase = function () {
        return this.http.get(ENV.mainApi + '/feedback', {})
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.Bidappointement = function (datepick, timepick, feedbackphrase, email, job_id, email1) {
        return this.http.post(ENV.mainApi + '/appointment', {
            date: datepick,
            time: timepick,
            feedback_phrase: feedbackphrase,
            cust_email: email,
            job_id: job_id,
            trad_email: email1
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.Highestbiding = function (id) {
        return this.http.post(ENV.mainApi + '/highest/bid', {
            job_id: id
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.tradesmancategory = function (event) {
        return this.http.post(ENV.mainApi + '/filter/jobs', {
            type: event
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.bid = function (jobid, heart, rating, price, email) {
        return this.http.post(ENV.mainApi + '/bid', {
            job_id: jobid,
            price: price,
            email: email,
            rating: rating,
            heart: heart
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.tradesmancategory1 = function (event) {
        return this.http.post(ENV.mainApi + '/filter/jobs', {
            category_name: event
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.tradesmanfilter = function (min, max) {
        return this.http.post(ENV.mainApi + '/filter/jobs', {
            min_range: min,
            max_range: max
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.postdetailscategory = function (id, fbstatus, event) {
        return this.http.post(ENV.mainApi + '/filter', {
            email: id,
            fb_status: fbstatus,
            category_name: event
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.authenticatefb = function (fbtoken) {
        return this.http.post(ENV.mainApi + '/fb_token', {
            fb_token: fbtoken
        }).timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.tradesmansignup = function (firstname, lastname, pic, email, password, address, phoneno) {
        return this.http.post(ENV.mainApi + '/signup', {
            firstname: firstname,
            lastname: lastname,
            address: address,
            phone_number: phoneno,
            license: pic,
            email: email,
            password: password,
            type: 2
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.aboutus = function () {
        return this.http.get(ENV.mainApi + '/aboutus', {})
            .timeout(ENV.timeout)
            .map(function (data) { return data.json(); });
    };
    Security.prototype.jobSearch = function (email) {
        return this.http.post(ENV.mainApi + '/jobs', {
            email: email
        })
            .timeout(ENV.timeout)
            .map(function (data) { return data.json(); });
    };
    Security.prototype.howitworks = function () {
        return this.http.get(ENV.mainApi + '/howitworks', {})
            .timeout(ENV.timeout)
            .map(function (data) { return data.json(); });
    };
    Security.prototype.login = function (email, password, fb_status2) {
        return this.http.post(ENV.mainApi + '/login', {
            email: email,
            password: password,
            fb_status: fb_status2
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.faq = function () {
        return this.http.get(ENV.mainApi + '/faqs', {})
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.filter = function (id, fbstatus, lower, upper) {
        return this.http.post(ENV.mainApi + '/filter', {
            email: id,
            fb_status: fbstatus,
            min_range: lower,
            max_range: upper
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.pricedetailsort = function (id, fbstatus, event) {
        return this.http.post(ENV.mainApi + '/filter', {
            email: id,
            fb_status: fbstatus,
            type: event
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.delpost = function (userid, fbstatus, id) {
        return this.http.post(ENV.mainApi + '/job/destroy', {
            email: userid,
            fb_status: fbstatus,
            id: id
        });
    };
    Security.prototype.loginWithFb = function (unique_id, username, fb_status1, emailfb, image) {
        return this.http.post(ENV.mainApi + '/login', {
            unique_id: unique_id,
            username: username,
            fb_status: fb_status1,
            email: emailfb,
            link: image
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.loginWithFb1 = function (unique_id, username, fb_status1, email, pic, fb_type) {
        return this.http.post(ENV.mainApi + '/login', {
            unique_id: unique_id,
            username: username,
            fb_status: fb_status1,
            email: email,
            license: pic,
            fb_type: fb_type
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.forgetpassword = function (email) {
        return this.http.post(ENV.mainApi + '/forgot/password', {
            email: email,
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.userData = function (id) {
        return this.http.post(ENV.mainApi + '/edit/profile', {
            user_id: id,
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.editProfile = function (data) {
        return this.http.post(ENV.mainApi + '/update/profile', data)
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.jobcategory = function () {
        return this.http.get(ENV.mainApi + '/job/category', {})
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.jobbpostservice = function (id, job_title, job_category, job_description, price, address, lat, lng, image1, image2, image3, date, start_time, end_time, fbstaus) {
        return this.http.post(ENV.mainApi + '/post/job', {
            email: id,
            job_title: job_title,
            job_category: job_category,
            job_description: job_description,
            price: price,
            job_location: address,
            latitude: lat,
            longitude: lng,
            image1: image1,
            image2: image2,
            image3: image3,
            date: date,
            start_time: start_time,
            end_time: end_time,
            fb_status: fbstaus
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    Security.prototype.postdetails = function (userid, fbstatus) {
        return this.http.post(ENV.mainApi + '/job/details', {
            email: userid,
            fb_status: fbstatus
        })
            .timeout(ENV.timeout)
            .map(function (data) {
            return data.json();
        });
    };
    return Security;
}());
Security = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], Security);
export { Security };
//# sourceMappingURL=security.js.map