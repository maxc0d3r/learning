(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0RLX":function(e,t,s){"use strict";s.d(t,"a",function(){return S});var o=s("fXoL"),a=s("tyNb"),r=s("Hvql"),i=s("USy8"),n=s("ofXK"),c=s("3Pt+"),l=s("pj/B");function b(e,t){if(1&e){const e=o.Tb();o.Sb(0,"a",18),o.ac("click",function(){return o.wc(e),o.ec(2).goToToc()}),o.Ob(1,"img",36),o.Rb()}}const d=function(){return["whatsapp","facebook","linkedin"]};function u(e,t){if(1&e&&(o.Sb(0,"div",37),o.Ob(1,"share-buttons",38),o.Rb()),2&e){const e=o.ec(2);o.Ab(1),o.lc("include",o.oc(2,d))("url",e.path)}}function h(e,t){if(1&e){const e=o.Tb();o.Sb(0,"a",39),o.ac("click",function(){return o.wc(e),o.ec(2).toggleBookmark()}),o.Ob(1,"img",40),o.Rb()}}function g(e,t){if(1&e){const e=o.Tb();o.Sb(0,"a",39),o.ac("click",function(){return o.wc(e),o.ec(2).toggleBookmark()}),o.Ob(1,"img",41),o.Rb()}}function p(e,t){if(1&e){const e=o.Tb();o.Sb(0,"div",13),o.Sb(1,"div",14),o.Sb(2,"nav",15),o.Sb(3,"ul",16),o.Sb(4,"li",17),o.Sb(5,"a",18),o.ac("click",function(){return o.wc(e),o.ec().goToDash()}),o.Ob(6,"img",19),o.Rb(),o.Rb(),o.Sb(7,"li",17),o.Bc(8,b,2,0,"a",20),o.Rb(),o.Rb(),o.Sb(9,"ul",21),o.Sb(10,"li",22),o.Sb(11,"a",23),o.ac("click",function(){return o.wc(e),o.ec().goToAudio()}),o.Ob(12,"img",24),o.Rb(),o.Rb(),o.Rb(),o.Sb(13,"ul",25),o.Sb(14,"li",17),o.Sb(15,"a",26),o.ac("click",function(){return o.wc(e),o.ec().share()}),o.Ob(16,"img",27),o.Rb(),o.Sb(17,"ul",28),o.Sb(18,"li"),o.Bc(19,u,2,3,"div",29),o.Rb(),o.Rb(),o.Rb(),o.Sb(20,"li",17),o.Sb(21,"a",30),o.Ob(22,"img",31),o.Rb(),o.Rb(),o.Sb(23,"li",22),o.Bc(24,h,2,0,"a",32),o.Bc(25,g,2,0,"a",32),o.Rb(),o.Rb(),o.Sb(26,"div",33),o.Sb(27,"div",34),o.Ob(28,"div",35),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()}if(2&e){const e=o.ec();o.Ab(8),o.lc("ngIf",e.toc),o.Ab(11),o.lc("ngIf",e.socialShare),o.Ab(5),o.lc("ngIf",!e.bookmark),o.Ab(1),o.lc("ngIf",e.bookmark),o.Ab(3),o.Ac("width",e.progress+"%")}}function m(e,t){if(1&e&&(o.Sb(0,"div",37),o.Ob(1,"share-buttons",38),o.Rb()),2&e){const e=o.ec(2);o.Ab(1),o.lc("include",o.oc(2,d))("url",e.path)}}function v(e,t){if(1&e){const e=o.Tb();o.Sb(0,"div",13),o.Sb(1,"div",14),o.Sb(2,"nav",15),o.Ob(3,"ul",16),o.Sb(4,"ul",21),o.Sb(5,"li",22),o.Sb(6,"a",23),o.ac("click",function(){return o.wc(e),o.ec().goToAudio()}),o.Ob(7,"img",24),o.Rb(),o.Rb(),o.Rb(),o.Sb(8,"ul",25),o.Sb(9,"li",22),o.Sb(10,"a",26),o.ac("click",function(){return o.wc(e),o.ec().share()}),o.Ob(11,"img",27),o.Rb(),o.Sb(12,"ul",28),o.Sb(13,"li"),o.Bc(14,m,2,3,"div",29),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()}if(2&e){const e=o.ec();o.Ab(14),o.lc("ngIf",e.socialShare)}}let S=(()=>{class e{constructor(e,t,s){this.router=e,this.service=t,this.ngNavigatorShareService=s,this.sendBookmark=new o.o,this.t=new Date,this.minDate=this.t.getFullYear()+"-"+this.addZero(this.t.getMonth()+1)+"-"+this.addZero(this.t.getDate()),this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.shared=!1,this.token=JSON.parse(localStorage.getItem("token")),this.socialShare=!1,this.address=this.router.url,this.urlT=this.router.getCurrentNavigation().extractedUrl.queryParams.t,this.ngNavigatorShareService=s}ngOnInit(){var e=this.path.lastIndexOf("/");this.scrNumber=this.path.substring(e+2),this.scrNumber=this.scrNumber.replace(/\D/g,""),console.log(this.scrNumber),this.getProgress(this.scrNumber),this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),console.log(this.toc,this.audioPage),this.urlT&&(this.shared=!0,this.socialShare=!0)}addZero(e){return e<10&&(e="0"+e),e}addToken(){this.socialShare=!0,this.urlT?(console.log("url"),this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.urlT}`):(console.log("local"),this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.token}`),console.log(this.path)}toggleBookmark(){this.bookmark=!this.bookmark,console.log(this.bookmark),this.sendBookmark.emit(JSON.stringify(this.bookmark))}courseNote(){this.router.navigate(["/adults/coursenote",{path:this.path}])}goToToc(){this.router.navigate(["/adults/"+this.toc])}goToDash(){this.router.navigate(["/adults/adult-dashboard"])}goToAudio(){this.urlT?this.router.navigate(["/adults/"+this.audioPage],{queryParams:{t:this.urlT}}):this.router.navigate(["/adults/"+this.audioPage])}addNote(){this.service.submitJournal({JournalId:0,JDate:this.minDate,Title:"Module",Notes:this.note,UserId:this.userId}).subscribe(e=>{},e=>{console.log(e)},()=>{})}share(){this.ngNavigatorShareService.canShare()?(this.urlT?(console.log("url"),this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.urlT}`):(console.log("local"),this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.token}`),this.ngNavigatorShareService.share({title:"Human Wisdom Program",text:"Hey, check out the Human Wisdom Program",url:this.path}).then(e=>{console.log(e)}).catch(e=>{console.log(e)})):alert("This service/api is not supported in your Browser")}getProgress(e){this.service.screenProgress(e).subscribe(e=>{this.progress=parseFloat(e),console.log(this.progress,"sessionProgress")})}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(a.g),o.Nb(r.a),o.Nb(i.a))},e.\u0275cmp=o.Hb({type:e,selectors:[["app-transcript-header"]],inputs:{bookmark:"bookmark",bg:"bg",path:"path",toc:"toc",dashboard:"dashboard",audioPage:"audioPage"},outputs:{sendBookmark:"sendBookmark"},decls:21,vars:3,consts:[["class","top_nav ml0 ctopnav prelative",4,"ngIf"],["id","exampleModalCenter","tabindex","-1","role","dialog","aria-labelledby","exampleModalCenterTitle","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered","modal_note_journal"],[1,"modal-content"],[1,"modal-body"],[1,"row","pt20px","pb30px"],[1,"col-md-12","col-sm-12","col-xs-12","p0"],["id","message","required","required","name","message","rows","12","placeholder","Write your answer here",1,"form-control","txt19","p30_20px",3,"ngModel","ngModelChange"],[1,"row","center_flex","flex_wrap"],[1,"col-md-3","col-sm-3","col-xs-12","tcenter"],["routerLink","/adults/framework/cm-p973"],["type","button","data-dismiss","modal",1,"btn","btn-success","mb0","btn_add_note_journal",3,"click"],["type","button","data-dismiss","modal",1,"btn","btn-default","mb0","w100","btn_skip","txt5","tcenter"],[1,"top_nav","ml0","ctopnav","prelative"],[1,"nav_menu","cnav_menu","p20px","mb0px","tn_padding","nav_menu_01"],[1,"flex_ai"],[1,"nav","navbar-nav","navbar-right","cnav","navleft","w40p","no_bg"],[1,""],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle","p0",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dashboard.svg","alt","",1,"p0"],["class","cuser-profile dropdown-toggle p0","data-toggle","dropdown","aria-expanded","false",3,"click",4,"ngIf"],[1,"nav","navbar-nav","navbar-right","cnav","navcenter","w20p","nbg_white"],[1,"mr0px"],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/audio.svg","alt","",1,"p0"],[1,"nav","navbar-nav","navbar-right","cnav","w40p","no_bg"],["href","javascript:;",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/share_opaque.svg","alt","",1,"p0"],[1,"dropdown-menu","dropdown-usermenu","pull-right","course_ul"],["class","center_flex_li",4,"ngIf"],["href","javascript:;","data-toggle","modal","data-target","#exampleModalCenter",1,"cuser-profile","dropdown-toggle","p0"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/edit.svg","alt","",1,"p0"],["href","javascript:;","class","cuser-profile dropdown-toggle p0","data-toggle","dropdown","aria-expanded","false",3,"click",4,"ngIf"],[1,"col-md-12","col-sm-12","col-xs-12","p0","hprogressdiv"],[1,"progress","progress-sm","hprogress"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/toc.svg","alt","",1,"p0"],[1,"center_flex_li"],[3,"include","url"],["href","javascript:;","data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle","p0",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/bookmark_course.svg","alt","",1,"p0"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/bookmark_course_active.svg","alt","",1,"p0"]],template:function(e,t){1&e&&(o.Bc(0,p,29,6,"div",0),o.Bc(1,v,15,1,"div",0),o.Sb(2,"div",1),o.Sb(3,"div",2),o.Sb(4,"div",3),o.Sb(5,"div",4),o.Sb(6,"form"),o.Sb(7,"div",5),o.Sb(8,"div",6),o.Sb(9,"textarea",7),o.ac("ngModelChange",function(e){return t.note=e}),o.Rb(),o.Rb(),o.Rb(),o.Sb(10,"div",8),o.Sb(11,"div",9),o.Sb(12,"a",10),o.Sb(13,"button",11),o.ac("click",function(){return t.addNote()}),o.Dc(14,"Add Note to Journal"),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Ob(15,"br"),o.Sb(16,"div",8),o.Sb(17,"div",9),o.Sb(18,"a"),o.Sb(19,"button",12),o.Dc(20,"Skip"),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&e&&(o.lc("ngIf",!t.shared),o.Ab(1),o.lc("ngIf",t.shared),o.Ab(8),o.lc("ngModel",t.note))},directives:[n.l,c.t,c.k,c.l,c.b,c.q,c.j,c.m,a.j,l.a],styles:[""]}),e})()},"0rXf":function(e,t,s){"use strict";s.d(t,"a",function(){return u});var o=s("fXoL"),a=s("6RAO"),r=s("Hvql"),i=s("tyNb"),n=s("ofXK"),c=s("3Pt+"),l=s("6SFz");const b=["audio"],d=["screen"];let u=(()=>{class e{constructor(e,t,s,a){this.captureService=e,this.service=t,this.router=s,this.url=a,this.yellow="#FFC455",this.sendAvDuration=new o.o,this.mediaPercent=JSON.parse(localStorage.getItem("mediaPercent")),this.loginResponse=JSON.parse(localStorage.getItem("loginResponse")),this.freeScreens=JSON.parse(localStorage.getItem("freeScreens")),this.url.queryParams.subscribe(e=>{this.t=e.t})}ngOnInit(){var e,t=(e=this.router.url).lastIndexOf("/");e=e.substring(t+2),this.scrId=e,console.log("str",e,"id",this.scrId),this.service.mediaPercent(this.scrId).subscribe(e=>{this.mediaPercent=e[0].MediaPrcnt,console.log("media duration",this.mediaPercent)}),console.log(this.audioLink,this.mediaPercent,this.loginResponse),t=(e=this.router.url).lastIndexOf("/"),e=e.substring(t+2),this.scrId=e,console.log("str",e,"id",this.scrId),1!=this.loginResponse.Subscriber&&(this.freeScreens.includes(parseInt(this.scrId))||(this.interval=setInterval(()=>this.checkPauseTime(),1e3)))}getTime(){console.log(this.audio),console.log(this.audio.audio.nativeElement.currentTime),this.sendAvDuration.emit(JSON.parse(this.audio.audio.nativeElement.currentTime))}checkPauseTime(){console.log(this.loginResponse.Subscriber,"subs"),console.log("checking to pause"),this.pauseTime=this.mediaPercent/100*this.audio.audio.nativeElement.duration,console.log(this.pauseTime,"p"),this.audio.audio.nativeElement.currentTime>this.pauseTime&&(this.audio.audio.nativeElement.pause(),window.alert("You Have Reached Free Limit"))}ngOnDestroy(){this.interval&&clearInterval(this.interval)}ngAfterViewInit(){console.log("test bookmarks"),this.captureService.getImage(this.screen.nativeElement,!0).toPromise().then(e=>{e=e.substring(e.indexOf(",")+1),console.log(e),this.service.UploadThumbnail({ScrNo:this.scrId,byteArray:e}).subscribe(e=>{console.log(e)})})}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(a.b),o.Nb(r.a),o.Nb(i.g),o.Nb(i.a))},e.\u0275cmp=o.Hb({type:e,selectors:[["app-audio-content"]],viewQuery:function(e,t){if(1&e&&(o.Hc(b,1),o.Hc(d,3)),2&e){let e;o.tc(e=o.bc())&&(t.audio=e.first),o.tc(e=o.bc())&&(t.screen=e.first)}},inputs:{bg:"bg",title:"title",audioLink:"audioLink"},outputs:{sendAvDuration:"sendAvDuration"},decls:14,vars:4,consts:[["role","main",1,"right_col",3,"ngClass"],["screen",""],[1,"cw100p","dabsolute_01"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0","h100p","center_flex"],[1,"x_panel","xpanel_01"],[1,"x_content","tcenter"],[1,"txt1","tcenter"],[1,"row","tcenter"],[1,"col-md-12","col-sm-12","col-xs-12","p7rem"],["id","aud1",3,"strokeColor","source","click"],["audio",""]],template:function(e,t){1&e&&(o.Sb(0,"div",0,1),o.Sb(2,"div",2),o.Sb(3,"div",3),o.Sb(4,"div",4),o.Sb(5,"div",5),o.Sb(6,"div",6),o.Sb(7,"form"),o.Sb(8,"h1",7),o.Dc(9),o.Rb(),o.Sb(10,"div",8),o.Sb(11,"div",9),o.Sb(12,"ngx-circular-player",10,11),o.ac("click",function(){return t.getTime()}),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&e&&(o.lc("ngClass",t.bg),o.Ab(9),o.Fc(" ",t.title," "),o.Ab(3),o.lc("strokeColor",t.yellow)("source",t.audioLink))},directives:[n.j,c.t,c.k,c.l,l.a],styles:[""]}),e})()},GSBt:function(e,t,s){"use strict";s.d(t,"a",function(){return b});var o=s("fXoL"),a=s("6RAO"),r=s("Hvql"),i=s("tyNb"),n=s("ofXK");const c=["screen"],l=["*"];let b=(()=>{class e{constructor(e,t,s){this.captureService=e,this.service=t,this.next=s}ngOnInit(){}ngAfterViewInit(){console.log("test bookmarks");let e=this.next.routeConfig.path;this.scrId=e.substring(1,e.length+1),this.captureService.getImage(this.screen.nativeElement,!0).toPromise().then(e=>{e=e.substring(e.indexOf(",")+1),console.log(e),this.service.UploadThumbnail({ScrNo:this.scrId,byteArray:e}).subscribe(e=>{console.log(e)})})}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(a.b),o.Nb(r.a),o.Nb(i.a))},e.\u0275cmp=o.Hb({type:e,selectors:[["app-transcript-content"]],viewQuery:function(e,t){if(1&e&&o.Hc(c,3),2&e){let e;o.tc(e=o.bc())&&(t.screen=e.first)}},inputs:{bg:"bg"},ngContentSelectors:l,decls:8,vars:1,consts:[["role","main",1,"right_col",3,"ngClass"],["screen",""],[1,"cw100p","dabsolute_01"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0","h100p"],[1,"x_panel","xpanel_01"],[1,"x_content","tcenter"]],template:function(e,t){1&e&&(o.kc(),o.Sb(0,"div",0,1),o.Sb(2,"div",2),o.Sb(3,"div",3),o.Sb(4,"div",4),o.Sb(5,"div",5),o.Sb(6,"div",6),o.jc(7),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&e&&o.lc("ngClass",t.bg)},directives:[n.j],styles:[""]}),e})()},cXLa:function(e,t,s){"use strict";s.d(t,"a",function(){return f});var o=s("fXoL"),a=s("tyNb"),r=s("Hvql"),i=s("USy8"),n=s("ofXK"),c=s("3Pt+"),l=s("pj/B");function b(e,t){if(1&e){const e=o.Tb();o.Sb(0,"a",18),o.ac("click",function(){return o.wc(e),o.ec(2).goToToc()}),o.Ob(1,"img",35),o.Rb()}}function d(e,t){if(1&e){const e=o.Tb();o.Sb(0,"a",36),o.ac("click",function(){return o.wc(e),o.ec(2).goToTranscript()}),o.Ob(1,"img",37),o.Rb()}}const u=function(){return["whatsapp","facebook","linkedin"]};function h(e,t){if(1&e&&(o.Sb(0,"div",38),o.Ob(1,"share-buttons",39),o.Rb()),2&e){const e=o.ec(2);o.Ab(1),o.lc("include",o.oc(2,u))("url",e.path)}}function g(e,t){if(1&e){const e=o.Tb();o.Sb(0,"a",40),o.ac("click",function(){return o.wc(e),o.ec(2).toggleBookmark()}),o.Ob(1,"img",41),o.Rb()}}function p(e,t){if(1&e){const e=o.Tb();o.Sb(0,"a",40),o.ac("click",function(){return o.wc(e),o.ec(2).toggleBookmark()}),o.Ob(1,"img",42),o.Rb()}}function m(e,t){if(1&e){const e=o.Tb();o.Sb(0,"div",13),o.Sb(1,"div",14),o.Sb(2,"nav",15),o.Sb(3,"ul",16),o.Sb(4,"li",17),o.Sb(5,"a",18),o.ac("click",function(){return o.wc(e),o.ec().goToDash()}),o.Ob(6,"img",19),o.Rb(),o.Rb(),o.Sb(7,"li",17),o.Bc(8,b,2,0,"a",20),o.Rb(),o.Rb(),o.Sb(9,"ul",21),o.Sb(10,"li",22),o.Bc(11,d,2,0,"a",23),o.Rb(),o.Rb(),o.Sb(12,"ul",24),o.Sb(13,"li",17),o.Sb(14,"a",25),o.ac("click",function(){return o.wc(e),o.ec().share()}),o.Ob(15,"img",26),o.Rb(),o.Sb(16,"ul",27),o.Sb(17,"li"),o.Bc(18,h,2,3,"div",28),o.Rb(),o.Rb(),o.Rb(),o.Sb(19,"li",17),o.Sb(20,"a",29),o.Ob(21,"img",30),o.Rb(),o.Rb(),o.Sb(22,"li",22),o.Bc(23,g,2,0,"a",31),o.Bc(24,p,2,0,"a",31),o.Rb(),o.Rb(),o.Sb(25,"div",32),o.Sb(26,"div",33),o.Ob(27,"div",34),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()}if(2&e){const e=o.ec();o.Ab(8),o.lc("ngIf",e.toc),o.Ab(3),o.lc("ngIf",e.transcriptPage),o.Ab(7),o.lc("ngIf",e.socialShare),o.Ab(5),o.lc("ngIf",!e.bookmark),o.Ab(1),o.lc("ngIf",e.bookmark),o.Ab(3),o.Ac("width",e.progress+"%")}}function v(e,t){if(1&e&&(o.Sb(0,"div",38),o.Ob(1,"share-buttons",39),o.Rb()),2&e){const e=o.ec(2);o.Ab(1),o.lc("include",o.oc(2,u))("url",e.path)}}function S(e,t){if(1&e){const e=o.Tb();o.Sb(0,"div",13),o.Sb(1,"div",14),o.Sb(2,"nav",15),o.Ob(3,"ul",16),o.Sb(4,"ul",21),o.Sb(5,"li",22),o.Sb(6,"a",36),o.ac("click",function(){return o.wc(e),o.ec().goToTranscript()}),o.Ob(7,"img",37),o.Rb(),o.Rb(),o.Rb(),o.Sb(8,"ul",24),o.Sb(9,"li",22),o.Sb(10,"a",25),o.ac("click",function(){return o.wc(e),o.ec().share()}),o.Ob(11,"img",26),o.Rb(),o.Sb(12,"ul",27),o.Sb(13,"li"),o.Bc(14,v,2,3,"div",28),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()}if(2&e){const e=o.ec();o.Ab(14),o.lc("ngIf",e.socialShare)}}let f=(()=>{class e{constructor(e,t,s){var a;this.router=e,this.service=t,this.ngNavigatorShareService=s,this.t=new Date,this.minDate=this.t.getFullYear()+"-"+this.addZero(this.t.getMonth()+1)+"-"+this.addZero(this.t.getDate()),this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.shared=!1,this.token=JSON.parse(localStorage.getItem("token")),this.socialShare=!1,this.address=this.router.url,this.sendBookmark=new o.o,this.urlT=null===(a=this.router.getCurrentNavigation())||void 0===a?void 0:a.extractedUrl.queryParams.t,this.ngNavigatorShareService=s}ngOnInit(){this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),console.log(this.transcriptPage,this.toc,this.token);var e=this.path.lastIndexOf("/");this.scrNumber=this.path.substring(e+2),console.log(this.scrNumber),this.getProgress(this.scrNumber),this.urlT&&(this.shared=!0,this.socialShare=!0)}toggleBookmark(){this.bookmark=!this.bookmark,console.log(this.bookmark),this.sendBookmark.emit(JSON.stringify(this.bookmark))}addZero(e){return e<10&&(e="0"+e),e}addToken(){this.socialShare=!0,this.urlT?(console.log("url"),this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.urlT}`):(console.log("local"),this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.token}`),console.log(this.path)}courseNote(){this.router.navigate(["/adults/coursenote",{path:this.path}])}goToToc(){this.router.navigate(["/adults/"+this.toc])}goToDash(){this.router.navigate(["/adults/adult-dashboard"])}goToTranscript(){this.urlT?this.router.navigate(["/adults/"+this.transcriptPage],{queryParams:{t:this.urlT}}):this.router.navigate(["/adults/"+this.transcriptPage])}addNote(){this.service.submitJournal({JournalId:0,JDate:this.minDate,Title:"Module",Notes:this.note,UserId:this.userId}).subscribe(e=>{},e=>{console.log(e)},()=>{})}share(){this.ngNavigatorShareService.canShare()?(this.urlT?(console.log("url"),this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.urlT}`):(console.log("local"),this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.token}`),this.ngNavigatorShareService.share({title:"Human Wisdom Program",text:"Hey, check out the Human Wisdom Program",url:this.path}).then(e=>{console.log(e)}).catch(e=>{console.log(e)})):alert("This service/api is not supported in your Browser")}getProgress(e){this.service.screenProgress(e).subscribe(e=>{this.progress=parseFloat(e),console.log(this.progress,"sessionProgress")})}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(a.g),o.Nb(r.a),o.Nb(i.a))},e.\u0275cmp=o.Hb({type:e,selectors:[["app-audio-header"]],inputs:{bookmark:"bookmark",bg:"bg",path:"path",toc:"toc",dashboard:"dashboard",transcriptPage:"transcriptPage"},outputs:{sendBookmark:"sendBookmark"},decls:21,vars:3,consts:[["class","top_nav ml0 ctopnav prelative",4,"ngIf"],["id","exampleModalCenter","tabindex","-1","role","dialog","aria-labelledby","exampleModalCenterTitle","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered","modal_note_journal"],[1,"modal-content"],[1,"modal-body"],[1,"row","pt20px","pb30px"],[1,"col-md-12","col-sm-12","col-xs-12","p0"],["id","message","required","required","name","message","rows","12","placeholder","Write your thoughts here(Your notes can only be seen by you)",1,"form-control","txt19","p30_20px",3,"ngModel","ngModelChange"],[1,"row","center_flex","flex_wrap"],[1,"col-md-3","col-sm-3","col-xs-12","tcenter"],["routerLink","/adults/framework/cm-p973"],["type","button","data-dismiss","modal",1,"btn","btn-success","mb0","btn_add_note_journal",3,"click"],["type","button","data-dismiss","modal",1,"btn","btn-default","mb0","w100","btn_skip","txt5","tcenter"],[1,"top_nav","ml0","ctopnav","prelative"],[1,"nav_menu","cnav_menu","p20px","mb0px","tn_padding","nav_menu_01"],[1,"flex_ai"],[1,"nav","navbar-nav","navbar-right","cnav","navleft","w40p","no_bg"],[1,""],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle","p0",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dashboard.svg","alt","",1,"p0"],["class","cuser-profile dropdown-toggle p0","data-toggle","dropdown","aria-expanded","false",3,"click",4,"ngIf"],[1,"nav","navbar-nav","navbar-right","cnav","navcenter","w20p","nbg_white"],[1,"mr0px"],["class","cuser-profile dropdown-toggle","data-toggle","dropdown","aria-expanded","false",3,"click",4,"ngIf"],[1,"nav","navbar-nav","navbar-right","cnav","w40p","no_bg"],["href","javascript:;",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/share_opaque.svg","alt","",1,"p0"],[1,"dropdown-menu","dropdown-usermenu","pull-right","course_ul"],["class","center_flex_li",4,"ngIf"],["href","javascript:;","data-toggle","modal","data-target","#exampleModalCenter",1,"cuser-profile","dropdown-toggle","p0"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/edit.svg","alt","",1,"p0"],["href","javascript:;","class","cuser-profile dropdown-toggle p0","data-toggle","dropdown","aria-expanded","false",3,"click",4,"ngIf"],[1,"col-md-12","col-sm-12","col-xs-12","p0","hprogressdiv"],[1,"progress","progress-sm","hprogress"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/toc.svg","alt","",1,"p0"],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/transcript.svg","alt","",1,"p0"],[1,"center_flex_li"],[3,"include","url"],["href","javascript:;","data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle","p0",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/bookmark_course.svg","alt","",1,"p0"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/bookmark_course_active.svg","alt","",1,"p0"]],template:function(e,t){1&e&&(o.Bc(0,m,28,7,"div",0),o.Bc(1,S,15,1,"div",0),o.Sb(2,"div",1),o.Sb(3,"div",2),o.Sb(4,"div",3),o.Sb(5,"div",4),o.Sb(6,"form"),o.Sb(7,"div",5),o.Sb(8,"div",6),o.Sb(9,"textarea",7),o.ac("ngModelChange",function(e){return t.note=e}),o.Rb(),o.Rb(),o.Rb(),o.Sb(10,"div",8),o.Sb(11,"div",9),o.Sb(12,"a",10),o.Sb(13,"button",11),o.ac("click",function(){return t.addNote()}),o.Dc(14,"Add Note to Journal"),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Ob(15,"br"),o.Sb(16,"div",8),o.Sb(17,"div",9),o.Sb(18,"a"),o.Sb(19,"button",12),o.Dc(20,"Skip"),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&e&&(o.lc("ngIf",!t.shared),o.Ab(1),o.lc("ngIf",t.shared),o.Ab(8),o.lc("ngModel",t.note))},directives:[n.l,c.t,c.k,c.l,c.b,c.q,c.j,c.m,a.j,l.a],styles:[""]}),e})()},stmh:function(e,t,s){"use strict";s.d(t,"a",function(){return b});var o=s("fXoL"),a=s("6RAO"),r=s("Hvql"),i=s("tyNb"),n=s("ofXK");const c=["screen"],l=["*"];let b=(()=>{class e{constructor(e,t,s){this.captureService=e,this.aservice=t,this.router=s,this.nextEmitter=new o.o}ngOnInit(){this.path=this.router.url;let e=this.path.replace(/\D/g,"");this.scrId=e,this.scrId=this.scrId.parseInt(),console.log("str","id",this.scrId)}next(){this.nextEmitter.emit()}ngAfterViewInit(){this.captureService.getImage(this.screen.nativeElement,!0).toPromise().then(e=>{e=e.substring(e.indexOf(",")+1),console.log(e),this.aservice.UploadThumbnail({ScrNo:this.scrId,byteArray:e}).subscribe(e=>{console.log(e)})})}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(a.b),o.Nb(r.a),o.Nb(i.g))},e.\u0275cmp=o.Hb({type:e,selectors:[["app-tap-start"]],viewQuery:function(e,t){if(1&e&&o.Hc(c,3),2&e){let e;o.tc(e=o.bc())&&(t.screen=e.first)}},inputs:{bg:"bg"},outputs:{nextEmitter:"nextEmitter"},ngContentSelectors:l,decls:14,vars:1,consts:[["role","main",1,"right_col",3,"ngClass"],["screen",""],[1,"cw100p","dabsolute_01"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0","h100p"],[1,"x_panel","xpanel_01"],[1,"x_content"],[1,"row","tcenter","absolute_bottom"],[1,"col-md-12","col-sm-12","col-xs-12"],[1,"pulse-button",3,"click"],[1,"session_no","jc_center","tts"]],template:function(e,t){1&e&&(o.kc(),o.Sb(0,"div",0,1),o.Sb(2,"div",2),o.Sb(3,"div",3),o.Sb(4,"div",4),o.Sb(5,"div",5),o.Sb(6,"div",6),o.jc(7),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(8,"div",7),o.Sb(9,"div",8),o.Sb(10,"a",9),o.ac("click",function(){return t.next()}),o.Rb(),o.Rb(),o.Sb(11,"div",8),o.Sb(12,"h6",10),o.Dc(13," Tap to Start "),o.Rb(),o.Rb(),o.Rb()),2&e&&o.lc("ngClass",t.bg)},directives:[n.j],styles:[""]}),e})()}}]);