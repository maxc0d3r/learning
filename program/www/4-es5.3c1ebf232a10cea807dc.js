!function(){function t(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}function s(t,s){for(var e=0;e<s.length;e++){var o=s[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,o){return e&&s(t.prototype,e),o&&s(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"64kE":function(s,o,i){"use strict";i.d(o,"a",function(){return f});var n=i("fXoL"),a=i("tyNb"),r=i("Hvql"),c=i("ofXK");function l(t,s){1&t&&(n.Sb(0,"div",5),n.Sb(1,"div",6),n.Sb(2,"h4",7),n.Dc(3," Related Wisdom Stories "),n.Rb(),n.Rb(),n.Rb())}function b(t,s){if(1&t){var e=n.Tb();n.Sb(0,"div",10),n.Sb(1,"a",11),n.ac("click",function(){n.wc(e);var t=s.$implicit;return n.ec(3).viewstory(t)}),n.Ob(2,"img",12),n.Sb(3,"h4",13),n.Dc(4),n.Rb(),n.Rb(),n.Rb()}if(2&t){var o=s.$implicit;n.Ab(2),n.mc("src",o.Img,n.yc),n.Ab(2),n.Fc(" ",o.Title," ")}}function u(t,s){if(1&t&&(n.Sb(0,"div",8),n.Bc(1,b,5,2,"div",9),n.Rb()),2&t){var e=s.$implicit;n.Ab(1),n.lc("ngForOf",e)}}function d(t,s){if(1&t){var e=n.Tb();n.Sb(0,"div",10),n.Sb(1,"a",11),n.ac("click",function(){n.wc(e);var t=s.$implicit;return n.ec(4).viewstory(t)}),n.Ob(2,"img",12),n.Sb(3,"h4",13),n.Dc(4),n.Rb(),n.Rb(),n.Rb()}if(2&t){var o=s.$implicit;n.Ab(2),n.mc("src",o.Img,n.yc),n.Ab(2),n.Fc(" ",o.Title," ")}}function m(t,s){if(1&t&&(n.Sb(0,"div",8),n.Bc(1,d,5,2,"div",9),n.Rb()),2&t){var e=s.$implicit;n.Ab(1),n.lc("ngForOf",e)}}function g(t,s){if(1&t&&(n.Sb(0,"div",14),n.Sb(1,"div",15),n.Sb(2,"div",16),n.Sb(3,"a",17),n.Sb(4,"div",18),n.Sb(5,"div",19),n.Sb(6,"h4",20),n.Dc(7," View more "),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(8,"div",21),n.Sb(9,"div",22),n.Sb(10,"div",2),n.Bc(11,m,2,1,"div",3),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb()),2&t){var e=n.ec(2);n.Ab(11),n.lc("ngForOf",e.wisdomstoriesbottom)}}function v(t,s){if(1&t&&(n.Sb(0,"div"),n.Bc(1,l,4,0,"div",1),n.Sb(2,"div",2),n.Bc(3,u,2,1,"div",3),n.Rb(),n.Bc(4,g,12,1,"div",4),n.Rb()),2&t){var e=n.ec();n.Ab(1),n.lc("ngIf",0!==e.wisdomstories[0].length),n.Ab(2),n.lc("ngForOf",e.wisdomstories),n.Ab(1),n.lc("ngIf",0!==e.wisdomstoriesbottom.length)}}var f=function(){var s=function(){function s(e,o){t(this,s),this.router=e,this.service=o,this.wisdomstories=[],this.wisdomstoriesbottom=[],this.enablewisdomstory=!1}return e(s,[{key:"ngOnInit",value:function(){var t=this;if(this.wisdomstories.length>=2){this.enablewisdomstory=!0;var s=[];this.wisdomstories.forEach(function(e,o){0!==o&&1!==o?t.wisdomstoriesbottom.push(e):s.push(e)}),this.wisdomstories=s}else 1===this.wisdomstories.length&&(this.enablewisdomstory=!0);console.log(this.wisdomstories)}},{key:"viewstory",value:function(t){var s=this;localStorage.setItem("story",JSON.stringify(t));var e=localStorage.getItem("isloggedin");e&&"T"===e?this.service.clickStory(t.ScenarioID).subscribe(function(e){s.router.navigate(["/wisdom-stories/view-stories"],{queryParams:{sId:"".concat(t.ScenarioID)}})}):this.router.navigate(["/wisdom-stories/view-stories"],{queryParams:{sId:"".concat(t.ScenarioID)}})}}]),s}();return s.\u0275fac=function(t){return new(t||s)(n.Nb(a.g),n.Nb(r.a))},s.\u0275cmp=n.Hb({type:s,selectors:[["app-related-wisdom-stories-tiles"]],inputs:{wisdomstories:"wisdomstories"},decls:1,vars:1,consts:[[4,"ngIf"],["class","row index_rwst_title",4,"ngIf"],[1,"row","index_rwst"],["class","col-lg-12 col-md-12 col-sm-12 col-xs-12 p0",4,"ngFor","ngForOf"],["class","panel-group index_rwst_view_more","id","accordion_ws",4,"ngIf"],[1,"row","index_rwst_title"],[1,"col-md-12","col-sm-12","col-xs-12","p0"],[1,"txt212","mtb0px"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12","p0"],["class","col-lg-6 col-md-6 col-sm-6 col-xs-6 prelative mb10px",4,"ngFor","ngForOf"],[1,"col-lg-6","col-md-6","col-sm-6","col-xs-6","prelative","mb10px"],[3,"click"],["alt","",1,"img-responsive","img_index_rwst",3,"src"],[1,"mtb0px","txt210","absolute_index_rwst_title","tleft"],["id","accordion_ws",1,"panel-group","index_rwst_view_more"],[1,"panel","panel-default"],[1,"panel-heading"],["data-toggle","collapse","data-parent","#accordion","href","#ws_01",1,"accordion-toggle"],[1,"row"],[1,"col-md-12","col-sm-12","col-xs-12"],[1,"txt111","mtb0px","tcenter","mb20px"],["id","ws_01",1,"panel-collapse","collapse"],[1,"panel-body"]],template:function(t,s){1&t&&n.Bc(0,v,5,3,"div",0),2&t&&n.lc("ngIf",s.enablewisdomstory)},directives:[c.l,c.k],styles:[""]}),s}()},AyuV:function(s,o,i){"use strict";i.d(o,"a",function(){return d});var n=i("fXoL"),a=i("tyNb"),r=i("Hvql"),c=i("3Pt+"),l=i("ofXK"),b=i("RdsX");function u(t,s){if(1&t&&(n.Sb(0,"div",39),n.Sb(1,"a",40),n.Ob(2,"img",41),n.Sb(3,"h4",42),n.Dc(4),n.Rb(),n.Rb(),n.Rb()),2&t){var e=s.$implicit;n.Ab(1),n.mc("routerLink",e.link),n.Ab(1),n.mc("src",e.image,n.yc),n.mc("alt",e.name),n.Ab(2),n.Fc(" ",e.name," ")}}var d=function(){var s=function(){function s(e,o){t(this,s),this.router=e,this.service=o,this.token=JSON.parse(localStorage.getItem("token")),this.socialShare=!1,this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.moduleList=[{name:"Breathing",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/07.png",link:""},{name:"Noticing Thoughts",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/08.png",link:""},{name:"Guided Audio Meditation",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/10.png",link:""}]}return e(s,[{key:"ngOnInit",value:function(){this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),console.log(this.toc)}},{key:"shareIndex",value:function(){this.socialShare=!0,this.shareUrl="https://humanwisdom.me/course/#/adults/"+this.toc+"?t=".concat(this.token)}},{key:"proceed",value:function(){var t=this;this.router.navigate([this.moduleLink]),localStorage.setItem("moduleId",JSON.stringify(this.moduleId)),this.service.clickModule(this.moduleId,this.userId).subscribe(function(s){t.qrList=s,localStorage.setItem("qrList",JSON.stringify(t.qrList))})}},{key:"goDashboard",value:function(){this.router.navigate(["/adults/adult-dashboard"])}},{key:"routeJournal",value:function(){this.router.navigate(["/adults/journal"])}}]),s}();return s.\u0275fac=function(t){return new(t||s)(n.Nb(a.g),n.Nb(r.a))},s.\u0275cmp=n.Hb({type:s,selectors:[["app-module-end"]],inputs:{moduleImg:"moduleImg",moduleLink:"moduleLink",moduleName:"moduleName",sectionName:"sectionName",bg:"bg",toc:"toc",moduleId:"moduleId",moduleList:"moduleList"},decls:73,vars:4,consts:[["role","main",1,"right_col","bg_white","p0_important"],[1,"cw100p","dabsolute_03"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0","h100p"],[1,"x_panel","xpanel_01","p0"],[1,"x_content","tcenter","p0"],[1,"row","me_box"],[1,"col-md-3","col-sm-3","col-xs-3","p0"],[1,"col-md-12","col-sm-12","col-xs-12","p0"],["type","button","data-dismiss","modal",1,"btn","btn-default","mb0","btn_so",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/session_end_journal_02.svg","alt",""],[1,"txt22","tcenter","pt10px_so"],["type","button","data-dismiss","modal",1,"btn","btn-default","mb0","btn_so"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/session_end_join_discussion.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/session_end_consult_coach.svg","alt",""],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/session_end_share.svg","alt",""],[1,"row","me_continue_msg"],[1,"col-md-12","col-sm-12","col-xs-12","tcenter","p0"],[1,"txt51","mtb0px","mb10px"],[1,"txt83","mtb0px"],[1,"row","me_next_module","center_flex","flex_align"],[3,"click"],[1,"col-md-12","col-sm-12","col-xs-12","tcenter","p0","prelative"],["alt","",1,"module_img",3,"src"],[1,"me_overlay"],[1,"txt84","me_module_title"],[1,"txt85","me_session_title"],["type","button","data-dismiss","modal",1,"btn","btn-success","mb0","btn_se","me_module_btn"],[1,"row","me_orm"],[1,"col-md-12","col-sm-12","col-xs-12","tleft"],[1,"txt51"],[1,"row","div_orm"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],["class","col-lg-4 col-md-4 col-sm-4 col-xs-4 col_orm",4,"ngFor","ngForOf"],[1,"row","me_rtd"],[1,"txt86","mtb0px","center_flex"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/module_end_dashboard.svg","alt",""],[1,"pl5px","pt5px"],[1,"col-lg-4","col-md-4","col-sm-4","col-xs-4","col_orm"],[3,"routerLink"],[1,"img-responsive","img_orm",3,"src","alt"],[1,"mtb0px","txt158","absolute_index_rwst_title","tleft"]],template:function(t,s){1&t&&(n.Sb(0,"div",0),n.Sb(1,"div",1),n.Sb(2,"div",2),n.Sb(3,"div",3),n.Sb(4,"div",4),n.Sb(5,"div",5),n.Sb(6,"form"),n.Sb(7,"div",6),n.Sb(8,"div",7),n.Sb(9,"div",8),n.Sb(10,"a"),n.Sb(11,"button",9),n.ac("click",function(){return s.routeJournal()}),n.Ob(12,"img",10),n.Rb(),n.Rb(),n.Rb(),n.Sb(13,"div",8),n.Sb(14,"h1",11),n.Dc(15," Fill your journal "),n.Rb(),n.Rb(),n.Rb(),n.Sb(16,"div",7),n.Sb(17,"div",8),n.Sb(18,"a"),n.Sb(19,"button",12),n.Ob(20,"img",13),n.Rb(),n.Rb(),n.Rb(),n.Sb(21,"div",8),n.Sb(22,"h1",11),n.Dc(23," Join a discussion "),n.Rb(),n.Rb(),n.Rb(),n.Sb(24,"div",7),n.Sb(25,"div",8),n.Sb(26,"a"),n.Sb(27,"button",12),n.Ob(28,"img",14),n.Rb(),n.Rb(),n.Rb(),n.Sb(29,"div",8),n.Sb(30,"h1",11),n.Dc(31," Consult a coach "),n.Rb(),n.Rb(),n.Rb(),n.Sb(32,"div",7),n.Sb(33,"a",15),n.Sb(34,"div",8),n.Sb(35,"button",9),n.ac("click",function(){return s.shareIndex()}),n.Ob(36,"img",16),n.Rb(),n.Rb(),n.Rb(),n.Sb(37,"div",8),n.Sb(38,"h1",11),n.Dc(39," Share with friends "),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(40,"div",17),n.Sb(41,"div",18),n.Sb(42,"h6",19),n.Dc(43," Congratulations! You have completed this module. "),n.Rb(),n.Sb(44,"h6",20),n.Dc(45," Continue to the next module "),n.Rb(),n.Rb(),n.Rb(),n.Sb(46,"div",21),n.Sb(47,"a",22),n.ac("click",function(){return s.proceed()}),n.Sb(48,"div",23),n.Ob(49,"img",24),n.Ob(50,"div",25),n.Sb(51,"h6",26),n.Dc(52),n.Rb(),n.Sb(53,"h6",27),n.Dc(54),n.Rb(),n.Sb(55,"div"),n.Sb(56,"button",28),n.Dc(57,"Continue to this module"),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(58,"div",29),n.Sb(59,"div",30),n.Sb(60,"h4",31),n.Dc(61," Other related modules "),n.Rb(),n.Rb(),n.Rb(),n.Sb(62,"div",32),n.Sb(63,"div",33),n.Bc(64,u,5,4,"div",34),n.Rb(),n.Rb(),n.Sb(65,"div",35),n.Sb(66,"a",22),n.ac("click",function(){return s.goDashboard()}),n.Sb(67,"div",18),n.Sb(68,"h6",36),n.Ob(69,"img",37),n.Sb(70,"span",38),n.Dc(71," Return to Dashboard "),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Ob(72,"app-bottom-navigation")),2&t&&(n.Ab(49),n.lc("src",s.moduleImg,n.yc),n.Ab(3),n.Fc(" ",s.sectionName," "),n.Ab(2),n.Fc(" ",s.moduleName," "),n.Ab(10),n.lc("ngForOf",s.moduleList))},directives:[c.t,c.k,c.l,l.k,b.a,a.j],styles:[""]}),s}()},"EZZ/":function(s,o,i){"use strict";i.d(o,"a",function(){return l});var n=i("fXoL"),a=i("ofXK"),r=i("3Pt+"),c=["*"],l=function(){var s=function(){function s(){t(this,s)}return e(s,[{key:"ngOnInit",value:function(){}}]),s}();return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=n.Hb({type:s,selectors:[["app-sessionover-s1"]],inputs:{bg:"bg",points:"points",progress:"progress"},ngContentSelectors:c,decls:19,vars:3,consts:[["role","main",1,"right_col",3,"ngClass"],[1,"cw100p","dabsolute_01"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0","h100p","center_flex"],[1,"x_panel","center_flex"],[1,"x_content"],[1,"row"],[1,"col-md-12","col-sm-12","col-xs-12","center_flex"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/session_end_owl.svg","alt","",1,"img-responsive","animate_rotate_scale","se_owl"],[1,"prelative","center_flex"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/wisdom_points_circle_02.svg","alt","",1,"prelative"],[1,"txt79","se_wpts_count"],[1,"txt80","tcenter","wp_txt"],[1,"txt210","tcenter"]],template:function(t,s){1&t&&(n.kc(),n.Sb(0,"div",0),n.Sb(1,"div",1),n.Sb(2,"div",2),n.Sb(3,"div",3),n.Sb(4,"div",4),n.Sb(5,"div",5),n.Sb(6,"form"),n.Sb(7,"div",6),n.Sb(8,"div",7),n.Ob(9,"img",8),n.Sb(10,"div",9),n.Ob(11,"img",10),n.Sb(12,"h6",11),n.Dc(13),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(14,"h1",12),n.Dc(15," Well done! "),n.Rb(),n.Sb(16,"h1",13),n.Dc(17),n.Rb(),n.jc(18),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb()),2&t&&(n.lc("ngClass",s.bg),n.Ab(13),n.Fc(" ",s.points," "),n.Ab(4),n.Fc(" You\u2019ve earned ",s.points," wisdom points "))},directives:[a.j,r.t,r.k,r.l],styles:[""]}),s}()},"IK+j":function(s,o,i){"use strict";i.d(o,"a",function(){return u});var n=i("fXoL"),a=i("6RAO"),r=i("Hvql"),c=i("tyNb"),l=["screen"],b=["*"],u=function(){var s=function(){function s(e,o,i){t(this,s),this.captureService=e,this.service=o,this.next=i}return e(s,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var t=this,s=this.next.routeConfig.path;this.scrId=s.substring(1,s.length+1),console.log("test bookmarks"),this.captureService.getImage(this.screen.nativeElement,!0).toPromise().then(function(s){s=s.substring(s.indexOf(",")+1),console.log(s),t.service.UploadThumbnail({ScrNo:t.scrId,byteArray:s}).subscribe(function(t){console.log(t)})})}}]),s}();return s.\u0275fac=function(t){return new(t||s)(n.Nb(a.b),n.Nb(r.a),n.Nb(c.a))},s.\u0275cmp=n.Hb({type:s,selectors:[["app-index-content"]],viewQuery:function(t,s){var e;(1&t&&n.Hc(l,3),2&t)&&(n.tc(e=n.bc())&&(s.screen=e.first))},ngContentSelectors:b,decls:8,vars:0,consts:[["role","main",1,"right_col","bg_white","pb5_5rem"],["screen",""],[1,"cw100p"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0"],[1,"x_panel","p0","bg_white","c_zambezi"],[1,"x_content","tleft"]],template:function(t,s){1&t&&(n.kc(),n.Sb(0,"div",0,1),n.Sb(2,"div",2),n.Sb(3,"div",3),n.Sb(4,"div",4),n.Sb(5,"div",5),n.Sb(6,"div",6),n.jc(7),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb())},styles:[""]}),s}()},RdsX:function(s,o,i){"use strict";i.d(o,"a",function(){return h});var n=i("fXoL"),a=i("tyNb"),r=i("ofXK");function c(t,s){1&t&&(n.Sb(0,"div"),n.Ob(1,"img",5),n.Sb(2,"p",6),n.Dc(3," Home "),n.Rb(),n.Rb())}function l(t,s){1&t&&(n.Sb(0,"div"),n.Ob(1,"img",7),n.Sb(2,"p",8),n.Dc(3," Home "),n.Rb(),n.Rb())}function b(t,s){1&t&&(n.Sb(0,"div"),n.Ob(1,"img",9),n.Sb(2,"p",6),n.Dc(3," Journal "),n.Rb(),n.Rb())}function u(t,s){1&t&&(n.Sb(0,"div"),n.Ob(1,"img",10),n.Sb(2,"p",8),n.Dc(3," Journal "),n.Rb(),n.Rb())}function d(t,s){1&t&&(n.Sb(0,"div"),n.Ob(1,"img",11),n.Sb(2,"p",6),n.Dc(3," Forum "),n.Rb(),n.Rb())}function m(t,s){1&t&&(n.Sb(0,"div"),n.Ob(1,"img",12),n.Sb(2,"p",8),n.Dc(3," Forum "),n.Rb(),n.Rb())}function g(t,s){1&t&&(n.Sb(0,"div"),n.Ob(1,"img",13),n.Sb(2,"p",6),n.Dc(3," Profile "),n.Rb(),n.Rb())}function v(t,s){1&t&&(n.Sb(0,"div"),n.Ob(1,"img",14),n.Sb(2,"p",8),n.Dc(3," Profile "),n.Rb(),n.Rb())}function f(t,s){1&t&&(n.Sb(0,"div"),n.Ob(1,"img",15),n.Sb(2,"p",16),n.Dc(3," Login "),n.Rb(),n.Rb())}var h=function(){var s=function(){function s(e){t(this,s),this.router=e,this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!1,this.isloggedIn=!1,this.enableprofile=!1}return e(s,[{key:"ngOnInit",value:function(){"T"===localStorage.getItem("isloggedin")&&(this.isloggedIn=!0,this.Subscriber=localStorage.getItem("Subscriber")),"/adults/adult-dashboard"==this.router.url&&(this.dash=!0,this.journal=!1,this.profile=!1),("/adults/journal"==this.router.url||this.router.url.indexOf("/adults/note")>-1)&&(this.dash=!1,this.profile=!1,this.journal=!0),new RegExp("forum").test(this.router.url)&&(this.dash=!1,this.journal=!1,this.profile=!1,this.fourm=!0),"/onboarding/user-profile"==this.router.url&&(this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!0,"1"===this.Subscriber&&(this.enableprofile=!0))}},{key:"routeDash",value:function(){this.router.navigate(["/adults/adult-dashboard"])}},{key:"routeJournal",value:function(){this.router.navigate(["/adults/journal"])}},{key:"profileclickevent",value:function(){"T"===localStorage.getItem("isloggedin")?this.router.navigate(["/onboarding/user-profile"]):(localStorage.setItem("btnclick","T"),this.router.navigate(["/onboarding/login"]))}},{key:"routeForum",value:function(){this.router.navigate(["/forum"])}}]),s}();return s.\u0275fac=function(t){return new(t||s)(n.Nb(a.g))},s.\u0275cmp=n.Hb({type:s,selectors:[["app-bottom-navigation"]],decls:16,vars:9,consts:[[1,"sidebar-footer","ifooter"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","tcenter","center_flex"],[1,"footer_index",3,"click"],[4,"ngIf"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/home.svg","alt",""],[1,"mb0px","silver_chalice"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/home_active.svg","alt",""],[1,"mb0px"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/journal.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/journal_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_inactive.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/login.svg","alt",""],[1,"mb0px","davy-s_grey"]],template:function(t,s){1&t&&(n.Sb(0,"div",0),n.Sb(1,"div",1),n.Sb(2,"div",2),n.Sb(3,"a",3),n.ac("click",function(){return s.routeDash()}),n.Bc(4,c,4,0,"div",4),n.Bc(5,l,4,0,"div",4),n.Rb(),n.Sb(6,"a",3),n.ac("click",function(){return s.routeJournal()}),n.Bc(7,b,4,0,"div",4),n.Bc(8,u,4,0,"div",4),n.Rb(),n.Sb(9,"a",3),n.ac("click",function(){return s.routeForum()}),n.Bc(10,d,4,0,"div",4),n.Bc(11,m,4,0,"div",4),n.Rb(),n.Sb(12,"a",3),n.ac("click",function(){return s.profileclickevent()}),n.Bc(13,g,4,0,"div",4),n.Bc(14,v,4,0,"div",4),n.Bc(15,f,4,0,"div",4),n.Rb(),n.Rb(),n.Rb(),n.Rb()),2&t&&(n.Ab(4),n.lc("ngIf",!s.dash),n.Ab(1),n.lc("ngIf",s.dash),n.Ab(2),n.lc("ngIf",!s.journal),n.Ab(1),n.lc("ngIf",s.journal),n.Ab(2),n.lc("ngIf",!s.fourm),n.Ab(1),n.lc("ngIf",s.fourm),n.Ab(2),n.lc("ngIf",!s.enableprofile&&s.isloggedIn&&!s.profile),n.Ab(1),n.lc("ngIf",s.enableprofile&&s.profile),n.Ab(1),n.lc("ngIf",!s.isloggedIn))},directives:[r.l],styles:[""]}),s}()},ad33:function(s,o,i){"use strict";i.d(o,"a",function(){return u});var n=i("fXoL"),a=i("USy8"),r=i("tyNb"),c=i("ofXK");function l(t,s){if(1&t){var e=n.Tb();n.Sb(0,"div",1),n.Sb(1,"div",2),n.Sb(2,"div",3),n.Ob(3,"img",4),n.Rb(),n.Rb(),n.Sb(4,"div",5),n.Sb(5,"nav",6),n.Sb(6,"ul",7),n.Sb(7,"li",8),n.Sb(8,"a",9),n.ac("click",function(){return n.wc(e),n.ec().goBack()}),n.Sb(9,"h4",10),n.Dc(10," Back "),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(11,"ul",11),n.Sb(12,"li",12),n.Sb(13,"a",13),n.ac("click",function(){return n.wc(e),n.ec().share()}),n.Ob(14,"img",14),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb()}if(2&t){var o=n.ec();n.Ab(3),n.lc("src",o.tocImage,n.yc)("alt",o.tocAlt)}}function b(t,s){if(1&t){var e=n.Tb();n.Sb(0,"div",1),n.Sb(1,"div",15),n.Sb(2,"div",16),n.Sb(3,"div",3),n.Ob(4,"img",4),n.Rb(),n.Rb(),n.Rb(),n.Sb(5,"div",5),n.Sb(6,"nav",6),n.Sb(7,"ul",7),n.Sb(8,"li",8),n.Sb(9,"a",9),n.ac("click",function(){return n.wc(e),n.ec().goBack()}),n.Sb(10,"h4",17),n.Dc(11," Back "),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(12,"ul",11),n.Sb(13,"li",12),n.Sb(14,"a",13),n.ac("click",function(){return n.wc(e),n.ec().share()}),n.Ob(15,"img",18),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb()}if(2&t){var o=n.ec();n.Ab(4),n.lc("src",o.tocImage,n.yc)("alt",o.tocAlt)}}var u=function(){var s=function(){function s(e,o,i){t(this,s),this.ngNavigatorShareService=e,this.router=o,this.location=i,this.path=this.router.url}return e(s,[{key:"ngOnInit",value:function(){}},{key:"goBack",value:function(){this.location.back()}},{key:"share",value:function(){this.ngNavigatorShareService.share({title:"Human Wisdom Program",text:"Hey, check out the Human Wisdom Program",url:this.path}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}}]),s}();return s.\u0275fac=function(t){return new(t||s)(n.Nb(a.a),n.Nb(r.g),n.Nb(c.h))},s.\u0275cmp=n.Hb({type:s,selectors:[["app-toc-header"]],inputs:{tocImage:"tocImage",tocColor:"tocColor",tocAlt:"tocAlt"},decls:2,vars:2,consts:[["class","top_nav ml0 tcenter inav",4,"ngIf"],[1,"top_nav","ml0","tcenter","inav"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0"],[1,"img-responsive","w100",3,"src","alt"],[1,"nav_menu","p20px","nav_menu_02"],[1,"flex_ai"],[1,"nav","navbar-nav","navbar-right","cnav","navleft","w50p","no_bg"],[1,""],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle","p0",3,"click"],[1,"btn_back_grey"],[1,"nav","navbar-nav","navbar-right","cnav","w50p","no_bg"],[1,"mr0px","frighti"],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/share_grey.svg","alt","",1,"p0"],[1,"row"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12","p0","center_flex"],[1,"btn_back_white"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/share_white.svg","alt","",1,"p0"]],template:function(t,s){1&t&&(n.Bc(0,l,15,2,"div",0),n.Bc(1,b,16,2,"div",0)),2&t&&(n.lc("ngIf","grey"===s.tocColor),n.Ab(1),n.lc("ngIf","white"===s.tocColor))},directives:[c.l],styles:[""]}),s}()},ymfM:function(s,o,i){"use strict";i.d(o,"a",function(){return g});var n=i("fXoL"),a=i("tyNb"),r=i("Hvql"),c=i("ofXK");function l(t,s){1&t&&(n.Sb(0,"div"),n.Ob(1,"img",8),n.Sb(2,"p",9),n.Dc(3," Forum "),n.Rb(),n.Rb())}function b(t,s){1&t&&(n.Sb(0,"div"),n.Ob(1,"img",10),n.Sb(2,"p",5),n.Dc(3," Forum "),n.Rb(),n.Rb())}function u(t,s){1&t&&(n.Sb(0,"div"),n.Ob(1,"img",11),n.Sb(2,"p",9),n.Dc(3," Profile "),n.Rb(),n.Rb())}function d(t,s){1&t&&(n.Sb(0,"div"),n.Ob(1,"img",12),n.Sb(2,"p",5),n.Dc(3," Profile "),n.Rb(),n.Rb())}function m(t,s){1&t&&(n.Sb(0,"div"),n.Ob(1,"img",13),n.Sb(2,"p",14),n.Dc(3," Login "),n.Rb(),n.Rb())}var g=function(){var s=function(){function s(e,o){t(this,s),this.router=e,this.service=o,this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!1,this.isloggedIn=!1,this.enableprofile=!1}return e(s,[{key:"ngOnInit",value:function(){"T"===localStorage.getItem("isloggedin")&&(this.isloggedIn=!0,this.Subscriber=localStorage.getItem("Subscriber")),console.log("url",this.router.url),"/adults/adult-dashboard"==this.router.url&&(this.dash=!0,this.journal=!1,this.profile=!1),("/adults/journal"==this.router.url||this.router.url.indexOf("/adults/note")>-1)&&(this.dash=!1,this.profile=!1,this.journal=!0),(new RegExp("forum").test(this.router.url)||this.router.url.indexOf("/adults/note")>-1)&&(this.dash=!1,this.journal=!0,this.profile=!1,this.fourm=!1),"/onboarding/user-profile"==this.router.url&&(this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!0,"1"===this.Subscriber&&(this.enableprofile=!0))}},{key:"routeDash",value:function(){this.router.navigate(["/adults/adult-dashboard"])}},{key:"routeJournal",value:function(){this.router.navigate(["/adults/journal"])}},{key:"profileclickevent",value:function(){"T"===localStorage.getItem("isloggedin")?this.router.navigate(["/onboarding/user-profile"]):(localStorage.setItem("btnclick","T"),this.router.navigate(["/onboarding/login"]))}},{key:"routeForum",value:function(){"T"===localStorage.getItem("isloggedin")&&this.router.navigate(["/forum"])}}]),s}();return s.\u0275fac=function(t){return new(t||s)(n.Nb(a.g),n.Nb(r.a))},s.\u0275cmp=n.Hb({type:s,selectors:[["app-index-footer"]],decls:18,vars:5,consts:[[1,"sidebar-footer","ifooter"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-12","col-xs-12","center_flex"],[1,"footer_index",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/home.svg","alt",""],[1,"mb0px"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/journal.svg","alt",""],[4,"ngIf"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum.svg","alt",""],[1,"mb0px","silver_chalice"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_inactive.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/login.svg","alt",""],[1,"mb0px","davy-s_grey"]],template:function(t,s){1&t&&(n.Sb(0,"div",0),n.Sb(1,"div",1),n.Sb(2,"div",2),n.Sb(3,"a",3),n.ac("click",function(){return s.routeDash()}),n.Ob(4,"img",4),n.Sb(5,"p",5),n.Dc(6," Home "),n.Rb(),n.Rb(),n.Sb(7,"a",3),n.ac("click",function(){return s.routeJournal()}),n.Ob(8,"img",6),n.Sb(9,"p",5),n.Dc(10," Journal "),n.Rb(),n.Rb(),n.Sb(11,"a",3),n.ac("click",function(){return s.routeForum()}),n.Bc(12,l,4,0,"div",7),n.Bc(13,b,4,0,"div",7),n.Rb(),n.Sb(14,"a",3),n.ac("click",function(){return s.profileclickevent()}),n.Bc(15,u,4,0,"div",7),n.Bc(16,d,4,0,"div",7),n.Bc(17,m,4,0,"div",7),n.Rb(),n.Rb(),n.Rb(),n.Rb()),2&t&&(n.Ab(12),n.lc("ngIf",!s.fourm),n.Ab(1),n.lc("ngIf",s.fourm),n.Ab(2),n.lc("ngIf",!s.enableprofile&&s.isloggedIn&&!s.profile),n.Ab(1),n.lc("ngIf",s.enableprofile&&s.profile),n.Ab(1),n.lc("ngIf",!s.isloggedIn))},directives:[c.l],styles:[""]}),s}()}}])}();