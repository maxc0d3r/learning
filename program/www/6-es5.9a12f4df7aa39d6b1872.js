!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+6XE":function(t,e,n){var r,i;void 0===(i="function"==typeof(r=function(){"use strict";var t=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function e(t){return t.split("").reverse().join("")}function n(t,e){return t.substring(0,e.length)===e}function r(t,e,n){if((t[e]||t[n])&&t[e]===t[n])throw new Error(e)}function i(t){return"number"==typeof t&&isFinite(t)}function o(t,n,r,o,s,a,c,l,u,p,f,d){var b,g,h,v,m,S=d,x="",y="";return a&&(d=a(d)),!!i(d)&&(!1!==t&&0===parseFloat(d.toFixed(t))&&(d=0),d<0&&(b=!0,d=Math.abs(d)),!1!==t&&(m=t,v=(v=d).toString().split("e"),d=(+((v=(v=Math.round(+(v[0]+"e"+(v[1]?+v[1]+m:m)))).toString().split("e"))[0]+"e"+(v[1]?+v[1]-m:-m))).toFixed(m)),-1!==(d=d.toString()).indexOf(".")?(h=(g=d.split("."))[0],r&&(x=r+g[1])):h=d,n&&(h=e(h).match(/.{1,3}/g),h=e(h.join(e(n)))),b&&l&&(y+=l),o&&(y+=o),b&&u&&(y+=u),y+=h,y+=x,s&&(y+=s),p&&(y=p(y,S)),y)}function s(t,e,r,o,s,a,c,l,u,p,f,d){var b,g="";return f&&(d=f(d)),!(!d||"string"!=typeof d)&&(l&&n(d,l)&&(d=d.replace(l,""),b=!0),o&&n(d,o)&&(d=d.replace(o,"")),u&&n(d,u)&&(d=d.replace(u,""),b=!0),s&&function(t,e){return t.slice(-1*e.length)===e}(d,s)&&(d=d.slice(0,-1*s.length)),e&&(d=d.split(e).join("")),r&&(d=d.replace(r,".")),b&&(g+="-"),""!==(g=(g+=d).replace(/[^0-9\.\-.]/g,""))&&(g=Number(g),c&&(g=c(g)),!!i(g)&&g))}function a(e,n,r){var i,o=[];for(i=0;i<t.length;i+=1)o.push(e[t[i]]);return o.push(r),n.apply("",o)}return function e(n){if(!(this instanceof e))return new e(n);"object"==typeof n&&(n=function(e){var n,i,o,s={};for(void 0===e.suffix&&(e.suffix=e.postfix),n=0;n<t.length;n+=1)if(void 0===(o=e[i=t[n]]))s[i]="negative"!==i||s.negativeBefore?"mark"===i&&"."!==s.thousand&&".":"-";else if("decimals"===i){if(!(o>=0&&o<8))throw new Error(i);s[i]=o}else if("encoder"===i||"decoder"===i||"edit"===i||"undo"===i){if("function"!=typeof o)throw new Error(i);s[i]=o}else{if("string"!=typeof o)throw new Error(i);s[i]=o}return r(s,"mark","thousand"),r(s,"prefix","negative"),r(s,"prefix","negativeBefore"),s}(n),this.to=function(t){return a(n,o,t)},this.from=function(t){return a(n,s,t)})}})?r.apply(e,[]):r)||(t.exports=i)},"2yAu":function(e,r,i){"use strict";i.d(r,"a",function(){return l});var o=i("fXoL"),s=i("tyNb"),a=i("P2eY"),c=["*"],l=function(){var e=function(){function e(n){t(this,e),this.router=n}return n(e,[{key:"ngOnInit",value:function(){console.log("skiptopage",this.skipToPage)}},{key:"goToPage",value:function(){console.log("in page"),this.router.navigate([this.skipToPage])}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Nb(s.g))},e.\u0275cmp=o.Hb({type:e,selectors:[["app-feedback-question"]],inputs:{skipToPage:"skipToPage"},ngContentSelectors:c,decls:16,vars:0,consts:[[1,"top_nav","ml0"],[1,"nav_menu","cnav_menu","nav_menu_01"],[1,"nav","navbar-nav","navbar-right","cnav"],[1,""],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle",3,"click"],[1,"txt18a"],["role","main",1,"right_col","bg_light_gray"],[1,"cw100p","dabsolute_02"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0"],[1,"x_panel","xpanel_01"],[1,"x_content","tleft"]],template:function(t,e){1&t&&(o.kc(),o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"nav"),o.Sb(3,"ul",2),o.Sb(4,"li",3),o.Sb(5,"a",4),o.ac("click",function(){return e.goToPage()}),o.Sb(6,"h6",5),o.Dc(7," Skip "),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(8,"div",6),o.Sb(9,"div",7),o.Sb(10,"div",8),o.Sb(11,"div",9),o.Sb(12,"div",10),o.Sb(13,"div",11),o.jc(14),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Ob(15,"app-botnav"))},directives:[a.a],styles:[""]}),e}()},DDQk:function(e,r,i){"use strict";i.d(r,"a",function(){return f});var o=i("fXoL"),s=i("6RAO"),a=i("Hvql"),c=i("tyNb"),l=i("ofXK"),u=["screen"],p=["*"],f=function(){var e=function(){function e(n,r,i){t(this,e),this.captureService=n,this.service=r,this.next=i}return n(e,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var t=this,e=this.next.routeConfig.path;this.scrId=e.substring(1,e.length+1),console.log("test bookmarks"),this.captureService.getImage(this.screen.nativeElement,!0).toPromise().then(function(e){e=e.substring(e.indexOf(",")+1),console.log(e),t.service.UploadThumbnail({ScrNo:t.scrId,byteArray:e}).subscribe(function(t){console.log(t)})})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Nb(s.b),o.Nb(a.a),o.Nb(c.a))},e.\u0275cmp=o.Hb({type:e,selectors:[["app-begin-survey"]],viewQuery:function(t,e){var n;(1&t&&o.Hc(u,3),2&t)&&(o.tc(n=o.bc())&&(e.screen=n.first))},inputs:{bg:"bg"},ngContentSelectors:p,decls:8,vars:1,consts:[["role","main",1,"right_col",3,"ngClass"],["screen",""],[1,"cw100p","dabsolute_01"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0","h100p","center_flex"],[1,"x_panel","xpanel_01"],[1,"x_content","tcenter"]],template:function(t,e){1&t&&(o.kc(),o.Sb(0,"div",0,1),o.Sb(2,"div",2),o.Sb(3,"div",3),o.Sb(4,"div",4),o.Sb(5,"div",5),o.Sb(6,"div",6),o.jc(7),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&t&&o.lc("ngClass",e.bg)},directives:[l.j],styles:[""]}),e}()},E9YQ:function(e,r,i){"use strict";i.d(r,"a",function(){return c});var o=i("fXoL"),s=i("mgaL"),a=i("3Pt+"),c=function(){var e=function(){function e(){t(this,e),this.sendRating=new o.o,this.rating=0,this.options={floor:1,ceil:3},this.value=100}return n(e,[{key:"ngOnInit",value:function(){}},{key:"selectRating",value:function(t){console.log(this.rating,this.r),this.sendRating.emit(JSON.stringify({Id:this.r,Rating:this.rating}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["app-progress-slider3"]],inputs:{q:"q",r:"r",pFilter:"pFilter",nFilter:"nFilter"},outputs:{sendRating:"sendRating"},decls:18,vars:7,consts:[[1,"row"],[1,"col-md-12","col-sm-12","col-xs-12","p0"],["data-toggle","modal","data-target","#lab-slide-bottom-popup",1,"sb_anchor"],[1,"box","textarea_box"],[1,"pt1rem","pb0_5rem","txt15"],[1,"row","pt1rem"],[1,"col-md-5","col-sm-5","col-xs-5","p0","tleft"],[1,"mt0px","txt16"],[1,"col-md-2","col-sm-2","col-xs-2","p0"],[1,"mt0px","txt17","tcenter"],[1,"col-md-5","col-sm-5","col-xs-5","p0","tright"],["name","slider",1,"progress_slider3",3,"value","options","ngModel","valueChange","ngModelChange","userChange"],["id","pmd-slider-tooltip",1,"pmd-range-slider","pmd-range-tooltip"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"a",2),o.Sb(3,"div",3),o.Sb(4,"h4",4),o.Dc(5),o.Rb(),o.Sb(6,"div",5),o.Sb(7,"div",6),o.Sb(8,"h6",7),o.Dc(9),o.Rb(),o.Rb(),o.Sb(10,"div",8),o.Sb(11,"h6",9),o.Dc(12," Just right "),o.Rb(),o.Rb(),o.Sb(13,"div",10),o.Sb(14,"h6",7),o.Dc(15),o.Rb(),o.Rb(),o.Rb(),o.Sb(16,"ngx-slider",11),o.ac("valueChange",function(t){return e.value=t})("ngModelChange",function(t){return e.rating=t})("userChange",function(){return e.selectRating(e.rating)}),o.Rb(),o.Ob(17,"div",12),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&t&&(o.Ab(5),o.Gc(" ",e.r,". ",e.q," "),o.Ab(4),o.Fc(" ",e.nFilter," "),o.Ab(6),o.Fc(" ",e.pFilter," "),o.Ab(1),o.lc("value",e.value)("options",e.options)("ngModel",e.rating))},directives:[s.b,a.j,a.m],styles:[""]}),e}()},Ed4I:function(e,r,i){"use strict";i.d(r,"a",function(){return a});var o=i("fXoL"),s=i("ofXK"),a=function(){var e=function(){function e(){t(this,e),this.nextEmitter=new o.o,this.previousEmitter=new o.o}return n(e,[{key:"ngOnInit",value:function(){}},{key:"next",value:function(){this.nextEmitter.emit()}},{key:"previous",value:function(){this.previousEmitter.emit()}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["app-feedback-footer"]],inputs:{bg:"bg"},outputs:{nextEmitter:"nextEmitter",previousEmitter:"previousEmitter"},decls:12,vars:1,consts:[[1,"sidebar-footer","hidden-small",3,"ngClass"],[1,"rrow","lh5rem","center_flex"],[1,"col-lg-4","col-md-6","col-sm-12","col-xs-12","tcenter","center_flex","p0"],[1,"col-lg-4","col-md-4","col-sm-2","col-xs-4","btn_p0"],[3,"click"],["type","button",1,"btn","w100","mb0","btn_prev"],[1,"col-lg-4","col-md-4","col-sm-2","col-xs-6","p0"],["type","button",1,"btn","btn-default","w100","mb0","btn_next"],[1,"col-lg-4","col-md-4","col-sm-2","col-xs-4"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"div",2),o.Sb(3,"div",3),o.Sb(4,"a",4),o.ac("click",function(){return e.previous()}),o.Sb(5,"button",5),o.Dc(6,"Previous"),o.Rb(),o.Rb(),o.Rb(),o.Sb(7,"div",6),o.Sb(8,"a",4),o.ac("click",function(){return e.next()}),o.Sb(9,"button",7),o.Dc(10,"Next"),o.Rb(),o.Rb(),o.Rb(),o.Ob(11,"div",8),o.Rb(),o.Rb(),o.Rb()),2&t&&o.lc("ngClass",e.bg)},directives:[s.j],styles:[""]}),e}()},IpEE:function(e,r,i){"use strict";i.d(r,"a",function(){return f});var o=i("fXoL"),s=i("6RAO"),a=i("Hvql"),c=i("tyNb"),l=i("ofXK"),u=["screen"],p=["*"],f=function(){var e=function(){function e(n,r,i){t(this,e),this.captureService=n,this.service=r,this.next=i}return n(e,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var t=this,e=this.next.routeConfig.path;this.scrId=e.substring(1,e.length+1),console.log("test bookmarks"),this.captureService.getImage(this.screen.nativeElement,!0).toPromise().then(function(e){e=e.substring(e.indexOf(",")+1),console.log(e),t.service.UploadThumbnail({ScrNo:t.scrId,byteArray:e}).subscribe(function(t){console.log(t)})})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Nb(s.b),o.Nb(a.a),o.Nb(c.a))},e.\u0275cmp=o.Hb({type:e,selectors:[["app-quotation"]],viewQuery:function(t,e){var n;(1&t&&o.Hc(u,3),2&t)&&(o.tc(n=o.bc())&&(e.screen=n.first))},inputs:{bg:"bg"},ngContentSelectors:p,decls:8,vars:1,consts:[["role","main",1,"right_col",3,"ngClass"],["screen",""],[1,"cw100p","dabsolute_01"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0","h100p","center_flex"],[1,"x_panel","xpanel_01"],[1,"x_content","quotation"]],template:function(t,e){1&t&&(o.kc(),o.Sb(0,"div",0,1),o.Sb(2,"div",2),o.Sb(3,"div",3),o.Sb(4,"div",4),o.Sb(5,"div",5),o.Sb(6,"div",6),o.jc(7),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&t&&o.lc("ngClass",e.bg)},directives:[l.j],styles:[""]}),e}()},P2eY:function(e,r,i){"use strict";i.d(r,"a",function(){return c});var o=i("fXoL"),s=i("tyNb"),a=i("ofXK"),c=function(){var e=function(){function e(n,r){t(this,e),this.router=n,this.location=r}return n(e,[{key:"ngOnInit",value:function(){}},{key:"routeJournal",value:function(){this.router.navigate(["/adults/journal"])}},{key:"routeDash",value:function(){this.router.navigate(["/adults/adult-dashboard"])}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Nb(s.g),o.Nb(a.h))},e.\u0275cmp=o.Hb({type:e,selectors:[["app-botnav"]],decls:0,vars:0,template:function(t,e){},styles:[""]}),e}()},Vs5W:function(e,r,i){"use strict";i.d(r,"a",function(){return c});var o=i("fXoL"),s=i("mgaL"),a=i("3Pt+"),c=function(){var e=function(){function e(){t(this,e),this.sendRating=new o.o,this.rating=0,this.options={floor:0,ceil:5},this.value=100}return n(e,[{key:"ngOnInit",value:function(){}},{key:"selectRating",value:function(t){console.log(this.rating,this.r),this.sendRating.emit(JSON.stringify({Id:this.r,Rating:this.rating}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["app-progress-slider"]],inputs:{q:"q",r:"r",pFilter:"pFilter",nFilter:"nFilter"},outputs:{sendRating:"sendRating"},decls:18,vars:8,consts:[[1,"row"],[1,"col-md-12","col-sm-12","col-xs-12","p0"],["data-toggle","modal","data-target","#lab-slide-bottom-popup",1,"sb_anchor"],[1,"box","textarea_box"],[1,"pt1rem","pb0_5rem","txt15"],[1,"row","pt1rem"],[1,"col-md-5","col-sm-5","col-xs-5","p0","tleft"],[1,"mt0px","txt16"],[1,"col-md-2","col-sm-2","col-xs-2","p0"],[1,"mt0px","txt43","tcenter"],[1,"col-md-5","col-sm-5","col-xs-5","p0","tright"],[1,"mt0px","txt17"],["name","slider",3,"value","options","ngModel","valueChange","ngModelChange","userChange"],["id","pmd-slider-tooltip",1,"pmd-range-slider","pmd-range-tooltip"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"a",2),o.Sb(3,"div",3),o.Sb(4,"h4",4),o.Dc(5),o.Rb(),o.Sb(6,"div",5),o.Sb(7,"div",6),o.Sb(8,"h6",7),o.Dc(9),o.Rb(),o.Rb(),o.Sb(10,"div",8),o.Sb(11,"h6",9),o.Dc(12),o.Rb(),o.Rb(),o.Sb(13,"div",10),o.Sb(14,"h6",11),o.Dc(15),o.Rb(),o.Rb(),o.Rb(),o.Sb(16,"ngx-slider",12),o.ac("valueChange",function(t){return e.value=t})("ngModelChange",function(t){return e.rating=t})("userChange",function(){return e.selectRating(e.rating)}),o.Rb(),o.Ob(17,"div",13),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&t&&(o.Ab(5),o.Gc(" ",e.r,". ",e.q," "),o.Ab(4),o.Fc(" ",e.nFilter," "),o.Ab(3),o.Fc(" ",e.rating," "),o.Ab(3),o.Fc(" ",e.pFilter," "),o.Ab(1),o.lc("value",e.value)("options",e.options)("ngModel",e.rating))},directives:[s.b,a.j,a.m],styles:[""]}),e}()},ZPh6:function(t,e,n){var r,i;void 0===(i="function"==typeof(r=function(){"use strict";function t(t){var e=t.getBoundingClientRect(),n=t.ownerDocument.documentElement,r=a();return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(r.x=0),{top:e.top+r.y-n.clientTop,left:e.left+r.x-n.clientLeft}}function e(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function n(t,e,n){o(t,e),setTimeout(function(){s(t,e)},n)}function r(t){return Math.max(Math.min(t,100),0)}function i(t){return Array.isArray(t)?t:[t]}function o(t,e){t.classList?t.classList.add(e):t.className+=" "+e}function s(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function a(){var t=void 0!==window.pageXOffset,e="CSS1Compat"===(document.compatMode||"");return{x:t?window.pageXOffset:e?document.documentElement.scrollLeft:document.body.scrollLeft,y:t?window.pageYOffset:e?document.documentElement.scrollTop:document.body.scrollTop}}function c(t,e){return 100/(e-t)}function l(t,e){return 100*e/(t[1]-t[0])}function u(t,e){for(var n=1;t>=e[n];)n+=1;return n}function p(t,n,r){var i;if("number"==typeof n&&(n=[n]),"[object Array]"!==Object.prototype.toString.call(n))throw new Error("noUiSlider: 'range' contains invalid value.");if(!e(i="min"===t?0:"max"===t?100:parseFloat(t))||!e(n[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");r.xPct.push(i),r.xVal.push(n[0]),i?r.xSteps.push(!isNaN(n[1])&&n[1]):isNaN(n[1])||(r.xSteps[0]=n[1])}function f(t,e,n){if(!e)return!0;n.xSteps[t]=l([n.xVal[t],n.xVal[t+1]],e)/c(n.xPct[t],n.xPct[t+1])}function d(t,e,n,r){this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=e,this.direction=n;var i,o=[];for(i in t)t.hasOwnProperty(i)&&o.push([t[i],i]);for(o.sort(o.length&&"object"==typeof o[0][0]?function(t,e){return t[0][0]-e[0][0]}:function(t,e){return t[0]-e[0]}),i=0;i<o.length;i++)p(o[i][1],o[i][0],this);for(this.xNumSteps=this.xSteps.slice(0),i=0;i<this.xNumSteps.length;i++)f(i,this.xNumSteps[i],this)}d.prototype.getMargin=function(t){return 2===this.xPct.length&&l(this.xVal,t)},d.prototype.toStepping=function(t){return t=function(t,e,n){if(n>=t.slice(-1)[0])return 100;var r,i,o=u(n,t);return i=e[o],(r=e[o-1])+function(t,e){return l(t,t[0]<0?e+Math.abs(t[0]):e-t[0])}([t[o-1],t[o]],n)/c(r,i)}(this.xVal,this.xPct,t),this.direction&&(t=100-t),t},d.prototype.fromStepping=function(t){return this.direction&&(t=100-t),function(t,e,n){if(n>=100)return t.slice(-1)[0];var r,i=u(n,e);return function(t,e){return e*(t[1]-t[0])/100+t[0]}([t[i-1],t[i]],(n-(r=e[i-1]))*c(r,e[i]))}(this.xVal,this.xPct,t)},d.prototype.getStep=function(t){return this.direction&&(t=100-t),t=function(t,e,n,r){if(100===r)return r;var i,o,s=u(r,t);return n?r-(i=t[s-1])>((o=t[s])-i)/2?o:i:e[s-1]?t[s-1]+function(t,e){return Math.round(t/e)*e}(r-t[s-1],e[s-1]):r}(this.xPct,this.xSteps,this.snap,t),this.direction&&(t=100-t),t},d.prototype.getApplicableStep=function(t){var e=u(t,this.xPct),n=100===t?2:1;return[this.xNumSteps[e-2],this.xVal[e-n],this.xNumSteps[e-n]]},d.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var b={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number};function g(t,n){if(!e(n))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=n}function h(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");t.spectrum=new d(e,t.snap,t.dir,t.singleStep)}function v(t,e){if(e=i(e),!Array.isArray(e)||!e.length||e.length>2)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function m(t,e){if(t.snap=e,"boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.")}function S(t,e){if(t.animate=e,"boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.")}function x(t,e){if(t.animationDuration=e,"number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.")}function y(t,e){if("lower"===e&&1===t.handles)t.connect=1;else if("upper"===e&&1===t.handles)t.connect=2;else if(!0===e&&2===t.handles)t.connect=3;else{if(!1!==e)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");t.connect=0}}function w(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function k(t,n){if(!e(n))throw new Error("noUiSlider: 'margin' option must be numeric.");if(0!==n&&(t.margin=t.spectrum.getMargin(n),!t.margin))throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")}function R(t,n){if(!e(n))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getMargin(n),!t.limit)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")}function C(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1,t.connect=[0,2,1,3][t.connect];break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function E(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var n=e.indexOf("tap")>=0,r=e.indexOf("drag")>=0,i=e.indexOf("fixed")>=0,o=e.indexOf("snap")>=0,s=e.indexOf("hover")>=0;if(r&&!t.connect)throw new Error("noUiSlider: 'drag' behaviour must be used with 'connect': true.");t.events={tap:n||o,drag:r,fixed:i,snap:o,hover:s}}function N(t,e){var n;if(!1!==e)if(!0===e)for(t.tooltips=[],n=0;n<t.handles;n++)t.tooltips.push(!0);else{if(t.tooltips=i(e),t.tooltips.length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");t.tooltips.forEach(function(t){if("boolean"!=typeof t&&("object"!=typeof t||"function"!=typeof t.to))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})}}function _(t,e){if(t.format=e,"function"==typeof e.to&&"function"==typeof e.from)return!0;throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")}function P(t,e){if(void 0!==e&&"string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function O(t,e){if(void 0!==e&&"object"!=typeof e)throw new Error("noUiSlider: 'cssClasses' must be an object.");if("string"==typeof t.cssPrefix)for(var n in t.cssClasses={},e)e.hasOwnProperty(n)&&(t.cssClasses[n]=t.cssPrefix+e[n]);else t.cssClasses=e}function U(t){var e,n={margin:0,limit:0,animate:!0,animationDuration:300,format:b};e={step:{r:!1,t:g},start:{r:!0,t:v},connect:{r:!0,t:y},direction:{r:!0,t:C},snap:{r:!1,t:m},animate:{r:!1,t:S},animationDuration:{r:!1,t:x},range:{r:!0,t:h},orientation:{r:!1,t:w},margin:{r:!1,t:k},limit:{r:!1,t:R},behaviour:{r:!0,t:E},format:{r:!1,t:_},tooltips:{r:!1,t:N},cssPrefix:{r:!1,t:P},cssClasses:{r:!1,t:O}};var r={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",stacking:"stacking",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}};return Object.keys(e).forEach(function(i){if(void 0===t[i]&&void 0===r[i]){if(e[i].r)throw new Error("noUiSlider: '"+i+"' is required.");return!0}e[i].t(n,void 0===t[i]?r[i]:t[i])}),n.pips=t.pips,n.style=n.ort?"top":"left",n}return{create:function(e,c){if(!e.nodeName)throw new Error("noUiSlider.create requires a single element.");var l=U(c),u=function(e,c,l){var u,p,f,d=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},b=e,g=[-1,-1],h=c.spectrum,v=[],m={};function S(t,e){var n=document.createElement("div"),r=document.createElement("div"),i=[c.cssClasses.handleLower,c.cssClasses.handleUpper];return t&&i.reverse(),o(r,c.cssClasses.handle),o(r,i[e]),o(n,c.cssClasses.origin),n.appendChild(r),n}function x(t,e){if(!c.tooltips[e])return!1;var n=document.createElement("div");return n.className=c.cssClasses.tooltip,t.firstChild.appendChild(n)}function y(t){var e=t.mode,n=t.filter||!1,r=function(t,e,n){var r,i=h.direction,o={},s=h.xVal[0],a=h.xVal[h.xVal.length-1],c=!1,l=!1,u=0;return h.direction=0,(r=n.slice().sort(function(t,e){return t-e}),n=r.filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==s&&(n.unshift(s),c=!0),n[n.length-1]!==a&&(n.push(a),l=!0),n.forEach(function(r,i){var s,a,p,f,d,b,g,v,m=n[i+1];if("steps"===e&&(s=h.xNumSteps[i]),s||(s=m-r),!1!==r&&void 0!==m)for(a=r;a<=m;a=(a+s).toFixed(7)/1){for(v=(d=(f=h.toStepping(a))-u)/(g=Math.round(d/t)),p=1;p<=g;p+=1)o[(u+p*v).toFixed(5)]=["x",0];b=n.indexOf(a)>-1?1:"steps"===e?2:0,!i&&c&&(b=0),a===m&&l||(o[f.toFixed(5)]=[a,b]),u=f}}),h.direction=i,o}(t.density||1,e,function(t,e,n){if("range"===t||"steps"===t)return h.xVal;if("count"===t){var r,i=100/(e-1),o=0;for(e=[];(r=o++*i)<=100;)e.push(r);t="positions"}return"positions"===t?e.map(function(t){return h.fromStepping(n?h.getStep(t):t)}):"values"===t?n?e.map(function(t){return h.fromStepping(h.getStep(h.toStepping(t)))}):e:void 0}(e,t.values||!1,t.stepped||!1)),i=t.format||{to:Math.round};return b.appendChild(function(t,e,n){var r=document.createElement("div"),i="",s=[c.cssClasses.valueNormal,c.cssClasses.valueLarge,c.cssClasses.valueSub],a=[c.cssClasses.markerNormal,c.cssClasses.markerLarge,c.cssClasses.markerSub],l=[c.cssClasses.valueHorizontal,c.cssClasses.valueVertical],u=[c.cssClasses.markerHorizontal,c.cssClasses.markerVertical];function p(t,e,n){return'class="'+function(t,e){var n=e===c.cssClasses.value;return e+" "+(n?l:u)[c.ort]+" "+(n?s:a)[t]}(n[1],e)+'" style="'+c.style+": "+t+'%"'}return o(r,c.cssClasses.pips),o(r,0===c.ort?c.cssClasses.pipsHorizontal:c.cssClasses.pipsVertical),Object.keys(t).forEach(function(r){!function(t,r){h.direction&&(t=100-t),r[1]=r[1]&&e?e(r[0],r[1]):r[1],i+="<div "+p(t,c.cssClasses.marker,r)+"></div>",r[1]&&(i+="<div "+p(t,c.cssClasses.value,r)+">"+n.to(r[0])+"</div>")}(r,t[r])}),r.innerHTML=i,r}(r,n,i))}function w(){var t=u.getBoundingClientRect(),e="offset"+["Width","Height"][c.ort];return 0===c.ort?t.width||u[e]:t.height||u[e]}function k(t,e,n){var r;for(r=0;r<c.handles;r++)if(-1===g[r])return;void 0!==e&&1!==c.handles&&(e=Math.abs(e-c.dir)),Object.keys(m).forEach(function(r){var o=r.split(".")[0];t===o&&m[r].forEach(function(t){t.call(f,i(j()),e,i(R(Array.prototype.slice.call(v))),n||!1,g)})})}function R(t){return 1===t.length?t[0]:c.dir?t.reverse():t}function C(t,e,n,r){var i=function(e){return!b.hasAttribute("disabled")&&(o=c.cssClasses.tap,!((i=b).classList?i.classList.contains(o):new RegExp("\\b"+o+"\\b").test(i.className)))&&(e=function(t,e){t.preventDefault();var n,r,i=0===t.type.indexOf("touch"),o=0===t.type.indexOf("mouse"),s=0===t.type.indexOf("pointer"),c=t;return 0===t.type.indexOf("MSPointer")&&(s=!0),i&&(n=t.changedTouches[0].pageX,r=t.changedTouches[0].pageY),e=e||a(),(o||s)&&(n=t.clientX+e.x,r=t.clientY+e.y),c.pageOffset=e,c.points=[n,r],c.cursor=o||s,c}(e,r.pageOffset),!(t===d.start&&void 0!==e.buttons&&e.buttons>1)&&(!r.hover||!e.buttons)&&(e.calcPoint=e.points[c.ort],void n(e,r)));var i,o},o=[];return t.split(" ").forEach(function(t){e.addEventListener(t,i,!1),o.push([t,i])}),o}function E(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return N(t,e);var n,i,o,s,a,c,l=e.handles||p,u=!1,f=l[0]===p[0]?0:1;if(a=(o=100*(t.calcPoint-e.start)/e.baseSize)+(s=e.positions)[0],c=o+s[1],n=l.length>1?(a<0&&(c+=Math.abs(a)),c>100&&(a-=c-100),[r(a),r(c)]):[a,c],u=A(l[0],n[f],1===l.length),l.length>1){if(u=A(l[1],n[f?0:1],!1)||u)for(i=0;i<e.handles.length;i++)k("slide",i)}else u&&k("slide",f)}function N(t,e){var n=u.querySelector("."+c.cssClasses.active),r=e.handles[0]===p[0]?0:1;null!==n&&s(n,c.cssClasses.active),t.cursor&&(document.body.style.cursor="",document.body.removeEventListener("selectstart",document.body.noUiListener));var i=document.documentElement;i.noUiListeners.forEach(function(t){i.removeEventListener(t[0],t[1])}),s(b,c.cssClasses.drag),k("set",r),k("change",r),void 0!==e.handleNumber&&k("end",e.handleNumber)}function _(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&N(t,e)}function P(t,e){var n=document.documentElement;if(1===e.handles.length){if(e.handles[0].hasAttribute("disabled"))return!1;o(e.handles[0].children[0],c.cssClasses.active)}t.preventDefault(),t.stopPropagation();var r=C(d.move,n,E,{start:t.calcPoint,baseSize:w(),pageOffset:t.pageOffset,handles:e.handles,handleNumber:e.handleNumber,buttonsProperty:t.buttons,positions:[g[0],g[p.length-1]]}),i=C(d.end,n,N,{handles:e.handles,handleNumber:e.handleNumber}),s=C("mouseout",n,_,{handles:e.handles,handleNumber:e.handleNumber});if(n.noUiListeners=r.concat(i,s),t.cursor){document.body.style.cursor=getComputedStyle(t.target).cursor,p.length>1&&o(b,c.cssClasses.drag);var a=function(){return!1};document.body.noUiListener=a,document.body.addEventListener("selectstart",a,!1)}void 0!==e.handleNumber&&k("start",e.handleNumber)}function O(e){var r,i,o=e.calcPoint,s=0;if(e.stopPropagation(),p.forEach(function(e){s+=t(e)[c.style]}),p[r=o<s/2||1===p.length?0:1].hasAttribute("disabled")&&(r=r?0:1),i=100*(o-=t(u)[c.style])/w(),c.events.snap||n(b,c.cssClasses.tap,c.animationDuration),p[r].hasAttribute("disabled"))return!1;A(p[r],i),k("slide",r,!0),k("set",r,!0),k("change",r,!0),c.events.snap&&P(e,{handles:[p[r]]})}function M(e){var n=e.calcPoint-t(u)[c.style],r=h.getStep(100*n/w()),i=h.fromStepping(r);Object.keys(m).forEach(function(t){"hover"===t.split(".")[0]&&m[t].forEach(function(t){t.call(f,i)})})}function A(t,e,n){var i=t!==p[0]?1:0,a=g[1]-c.margin,l=g[0]+c.limit,u=g[1]-c.limit;return p.length>1&&(e=i?Math.max(e,g[0]+c.margin):Math.min(e,a)),!1!==n&&c.limit&&p.length>1&&(e=i?Math.min(e,l):Math.max(e,u)),(e=r(e=h.getStep(e)))!==g[i]&&(window.requestAnimationFrame?window.requestAnimationFrame(function(){t.style[c.style]=e+"%"}):t.style[c.style]=e+"%",t.previousSibling||(s(t,c.cssClasses.stacking),e>50&&o(t,c.cssClasses.stacking)),g[i]=e,v[i]=h.fromStepping(e),k("update",i),!0)}function L(t,e){var r,o,s=i(t);for(e=void 0===e||!!e,c.dir&&c.handles>1&&s.reverse(),c.animate&&-1!==g[0]&&n(b,c.cssClasses.tap,c.animationDuration),r=p.length>1?3:1,1===s.length&&(r=1),function(t,e){var n,r,i;for(c.limit&&(t+=1),n=0;n<t;n+=1)null!==(i=e[r=n%2])&&!1!==i&&("number"==typeof i&&(i=String(i)),(!1===(i=c.format.from(i))||isNaN(i)||!1===A(p[r],h.toStepping(i),n===3-c.dir))&&k("update",r))}(r,s),o=0;o<p.length;o++)null!==s[o]&&e&&k("set",o)}function j(){var t,e=[];for(t=0;t<c.handles;t+=1)e[t]=c.format.to(v[t]);return R(e)}function F(t,e){m[t]=m[t]||[],m[t].push(e),"update"===t.split(".")[0]&&p.forEach(function(t,e){k("update",e)})}if(b.noUiSlider)throw new Error("Slider was already initialized.");return u=function(t,e,n){o(n,c.cssClasses.target),o(n,0===t?c.cssClasses.ltr:c.cssClasses.rtl),o(n,0===e?c.cssClasses.horizontal:c.cssClasses.vertical);var r=document.createElement("div");return o(r,c.cssClasses.base),n.appendChild(r),r}(c.dir,c.ort,b),p=function(t,e,n){var r,i=[];for(r=0;r<t;r+=1)i.push(n.appendChild(S(e,r)));return i}(c.handles,c.dir,u),function(t,e,n){switch(t){case 1:o(e,c.cssClasses.connect),o(n[0],c.cssClasses.background);break;case 3:o(n[1],c.cssClasses.background);case 2:o(n[0],c.cssClasses.connect);case 0:o(e,c.cssClasses.background)}}(c.connect,b,p),c.pips&&y(c.pips),c.tooltips&&function(){c.dir&&c.tooltips.reverse();var t=p.map(x);c.dir&&(t.reverse(),c.tooltips.reverse()),F("update",function(e,n,r){t[n]&&(t[n].innerHTML=!0===c.tooltips[n]?e[n]:c.tooltips[n].to(r[n]))})}(),f={destroy:function(){for(var t in c.cssClasses)c.cssClasses.hasOwnProperty(t)&&s(b,c.cssClasses[t]);for(;b.firstChild;)b.removeChild(b.firstChild);delete b.noUiSlider},steps:function(){return R(g.map(function(t,e){var n,r=h.getApplicableStep(t),i=(n=String(r[2]).split(".")).length>1?n[1].length:0,o=100===t?null:r[2],s=Number((v[e]-r[2]).toFixed(i));return[0===t?null:s>=r[1]?r[2]:r[0]||!1,o]}))},on:F,off:function(t){var e=t&&t.split(".")[0],n=e&&t.substring(e.length);Object.keys(m).forEach(function(t){var r=t.split(".")[0],i=t.substring(r.length);e&&e!==r||n&&n!==i||delete m[t]})},get:j,set:L,updateOptions:function(t,e){var n=j(),r=U({start:[0,0],margin:t.margin,limit:t.limit,step:void 0===t.step?c.singleStep:t.step,range:t.range,animate:t.animate,snap:void 0===t.snap?c.snap:t.snap});["margin","limit","range","animate"].forEach(function(e){void 0!==t[e]&&(c[e]=t[e])}),r.spectrum.direction=h.direction,h=r.spectrum,g=[-1,-1],L(t.start||n,e)},options:l,target:b,pips:y},function(t){if(t.fixed||p.forEach(function(t,e){C(d.start,t.children[0],P,{handles:[t],handleNumber:e})}),t.tap&&C(d.start,u,O,{handles:p}),t.hover&&C(d.move,u,M,{hover:!0}),t.drag){var e=[u.querySelector("."+c.cssClasses.connect)];o(e[0],c.cssClasses.draggable),t.fixed&&e.push(p[e[0]===p[0]?1:0].children[0]),e.forEach(function(t){C(d.start,t,P,{handles:p})})}}(c.events),f}(e,l,c);return u.set(l.start),e.noUiSlider=u,u}}})?r.apply(e,[]):r)||(t.exports=i)},x9DM:function(e,r,i){"use strict";i.d(r,"a",function(){return f});var o=i("fXoL"),s=i("6RAO"),a=i("Hvql"),c=i("tyNb"),l=i("ofXK"),u=["screen"],p=["*"],f=function(){var e=function(){function e(n,r,i){t(this,e),this.captureService=n,this.service=r,this.next=i}return n(e,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var t=this;console.log("test bookmarks");var e=this.next.routeConfig.path;this.scrId=e.substring(1,e.length+1),this.captureService.getImage(this.screen.nativeElement,!0).toPromise().then(function(e){e=e.substring(e.indexOf(",")+1),console.log(e),t.service.UploadThumbnail({ScrNo:t.scrId,byteArray:e}).subscribe(function(t){console.log(t)})})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Nb(s.b),o.Nb(a.a),o.Nb(c.a))},e.\u0275cmp=o.Hb({type:e,selectors:[["app-simple-text"]],viewQuery:function(t,e){var n;(1&t&&o.Hc(u,3),2&t)&&(o.tc(n=o.bc())&&(e.screen=n.first))},inputs:{bg:"bg"},ngContentSelectors:p,decls:8,vars:1,consts:[["role","main",1,"right_col",3,"ngClass"],["screen",""],[1,"cw100p","dabsolute_01"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0","h100p","center_flex"],[1,"x_panel","xpanel_01"],[1,"x_content","tcenter","p0"]],template:function(t,e){1&t&&(o.kc(),o.Sb(0,"div",0,1),o.Sb(2,"div",2),o.Sb(3,"div",3),o.Sb(4,"div",4),o.Sb(5,"div",5),o.Sb(6,"div",6),o.jc(7),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&t&&o.lc("ngClass",e.bg)},directives:[l.j],styles:[""]}),e}()},yrfm:function(e,r,i){"use strict";i.d(r,"a",function(){return u});var o=i("fXoL"),s=i("tyNb"),a=i("ofXK");function c(t,e){if(1&t){var n=o.Tb();o.Sb(0,"a",11),o.ac("click",function(){return o.wc(n),o.ec().goToPage()}),o.Sb(1,"h6",12),o.Dc(2," Skip "),o.Rb(),o.Rb()}}var l=["*"],u=function(){var e=function(){function e(n){t(this,e),this.router=n}return n(e,[{key:"ngOnInit",value:function(){console.log("skiptopage",this.skipToPage)}},{key:"goToPage",value:function(){console.log("in page"),this.router.navigate(["/adults"+this.skipToPage])}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Nb(s.g))},e.\u0275cmp=o.Hb({type:e,selectors:[["app-likert-scale"]],inputs:{skipToPage:"skipToPage"},ngContentSelectors:l,decls:13,vars:1,consts:[[1,"top_nav","ml0"],[1,"nav_menu","cnav_menu","nav_menu_01"],[1,"nav","navbar-nav","navbar-right","cnav"],[1,"mr0px"],["class","cuser-profile dropdown-toggle","data-toggle","dropdown","aria-expanded","false",3,"click",4,"ngIf"],["role","main",1,"right_col","bg_light_gray"],[1,"cw100p","dabsolute_02"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0","h100p"],[1,"x_panel","xpanel_01"],[1,"x_content","tleft","mt0px","p0px_a"],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle",3,"click"],[1,"txt18a"]],template:function(t,e){1&t&&(o.kc(),o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"nav"),o.Sb(3,"ul",2),o.Sb(4,"li",3),o.Bc(5,c,3,0,"a",4),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(6,"div",5),o.Sb(7,"div",6),o.Sb(8,"div",7),o.Sb(9,"div",8),o.Sb(10,"div",9),o.Sb(11,"div",10),o.jc(12),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&t&&(o.Ab(5),o.lc("ngIf",e.skipToPage))},directives:[a.l],styles:[""]}),e}()}}])}();