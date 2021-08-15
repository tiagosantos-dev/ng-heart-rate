import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NgHeartRateComponent {
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
NgHeartRateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgHeartRateComponent, selectors: [["heart-rate"]], inputs: { brightColor: "brightColor", deadColor: "deadColor", width: "width", height: "height", time: "time", animationDuration: "animationDuration" }, decls: 5, vars: 0, consts: [["id", "heart-rate", 1, "heart-rate"], ["id", "svgAnimation", "version", "1.0", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 150 73", "enable-background", "new 0 0 150 73", 0, "xml", "space", "preserve"], ["id", "polylineElement", "fill", "none", "stroke-width", "3", "stroke-miterlimit", "10", "points", "0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"], ["id", "fade-in", 1, "fade-in"], ["id", "fade-out", 1, "fade-out"]], template: function NgHeartRateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelement(2, "polyline", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelement(3, "div", 3);
        i0.ɵɵelement(4, "div", 4);
        i0.ɵɵelementEnd();
    } }, styles: [".heart-rate[_ngcontent-%COMP%] {\n    \n    height: 143px;\n    position: relative;\n    margin:0px auto;\n    top:160px;\n    overflow:hidden;\n        \n    }\n\n    #polylineElement[_ngcontent-%COMP%]{\n      transition: all 1s linear;\n    }\n\n   \n    .fade-in[_ngcontent-%COMP%] {\n      position: absolute;\n      width: 100%;\n      height:100%;\n      background-color: white;\n      top: 0;\n      right: 0;\n\n      animation-name:heartRateIn;\n      \n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n\n      \n\n    \n\n    }\n\n    .fade-out[_ngcontent-%COMP%] {\n      position: absolute;\n      width: 120%;\n      height: 100%;\n      top: 0;\n      left: -120%;\n\n      animation-name:heartRateOut;\n      \n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n\n      \n      background: rgba(255, 255, 255, 1);\n      background: -moz-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);\n      background: -webkit-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);\n      background: -o-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);\n      background: -ms-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%);\n      background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 0) 100%);\n    }\n\n    @keyframes heartRateIn {\n      0% {\n        width: 100%;\n      }\n      50% {\n        width: 0%;\n      }\n      100% {\n        width: 0;\n      }\n    }\n\n    @keyframes heartRateOut {\n      0% {\n        left: -120%;\n      }\n      30% {\n        left: -120%;\n      }\n      100% {\n        left: 0;\n      }\n    }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgHeartRateComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctaGVhcnQtcmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1oZWFydC1yYXRlL3NyYy9saWIvbmctaGVhcnQtcmF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXlCLE1BQU0sZUFBZSxDQUFDOztBQWtHaEYsTUFBTSxPQUFPLG9CQUFvQjtJQVMvQjtRQVBTLGdCQUFXLEdBQVcsT0FBTyxDQUFDO1FBQzlCLGNBQVMsR0FBVyxLQUFLLENBQUM7UUFDMUIsVUFBSyxHQUFXLE9BQU8sQ0FBQztRQUN4QixXQUFNLEdBQVcsTUFBTSxDQUFDO1FBQ3hCLFNBQUksR0FBVyxNQUFNLENBQUM7UUFDdEIsc0JBQWlCLEdBQVcsTUFBTSxDQUFDO0lBRTVCLENBQUM7SUFFakIsUUFBUTtRQUNOLElBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUVoRSxJQUFHLGVBQWUsRUFBQztZQUNqQixlQUFlLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzVEO1FBRUQsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUUxRCxJQUFHLFlBQVksRUFBQztZQUNkLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakQsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNwRDtRQUdELElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUE7UUFFckQsSUFBRyxTQUFTLEVBQUM7WUFDWCxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzlDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakQ7UUFFRCxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFaEQsSUFBRyxPQUFPLElBQUksTUFBTSxFQUFDO1lBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BFLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3BFO1FBRUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFJRCxVQUFVO1FBQ1IsSUFBRztZQUNELElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBQztnQkFDaEIsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFFNUIsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDZCxJQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUE7b0JBQ2hFLElBQUcsZUFBZSxFQUFDO3dCQUNqQixlQUFlLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUMxRDtnQkFFSCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDVjtTQUVGO1FBQUEsT0FBTSxDQUFDLEVBQUM7WUFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ2pCO0lBRUgsQ0FBQzs7d0ZBaEVVLG9CQUFvQjt5REFBcEIsb0JBQW9CO1FBN0Y5Qiw4QkFBd0M7UUFDdkMsbUJBQWlOO1FBQWpOLDhCQUFpTjtRQUMvTSw4QkFDRTtRQUNKLGlCQUFNO1FBQ1Isb0JBQWtDO1FBQWxDLHlCQUF3QztRQUN4Qyx5QkFBMkM7UUFDM0MsaUJBQU07O3VGQXNGSyxvQkFBb0I7Y0FoR2hDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTVDtnQkFDRCxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtGUixDQUFDO2FBQ0g7c0NBR1UsV0FBVztrQkFBbkIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWFydC1yYXRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgIDxkaXYgY2xhc3M9XCJoZWFydC1yYXRlXCIgaWQ9XCJoZWFydC1yYXRlXCI+XG4gICAgPHN2ZyBpZD1cInN2Z0FuaW1hdGlvblwiIHZlcnNpb249XCIxLjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiAgdmlld0JveD1cIjAgMCAxNTAgNzNcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgMTUwIDczXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgIDxwb2x5bGluZSAgIGlkPVwicG9seWxpbmVFbGVtZW50XCIgIGZpbGw9XCJub25lXCIgIHN0cm9rZS13aWR0aD1cIjNcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgcG9pbnRzPVwiMCw0NS40ODYgMzguNTE0LDQ1LjQ4NiA0NC41OTUsMzMuMzI0IDUwLjY3Niw0NS40ODYgNTcuNzcxLDQ1LjQ4NiA2Mi44MzgsNTUuNjIyIDcxLjk1OSw5IDgwLjA2Nyw2My43MjkgODQuMTIyLDQ1LjQ4NiA5Ny4yOTcsNDUuNDg2IDEwMy4zNzksNDAuNDE5IDExMC40NzMsNDUuNDg2IDE1MCw0NS40ODZcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgPGRpdiBjbGFzcz1cImZhZGUtaW5cIiBpZD1cImZhZGUtaW5cIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZhZGUtb3V0XCIgaWQ9XCJmYWRlLW91dFwiID48L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICAgIC5oZWFydC1yYXRlIHtcbiAgICAvKiBtYXgtd2lkdGg6IDE4MHB4OyAqL1xuICAgIGhlaWdodDogMTQzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjowcHggYXV0bztcbiAgICB0b3A6MTYwcHg7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAjcG9seWxpbmVFbGVtZW50e1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDFzIGxpbmVhcjtcbiAgICB9XG5cbiAgIFxuICAgIC5mYWRlLWluIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuXG4gICAgICBhbmltYXRpb24tbmFtZTpoZWFydFJhdGVJbjtcbiAgICAgIC8qIGFuaW1hdGlvbi1kdXJhdGlvbjogNC41czsgKi9cbiAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuXG4gICAgICAvKiBhbmltYXRpb246IGhlYXJ0UmF0ZUluIDQuNXMgbGluZWFyIGluZmluaXRlOyAqL1xuXG4gICAgLyogR2lhIG5hIGthdGFsYXZ3IHRpIGdpbmV0YWkgZGVzIGF1dG9cbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCByZWQ7XG4gICAgICAgICovXG5cbiAgICB9XG5cbiAgICAuZmFkZS1vdXQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEyMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAtMTIwJTtcblxuICAgICAgYW5pbWF0aW9uLW5hbWU6aGVhcnRSYXRlT3V0O1xuICAgICAgLyogYW5pbWF0aW9uLWR1cmF0aW9uOiA0LjVzOyAqL1xuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG5cbiAgICAgIC8qIGFuaW1hdGlvbjogaGVhcnRSYXRlT3V0IDQuNXMgbGluZWFyIGluZmluaXRlOyAqL1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gICAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDgwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGhlYXJ0UmF0ZUluIHtcbiAgICAgIDAlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICA1MCUge1xuICAgICAgICB3aWR0aDogMCU7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBoZWFydFJhdGVPdXQge1xuICAgICAgMCUge1xuICAgICAgICBsZWZ0OiAtMTIwJTtcbiAgICAgIH1cbiAgICAgIDMwJSB7XG4gICAgICAgIGxlZnQ6IC0xMjAlO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICBcbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgTmdIZWFydFJhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGJyaWdodENvbG9yOiBzdHJpbmcgPSAnZ3JlZW4nO1xuICBASW5wdXQoKSBkZWFkQ29sb3I6IHN0cmluZyA9ICdyZWQnO1xuICBASW5wdXQoKSB3aWR0aDogc3RyaW5nID0gJzE1MHB4JztcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmcgPSAnNzNweCc7XG4gIEBJbnB1dCgpIHRpbWU6IHN0cmluZyA9ICcxMDAwJztcbiAgQElucHV0KCkgYW5pbWF0aW9uRHVyYXRpb246IHN0cmluZyA9ICc0LjVzJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuIFxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgcG9seWxpbmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvbHlsaW5lRWxlbWVudCcpXG5cbiAgICBpZihwb2x5bGluZUVsZW1lbnQpe1xuICAgICAgcG9seWxpbmVFbGVtZW50LnN0eWxlLnN0cm9rZSA9IHRoaXMuYnJpZ2h0Q29sb3IudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHN2Z0FuaW1hdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdmdBbmltYXRpb24nKVxuXG4gICAgaWYoc3ZnQW5pbWF0aW9uKXtcbiAgICAgIHN2Z0FuaW1hdGlvbi5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGgudG9TdHJpbmcoKTtcbiAgICAgIHN2Z0FuaW1hdGlvbi5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodC50b1N0cmluZygpO1xuICAgIH1cblxuXG4gICAgbGV0IGhlYXJ0cmF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFydC1yYXRlJylcblxuICAgIGlmKGhlYXJ0cmF0ZSl7XG4gICAgICBoZWFydHJhdGUuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoLnRvU3RyaW5nKCk7XG4gICAgICBoZWFydHJhdGUuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBsZXQgZmFkZU91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWRlLW91dCcpO1xuICAgIGxldCBmYWRlSW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFkZS1pbicpO1xuXG4gICAgaWYoZmFkZU91dCAmJiBmYWRlSW4pe1xuICAgICAgZmFkZU91dC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IHRoaXMuYW5pbWF0aW9uRHVyYXRpb24udG9TdHJpbmcoKTtcbiAgICAgIGZhZGVJbi5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IHRoaXMuYW5pbWF0aW9uRHVyYXRpb24udG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICB0aGlzLndhaXRTZWNvbmQoKTtcbiAgfVxuXG5cblxuICB3YWl0U2Vjb25kKCl7IFxuICAgIHRyeXtcbiAgICAgIGlmKHRoaXMuZGVhZENvbG9yKXtcbiAgICAgICAgbGV0IHRpbWUgPSBOdW1iZXIodGhpcy50aW1lKVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxldCBwb2x5bGluZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9seWxpbmVFbGVtZW50JylcbiAgICAgICAgICBpZihwb2x5bGluZUVsZW1lbnQpe1xuICAgICAgICAgICAgcG9seWxpbmVFbGVtZW50LnN0eWxlLnN0cm9rZSA9IHRoaXMuZGVhZENvbG9yLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICB9LCB0aW1lKTtcbiAgICAgIH1cbiAgIFxuICAgIH1jYXRjaChlKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICB9XG5cbiAgfVxuXG59XG4iXX0=