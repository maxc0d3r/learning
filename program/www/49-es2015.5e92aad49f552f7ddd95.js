(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{USy8:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var a=r("mrSG"),n=r("fXoL");let o=(()=>{let t=class{constructor(){this.webNavigator=null,this.webNavigator=window.navigator}canShare(){return null!==this.webNavigator&&void 0!==this.webNavigator.share}canShareFile(t){return null!==this.webNavigator&&void 0!==this.webNavigator.share&&this.webNavigator.canShare({files:t})}share({title:t,text:e,url:r,files:n}){return new Promise((o,c)=>Object(a.a)(this,void 0,void 0,function*(){if(null!==this.webNavigator&&void 0!==this.webNavigator.share)if(null==e&&null==r)console.warn("text and url both can't be empty, at least provide either text or url");else try{const a={title:t,text:e,url:r};n&&0!==n.length&&(a.files=n),yield this.webNavigator.share(a),o({shared:!0})}catch(a){c({shared:!1,error:a})}else c({shared:!1,error:"This service/api is not supported in your Browser"})}))}};return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(n.Jb)({factory:function(){return new t},token:t,providedIn:"root"}),t=Object(a.b)([Object(a.d)("design:paramtypes",[])],t),t})()},ad33:function(t,e,r){"use strict";r.d(e,"a",function(){return l});var a=r("fXoL"),n=r("USy8"),o=r("tyNb"),c=r("ofXK");function i(t,e){if(1&t){const t=a.Tb();a.Sb(0,"div",1),a.Sb(1,"div",2),a.Sb(2,"div",3),a.Ob(3,"img",4),a.Rb(),a.Rb(),a.Sb(4,"div",5),a.Sb(5,"nav",6),a.Sb(6,"ul",7),a.Sb(7,"li",8),a.Sb(8,"a",9),a.ac("click",function(){return a.wc(t),a.ec().goBack()}),a.Sb(9,"h4",10),a.Dc(10," Back "),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(11,"ul",11),a.Sb(12,"li",12),a.Sb(13,"a",13),a.ac("click",function(){return a.wc(t),a.ec().share()}),a.Ob(14,"img",14),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb()}if(2&t){const t=a.ec();a.Ab(3),a.lc("src",t.tocImage,a.yc)("alt",t.tocAlt)}}function s(t,e){if(1&t){const t=a.Tb();a.Sb(0,"div",1),a.Sb(1,"div",15),a.Sb(2,"div",16),a.Sb(3,"div",3),a.Ob(4,"img",4),a.Rb(),a.Rb(),a.Rb(),a.Sb(5,"div",5),a.Sb(6,"nav",6),a.Sb(7,"ul",7),a.Sb(8,"li",8),a.Sb(9,"a",9),a.ac("click",function(){return a.wc(t),a.ec().goBack()}),a.Sb(10,"h4",17),a.Dc(11," Back "),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(12,"ul",11),a.Sb(13,"li",12),a.Sb(14,"a",13),a.ac("click",function(){return a.wc(t),a.ec().share()}),a.Ob(15,"img",18),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb()}if(2&t){const t=a.ec();a.Ab(4),a.lc("src",t.tocImage,a.yc)("alt",t.tocAlt)}}let l=(()=>{class t{constructor(t,e,r){this.ngNavigatorShareService=t,this.router=e,this.location=r,this.path=this.router.url}ngOnInit(){}goBack(){this.location.back()}share(){this.ngNavigatorShareService.share({title:"Human Wisdom Program",text:"Hey, check out the Human Wisdom Program",url:this.path}).then(t=>{console.log(t)}).catch(t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(n.a),a.Nb(o.g),a.Nb(c.h))},t.\u0275cmp=a.Hb({type:t,selectors:[["app-toc-header"]],inputs:{tocImage:"tocImage",tocColor:"tocColor",tocAlt:"tocAlt"},decls:2,vars:2,consts:[["class","top_nav ml0 tcenter inav",4,"ngIf"],[1,"top_nav","ml0","tcenter","inav"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0"],[1,"img-responsive","w100",3,"src","alt"],[1,"nav_menu","p20px","nav_menu_02"],[1,"flex_ai"],[1,"nav","navbar-nav","navbar-right","cnav","navleft","w50p","no_bg"],[1,""],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle","p0",3,"click"],[1,"btn_back_grey"],[1,"nav","navbar-nav","navbar-right","cnav","w50p","no_bg"],[1,"mr0px","frighti"],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/share_grey.svg","alt","",1,"p0"],[1,"row"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12","p0","center_flex"],[1,"btn_back_white"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/share_white.svg","alt","",1,"p0"]],template:function(t,e){1&t&&(a.Bc(0,i,15,2,"div",0),a.Bc(1,s,16,2,"div",0)),2&t&&(a.lc("ngIf","grey"===e.tocColor),a.Ab(1),a.lc("ngIf","white"===e.tocColor))},directives:[c.l],styles:[""]}),t})()},drim:function(t,e,r){"use strict";r.r(e),r.d(e,"TocHeaderS01PageModule",function(){return d});var a=r("ofXK"),n=r("3Pt+"),o=r("TEn/"),c=r("tyNb"),i=r("fXoL"),s=r("ad33");const l=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Hb({type:t,selectors:[["app-toc-header-s01"]],decls:1,vars:0,template:function(t,e){1&t&&i.Ob(0,"app-toc-header")},directives:[s.a],styles:[""]}),t})()}];let b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({imports:[[c.k.forChild(l)],c.k]}),t})();var u=r("AuZA");let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({imports:[[a.c,n.f,o.e,b,u.a]]}),t})()}}]);