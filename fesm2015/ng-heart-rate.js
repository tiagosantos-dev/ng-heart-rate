import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵnamespaceSVG, ɵɵelement, ɵɵelementEnd, ɵɵnamespaceHTML, Component, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class NgHeartRateService {
    constructor() { }
}
NgHeartRateService.ɵfac = function NgHeartRateService_Factory(t) { return new (t || NgHeartRateService)(); };
NgHeartRateService.ɵprov = ɵɵdefineInjectable({ token: NgHeartRateService, factory: NgHeartRateService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NgHeartRateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class NgHeartRateComponent {
    constructor() {
        this.brightColor = 'green';
        this.deadColor = 'red';
        this.width = '150px';
        this.height = '73px';
        this.time = '1000';
        this.animationDuration = '4.5s';
    }
    ngOnInit() {
        let polylineElement = document.getElementById('polylineElement');
        if (polylineElement) {
            polylineElement.style.stroke = this.brightColor.toString();
        }
        let svgAnimation = document.getElementById('svgAnimation');
        if (svgAnimation) {
            svgAnimation.style.width = this.width.toString();
            svgAnimation.style.height = this.height.toString();
        }
        let heartrate = document.getElementById('heart-rate');
        if (heartrate) {
            heartrate.style.width = this.width.toString();
            heartrate.style.height = this.height.toString();
        }
        let fadeOut = document.getElementById('fade-out');
        let fadeIn = document.getElementById('fade-in');
        if (fadeOut && fadeIn) {
            fadeOut.style.animationDuration = this.animationDuration.toString();
            fadeIn.style.animationDuration = this.animationDuration.toString();
        }
        this.waitSecond();
    }
    waitSecond() {
        try {
            if (this.deadColor) {
                let time = Number(this.time);
                setTimeout(() => {
                    let polylineElement = document.getElementById('polylineElement');
                    if (polylineElement) {
                        polylineElement.style.stroke = this.deadColor.toString();
                    }
                }, time);
            }
        }
        catch (e) {
            console.error(e);
        }
    }
}
NgHeartRateComponent.ɵfac = function NgHeartRateComponent_Factory(t) { return new (t || NgHeartRateComponent)(); };
NgHeartRateComponent.ɵcmp = ɵɵdefineComponent({ type: NgHeartRateComponent, selectors: [["heart-rate"]], inputs: { brightColor: "brightColor", deadColor: "deadColor", width: "width", height: "height", time: "time", animationDuration: "animationDuration" }, decls: 5, vars: 0, consts: [["id", "heart-rate", 1, "heart-rate"], ["id", "svgAnimation", "version", "1.0", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 150 73", "enable-background", "new 0 0 150 73", 0, "xml", "space", "preserve"], ["id", "polylineElement", "fill", "none", "stroke-width", "3", "stroke-miterlimit", "10", "points", "0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"], ["id", "fade-in", 1, "fade-in"], ["id", "fade-out", 1, "fade-out"]], template: function NgHeartRateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵnamespaceSVG();
        ɵɵelementStart(1, "svg", 1);
        ɵɵelement(2, "polyline", 2);
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelement(3, "div", 3);
        ɵɵelement(4, "div", 4);
        ɵɵelementEnd();
    } }, styles: [".heart-rate[_ngcontent-%COMP%] {\n    \n    height: 143px;\n    position: relative;\n    margin:0px auto;\n    top:160px;\n    overflow:hidden;\n        \n    }\n\n    #polylineElement[_ngcontent-%COMP%]{\n      transition: all 1s linear;\n    }\n\n   \n    .fade-in[_ngcontent-%COMP%] {\n      position: absolute;\n      width: 100%;\n      height:100%;\n      background-color: white;\n      top: 0;\n      right: 0;\n\n      animation-name:heartRateIn;\n      \n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n\n      \n\n    \n\n    }\n\n    .fade-out[_ngcontent-%COMP%] {\n      position: absolute;\n      width: 120%;\n      height: 100%;\n      top: 0;\n      left: -120%;\n\n      animation-name:heartRateOut;\n      \n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n\n      \n      background: rgba(255, 255, 255, 1);\n      background: -moz-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);\n      background: -webkit-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);\n      background: -o-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);\n      background: -ms-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);\n      background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 0) 100%);\n    }\n\n    @keyframes heartRateIn {\n      0% {\n        width: 100%;\n      }\n      50% {\n        width: 0%;\n      }\n      100% {\n        width: 0;\n      }\n    }\n\n    @keyframes heartRateOut {\n      0% {\n        left: -120%;\n      }\n      30% {\n        left: -120%;\n      }\n      100% {\n        left: 0;\n      }\n    }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NgHeartRateComponent, [{
        type: Component,
        args: [{
                selector: 'heart-rate',
                template: `
   <div class="heart-rate" id="heart-rate">
    <svg id="svgAnimation" version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 150 73" enable-background="new 0 0 150 73" xml:space="preserve">
      <polyline   id="polylineElement"  fill="none"  stroke-width="3" stroke-miterlimit="10" points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"
      />
    </svg>
  <div class="fade-in" id="fade-in"></div>
  <div class="fade-out" id="fade-out" ></div>
  </div>
  `,
                styles: [`
      .heart-rate {
    /* max-width: 180px; */
    height: 143px;
    position: relative;
    margin:0px auto;
    top:160px;
    overflow:hidden;
        
    }

    #polylineElement{
      transition: all 1s linear;
    }

   
    .fade-in {
      position: absolute;
      width: 100%;
      height:100%;
      background-color: white;
      top: 0;
      right: 0;

      animation-name:heartRateIn;
      /* animation-duration: 4.5s; */
      animation-iteration-count: infinite;
      animation-timing-function: linear;

      /* animation: heartRateIn 4.5s linear infinite; */

    /* Gia na katalavw ti ginetai des auto
        border:1px solid red;
        */

    }

    .fade-out {
      position: absolute;
      width: 120%;
      height: 100%;
      top: 0;
      left: -120%;

      animation-name:heartRateOut;
      /* animation-duration: 4.5s; */
      animation-iteration-count: infinite;
      animation-timing-function: linear;

      /* animation: heartRateOut 4.5s linear infinite; */
      background: rgba(255, 255, 255, 1);
      background: -moz-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
      background: -webkit-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
      background: -o-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
      background: -ms-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);
      background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 0) 100%);
    }

    @keyframes heartRateIn {
      0% {
        width: 100%;
      }
      50% {
        width: 0%;
      }
      100% {
        width: 0;
      }
    }

    @keyframes heartRateOut {
      0% {
        left: -120%;
      }
      30% {
        left: -120%;
      }
      100% {
        left: 0;
      }
    }
  
  `]
            }]
    }], function () { return []; }, { brightColor: [{
            type: Input
        }], deadColor: [{
            type: Input
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], time: [{
            type: Input
        }], animationDuration: [{
            type: Input
        }] }); })();

class NgHeartRateModule {
}
NgHeartRateModule.ɵfac = function NgHeartRateModule_Factory(t) { return new (t || NgHeartRateModule)(); };
NgHeartRateModule.ɵmod = ɵɵdefineNgModule({ type: NgHeartRateModule });
NgHeartRateModule.ɵinj = ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgHeartRateModule, { declarations: [NgHeartRateComponent], exports: [NgHeartRateComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NgHeartRateModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NgHeartRateComponent
                ],
                imports: [],
                exports: [
                    NgHeartRateComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ng-heart-rate
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgHeartRateComponent, NgHeartRateModule, NgHeartRateService };
//# sourceMappingURL=ng-heart-rate.js.map
