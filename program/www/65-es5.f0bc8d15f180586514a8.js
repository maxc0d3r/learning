!function(){function b(b,i){if(!(b instanceof i))throw new TypeError("Cannot call a class as a function")}function i(b,i){for(var s=0;s<i.length;s++){var t=i[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(b,t.key,t)}}function s(b,s,t){return s&&i(b.prototype,s),t&&i(b,t),b}(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{RdsX:function(i,t,e){"use strict";e.d(t,"a",function(){return p});var o=e("fXoL"),a=e("tyNb"),n=e("ofXK");function r(b,i){1&b&&(o.Sb(0,"div"),o.Ob(1,"img",5),o.Sb(2,"p",6),o.Dc(3," Home "),o.Rb(),o.Rb())}function d(b,i){1&b&&(o.Sb(0,"div"),o.Ob(1,"img",7),o.Sb(2,"p",8),o.Dc(3," Home "),o.Rb(),o.Rb())}function c(b,i){1&b&&(o.Sb(0,"div"),o.Ob(1,"img",9),o.Sb(2,"p",6),o.Dc(3," Journal "),o.Rb(),o.Rb())}function l(b,i){1&b&&(o.Sb(0,"div"),o.Ob(1,"img",10),o.Sb(2,"p",8),o.Dc(3," Journal "),o.Rb(),o.Rb())}function u(b,i){1&b&&(o.Sb(0,"div"),o.Ob(1,"img",11),o.Sb(2,"p",6),o.Dc(3," Forum "),o.Rb(),o.Rb())}function v(b,i){1&b&&(o.Sb(0,"div"),o.Ob(1,"img",12),o.Sb(2,"p",8),o.Dc(3," Forum "),o.Rb(),o.Rb())}function m(b,i){1&b&&(o.Sb(0,"div"),o.Ob(1,"img",13),o.Sb(2,"p",6),o.Dc(3," Profile "),o.Rb(),o.Rb())}function S(b,i){1&b&&(o.Sb(0,"div"),o.Ob(1,"img",14),o.Sb(2,"p",8),o.Dc(3," Profile "),o.Rb(),o.Rb())}function R(b,i){1&b&&(o.Sb(0,"div"),o.Ob(1,"img",15),o.Sb(2,"p",16),o.Dc(3," Login "),o.Rb(),o.Rb())}var p=function(){var i=function(){function i(s){b(this,i),this.router=s,this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!1,this.isloggedIn=!1,this.enableprofile=!1}return s(i,[{key:"ngOnInit",value:function(){"T"===localStorage.getItem("isloggedin")&&(this.isloggedIn=!0,this.Subscriber=localStorage.getItem("Subscriber")),"/adults/adult-dashboard"==this.router.url&&(this.dash=!0,this.journal=!1,this.profile=!1),("/adults/journal"==this.router.url||this.router.url.indexOf("/adults/note")>-1)&&(this.dash=!1,this.profile=!1,this.journal=!0),new RegExp("forum").test(this.router.url)&&(this.dash=!1,this.journal=!1,this.profile=!1,this.fourm=!0),"/onboarding/user-profile"==this.router.url&&(this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!0,"1"===this.Subscriber&&(this.enableprofile=!0))}},{key:"routeDash",value:function(){this.router.navigate(["/adults/adult-dashboard"])}},{key:"routeJournal",value:function(){this.router.navigate(["/adults/journal"])}},{key:"profileclickevent",value:function(){"T"===localStorage.getItem("isloggedin")?this.router.navigate(["/onboarding/user-profile"]):(localStorage.setItem("btnclick","T"),this.router.navigate(["/onboarding/login"]))}},{key:"routeForum",value:function(){this.router.navigate(["/forum"])}}]),i}();return i.\u0275fac=function(b){return new(b||i)(o.Nb(a.g))},i.\u0275cmp=o.Hb({type:i,selectors:[["app-bottom-navigation"]],decls:16,vars:9,consts:[[1,"sidebar-footer","ifooter"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","tcenter","center_flex"],[1,"footer_index",3,"click"],[4,"ngIf"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/home.svg","alt",""],[1,"mb0px","silver_chalice"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/home_active.svg","alt",""],[1,"mb0px"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/journal.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/journal_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_inactive.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/login.svg","alt",""],[1,"mb0px","davy-s_grey"]],template:function(b,i){1&b&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"div",2),o.Sb(3,"a",3),o.ac("click",function(){return i.routeDash()}),o.Bc(4,r,4,0,"div",4),o.Bc(5,d,4,0,"div",4),o.Rb(),o.Sb(6,"a",3),o.ac("click",function(){return i.routeJournal()}),o.Bc(7,c,4,0,"div",4),o.Bc(8,l,4,0,"div",4),o.Rb(),o.Sb(9,"a",3),o.ac("click",function(){return i.routeForum()}),o.Bc(10,u,4,0,"div",4),o.Bc(11,v,4,0,"div",4),o.Rb(),o.Sb(12,"a",3),o.ac("click",function(){return i.profileclickevent()}),o.Bc(13,m,4,0,"div",4),o.Bc(14,S,4,0,"div",4),o.Bc(15,R,4,0,"div",4),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&b&&(o.Ab(4),o.lc("ngIf",!i.dash),o.Ab(1),o.lc("ngIf",i.dash),o.Ab(2),o.lc("ngIf",!i.journal),o.Ab(1),o.lc("ngIf",i.journal),o.Ab(2),o.lc("ngIf",!i.fourm),o.Ab(1),o.lc("ngIf",i.fourm),o.Ab(2),o.lc("ngIf",!i.enableprofile&&i.isloggedIn&&!i.profile),o.Ab(1),o.lc("ngIf",i.enableprofile&&i.profile),o.Ab(1),o.lc("ngIf",!i.isloggedIn))},directives:[n.l],styles:[""]}),i}()},lKBy:function(i,t,e){"use strict";e.r(t),e.d(t,"PodcastStartPageModule",function(){return p});var o,a,n,r=e("ofXK"),d=e("3Pt+"),c=e("TEn/"),l=e("tyNb"),u=e("fXoL"),v=e("RdsX"),m=[{path:"",component:(o=function(){function i(){b(this,i)}return s(i,[{key:"ngOnInit",value:function(){}}]),i}(),o.\u0275fac=function(b){return new(b||o)},o.\u0275cmp=u.Hb({type:o,selectors:[["app-podcast-start"]],decls:196,vars:0,consts:[[1,"top_nav","ml0","tcenter","inav"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/podcast/01_a.jpg","alt","",1,"img-responsive","iw100"],[1,"nav_menu","absolute_top","p20px"],[1,"nav","navbar-nav","navbar_left","cnav","inavbar","flex_align"],[1,""],["data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle","c_silver_chalice"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/back_white.svg","alt","",1,"p0"],[1,"lishare"],["href","javascript:;","data-toggle","dropdown","aria-expanded","false",1,"cuser-profile","dropdown-toggle"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/share_white.svg","alt","",1,"p0"],["role","main",1,"right_col","ml0","bg_white","pb5_5rem"],[1,"cw100p"],[1,"row","center_flex"],[1,"col-md-6","col-sm-8","col-xs-12","p0"],[1,"x_panel","p0","bg_white","c_zambezi"],[1,"x_content","fwunset","tleft"],[1,"row"],[1,"col-md-12","col-sm-12","col-xs-12"],[1,"module_title"],[1,"txt_comparison"],[1,"row","center_flex","pb30px"],[1,"col-md-12","col-sm-12","col-xs-12","tcenter"],["routerLink","/adults/guided-meditation/s51002"],["type","button","data-dismiss","modal",1,"btn","btn-success","mb0","btn_podcast_01"],[1,"progress","btn_progress"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar",2,"width","25%"],[1,"toc_podcast"],[1,"row","pt30px","pb10px"],[1,"txt158","plr10px"],[1,"row","toc_sections","box","m0px"],[1,"col-md-12","col-sm-12","col-xs-12","p0","center_flex"],[1,"col-md-2","col-sm-2","col-xs-2"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/podcast/02_b.png","alt","",1,"translucent_border"],[1,"col-md-10","col-sm-10","col-xs-10","p0","center_flex"],[1,"col-md-10","col-sm-10","col-xs-10","p0"],[1,"txt159","mtb0px","ml15pxi"],[1,"col-md-2","col-sm-2","col-xs-2","tright"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/toc_audio.svg","alt","",1,""],[1,"row","jc_flex_end"],[1,"col-md-10","col-sm-10","col-xs-10","plr20px"],[1,"hr_style_5"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/podcast/03_b.png","alt","",1,"translucent_border"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/podcast/04_b.png","alt","",1,"translucent_border"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/podcast/05_b.png","alt","",1,"translucent_border"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/podcast/06_b.png","alt","",1,"translucent_border"],[1,"mlr-10px"],["id","coach_accordion",1,"panel-group"],[1,"panel","panel-default","bg_transparent"],[1,"panel-heading","bg_transparent","p0"],[1,"panel-title"],["data-toggle","collapse","data-parent","#coach_accordion","href","#a1"],[1,"row","ptb20px"],[1,"txt160","tcenter"],["id","a1",1,"panel-collapse","collapse"],[1,"panel-body","pt0px","plr10px"],[1,"pagebreak"]],template:function(b,i){1&b&&(u.Sb(0,"div",0),u.Ob(1,"img",1),u.Sb(2,"div",2),u.Sb(3,"nav"),u.Sb(4,"ul",3),u.Sb(5,"li",4),u.Sb(6,"a",5),u.Ob(7,"img",6),u.Rb(),u.Rb(),u.Sb(8,"li",7),u.Sb(9,"a",8),u.Ob(10,"img",9),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(11,"div",10),u.Sb(12,"div",11),u.Sb(13,"div",12),u.Sb(14,"div",13),u.Sb(15,"div",14),u.Sb(16,"div",15),u.Sb(17,"form"),u.Sb(18,"div",16),u.Sb(19,"div",17),u.Sb(20,"h1",18),u.Dc(21," Why do we argue? "),u.Rb(),u.Rb(),u.Rb(),u.Sb(22,"div",16),u.Sb(23,"div",17),u.Sb(24,"h4",19),u.Dc(25," Pellentesque eleifend nibh eu tellus tristique gravida. Integer dui velit, bibendum eu semper ac, molestie sit amet dolor. "),u.Rb(),u.Rb(),u.Rb(),u.Ob(26,"br"),u.Sb(27,"div",20),u.Sb(28,"div",21),u.Sb(29,"a",22),u.Sb(30,"button",23),u.Dc(31,"Start listening"),u.Rb(),u.Sb(32,"div",17),u.Sb(33,"div",24),u.Ob(34,"div",25),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Ob(35,"br"),u.Sb(36,"div",26),u.Sb(37,"div",27),u.Sb(38,"div",17),u.Sb(39,"h4",28),u.Dc(40," OTHER PODCASTS "),u.Rb(),u.Rb(),u.Rb(),u.Sb(41,"a",22),u.Sb(42,"div",29),u.Sb(43,"div",30),u.Sb(44,"div",31),u.Ob(45,"img",32),u.Rb(),u.Sb(46,"div",33),u.Sb(47,"div",34),u.Sb(48,"h4",35),u.Dc(49," Is the Human Mind Intelligent? "),u.Rb(),u.Rb(),u.Sb(50,"div",36),u.Ob(51,"img",37),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(52,"div",38),u.Sb(53,"div",39),u.Ob(54,"hr",40),u.Rb(),u.Rb(),u.Sb(55,"a",22),u.Sb(56,"div",29),u.Sb(57,"div",30),u.Sb(58,"div",31),u.Ob(59,"img",41),u.Rb(),u.Sb(60,"div",33),u.Sb(61,"div",34),u.Sb(62,"h4",35),u.Dc(63," Introduction to Wisdom "),u.Rb(),u.Rb(),u.Sb(64,"div",36),u.Ob(65,"img",37),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(66,"div",38),u.Sb(67,"div",39),u.Ob(68,"hr",40),u.Rb(),u.Rb(),u.Sb(69,"a",22),u.Sb(70,"div",29),u.Sb(71,"div",30),u.Sb(72,"div",31),u.Ob(73,"img",42),u.Rb(),u.Sb(74,"div",33),u.Sb(75,"div",34),u.Sb(76,"h4",35),u.Dc(77," Racism & Prejudice "),u.Rb(),u.Rb(),u.Sb(78,"div",36),u.Ob(79,"img",37),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(80,"div",38),u.Sb(81,"div",39),u.Ob(82,"hr",40),u.Rb(),u.Rb(),u.Sb(83,"a",22),u.Sb(84,"div",29),u.Sb(85,"div",30),u.Sb(86,"div",31),u.Ob(87,"img",43),u.Rb(),u.Sb(88,"div",33),u.Sb(89,"div",34),u.Sb(90,"h4",35),u.Dc(91," Dealing with Addiction "),u.Rb(),u.Rb(),u.Sb(92,"div",36),u.Ob(93,"img",37),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(94,"div",38),u.Sb(95,"div",39),u.Ob(96,"hr",40),u.Rb(),u.Rb(),u.Sb(97,"a",22),u.Sb(98,"div",29),u.Sb(99,"div",30),u.Sb(100,"div",31),u.Ob(101,"img",44),u.Rb(),u.Sb(102,"div",33),u.Sb(103,"div",34),u.Sb(104,"h4",35),u.Dc(105," Coronavirus - How can wisdom help? "),u.Rb(),u.Rb(),u.Sb(106,"div",36),u.Ob(107,"img",37),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(108,"div",38),u.Sb(109,"div",39),u.Ob(110,"hr",40),u.Rb(),u.Rb(),u.Sb(111,"div",45),u.Sb(112,"div",46),u.Sb(113,"div",47),u.Sb(114,"div",48),u.Sb(115,"h4",49),u.Sb(116,"a",50),u.Sb(117,"div",51),u.Sb(118,"div",17),u.Sb(119,"a"),u.Sb(120,"h6",52),u.Dc(121," View more "),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(122,"div",53),u.Sb(123,"div",54),u.Sb(124,"a",22),u.Sb(125,"div",29),u.Sb(126,"div",30),u.Sb(127,"div",31),u.Ob(128,"img",32),u.Rb(),u.Sb(129,"div",33),u.Sb(130,"div",34),u.Sb(131,"h4",35),u.Dc(132," Is the Human Mind Intelligent? "),u.Rb(),u.Rb(),u.Sb(133,"div",36),u.Ob(134,"img",37),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(135,"div",38),u.Sb(136,"div",39),u.Ob(137,"hr",40),u.Rb(),u.Rb(),u.Sb(138,"a",22),u.Sb(139,"div",29),u.Sb(140,"div",30),u.Sb(141,"div",31),u.Ob(142,"img",41),u.Rb(),u.Sb(143,"div",33),u.Sb(144,"div",34),u.Sb(145,"h4",35),u.Dc(146," Introduction to Wisdom "),u.Rb(),u.Rb(),u.Sb(147,"div",36),u.Ob(148,"img",37),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(149,"div",38),u.Sb(150,"div",39),u.Ob(151,"hr",40),u.Rb(),u.Rb(),u.Sb(152,"a",22),u.Sb(153,"div",29),u.Sb(154,"div",30),u.Sb(155,"div",31),u.Ob(156,"img",42),u.Rb(),u.Sb(157,"div",33),u.Sb(158,"div",34),u.Sb(159,"h4",35),u.Dc(160," Racism & Prejudice "),u.Rb(),u.Rb(),u.Sb(161,"div",36),u.Ob(162,"img",37),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(163,"div",38),u.Sb(164,"div",39),u.Ob(165,"hr",40),u.Rb(),u.Rb(),u.Sb(166,"a",22),u.Sb(167,"div",29),u.Sb(168,"div",30),u.Sb(169,"div",31),u.Ob(170,"img",43),u.Rb(),u.Sb(171,"div",33),u.Sb(172,"div",34),u.Sb(173,"h4",35),u.Dc(174," Dealing with Addiction "),u.Rb(),u.Rb(),u.Sb(175,"div",36),u.Ob(176,"img",37),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(177,"div",38),u.Sb(178,"div",39),u.Ob(179,"hr",40),u.Rb(),u.Rb(),u.Sb(180,"a",22),u.Sb(181,"div",29),u.Sb(182,"div",30),u.Sb(183,"div",31),u.Ob(184,"img",44),u.Rb(),u.Sb(185,"div",33),u.Sb(186,"div",34),u.Sb(187,"h4",35),u.Dc(188," Coronavirus - How can wisdom help? "),u.Rb(),u.Rb(),u.Sb(189,"div",36),u.Ob(190,"img",37),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(191,"div",38),u.Sb(192,"div",39),u.Ob(193,"hr",40),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Ob(194,"div",55),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Ob(195,"app-bottom-navigation"))},directives:[d.t,d.k,d.l,l.j,c.g,v.a],styles:[""]}),o)}],S=((a=function i(){b(this,i)}).\u0275fac=function(b){return new(b||a)},a.\u0275mod=u.Lb({type:a}),a.\u0275inj=u.Kb({imports:[[l.k.forChild(m)],l.k]}),a),R=e("AuZA"),p=((n=function i(){b(this,i)}).\u0275fac=function(b){return new(b||n)},n.\u0275mod=u.Lb({type:n}),n.\u0275inj=u.Kb({imports:[[r.c,d.f,c.e,S,R.a]]}),n)}}])}();