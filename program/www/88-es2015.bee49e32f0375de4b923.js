(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"+bfl":function(t,e,i){"use strict";i.d(e,"a",function(){return n});var s=i("AytR"),r=i("tk/3"),a=i("fXoL");let n=(()=>{class t{constructor(t,e){this.http=t,this.path=s.a.apiURL}getPricing(t){return this.http.get(this.path+`/CountryRates/${t}`)}getCurrencies(){return this.http.get(this.path+"/getCurrencies")}getTestimonials(){return this.http.get(this.path+"/Testimonials")}addUser(t){return this.http.post(this.path+"/AddLearner",t)}verifyGoogle(t){return this.http.post(this.path+"/verifyGoogleTokenAndLogin",t)}verifyFb(t){return this.http.post(this.path+"/verifyFaceBookTokenAndLogin",t)}emailLogin(t,e){let i=(new r.e).set("email",t).set("pwd",e);return this.http.get(this.path+"/login",{params:i})}forgotPassword(t){return this.http.post(this.path+"/forgotPassword",t)}setPassword(t){return this.http.post(this.path+"/SetPassword",t)}addItem(t){return this.http.post(this.path+"/Addcart",t)}editactiveCart(t){return this.http.post(this.path+"/EditCart",t)}deleteItem(t){return this.http.post(this.path+`/Deletecart/${t.Id}`,null)}viewCart(t){return console.log(t.Id),this.http.get(this.path+`/ViewCart/${t.Id}`)}editCart(t,e){return console.log(t.Id,e.Id),this.http.post(this.path+`/EditCart/${t.Id}/${e.Id}`,null)}couponValidation(t){return this.http.post(this.path+"/couponValidation",t)}verifyActivationKey(t,e,i){return console.log(t,e),this.http.get(this.path+`/VerifyActKey/${e}/${t}/${i}`)}sendPasswordLink(t){let e=(new r.e).set("email",t);return this.http.get(this.path+"/PasswordLink",{params:e})}assignKey(t){return this.http.post(this.path+"/AssignKey",t)}verifyUser(t){return this.http.post(this.path+`/VerifyUserByEmail/${t}`,null)}learnerKeys(t){return this.http.post(this.path+`/learnerKeys/${t}`,null)}verifyCode(t){return this.http.post(this.path+"/verificationCode",t)}socialLearner(t){return this.http.post(this.path+"/LearnerSocial",t)}getCountry(){return this.http.get("https://ipapi.co/json")}getToken(){return JSON.parse(localStorage.getItem("token"))}addRefer(t){return this.http.post(this.path+"/AddRefer",t)}stripe(t){return this.http.post(this.path+"/StripePay",t)}myprogram(t){return this.http.get(this.path+`/myPrograms/${t}`)}sendinvite(t){return this.http.post(this.path+"/AssignKey",t)}uploaderAvatar(t){return this.http.post(this.path+"/UploadAvatar",t)}getuser(t){return this.http.get(this.path+`/Users/${t}`)}updateUser(t){return this.http.post(this.path+"/AddUser",t)}getpaymentdetail(t){return this.http.get(this.path+`/GetPaymentDetails/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(a.Wb(r.c),a.Wb(r.b))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"erQ+":function(t,e,i){"use strict";i.r(e),i.d(e,"AddcartPageModule",function(){return v});var s=i("ofXK"),r=i("3Pt+"),a=i("TEn/"),n=i("tyNb"),o=i("fXoL"),c=i("+bfl");function l(t,e){if(1&t&&(o.Sb(0,"option",46),o.Dc(1),o.Rb()),2&t){const t=e.$implicit;o.lc("value",t.CountryId),o.Ab(1),o.Gc("",t.CurSymbol," | ",t.Country,"")}}function b(t,e){1&t&&(o.Sb(0,"div"),o.Sb(1,"div",56),o.Dc(2,"Please select a monthly/annual plan before adding to cart"),o.Rb(),o.Rb())}function h(t,e){if(1&t){const t=o.Tb();o.Sb(0,"button",74),o.ac("click",function(){o.wc(t);const e=o.ec().$implicit;return o.ec().addToCart(e.ProgID)}),o.Dc(1,"Add"),o.Rb()}}function p(t,e){if(1&t){const t=o.Tb();o.Sb(0,"input",75),o.ac("click",function(){o.wc(t);const e=o.ec().$implicit;return o.ec().removeFromCart(e.ProgID)}),o.Rb(),o.Sb(1,"input",76),o.ac("ngModelChange",function(e){return o.wc(t),o.ec().$implicit.qty=e}),o.Rb(),o.Sb(2,"input",77),o.ac("click",function(){o.wc(t);const e=o.ec().$implicit;return o.ec().addToCart(e.ProgID)}),o.Rb()}if(2&t){const t=o.ec().$implicit;o.Ab(1),o.mc("name",t.Program),o.lc("ngModel",t.qty)}}function d(t,e){if(1&t){const t=o.Tb();o.Sb(0,"div"),o.Sb(1,"div",37),o.Sb(2,"div",44),o.Sb(3,"div",57),o.Sb(4,"h4",58),o.Dc(5),o.Rb(),o.Sb(6,"div",37),o.Sb(7,"div",59),o.Sb(8,"div",60),o.Sb(9,"div",61),o.Sb(10,"label",62),o.Sb(11,"input",63),o.ac("click",function(i){o.wc(t);const s=e.$implicit;return o.ec().selectPlan(i.target.value,s.ProgID)}),o.Rb(),o.Sb(12,"span",15),o.Sb(13,"span",64),o.Dc(14),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(15,"div",60),o.Sb(16,"div",61),o.Sb(17,"label",62),o.Sb(18,"input",65),o.ac("click",function(i){o.wc(t);const s=e.$implicit;return o.ec().selectPlan(i.target.value,s.ProgID)}),o.Rb(),o.Sb(19,"span",15),o.Sb(20,"span",64),o.Dc(21),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(22,"div",66),o.Sb(23,"div",44),o.Ob(24,"img",67),o.Rb(),o.Sb(25,"div",68),o.Bc(26,h,2,0,"button",69),o.Sb(27,"div",70),o.Bc(28,p,3,2,"ng-template",71,72,o.Cc),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Ob(30,"hr",73),o.Rb()}if(2&t){const t=e.$implicit,i=o.uc(29);o.Ab(5),o.Fc(" ",t.Program," "),o.Ab(6),o.mc("id",t.Program),o.mc("name",t.Program),o.lc("checked",!1),o.Ab(3),o.Fc(" Monthly- ",t.Monthly," "),o.Ab(4),o.mc("id",t.Program),o.mc("name",t.Program),o.lc("checked",!1),o.Ab(3),o.Fc(" Annual-",t.Annual," "),o.Ab(3),o.nc("src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/programs/onboarding/",t.Program,".png",o.yc),o.Ab(2),o.lc("ngIf",0==t.qty)("ngIfElse",i)}}function u(t,e){if(1&t&&(o.Sb(0,"div",37),o.Sb(1,"div",78),o.Sb(2,"div",79),o.Sb(3,"h4",80),o.Dc(4),o.Rb(),o.Rb(),o.Sb(5,"div",81),o.Sb(6,"h4",82),o.Sb(7,"a",83),o.Dc(8,"View Cart"),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&t){const t=o.ec();o.Ab(4),o.Gc(" ",t.totalItemCount," items | ",t.totalCartValue," ")}}const m=[{path:"",component:(()=>{class t{constructor(t,e,i){this.router=t,this.service=e,this.location=i,this.planWarning=!1,this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.countryList=[],this.totalItemCount=0,this.showCart=!1,this.selectedSubscription="annual"}ngOnInit(){console.log("save username",this.saveUsername),this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),console.log("userID",this.userId),this.getCurrencies()}getCurrencies(){this.service.getCurrencies().subscribe(t=>{this.countryList=t.filter((t,e,i)=>i.findIndex(e=>e.CountryId===t.CountryId)===e),console.log(this.countryList)})}selectCountry(t){this.selectedCountryId=t,console.log(this.selectedCountryId),this.getPricing()}loggedUser(){this.userId||(console.log("login first"),this.router.navigate(["/onboarding/login"]))}selectPlan(t,e){this.loggedUser(),this.planWarning=!1,console.log(t,e);for(var i=0;i<this.cartList.length;i++)this.cartList[i].ProgID===e&&(this.cartList[i].selectedSubscription=t)}getPricing(){this.service.getPricing({Id:parseInt(this.selectedCountryId)}).subscribe(t=>{console.log(t,"product list from api"),this.cartList=t,this.cartList.forEach(function(t){t.Monthly=parseInt(t.Monthly),t.Annual=parseInt(t.Annual),t.qty=0,t.selectedSubscription="null",t.price=0,t.planId=0})})}addToCart(t){this.loggedUser(),console.log(t);for(var e=0;e<this.cartList.length;e++)this.cartList[e].ProgID===t&&("null"==this.cartList[e].selectedSubscription?this.planWarning=!0:(this.showCart=!0,this.planWarning=!1,this.totalItemCount+=1,this.cartList[e].qty+=1,"monthly"==this.cartList[e].selectedSubscription?(this.cartList[e].selectedSubscription="monthly",this.cartList[e].price=this.cartList[e].Monthly*this.cartList[e].qty,this.cartList[e].planId=1):(this.cartList[e].selectedSubscription="annual",this.cartList[e].price=this.cartList[e].Annual*this.cartList[e].qty,this.cartList[e].planId=2),1==this.cartList[e].qty?this.service.addItem({UserId:this.userId,RateId:this.cartList[e].RateID,Qty:this.cartList[e].qty,PlanId:this.cartList[e].planId}).subscribe(t=>{console.log(t,"cartId"),this.cartId=t}):(this.cartList[e].cartId=this.cartId,this.service.editCart({Id:parseInt(this.cartId)},{Id:parseInt(this.cartList[e].qty)}).subscribe(t=>{}))));console.log(this.cartList,"afteraddidtion"),this.totalPrice()}removeFromCart(t){0!=this.totalItemCount&&(this.totalItemCount-=1),0==this.totalItemCount&&(this.showCart=!1),console.log(t);for(var e=0;e<this.cartList.length;e++)this.cartList[e].ProgID===t&&(1==this.cartList[e].qty&&(console.log("delete from d/b and add DeleteCart service"),this.service.deleteItem({Id:parseInt(this.cartList[e].cartId)}).subscribe(t=>{})),0==this.cartList[e].qty?console.log("cannot remove"):(this.cartList[e].qty-=1,"monthly"==this.cartList[e].selectedSubscription?(this.cartList[e].selectedSubscription="monthly",this.cartList[e].price=parseInt(this.cartList[e].Monthly)*parseInt(this.cartList[e].qty),this.cartList[e].planId=1):(this.cartList[e].selectedSubscription="annual",this.cartList[e].price=this.cartList[e].Annual*this.cartList[e].qty,this.cartList[e].planId=2)),0!=this.cartList[e].qty&&this.service.editCart({Id:parseInt(this.cartList[e].cartId)},{Id:parseInt(this.cartList[e].qty)}).subscribe(t=>{}));console.log(this.cartList,"afterRemoval"),this.totalPrice()}totalPrice(){this.totalCartValue=0;for(var t=0;t<this.cartList.length;t++)this.totalCartValue+=this.cartList[t].price;console.log(this.totalCartValue,this.totalItemCount)}ngOnDestroy(){sessionStorage.setItem("cartList",JSON.stringify(this.cartList))}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(n.g),o.Nb(c.a),o.Nb(s.h))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-addcart"]],decls:106,vars:4,consts:[[1,"navbar","navbar-default","navbar-static-top","cnavbar-default","pt1rem"],[1,"container","ncenter_flex"],[1,"navbar-header","nh","center_flex"],["type","button","data-toggle","collapse","data-target","#navbar","aria-expanded","false","aria-controls","navbar",1,"navbar-toggle","collapsed","unhide_ntbtn"],[1,"sr-only"],[1,"icon-bar"],["href","#",1,"cimg"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/logo/logo_transparent.png","alt","",1,"img-responsive","clogo"],["id","navbar",1,"navbar-collapse","collapse","hide_nav"],[1,"nav","navbar-nav","navbar-right"],[1,"nav","navbar-nav","cnavbar-nav","mr-20px","pb1rem"],[1,"libr"],["href","https://humanwisdom.me/Course/#/onboarding/login"],["href","https://humanwisdom.me/Course/#/onboarding/signup"],["href","https://humanwisdom.me/hwp/webpages/help.php"],[1,""],["href","https://humanwisdom.me/hwp/webpages/profile.php"],["role","separator",1,"divider"],[1,"nav","navbar-nav","cnavbar-nav"],["href",""],[1,"dropdown"],["href","#","data-toggle","dropdown","role","button","aria-haspopup","true","aria-expanded","false",1,"dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],["href","https://humanwisdom.me/hwp/webpages/wp_childrens.php"],["href","https://humanwisdom.me/hwp/webpages/wp_teenagers.php"],["href","https://humanwisdom.me/hwp/webpages/wp_adults.php"],["href","https://humanwisdom.me/hwp/webpages/wp_parents.php"],[1,"active"],["href","https://humanwisdom.me/hwp/webpages/wisdom_community.php"],["href","https://humanwisdom.me/Course/#/onboarding/addcart"],["href","https://humanwisdom.me/hwp/webpages/testimonials.php"],["role","main",1,"right_col","ml0","bg_lynx_white"],[1,"row","center_flex","optb10rem"],[1,"col-md-6","col-sm-8","col-xs-12"],[1,"x_panel"],[1,"x_content","fwunset"],[1,"row"],[1,"col-md-12","col-sm-12","col-xs-12","pt3px"],[1,"ob_txt1"],[1,"chr"],["routerLink","/onboarding/activationkey",1,"ob_txt3"],[1,"ob_txt2"],[1,"form-group"],[1,"col-md-12","col-sm-12","col-xs-12","p0"],["placeholder","Select currency",1,"form-control","ob_select",3,"click"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"bhr"],[4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[1,"cfooter","ml0"],[1,"tcenter","twhite"],["href","",1,"twhite"],[1,"clearfix"],[1,"text","text-danger"],[1,"col-md-8","col-sm-8","col-xs-8"],[1,"ob_txt5","mt5px","mt0px"],[1,"col-md-12","col-sm-12","col-xs-12","p0","pt3px"],[1,"col-md-6","col-sm-6","col-xs-6"],[1,"radio"],[1,"mt0px"],["type","radio","value","monthly",3,"checked","id","name","click"],[1,"pl1rem"],["type","radio","value","annual",3,"checked","id","name","click"],[1,"col-md-4","col-sm-4","col-xs-4"],["alt","...",1,"img-responsive","w100",3,"src"],[1,"col-md-12","col-sm-12","col-xs-12","p0","tcenter","tm12px"],["class","btn btn-default btn-xs btn_add","type","button",3,"click",4,"ngIf","ngIfElse"],[1,"col-md-4","col-sm-4","col-xs-6","tcenter"],["class","input-group mb0px"],["showQuantity",""],[1,"thr"],["type","button",1,"btn","btn-default","btn-xs","btn_add",3,"click"],["type","button","value","-","data-field","quantity",1,"button-minus",3,"click"],["type","number","max","",1,"quantity-field",3,"name","ngModel","ngModelChange"],["type","button","value","+","data-field","quantity",1,"button-plus",3,"click"],[1,"col-md-12","col-sm-12","col-xs-12","pt3px","cdiv"],[1,"col-md-6","col-sm-6","col-xs-8"],[1,"ob_txt6"],[1,"col-md-6","col-sm-6","col-xs-4"],[1,"ob_txt6","fright"],["routerLink","/onboarding/viewcart",1,"twhite"]],template:function(t,e){1&t&&(o.Sb(0,"nav",0),o.Sb(1,"div",1),o.Sb(2,"div",2),o.Sb(3,"button",3),o.Sb(4,"span",4),o.Dc(5,"Toggle navigation"),o.Rb(),o.Ob(6,"span",5),o.Ob(7,"span",5),o.Ob(8,"span",5),o.Rb(),o.Sb(9,"a",6),o.Ob(10,"img",7),o.Rb(),o.Rb(),o.Sb(11,"div",8),o.Sb(12,"ul",9),o.Sb(13,"ul",10),o.Sb(14,"li",11),o.Sb(15,"a",12),o.Dc(16,"Login"),o.Rb(),o.Rb(),o.Sb(17,"li",11),o.Sb(18,"a",13),o.Dc(19,"Register"),o.Rb(),o.Rb(),o.Sb(20,"li",11),o.Sb(21,"a",14),o.Dc(22,"Help"),o.Rb(),o.Rb(),o.Sb(23,"li",15),o.Sb(24,"a",16),o.Dc(25,"My Profile"),o.Rb(),o.Rb(),o.Ob(26,"li",17),o.Rb(),o.Rb(),o.Sb(27,"ul",9),o.Sb(28,"ul",18),o.Sb(29,"li"),o.Sb(30,"a",19),o.Dc(31,"About"),o.Rb(),o.Rb(),o.Sb(32,"li",20),o.Sb(33,"a",21),o.Dc(34,"Our Programs "),o.Ob(35,"span",22),o.Rb(),o.Sb(36,"ul",23),o.Sb(37,"li"),o.Sb(38,"a",24),o.Dc(39,"Children"),o.Rb(),o.Rb(),o.Sb(40,"li"),o.Sb(41,"a",25),o.Dc(42,"Teenager"),o.Rb(),o.Rb(),o.Sb(43,"li"),o.Sb(44,"a",26),o.Dc(45,"Adults"),o.Rb(),o.Rb(),o.Sb(46,"li"),o.Sb(47,"a",27),o.Dc(48,"Parents"),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(49,"li",28),o.Sb(50,"a",29),o.Dc(51,"Community"),o.Rb(),o.Rb(),o.Sb(52,"li"),o.Sb(53,"a",19),o.Dc(54,"Wisdom Survey"),o.Rb(),o.Rb(),o.Sb(55,"li"),o.Sb(56,"a",19),o.Dc(57,"Wisdom Journal"),o.Rb(),o.Rb(),o.Sb(58,"li"),o.Sb(59,"a",30),o.Dc(60,"Subscribe"),o.Rb(),o.Rb(),o.Sb(61,"li"),o.Sb(62,"a",31),o.Dc(63,"Testimonials"),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(64,"div",32),o.Sb(65,"div",15),o.Sb(66,"div",33),o.Sb(67,"div",34),o.Sb(68,"div",35),o.Sb(69,"div",36),o.Sb(70,"form"),o.Sb(71,"div",37),o.Sb(72,"div",38),o.Sb(73,"h4",39),o.Dc(74," Subscribe "),o.Rb(),o.Ob(75,"hr",40),o.Rb(),o.Rb(),o.Sb(76,"div",37),o.Sb(77,"div",38),o.Sb(78,"h4"),o.Sb(79,"a",41),o.Dc(80,"Click here"),o.Rb(),o.Dc(81,"\xa0"),o.Sb(82,"span",42),o.Dc(83,"if you already have an Activation Key."),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(84,"div",37),o.Sb(85,"div",38),o.Sb(86,"div",43),o.Sb(87,"div",44),o.Sb(88,"select",45),o.ac("click",function(t){return e.selectCountry(t.target.value)}),o.Sb(89,"option",46),o.Dc(90,"Select currency"),o.Rb(),o.Bc(91,l,2,3,"option",47),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Bc(92,b,3,0,"div",48),o.Ob(93,"hr",49),o.Bc(94,d,31,12,"div",50),o.Sb(95,"div"),o.Bc(96,u,9,2,"div",51),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(97,"footer",52),o.Sb(98,"div",53),o.Dc(99," \xa9 2020 Human Wisdom Ltd. All Rights Reserved.\xa0"),o.Sb(100,"a",54),o.Dc(101,"Terms of Use"),o.Rb(),o.Dc(102,"\xa0|\xa0"),o.Sb(103,"a",54),o.Dc(104,"Privacy Policy"),o.Rb(),o.Rb(),o.Ob(105,"div",55),o.Rb()),2&t&&(o.Ab(91),o.lc("ngForOf",e.countryList),o.Ab(1),o.lc("ngIf",e.planWarning),o.Ab(2),o.lc("ngForOf",e.cartList),o.Ab(2),o.lc("ngIf",e.showCart))},directives:[r.t,r.k,r.l,n.j,a.g,r.n,r.u,s.k,s.l,r.o,r.b,r.j,r.m],styles:[""]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({imports:[[n.k.forChild(m)],n.k]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({imports:[[s.c,r.f,a.e,g]]}),t})()}}]);