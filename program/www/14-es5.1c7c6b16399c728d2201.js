!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{RdsX:function(t,i,s){"use strict";s.d(i,"a",function(){return g});var r=s("fXoL"),n=s("tyNb"),a=s("ofXK");function c(e,t){1&e&&(r.Sb(0,"div"),r.Ob(1,"img",5),r.Sb(2,"p",6),r.Dc(3," Home "),r.Rb(),r.Rb())}function b(e,t){1&e&&(r.Sb(0,"div"),r.Ob(1,"img",7),r.Sb(2,"p",8),r.Dc(3," Home "),r.Rb(),r.Rb())}function l(e,t){1&e&&(r.Sb(0,"div"),r.Ob(1,"img",9),r.Sb(2,"p",6),r.Dc(3," Journal "),r.Rb(),r.Rb())}function u(e,t){1&e&&(r.Sb(0,"div"),r.Ob(1,"img",10),r.Sb(2,"p",8),r.Dc(3," Journal "),r.Rb(),r.Rb())}function d(e,t){1&e&&(r.Sb(0,"div"),r.Ob(1,"img",11),r.Sb(2,"p",6),r.Dc(3," Forum "),r.Rb(),r.Rb())}function f(e,t){1&e&&(r.Sb(0,"div"),r.Ob(1,"img",12),r.Sb(2,"p",8),r.Dc(3," Forum "),r.Rb(),r.Rb())}function h(e,t){1&e&&(r.Sb(0,"div"),r.Ob(1,"img",13),r.Sb(2,"p",6),r.Dc(3," Profile "),r.Rb(),r.Rb())}function v(e,t){1&e&&(r.Sb(0,"div"),r.Ob(1,"img",14),r.Sb(2,"p",8),r.Dc(3," Profile "),r.Rb(),r.Rb())}function m(e,t){1&e&&(r.Sb(0,"div"),r.Ob(1,"img",15),r.Sb(2,"p",16),r.Dc(3," Login "),r.Rb(),r.Rb())}var g=function(){var t=function(){function t(o){e(this,t),this.router=o,this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!1,this.isloggedIn=!1,this.enableprofile=!1}return o(t,[{key:"ngOnInit",value:function(){"T"===localStorage.getItem("isloggedin")&&(this.isloggedIn=!0,this.Subscriber=localStorage.getItem("Subscriber")),"/adults/adult-dashboard"==this.router.url&&(this.dash=!0,this.journal=!1,this.profile=!1),("/adults/journal"==this.router.url||this.router.url.indexOf("/adults/note")>-1)&&(this.dash=!1,this.profile=!1,this.journal=!0),new RegExp("forum").test(this.router.url)&&(this.dash=!1,this.journal=!1,this.profile=!1,this.fourm=!0),"/onboarding/user-profile"==this.router.url&&(this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!0,"1"===this.Subscriber&&(this.enableprofile=!0))}},{key:"routeDash",value:function(){this.router.navigate(["/adults/adult-dashboard"])}},{key:"routeJournal",value:function(){this.router.navigate(["/adults/journal"])}},{key:"profileclickevent",value:function(){"T"===localStorage.getItem("isloggedin")?this.router.navigate(["/onboarding/user-profile"]):(localStorage.setItem("btnclick","T"),this.router.navigate(["/onboarding/login"]))}},{key:"routeForum",value:function(){this.router.navigate(["/forum"])}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Nb(n.g))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-bottom-navigation"]],decls:16,vars:9,consts:[[1,"sidebar-footer","ifooter"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","tcenter","center_flex"],[1,"footer_index",3,"click"],[4,"ngIf"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/home.svg","alt",""],[1,"mb0px","silver_chalice"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/home_active.svg","alt",""],[1,"mb0px"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/journal.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/journal_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_inactive.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/login.svg","alt",""],[1,"mb0px","davy-s_grey"]],template:function(e,t){1&e&&(r.Sb(0,"div",0),r.Sb(1,"div",1),r.Sb(2,"div",2),r.Sb(3,"a",3),r.ac("click",function(){return t.routeDash()}),r.Bc(4,c,4,0,"div",4),r.Bc(5,b,4,0,"div",4),r.Rb(),r.Sb(6,"a",3),r.ac("click",function(){return t.routeJournal()}),r.Bc(7,l,4,0,"div",4),r.Bc(8,u,4,0,"div",4),r.Rb(),r.Sb(9,"a",3),r.ac("click",function(){return t.routeForum()}),r.Bc(10,d,4,0,"div",4),r.Bc(11,f,4,0,"div",4),r.Rb(),r.Sb(12,"a",3),r.ac("click",function(){return t.profileclickevent()}),r.Bc(13,h,4,0,"div",4),r.Bc(14,v,4,0,"div",4),r.Bc(15,m,4,0,"div",4),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&e&&(r.Ab(4),r.lc("ngIf",!t.dash),r.Ab(1),r.lc("ngIf",t.dash),r.Ab(2),r.lc("ngIf",!t.journal),r.Ab(1),r.lc("ngIf",t.journal),r.Ab(2),r.lc("ngIf",!t.fourm),r.Ab(1),r.lc("ngIf",t.fourm),r.Ab(2),r.lc("ngIf",!t.enableprofile&&t.isloggedIn&&!t.profile),r.Ab(1),r.lc("ngIf",t.enableprofile&&t.profile),r.Ab(1),r.lc("ngIf",!t.isloggedIn))},directives:[a.l],styles:[""]}),t}()},USy8:function(t,i,s){"use strict";s.d(i,"a",function(){return a});var r=s("mrSG"),n=s("fXoL"),a=function(){var t=function(){function t(){e(this,t),this.webNavigator=null,this.webNavigator=window.navigator}return o(t,[{key:"canShare",value:function(){return null!==this.webNavigator&&void 0!==this.webNavigator.share}},{key:"canShareFile",value:function(e){return null!==this.webNavigator&&void 0!==this.webNavigator.share&&this.webNavigator.canShare({files:e})}},{key:"share",value:function(e){var t=this,o=e.title,i=e.text,s=e.url,n=e.files;return new Promise(function(e,a){return Object(r.a)(t,void 0,void 0,regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null===this.webNavigator||void 0===this.webNavigator.share){t.next=18;break}if(null!=i||null!=s){t.next=5;break}console.warn("text and url both can't be empty, at least provide either text or url"),t.next=16;break;case 5:return t.prev=5,r={title:o,text:i,url:s},n&&0!==n.length&&(r.files=n),t.next=10,this.webNavigator.share(r);case 10:e({shared:!0}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),a({shared:!1,error:t.t0});case 16:t.next=19;break;case 18:a({shared:!1,error:"This service/api is not supported in your Browser"});case 19:case"end":return t.stop()}},t,this,[[5,13]])}))})}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(n.Jb)({factory:function(){return new t},token:t,providedIn:"root"}),t=Object(r.b)([Object(r.d)("design:paramtypes",[])],t)}()},xAv7:function(t,i,s){"use strict";s.r(i),s.d(i,"AllStoriesPageModule",function(){return y});var r=s("ofXK"),n=s("3Pt+"),a=s("TEn/"),c=s("tyNb"),b=s("fXoL"),l=s("Hvql"),u=s("Kuf+"),d=s("RdsX"),f=function(e,t){return{wisdom_stories_inactive:e,wisdom_stories:t}};function h(e,t){if(1&e){var o=b.Tb();b.Sb(0,"div"),b.Sb(1,"div",30),b.ac("click",function(){b.wc(o);var e=t.$implicit;return b.ec().toRead(e)}),b.Sb(2,"div",31),b.Sb(3,"div",32),b.Ob(4,"img",33),b.Rb(),b.Sb(5,"div",34),b.Sb(6,"div",13),b.Sb(7,"div",35),b.Sb(8,"div",14),b.Sb(9,"h6",36),b.Dc(10),b.Rb(),b.Rb(),b.Rb(),b.Sb(11,"div",14),b.Sb(12,"h6",37),b.Dc(13),b.fc(14,"slice"),b.Rb(),b.Rb(),b.Sb(15,"div",38),b.Ob(16,"div",39),b.Sb(17,"div",39),b.Sb(18,"h6",40),b.Dc(19),b.fc(20,"date"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb()}if(2&e){var i=t.$implicit,s=b.ec();b.Ab(4),b.mc("src",i.Img,b.yc),b.Ab(1),b.lc("ngClass",b.qc(12,f,!s.readStories.includes(i.ScenarioID),s.readStories.includes(i.ScenarioID))),b.Ab(5),b.Fc(" ",i.Title," "),b.Ab(3),b.Fc(" ",b.ic(14,5,i.Story,0,40),"... "),b.Ab(6),b.Fc(" ",b.hc(20,9,i.PublishedOn,"dd MMM yy")," | 5 mins ")}}function v(e,t){if(1&e){var o=b.Tb();b.Sb(0,"div"),b.Sb(1,"div",30),b.ac("click",function(){b.wc(o);var e=t.$implicit;return b.ec().toRead(e)}),b.Sb(2,"div",31),b.Sb(3,"div",32),b.Ob(4,"img",33),b.Rb(),b.Sb(5,"div",34),b.Sb(6,"div",13),b.Sb(7,"div",35),b.Sb(8,"div",14),b.Sb(9,"h6",36),b.Dc(10),b.Rb(),b.Rb(),b.Rb(),b.Sb(11,"div",14),b.Sb(12,"h6",37),b.Dc(13),b.fc(14,"slice"),b.Rb(),b.Rb(),b.Sb(15,"div",38),b.Ob(16,"div",39),b.Sb(17,"div",39),b.Sb(18,"h6",40),b.Dc(19),b.fc(20,"date"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb()}if(2&e){var i=t.$implicit,s=b.ec();b.Ab(4),b.mc("src",i.Img,b.yc),b.Ab(1),b.lc("ngClass",b.qc(12,f,!s.readStories.includes(i.ScenarioID),s.readStories.includes(i.ScenarioID))),b.Ab(5),b.Fc(" ",i.Title," "),b.Ab(3),b.Fc(" ",b.ic(14,5,i.Story,0,40),"... "),b.Ab(6),b.Fc(" ",b.hc(20,9,i.PublishedOn,"dd MMM yy")," | 5 mins ")}}var m,g,p,S=[{path:"",component:(m=function(){function t(o,i,s){e(this,t),this.router=o,this.service=i,this.location=s,this.storyList=[],this.secondstoryList=[],this.readStories=[]}return o(t,[{key:"ngOnInit",value:function(){this.getStories()}},{key:"goBack",value:function(){this.location.back()}},{key:"getStories",value:function(){var e=this;this.service.getScenarios().subscribe(function(t){if(t){var o=t.sort(function(e,t){return t.PublishedOn-e.PublishedOn});e.storyList=o.slice(0,10),e.secondstoryList=o.slice(10),localStorage.setItem("storyList",JSON.stringify(e.storyList))}},function(e){return console.log(e)},function(){var t=localStorage.getItem("isloggedin");t&&"T"===t&&e.service.readStories().subscribe(function(t){console.log(t),e.readStories=t.map(function(e){return e.ScenarioID}),console.log(e.readStories)})})}},{key:"toRead",value:function(e){var t=this;console.log(e),localStorage.setItem("story",JSON.stringify(e));var o=localStorage.getItem("isloggedin");this.sId=e.ScenarioID,o&&"T"===o?this.service.clickStory(e.ScenarioID).subscribe(function(e){t.router.navigate(["/wisdom-stories/view-stories"],{queryParams:{sId:"".concat(t.sId)}})}):this.router.navigate(["/wisdom-stories/view-stories"],{queryParams:{sId:"".concat(this.sId)}})}},{key:"searchStory",value:function(){var e=this;""==this.searchedText?this.getStories():""!=this.searchedText&&(this.storyList=this.storyList.filter(function(t){return t.Story.toLowerCase().includes(e.searchedText.toLowerCase())||t.Title.toLowerCase().includes(e.searchedText.toLowerCase())}))}}]),t}(),m.\u0275fac=function(e){return new(e||m)(b.Nb(c.g),b.Nb(l.a),b.Nb(r.h))},m.\u0275cmp=b.Hb({type:m,selectors:[["app-all-stories"]],decls:42,vars:3,consts:[["name","description","content","Real-life stories submitted by users across the world. You can also submit your own story. All the stories are subject to approval."],["title","Wisdom Stories"],["role","main",1,"right_col","bg_wisdom_stories","pt_rightcol"],[1,"cw100p"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0","h100p"],[1,"x_panel","xpanel_01","p0"],[1,"x_content","p0"],[1,"row","mlr-10px"],[1,"col-md-12","col-sm-12","col-xs-12","p0"],[1,"col-md-12","col-sm-12","col-xs-12","form-group","has-feedback","p0","zi0","search_01"],["type","search","id","inputSuccess2","name","textSearch","placeholder","Search Wisdom Stories",1,"form-control","has-feedback-left","h60px","searchtxt",3,"ngModel","ngModelChange"],["aria-hidden","true",1,"fa","fa-search","form-control-feedback","left","sfeedback"],[1,"row"],[1,"col-md-12","col-sm-12","col-xs-12"],[1,"txt89"],[1,"row","center_flex","pt20px"],[1,"col-md-12","col-sm-12","col-xs-12","tcenter"],["routerLink","/adults/wisdom-stories/submit-story"],["type","button","data-dismiss","modal",1,"btn","btn-success","mb0","btn_submit_story","w100"],[1,"row","plr20px"],[1,"txt90"],[4,"ngFor","ngForOf"],["id","accordion_ws",1,"panel-group","ws_view_more"],[1,"panel","panel-default"],[1,"panel-heading"],["data-toggle","collapse","data-parent","#accordion","href","#ws_01",1,"accordion-toggle"],[1,"txt111","mtb0px","tcenter","mb20px","twhite"],["id","ws_01",1,"panel-collapse","collapse"],[1,"panel-body"],[1,"row","center_flex","pb10px",3,"click"],[1,"col-md-12","col-sm-12","col-xs-12","dflex"],[1,"col-md-2","col-sm-2","col-xs-3","p0"],["alt","",1,"w100","c150px",3,"src"],[1,"col-md-10","col-sm-10","col-xs-9","center_flex",3,"ngClass"],[1,"col-md-12","col-sm-12","col-xs-12","p0","center_flex"],[1,"txt69","mtb0px","capitalize"],[1,"txt70","ellipsis"],[1,"col-md-12","col-sm-12","col-xs-12","center_flex","pt5px"],[1,"col-md-6","col-sm-6","col-xs-6","p0"],[1,"txt72","mtb0px"]],template:function(e,t){1&e&&(b.Sb(0,"title"),b.Dc(1,"Wisdom Stories|Wisdom for Personal Growth|HumanWisdom"),b.Rb(),b.Ob(2,"meta",0),b.Ob(3,"app-feature-header",1),b.Sb(4,"div",2),b.Sb(5,"div",3),b.Sb(6,"div",4),b.Sb(7,"div",5),b.Sb(8,"div",6),b.Sb(9,"div",7),b.Sb(10,"form"),b.Sb(11,"div",8),b.Ob(12,"div",9),b.Sb(13,"div",10),b.Sb(14,"input",11),b.ac("ngModelChange",function(e){return t.searchedText=e})("ngModelChange",function(){return t.searchStory()}),b.Rb(),b.Ob(15,"span",12),b.Rb(),b.Rb(),b.Sb(16,"div",13),b.Sb(17,"div",14),b.Sb(18,"h6",15),b.Dc(19," These are all real-life stories submitted by users from across the world. All names have been changed. They offer illumination, hope, and nuggets of wisdom, and we hope they inspire you to submit your own story. "),b.Rb(),b.Rb(),b.Rb(),b.Sb(20,"div",16),b.Sb(21,"div",17),b.Sb(22,"a",18),b.Sb(23,"button",19),b.Dc(24," Submit your own story "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(25,"div",20),b.Sb(26,"div",14),b.Sb(27,"h6",21),b.Dc(28," All stories are subject to approval "),b.Rb(),b.Rb(),b.Rb(),b.Bc(29,h,21,15,"div",22),b.Sb(30,"div",23),b.Sb(31,"div",24),b.Sb(32,"div",25),b.Sb(33,"a",26),b.Sb(34,"div",13),b.Sb(35,"div",14),b.Sb(36,"h4",27),b.Dc(37," View more "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(38,"div",28),b.Sb(39,"div",29),b.Bc(40,v,21,15,"div",22),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Ob(41,"app-bottom-navigation")),2&e&&(b.Ab(14),b.lc("ngModel",t.searchedText),b.Ab(15),b.lc("ngForOf",t.storyList),b.Ab(11),b.lc("ngForOf",t.secondstoryList))},directives:[u.a,n.t,n.k,n.l,n.b,n.j,n.m,c.j,a.g,r.k,d.a,r.j],pipes:[r.q,r.e],styles:[""]}),m)}],w=((g=function t(){e(this,t)}).\u0275fac=function(e){return new(e||g)},g.\u0275mod=b.Lb({type:g}),g.\u0275inj=b.Kb({imports:[[c.k.forChild(S)],c.k]}),g),R=s("AuZA"),y=((p=function t(){e(this,t)}).\u0275fac=function(e){return new(e||p)},p.\u0275mod=b.Lb({type:p}),p.\u0275inj=b.Kb({imports:[[r.c,n.f,a.e,w,R.a]]}),p)}}])}();