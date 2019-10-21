(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<app-enemy-list></app-enemy-list><app-loader></app-loader>',
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _enemy_list_enemy_list_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./enemy-list/enemy-list.module */ "./src/app/enemy-list/enemy-list.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _enemy_list_enemy_list_module__WEBPACK_IMPORTED_MODULE_8__["EnemyListModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/enemy-list/enemy-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/enemy-list/enemy-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"filters\">\n    <mat-checkbox [(ngModel)]=\"onlineOnly\" (change)=\"toggleOnlineOnly($event.checked)\">Online only</mat-checkbox>\n</div>\n\n<table mat-table [dataSource]=\"enemies\">\n\n    <ng-container matColumnDef=\"name\">\n        <th class=\"name\" mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let enemy\"> {{enemy.attributes.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"level\">\n        <th class=\"level\" mat-header-cell *matHeaderCellDef> Level </th>\n        <td mat-cell *matCellDef=\"let enemy\"> {{enemy.attributes.level}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"vocation\">\n        <th class=\"vocation\" mat-header-cell *matHeaderCellDef> Vocation </th>\n        <td mat-cell *matCellDef=\"let enemy\"> {{enemy.attributes.vocation}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"reason\">\n        <th class=\"reason\" mat-header-cell *matHeaderCellDef> Reason </th>\n        <td mat-cell *matCellDef=\"let enemy\"> {{enemy.attributes.reason}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"payment\">\n        <th class=\"payment\" mat-header-cell *matHeaderCellDef> Payment </th>\n        <td mat-cell *matCellDef=\"let enemy\"> {{enemy.attributes.payment}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"created_at\">\n        <th class=\"created\" mat-header-cell *matHeaderCellDef> Hunted since </th>\n        <td mat-cell *matCellDef=\"let enemy\"> {{enemy.attributes.created_at | date}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>"

/***/ }),

/***/ "./src/app/enemy-list/enemy-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/enemy-list/enemy-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host table {\n  width: 100%; }\n  :host table th.name {\n    width: 15%; }\n  :host table th.level {\n    width: 5%; }\n  :host table th.vocation {\n    width: 5%; }\n  :host table th.reason {\n    width: 50%; }\n  :host table th.payment {\n    width: 15%; }\n  :host table th.created {\n    width: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXRyeWsuZnVocm1hbi9Eb2N1bWVudHMvV29ya3NwYWNlL3RpYmlhLWVuZW15bGlzdC9zcmMvYXBwL2VuZW15LWxpc3QvZW5lbXktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFlBQVcsRUEyQmQ7RUE3Qkw7SUFNZ0IsV0FBVSxFQUNiO0VBUGI7SUFVZ0IsVUFBUyxFQUNaO0VBWGI7SUFjZ0IsVUFDSixFQUFDO0VBZmI7SUFrQmdCLFdBQVUsRUFDYjtFQW5CYjtJQXNCZ0IsV0FBVSxFQUNiO0VBdkJiO0lBMEJnQixXQUFVLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9lbmVteS1saXN0L2VuZW15LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgdGFibGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICB0aCB7XG4gICAgICAgICAgICAmLm5hbWUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYubGV2ZWwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1JTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi52b2NhdGlvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYucmVhc29uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnBheW1lbnQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuY3JlYXRlZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/enemy-list/enemy-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/enemy-list/enemy-list.component.ts ***!
  \****************************************************/
/*! exports provided: EnemyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyListComponent", function() { return EnemyListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_enemy_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/enemy-list.service */ "./src/app/enemy-list/services/enemy-list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnemyListComponent = /** @class */ (function () {
    function EnemyListComponent(enemyListService) {
        this.enemyListService = enemyListService;
        this.onlineOnly = false;
        this.enemies = [];
        this.displayedColumns = ['name', 'level', 'vocation', 'reason', 'payment', 'created_at'];
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    EnemyListComponent.prototype.ngOnInit = function () {
        this.getEnemies(false);
    };
    EnemyListComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next();
    };
    EnemyListComponent.prototype.toggleOnlineOnly = function (checked) {
        this.getEnemies(checked);
    };
    EnemyListComponent.prototype.getEnemies = function (online) {
        var _this = this;
        this.enemyListService
            .getHuntedPlayers(online)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe(function (enemies) { return _this.enemies = enemies; });
    };
    EnemyListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enemy-list',
            template: __webpack_require__(/*! ./enemy-list.component.html */ "./src/app/enemy-list/enemy-list.component.html"),
            styles: [__webpack_require__(/*! ./enemy-list.component.scss */ "./src/app/enemy-list/enemy-list.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_enemy_list_service__WEBPACK_IMPORTED_MODULE_3__["EnemyListService"]])
    ], EnemyListComponent);
    return EnemyListComponent;
}());



/***/ }),

/***/ "./src/app/enemy-list/enemy-list.module.ts":
/*!*************************************************!*\
  !*** ./src/app/enemy-list/enemy-list.module.ts ***!
  \*************************************************/
/*! exports provided: EnemyListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyListModule", function() { return EnemyListModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _enemy_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enemy-list.component */ "./src/app/enemy-list/enemy-list.component.ts");
/* harmony import */ var _services_enemy_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/enemy-list.service */ "./src/app/enemy-list/services/enemy-list.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/loader.service */ "./src/app/enemy-list/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EnemyListModule = /** @class */ (function () {
    function EnemyListModule() {
    }
    EnemyListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            declarations: [
                _enemy_list_component__WEBPACK_IMPORTED_MODULE_4__["EnemyListComponent"],
            ],
            exports: [
                _enemy_list_component__WEBPACK_IMPORTED_MODULE_4__["EnemyListComponent"],
            ],
            providers: [
                _services_enemy_list_service__WEBPACK_IMPORTED_MODULE_5__["EnemyListService"],
                _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            ],
        })
    ], EnemyListModule);
    return EnemyListModule;
}());



/***/ }),

/***/ "./src/app/enemy-list/models/attributes.ts":
/*!*************************************************!*\
  !*** ./src/app/enemy-list/models/attributes.ts ***!
  \*************************************************/
/*! exports provided: Attributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attributes", function() { return Attributes; });
var Attributes = /** @class */ (function () {
    function Attributes() {
    }
    Attributes.createInstance = function (input) {
        var self = new Attributes();
        for (var prop in input) {
            self[prop] = input[prop];
        }
        return self;
    };
    return Attributes;
}());



/***/ }),

/***/ "./src/app/enemy-list/models/enemy.ts":
/*!********************************************!*\
  !*** ./src/app/enemy-list/models/enemy.ts ***!
  \********************************************/
/*! exports provided: Enemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enemy", function() { return Enemy; });
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/app/enemy-list/models/attributes.ts");

var Enemy = /** @class */ (function () {
    function Enemy(id, type, attributes) {
        this.id = id;
        this.type = type;
        this.attributes = _attributes__WEBPACK_IMPORTED_MODULE_0__["Attributes"].createInstance(attributes);
    }
    return Enemy;
}());



/***/ }),

/***/ "./src/app/enemy-list/services/enemy-list.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/enemy-list/services/enemy-list.service.ts ***!
  \***********************************************************/
/*! exports provided: EnemyListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyListService", function() { return EnemyListService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_enemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/enemy */ "./src/app/enemy-list/models/enemy.ts");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader.service */ "./src/app/enemy-list/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EnemyListService = /** @class */ (function () {
    function EnemyListService(httpClient, loaderService) {
        this.httpClient = httpClient;
        this.loaderService = loaderService;
    }
    EnemyListService.prototype.getHuntedPlayers = function (onlineOnly) {
        var _this = this;
        if (onlineOnly === void 0) { onlineOnly = false; }
        var url = onlineOnly ? src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/enemies?online=" + onlineOnly : src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/enemies";
        this.loaderService.show$.next(true);
        return this.httpClient
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data.data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (json) { return json.map(function (data) { return new _models_enemy__WEBPACK_IMPORTED_MODULE_4__["Enemy"](data.id, data.type, data.attributes); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.loaderService.show$.next(false); }));
    };
    EnemyListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], EnemyListService);
    return EnemyListService;
}());



/***/ }),

/***/ "./src/app/enemy-list/services/loader.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/enemy-list/services/loader.service.ts ***!
  \*******************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.show$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
    }
    LoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isShown$ | async\" class=\"container\">\n    <mat-spinner></mat-spinner>\n</div>"

/***/ }),

/***/ "./src/app/loader/loader.component.scss":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXRyeWsuZnVocm1hbi9Eb2N1bWVudHMvV29ya3NwYWNlL3RpYmlhLWVuZW15bGlzdC9zcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCxVQUFTO0VBQ1QsU0FBUTtFQUNSLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLHdCQUF1QixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enemy_list_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../enemy-list/services/loader.service */ "./src/app/enemy-list/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.isShown$ = this.loaderService.show$;
    }
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/loader/loader.component.scss")],
        }),
        __metadata("design:paramtypes", [_enemy_list_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiBaseUrl: 'https://huntedlist-api.herokuapp.com/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/patryk.fuhrman/Documents/Workspace/tibia-enemylist/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map