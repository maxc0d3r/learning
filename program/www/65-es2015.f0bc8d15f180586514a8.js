(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{RdsX:function(b,s,i){"use strict";i.d(s,"a",function(){return S});var t=i("fXoL"),o=i("tyNb"),e=i("ofXK");function a(b,s){1&b&&(t.Sb(0,"div"),t.Ob(1,"img",5),t.Sb(2,"p",6),t.Dc(3," Home "),t.Rb(),t.Rb())}function r(b,s){1&b&&(t.Sb(0,"div"),t.Ob(1,"img",7),t.Sb(2,"p",8),t.Dc(3," Home "),t.Rb(),t.Rb())}function n(b,s){1&b&&(t.Sb(0,"div"),t.Ob(1,"img",9),t.Sb(2,"p",6),t.Dc(3," Journal "),t.Rb(),t.Rb())}function d(b,s){1&b&&(t.Sb(0,"div"),t.Ob(1,"img",10),t.Sb(2,"p",8),t.Dc(3," Journal "),t.Rb(),t.Rb())}function c(b,s){1&b&&(t.Sb(0,"div"),t.Ob(1,"img",11),t.Sb(2,"p",6),t.Dc(3," Forum "),t.Rb(),t.Rb())}function l(b,s){1&b&&(t.Sb(0,"div"),t.Ob(1,"img",12),t.Sb(2,"p",8),t.Dc(3," Forum "),t.Rb(),t.Rb())}function m(b,s){1&b&&(t.Sb(0,"div"),t.Ob(1,"img",13),t.Sb(2,"p",6),t.Dc(3," Profile "),t.Rb(),t.Rb())}function v(b,s){1&b&&(t.Sb(0,"div"),t.Ob(1,"img",14),t.Sb(2,"p",8),t.Dc(3," Profile "),t.Rb(),t.Rb())}function u(b,s){1&b&&(t.Sb(0,"div"),t.Ob(1,"img",15),t.Sb(2,"p",16),t.Dc(3," Login "),t.Rb(),t.Rb())}let S=(()=>{class b{constructor(b){this.router=b,this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!1,this.isloggedIn=!1,this.enableprofile=!1}ngOnInit(){"T"===localStorage.getItem("isloggedin")&&(this.isloggedIn=!0,this.Subscriber=localStorage.getItem("Subscriber")),"/adults/adult-dashboard"==this.router.url&&(this.dash=!0,this.journal=!1,this.profile=!1),("/adults/journal"==this.router.url||this.router.url.indexOf("/adults/note")>-1)&&(this.dash=!1,this.profile=!1,this.journal=!0),new RegExp("forum").test(this.router.url)&&(this.dash=!1,this.journal=!1,this.profile=!1,this.fourm=!0),"/onboarding/user-profile"==this.router.url&&(this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!0,"1"===this.Subscriber&&(this.enableprofile=!0))}routeDash(){this.router.navigate(["/adults/adult-dashboard"])}routeJournal(){this.router.navigate(["/adults/journal"])}profileclickevent(){"T"===localStorage.getItem("isloggedin")?this.router.navigate(["/onboarding/user-profile"]):(localStorage.setItem("btnclick","T"),this.router.navigate(["/onboarding/login"]))}routeForum(){this.router.navigate(["/forum"])}}return b.\u0275fac=function(s){return new(s||b)(t.Nb(o.g))},b.\u0275cmp=t.Hb({type:b,selectors:[["app-bottom-navigation"]],decls:16,vars:9,consts:[[1,"sidebar-footer","ifooter"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","tcenter","center_flex"],[1,"footer_index",3,"click"],[4,"ngIf"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/home.svg","alt",""],[1,"mb0px","silver_chalice"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/home_active.svg","alt",""],[1,"mb0px"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/journal.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/journal_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_inactive.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/login.svg","alt",""],[1,"mb0px","davy-s_grey"]],template:function(b,s){1&b&&(t.Sb(0,"div",0),t.Sb(1,"div",1),t.Sb(2,"div",2),t.Sb(3,"a",3),t.ac("click",function(){return s.routeDash()}),t.Bc(4,a,4,0,"div",4),t.Bc(5,r,4,0,"div",4),t.Rb(),t.Sb(6,"a",3),t.ac("click",function(){return s.routeJournal()}),t.Bc(7,n,4,0,"div",4),t.Bc(8,d,4,0,"div",4),t.Rb(),t.Sb(9,"a",3),t.ac("click",function(){return s.routeForum()}),t.Bc(10,c,4,0,"div",4),t.Bc(11,l,4,0,"div",4),t.Rb(),t.Sb(12,"a",3),t.ac("click",function(){return s.profileclickevent()}),t.Bc(13,m,4,0,"div",4),t.Bc(14,v,4,0,"div",4),t.Bc(15,u,4,0,"div",4),t.Rb(),t.Rb(),t.Rb(),t.Rb()),2&b&&(t.Ab(4),t.lc("ngIf",!s.dash),t.Ab(1),t.lc("ngIf",s.dash),t.Ab(2),t.lc("ngIf",!s.journal),t.Ab(1),t.lc("ngIf",s.journal),t.Ab(2),t.lc("ngIf",!s.fourm),t.Ab(1),t.lc("ngIf",s.fourm),t.Ab(2),t.lc("ngIf",!s.enableprofile&&s.isloggedIn&&!s.profile),t.Ab(1),t.lc("ngIf",s.enableprofile&&s.profile),t.Ab(1),t.lc("ngIf",!s.isloggedIn))},directives:[e.l],styles:[""]}),b})()},lKBy:function(b,s,i){"use strict";i.r(s),i.d(s,"PodcastStartPageModule",function(){return m});var t=i("ofXK"),o=i("3Pt+"),e=i("TEn/"),a=i("tyNb"),r=i("fXoL"),n=i("RdsX");const d=[{path:"",component:(()=>{class b{constructor(){}ngOnInit(){}}return b.\u0275fac=function(s){return new(s||b)},b.\u0275cmp=r.Hb({type:b,selectors:[["app-podcast-start"]],decls:196,vars:0,consts:[[1,"top_nav","ml0","tcenter","inav"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/podcast/01_a.jpg","alt","",1,"img-responsive","iw100"],[1,"nav_menu","absolute_top","p20px"],[1,"nav","navbar-nav","navbar_left","cnav","inavbar","flex_align"],[1,""],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle","c_silver_chalice"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/back_white.svg","alt","",1,"p0"],[1,"lishare"],["href","javascript:;","data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/share_white.svg","alt","",1,"p0"],["role","main",1,"right_col","ml0","bg_white","pb5_5rem"],[1,"cw100p"],[1,"row","center_flex"],[1,"col-md-6","col-sm-8","col-xs-12","p0"],[1,"x_panel","p0","bg_white","c_zambezi"],[1,"x_content","fwunset","tleft"],[1,"row"],[1,"col-md-12","col-sm-12","col-xs-12"],[1,"module_title"],[1,"txt_comparison"],[1,"row","center_flex","pb30px"],[1,"col-md-12","col-sm-12","col-xs-12","tcenter"],["routerLink","/adults/guided-meditation/s51002"],["type","button","data-dismiss","modal",1,"btn","btn-success","mb0","btn_podcast_01"],[1,"progress","btn_progress"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar",2,"width","25%"],[1,"toc_podcast"],[1,"row","pt30px","pb10px"],[1,"txt158","plr10px"],[1,"row","toc_sections","box","m0px"],[1,"col-md-12","col-sm-12","col-xs-12","p0","center_flex"],[1,"col-md-2","col-sm-2","col-xs-2"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/podcast/02_b.png","alt","",1,"translucent_border"],[1,"col-md-10","col-sm-10","col-xs-10","p0","center_flex"],[1,"col-md-10","col-sm-10","col-xs-10","p0"],[1,"txt159","mtb0px","ml15pxi"],[1,"col-md-2","col-sm-2","col-xs-2","tright"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/toc_audio.svg","alt","",1,""],[1,"row","jc_flex_end"],[1,"col-md-10","col-sm-10","col-xs-10","plr20px"],[1,"hr_style_5"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/podcast/03_b.png","alt","",1,"translucent_border"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/podcast/04_b.png","alt","",1,"translucent_border"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/podcast/05_b.png","alt","",1,"translucent_border"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/podcast/06_b.png","alt","",1,"translucent_border"],[1,"mlr-10px"],["id","coach_accordion",1,"panel-group"],[1,"panel","panel-default","bg_transparent"],[1,"panel-heading","bg_transparent","p0"],[1,"panel-title"],["data-toggle","collapse","data-parent","#coach_accordion","href","#a1"],[1,"row","ptb20px"],[1,"txt160","tcenter"],["id","a1",1,"panel-collapse","collapse"],[1,"panel-body","pt0px","plr10px"],[1,"pagebreak"]],template:function(b,s){1&b&&(r.Sb(0,"div",0),r.Ob(1,"img",1),r.Sb(2,"div",2),r.Sb(3,"nav"),r.Sb(4,"ul",3),r.Sb(5,"li",4),r.Sb(6,"a",5),r.Ob(7,"img",6),r.Rb(),r.Rb(),r.Sb(8,"li",7),r.Sb(9,"a",8),r.Ob(10,"img",9),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(11,"div",10),r.Sb(12,"div",11),r.Sb(13,"div",12),r.Sb(14,"div",13),r.Sb(15,"div",14),r.Sb(16,"div",15),r.Sb(17,"form"),r.Sb(18,"div",16),r.Sb(19,"div",17),r.Sb(20,"h1",18),r.Dc(21," Why do we argue? "),r.Rb(),r.Rb(),r.Rb(),r.Sb(22,"div",16),r.Sb(23,"div",17),r.Sb(24,"h4",19),r.Dc(25," Pellentesque eleifend nibh eu tellus tristique gravida. Integer dui velit, bibendum eu semper ac, molestie sit amet dolor. "),r.Rb(),r.Rb(),r.Rb(),r.Ob(26,"br"),r.Sb(27,"div",20),r.Sb(28,"div",21),r.Sb(29,"a",22),r.Sb(30,"button",23),r.Dc(31,"Start listening"),r.Rb(),r.Sb(32,"div",17),r.Sb(33,"div",24),r.Ob(34,"div",25),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Ob(35,"br"),r.Sb(36,"div",26),r.Sb(37,"div",27),r.Sb(38,"div",17),r.Sb(39,"h4",28),r.Dc(40," OTHER PODCASTS "),r.Rb(),r.Rb(),r.Rb(),r.Sb(41,"a",22),r.Sb(42,"div",29),r.Sb(43,"div",30),r.Sb(44,"div",31),r.Ob(45,"img",32),r.Rb(),r.Sb(46,"div",33),r.Sb(47,"div",34),r.Sb(48,"h4",35),r.Dc(49," Is the Human Mind Intelligent? "),r.Rb(),r.Rb(),r.Sb(50,"div",36),r.Ob(51,"img",37),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(52,"div",38),r.Sb(53,"div",39),r.Ob(54,"hr",40),r.Rb(),r.Rb(),r.Sb(55,"a",22),r.Sb(56,"div",29),r.Sb(57,"div",30),r.Sb(58,"div",31),r.Ob(59,"img",41),r.Rb(),r.Sb(60,"div",33),r.Sb(61,"div",34),r.Sb(62,"h4",35),r.Dc(63," Introduction to Wisdom "),r.Rb(),r.Rb(),r.Sb(64,"div",36),r.Ob(65,"img",37),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(66,"div",38),r.Sb(67,"div",39),r.Ob(68,"hr",40),r.Rb(),r.Rb(),r.Sb(69,"a",22),r.Sb(70,"div",29),r.Sb(71,"div",30),r.Sb(72,"div",31),r.Ob(73,"img",42),r.Rb(),r.Sb(74,"div",33),r.Sb(75,"div",34),r.Sb(76,"h4",35),r.Dc(77," Racism & Prejudice "),r.Rb(),r.Rb(),r.Sb(78,"div",36),r.Ob(79,"img",37),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(80,"div",38),r.Sb(81,"div",39),r.Ob(82,"hr",40),r.Rb(),r.Rb(),r.Sb(83,"a",22),r.Sb(84,"div",29),r.Sb(85,"div",30),r.Sb(86,"div",31),r.Ob(87,"img",43),r.Rb(),r.Sb(88,"div",33),r.Sb(89,"div",34),r.Sb(90,"h4",35),r.Dc(91," Dealing with Addiction "),r.Rb(),r.Rb(),r.Sb(92,"div",36),r.Ob(93,"img",37),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(94,"div",38),r.Sb(95,"div",39),r.Ob(96,"hr",40),r.Rb(),r.Rb(),r.Sb(97,"a",22),r.Sb(98,"div",29),r.Sb(99,"div",30),r.Sb(100,"div",31),r.Ob(101,"img",44),r.Rb(),r.Sb(102,"div",33),r.Sb(103,"div",34),r.Sb(104,"h4",35),r.Dc(105," Coronavirus - How can wisdom help? "),r.Rb(),r.Rb(),r.Sb(106,"div",36),r.Ob(107,"img",37),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(108,"div",38),r.Sb(109,"div",39),r.Ob(110,"hr",40),r.Rb(),r.Rb(),r.Sb(111,"div",45),r.Sb(112,"div",46),r.Sb(113,"div",47),r.Sb(114,"div",48),r.Sb(115,"h4",49),r.Sb(116,"a",50),r.Sb(117,"div",51),r.Sb(118,"div",17),r.Sb(119,"a"),r.Sb(120,"h6",52),r.Dc(121," View more "),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(122,"div",53),r.Sb(123,"div",54),r.Sb(124,"a",22),r.Sb(125,"div",29),r.Sb(126,"div",30),r.Sb(127,"div",31),r.Ob(128,"img",32),r.Rb(),r.Sb(129,"div",33),r.Sb(130,"div",34),r.Sb(131,"h4",35),r.Dc(132," Is the Human Mind Intelligent? "),r.Rb(),r.Rb(),r.Sb(133,"div",36),r.Ob(134,"img",37),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(135,"div",38),r.Sb(136,"div",39),r.Ob(137,"hr",40),r.Rb(),r.Rb(),r.Sb(138,"a",22),r.Sb(139,"div",29),r.Sb(140,"div",30),r.Sb(141,"div",31),r.Ob(142,"img",41),r.Rb(),r.Sb(143,"div",33),r.Sb(144,"div",34),r.Sb(145,"h4",35),r.Dc(146," Introduction to Wisdom "),r.Rb(),r.Rb(),r.Sb(147,"div",36),r.Ob(148,"img",37),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(149,"div",38),r.Sb(150,"div",39),r.Ob(151,"hr",40),r.Rb(),r.Rb(),r.Sb(152,"a",22),r.Sb(153,"div",29),r.Sb(154,"div",30),r.Sb(155,"div",31),r.Ob(156,"img",42),r.Rb(),r.Sb(157,"div",33),r.Sb(158,"div",34),r.Sb(159,"h4",35),r.Dc(160," Racism & Prejudice "),r.Rb(),r.Rb(),r.Sb(161,"div",36),r.Ob(162,"img",37),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(163,"div",38),r.Sb(164,"div",39),r.Ob(165,"hr",40),r.Rb(),r.Rb(),r.Sb(166,"a",22),r.Sb(167,"div",29),r.Sb(168,"div",30),r.Sb(169,"div",31),r.Ob(170,"img",43),r.Rb(),r.Sb(171,"div",33),r.Sb(172,"div",34),r.Sb(173,"h4",35),r.Dc(174," Dealing with Addiction "),r.Rb(),r.Rb(),r.Sb(175,"div",36),r.Ob(176,"img",37),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(177,"div",38),r.Sb(178,"div",39),r.Ob(179,"hr",40),r.Rb(),r.Rb(),r.Sb(180,"a",22),r.Sb(181,"div",29),r.Sb(182,"div",30),r.Sb(183,"div",31),r.Ob(184,"img",44),r.Rb(),r.Sb(185,"div",33),r.Sb(186,"div",34),r.Sb(187,"h4",35),r.Dc(188," Coronavirus - How can wisdom help? "),r.Rb(),r.Rb(),r.Sb(189,"div",36),r.Ob(190,"img",37),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(191,"div",38),r.Sb(192,"div",39),r.Ob(193,"hr",40),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Ob(194,"div",55),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Ob(195,"app-bottom-navigation"))},directives:[o.t,o.k,o.l,a.j,e.g,n.a],styles:[""]}),b})()}];let c=(()=>{class b{}return b.\u0275fac=function(s){return new(s||b)},b.\u0275mod=r.Lb({type:b}),b.\u0275inj=r.Kb({imports:[[a.k.forChild(d)],a.k]}),b})();var l=i("AuZA");let m=(()=>{class b{}return b.\u0275fac=function(s){return new(s||b)},b.\u0275mod=r.Lb({type:b}),b.\u0275inj=r.Kb({imports:[[t.c,o.f,e.e,c,l.a]]}),b})()}}]);