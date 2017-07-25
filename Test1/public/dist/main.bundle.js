webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_question_create_question_component__ = __webpack_require__("../../../../../src/app/create-question/create-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__play_play_component__ = __webpack_require__("../../../../../src/app/play/play.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        pathMatch: "full",
        redirectTo: "/landing"
    },
    {
        path: "landing",
        component: __WEBPACK_IMPORTED_MODULE_2__landing_landing_component__["a" /* LandingComponent */]
    },
    {
        path: "newquestion",
        component: __WEBPACK_IMPORTED_MODULE_3__create_question_create_question_component__["a" /* CreateQuestionComponent */]
    },
    {
        path: "letsplay",
        component: __WEBPACK_IMPORTED_MODULE_4__play_play_component__["a" /* PlayComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_question_create_question_component__ = __webpack_require__("../../../../../src/app/create-question/create-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__play_play_component__ = __webpack_require__("../../../../../src/app/play/play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__communicate_service__ = __webpack_require__("../../../../../src/app/communicate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__create_question_create_question_component__["a" /* CreateQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_7__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_8__play_play_component__["a" /* PlayComponent */],
            __WEBPACK_IMPORTED_MODULE_9__filter_pipe__["a" /* FilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_10__communicate_service__["a" /* CommunicateService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/communicate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommunicateService = (function () {
    function CommunicateService() {
        this.observedUser = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    CommunicateService.prototype.updateUser = function (user) {
        this.observedUser.next(user);
    };
    return CommunicateService;
}());
CommunicateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CommunicateService);

//# sourceMappingURL=communicate.service.js.map

/***/ }),

/***/ "../../../../../src/app/create-question/create-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-question/create-question.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a [routerLink]=\"['/landing']\">Home</a> | <a [routerLink]=\"['/newquestion']\">Add a Question</a>\n\n<h1>New Question</h1>\n<form #questionForm=\"ngForm\" (submit)=\"Process()\"> \n  Question:<textarea \n    [(ngModel)]=\"question.content\"\n    #content=\"ngModel\"\n    required\n    minlength=\"15\"\n    name=\"content\"\n    rows=\"4\" \n    cols=\"40\"></textarea> {{content.errors | json}}\n    <br>\n  Correct Answer:<input \n    [(ngModel)]=\"question.correct\"\n    #correct=\"ngModel\"\n    required\n    type=\"text\" \n    name=\"correct\" \n    value=\"\"> {{correct.errors | json}}\n    <br>\n  Fake Answer 1:<input\n    [(ngModel)]=\"question.wrong1\"\n    #wrongA=\"ngModel\"\n    required\n    type=\"text\" \n    name=\"wrong1\" \n    value=\"\">{{wrong1.errors | json}}\n    <br>\n  Fake Answer 2:<input \n    [(ngModel)]=\"question.wrong2\"\n    #wrongB = \"ngModel\"\n    required\n    type=\"text\" \n    name=\"wrong2\" \n    value=\"\"> {{wrong2.errors | json}}\n    <br>\n  <button [routerLink]=\"['/landing']\">Cancel</button>\n  <input type=\"submit\" name=\"\" [disabled]=\"!questionForm.form.valid\"value=\"Add Question\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/create-question/create-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__("../../../../../src/app/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_service__ = __webpack_require__("../../../../../src/app/communicate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateQuestionComponent = (function () {
    function CreateQuestionComponent(_httpService, router, _communicateService) {
        var _this = this;
        this._httpService = _httpService;
        this.router = router;
        this._communicateService = _communicateService;
        this.question = new __WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */]();
        console.log("in the landing constructor");
        this._communicateService.observedUser.subscribe(function (updatedUser) { _this.sessionUser = updatedUser; }, function (err) { }, function () { });
        this.sessionUser.lastGame.percentage = "Nope";
        this.sessionUser.trivia = "Nope";
        this.updateUser();
        console.log("and the sessionUser is " + this.sessionUser.name);
    }
    CreateQuestionComponent.prototype.ngOnInit = function () { };
    CreateQuestionComponent.prototype.Process = function () {
        console.log("inside create-question-component");
        this._httpService.newQuestion(this.question);
        this.sessionUser.trivia = true;
        this.sessionUser.lastGame.percentage = "Nope";
        this.updateUser();
        this.router.navigate(["/landing"]);
    };
    CreateQuestionComponent.prototype.updateUser = function () {
        //{name:"", lastGame:{score:"",percentage:""}}
        this._communicateService.updateUser(this.sessionUser);
    };
    CreateQuestionComponent.prototype.endSession = function () {
        this._httpService.endSession();
        this.router.navigate(["/landing"]);
    };
    return CreateQuestionComponent;
}());
CreateQuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-create-question',
        template: __webpack_require__("../../../../../src/app/create-question/create-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create-question/create-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__communicate_service__["a" /* CommunicateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__communicate_service__["a" /* CommunicateService */]) === "function" && _c || Object])
], CreateQuestionComponent);

var _a, _b, _c;
//# sourceMappingURL=create-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (users, search) {
        var result = [];
        var percentString = "";
        percentString += search;
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            if (user.name.toLowerCase().includes(search.toLowerCase()) || user.score.includes(search) || user.percentage == percentString) {
                result.push(user);
            }
        }
        return result;
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.newQuestion = function (question) {
        console.log("in the create question service");
        return this._http.post("/createQuestion", question).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.allQuestions = function () {
        return this._http.get("/allQuestions").map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.newUser = function (user) {
        console.log("create user in service");
        return this._http.post("/newUser", user).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.allUsers = function () {
        return this._http.get("/allUsers").map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.checkSession = function () {
        if (this.user) {
            return this.user;
        }
        return false;
    };
    HttpService.prototype.setSession = function (name) {
        this.user = name;
        return this._http.post("/setSession", name).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.endSession = function () {
        this.user = undefined;
        this._http.get("/endSession").map(function (data) { return data.json(); }).toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1>Hi {{sessionUser.name}}</h1>\n<a [routerLink]=\"['/landing']\">Home</a> | <a [routerLink]=\"['/newquestion']\">Add a Question</a> \n<a href=\"\" (ng-click)=\"endSession()\">Log Out</a>\n\n<div *ngIf=\"sessionUser.lastGame.percentage != 'Nope'\">\n  <p id=\"recap\">That was great, {{sessionUser.name}}! Your score is {{sessionUser.lastGame.score}} ({{sessionUser.lastGame.percent}}%)</p>\n</div>\n<div>\n  <p *ngIf=\"sessionUser.trivia != 'Nope'\">{{sessionUser.name}} thank you for adding your trivia question to the database</p>\n</div>\n\n\n<div>\n  <button [routerLink]=\"['/letsplay']\">Play!</button>\n  <p>Click the button above to start the trivia game.</p>\n</div>\n\n  Search:<input type=\"text\" name=\"searchtext\" value=\"\" [(ngModel)]=\"searchtext\">\n\n\n<table>\n  <thead>\n    <th>Name</th>\n    <th>Score</th>\n    <th>Percentage</th>\n  </thead>\n  <tr *ngFor=\"let user of users | filter:searchtext\">\n    <td>{{user.name}}</td>\n    <td>{{user.score}}</td>\n    <td>{{user.percent}}%</td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__communicate_service__ = __webpack_require__("../../../../../src/app/communicate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingComponent = (function () {
    function LandingComponent(_httpService, router, _communicateService) {
        var _this = this;
        this._httpService = _httpService;
        this.router = router;
        this._communicateService = _communicateService;
        this.searchtext = "";
        console.log("in the landing constructor");
        this._communicateService.observedUser.subscribe(function (updatedUser) { _this.sessionUser = updatedUser; }, function (err) { }, function () { });
        if (!this.sessionUser) {
            this.sessionUser = {
                name: "",
                lastGame: { score: "Nope", percentage: "Nope" },
                trivia: "Nope"
            };
            this.sessionUser.name = prompt("Hello human enter your name");
            this.updateUser();
        }
        console.log("this is the observable thing " + this.sessionUser);
        this.allUsers();
    }
    LandingComponent.prototype.ngOnInit = function () { };
    LandingComponent.prototype.updateUser = function () {
        this._communicateService.updateUser(this.sessionUser);
    };
    LandingComponent.prototype.endSession = function () {
        this.sessionUser = null;
        this.updateUser();
    };
    LandingComponent.prototype.allUsers = function () {
        var _this = this;
        console.log('inside all users of landing ts');
        this._httpService.allUsers().then(function (result) { _this.users = result; }).catch(function (err) { console.log(err); });
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__communicate_service__["a" /* CommunicateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__communicate_service__["a" /* CommunicateService */]) === "function" && _c || Object])
], LandingComponent);

var _a, _b, _c;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/play/play.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/play/play.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1>Good luck {{sessionUser.name}}</h1>\n<div *ngIf=\"questions[0]\">\n    \n  <form #questionForm = \"ngForm\" (submit)=\"processPlay()\">\n    <p *ngIf=\"questions[0]\"> {{questions[0].content}}</p>\n    <select name = \"question1\" #question1 = \"ngModel\" [(ngModel)]=\"user.question1\" required >\n      <option value=\"correct\">{{questions[0].correct}}</option>\n      <option value=\"wrong\">{{questions[0].wrong1}}</option>\n      <option value=\"wrong\">{{questions[0].wrong2}}</option>\n    </select><span *ngIf=\"question1.errors\">Please answer this question</span>\n    \n    <p *ngIf=\"questions[1]\"> {{questions[1].content}}</p>\n    <select name = \"question2\" #question2 = \"ngModel\" [(ngModel)]=\"user.question2\" required >\n      <option value=\"correct\">{{questions[1].correct}}</option>\n      <option value=\"wrong\">{{questions[1].wrong1}}</option>\n      <option value=\"wrong\">{{questions[1].wrong2}}</option>\n    </select><span *ngIf=\"question2.errors\">Please answer this question</span>\n    \n    <p *ngIf=\"questions[2]\"> {{questions[2].content}}</p>\n    <select name = \"question3\" #question3 = \"ngModel\" [(ngModel)]=\"user.question3\" required >\n      <option value=\"correct\">{{questions[2].correct}}</option>\n      <option value=\"wrong\">{{questions[2].wrong1}}</option>\n      <option value=\"wrong\">{{questions[2].wrong2}}</option>\n    </select><span *ngIf=\"question3.errors\">Please answer this question</span>\n  <br>\n\n    <button [routerLink]=\"['/landing']\">Cancel</button>\n    <input type=\"submit\" [disabled]=\"!questionForm.form.valid\"name=\"\" value=\"submit\">\n  </form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/play/play.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communicate_service__ = __webpack_require__("../../../../../src/app/communicate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlayComponent = (function () {
    function PlayComponent(_httpService, router, _communicateService) {
        var _this = this;
        this._httpService = _httpService;
        this.router = router;
        this._communicateService = _communicateService;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        this._communicateService.observedUser.subscribe(function (updatedUser) { _this.sessionUser = updatedUser; }, function (err) { }, function () { });
        this._httpService.allQuestions().then(function (result) {
            //drop a for loop here to select 3 random questions
            var i = 0;
            while (i < 3) {
                var idx = Math.floor(Math.random() * result.length);
                if (result[idx]) {
                    _this.questions.push(result[idx]);
                    result[idx] = null;
                    i++;
                }
            }
            _this.allQuestions = result;
        }).catch(function (err) { console.log(err); });
        this.sessionUser.lastGame.percentage = "Nope";
        this.sessionUser.trivia = "Nope";
        this.updateUser();
        this.questions = [];
    }
    PlayComponent.prototype.ngOnInit = function () { };
    PlayComponent.prototype.processPlay = function () {
        var score = 0;
        var percent = 0;
        if (this.user.question1 == "correct") {
            score += 1;
        }
        if (this.user.question2 == "correct") {
            score += 1;
        }
        if (this.user.question3 == "correct") {
            score += 1;
        }
        if (score == 1) {
            percent = 33.33;
        }
        if (score == 2) {
            percent = 66.66;
        }
        if (score == 3) {
            percent = 100;
        }
        console.log(this.user);
        this.user.name = this.sessionUser.name;
        console.log("this.user.score = " + score);
        var stringScore = score + "/3";
        this.sessionUser.lastGame = { score: stringScore, percent: percent };
        this.sessionUser.trivia = "Nope";
        this.updateUser();
        console.log("some stuff about session user... " + this.sessionUser.lastGame);
        console.log('this user is' + this.user);
        this._httpService.newUser(this.user);
        this.router.navigate(["/landing"]);
    };
    PlayComponent.prototype.updateUser = function () {
        //{name:"", lastGame:{score:"",percentage:""}}
        this._communicateService.updateUser(this.sessionUser);
        console.log("updating sessionUser = " + this.sessionUser.name + ", " + this.sessionUser.lastGame.score + ", " + this.sessionUser.trivia);
    };
    PlayComponent.prototype.endSession = function () {
    };
    return PlayComponent;
}());
PlayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-play',
        template: __webpack_require__("../../../../../src/app/play/play.component.html"),
        styles: [__webpack_require__("../../../../../src/app/play/play.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__communicate_service__["a" /* CommunicateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__communicate_service__["a" /* CommunicateService */]) === "function" && _c || Object])
], PlayComponent);

var _a, _b, _c;
//# sourceMappingURL=play.component.js.map

/***/ }),

/***/ "../../../../../src/app/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question() {
    }
    return Question;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.name = "";
        this.question1 = "";
        this.question2 = "";
        this.question3 = "";
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map