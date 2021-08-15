(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-heart-rate', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ng-heart-rate'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var NgHeartRateService = /** @class */ (function () {
        function NgHeartRateService() {
        }
        return NgHeartRateService;
    }());
    NgHeartRateService.ɵfac = function NgHeartRateService_Factory(t) { return new (t || NgHeartRateService)(); };
    NgHeartRateService.ɵprov = i0.ɵɵdefineInjectable({ token: NgHeartRateService, factory: NgHeartRateService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgHeartRateService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var NgHeartRateComponent = /** @class */ (function () {
        function NgHeartRateComponent() {
            this.brightColor = 'green';
            this.deadColor = 'red';
            this.width = '150px';
            this.height = '73px';
            this.time = '1000';
            this.animationDuration = '4.5s';
        }
        NgHeartRateComponent.prototype.ngOnInit = function () {
            var polylineElement = document.getElementById('polylineElement');
            if (polylineElement) {
                polylineElement.style.stroke = this.brightColor.toString();
            }
            var svgAnimation = document.getElementById('svgAnimation');
            if (svgAnimation) {
                svgAnimation.style.width = this.width.toString();
                svgAnimation.style.height = this.height.toString();
            }
            var heartrate = document.getElementById('heart-rate');
            if (heartrate) {
                heartrate.style.width = this.width.toString();
                heartrate.style.height = this.height.toString();
            }
            var fadeOut = document.getElementById('fade-out');
            var fadeIn = document.getElementById('fade-in');
            if (fadeOut && fadeIn) {
                fadeOut.style.animationDuration = this.animationDuration.toString();
                fadeIn.style.animationDuration = this.animationDuration.toString();
            }
            this.waitSecond();
        };
        NgHeartRateComponent.prototype.waitSecond = function () {
            var _this = this;
            try {
                if (this.deadColor) {
                    var time = Number(this.time);
                    setTimeout(function () {
                        var polylineElement = document.getElementById('polylineElement');
                        if (polylineElement) {
                            polylineElement.style.stroke = _this.deadColor.toString();
                        }
                    }, time);
                }
            }
            catch (e) {
                console.error(e);
            }
        };
        return NgHeartRateComponent;
    }());
    NgHeartRateComponent.ɵfac = function NgHeartRateComponent_Factory(t) { return new (t || NgHeartRateComponent)(); };
    NgHeartRateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgHeartRateComponent, selectors: [["heart-rate"]], inputs: { brightColor: "brightColor", deadColor: "deadColor", width: "width", height: "height", time: "time", animationDuration: "animationDuration" }, decls: 5, vars: 0, consts: [["id", "heart-rate", 1, "heart-rate"], ["id", "svgAnimation", "version", "1.0", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 150 73", "enable-background", "new 0 0 150 73", 0, "xml", "space", "preserve"], ["id", "polylineElement", "fill", "none", "stroke-width", "3", "stroke-miterlimit", "10", "points", "0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"], ["id", "fade-in", 1, "fade-in"], ["id", "fade-out", 1, "fade-out"]], template: function NgHeartRateComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(1, "svg", 1);
                i0.ɵɵelement(2, "polyline", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵnamespaceHTML();
                i0.ɵɵelement(3, "div", 3);
                i0.ɵɵelement(4, "div", 4);
                i0.ɵɵelementEnd();
            }
        }, styles: [".heart-rate[_ngcontent-%COMP%] {\n    \n    height: 143px;\n    position: relative;\n    margin:0px auto;\n    top:160px;\n    overflow:hidden;\n        \n    }\n\n    #polylineElement[_ngcontent-%COMP%]{\n      transition: all 1s linear;\n    }\n\n   \n    .fade-in[_ngcontent-%COMP%] {\n      position: absolute;\n      width: 100%;\n      height:100%;\n      background-color: white;\n      top: 0;\n      right: 0;\n\n      animation-name:heartRateIn;\n      \n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n\n      \n\n    \n\n    }\n\n    .fade-out[_ngcontent-%COMP%] {\n      position: absolute;\n      width: 120%;\n      height: 100%;\n      top: 0;\n      left: -120%;\n\n      animation-name:heartRateOut;\n      \n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n\n      \n      background: rgba(255, 255, 255, 1);\n      background: -moz-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);\n      background: -webkit-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);\n      background: -o-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);\n      background: -ms-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);\n      background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 0) 100%);\n    }\n\n    @keyframes heartRateIn {\n      0% {\n        width: 100%;\n      }\n      50% {\n        width: 0%;\n      }\n      100% {\n        width: 0;\n      }\n    }\n\n    @keyframes heartRateOut {\n      0% {\n        left: -120%;\n      }\n      30% {\n        left: -120%;\n      }\n      100% {\n        left: 0;\n      }\n    }"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgHeartRateComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'heart-rate',
                        template: "\n   <div class=\"heart-rate\" id=\"heart-rate\">\n    <svg id=\"svgAnimation\" version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"  viewBox=\"0 0 150 73\" enable-background=\"new 0 0 150 73\" xml:space=\"preserve\">\n      <polyline   id=\"polylineElement\"  fill=\"none\"  stroke-width=\"3\" stroke-miterlimit=\"10\" points=\"0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486\"\n      />\n    </svg>\n  <div class=\"fade-in\" id=\"fade-in\"></div>\n  <div class=\"fade-out\" id=\"fade-out\" ></div>\n  </div>\n  ",
                        styles: ["\n      .heart-rate {\n    /* max-width: 180px; */\n    height: 143px;\n    position: relative;\n    margin:0px auto;\n    top:160px;\n    overflow:hidden;\n        \n    }\n\n    #polylineElement{\n      transition: all 1s linear;\n    }\n\n   \n    .fade-in {\n      position: absolute;\n      width: 100%;\n      height:100%;\n      background-color: white;\n      top: 0;\n      right: 0;\n\n      animation-name:heartRateIn;\n      /* animation-duration: 4.5s; */\n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n\n      /* animation: heartRateIn 4.5s linear infinite; */\n\n    /* Gia na katalavw ti ginetai des auto\n        border:1px solid red;\n        */\n\n    }\n\n    .fade-out {\n      position: absolute;\n      width: 120%;\n      height: 100%;\n      top: 0;\n      left: -120%;\n\n      animation-name:heartRateOut;\n      /* animation-duration: 4.5s; */\n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n\n      /* animation: heartRateOut 4.5s linear infinite; */\n      background: rgba(255, 255, 255, 1);\n      background: -moz-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);\n      background: -webkit-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);\n      background: -o-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);\n      background: -ms-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);\n      background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 0) 100%);\n    }\n\n    @keyframes heartRateIn {\n      0% {\n        width: 100%;\n      }\n      50% {\n        width: 0%;\n      }\n      100% {\n        width: 0;\n      }\n    }\n\n    @keyframes heartRateOut {\n      0% {\n        left: -120%;\n      }\n      30% {\n        left: -120%;\n      }\n      100% {\n        left: 0;\n      }\n    }\n  \n  "]
                    }]
            }], function () { return []; }, { brightColor: [{
                    type: i0.Input
                }], deadColor: [{
                    type: i0.Input
                }], width: [{
                    type: i0.Input
                }], height: [{
                    type: i0.Input
                }], time: [{
                    type: i0.Input
                }], animationDuration: [{
                    type: i0.Input
                }] });
    })();

    var NgHeartRateModule = /** @class */ (function () {
        function NgHeartRateModule() {
        }
        return NgHeartRateModule;
    }());
    NgHeartRateModule.ɵfac = function NgHeartRateModule_Factory(t) { return new (t || NgHeartRateModule)(); };
    NgHeartRateModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgHeartRateModule });
    NgHeartRateModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgHeartRateModule, { declarations: [NgHeartRateComponent], exports: [NgHeartRateComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgHeartRateModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            NgHeartRateComponent
                        ],
                        imports: [],
                        exports: [
                            NgHeartRateComponent
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of ng-heart-rate
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgHeartRateComponent = NgHeartRateComponent;
    exports.NgHeartRateModule = NgHeartRateModule;
    exports.NgHeartRateService = NgHeartRateService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-heart-rate.umd.js.map
