(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! K:\java script\Online-Test\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false
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

/***/ "FYhM":
/*!**************************************************!*\
  !*** ./src/app/quiz-page/quiz-page.component.ts ***!
  \**************************************************/
/*! exports provided: QuizPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPageComponent", function() { return QuizPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quiz.service */ "flHw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function QuizPageComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizPageComponent_div_4_div_3_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4); const idx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.update_score(_r8.textContent, idx_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const idx_c_r6 = ctx.index;
    const idx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "choice_", idx_r3, "_", idx_c_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", idx_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "radio_", idx_r3 + idx_c_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("for", "radio_", idx_r3 + idx_c_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r5);
} }
function QuizPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, QuizPageComponent_div_4_div_3_Template, 6, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r2 = ctx.$implicit;
    const idx_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", idx_r3 + 1, ".\u00A0", q_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.service.choices[idx_r3]);
} }
function QuizPageComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r1.user_score[ctx_r1.user_score.length - 1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate4"](" Result: ", ctx_r1.user_score[0], " -- ", ctx_r1.user_score[2], "/", ctx_r1.user_score[3], " -- ", ctx_r1.user_score[1], "% ");
} }
class QuizPageComponent {
    constructor(service) {
        this.service = service;
        // Fields ---
        this.data_obj = {};
        this.user_score = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadData();
            this.service.prepData();
        });
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.service.loadQuizDetails().then(data => {
                this.data_obj = data;
                console.log(this.data_obj);
            });
            // this.service.loadQuizDetails().subscribe(data=>{
            //   this.data_obj = data;
            //   console.log(this.data_obj)
            // })
            console.log("--- DONE Loading Data ---");
            console.log(this.data_obj);
            this.service.setData(this.data_obj);
            console.log(this.service.quizData);
            console.log("*****************************");
        });
    }
    update_score(label_content, question_idx) {
        console.log("Testing");
        // We need to set the value
        let choice_letter = label_content.substr(0, 1);
        if (this.service.user_selection.length == 0) {
            this.service.user_selection.push([question_idx, choice_letter]);
        }
        else {
            // check user selections
            for (let i = 0; i < this.service.user_selection.length; i++) {
                if (question_idx == this.service.user_selection[i][0]) {
                    console.log("Found it");
                    // now we need to replace with the new selection
                    this.service.user_selection[i][1] = choice_letter;
                    break;
                }
                else if (i == this.service.user_selection.length - 1 && question_idx != this.service.user_selection[i][0]) {
                    // didn't find it
                    console.log("Didn't find it");
                    this.service.user_selection.push([question_idx, choice_letter]);
                }
            }
        }
        // sort the array by question order -- sort by the first column
        this.service.user_selection = this.service.user_selection.sort(function (a, b) {
            return a[0] - b[0];
        });
        console.log(this.service.user_selection);
    }
    score() {
        //assert(this.service.user_selection.length == this.service.solutions.length);
        this.document_highlightAnswers();
        console.log("******** SCORING ************");
        console.log("Scoring the following selections!" + this.service.user_selection);
        let user_score = 0;
        for (let i = 0; i < this.service.user_selection.length; i++) {
            if (this.service.user_selection[i][1] == this.service.solutions[i]) {
                user_score++;
            }
        }
        user_score /= this.service.user_selection.length;
        if (user_score >= 0.7) {
            console.log("Passed!");
            this.user_score = ["Passed!", user_score * 100, user_score * this.service.user_selection.length, this.service.solutions.length, "green"];
        }
        else if (user_score < 0.7) {
            this.user_score = ["Failed!", user_score * 100, user_score * this.service.user_selection.length, this.service.solutions.length, "red"];
        }
        this.service.test_scored = true;
    }
    document_highlightAnswers() {
        var _a;
        for (let q = 0; q < this.service.questions.length; q++) {
            for (let c = 0; c < this.service.choices[q].length; c++) {
                let el = document.getElementById(`choice_${q}_${c}`);
                let choice = (_a = el === null || el === void 0 ? void 0 : el.textContent) === null || _a === void 0 ? void 0 : _a.substr(0, 1);
                let user_choice = this.service.user_selection[q][1];
                if (choice == user_choice || choice == this.service.solutions[q]) {
                    if (user_choice == this.service.solutions[q] || choice == this.service.solutions[q]) {
                        el.style.border = "5px solid green";
                    }
                    else if (user_choice != this.service.solutions[q]) {
                        el.style.border = "5px solid red";
                    }
                }
            }
        }
    }
}
QuizPageComponent.ɵfac = function QuizPageComponent_Factory(t) { return new (t || QuizPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"])); };
QuizPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QuizPageComponent, selectors: [["app-quiz-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]])], decls: 9, vars: 2, consts: [[1, "container"], [1, "title", 2, "text-align", "center"], [1, "test"], ["class", "question_q", 4, "ngFor", "ngForOf"], [1, "submitBtnLocation"], ["type", "button", "value", "Submit!", 1, "submitBtn", "btn", "btn-primary", 3, "click"], ["id", "result", 4, "ngIf"], [1, "question_q"], ["class", "question_c form-check", 3, "id", 4, "ngFor", "ngForOf"], [1, "question_c", "form-check", 3, "id"], ["type", "radio", 1, "form-check-input", 3, "name", "id", "click"], ["radio_choice", ""], [1, "form-check-label", 3, "for"], ["choice", ""], ["id", "result"]], template: function QuizPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Welcome to test");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, QuizPageComponent_div_4_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuizPageComponent_Template_input_click_6_listener() { return ctx.score(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, QuizPageComponent_div_7_Template, 3, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.service.questions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.service.test_scored == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".title[_ngcontent-%COMP%]{\n    margin: 50px;\n}\n#result[_ngcontent-%COMP%]{\n    text-align: center;\n}\n.submitBtnLocation[_ngcontent-%COMP%]{\n    text-align: center;\n    margin: auto;\n}\n.submitBtn[_ngcontent-%COMP%]{\n    width: 300px;\n    height: 50px;\n    margin: 50px;\n}\n.test[_ngcontent-%COMP%]{\n    border: 5px solid black;\n    border-radius: 30px;\n    padding: 30px;\n}\n.question_q[_ngcontent-%COMP%]{\n    margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXotcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJxdWl6LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgICBtYXJnaW46IDUwcHg7XG59XG4jcmVzdWx0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN1Ym1pdEJ0bkxvY2F0aW9ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uc3VibWl0QnRue1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiA1MHB4O1xufVxuXG4udGVzdHtcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5xdWVzdGlvbl9xe1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"] });


/***/ }),

/***/ "Oh3b":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quiz.service */ "flHw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HomepageComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 22, vars: 0, consts: [[1, "pageTitle"], [1, "topnav"], ["href", "#home", 1, "active"], ["href", "#about"], ["href", "#contact"], [1, "login-container"], ["action", "/action_page.php"], ["type", "text", "placeholder", "Username", "name", "username"], ["type", "text", "placeholder", "Password", "name", "psw"], ["type", "submit"], [1, "homescreenTitle"], ["type", "button", "value", "Start test", "routerLink", "../test", 1, "start", "btn", "btn-secondary"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "online test application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".pageTitle[_ngcontent-%COMP%]{\n    text-align: center;\n}\n\n.homescreenTitle[_ngcontent-%COMP%]{\n    text-align: center;\n}\n\n.start[_ngcontent-%COMP%]{\n    width: 500px;\n    height: 200px;\n    border-radius: 30px;\n    font-size: 50px;\n}\n\n\n\n.topnav[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: #e9e9e9;\n}\n\n\n\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  display: block;\n  color: black;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n}\n\n\n\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n\n\n.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: #2196F3;\n  color: white;\n}\n\n\n\n.topnav[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n  float: right;\n}\n\n\n\n.topnav[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 6px;\n  margin-top: 8px;\n  font-size: 17px;\n  border: none;\n  width: 150px; \n}\n\n\n\n.topnav[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  float: right;\n  padding: 6px;\n  margin-top: 8px;\n  margin-right: 16px;\n  background: #ddd;\n  font-size: 17px;\n  border: none;\n  cursor: pointer;\n}\n\n.topnav[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #ccc;\n}\n\n\n\n@media screen and (max-width: 600px) {\n  .topnav[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .topnav[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .topnav[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    float: none;\n    display: block;\n    text-align: left;\n    width: 100%;\n    margin: 0;\n    padding: 14px;\n  }\n  .topnav[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUdBLHFCQUFxQjs7QUFDckI7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBLCtCQUErQjs7QUFDL0I7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBLHdCQUF3Qjs7QUFDeEI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBLDhCQUE4Qjs7QUFDOUI7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsNENBQTRDOztBQUM1QztFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZLEVBQUUsOERBQThEO0FBQzlFOztBQUVBLGdEQUFnRDs7QUFDaEQ7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSxpR0FBaUc7O0FBQ2pHO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtFQUNmO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VUaXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ob21lc2NyZWVuVGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RhcnR7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBmb250LXNpemU6IDUwcHg7XG59XG5cblxuLyogU3R5bGUgdGhlIG5hdmJhciAqL1xuLnRvcG5hdiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG59XG5cbi8qIE5hdmJhciBsaW5rcyAqL1xuLnRvcG5hdiBhIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLyogTmF2YmFyIGxpbmtzIG9uIG1vdXNlLW92ZXIgKi9cbi50b3BuYXYgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogQWN0aXZlL2N1cnJlbnQgbGluayAqL1xuLnRvcG5hdiBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogU3R5bGUgdGhlIGlucHV0IGNvbnRhaW5lciAqL1xuLnRvcG5hdiAubG9naW4tY29udGFpbmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4vKiBTdHlsZSB0aGUgaW5wdXQgZmllbGQgaW5zaWRlIHRoZSBuYXZiYXIgKi9cbi50b3BuYXYgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIHBhZGRpbmc6IDZweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDE1MHB4OyAvKiBhZGp1c3QgYXMgbmVlZGVkIChhcyBsb25nIGFzIGl0IGRvZXNuJ3QgYnJlYWsgdGhlIHRvcG5hdikgKi9cbn1cblxuLyogU3R5bGUgdGhlIGJ1dHRvbiBpbnNpZGUgdGhlIGlucHV0IGNvbnRhaW5lciAqL1xuLnRvcG5hdiAubG9naW4tY29udGFpbmVyIGJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogNnB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgYmFja2dyb3VuZDogI2RkZDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvcG5hdiAubG9naW4tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG59XG5cbi8qIEFkZCByZXNwb25zaXZlbmVzcyAtIE9uIHNtYWxsIHNjcmVlbnMsIGRpc3BsYXkgdGhlIG5hdmJhciB2ZXJ0aWNhbGx5IGluc3RlYWQgb2YgaG9yaXpvbnRhbGx5ICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudG9wbmF2IC5sb2dpbi1jb250YWluZXIge1xuICAgIGZsb2F0OiBub25lO1xuICB9XG4gIC50b3BuYXYgYSwgLnRvcG5hdiBpbnB1dFt0eXBlPXRleHRdLCAudG9wbmF2IC5sb2dpbi1jb250YWluZXIgYnV0dG9uIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxNHB4O1xuICB9XG4gIC50b3BuYXYgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'Online-Test';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _quiz_page_quiz_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz-page/quiz-page.component */ "FYhM");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _quiz_page_quiz_page_component__WEBPACK_IMPORTED_MODULE_4__["QuizPageComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]] }); })();


/***/ }),

/***/ "flHw":
/*!*********************************!*\
  !*** ./src/app/quiz.service.ts ***!
  \*********************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class QuizService {
    constructor(http) {
        this.http = http;
        this.quizData = {};
        // -- JSON Content Arrays --
        this.questions = [];
        this.choices = [];
        this.solutions = [];
        // -- User Choices --
        this.user_selection = [];
        this.test_scored = false;
    }
    loadQuizDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resp = yield this.http.get("/assets/data.json").toPromise();
            console.log("HERE IS THE RESP");
            console.log(resp);
            console.log("^^^^^^^^^^^^^^^^^");
            return resp;
        });
    }
    setData(data_obj) {
        console.log(data_obj);
        this.quizData = data_obj;
        console.log("done");
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.quizData;
        });
    }
    showData() {
        console.log((this.quizData));
        this.prepData();
        console.log(this.choices);
    }
    prepData() {
        let data = JSON.stringify(this.quizData);
        let json_data = JSON.parse(data);
        let num_questions = json_data["questions"].length;
        for (let idx = 0; idx < num_questions; idx++) {
            let question_details = json_data["questions"][idx];
            this.questions.push(question_details["question"]);
            this.choices.push(question_details["choices"]);
            this.solutions.push(question_details['solution']);
        }
    }
}
QuizService.ɵfac = function QuizService_Factory(t) { return new (t || QuizService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
QuizService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: QuizService, factory: QuizService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _quiz_page_quiz_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz-page/quiz-page.component */ "FYhM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: "home", component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"] },
    { path: "test", component: _quiz_page_quiz_page_component__WEBPACK_IMPORTED_MODULE_2__["QuizPageComponent"] },
    { path: "", redirectTo: "home", pathMatch: "full" }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map