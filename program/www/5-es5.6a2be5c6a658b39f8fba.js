!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var s=0;s<t.length;s++){var o=t[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,s,o){return s&&t(e.prototype,s),o&&t(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0RLX":function(t,o,a){"use strict";a.d(o,"a",function(){return k});var r=a("fXoL"),n=a("tyNb"),i=a("Hvql"),c=a("USy8"),l=a("ofXK"),u=a("3Pt+"),b=a("pj/B");function d(e,t){if(1&e){var s=r.Tb();r.Sb(0,"a",18),r.ac("click",function(){return r.wc(s),r.ec(2).goToToc()}),r.Ob(1,"img",36),r.Rb()}}var h=function(){return["whatsapp","facebook","linkedin"]};function g(e,t){if(1&e&&(r.Sb(0,"div",37),r.Ob(1,"share-buttons",38),r.Rb()),2&e){var s=r.ec(2);r.Ab(1),r.lc("include",r.oc(2,h))("url",s.path)}}function p(e,t){if(1&e){var s=r.Tb();r.Sb(0,"a",39),r.ac("click",function(){return r.wc(s),r.ec(2).toggleBookmark()}),r.Ob(1,"img",40),r.Rb()}}function v(e,t){if(1&e){var s=r.Tb();r.Sb(0,"a",39),r.ac("click",function(){return r.wc(s),r.ec(2).toggleBookmark()}),r.Ob(1,"img",41),r.Rb()}}function m(e,t){if(1&e){var s=r.Tb();r.Sb(0,"div",13),r.Sb(1,"div",14),r.Sb(2,"nav",15),r.Sb(3,"ul",16),r.Sb(4,"li",17),r.Sb(5,"a",18),r.ac("click",function(){return r.wc(s),r.ec().goToDash()}),r.Ob(6,"img",19),r.Rb(),r.Rb(),r.Sb(7,"li",17),r.Bc(8,d,2,0,"a",20),r.Rb(),r.Rb(),r.Sb(9,"ul",21),r.Sb(10,"li",22),r.Sb(11,"a",23),r.ac("click",function(){return r.wc(s),r.ec().goToAudio()}),r.Ob(12,"img",24),r.Rb(),r.Rb(),r.Rb(),r.Sb(13,"ul",25),r.Sb(14,"li",17),r.Sb(15,"a",26),r.ac("click",function(){return r.wc(s),r.ec().share()}),r.Ob(16,"img",27),r.Rb(),r.Sb(17,"ul",28),r.Sb(18,"li"),r.Bc(19,g,2,3,"div",29),r.Rb(),r.Rb(),r.Rb(),r.Sb(20,"li",17),r.Sb(21,"a",30),r.Ob(22,"img",31),r.Rb(),r.Rb(),r.Sb(23,"li",22),r.Bc(24,p,2,0,"a",32),r.Bc(25,v,2,0,"a",32),r.Rb(),r.Rb(),r.Sb(26,"div",33),r.Sb(27,"div",34),r.Ob(28,"div",35),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb()}if(2&e){var o=r.ec();r.Ab(8),r.lc("ngIf",o.toc),r.Ab(11),r.lc("ngIf",o.socialShare),r.Ab(5),r.lc("ngIf",!o.bookmark),r.Ab(1),r.lc("ngIf",o.bookmark),r.Ab(3),r.Ac("width",o.progress+"%")}}function f(e,t){if(1&e&&(r.Sb(0,"div",37),r.Ob(1,"share-buttons",38),r.Rb()),2&e){var s=r.ec(2);r.Ab(1),r.lc("include",r.oc(2,h))("url",s.path)}}function S(e,t){if(1&e){var s=r.Tb();r.Sb(0,"div",13),r.Sb(1,"div",14),r.Sb(2,"nav",15),r.Ob(3,"ul",16),r.Sb(4,"ul",21),r.Sb(5,"li",22),r.Sb(6,"a",23),r.ac("click",function(){return r.wc(s),r.ec().goToAudio()}),r.Ob(7,"img",24),r.Rb(),r.Rb(),r.Rb(),r.Sb(8,"ul",25),r.Sb(9,"li",22),r.Sb(10,"a",26),r.ac("click",function(){return r.wc(s),r.ec().share()}),r.Ob(11,"img",27),r.Rb(),r.Sb(12,"ul",28),r.Sb(13,"li"),r.Bc(14,f,2,3,"div",29),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb()}if(2&e){var o=r.ec();r.Ab(14),r.lc("ngIf",o.socialShare)}}var k=function(){var t=function(){function t(s,o,a){e(this,t),this.router=s,this.service=o,this.ngNavigatorShareService=a,this.sendBookmark=new r.o,this.t=new Date,this.minDate=this.t.getFullYear()+"-"+this.addZero(this.t.getMonth()+1)+"-"+this.addZero(this.t.getDate()),this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.shared=!1,this.token=JSON.parse(localStorage.getItem("token")),this.socialShare=!1,this.address=this.router.url,this.urlT=this.router.getCurrentNavigation().extractedUrl.queryParams.t,this.ngNavigatorShareService=a}return s(t,[{key:"ngOnInit",value:function(){var e=this.path.lastIndexOf("/");this.scrNumber=this.path.substring(e+2),this.scrNumber=this.scrNumber.replace(/\D/g,""),console.log(this.scrNumber),this.getProgress(this.scrNumber),this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),console.log(this.toc,this.audioPage),this.urlT&&(this.shared=!0,this.socialShare=!0)}},{key:"addZero",value:function(e){return e<10&&(e="0"+e),e}},{key:"addToken",value:function(){this.socialShare=!0,this.urlT?(console.log("url"),this.path="https://humanwisdom.me/course/#/"+this.address+"?t=".concat(this.urlT)):(console.log("local"),this.path="https://humanwisdom.me/course/#/"+this.address+"?t=".concat(this.token)),console.log(this.path)}},{key:"toggleBookmark",value:function(){this.bookmark=!this.bookmark,console.log(this.bookmark),this.sendBookmark.emit(JSON.stringify(this.bookmark))}},{key:"courseNote",value:function(){this.router.navigate(["/adults/coursenote",{path:this.path}])}},{key:"goToToc",value:function(){this.router.navigate(["/adults/"+this.toc])}},{key:"goToDash",value:function(){this.router.navigate(["/adults/adult-dashboard"])}},{key:"goToAudio",value:function(){this.urlT?this.router.navigate(["/adults/"+this.audioPage],{queryParams:{t:this.urlT}}):this.router.navigate(["/adults/"+this.audioPage])}},{key:"addNote",value:function(){this.service.submitJournal({JournalId:0,JDate:this.minDate,Title:"Module",Notes:this.note,UserId:this.userId}).subscribe(function(e){},function(e){console.log(e)},function(){})}},{key:"share",value:function(){this.ngNavigatorShareService.canShare()?(this.urlT?(console.log("url"),this.path="https://humanwisdom.me/course/#/"+this.address+"?t=".concat(this.urlT)):(console.log("local"),this.path="https://humanwisdom.me/course/#/"+this.address+"?t=".concat(this.token)),this.ngNavigatorShareService.share({title:"Human Wisdom Program",text:"Hey, check out the Human Wisdom Program",url:this.path}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})):alert("This service/api is not supported in your Browser")}},{key:"getProgress",value:function(e){var t=this;this.service.screenProgress(e).subscribe(function(e){t.progress=parseFloat(e),console.log(t.progress,"sessionProgress")})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Nb(n.g),r.Nb(i.a),r.Nb(c.a))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-transcript-header"]],inputs:{bookmark:"bookmark",bg:"bg",path:"path",toc:"toc",dashboard:"dashboard",audioPage:"audioPage"},outputs:{sendBookmark:"sendBookmark"},decls:21,vars:3,consts:[["class","top_nav ml0 ctopnav prelative",4,"ngIf"],["id","exampleModalCenter","tabindex","-1","role","dialog","aria-labelledby","exampleModalCenterTitle","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered","modal_note_journal"],[1,"modal-content"],[1,"modal-body"],[1,"row","pt20px","pb30px"],[1,"col-md-12","col-sm-12","col-xs-12","p0"],["id","message","required","required","name","message","rows","12","placeholder","Write your answer here",1,"form-control","txt19","p30_20px",3,"ngModel","ngModelChange"],[1,"row","center_flex","flex_wrap"],[1,"col-md-3","col-sm-3","col-xs-12","tcenter"],["routerLink","/adults/framework/cm-p973"],["type","button","data-dismiss","modal",1,"btn","btn-success","mb0","btn_add_note_journal",3,"click"],["type","button","data-dismiss","modal",1,"btn","btn-default","mb0","w100","btn_skip","txt5","tcenter"],[1,"top_nav","ml0","ctopnav","prelative"],[1,"nav_menu","cnav_menu","p20px","mb0px","tn_padding","nav_menu_01"],[1,"flex_ai"],[1,"nav","navbar-nav","navbar-right","cnav","navleft","w40p","no_bg"],[1,""],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle","p0",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dashboard.svg","alt","",1,"p0"],["class","cuser-profile dropdown-toggle p0","data-toggle","dropdown","aria-expanded","false",3,"click",4,"ngIf"],[1,"nav","navbar-nav","navbar-right","cnav","navcenter","w20p","nbg_white"],[1,"mr0px"],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/audio.svg","alt","",1,"p0"],[1,"nav","navbar-nav","navbar-right","cnav","w40p","no_bg"],["href","javascript:;",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/share_opaque.svg","alt","",1,"p0"],[1,"dropdown-menu","dropdown-usermenu","pull-right","course_ul"],["class","center_flex_li",4,"ngIf"],["href","javascript:;","data-toggle","modal","data-target","#exampleModalCenter",1,"cuser-profile","dropdown-toggle","p0"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/edit.svg","alt","",1,"p0"],["href","javascript:;","class","cuser-profile dropdown-toggle p0","data-toggle","dropdown","aria-expanded","false",3,"click",4,"ngIf"],[1,"col-md-12","col-sm-12","col-xs-12","p0","hprogressdiv"],[1,"progress","progress-sm","hprogress"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/toc.svg","alt","",1,"p0"],[1,"center_flex_li"],[3,"include","url"],["href","javascript:;","data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle","p0",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/bookmark_course.svg","alt","",1,"p0"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/bookmark_course_active.svg","alt","",1,"p0"]],template:function(e,t){1&e&&(r.Bc(0,m,29,6,"div",0),r.Bc(1,S,15,1,"div",0),r.Sb(2,"div",1),r.Sb(3,"div",2),r.Sb(4,"div",3),r.Sb(5,"div",4),r.Sb(6,"form"),r.Sb(7,"div",5),r.Sb(8,"div",6),r.Sb(9,"textarea",7),r.ac("ngModelChange",function(e){return t.note=e}),r.Rb(),r.Rb(),r.Rb(),r.Sb(10,"div",8),r.Sb(11,"div",9),r.Sb(12,"a",10),r.Sb(13,"button",11),r.ac("click",function(){return t.addNote()}),r.Dc(14,"Add Note to Journal"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Ob(15,"br"),r.Sb(16,"div",8),r.Sb(17,"div",9),r.Sb(18,"a"),r.Sb(19,"button",12),r.Dc(20,"Skip"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&e&&(r.lc("ngIf",!t.shared),r.Ab(1),r.lc("ngIf",t.shared),r.Ab(8),r.lc("ngModel",t.note))},directives:[l.l,u.t,u.k,u.l,u.b,u.q,u.j,u.m,n.j,b.a],styles:[""]}),t}()},"0rXf":function(t,o,a){"use strict";a.d(o,"a",function(){return g});var r=a("fXoL"),n=a("6RAO"),i=a("Hvql"),c=a("tyNb"),l=a("ofXK"),u=a("3Pt+"),b=a("6SFz"),d=["audio"],h=["screen"],g=function(){var t=function(){function t(s,o,a,n){var i=this;e(this,t),this.captureService=s,this.service=o,this.router=a,this.url=n,this.yellow="#FFC455",this.sendAvDuration=new r.o,this.mediaPercent=JSON.parse(localStorage.getItem("mediaPercent")),this.loginResponse=JSON.parse(localStorage.getItem("loginResponse")),this.freeScreens=JSON.parse(localStorage.getItem("freeScreens")),this.url.queryParams.subscribe(function(e){i.t=e.t})}return s(t,[{key:"ngOnInit",value:function(){var e,t=this,s=(e=this.router.url).lastIndexOf("/");e=e.substring(s+2),this.scrId=e,console.log("str",e,"id",this.scrId),this.service.mediaPercent(this.scrId).subscribe(function(e){t.mediaPercent=e[0].MediaPrcnt,console.log("media duration",t.mediaPercent)}),console.log(this.audioLink,this.mediaPercent,this.loginResponse),s=(e=this.router.url).lastIndexOf("/"),e=e.substring(s+2),this.scrId=e,console.log("str",e,"id",this.scrId),1!=this.loginResponse.Subscriber&&(this.freeScreens.includes(parseInt(this.scrId))||(this.interval=setInterval(function(){return t.checkPauseTime()},1e3)))}},{key:"getTime",value:function(){console.log(this.audio),console.log(this.audio.audio.nativeElement.currentTime),this.sendAvDuration.emit(JSON.parse(this.audio.audio.nativeElement.currentTime))}},{key:"checkPauseTime",value:function(){console.log(this.loginResponse.Subscriber,"subs"),console.log("checking to pause"),this.pauseTime=this.mediaPercent/100*this.audio.audio.nativeElement.duration,console.log(this.pauseTime,"p"),this.audio.audio.nativeElement.currentTime>this.pauseTime&&(this.audio.audio.nativeElement.pause(),window.alert("You Have Reached Free Limit"))}},{key:"ngOnDestroy",value:function(){this.interval&&clearInterval(this.interval)}},{key:"ngAfterViewInit",value:function(){var e=this;console.log("test bookmarks"),this.captureService.getImage(this.screen.nativeElement,!0).toPromise().then(function(t){t=t.substring(t.indexOf(",")+1),console.log(t),e.service.UploadThumbnail({ScrNo:e.scrId,byteArray:t}).subscribe(function(e){console.log(e)})})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Nb(n.b),r.Nb(i.a),r.Nb(c.g),r.Nb(c.a))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-audio-content"]],viewQuery:function(e,t){var s;(1&e&&(r.Hc(d,1),r.Hc(h,3)),2&e)&&(r.tc(s=r.bc())&&(t.audio=s.first),r.tc(s=r.bc())&&(t.screen=s.first))},inputs:{bg:"bg",title:"title",audioLink:"audioLink"},outputs:{sendAvDuration:"sendAvDuration"},decls:14,vars:4,consts:[["role","main",1,"right_col",3,"ngClass"],["screen",""],[1,"cw100p","dabsolute_01"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0","h100p","center_flex"],[1,"x_panel","xpanel_01"],[1,"x_content","tcenter"],[1,"txt1","tcenter"],[1,"row","tcenter"],[1,"col-md-12","col-sm-12","col-xs-12","p7rem"],["id","aud1",3,"strokeColor","source","click"],["audio",""]],template:function(e,t){1&e&&(r.Sb(0,"div",0,1),r.Sb(2,"div",2),r.Sb(3,"div",3),r.Sb(4,"div",4),r.Sb(5,"div",5),r.Sb(6,"div",6),r.Sb(7,"form"),r.Sb(8,"h1",7),r.Dc(9),r.Rb(),r.Sb(10,"div",8),r.Sb(11,"div",9),r.Sb(12,"ngx-circular-player",10,11),r.ac("click",function(){return t.getTime()}),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&e&&(r.lc("ngClass",t.bg),r.Ab(9),r.Fc(" ",t.title," "),r.Ab(3),r.lc("strokeColor",t.yellow)("source",t.audioLink))},directives:[l.j,u.t,u.k,u.l,b.a],styles:[""]}),t}()},GSBt:function(t,o,a){"use strict";a.d(o,"a",function(){return d});var r=a("fXoL"),n=a("6RAO"),i=a("Hvql"),c=a("tyNb"),l=a("ofXK"),u=["screen"],b=["*"],d=function(){var t=function(){function t(s,o,a){e(this,t),this.captureService=s,this.service=o,this.next=a}return s(t,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var e=this;console.log("test bookmarks");var t=this.next.routeConfig.path;this.scrId=t.substring(1,t.length+1),this.captureService.getImage(this.screen.nativeElement,!0).toPromise().then(function(t){t=t.substring(t.indexOf(",")+1),console.log(t),e.service.UploadThumbnail({ScrNo:e.scrId,byteArray:t}).subscribe(function(e){console.log(e)})})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Nb(n.b),r.Nb(i.a),r.Nb(c.a))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-transcript-content"]],viewQuery:function(e,t){var s;(1&e&&r.Hc(u,3),2&e)&&(r.tc(s=r.bc())&&(t.screen=s.first))},inputs:{bg:"bg"},ngContentSelectors:b,decls:8,vars:1,consts:[["role","main",1,"right_col",3,"ngClass"],["screen",""],[1,"cw100p","dabsolute_01"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0","h100p"],[1,"x_panel","xpanel_01"],[1,"x_content","tcenter"]],template:function(e,t){1&e&&(r.kc(),r.Sb(0,"div",0,1),r.Sb(2,"div",2),r.Sb(3,"div",3),r.Sb(4,"div",4),r.Sb(5,"div",5),r.Sb(6,"div",6),r.jc(7),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&e&&r.lc("ngClass",t.bg)},directives:[l.j],styles:[""]}),t}()},cXLa:function(t,o,a){"use strict";a.d(o,"a",function(){return w});var r=a("fXoL"),n=a("tyNb"),i=a("Hvql"),c=a("USy8"),l=a("ofXK"),u=a("3Pt+"),b=a("pj/B");function d(e,t){if(1&e){var s=r.Tb();r.Sb(0,"a",18),r.ac("click",function(){return r.wc(s),r.ec(2).goToToc()}),r.Ob(1,"img",35),r.Rb()}}function h(e,t){if(1&e){var s=r.Tb();r.Sb(0,"a",36),r.ac("click",function(){return r.wc(s),r.ec(2).goToTranscript()}),r.Ob(1,"img",37),r.Rb()}}var g=function(){return["whatsapp","facebook","linkedin"]};function p(e,t){if(1&e&&(r.Sb(0,"div",38),r.Ob(1,"share-buttons",39),r.Rb()),2&e){var s=r.ec(2);r.Ab(1),r.lc("include",r.oc(2,g))("url",s.path)}}function v(e,t){if(1&e){var s=r.Tb();r.Sb(0,"a",40),r.ac("click",function(){return r.wc(s),r.ec(2).toggleBookmark()}),r.Ob(1,"img",41),r.Rb()}}function m(e,t){if(1&e){var s=r.Tb();r.Sb(0,"a",40),r.ac("click",function(){return r.wc(s),r.ec(2).toggleBookmark()}),r.Ob(1,"img",42),r.Rb()}}function f(e,t){if(1&e){var s=r.Tb();r.Sb(0,"div",13),r.Sb(1,"div",14),r.Sb(2,"nav",15),r.Sb(3,"ul",16),r.Sb(4,"li",17),r.Sb(5,"a",18),r.ac("click",function(){return r.wc(s),r.ec().goToDash()}),r.Ob(6,"img",19),r.Rb(),r.Rb(),r.Sb(7,"li",17),r.Bc(8,d,2,0,"a",20),r.Rb(),r.Rb(),r.Sb(9,"ul",21),r.Sb(10,"li",22),r.Bc(11,h,2,0,"a",23),r.Rb(),r.Rb(),r.Sb(12,"ul",24),r.Sb(13,"li",17),r.Sb(14,"a",25),r.ac("click",function(){return r.wc(s),r.ec().share()}),r.Ob(15,"img",26),r.Rb(),r.Sb(16,"ul",27),r.Sb(17,"li"),r.Bc(18,p,2,3,"div",28),r.Rb(),r.Rb(),r.Rb(),r.Sb(19,"li",17),r.Sb(20,"a",29),r.Ob(21,"img",30),r.Rb(),r.Rb(),r.Sb(22,"li",22),r.Bc(23,v,2,0,"a",31),r.Bc(24,m,2,0,"a",31),r.Rb(),r.Rb(),r.Sb(25,"div",32),r.Sb(26,"div",33),r.Ob(27,"div",34),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb()}if(2&e){var o=r.ec();r.Ab(8),r.lc("ngIf",o.toc),r.Ab(3),r.lc("ngIf",o.transcriptPage),r.Ab(7),r.lc("ngIf",o.socialShare),r.Ab(5),r.lc("ngIf",!o.bookmark),r.Ab(1),r.lc("ngIf",o.bookmark),r.Ab(3),r.Ac("width",o.progress+"%")}}function S(e,t){if(1&e&&(r.Sb(0,"div",38),r.Ob(1,"share-buttons",39),r.Rb()),2&e){var s=r.ec(2);r.Ab(1),r.lc("include",r.oc(2,g))("url",s.path)}}function k(e,t){if(1&e){var s=r.Tb();r.Sb(0,"div",13),r.Sb(1,"div",14),r.Sb(2,"nav",15),r.Ob(3,"ul",16),r.Sb(4,"ul",21),r.Sb(5,"li",22),r.Sb(6,"a",36),r.ac("click",function(){return r.wc(s),r.ec().goToTranscript()}),r.Ob(7,"img",37),r.Rb(),r.Rb(),r.Rb(),r.Sb(8,"ul",24),r.Sb(9,"li",22),r.Sb(10,"a",25),r.ac("click",function(){return r.wc(s),r.ec().share()}),r.Ob(11,"img",26),r.Rb(),r.Sb(12,"ul",27),r.Sb(13,"li"),r.Bc(14,S,2,3,"div",28),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb()}if(2&e){var o=r.ec();r.Ab(14),r.lc("ngIf",o.socialShare)}}var w=function(){var t=function(){function t(s,o,a){var n;e(this,t),this.router=s,this.service=o,this.ngNavigatorShareService=a,this.t=new Date,this.minDate=this.t.getFullYear()+"-"+this.addZero(this.t.getMonth()+1)+"-"+this.addZero(this.t.getDate()),this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.shared=!1,this.token=JSON.parse(localStorage.getItem("token")),this.socialShare=!1,this.address=this.router.url,this.sendBookmark=new r.o,this.urlT=null===(n=this.router.getCurrentNavigation())||void 0===n?void 0:n.extractedUrl.queryParams.t,this.ngNavigatorShareService=a}return s(t,[{key:"ngOnInit",value:function(){this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),console.log(this.transcriptPage,this.toc,this.token);var e=this.path.lastIndexOf("/");this.scrNumber=this.path.substring(e+2),console.log(this.scrNumber),this.getProgress(this.scrNumber),this.urlT&&(this.shared=!0,this.socialShare=!0)}},{key:"toggleBookmark",value:function(){this.bookmark=!this.bookmark,console.log(this.bookmark),this.sendBookmark.emit(JSON.stringify(this.bookmark))}},{key:"addZero",value:function(e){return e<10&&(e="0"+e),e}},{key:"addToken",value:function(){this.socialShare=!0,this.urlT?(console.log("url"),this.path="https://humanwisdom.me/course/#/"+this.address+"?t=".concat(this.urlT)):(console.log("local"),this.path="https://humanwisdom.me/course/#/"+this.address+"?t=".concat(this.token)),console.log(this.path)}},{key:"courseNote",value:function(){this.router.navigate(["/adults/coursenote",{path:this.path}])}},{key:"goToToc",value:function(){this.router.navigate(["/adults/"+this.toc])}},{key:"goToDash",value:function(){this.router.navigate(["/adults/adult-dashboard"])}},{key:"goToTranscript",value:function(){this.urlT?this.router.navigate(["/adults/"+this.transcriptPage],{queryParams:{t:this.urlT}}):this.router.navigate(["/adults/"+this.transcriptPage])}},{key:"addNote",value:function(){this.service.submitJournal({JournalId:0,JDate:this.minDate,Title:"Module",Notes:this.note,UserId:this.userId}).subscribe(function(e){},function(e){console.log(e)},function(){})}},{key:"share",value:function(){this.ngNavigatorShareService.canShare()?(this.urlT?(console.log("url"),this.path="https://humanwisdom.me/course/#/"+this.address+"?t=".concat(this.urlT)):(console.log("local"),this.path="https://humanwisdom.me/course/#/"+this.address+"?t=".concat(this.token)),this.ngNavigatorShareService.share({title:"Human Wisdom Program",text:"Hey, check out the Human Wisdom Program",url:this.path}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})):alert("This service/api is not supported in your Browser")}},{key:"getProgress",value:function(e){var t=this;this.service.screenProgress(e).subscribe(function(e){t.progress=parseFloat(e),console.log(t.progress,"sessionProgress")})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Nb(n.g),r.Nb(i.a),r.Nb(c.a))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-audio-header"]],inputs:{bookmark:"bookmark",bg:"bg",path:"path",toc:"toc",dashboard:"dashboard",transcriptPage:"transcriptPage"},outputs:{sendBookmark:"sendBookmark"},decls:21,vars:3,consts:[["class","top_nav ml0 ctopnav prelative",4,"ngIf"],["id","exampleModalCenter","tabindex","-1","role","dialog","aria-labelledby","exampleModalCenterTitle","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered","modal_note_journal"],[1,"modal-content"],[1,"modal-body"],[1,"row","pt20px","pb30px"],[1,"col-md-12","col-sm-12","col-xs-12","p0"],["id","message","required","required","name","message","rows","12","placeholder","Write your thoughts here(Your notes can only be seen by you)",1,"form-control","txt19","p30_20px",3,"ngModel","ngModelChange"],[1,"row","center_flex","flex_wrap"],[1,"col-md-3","col-sm-3","col-xs-12","tcenter"],["routerLink","/adults/framework/cm-p973"],["type","button","data-dismiss","modal",1,"btn","btn-success","mb0","btn_add_note_journal",3,"click"],["type","button","data-dismiss","modal",1,"btn","btn-default","mb0","w100","btn_skip","txt5","tcenter"],[1,"top_nav","ml0","ctopnav","prelative"],[1,"nav_menu","cnav_menu","p20px","mb0px","tn_padding","nav_menu_01"],[1,"flex_ai"],[1,"nav","navbar-nav","navbar-right","cnav","navleft","w40p","no_bg"],[1,""],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle","p0",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dashboard.svg","alt","",1,"p0"],["class","cuser-profile dropdown-toggle p0","data-toggle","dropdown","aria-expanded","false",3,"click",4,"ngIf"],[1,"nav","navbar-nav","navbar-right","cnav","navcenter","w20p","nbg_white"],[1,"mr0px"],["class","cuser-profile dropdown-toggle","data-toggle","dropdown","aria-expanded","false",3,"click",4,"ngIf"],[1,"nav","navbar-nav","navbar-right","cnav","w40p","no_bg"],["href","javascript:;",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/share_opaque.svg","alt","",1,"p0"],[1,"dropdown-menu","dropdown-usermenu","pull-right","course_ul"],["class","center_flex_li",4,"ngIf"],["href","javascript:;","data-toggle","modal","data-target","#exampleModalCenter",1,"cuser-profile","dropdown-toggle","p0"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/edit.svg","alt","",1,"p0"],["href","javascript:;","class","cuser-profile dropdown-toggle p0","data-toggle","dropdown","aria-expanded","false",3,"click",4,"ngIf"],[1,"col-md-12","col-sm-12","col-xs-12","p0","hprogressdiv"],[1,"progress","progress-sm","hprogress"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/toc.svg","alt","",1,"p0"],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/transcript.svg","alt","",1,"p0"],[1,"center_flex_li"],[3,"include","url"],["href","javascript:;","data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle","p0",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/bookmark_course.svg","alt","",1,"p0"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/bookmark_course_active.svg","alt","",1,"p0"]],template:function(e,t){1&e&&(r.Bc(0,f,28,7,"div",0),r.Bc(1,k,15,1,"div",0),r.Sb(2,"div",1),r.Sb(3,"div",2),r.Sb(4,"div",3),r.Sb(5,"div",4),r.Sb(6,"form"),r.Sb(7,"div",5),r.Sb(8,"div",6),r.Sb(9,"textarea",7),r.ac("ngModelChange",function(e){return t.note=e}),r.Rb(),r.Rb(),r.Rb(),r.Sb(10,"div",8),r.Sb(11,"div",9),r.Sb(12,"a",10),r.Sb(13,"button",11),r.ac("click",function(){return t.addNote()}),r.Dc(14,"Add Note to Journal"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Ob(15,"br"),r.Sb(16,"div",8),r.Sb(17,"div",9),r.Sb(18,"a"),r.Sb(19,"button",12),r.Dc(20,"Skip"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&e&&(r.lc("ngIf",!t.shared),r.Ab(1),r.lc("ngIf",t.shared),r.Ab(8),r.lc("ngModel",t.note))},directives:[l.l,u.t,u.k,u.l,u.b,u.q,u.j,u.m,n.j,b.a],styles:[""]}),t}()},stmh:function(t,o,a){"use strict";a.d(o,"a",function(){return d});var r=a("fXoL"),n=a("6RAO"),i=a("Hvql"),c=a("tyNb"),l=a("ofXK"),u=["screen"],b=["*"],d=function(){var t=function(){function t(s,o,a){e(this,t),this.captureService=s,this.aservice=o,this.router=a,this.nextEmitter=new r.o}return s(t,[{key:"ngOnInit",value:function(){this.path=this.router.url;var e=this.path.replace(/\D/g,"");this.scrId=e,this.scrId=this.scrId.parseInt(),console.log("str","id",this.scrId)}},{key:"next",value:function(){this.nextEmitter.emit()}},{key:"ngAfterViewInit",value:function(){var e=this;this.captureService.getImage(this.screen.nativeElement,!0).toPromise().then(function(t){t=t.substring(t.indexOf(",")+1),console.log(t),e.aservice.UploadThumbnail({ScrNo:e.scrId,byteArray:t}).subscribe(function(e){console.log(e)})})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Nb(n.b),r.Nb(i.a),r.Nb(c.g))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-tap-start"]],viewQuery:function(e,t){var s;(1&e&&r.Hc(u,3),2&e)&&(r.tc(s=r.bc())&&(t.screen=s.first))},inputs:{bg:"bg"},outputs:{nextEmitter:"nextEmitter"},ngContentSelectors:b,decls:14,vars:1,consts:[["role","main",1,"right_col",3,"ngClass"],["screen",""],[1,"cw100p","dabsolute_01"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0","h100p"],[1,"x_panel","xpanel_01"],[1,"x_content"],[1,"row","tcenter","absolute_bottom"],[1,"col-md-12","col-sm-12","col-xs-12"],[1,"pulse-button",3,"click"],[1,"session_no","jc_center","tts"]],template:function(e,t){1&e&&(r.kc(),r.Sb(0,"div",0,1),r.Sb(2,"div",2),r.Sb(3,"div",3),r.Sb(4,"div",4),r.Sb(5,"div",5),r.Sb(6,"div",6),r.jc(7),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(8,"div",7),r.Sb(9,"div",8),r.Sb(10,"a",9),r.ac("click",function(){return t.next()}),r.Rb(),r.Rb(),r.Sb(11,"div",8),r.Sb(12,"h6",10),r.Dc(13," Tap to Start "),r.Rb(),r.Rb(),r.Rb()),2&e&&r.lc("ngClass",t.bg)},directives:[l.j],styles:[""]}),t}()}}])}();