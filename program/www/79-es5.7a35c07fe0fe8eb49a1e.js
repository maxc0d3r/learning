!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var s=0;s<e.length;s++){var o=e[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,s,o){return s&&e(t.prototype,s),o&&e(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{RdsX:function(e,o,n){"use strict";n.d(o,"a",function(){return v});var i=n("fXoL"),a=n("tyNb"),r=n("ofXK");function c(t,e){1&t&&(i.Sb(0,"div"),i.Ob(1,"img",5),i.Sb(2,"p",6),i.Dc(3," Home "),i.Rb(),i.Rb())}function l(t,e){1&t&&(i.Sb(0,"div"),i.Ob(1,"img",7),i.Sb(2,"p",8),i.Dc(3," Home "),i.Rb(),i.Rb())}function u(t,e){1&t&&(i.Sb(0,"div"),i.Ob(1,"img",9),i.Sb(2,"p",6),i.Dc(3," Journal "),i.Rb(),i.Rb())}function b(t,e){1&t&&(i.Sb(0,"div"),i.Ob(1,"img",10),i.Sb(2,"p",8),i.Dc(3," Journal "),i.Rb(),i.Rb())}function d(t,e){1&t&&(i.Sb(0,"div"),i.Ob(1,"img",11),i.Sb(2,"p",6),i.Dc(3," Forum "),i.Rb(),i.Rb())}function m(t,e){1&t&&(i.Sb(0,"div"),i.Ob(1,"img",12),i.Sb(2,"p",8),i.Dc(3," Forum "),i.Rb(),i.Rb())}function f(t,e){1&t&&(i.Sb(0,"div"),i.Ob(1,"img",13),i.Sb(2,"p",6),i.Dc(3," Profile "),i.Rb(),i.Rb())}function g(t,e){1&t&&(i.Sb(0,"div"),i.Ob(1,"img",14),i.Sb(2,"p",8),i.Dc(3," Profile "),i.Rb(),i.Rb())}function h(t,e){1&t&&(i.Sb(0,"div"),i.Ob(1,"img",15),i.Sb(2,"p",16),i.Dc(3," Login "),i.Rb(),i.Rb())}var v=function(){var e=function(){function e(s){t(this,e),this.router=s,this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!1,this.isloggedIn=!1,this.enableprofile=!1}return s(e,[{key:"ngOnInit",value:function(){"T"===localStorage.getItem("isloggedin")&&(this.isloggedIn=!0,this.Subscriber=localStorage.getItem("Subscriber")),"/adults/adult-dashboard"==this.router.url&&(this.dash=!0,this.journal=!1,this.profile=!1),("/adults/journal"==this.router.url||this.router.url.indexOf("/adults/note")>-1)&&(this.dash=!1,this.profile=!1,this.journal=!0),new RegExp("forum").test(this.router.url)&&(this.dash=!1,this.journal=!1,this.profile=!1,this.fourm=!0),"/onboarding/user-profile"==this.router.url&&(this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!0,"1"===this.Subscriber&&(this.enableprofile=!0))}},{key:"routeDash",value:function(){this.router.navigate(["/adults/adult-dashboard"])}},{key:"routeJournal",value:function(){this.router.navigate(["/adults/journal"])}},{key:"profileclickevent",value:function(){"T"===localStorage.getItem("isloggedin")?this.router.navigate(["/onboarding/user-profile"]):(localStorage.setItem("btnclick","T"),this.router.navigate(["/onboarding/login"]))}},{key:"routeForum",value:function(){this.router.navigate(["/forum"])}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.Nb(a.g))},e.\u0275cmp=i.Hb({type:e,selectors:[["app-bottom-navigation"]],decls:16,vars:9,consts:[[1,"sidebar-footer","ifooter"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","tcenter","center_flex"],[1,"footer_index",3,"click"],[4,"ngIf"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/home.svg","alt",""],[1,"mb0px","silver_chalice"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/home_active.svg","alt",""],[1,"mb0px"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/journal.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/journal_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_inactive.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/login.svg","alt",""],[1,"mb0px","davy-s_grey"]],template:function(t,e){1&t&&(i.Sb(0,"div",0),i.Sb(1,"div",1),i.Sb(2,"div",2),i.Sb(3,"a",3),i.ac("click",function(){return e.routeDash()}),i.Bc(4,c,4,0,"div",4),i.Bc(5,l,4,0,"div",4),i.Rb(),i.Sb(6,"a",3),i.ac("click",function(){return e.routeJournal()}),i.Bc(7,u,4,0,"div",4),i.Bc(8,b,4,0,"div",4),i.Rb(),i.Sb(9,"a",3),i.ac("click",function(){return e.routeForum()}),i.Bc(10,d,4,0,"div",4),i.Bc(11,m,4,0,"div",4),i.Rb(),i.Sb(12,"a",3),i.ac("click",function(){return e.profileclickevent()}),i.Bc(13,f,4,0,"div",4),i.Bc(14,g,4,0,"div",4),i.Bc(15,h,4,0,"div",4),i.Rb(),i.Rb(),i.Rb(),i.Rb()),2&t&&(i.Ab(4),i.lc("ngIf",!e.dash),i.Ab(1),i.lc("ngIf",e.dash),i.Ab(2),i.lc("ngIf",!e.journal),i.Ab(1),i.lc("ngIf",e.journal),i.Ab(2),i.lc("ngIf",!e.fourm),i.Ab(1),i.lc("ngIf",e.fourm),i.Ab(2),i.lc("ngIf",!e.enableprofile&&e.isloggedIn&&!e.profile),i.Ab(1),i.lc("ngIf",e.enableprofile&&e.profile),i.Ab(1),i.lc("ngIf",!e.isloggedIn))},directives:[r.l],styles:[""]}),e}()},zwtZ:function(e,o,n){"use strict";n.r(o),n.d(o,"ForumThreadStartNewPageModule",function(){return S});var i=n("ofXK"),a=n("3Pt+"),r=n("TEn/"),c=n("tyNb"),l=n("fXoL"),u=n("+1ii"),b=n("RdsX");function d(t,e){if(1&t&&l.Ob(0,"img",33),2&t){var s=l.ec();l.mc("src","data:image/jpg;base64,"+s.userinfo.userimage,l.yc)}}function m(t,e){1&t&&l.Ob(0,"img",34)}var f,g,h,v=[{path:"",component:(f=function(){function e(s,o){t(this,e),this.service=s,this.router=o,this.thread="",this.userID="107",this.postID="0",this.userinfo={userimage:null,username:""},this.userID=localStorage.getItem("userId"),this.getuserDetails();var n=localStorage.getItem("postid");"null"!==n&&(console.log(n),this.postID=n)}return s(e,[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){localStorage.setItem("postid",null)}},{key:"getuserDetails",value:function(){var t=this;this.service.getUserDetail(this.userID).subscribe(function(e){e&&(t.userinfo.username=e[0].FName+" "+e[0].LName,t.userinfo.userimage=e[0].UserImage)})}},{key:"post",value:function(){var t=this;this.service.submitPost({Post:this.thread,UserId:this.userID,ParentPostID:this.postID,ReflectionID:"0",TagIds:"0"}).subscribe(function(e){e&&(localStorage.setItem("postid",null),t.router.navigateByUrl("/forum"))})}}]),e}(),f.\u0275fac=function(t){return new(t||f)(l.Nb(u.a),l.Nb(c.g))},f.\u0275cmp=l.Hb({type:f,selectors:[["app-forum-thread-start-new"]],decls:42,vars:5,consts:[[1,"top_nav","ml0","ctopnav"],[1,"nav_menu","cnav_menu","p20px","mb0px","tn_padding","tn_story_submit","nav_menu_01"],[1,"flex_ai"],[1,"nav","navbar-nav","navbar-right","cnav","navleft","w20p","no_bg"],[1,""],["routerLink","/forum/forum-landing/","data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle","p0"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/ws_back_white.svg","alt","",1,"p0"],[1,"nav","navbar-nav","navbar-right","cnav","navcenter","w60p","nbg_white"],[1,"mr0px"],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle"],[1,"txt88"],["role","main",1,"right_col","pt_rightcol"],[1,"cw100p","dabsolute_09"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0","h100p"],[1,"x_panel","xpanel_01","p0"],[1,"x_content","p0px_b"],[1,"row","forum_pt20px"],[1,"col-md-12","col-sm-12","col-xs-12","flex_ai"],[1,"col-md-2","col-sm-2","col-xs-2","p0"],["alt","","class","w100 fimg_02",3,"src",4,"ngIf"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/user/forum_09.svg","alt","","class","p0",4,"ngIf"],[1,"col-md-6","col-sm-6","col-xs-6"],[1,"txt114","mtb0px"],[1,"col-md-12","col-sm-12","col-xs-12","prelative"],[1,"placeholder_odiv"],[1,"txt136"],["type","text","id","comment","name","thread","required","required","placeholder","","maxlength","256",1,"placeholder_idiv",3,"ngModel","ngModelChange"],[1,"placeholder_noc"],[1,"txt137"],[1,"col-md-12","col-sm-12","col-xs-12"],["type","submit",1,"btn","btn-warning","btn_fw_post","w100",3,"click"],[1,"pagebreak"],["alt","",1,"w100","fimg_02",3,"src"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/user/forum_09.svg","alt","",1,"p0"]],template:function(t,e){1&t&&(l.Sb(0,"div",0),l.Sb(1,"div",1),l.Sb(2,"nav",2),l.Sb(3,"ul",3),l.Sb(4,"li",4),l.Sb(5,"a",5),l.Ob(6,"img",6),l.Rb(),l.Rb(),l.Rb(),l.Sb(7,"ul",7),l.Sb(8,"li",8),l.Sb(9,"a",9),l.Sb(10,"h6",10),l.Dc(11," New Thread "),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(12,"div",11),l.Sb(13,"div",12),l.Sb(14,"div",13),l.Sb(15,"div",14),l.Sb(16,"div",15),l.Sb(17,"div",16),l.Sb(18,"form"),l.Sb(19,"div",17),l.Sb(20,"div",18),l.Sb(21,"div",19),l.Bc(22,d,1,1,"img",20),l.Bc(23,m,1,0,"img",21),l.Rb(),l.Sb(24,"div",22),l.Sb(25,"h4",23),l.Dc(26),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(27,"div",17),l.Sb(28,"div",24),l.Sb(29,"div",25),l.Sb(30,"h4",26),l.Dc(31," Start a new thread "),l.Rb(),l.Rb(),l.Sb(32,"textarea",27),l.ac("ngModelChange",function(t){return e.thread=t}),l.Rb(),l.Sb(33,"div",28),l.Sb(34,"h4",29),l.Dc(35),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(36,"div",17),l.Sb(37,"div",30),l.Sb(38,"button",31),l.ac("click",function(){return e.post()}),l.Dc(39," Post "),l.Rb(),l.Rb(),l.Rb(),l.Ob(40,"div",32),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Ob(41,"app-bottom-navigation")),2&t&&(l.Ab(22),l.lc("ngIf",e.userinfo.userimage),l.Ab(1),l.lc("ngIf",!e.userinfo.userimage),l.Ab(3),l.Fc(" ",e.userinfo.username," "),l.Ab(6),l.lc("ngModel",e.thread),l.Ab(3),l.Fc(" ",e.thread.length,"/256 "))},directives:[c.j,r.g,a.t,a.k,a.l,i.l,a.b,a.q,a.g,a.j,a.m,b.a],styles:[""]}),f)}],p=((g=function e(){t(this,e)}).\u0275fac=function(t){return new(t||g)},g.\u0275mod=l.Lb({type:g}),g.\u0275inj=l.Kb({imports:[[c.k.forChild(v)],c.k]}),g),w=n("AuZA"),S=((h=function e(){t(this,e)}).\u0275fac=function(t){return new(t||h)},h.\u0275mod=l.Lb({type:h}),h.\u0275inj=l.Kb({imports:[[i.c,a.f,r.e,p,w.a]]}),h)}}])}();