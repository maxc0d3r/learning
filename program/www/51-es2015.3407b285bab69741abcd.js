(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{RdsX:function(e,t,s){"use strict";s.d(t,"a",function(){return g});var o=s("fXoL"),i=s("tyNb"),r=s("ofXK");function n(e,t){1&e&&(o.Sb(0,"div"),o.Ob(1,"img",5),o.Sb(2,"p",6),o.Dc(3," Home "),o.Rb(),o.Rb())}function a(e,t){1&e&&(o.Sb(0,"div"),o.Ob(1,"img",7),o.Sb(2,"p",8),o.Dc(3," Home "),o.Rb(),o.Rb())}function c(e,t){1&e&&(o.Sb(0,"div"),o.Ob(1,"img",9),o.Sb(2,"p",6),o.Dc(3," Journal "),o.Rb(),o.Rb())}function l(e,t){1&e&&(o.Sb(0,"div"),o.Ob(1,"img",10),o.Sb(2,"p",8),o.Dc(3," Journal "),o.Rb(),o.Rb())}function b(e,t){1&e&&(o.Sb(0,"div"),o.Ob(1,"img",11),o.Sb(2,"p",6),o.Dc(3," Forum "),o.Rb(),o.Rb())}function d(e,t){1&e&&(o.Sb(0,"div"),o.Ob(1,"img",12),o.Sb(2,"p",8),o.Dc(3," Forum "),o.Rb(),o.Rb())}function u(e,t){1&e&&(o.Sb(0,"div"),o.Ob(1,"img",13),o.Sb(2,"p",6),o.Dc(3," Profile "),o.Rb(),o.Rb())}function h(e,t){1&e&&(o.Sb(0,"div"),o.Ob(1,"img",14),o.Sb(2,"p",8),o.Dc(3," Profile "),o.Rb(),o.Rb())}function f(e,t){1&e&&(o.Sb(0,"div"),o.Ob(1,"img",15),o.Sb(2,"p",16),o.Dc(3," Login "),o.Rb(),o.Rb())}let g=(()=>{class e{constructor(e){this.router=e,this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!1,this.isloggedIn=!1,this.enableprofile=!1}ngOnInit(){"T"===localStorage.getItem("isloggedin")&&(this.isloggedIn=!0,this.Subscriber=localStorage.getItem("Subscriber")),"/adults/adult-dashboard"==this.router.url&&(this.dash=!0,this.journal=!1,this.profile=!1),("/adults/journal"==this.router.url||this.router.url.indexOf("/adults/note")>-1)&&(this.dash=!1,this.profile=!1,this.journal=!0),new RegExp("forum").test(this.router.url)&&(this.dash=!1,this.journal=!1,this.profile=!1,this.fourm=!0),"/onboarding/user-profile"==this.router.url&&(this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!0,"1"===this.Subscriber&&(this.enableprofile=!0))}routeDash(){this.router.navigate(["/adults/adult-dashboard"])}routeJournal(){this.router.navigate(["/adults/journal"])}profileclickevent(){"T"===localStorage.getItem("isloggedin")?this.router.navigate(["/onboarding/user-profile"]):(localStorage.setItem("btnclick","T"),this.router.navigate(["/onboarding/login"]))}routeForum(){this.router.navigate(["/forum"])}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(i.g))},e.\u0275cmp=o.Hb({type:e,selectors:[["app-bottom-navigation"]],decls:16,vars:9,consts:[[1,"sidebar-footer","ifooter"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","tcenter","center_flex"],[1,"footer_index",3,"click"],[4,"ngIf"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/home.svg","alt",""],[1,"mb0px","silver_chalice"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/home_active.svg","alt",""],[1,"mb0px"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/journal.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/journal_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_inactive.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/login.svg","alt",""],[1,"mb0px","davy-s_grey"]],template:function(e,t){1&e&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"div",2),o.Sb(3,"a",3),o.ac("click",function(){return t.routeDash()}),o.Bc(4,n,4,0,"div",4),o.Bc(5,a,4,0,"div",4),o.Rb(),o.Sb(6,"a",3),o.ac("click",function(){return t.routeJournal()}),o.Bc(7,c,4,0,"div",4),o.Bc(8,l,4,0,"div",4),o.Rb(),o.Sb(9,"a",3),o.ac("click",function(){return t.routeForum()}),o.Bc(10,b,4,0,"div",4),o.Bc(11,d,4,0,"div",4),o.Rb(),o.Sb(12,"a",3),o.ac("click",function(){return t.profileclickevent()}),o.Bc(13,u,4,0,"div",4),o.Bc(14,h,4,0,"div",4),o.Bc(15,f,4,0,"div",4),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&e&&(o.Ab(4),o.lc("ngIf",!t.dash),o.Ab(1),o.lc("ngIf",t.dash),o.Ab(2),o.lc("ngIf",!t.journal),o.Ab(1),o.lc("ngIf",t.journal),o.Ab(2),o.lc("ngIf",!t.fourm),o.Ab(1),o.lc("ngIf",t.fourm),o.Ab(2),o.lc("ngIf",!t.enableprofile&&t.isloggedIn&&!t.profile),o.Ab(1),o.lc("ngIf",t.enableprofile&&t.profile),o.Ab(1),o.lc("ngIf",!t.isloggedIn))},directives:[r.l],styles:[""]}),e})()},USy8:function(e,t,s){"use strict";s.d(t,"a",function(){return r});var o=s("mrSG"),i=s("fXoL");let r=(()=>{let e=class{constructor(){this.webNavigator=null,this.webNavigator=window.navigator}canShare(){return null!==this.webNavigator&&void 0!==this.webNavigator.share}canShareFile(e){return null!==this.webNavigator&&void 0!==this.webNavigator.share&&this.webNavigator.canShare({files:e})}share({title:e,text:t,url:s,files:i}){return new Promise((r,n)=>Object(o.a)(this,void 0,void 0,function*(){if(null!==this.webNavigator&&void 0!==this.webNavigator.share)if(null==t&&null==s)console.warn("text and url both can't be empty, at least provide either text or url");else try{const o={title:e,text:t,url:s};i&&0!==i.length&&(o.files=i),yield this.webNavigator.share(o),r({shared:!0})}catch(o){n({shared:!1,error:o})}else n({shared:!1,error:"This service/api is not supported in your Browser"})}))}};return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(i.Jb)({factory:function(){return new e},token:e,providedIn:"root"}),e=Object(o.b)([Object(o.d)("design:paramtypes",[])],e),e})()},Vgjn:function(e,t,s){"use strict";s.r(t),s.d(t,"JournalPageModule",function(){return S});var o=s("ofXK"),i=s("3Pt+"),r=s("TEn/"),n=s("tyNb"),a=s("fXoL"),c=s("Hvql"),l=s("Kuf+"),b=s("RdsX");const d=function(e){return[e]};function u(e,t){if(1&e&&a.Ob(0,"li",37),2&e){const e=t.index;a.lc("ngClass",a.pc(2,d,0===e?"active":"")),a.Bb("data-slide-to",e)}}function h(e,t){if(1&e){const e=a.Tb();a.Sb(0,"div",38),a.ac("click",function(){a.wc(e);const s=t.index,o=a.ec();return o.goToNote(o.d[s].QueId,o.d[s].Qtn,o.d[s].Ans,"dq")}),a.Sb(1,"div",39),a.Sb(2,"div",33),a.Sb(3,"h4",34),a.Dc(4," YOUR PRIVATE DIARY "),a.Rb(),a.Rb(),a.Rb(),a.Sb(5,"div",40),a.Sb(6,"div",41),a.Sb(7,"div",42),a.Sb(8,"div",43),a.Sb(9,"h4",44),a.Dc(10),a.Rb(),a.Rb(),a.Sb(11,"div",45),a.Sb(12,"textarea",46),a.Dc(13),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb()}if(2&e){const e=t.index,s=a.ec();a.lc("ngClass",a.pc(3,d,0===e?"item active":"item")),a.Ab(10),a.Ec(s.d[e].Qtn),a.Ab(3),a.Ec(s.d[e].Ans)}}function f(e,t){if(1&e){const e=a.Tb();a.Sb(0,"div",49),a.ac("click",function(){a.wc(e);const t=a.ec().$implicit;return a.ec().goToNote(t.RowId,t.TitleQue,t.Response,"reflection")}),a.Sb(1,"div",50),a.Sb(2,"h4",51),a.Dc(3),a.Rb(),a.Rb(),a.Sb(4,"h4",52),a.Dc(5),a.fc(6,"date"),a.Rb(),a.Sb(7,"h4",53),a.Dc(8),a.Rb(),a.Sb(9,"h4",54),a.Dc(10),a.fc(11,"slice"),a.Rb(),a.Rb()}if(2&e){const e=a.ec().$implicit;a.Ab(3),a.Ec(e.ModuleName),a.Ab(2),a.Ec(a.gc(6,4,e.Date)),a.Ab(3),a.Ec(e.TitleQue),a.Ab(2),a.Fc("",a.ic(11,6,e.Response,0,40),"...")}}function g(e,t){if(1&e){const e=a.Tb();a.Sb(0,"div",49),a.ac("click",function(){a.wc(e);const t=a.ec().$implicit;return a.ec().goToNote(t.RowId,t.TitleQue,t.Response,"journal")}),a.Sb(1,"h4",52),a.Dc(2),a.fc(3,"date"),a.Rb(),a.Sb(4,"h4",53),a.Dc(5),a.Rb(),a.Sb(6,"h4",54),a.Dc(7),a.fc(8,"slice"),a.Rb(),a.Rb()}if(2&e){const e=a.ec().$implicit;a.Ab(2),a.Ec(a.gc(3,3,e.Date)),a.Ab(3),a.Ec(e.TitleQue),a.Ab(2),a.Fc("",a.ic(8,5,e.Response,0,40),"...")}}function p(e,t){if(1&e&&(a.Sb(0,"div",39),a.Sb(1,"div",33),a.Sb(2,"div",47),a.Bc(3,f,12,10,"div",48),a.Bc(4,g,9,9,"div",48),a.Rb(),a.Rb(),a.Rb()),2&e){const e=t.$implicit;a.Ab(3),a.lc("ngIf",e.ProgName),a.Ab(1),a.lc("ngIf",!e.ProgName)}}const v=[{path:"",component:(()=>{class e{constructor(e,t,s){this.router=e,this.location=t,this.service=s,this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.journalList=[],this.reflectionList=[],this.jrList=[],this.jrListC=[]}ngOnInit(){this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),this.viewJournalAndReflections(),this.getDailyQuestion()}viewJournalAndReflections(){this.service.viewJournal(this.userId).subscribe(e=>{this.jrList=e,this.jrList.sort((e,t)=>new Date(t.Date)-new Date(e.Date)),this.jrListC=this.jrList,console.log("jr sorted",this.jrList)})}goToNote(e,t,s,o){console.log(e,t,s,o),this.router.navigate(["/adults/note",{title:t,jId:e,jNotes:s,type:o}])}note(){this.router.navigate(["/adults/note"])}getDailyQuestion(){this.service.getDailyQuestion(this.userId).subscribe(e=>{console.log("daily",e),this.d=e,this.dailyQuestion=e[0].Qtn,this.dailyResponse=e[0].Ans,this.dailyId=e[0].QueId,console.log(this.dailyQuestion,this.dailyResponse)},e=>{console.log(e)})}addDailyQuestion(e){console.log(e,this.dailyResponse),this.service.addDailyQuestion({SubscriberID:this.userId,ReflectionId:e,Resp:this.dailyResponse}).subscribe(e=>{},e=>{console.log(e)})}searchText(){""==this.searchedText?this.viewJournalAndReflections():""!=this.searchedText&&(this.jrList=this.jrList.filter(e=>e.Response.toLowerCase().includes(this.searchedText.toLowerCase())||e.TitleQue.toLowerCase().includes(this.searchedText.toLowerCase())))}showAll(){console.log("shwAll"),this.viewJournalAndReflections()}showReflections(){console.log("in reflections"),this.jrList=this.jrListC.filter(e=>"0"!=e.ProgId)}showNotes(){console.log("in notes"),this.jrList=this.jrListC.filter(e=>"0"==e.ProgId)}goBack(){this.location.back()}}return e.\u0275fac=function(t){return new(t||e)(a.Nb(n.g),a.Nb(o.h),a.Nb(c.a))},e.\u0275cmp=a.Hb({type:e,selectors:[["app-journal"]],decls:54,vars:4,consts:[["title","Your Journal"],["role","main",1,"right_col","bg_journal","pt_rightcol"],[1,"cw100p"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","p0","h100p"],[1,"x_panel","xpanel_01","p0"],[1,"x_content","p0"],[1,"row","mlr-10px"],[1,"col-md-12","col-sm-12","col-xs-12","p0"],[1,"col-md-12","col-sm-12","col-xs-12","form-group","has-feedback","p0","zi0","search_01"],["type","search","id","inputSuccess2","name","searchEn","placeholder","Search Journal (Comparison)",1,"form-control","has-feedback-left","h60px","searchtxt",3,"ngModel","ngModelChange"],["aria-hidden","true",1,"fa","fa-search","form-control-feedback","left","sfeedback"],[1,"row","center_flex","pb2rem"],[1,"col-md-12","col-sm-12","col-xs-12","p0","flex_ai"],[1,"col-md-9","col-sm-9","col-xs-9","cfjs"],[1,"anr",3,"click"],[1,"txt39"],[1,"col-md-3","col-sm-3","col-xs-3","cffe"],["type","button",1,"btn","btn-default","btn_plus",3,"click"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/plus.svg","alt","",1,"img-responsive"],[1,"row",3,"click"],[1,"carousel-fixed-height"],["id","jdqcarousel","data-ride","carousel","data-interval","3000000",1,"carousel","slide"],[1,"carousel-indicators"],["data-target","#jdqcarousel",3,"ngClass",4,"ngFor","ngForOf"],["role","listbox",1,"carousel-inner","center_flex"],[3,"ngClass","click",4,"ngFor","ngForOf"],["href","#jdqcarousel","role","button","data-slide","prev",1,"left","carousel-control"],["aria-hidden","true",1,"fa","fa-chevron-left"],[1,"sr-only"],["href","#jdqcarousel","role","button","data-slide","next",1,"right","carousel-control"],["aria-hidden","true",1,"fa","fa-chevron-right"],[1,"row","mt20px","mb10px"],[1,"col-md-12","col-sm-12","col-xs-12"],[1,"txt181"],["class","row",4,"ngFor","ngForOf"],[1,"pagebreak"],["data-target","#jdqcarousel",3,"ngClass"],[3,"ngClass","click"],[1,"row"],[1,"row","mt6p","center_flex"],[1,"col-md-12","col-sm-12","col-xs-11"],[1,"panel","panel-default","cpdefault_01"],[1,"panel-heading","cptitle_01"],[1,"panel-title","w100","tcenter","ellipsis"],[1,"panel-body"],["rows","5","placeholder","Type here...",1,"form-control","cptextarea_01"],[1,"panel","panel-default","cpdefault","prelative"],["class","panel-body",3,"click",4,"ngIf"],[1,"panel-body",3,"click"],[1,"panel-heading","absolute_ptitle"],[1,"panel-title"],[1,"txt36"],[1,"txt37"],[1,"txt38"]],template:function(e,t){1&e&&(a.Sb(0,"title"),a.Dc(1,"Your Journal | HumanWisdom"),a.Rb(),a.Ob(2,"app-feature-header",0),a.Sb(3,"div",1),a.Sb(4,"div",2),a.Sb(5,"div",3),a.Sb(6,"div",4),a.Sb(7,"div",5),a.Sb(8,"div",6),a.Sb(9,"form"),a.Sb(10,"div",7),a.Ob(11,"div",8),a.Sb(12,"div",9),a.Sb(13,"input",10),a.ac("ngModelChange",function(e){return t.searchedText=e})("ngModelChange",function(){return t.searchText()}),a.Rb(),a.Ob(14,"span",11),a.Rb(),a.Rb(),a.Sb(15,"div",12),a.Sb(16,"div",13),a.Sb(17,"div",14),a.Sb(18,"a",15),a.ac("click",function(){return t.showAll()}),a.Sb(19,"h4",16),a.Dc(20," All "),a.Rb(),a.Rb(),a.Sb(21,"a",15),a.ac("click",function(){return t.showNotes()}),a.Sb(22,"h4",16),a.Dc(23," Diary "),a.Rb(),a.Rb(),a.Sb(24,"a",15),a.ac("click",function(){return t.showReflections()}),a.Sb(25,"h4",16),a.Dc(26," Reflections "),a.Rb(),a.Rb(),a.Rb(),a.Sb(27,"div",17),a.Sb(28,"button",18),a.ac("click",function(){return t.goToNote(0,"","","note")}),a.Ob(29,"img",19),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(30,"div",20),a.ac("click",function(){return t.goToNote(t.d.QueId,t.d.Qtn,t.d.Ans,"dq")}),a.Rb(),a.Sb(31,"div",7),a.Sb(32,"div",8),a.Sb(33,"section",21),a.Sb(34,"div",22),a.Sb(35,"ol",23),a.Bc(36,u,1,4,"li",24),a.Rb(),a.Sb(37,"div",25),a.Bc(38,h,14,5,"div",26),a.Rb(),a.Sb(39,"a",27),a.Ob(40,"span",28),a.Sb(41,"span",29),a.Dc(42,"Previous"),a.Rb(),a.Rb(),a.Sb(43,"a",30),a.Ob(44,"span",31),a.Sb(45,"span",29),a.Dc(46,"Next"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(47,"div",32),a.Sb(48,"div",33),a.Sb(49,"h4",34),a.Dc(50," RECENT "),a.Rb(),a.Rb(),a.Rb(),a.Bc(51,p,5,2,"div",35),a.Ob(52,"div",36),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Ob(53,"app-bottom-navigation")),2&e&&(a.Ab(13),a.lc("ngModel",t.searchedText),a.Ab(23),a.lc("ngForOf",t.d),a.Ab(2),a.lc("ngForOf",t.d),a.Ab(13),a.lc("ngForOf",t.jrList))},directives:[l.a,i.t,i.k,i.l,i.b,i.j,i.m,o.k,b.a,o.j,o.l],pipes:[o.e,o.q],styles:[""]}),e})()}];let m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({imports:[[n.k.forChild(v)],n.k]}),e})();var R=s("AuZA");let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({imports:[[o.c,i.f,r.e,m,R.a]]}),e})()}}]);