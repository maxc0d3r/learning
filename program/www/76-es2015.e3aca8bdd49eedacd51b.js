(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{RdsX:function(s,t,o){"use strict";o.d(t,"a",function(){return g});var e=o("fXoL"),i=o("tyNb"),r=o("ofXK");function a(s,t){1&s&&(e.Sb(0,"div"),e.Ob(1,"img",5),e.Sb(2,"p",6),e.Dc(3," Home "),e.Rb(),e.Rb())}function n(s,t){1&s&&(e.Sb(0,"div"),e.Ob(1,"img",7),e.Sb(2,"p",8),e.Dc(3," Home "),e.Rb(),e.Rb())}function c(s,t){1&s&&(e.Sb(0,"div"),e.Ob(1,"img",9),e.Sb(2,"p",6),e.Dc(3," Journal "),e.Rb(),e.Rb())}function l(s,t){1&s&&(e.Sb(0,"div"),e.Ob(1,"img",10),e.Sb(2,"p",8),e.Dc(3," Journal "),e.Rb(),e.Rb())}function b(s,t){1&s&&(e.Sb(0,"div"),e.Ob(1,"img",11),e.Sb(2,"p",6),e.Dc(3," Forum "),e.Rb(),e.Rb())}function u(s,t){1&s&&(e.Sb(0,"div"),e.Ob(1,"img",12),e.Sb(2,"p",8),e.Dc(3," Forum "),e.Rb(),e.Rb())}function d(s,t){1&s&&(e.Sb(0,"div"),e.Ob(1,"img",13),e.Sb(2,"p",6),e.Dc(3," Profile "),e.Rb(),e.Rb())}function m(s,t){1&s&&(e.Sb(0,"div"),e.Ob(1,"img",14),e.Sb(2,"p",8),e.Dc(3," Profile "),e.Rb(),e.Rb())}function h(s,t){1&s&&(e.Sb(0,"div"),e.Ob(1,"img",15),e.Sb(2,"p",16),e.Dc(3," Login "),e.Rb(),e.Rb())}let g=(()=>{class s{constructor(s){this.router=s,this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!1,this.isloggedIn=!1,this.enableprofile=!1}ngOnInit(){"T"===localStorage.getItem("isloggedin")&&(this.isloggedIn=!0,this.Subscriber=localStorage.getItem("Subscriber")),"/adults/adult-dashboard"==this.router.url&&(this.dash=!0,this.journal=!1,this.profile=!1),("/adults/journal"==this.router.url||this.router.url.indexOf("/adults/note")>-1)&&(this.dash=!1,this.profile=!1,this.journal=!0),new RegExp("forum").test(this.router.url)&&(this.dash=!1,this.journal=!1,this.profile=!1,this.fourm=!0),"/onboarding/user-profile"==this.router.url&&(this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!0,"1"===this.Subscriber&&(this.enableprofile=!0))}routeDash(){this.router.navigate(["/adults/adult-dashboard"])}routeJournal(){this.router.navigate(["/adults/journal"])}profileclickevent(){"T"===localStorage.getItem("isloggedin")?this.router.navigate(["/onboarding/user-profile"]):(localStorage.setItem("btnclick","T"),this.router.navigate(["/onboarding/login"]))}routeForum(){this.router.navigate(["/forum"])}}return s.\u0275fac=function(t){return new(t||s)(e.Nb(i.g))},s.\u0275cmp=e.Hb({type:s,selectors:[["app-bottom-navigation"]],decls:16,vars:9,consts:[[1,"sidebar-footer","ifooter"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","tcenter","center_flex"],[1,"footer_index",3,"click"],[4,"ngIf"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/home.svg","alt",""],[1,"mb0px","silver_chalice"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/home_active.svg","alt",""],[1,"mb0px"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/journal.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/journal_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_inactive.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/login.svg","alt",""],[1,"mb0px","davy-s_grey"]],template:function(s,t){1&s&&(e.Sb(0,"div",0),e.Sb(1,"div",1),e.Sb(2,"div",2),e.Sb(3,"a",3),e.ac("click",function(){return t.routeDash()}),e.Bc(4,a,4,0,"div",4),e.Bc(5,n,4,0,"div",4),e.Rb(),e.Sb(6,"a",3),e.ac("click",function(){return t.routeJournal()}),e.Bc(7,c,4,0,"div",4),e.Bc(8,l,4,0,"div",4),e.Rb(),e.Sb(9,"a",3),e.ac("click",function(){return t.routeForum()}),e.Bc(10,b,4,0,"div",4),e.Bc(11,u,4,0,"div",4),e.Rb(),e.Sb(12,"a",3),e.ac("click",function(){return t.profileclickevent()}),e.Bc(13,d,4,0,"div",4),e.Bc(14,m,4,0,"div",4),e.Bc(15,h,4,0,"div",4),e.Rb(),e.Rb(),e.Rb(),e.Rb()),2&s&&(e.Ab(4),e.lc("ngIf",!t.dash),e.Ab(1),e.lc("ngIf",t.dash),e.Ab(2),e.lc("ngIf",!t.journal),e.Ab(1),e.lc("ngIf",t.journal),e.Ab(2),e.lc("ngIf",!t.fourm),e.Ab(1),e.lc("ngIf",t.fourm),e.Ab(2),e.lc("ngIf",!t.enableprofile&&t.isloggedIn&&!t.profile),e.Ab(1),e.lc("ngIf",t.enableprofile&&t.profile),e.Ab(1),e.lc("ngIf",!t.isloggedIn))},directives:[r.l],styles:[""]}),s})()},uCDs:function(s,t,o){"use strict";o.r(t),o.d(t,"TreesistersPageModule",function(){return d});var e=o("ofXK"),i=o("3Pt+"),r=o("TEn/"),a=o("tyNb"),n=o("fXoL"),c=o("RdsX");const l=[{path:"",component:(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=n.Hb({type:s,selectors:[["HumanWisdom-treesisters"]],decls:28,vars:0,consts:[[1,"bg_treesisters","nav_search","col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0","flex_ai"],[1,"col-lg-6","col-md-6","col-sm-6","col-xs-6","p0"],["routerLink","/adults/adult-dashboard",1,""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/back_white_01.svg","alt","",1,"img-responsive"],[1,"col-lg-6","col-md-6","col-sm-6","col-xs-6","p0","tright"],[1,""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/share_white_02.svg","alt","",1,"img-responsive"],[1,"plr10px"],[1,"row","center_flex","mhvh_treesisters"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12","plr_01"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","plr_01"],[1,"mtb0px","txt192","tcenter"],[1,"mtb0px","txt227"],[1,"row","center_flex","treesisters_desc"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12","p0"],[1,"mtb0px","txt228"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12","p0","tcenter","img_treesisters"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/treesisters_logo.svg","alt","",1,"img-responsive"]],template:function(s,t){1&s&&(n.Sb(0,"div",0),n.Sb(1,"div",1),n.Sb(2,"div",2),n.Sb(3,"div",3),n.Sb(4,"a",4),n.Ob(5,"img",5),n.Rb(),n.Rb(),n.Sb(6,"div",6),n.Sb(7,"a",7),n.Ob(8,"img",8),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(9,"div",9),n.Sb(10,"div",10),n.Sb(11,"div",11),n.Sb(12,"div",1),n.Sb(13,"div",12),n.Sb(14,"h4",13),n.Dc(15," HumanWisdom\u2019s "),n.Rb(),n.Rb(),n.Rb(),n.Sb(16,"div",1),n.Sb(17,"div",12),n.Sb(18,"h4",14),n.Dc(19," Tree Planting Program "),n.Rb(),n.Rb(),n.Rb(),n.Sb(20,"div",15),n.Sb(21,"div",16),n.Sb(22,"div",16),n.Sb(23,"h4",17),n.Dc(24," As part of our mission to help make the world a better place, we have partnered with Treesisters, a social change and reforestation charity that works towards tropical forest restoration. With them, we will plant a tree for every person who subscribes to HumanWisdom. "),n.Rb(),n.Rb(),n.Sb(25,"div",18),n.Ob(26,"img",19),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Ob(27,"app-bottom-navigation"))},directives:[a.j,r.g,c.a],styles:[""]}),s})()}];let b=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=n.Lb({type:s}),s.\u0275inj=n.Kb({imports:[[a.k.forChild(l)],a.k]}),s})();var u=o("AuZA");let d=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=n.Lb({type:s}),s.\u0275inj=n.Kb({imports:[[e.c,i.f,r.e,b,u.a]]}),s})()}}]);