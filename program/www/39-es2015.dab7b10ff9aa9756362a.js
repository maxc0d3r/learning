(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{H3pP:function(t,e,s){"use strict";s.d(e,"a",function(){return l});var o=s("fXoL"),r=s("tyNb"),a=s("Hvql"),i=s("ofXK");function n(t,e){if(1&t){const t=o.Tb();o.Sb(0,"div",1),o.Sb(1,"div",2),o.Sb(2,"div",3),o.Sb(3,"div",4),o.Sb(4,"a",5),o.ac("click",function(){return o.wc(t),o.ec().previous()}),o.Sb(5,"button",6),o.Dc(6,"Previous"),o.Rb(),o.Rb(),o.Rb(),o.Sb(7,"div",7),o.Sb(8,"a",5),o.ac("click",function(){return o.wc(t),o.ec().next()}),o.Sb(9,"button",8),o.Dc(10,"Next"),o.Rb(),o.Rb(),o.Rb(),o.Ob(11,"div",9),o.Rb(),o.Rb(),o.Rb()}if(2&t){const t=o.ec();o.lc("ngClass",t.bg)}}function c(t,e){if(1&t){const t=o.Tb();o.Sb(0,"div",1),o.Sb(1,"div",10),o.Sb(2,"div",11),o.Sb(3,"a",12),o.ac("click",function(){return o.wc(t),o.ec().routeDashboard()}),o.Sb(4,"button",13),o.Dc(5,"Explore the Human Wisdom Program"),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()}if(2&t){const t=o.ec();o.lc("ngClass",t.bg)}}let l=(()=>{class t{constructor(t,e,s){this.router=t,this.service=e,this.ac=s,this.nextEmitter=new o.o,this.previousEmitter=new o.o,this.shared=!1,this.router.getCurrentNavigation()&&(this.urlT=this.router.getCurrentNavigation().extractedUrl?this.router.getCurrentNavigation().extractedUrl.queryParams.t:"")}ngOnInit(){this.urlT&&(this.shared=!0)}next(){this.nextEmitter.emit()}previous(){this.previousEmitter.emit()}routeDashboard(){this.router.navigate(["/adults/adult-dashboard"])}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(r.g),o.Nb(a.a),o.Nb(r.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-course-footer"]],inputs:{bg:"bg"},outputs:{nextEmitter:"nextEmitter",previousEmitter:"previousEmitter"},decls:2,vars:2,consts:[["class","sidebar-footer hidden-small",3,"ngClass",4,"ngIf"],[1,"sidebar-footer","hidden-small",3,"ngClass"],[1,"row","lh5rem","center_flex"],[1,"col-lg-4","col-md-6","col-sm-12","col-xs-12","tcenter","center_flex","p0"],[1,"col-lg-4","col-md-4","col-sm-2","col-xs-4","btn_p0"],[3,"click"],["type","button",1,"btn","w100","mb0","btn_prev"],[1,"col-lg-4","col-md-4","col-sm-2","col-xs-6","p0"],["type","button",1,"btn","btn-default","w100","mb0","btn_next"],[1,"col-lg-4","col-md-4","col-sm-2","col-xs-4"],[1,"row","lh5rem"],[1,"col-md-12","col-sm-12","col-xs-12","tcenter","center_flex"],[1,"width_inherit",3,"click"],["type","button",1,"btn","btn-default","iw100","mb0","btn_next"]],template:function(t,e){1&t&&(o.Bc(0,n,12,1,"div",0),o.Bc(1,c,6,1,"div",0)),2&t&&(o.lc("ngIf",!e.shared),o.Ab(1),o.lc("ngIf",e.shared))},directives:[i.l,i.j],styles:[""]}),t})()},USy8:function(t,e,s){"use strict";s.d(e,"a",function(){return a});var o=s("mrSG"),r=s("fXoL");let a=(()=>{let t=class{constructor(){this.webNavigator=null,this.webNavigator=window.navigator}canShare(){return null!==this.webNavigator&&void 0!==this.webNavigator.share}canShareFile(t){return null!==this.webNavigator&&void 0!==this.webNavigator.share&&this.webNavigator.canShare({files:t})}share({title:t,text:e,url:s,files:r}){return new Promise((a,i)=>Object(o.a)(this,void 0,void 0,function*(){if(null!==this.webNavigator&&void 0!==this.webNavigator.share)if(null==e&&null==s)console.warn("text and url both can't be empty, at least provide either text or url");else try{const o={title:t,text:e,url:s};r&&0!==r.length&&(o.files=r),yield this.webNavigator.share(o),a({shared:!0})}catch(o){i({shared:!1,error:o})}else i({shared:!1,error:"This service/api is not supported in your Browser"})}))}};return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(r.Jb)({factory:function(){return new t},token:t,providedIn:"root"}),t=Object(o.b)([Object(o.d)("design:paramtypes",[])],t),t})()},cXLa:function(t,e,s){"use strict";s.d(e,"a",function(){return f});var o=s("fXoL"),r=s("tyNb"),a=s("Hvql"),i=s("USy8"),n=s("ofXK"),c=s("3Pt+"),l=s("pj/B");function b(t,e){if(1&t){const t=o.Tb();o.Sb(0,"a",18),o.ac("click",function(){return o.wc(t),o.ec(2).goToToc()}),o.Ob(1,"img",35),o.Rb()}}function d(t,e){if(1&t){const t=o.Tb();o.Sb(0,"a",36),o.ac("click",function(){return o.wc(t),o.ec(2).goToTranscript()}),o.Ob(1,"img",37),o.Rb()}}const u=function(){return["whatsapp","facebook","linkedin"]};function h(t,e){if(1&t&&(o.Sb(0,"div",38),o.Ob(1,"share-buttons",39),o.Rb()),2&t){const t=o.ec(2);o.Ab(1),o.lc("include",o.oc(2,u))("url",t.path)}}function m(t,e){if(1&t){const t=o.Tb();o.Sb(0,"a",40),o.ac("click",function(){return o.wc(t),o.ec(2).toggleBookmark()}),o.Ob(1,"img",41),o.Rb()}}function g(t,e){if(1&t){const t=o.Tb();o.Sb(0,"a",40),o.ac("click",function(){return o.wc(t),o.ec(2).toggleBookmark()}),o.Ob(1,"img",42),o.Rb()}}function p(t,e){if(1&t){const t=o.Tb();o.Sb(0,"div",13),o.Sb(1,"div",14),o.Sb(2,"nav",15),o.Sb(3,"ul",16),o.Sb(4,"li",17),o.Sb(5,"a",18),o.ac("click",function(){return o.wc(t),o.ec().goToDash()}),o.Ob(6,"img",19),o.Rb(),o.Rb(),o.Sb(7,"li",17),o.Bc(8,b,2,0,"a",20),o.Rb(),o.Rb(),o.Sb(9,"ul",21),o.Sb(10,"li",22),o.Bc(11,d,2,0,"a",23),o.Rb(),o.Rb(),o.Sb(12,"ul",24),o.Sb(13,"li",17),o.Sb(14,"a",25),o.ac("click",function(){return o.wc(t),o.ec().share()}),o.Ob(15,"img",26),o.Rb(),o.Sb(16,"ul",27),o.Sb(17,"li"),o.Bc(18,h,2,3,"div",28),o.Rb(),o.Rb(),o.Rb(),o.Sb(19,"li",17),o.Sb(20,"a",29),o.Ob(21,"img",30),o.Rb(),o.Rb(),o.Sb(22,"li",22),o.Bc(23,m,2,0,"a",31),o.Bc(24,g,2,0,"a",31),o.Rb(),o.Rb(),o.Sb(25,"div",32),o.Sb(26,"div",33),o.Ob(27,"div",34),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()}if(2&t){const t=o.ec();o.Ab(8),o.lc("ngIf",t.toc),o.Ab(3),o.lc("ngIf",t.transcriptPage),o.Ab(7),o.lc("ngIf",t.socialShare),o.Ab(5),o.lc("ngIf",!t.bookmark),o.Ab(1),o.lc("ngIf",t.bookmark),o.Ab(3),o.Ac("width",t.progress+"%")}}function v(t,e){if(1&t&&(o.Sb(0,"div",38),o.Ob(1,"share-buttons",39),o.Rb()),2&t){const t=o.ec(2);o.Ab(1),o.lc("include",o.oc(2,u))("url",t.path)}}function S(t,e){if(1&t){const t=o.Tb();o.Sb(0,"div",13),o.Sb(1,"div",14),o.Sb(2,"nav",15),o.Ob(3,"ul",16),o.Sb(4,"ul",21),o.Sb(5,"li",22),o.Sb(6,"a",36),o.ac("click",function(){return o.wc(t),o.ec().goToTranscript()}),o.Ob(7,"img",37),o.Rb(),o.Rb(),o.Rb(),o.Sb(8,"ul",24),o.Sb(9,"li",22),o.Sb(10,"a",25),o.ac("click",function(){return o.wc(t),o.ec().share()}),o.Ob(11,"img",26),o.Rb(),o.Sb(12,"ul",27),o.Sb(13,"li"),o.Bc(14,v,2,3,"div",28),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()}if(2&t){const t=o.ec();o.Ab(14),o.lc("ngIf",t.socialShare)}}let f=(()=>{class t{constructor(t,e,s){var r;this.router=t,this.service=e,this.ngNavigatorShareService=s,this.t=new Date,this.minDate=this.t.getFullYear()+"-"+this.addZero(this.t.getMonth()+1)+"-"+this.addZero(this.t.getDate()),this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.shared=!1,this.token=JSON.parse(localStorage.getItem("token")),this.socialShare=!1,this.address=this.router.url,this.sendBookmark=new o.o,this.urlT=null===(r=this.router.getCurrentNavigation())||void 0===r?void 0:r.extractedUrl.queryParams.t,this.ngNavigatorShareService=s}ngOnInit(){this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),console.log(this.transcriptPage,this.toc,this.token);var t=this.path.lastIndexOf("/");this.scrNumber=this.path.substring(t+2),console.log(this.scrNumber),this.getProgress(this.scrNumber),this.urlT&&(this.shared=!0,this.socialShare=!0)}toggleBookmark(){this.bookmark=!this.bookmark,console.log(this.bookmark),this.sendBookmark.emit(JSON.stringify(this.bookmark))}addZero(t){return t<10&&(t="0"+t),t}addToken(){this.socialShare=!0,this.urlT?(console.log("url"),this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.urlT}`):(console.log("local"),this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.token}`),console.log(this.path)}courseNote(){this.router.navigate(["/adults/coursenote",{path:this.path}])}goToToc(){this.router.navigate(["/adults/"+this.toc])}goToDash(){this.router.navigate(["/adults/adult-dashboard"])}goToTranscript(){this.urlT?this.router.navigate(["/adults/"+this.transcriptPage],{queryParams:{t:this.urlT}}):this.router.navigate(["/adults/"+this.transcriptPage])}addNote(){this.service.submitJournal({JournalId:0,JDate:this.minDate,Title:"Module",Notes:this.note,UserId:this.userId}).subscribe(t=>{},t=>{console.log(t)},()=>{})}share(){this.ngNavigatorShareService.canShare()?(this.urlT?(console.log("url"),this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.urlT}`):(console.log("local"),this.path="https://humanwisdom.me/course/#/"+this.address+`?t=${this.token}`),this.ngNavigatorShareService.share({title:"Human Wisdom Program",text:"Hey, check out the Human Wisdom Program",url:this.path}).then(t=>{console.log(t)}).catch(t=>{console.log(t)})):alert("This service/api is not supported in your Browser")}getProgress(t){this.service.screenProgress(t).subscribe(t=>{this.progress=parseFloat(t),console.log(this.progress,"sessionProgress")})}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(r.g),o.Nb(a.a),o.Nb(i.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-audio-header"]],inputs:{bookmark:"bookmark",bg:"bg",path:"path",toc:"toc",dashboard:"dashboard",transcriptPage:"transcriptPage"},outputs:{sendBookmark:"sendBookmark"},decls:21,vars:3,consts:[["class","top_nav ml0 ctopnav prelative",4,"ngIf"],["id","exampleModalCenter","tabindex","-1","role","dialog","aria-labelledby","exampleModalCenterTitle","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered","modal_note_journal"],[1,"modal-content"],[1,"modal-body"],[1,"row","pt20px","pb30px"],[1,"col-md-12","col-sm-12","col-xs-12","p0"],["id","message","required","required","name","message","rows","12","placeholder","Write your thoughts here(Your notes can only be seen by you)",1,"form-control","txt19","p30_20px",3,"ngModel","ngModelChange"],[1,"row","center_flex","flex_wrap"],[1,"col-md-3","col-sm-3","col-xs-12","tcenter"],["routerLink","/adults/framework/cm-p973"],["type","button","data-dismiss","modal",1,"btn","btn-success","mb0","btn_add_note_journal",3,"click"],["type","button","data-dismiss","modal",1,"btn","btn-default","mb0","w100","btn_skip","txt5","tcenter"],[1,"top_nav","ml0","ctopnav","prelative"],[1,"nav_menu","cnav_menu","p20px","mb0px","tn_padding","nav_menu_01"],[1,"flex_ai"],[1,"nav","navbar-nav","navbar-right","cnav","navleft","w40p","no_bg"],[1,""],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle","p0",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dashboard.svg","alt","",1,"p0"],["class","cuser-profile dropdown-toggle p0","data-toggle","dropdown","aria-expanded","false",3,"click",4,"ngIf"],[1,"nav","navbar-nav","navbar-right","cnav","navcenter","w20p","nbg_white"],[1,"mr0px"],["class","cuser-profile dropdown-toggle","data-toggle","dropdown","aria-expanded","false",3,"click",4,"ngIf"],[1,"nav","navbar-nav","navbar-right","cnav","w40p","no_bg"],["href","javascript:;",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/share_opaque.svg","alt","",1,"p0"],[1,"dropdown-menu","dropdown-usermenu","pull-right","course_ul"],["class","center_flex_li",4,"ngIf"],["href","javascript:;","data-toggle","modal","data-target","#exampleModalCenter",1,"cuser-profile","dropdown-toggle","p0"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/edit.svg","alt","",1,"p0"],["href","javascript:;","class","cuser-profile dropdown-toggle p0","data-toggle","dropdown","aria-expanded","false",3,"click",4,"ngIf"],[1,"col-md-12","col-sm-12","col-xs-12","p0","hprogressdiv"],[1,"progress","progress-sm","hprogress"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/toc.svg","alt","",1,"p0"],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/transcript.svg","alt","",1,"p0"],[1,"center_flex_li"],[3,"include","url"],["href","javascript:;","data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle","p0",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/bookmark_course.svg","alt","",1,"p0"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/bookmark_course_active.svg","alt","",1,"p0"]],template:function(t,e){1&t&&(o.Bc(0,p,28,7,"div",0),o.Bc(1,S,15,1,"div",0),o.Sb(2,"div",1),o.Sb(3,"div",2),o.Sb(4,"div",3),o.Sb(5,"div",4),o.Sb(6,"form"),o.Sb(7,"div",5),o.Sb(8,"div",6),o.Sb(9,"textarea",7),o.ac("ngModelChange",function(t){return e.note=t}),o.Rb(),o.Rb(),o.Rb(),o.Sb(10,"div",8),o.Sb(11,"div",9),o.Sb(12,"a",10),o.Sb(13,"button",11),o.ac("click",function(){return e.addNote()}),o.Dc(14,"Add Note to Journal"),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Ob(15,"br"),o.Sb(16,"div",8),o.Sb(17,"div",9),o.Sb(18,"a"),o.Sb(19,"button",12),o.Dc(20,"Skip"),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&t&&(o.lc("ngIf",!e.shared),o.Ab(1),o.lc("ngIf",e.shared),o.Ab(8),o.lc("ngModel",e.note))},directives:[n.l,c.t,c.k,c.l,c.b,c.q,c.j,c.m,r.j,l.a],styles:[""]}),t})()},"dbz/":function(t,e,s){"use strict";s.r(e),s.d(e,"NatureOfIS02PageModule",function(){return g});var o=s("ofXK"),r=s("3Pt+"),a=s("TEn/"),i=s("tyNb"),n=s("fXoL"),c=s("Hvql"),l=s("cXLa"),b=s("H3pP");const d=[{path:"",component:(()=>{class t{constructor(t,e,s){this.router=t,this.service=e,this.location=s,this.bg="anger_w2",this.title="The psychological body",this.mediaAudio=JSON.parse(localStorage.getItem("mediaAudio")),this.audioLink=this.mediaAudio+"/nature-of-i/audios/nature-of-i+1.5.mp3",this.transcriptPage="nature-of-i/s57011t",this.yellow="#FFC455",this.toc="nature-of-i/s57001",this.bookmark=0,this.path=this.router.url,this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.screenType=localStorage.getItem("audio"),this.moduleId=localStorage.getItem("moduleId"),this.screenNumber=57011,this.bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))}ngOnInit(){this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),this.startTime=Date.now(),this.startTime=Date.now(),this.createScreen(),0==JSON.parse(sessionStorage.getItem("bookmark57011"))?this.bookmark=0:(this.bookmarkList.includes(this.screenNumber)||1==JSON.parse(sessionStorage.getItem("bookmark57011")))&&(this.bookmark=1)}createScreen(){this.service.createScreen({ScrId:0,ModuleId:this.moduleId,GSetID:this.screenType,ScreenNo:this.screenNumber}).subscribe(t=>{})}receiveBookmark(t){console.log(t),this.bookmark=1==t?1:0,sessionStorage.setItem("bookmark57011",JSON.stringify(this.bookmark))}receiveAvDuration(t){console.log(t),this.avDuration=t}submitProgress(){this.endTime=Date.now(),this.totalTime=this.endTime-this.startTime,this.service.submitProgressAv({ScrNumber:this.screenNumber,UserId:this.userId,BookMark:this.bookmark,ModuleId:this.moduleId,screenType:this.screenType,timeSpent:this.totalTime,avDuration:this.avDuration}).subscribe(t=>{this.bookmarkList=t.GetBkMrkScr.map(t=>parseInt(t.ScrNo)),localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))}),this.router.navigate(["/adults/nature-of-i/s57012"])}prev(){this.router.navigate(["/adults/nature-of-i/s57010"])}ngOnDestroy(){localStorage.setItem("totalTime57011",this.totalTime),localStorage.setItem("avDuration57011",this.avDuration)}}return t.\u0275fac=function(e){return new(e||t)(n.Nb(i.g),n.Nb(c.a),n.Nb(o.h))},t.\u0275cmp=n.Hb({type:t,selectors:[["app-nature-of-i-s02"]],decls:42,vars:5,consts:[[3,"toc","bookmark","path","transcriptPage","sendBookmark"],["role","main",1,"right_col","ml0","cright_col",3,"ngClass"],[1,"cw100p","cabsolute_pyramid"],[1,"row","center_flex"],[1,"col-md-6","col-sm-8","col-xs-12"],[1,"x_panel","dflexblock_pyramid"],[1,"x_content","c_white","fwunset","tcenter","pt0px","mt0px"],[1,""],[1,"txt1","tcenter","pb0px","mb0px"],[1,"prelative"],[1,"row"],[1,"col-md-12","col-sm-12","col-xs-12"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/inward_arrow_short.svg",1,"img-responsive","inward_arrow"],[1,"center_flex"],[1,"ia_below_content"],[1,"col-md-6","col-sm-6","col-xs-6"],[1,"noi_body"],[1,"txt118"],[1,"col-md-6","col-sm-6","col-xs-6","noi_right"],[1,"noi_i"],[1,"row","pt5px"],[1,"col-md-6","col-sm-6","col-xs-6","noi_left"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/coach/white_man_02.png",1,"img-responsive","img_man"],[1,"noi_left_right_txt"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/background/coach/yellow_man_02.png",1,"img-responsive","img_man"],[1,"row","pt15px"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/inward_arrow_long.svg",1,"img-responsive"],[3,"nextEmitter","previousEmitter"]],template:function(t,e){1&t&&(n.Sb(0,"app-audio-header",0),n.ac("sendBookmark",function(t){return e.receiveBookmark(t)}),n.Rb(),n.Sb(1,"div",1),n.Sb(2,"div",2),n.Sb(3,"div",3),n.Sb(4,"div",4),n.Sb(5,"div",5),n.Sb(6,"div",6),n.Sb(7,"form",7),n.Sb(8,"h1",8),n.Dc(9," The psychological body "),n.Rb(),n.Sb(10,"div",9),n.Sb(11,"div",10),n.Sb(12,"div",11),n.Ob(13,"img",12),n.Rb(),n.Rb(),n.Sb(14,"div",13),n.Sb(15,"div",14),n.Sb(16,"div",10),n.Sb(17,"div",11),n.Sb(18,"div",15),n.Sb(19,"div",16),n.Sb(20,"h4",17),n.Dc(21," THE BODY "),n.Rb(),n.Rb(),n.Rb(),n.Sb(22,"div",18),n.Sb(23,"div",19),n.Sb(24,"h4",17),n.Dc(25," THE \u2018I\u2019 "),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(26,"div",20),n.Sb(27,"div",11),n.Sb(28,"div",21),n.Sb(29,"div",9),n.Ob(30,"img",22),n.Sb(31,"h6",23),n.Dc(32," A physical pain in my body calls my attention to an issue that I need to address. E.g. a toothache "),n.Rb(),n.Rb(),n.Rb(),n.Sb(33,"div",18),n.Sb(34,"div",9),n.Ob(35,"img",24),n.Sb(36,"h6",23),n.Dc(37," An emotional pain calls my attention to an issue inside me. I need to travel inwards and understand the root cause of it in my thinking. If I ignore it or blame others, it never goes away. "),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(38,"div",25),n.Sb(39,"div",11),n.Ob(40,"img",26),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(41,"app-course-footer",27),n.ac("nextEmitter",function(){return e.submitProgress()})("previousEmitter",function(){return e.prev()}),n.Rb()),2&t&&(n.lc("toc",e.toc)("bookmark",e.bookmark)("path",e.path)("transcriptPage",e.transcriptPage),n.Ab(1),n.lc("ngClass",e.bg))},directives:[l.a,o.j,r.t,r.k,r.l,b.a],styles:[""]}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Lb({type:t}),t.\u0275inj=n.Kb({imports:[[i.k.forChild(d)],i.k]}),t})();var h=s("AuZA"),m=s("6SFz");let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Lb({type:t}),t.\u0275inj=n.Kb({imports:[[o.c,r.f,a.e,u,h.a,m.b]]}),t})()}}]);