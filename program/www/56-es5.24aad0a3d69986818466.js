!function(){function e(e,b){if(!(e instanceof b))throw new TypeError("Cannot call a class as a function")}function b(e,b){for(var t=0;t<b.length;t++){var i=b[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,t,i){return t&&b(e.prototype,t),i&&b(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{RdsX:function(b,i,s){"use strict";s.d(i,"a",function(){return S});var o=s("fXoL"),n=s("tyNb"),a=s("ofXK");function r(e,b){1&e&&(o.Sb(0,"div"),o.Ob(1,"img",5),o.Sb(2,"p",6),o.Dc(3," Home "),o.Rb(),o.Rb())}function c(e,b){1&e&&(o.Sb(0,"div"),o.Ob(1,"img",7),o.Sb(2,"p",8),o.Dc(3," Home "),o.Rb(),o.Rb())}function d(e,b){1&e&&(o.Sb(0,"div"),o.Ob(1,"img",9),o.Sb(2,"p",6),o.Dc(3," Journal "),o.Rb(),o.Rb())}function l(e,b){1&e&&(o.Sb(0,"div"),o.Ob(1,"img",10),o.Sb(2,"p",8),o.Dc(3," Journal "),o.Rb(),o.Rb())}function m(e,b){1&e&&(o.Sb(0,"div"),o.Ob(1,"img",11),o.Sb(2,"p",6),o.Dc(3," Forum "),o.Rb(),o.Rb())}function u(e,b){1&e&&(o.Sb(0,"div"),o.Ob(1,"img",12),o.Sb(2,"p",8),o.Dc(3," Forum "),o.Rb(),o.Rb())}function g(e,b){1&e&&(o.Sb(0,"div"),o.Ob(1,"img",13),o.Sb(2,"p",6),o.Dc(3," Profile "),o.Rb(),o.Rb())}function h(e,b){1&e&&(o.Sb(0,"div"),o.Ob(1,"img",14),o.Sb(2,"p",8),o.Dc(3," Profile "),o.Rb(),o.Rb())}function v(e,b){1&e&&(o.Sb(0,"div"),o.Ob(1,"img",15),o.Sb(2,"p",16),o.Dc(3," Login "),o.Rb(),o.Rb())}var S=function(){var b=function(){function b(t){e(this,b),this.router=t,this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!1,this.isloggedIn=!1,this.enableprofile=!1}return t(b,[{key:"ngOnInit",value:function(){"T"===localStorage.getItem("isloggedin")&&(this.isloggedIn=!0,this.Subscriber=localStorage.getItem("Subscriber")),"/adults/adult-dashboard"==this.router.url&&(this.dash=!0,this.journal=!1,this.profile=!1),("/adults/journal"==this.router.url||this.router.url.indexOf("/adults/note")>-1)&&(this.dash=!1,this.profile=!1,this.journal=!0),new RegExp("forum").test(this.router.url)&&(this.dash=!1,this.journal=!1,this.profile=!1,this.fourm=!0),"/onboarding/user-profile"==this.router.url&&(this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!0,"1"===this.Subscriber&&(this.enableprofile=!0))}},{key:"routeDash",value:function(){this.router.navigate(["/adults/adult-dashboard"])}},{key:"routeJournal",value:function(){this.router.navigate(["/adults/journal"])}},{key:"profileclickevent",value:function(){"T"===localStorage.getItem("isloggedin")?this.router.navigate(["/onboarding/user-profile"]):(localStorage.setItem("btnclick","T"),this.router.navigate(["/onboarding/login"]))}},{key:"routeForum",value:function(){this.router.navigate(["/forum"])}}]),b}();return b.\u0275fac=function(e){return new(e||b)(o.Nb(n.g))},b.\u0275cmp=o.Hb({type:b,selectors:[["app-bottom-navigation"]],decls:16,vars:9,consts:[[1,"sidebar-footer","ifooter"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","tcenter","center_flex"],[1,"footer_index",3,"click"],[4,"ngIf"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/home.svg","alt",""],[1,"mb0px","silver_chalice"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/home_active.svg","alt",""],[1,"mb0px"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/journal.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/journal_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_inactive.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/login.svg","alt",""],[1,"mb0px","davy-s_grey"]],template:function(e,b){1&e&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"div",2),o.Sb(3,"a",3),o.ac("click",function(){return b.routeDash()}),o.Bc(4,r,4,0,"div",4),o.Bc(5,c,4,0,"div",4),o.Rb(),o.Sb(6,"a",3),o.ac("click",function(){return b.routeJournal()}),o.Bc(7,d,4,0,"div",4),o.Bc(8,l,4,0,"div",4),o.Rb(),o.Sb(9,"a",3),o.ac("click",function(){return b.routeForum()}),o.Bc(10,m,4,0,"div",4),o.Bc(11,u,4,0,"div",4),o.Rb(),o.Sb(12,"a",3),o.ac("click",function(){return b.profileclickevent()}),o.Bc(13,g,4,0,"div",4),o.Bc(14,h,4,0,"div",4),o.Bc(15,v,4,0,"div",4),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&e&&(o.Ab(4),o.lc("ngIf",!b.dash),o.Ab(1),o.lc("ngIf",b.dash),o.Ab(2),o.lc("ngIf",!b.journal),o.Ab(1),o.lc("ngIf",b.journal),o.Ab(2),o.lc("ngIf",!b.fourm),o.Ab(1),o.lc("ngIf",b.fourm),o.Ab(2),o.lc("ngIf",!b.enableprofile&&b.isloggedIn&&!b.profile),o.Ab(1),o.lc("ngIf",b.enableprofile&&b.profile),o.Ab(1),o.lc("ngIf",!b.isloggedIn))},directives:[a.l],styles:[""]}),b}()},zugi:function(b,i,s){"use strict";s.r(i),s.d(i,"FaqPageModule",function(){return S});var o,n,a,r=s("ofXK"),c=s("3Pt+"),d=s("TEn/"),l=s("tyNb"),m=s("fXoL"),u=s("RdsX"),g=[{path:"",component:(o=function(){function b(){e(this,b)}return t(b,[{key:"ngOnInit",value:function(){}}]),b}(),o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=m.Hb({type:o,selectors:[["app-faq"]],decls:428,vars:0,consts:[[1,"wrapper"],[1,"navbar","navbar-default","navbar-static-top","cnavbar-default"],[1,"row"],[1,"navbar-header","nh","p0","mm_dn"],[1,"col-md-12","col-sm-12","col-xs-12","p0","center_flex"],[1,"col-md-8","col-sm-8","col-xs-6","p20px"],["href","#",1,"cimg"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/logo/hwp_beta.png","alt","",1,"img-responsive"],[1,"col-md-4","col-sm-4","col-xs-6","p0","center_flex"],[1,"col-md-6","col-sm-6","col-xs-6","p0"],[1,"header_login","tcenter"],[1,"col-md-6","col-sm-6","col-xs-6","flex_ai","p0"],[1,"col-md-6","col-sm-6","col-xs-6","center_flex","p0"],["type","button","data-toggle","collapse","aria-expanded","false","aria-controls","navbar",1,"btn_dh"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/alert_unfilled.svg","alt","",1,"img-responsive"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/bookmark_dashboard.svg","alt","",1,"img-responsive"],[1,"col-md-6","col-sm-6","col-xs-3","p0","mr-35px","center_flex"],["type","checkbox","id","menu","name","menu",1,"m-menu__checkbox"],["for","menu",1,"m-menu__toggle","m0px","flex_ai"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/hamburger.svg","alt","",1,"img-responsive"],["for","menu",1,"m-menu__overlay"],[1,"m-menu"],[1,"m-menu__header"],[1,"col-md-12","col-sm-12","col-xs-12","flex_ai"],[1,"col-md-3","col-sm-4","col-xs-4"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/user/profile_01_d.svg","alt","",1,""],[1,"col-md-9","col-sm-8","col-xs-8"],[1,"txt187","mtb0px"],[1,"txt158","mt5pxi","mb0px"],[1,"dh_ul"],[1,"col-md-12","col-sm-12","col-xs-12","p0","flex_ai"],[1,"col-md-2","col-sm-2","col-xs-2"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dhamburger/01.svg","alt","",1,"img-responsive"],[1,"col-md-10","col-sm-10","col-xs-10","p0"],[1,"txt188","mtb0px"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dhamburger/02.svg","alt","",1,"img-responsive"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dhamburger/03.svg","alt","",1,"img-responsive"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dhamburger/04.svg","alt","",1,"img-responsive"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dhamburger/05.svg","alt","",1,"img-responsive"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dhamburger/06.svg","alt","",1,"img-responsive"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dhamburger/07.svg","alt","",1,"img-responsive"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dhamburger/08.svg","alt","",1,"img-responsive"],["data-toggle","modal","data-target","#refer_popup",1,"txt188","mtb0px"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dhamburger/09.svg","alt","",1,"img-responsive"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dhamburger/10.svg","alt","",1,"img-responsive"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dhamburger/11.svg","alt","",1,"img-responsive"],["for","item-2",1,"a-label__chevron"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dhamburger/12.svg","alt","",1,"img-responsive"],[1,"col-md-8","col-sm-8","col-xs-8","p0"],[1,"col-md-2","col-sm-2","col-xs-2","tright"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/chevron_right_white.svg","alt","",1,"img-responsive"],["type","checkbox","id","item-2","name","item-2",1,"m-menu__checkbox"],["for","item-2",1,"m-menu__toggle"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/chevron_right_white.svg","alt","",1,"img-responsive","r180deg"],[1,"p0","b0px"],["for","item-3",1,"a-label__chevron"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dhamburger/13.svg","alt","",1,"img-responsive"],["type","checkbox","id","item-3","name","item-3",1,"m-menu__checkbox"],["for","item-3",1,"m-menu__toggle"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/dhamburger/14.svg","alt","",1,"img-responsive"],[1,"pagebreak"],["id","navbar",1,"navbar-collapse","collapse","hide_nav","dnh"],[1,"col-md-12","col-sm-12","col-xs-12"],[1,"col-md-4","col-sm-1","col-xs-12","p0"],[1,"nav","navbar-nav","navbar-left"],[1,"nav","navbar-nav","cnavbar-nav","pb1rem"],[1,""],["href",""],[1,"col-md-8","col-sm-11","col-xs-12","p0"],[1,"col-md-12","col-sm-12","col-xs-12","p0"],[1,"nav","navbar-nav","navbar-right"],[1,"nav","navbar-nav","cnavbar-nav","mr-20px","pb1rem"],[1,"libr"],["routerLink","/onboarding/profile"],["role","separator",1,"divider"],[1,"nav","navbar-nav","cnavbar-nav"],[1,"dropdown"],["href","#","data-toggle","dropdown","role","button","aria-haspopup","true","aria-expanded","false",1,"dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[1,"active"],["href","","routerLink","/adults/wisdom-survey"],["routerLink","/onboarding/add-to-cart"],["role","main",1,"right_col","pt_rightcol_01","ml0"],[1,"cw100p"],[1,"row","bc_div"],[1,"col-md-6","col-sm-6","col-xs-12"],[1,"scp-breadcrumb"],[1,"breadcrumb","cbc"],["routerLink","/adults/adult-dashboard"],[1,"active","bold"],[1,"row","center_flex","safari_dblock"],[1,"col-md-8","col-sm-8","col-xs-12","p0","bg_aliceblue"],[1,"x_panel","p0"],[1,"x_content","p0","txt_justify"],[1,"tab-content"],["id","home-r",1,"tab-pane","active"],[1,"italic","ol_01","fs_large"],[1,"italic"],["id","profile-r",1,"tab-pane"],["id","messages-r",1,"tab-pane"],["id","settings-r",1,"tab-pane"],[1,"col-md-3","col-sm-12","col-xs-12","display_none"],[1,"nav","nav-tabs","tabs-right","ctabs-right"],[1,"active","w100"],["href","#home-r","data-toggle","tab"],[1,"w100"],["href","#profile-r","data-toggle","tab"],["href","#messages-r","data-toggle","tab"],["href","#settings-r","data-toggle","tab"]],template:function(e,b){1&e&&(m.Sb(0,"div",0),m.Sb(1,"nav",1),m.Sb(2,"div",2),m.Sb(3,"div",3),m.Sb(4,"div",2),m.Sb(5,"div",4),m.Sb(6,"div",5),m.Sb(7,"a",6),m.Ob(8,"img",7),m.Rb(),m.Rb(),m.Sb(9,"div",8),m.Sb(10,"div",9),m.Sb(11,"h4",10),m.Dc(12," Login "),m.Rb(),m.Rb(),m.Sb(13,"div",11),m.Sb(14,"div",12),m.Sb(15,"button",13),m.Ob(16,"img",14),m.Rb(),m.Rb(),m.Sb(17,"div",12),m.Sb(18,"button",13),m.Ob(19,"img",15),m.Rb(),m.Rb(),m.Rb(),m.Sb(20,"div",16),m.Sb(21,"nav"),m.Ob(22,"input",17),m.Sb(23,"label",18),m.Ob(24,"img",19),m.Rb(),m.Ob(25,"label",20),m.Sb(26,"div",21),m.Sb(27,"div",22),m.Sb(28,"div",2),m.Sb(29,"div",23),m.Sb(30,"div",24),m.Ob(31,"img",25),m.Rb(),m.Sb(32,"div",26),m.Sb(33,"h4",27),m.Dc(34," name "),m.Rb(),m.Sb(35,"h4",28),m.Dc(36," View Profile "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(37,"ul",29),m.Sb(38,"li"),m.Sb(39,"div",2),m.Sb(40,"div",30),m.Sb(41,"div",31),m.Ob(42,"img",32),m.Rb(),m.Sb(43,"div",33),m.Sb(44,"h4",34),m.Dc(45," Get a Wisdom Coach "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(46,"li"),m.Sb(47,"div",2),m.Sb(48,"div",30),m.Sb(49,"div",31),m.Ob(50,"img",35),m.Rb(),m.Sb(51,"div",33),m.Sb(52,"h4",34),m.Dc(53," My Progress "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(54,"li"),m.Sb(55,"div",2),m.Sb(56,"div",30),m.Sb(57,"div",31),m.Ob(58,"img",36),m.Rb(),m.Sb(59,"div",33),m.Sb(60,"h4",34),m.Dc(61," Wisdom Survey "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(62,"li"),m.Sb(63,"div",2),m.Sb(64,"div",30),m.Sb(65,"div",31),m.Ob(66,"img",37),m.Rb(),m.Sb(67,"div",33),m.Sb(68,"h4",34),m.Dc(69," Redeem Wisdom Points "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(70,"li"),m.Sb(71,"div",2),m.Sb(72,"div",30),m.Sb(73,"div",31),m.Ob(74,"img",38),m.Rb(),m.Sb(75,"div",33),m.Sb(76,"h4",34),m.Dc(77," HumanWisdom Podcast "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(78,"li"),m.Sb(79,"div",2),m.Sb(80,"div",30),m.Sb(81,"div",31),m.Ob(82,"img",39),m.Rb(),m.Sb(83,"div",33),m.Sb(84,"h4",34),m.Dc(85," My Subscriptions "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(86,"li"),m.Sb(87,"div",2),m.Sb(88,"div",30),m.Sb(89,"div",31),m.Ob(90,"img",40),m.Rb(),m.Sb(91,"div",33),m.Sb(92,"h4",34),m.Dc(93," Give the gift of Wisdom "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(94,"li"),m.Sb(95,"div",2),m.Sb(96,"div",30),m.Sb(97,"div",31),m.Ob(98,"img",41),m.Rb(),m.Sb(99,"div",33),m.Sb(100,"h4",42),m.Dc(101," Refer a Friend "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(102,"li"),m.Sb(103,"div",2),m.Sb(104,"div",30),m.Sb(105,"div",31),m.Ob(106,"img",43),m.Rb(),m.Sb(107,"div",33),m.Sb(108,"h4",34),m.Dc(109," Become a Coach "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(110,"li"),m.Sb(111,"div",2),m.Sb(112,"div",30),m.Sb(113,"div",31),m.Ob(114,"img",44),m.Rb(),m.Sb(115,"div",33),m.Sb(116,"h4",34),m.Dc(117," HumanWisdom Project "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(118,"li"),m.Sb(119,"div",2),m.Sb(120,"div",30),m.Sb(121,"div",31),m.Ob(122,"img",45),m.Rb(),m.Sb(123,"div",33),m.Sb(124,"h4",34),m.Dc(125," Tree Planting Program "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(126,"li"),m.Sb(127,"label",46),m.Sb(128,"div",2),m.Sb(129,"div",30),m.Sb(130,"div",31),m.Ob(131,"img",47),m.Rb(),m.Sb(132,"div",48),m.Sb(133,"h4",34),m.Dc(134," Help & Support "),m.Rb(),m.Rb(),m.Sb(135,"div",49),m.Ob(136,"img",50),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Ob(137,"input",51),m.Sb(138,"div",21),m.Sb(139,"div",22),m.Sb(140,"label",52),m.Sb(141,"div",2),m.Sb(142,"div",30),m.Sb(143,"div",31),m.Ob(144,"img",53),m.Rb(),m.Sb(145,"div",33),m.Sb(146,"h4",34),m.Dc(147," Help & Support "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(148,"ul",29),m.Sb(149,"li"),m.Sb(150,"a",54),m.Sb(151,"div",2),m.Sb(152,"div",30),m.Sb(153,"div",31),m.Ob(154,"img",47),m.Rb(),m.Sb(155,"div",33),m.Sb(156,"h4",34),m.Dc(157," User Guide "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(158,"li"),m.Sb(159,"div",2),m.Sb(160,"div",30),m.Sb(161,"div",31),m.Ob(162,"img",47),m.Rb(),m.Sb(163,"div",33),m.Sb(164,"h4",34),m.Dc(165," FAQ "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(166,"li"),m.Sb(167,"div",2),m.Sb(168,"div",30),m.Sb(169,"div",31),m.Ob(170,"img",47),m.Rb(),m.Sb(171,"div",33),m.Sb(172,"h4",34),m.Dc(173," Help Centre "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(174,"li"),m.Sb(175,"div",2),m.Sb(176,"div",30),m.Sb(177,"div",31),m.Ob(178,"img",47),m.Rb(),m.Sb(179,"div",33),m.Sb(180,"h4",34),m.Dc(181," Contact Us "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(182,"li"),m.Sb(183,"div",2),m.Sb(184,"div",30),m.Sb(185,"div",31),m.Ob(186,"img",47),m.Rb(),m.Sb(187,"div",33),m.Sb(188,"h4",34),m.Dc(189," Terms & Conditions "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(190,"li"),m.Sb(191,"label",55),m.Sb(192,"div",2),m.Sb(193,"div",30),m.Sb(194,"div",31),m.Ob(195,"img",56),m.Rb(),m.Sb(196,"div",48),m.Sb(197,"h4",34),m.Dc(198," Settings "),m.Rb(),m.Rb(),m.Sb(199,"div",49),m.Ob(200,"img",50),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Ob(201,"input",57),m.Sb(202,"div",21),m.Sb(203,"div",22),m.Sb(204,"label",58),m.Sb(205,"div",2),m.Sb(206,"div",30),m.Sb(207,"div",31),m.Ob(208,"img",53),m.Rb(),m.Sb(209,"div",33),m.Sb(210,"h4",34),m.Dc(211," Settings "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(212,"ul",29),m.Sb(213,"li"),m.Sb(214,"div",2),m.Sb(215,"div",30),m.Sb(216,"div",31),m.Ob(217,"img",56),m.Rb(),m.Sb(218,"div",33),m.Sb(219,"h4",34),m.Dc(220," Account Settings "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(221,"li"),m.Sb(222,"div",2),m.Sb(223,"div",30),m.Sb(224,"div",31),m.Ob(225,"img",56),m.Rb(),m.Sb(226,"div",33),m.Sb(227,"h4",34),m.Dc(228," Privacy Policy "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(229,"li"),m.Sb(230,"div",2),m.Sb(231,"div",30),m.Sb(232,"div",31),m.Ob(233,"img",56),m.Rb(),m.Sb(234,"div",33),m.Sb(235,"h4",34),m.Dc(236," Report a Problem "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(237,"li"),m.Sb(238,"div",2),m.Sb(239,"div",30),m.Sb(240,"div",31),m.Ob(241,"img",56),m.Rb(),m.Sb(242,"div",33),m.Sb(243,"h4",34),m.Dc(244," Security "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(245,"li"),m.Sb(246,"div",2),m.Sb(247,"div",30),m.Sb(248,"div",31),m.Ob(249,"img",59),m.Rb(),m.Sb(250,"div",33),m.Sb(251,"h4",34),m.Dc(252," Logout "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Ob(253,"div",60),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(254,"div",61),m.Sb(255,"div",2),m.Sb(256,"div",62),m.Sb(257,"div",63),m.Sb(258,"ul",64),m.Sb(259,"ul",65),m.Sb(260,"li",66),m.Sb(261,"a",67),m.Ob(262,"img",7),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(263,"div",68),m.Sb(264,"div",69),m.Sb(265,"ul",70),m.Sb(266,"ul",71),m.Sb(267,"li",72),m.Sb(268,"a",67),m.Dc(269,"userName"),m.Rb(),m.Rb(),m.Sb(270,"li",72),m.Sb(271,"a",67),m.Dc(272,"Help"),m.Rb(),m.Rb(),m.Sb(273,"li",66),m.Sb(274,"a",73),m.Dc(275,"My Profile"),m.Rb(),m.Rb(),m.Ob(276,"li",74),m.Rb(),m.Rb(),m.Rb(),m.Sb(277,"div",69),m.Sb(278,"ul",70),m.Sb(279,"ul",75),m.Sb(280,"li"),m.Sb(281,"a",67),m.Dc(282,"About"),m.Rb(),m.Rb(),m.Sb(283,"li",76),m.Sb(284,"a",77),m.Dc(285,"Our Programs "),m.Ob(286,"span",78),m.Rb(),m.Sb(287,"ul",79),m.Sb(288,"li"),m.Sb(289,"a",67),m.Dc(290,"Children"),m.Rb(),m.Rb(),m.Sb(291,"li"),m.Sb(292,"a",67),m.Dc(293,"Teenager"),m.Rb(),m.Rb(),m.Sb(294,"li"),m.Sb(295,"a",67),m.Dc(296,"Adults"),m.Rb(),m.Rb(),m.Sb(297,"li"),m.Sb(298,"a",67),m.Dc(299,"Parents"),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(300,"li",80),m.Sb(301,"a",67),m.Dc(302,"Community"),m.Rb(),m.Rb(),m.Sb(303,"li"),m.Sb(304,"a",81),m.Dc(305,"Wisdom Survey"),m.Rb(),m.Rb(),m.Sb(306,"li"),m.Sb(307,"a",67),m.Dc(308,"Wisdom Journal"),m.Rb(),m.Rb(),m.Sb(309,"li"),m.Sb(310,"a",82),m.Dc(311,"Subscribe"),m.Rb(),m.Rb(),m.Sb(312,"li"),m.Sb(313,"a",67),m.Dc(314,"Testimonials"),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(315,"div",83),m.Sb(316,"div",84),m.Sb(317,"div",85),m.Sb(318,"div",86),m.Sb(319,"h4",66),m.Dc(320," Frequently Asked Questions "),m.Rb(),m.Rb(),m.Sb(321,"div",86),m.Sb(322,"div",87),m.Sb(323,"ul",88),m.Sb(324,"li"),m.Sb(325,"a",89),m.Dc(326,"Home"),m.Rb(),m.Rb(),m.Sb(327,"li",90),m.Sb(328,"a"),m.Dc(329,"FAQs"),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Ob(330,"br"),m.Sb(331,"div",91),m.Sb(332,"div",92),m.Sb(333,"div",93),m.Sb(334,"div",94),m.Sb(335,"form"),m.Sb(336,"div",2),m.Sb(337,"div",62),m.Sb(338,"div",62),m.Sb(339,"div",95),m.Sb(340,"div",96),m.Sb(341,"div",2),m.Sb(342,"ol",97),m.Sb(343,"li"),m.Sb(344,"h4",66),m.Dc(345,"What is the Human Wisdom Program?"),m.Rb(),m.Sb(346,"p"),m.Dc(347," This is an online program to help you discover your own wisdom, so you may realise its many benefits. "),m.Rb(),m.Rb(),m.Ob(348,"br"),m.Sb(349,"li"),m.Sb(350,"h4",66),m.Dc(351,"What is wisdom? "),m.Rb(),m.Sb(352,"p"),m.Dc(353," It\u2019s the ability to live with inner intelligence, and be an excellent human being who meets life\u2019s challenges with calm, has happy relationships, and lives with compassion and a sense of peace. This comes naturally when you understand yourself and how your mind works. "),m.Rb(),m.Rb(),m.Ob(354,"br"),m.Sb(355,"li"),m.Sb(356,"h4",66),m.Dc(357,"I\u2019m not sure it is for me \u2013 how can I find out? "),m.Rb(),m.Sb(358,"p"),m.Dc(359," This is not a program that is telling you how to live your life, or what to do. It\u2019s going to help you understand yourself better, so you can live a rich life, free of conflict, and discover your own wisdom. "),m.Rb(),m.Rb(),m.Ob(360,"br"),m.Sb(361,"li"),m.Sb(362,"h4",66),m.Dc(363,"How is this different from other methods? "),m.Rb(),m.Sb(364,"p"),m.Dc(365," It depends what you are referring to. In general I would say this is different because it helps you to understand the root cause of a problem and address it at that deep level, rather than just treating the symptoms, or trying to do the change using will-power. For example, you may try and not be envious, but that does not work, but by understanding the root of it in your thinking, you can be free of it. "),m.Rb(),m.Rb(),m.Ob(366,"br"),m.Sb(367,"li"),m.Sb(368,"h4",66),m.Dc(369,"Is this self-understanding difficult? "),m.Rb(),m.Sb(370,"p"),m.Dc(371," No it\u2019s not. It just feels strange because it was never part of our education and whatever is new feels strange. We are just exploring the way our minds function. "),m.Rb(),m.Rb(),m.Ob(372,"br"),m.Sb(373,"li"),m.Sb(374,"h4",66),m.Dc(375,"How long does it take to learn? "),m.Rb(),m.Sb(376,"p"),m.Dc(377," There is not fixed end-point to this. It\u2019s a journey of learning about yourself and how your mind works. This learning is from moment to moment. It\u2019s like learning to play the piano \u2013 difficult at first, but gets easier the more you practise. In the end, the more you put into this the more you learn. "),m.Rb(),m.Rb(),m.Ob(378,"br"),m.Sb(379,"li"),m.Sb(380,"h4",66),m.Dc(381,"Is this based on any religious teaching or ideology? "),m.Rb(),m.Sb(382,"p"),m.Dc(383," No. This is not based on any religious teaching or ideology, but you may find similarities between this program and other teachers and books. After all we are just exploring and understanding the mind we all share, and this has been studied by other human beings for thousands of years. The key thing is to explore it yourself and see what you can learn. That learning brings change. This program is a step-by-step approach to help you discover this wisdom for yourself. "),m.Rb(),m.Rb(),m.Ob(384,"br"),m.Sb(385,"li"),m.Sb(386,"h4",66),m.Dc(387,"How best should you navigate the program? "),m.Rb(),m.Sb(388,"p"),m.Dc(389," There are no rules, and you are free to explore it as you wish. There are a number of options: "),m.Rb(),m.Sb(390,"ul"),m.Sb(391,"li"),m.Sb(392,"p",98),m.Dc(393," Start from the beginning and go through to the end "),m.Rb(),m.Rb(),m.Sb(394,"li"),m.Sb(395,"p",98),m.Dc(396," Begin with \u2018Nurturing a quiet mind\u2019 and \u2018The art of enquiry\u2019 and then do the rest as "),m.Rb(),m.Rb(),m.Sb(397,"li"),m.Sb(398,"p",98),m.Dc(399," Begin with a specific subject you are interested in, like stress, and then explore the "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Ob(400,"br"),m.Sb(401,"li"),m.Sb(402,"h4",66),m.Dc(403,"What should I do if I want to teach this wisdom to children? "),m.Rb(),m.Sb(404,"p"),m.Dc(405," We have a separate children\u2019s section which is designed for adults to explore this wisdom with young children, aged 5-15. After that, they can do the adult program. We would suggest you begin learning yourself, and do the adult program, and then use the resources in the kids section to explore this with your children. "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(406,"div",99),m.Dc(407,"Profile Tab."),m.Rb(),m.Sb(408,"div",100),m.Dc(409,"Messages Tab."),m.Rb(),m.Sb(410,"div",101),m.Dc(411,"Settings Tab."),m.Rb(),m.Rb(),m.Rb(),m.Sb(412,"div",102),m.Sb(413,"ul",103),m.Sb(414,"li",104),m.Sb(415,"a",105),m.Dc(416,"Section 1"),m.Rb(),m.Rb(),m.Sb(417,"li",106),m.Sb(418,"a",107),m.Dc(419,"Section 2"),m.Rb(),m.Rb(),m.Sb(420,"li",106),m.Sb(421,"a",108),m.Dc(422,"Section 3"),m.Rb(),m.Rb(),m.Sb(423,"li",106),m.Sb(424,"a",109),m.Dc(425,"Section 4"),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Ob(426,"div",60),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Ob(427,"app-bottom-navigation"),m.Rb())},directives:[l.j,d.g,c.t,c.k,c.l,u.a],styles:['nav[_ngcontent-%COMP%]   .m-menu__checkbox[_ngcontent-%COMP%]{display:none}nav[_ngcontent-%COMP%]   label.m-menu__toggle[_ngcontent-%COMP%]{cursor:pointer}nav[_ngcontent-%COMP%]   .m-menu[_ngcontent-%COMP%]{position:fixed;top:0;right:0;max-width:450px;width:calc(100vw - 75px);height:100%;transform:translate3d(450px,0,0);transition:transform .35s;z-index:9999;overflow:hidden;background:linear-gradient(180deg,#70c6bd,#1092a7);box-shadow:-2px 0 4px rgba(0,0,0,.25)}nav[_ngcontent-%COMP%]   .m-menu__overlay[_ngcontent-%COMP%]{background-color:hsla(0,0%,40%,.5);position:fixed;top:0;width:100%;bottom:0;z-index:1;display:none;left:0;margin:0!important}nav[_ngcontent-%COMP%]   .m-menu__header[_ngcontent-%COMP%]{height:120px;background:#70c6bd;box-shadow:0 1px 2px rgba(0,0,0,.2);display:flex;align-items:center;padding:30px 20px}nav[_ngcontent-%COMP%]   .m-menu__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700;text-align:center;width:100%}nav[_ngcontent-%COMP%]   .m-menu[_ngcontent-%COMP%]   .m-menu[_ngcontent-%COMP%]{transform:translate3d(480px,0,0)}nav[_ngcontent-%COMP%]   .m-menu[_ngcontent-%COMP%]   ul.dh_ul[_ngcontent-%COMP%]{height:100%;height:-webkit-fill-available;overflow-y:auto;background:linear-gradient(180deg,#70c6bd,#1092a7);box-shadow:-2px 0 4px rgba(0,0,0,.25);list-style-type:none!important;padding:30px 20px}nav[_ngcontent-%COMP%]   .m-menu[_ngcontent-%COMP%]   ul.dh_ul[_ngcontent-%COMP%]   ul.dh_ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:22px 0 0!important}nav[_ngcontent-%COMP%]   .m-menu[_ngcontent-%COMP%]   ul.dh_ul[_ngcontent-%COMP%]   ul.dh_ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .m-menu[_ngcontent-%COMP%]   ul.dh_ul[_ngcontent-%COMP%]   ul.dh_ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;text-align:left;padding:0 15px;line-height:47px;text-decoration:none;color:#333;cursor:pointer;font-size:1rem;border-bottom:1px solid #e8e8e8;position:relative}nav[_ngcontent-%COMP%]   .m-menu[_ngcontent-%COMP%]   ul.dh_ul[_ngcontent-%COMP%]   ul.dh_ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label.a-label__chevron[_ngcontent-%COMP%]:after{content:"";position:absolute;display:inline-block;height:10px;width:10px;border-color:#333;border-style:solid;border-width:1px 1px 0 0;transform:rotate(45deg);top:50%;margin-top:-5px;right:0}nav[_ngcontent-%COMP%]   .m-menu[_ngcontent-%COMP%]   ul.dh_ul[_ngcontent-%COMP%]   ul.dh_ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .-invisible[_ngcontent-%COMP%]{border-bottom:0}nav[_ngcontent-%COMP%]   .m-menu__checkbox[_ngcontent-%COMP%]:checked ~ .m-menu__overlay[_ngcontent-%COMP%]{display:block}nav[_ngcontent-%COMP%]   .m-menu__checkbox[_ngcontent-%COMP%]:checked ~ .m-menu[_ngcontent-%COMP%]{transform:translateZ(0)}']}),o)}],h=((n=function b(){e(this,b)}).\u0275fac=function(e){return new(e||n)},n.\u0275mod=m.Lb({type:n}),n.\u0275inj=m.Kb({imports:[[l.k.forChild(g)],l.k]}),n),v=s("AuZA"),S=((a=function b(){e(this,b)}).\u0275fac=function(e){return new(e||a)},a.\u0275mod=m.Lb({type:a}),a.\u0275inj=m.Kb({imports:[[r.c,c.f,d.e,h,v.a]]}),a)}}])}();