!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var s=0;s<t.length;s++){var o=t[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,s,o){return s&&t(e.prototype,s),o&&t(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{QKg3:function(t,o,i){"use strict";i.r(o),i.d(o,"GetSupportNowModule",function(){return A});var r,a,n,m,u,c,l,h,d,p,b,g,k=i("ofXK"),v=i("3Pt+"),f=i("TEn/"),S=i("AuZA"),I=i("Hvql"),w=i("tyNb"),y=i("fXoL"),N=i("C2u/"),O=i("NNnp"),_=i("H3pP"),L=((u=function(){function t(s,o,i){e(this,t),this.router=s,this.service=o,this.location=i,this.bg="dark_blue_w1",this.mediaVideo=JSON.parse(localStorage.getItem("mediaVideo")),this.videoLink=this.mediaVideo+"/get-support-now/videos/1.1.mp4",this.title="Stress",this.poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/get_support_now/get_support_now_01.jpg",this.toc="",this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.screenType=localStorage.getItem("video"),this.moduleId=localStorage.getItem("moduleId"),this.screenNumber=71001,this.bookmark=0,this.path=this.router.url,this.bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))}return s(t,[{key:"ngOnInit",value:function(){this.createScreen(),this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),this.startTime=Date.now(),this.startTime=Date.now(),console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark71001"))),0==JSON.parse(sessionStorage.getItem("bookmark71001"))?this.bookmark=0:(this.bookmarkList.includes(this.screenNumber)||1==JSON.parse(sessionStorage.getItem("bookmark71001")))&&(this.bookmark=1)}},{key:"receiveBookmark",value:function(e){console.log(e),this.bookmark=1==e?1:0,sessionStorage.setItem("bookmark71001",JSON.stringify(this.bookmark))}},{key:"createScreen",value:function(){this.service.createScreen({ScrId:0,ModuleId:this.moduleId,GSetID:this.screenType,ScreenNo:this.screenNumber}).subscribe(function(e){})}},{key:"submitProgress",value:function(){var e=this;this.endTime=Date.now(),this.totalTime=this.endTime-this.startTime,this.service.submitProgressAv({ScrNumber:this.screenNumber,UserId:this.userId,BookMark:this.bookmark,ModuleId:this.moduleId,screenType:this.screenType,timeSpent:this.totalTime,avDuration:this.avDuration}).subscribe(function(t){e.bookmarkList=t.GetBkMrkScr.map(function(e){return parseInt(e.ScrNo)}),localStorage.setItem("bookmarkList",JSON.stringify(e.bookmarkList))}),this.router.navigate(["/get-support-now/s71001p1"])}},{key:"prev",value:function(){this.router.navigate(["/adults/adult-dashboard/"])}},{key:"ngOnDestroy",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||u)(y.Nb(w.g),y.Nb(I.a),y.Nb(k.h))},u.\u0275cmp=y.Hb({type:u,selectors:[["app-s71001"]],decls:3,vars:7,consts:[[3,"toc","bookmark","path","sendBookmark"],[3,"title","poster","bg","videoLink"],[3,"nextEmitter","previousEmitter"]],template:function(e,t){1&e&&(y.Sb(0,"app-course-header",0),y.ac("sendBookmark",function(e){return t.receiveBookmark(e)}),y.Rb(),y.Ob(1,"app-video-content",1),y.Sb(2,"app-course-footer",2),y.ac("nextEmitter",function(){return t.submitProgress()})("previousEmitter",function(){return t.prev()}),y.Rb()),2&e&&(y.lc("toc",t.toc)("bookmark",t.bookmark)("path",t.path),y.Ab(1),y.lc("title",t.title)("poster",t.poster)("bg",t.bg)("videoLink",t.videoLink))},directives:[N.a,O.a,_.a],styles:[""]}),u),T=((m=function(){function t(s,o,i){e(this,t),this.router=s,this.service=o,this.location=i,this.bg="dark_blue_w2",this.mediaVideo=JSON.parse(localStorage.getItem("mediaVideo")),this.videoLink=this.mediaVideo+"/get-support-now/videos/1.2.mp4",this.title="Anxiety",this.poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/get_support_now/get_support_now_02.jpg",this.toc="",this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.screenType=localStorage.getItem("video"),this.moduleId=localStorage.getItem("moduleId"),this.screenNumber=71002,this.bookmark=0,this.path=this.router.url,this.bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))}return s(t,[{key:"ngOnInit",value:function(){this.createScreen(),this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),this.startTime=Date.now(),this.startTime=Date.now(),console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark71002"))),0==JSON.parse(sessionStorage.getItem("bookmark71002"))?this.bookmark=0:(this.bookmarkList.includes(this.screenNumber)||1==JSON.parse(sessionStorage.getItem("bookmark71002")))&&(this.bookmark=1)}},{key:"receiveBookmark",value:function(e){console.log(e),this.bookmark=1==e?1:0,sessionStorage.setItem("bookmark71002",JSON.stringify(this.bookmark))}},{key:"createScreen",value:function(){this.service.createScreen({ScrId:0,ModuleId:this.moduleId,GSetID:this.screenType,ScreenNo:this.screenNumber}).subscribe(function(e){})}},{key:"submitProgress",value:function(){var e=this;this.endTime=Date.now(),this.totalTime=this.endTime-this.startTime,this.service.submitProgressAv({ScrNumber:this.screenNumber,UserId:this.userId,BookMark:this.bookmark,ModuleId:this.moduleId,screenType:this.screenType,timeSpent:this.totalTime,avDuration:this.avDuration}).subscribe(function(t){e.bookmarkList=t.GetBkMrkScr.map(function(e){return parseInt(e.ScrNo)}),localStorage.setItem("bookmarkList",JSON.stringify(e.bookmarkList))}),this.router.navigate(["/get-support-now/s71002p1"])}},{key:"prev",value:function(){this.router.navigate(["/adults/adult-dashboard/"])}},{key:"ngOnDestroy",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||m)(y.Nb(w.g),y.Nb(I.a),y.Nb(k.h))},m.\u0275cmp=y.Hb({type:m,selectors:[["app-s71002"]],decls:3,vars:7,consts:[[3,"toc","bookmark","path","sendBookmark"],[3,"title","poster","bg","videoLink"],[3,"nextEmitter","previousEmitter"]],template:function(e,t){1&e&&(y.Sb(0,"app-course-header",0),y.ac("sendBookmark",function(e){return t.receiveBookmark(e)}),y.Rb(),y.Ob(1,"app-video-content",1),y.Sb(2,"app-course-footer",2),y.ac("nextEmitter",function(){return t.submitProgress()})("previousEmitter",function(){return t.prev()}),y.Rb()),2&e&&(y.lc("toc",t.toc)("bookmark",t.bookmark)("path",t.path),y.Ab(1),y.lc("title",t.title)("poster",t.poster)("bg",t.bg)("videoLink",t.videoLink))},directives:[N.a,O.a,_.a],styles:[""]}),m),J=((n=function(){function t(s,o,i){e(this,t),this.router=s,this.service=o,this.location=i,this.bg="dark_blue_w3",this.mediaVideo=JSON.parse(localStorage.getItem("mediaVideo")),this.videoLink=this.mediaVideo+"/get-support-now/videos/1.3.mp4",this.title="Anger",this.poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/get_support_now/get_support_now_03.jpg",this.toc="",this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.screenType=localStorage.getItem("video"),this.moduleId=localStorage.getItem("moduleId"),this.screenNumber=71003,this.bookmark=0,this.path=this.router.url,this.bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))}return s(t,[{key:"ngOnInit",value:function(){this.createScreen(),this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),this.startTime=Date.now(),this.startTime=Date.now(),console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark71003"))),0==JSON.parse(sessionStorage.getItem("bookmark71003"))?this.bookmark=0:(this.bookmarkList.includes(this.screenNumber)||1==JSON.parse(sessionStorage.getItem("bookmark71003")))&&(this.bookmark=1)}},{key:"receiveBookmark",value:function(e){console.log(e),this.bookmark=1==e?1:0,sessionStorage.setItem("bookmark71003",JSON.stringify(this.bookmark))}},{key:"createScreen",value:function(){this.service.createScreen({ScrId:0,ModuleId:this.moduleId,GSetID:this.screenType,ScreenNo:this.screenNumber}).subscribe(function(e){})}},{key:"submitProgress",value:function(){var e=this;this.endTime=Date.now(),this.totalTime=this.endTime-this.startTime,this.service.submitProgressAv({ScrNumber:this.screenNumber,UserId:this.userId,BookMark:this.bookmark,ModuleId:this.moduleId,screenType:this.screenType,timeSpent:this.totalTime,avDuration:this.avDuration}).subscribe(function(t){e.bookmarkList=t.GetBkMrkScr.map(function(e){return parseInt(e.ScrNo)}),localStorage.setItem("bookmarkList",JSON.stringify(e.bookmarkList))}),this.router.navigate(["/get-support-now/s71003p1"])}},{key:"prev",value:function(){this.router.navigate(["/adults/adult-dashboard/"])}},{key:"ngOnDestroy",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||n)(y.Nb(w.g),y.Nb(I.a),y.Nb(k.h))},n.\u0275cmp=y.Hb({type:n,selectors:[["app-s71003"]],decls:3,vars:7,consts:[[3,"toc","bookmark","path","sendBookmark"],[3,"title","poster","bg","videoLink"],[3,"nextEmitter","previousEmitter"]],template:function(e,t){1&e&&(y.Sb(0,"app-course-header",0),y.ac("sendBookmark",function(e){return t.receiveBookmark(e)}),y.Rb(),y.Ob(1,"app-video-content",1),y.Sb(2,"app-course-footer",2),y.ac("nextEmitter",function(){return t.submitProgress()})("previousEmitter",function(){return t.prev()}),y.Rb()),2&e&&(y.lc("toc",t.toc)("bookmark",t.bookmark)("path",t.path),y.Ab(1),y.lc("title",t.title)("poster",t.poster)("bg",t.bg)("videoLink",t.videoLink))},directives:[N.a,O.a,_.a],styles:[""]}),n),D=((a=function(){function t(s,o,i){e(this,t),this.router=s,this.service=o,this.location=i,this.bg="dark_blue_w4",this.mediaVideo=JSON.parse(localStorage.getItem("mediaVideo")),this.videoLink=this.mediaVideo+"/get-support-now/videos/1.4.mp4",this.title="Dealing with Loss",this.poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/get_support_now/get_support_now_04.jpg",this.toc="",this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.screenType=localStorage.getItem("video"),this.moduleId=localStorage.getItem("moduleId"),this.screenNumber=71004,this.bookmark=0,this.path=this.router.url,this.bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))}return s(t,[{key:"ngOnInit",value:function(){this.createScreen(),this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),this.startTime=Date.now(),this.startTime=Date.now(),console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark71004"))),0==JSON.parse(sessionStorage.getItem("bookmark71004"))?this.bookmark=0:(this.bookmarkList.includes(this.screenNumber)||1==JSON.parse(sessionStorage.getItem("bookmark71004")))&&(this.bookmark=1)}},{key:"receiveBookmark",value:function(e){console.log(e),this.bookmark=1==e?1:0,sessionStorage.setItem("bookmark71004",JSON.stringify(this.bookmark))}},{key:"createScreen",value:function(){this.service.createScreen({ScrId:0,ModuleId:this.moduleId,GSetID:this.screenType,ScreenNo:this.screenNumber}).subscribe(function(e){})}},{key:"submitProgress",value:function(){var e=this;this.endTime=Date.now(),this.totalTime=this.endTime-this.startTime,this.service.submitProgressAv({ScrNumber:this.screenNumber,UserId:this.userId,BookMark:this.bookmark,ModuleId:this.moduleId,screenType:this.screenType,timeSpent:this.totalTime,avDuration:this.avDuration}).subscribe(function(t){e.bookmarkList=t.GetBkMrkScr.map(function(e){return parseInt(e.ScrNo)}),localStorage.setItem("bookmarkList",JSON.stringify(e.bookmarkList))}),this.router.navigate(["/get-support-now/s71004p1"])}},{key:"prev",value:function(){this.router.navigate(["/adults/adult-dashboard/"])}},{key:"ngOnDestroy",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||a)(y.Nb(w.g),y.Nb(I.a),y.Nb(k.h))},a.\u0275cmp=y.Hb({type:a,selectors:[["app-s71004"]],decls:3,vars:7,consts:[[3,"toc","bookmark","path","sendBookmark"],[3,"title","poster","bg","videoLink"],[3,"nextEmitter","previousEmitter"]],template:function(e,t){1&e&&(y.Sb(0,"app-course-header",0),y.ac("sendBookmark",function(e){return t.receiveBookmark(e)}),y.Rb(),y.Ob(1,"app-video-content",1),y.Sb(2,"app-course-footer",2),y.ac("nextEmitter",function(){return t.submitProgress()})("previousEmitter",function(){return t.prev()}),y.Rb()),2&e&&(y.lc("toc",t.toc)("bookmark",t.bookmark)("path",t.path),y.Ab(1),y.lc("title",t.title)("poster",t.poster)("bg",t.bg)("videoLink",t.videoLink))},directives:[N.a,O.a,_.a],styles:[""]}),a),B=((r=function(){function t(s,o,i){e(this,t),this.router=s,this.service=o,this.location=i,this.bg="dark_blue_w5",this.mediaVideo=JSON.parse(localStorage.getItem("mediaVideo")),this.videoLink=this.mediaVideo+"/get-support-now/videos/1.5.mp4",this.title="Conflict in Relationships",this.poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/get_support_now/get_support_now_05.jpg",this.toc="",this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.screenType=localStorage.getItem("video"),this.moduleId=localStorage.getItem("moduleId"),this.screenNumber=71005,this.bookmark=0,this.path=this.router.url,this.bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))}return s(t,[{key:"ngOnInit",value:function(){this.createScreen(),this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),this.startTime=Date.now(),this.startTime=Date.now(),console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmark71005"))),0==JSON.parse(sessionStorage.getItem("bookmark71005"))?this.bookmark=0:(this.bookmarkList.includes(this.screenNumber)||1==JSON.parse(sessionStorage.getItem("bookmark71005")))&&(this.bookmark=1)}},{key:"receiveBookmark",value:function(e){console.log(e),this.bookmark=1==e?1:0,sessionStorage.setItem("bookmark71005",JSON.stringify(this.bookmark))}},{key:"createScreen",value:function(){this.service.createScreen({ScrId:0,ModuleId:this.moduleId,GSetID:this.screenType,ScreenNo:this.screenNumber}).subscribe(function(e){})}},{key:"submitProgress",value:function(){var e=this;this.endTime=Date.now(),this.totalTime=this.endTime-this.startTime,this.service.submitProgressAv({ScrNumber:this.screenNumber,UserId:this.userId,BookMark:this.bookmark,ModuleId:this.moduleId,screenType:this.screenType,timeSpent:this.totalTime,avDuration:this.avDuration}).subscribe(function(t){e.bookmarkList=t.GetBkMrkScr.map(function(e){return parseInt(e.ScrNo)}),localStorage.setItem("bookmarkList",JSON.stringify(e.bookmarkList))}),this.router.navigate(["/get-support-now/s71005p1"])}},{key:"prev",value:function(){this.router.navigate(["/adults/adult-dashboard/"])}},{key:"ngOnDestroy",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||r)(y.Nb(w.g),y.Nb(I.a),y.Nb(k.h))},r.\u0275cmp=y.Hb({type:r,selectors:[["app-s71005"]],decls:3,vars:7,consts:[[3,"toc","bookmark","path","sendBookmark"],[3,"title","poster","bg","videoLink"],[3,"nextEmitter","previousEmitter"]],template:function(e,t){1&e&&(y.Sb(0,"app-course-header",0),y.ac("sendBookmark",function(e){return t.receiveBookmark(e)}),y.Rb(),y.Ob(1,"app-video-content",1),y.Sb(2,"app-course-footer",2),y.ac("nextEmitter",function(){return t.submitProgress()})("previousEmitter",function(){return t.prev()}),y.Rb()),2&e&&(y.lc("toc",t.toc)("bookmark",t.bookmark)("path",t.path),y.Ab(1),y.lc("title",t.title)("poster",t.poster)("bg",t.bg)("videoLink",t.videoLink))},directives:[N.a,O.a,_.a],styles:[""]}),r),R=i("+/Ra"),z=[{path:"",component:L},{path:"s71001",component:L},{path:"s71002",component:T},{path:"s71003",component:J},{path:"s71004",component:D},{path:"s71005",component:B},{path:"s71001p1",component:(p=function(){function t(){e(this,t),this.moduleList=[{name:"Stress",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/34.png",link:"/stress"},{name:"Reactive Mind",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/22.png",link:"/reactive-mind"},{name:"Breathing",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/07.png",link:"/breathing"}]}return s(t,[{key:"ngOnInit",value:function(){}}]),t}(),p.\u0275fac=function(e){return new(e||p)},p.\u0275cmp=y.Hb({type:p,selectors:[["HumanWisdom-s71001p1"]],decls:1,vars:1,consts:[[3,"moduleList"]],template:function(e,t){1&e&&y.Ob(0,"app-module-end-videos",0),2&e&&y.lc("moduleList",t.moduleList)},directives:[R.a],styles:[""]}),p)},{path:"s71002p1",component:(d=function(){function t(){e(this,t),this.moduleList=[{name:"Fear and Anxiety",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/29.png",link:"/fear-anxiety"},{name:"Breathing",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/07.png",link:"/breathing"},{name:"Meditation",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/09.png",link:"/meditation"}]}return s(t,[{key:"ngOnInit",value:function(){}}]),t}(),d.\u0275fac=function(e){return new(e||d)},d.\u0275cmp=y.Hb({type:d,selectors:[["HumanWisdom-s71002p1"]],decls:1,vars:1,consts:[[3,"moduleList"]],template:function(e,t){1&e&&y.Ob(0,"app-module-end-videos",0),2&e&&y.lc("moduleList",t.moduleList)},directives:[R.a],styles:[""]}),d)},{path:"s71003p1",component:(h=function(){function t(){e(this,t),this.moduleList=[{name:"Reactive Mind",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/22.png",link:"/reactive-mind"},{name:"Conditioning",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/20.png",link:"/conditioning"},{name:"Sorrow and Loss",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/31.png",link:"/sorrow"}]}return s(t,[{key:"ngOnInit",value:function(){}}]),t}(),h.\u0275fac=function(e){return new(e||h)},h.\u0275cmp=y.Hb({type:h,selectors:[["HumanWisdom-s71003p1"]],decls:1,vars:1,consts:[[3,"moduleList"]],template:function(e,t){1&e&&y.Ob(0,"app-module-end-videos",0),2&e&&y.lc("moduleList",t.moduleList)},directives:[R.a],styles:[""]}),h)},{path:"s71004p1",component:(l=function(){function t(){e(this,t),this.moduleList=[{name:"Sorrow and Loss",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/31.png",link:"/sorrow"},{name:"Emotional Needs",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/26.png",link:"/emotional-needs"},{name:"Breathing",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/07.png",link:"/breathing"}]}return s(t,[{key:"ngOnInit",value:function(){}}]),t}(),l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=y.Hb({type:l,selectors:[["HumanWisdom-s71004p1"]],decls:1,vars:1,consts:[[3,"moduleList"]],template:function(e,t){1&e&&y.Ob(0,"app-module-end-videos",0),2&e&&y.lc("moduleList",t.moduleList)},directives:[R.a],styles:[""]}),l)},{path:"s71005p1",component:(c=function(){function t(){e(this,t),this.moduleList=[{name:"Relationships",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/35.png",link:"/relationships"},{name:"The Nature of the \u2018I\u2019",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/28.png",link:"/nature-of-i"},{name:"Emotional Needs",image:"https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/dashboard/the_full_program/26.png",link:"/emotional-needs"}]}return s(t,[{key:"ngOnInit",value:function(){}}]),t}(),c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=y.Hb({type:c,selectors:[["HumanWisdom-s71005p1"]],decls:1,vars:1,consts:[[3,"moduleList"]],template:function(e,t){1&e&&y.Ob(0,"app-module-end-videos",0),2&e&&y.lc("moduleList",t.moduleList)},directives:[R.a],styles:[""]}),c)}],E=((g=function t(){e(this,t)}).\u0275fac=function(e){return new(e||g)},g.\u0275mod=y.Lb({type:g}),g.\u0275inj=y.Kb({imports:[[w.k.forChild(z)],w.k]}),g),A=((b=function t(){e(this,t)}).\u0275fac=function(e){return new(e||b)},b.\u0275mod=y.Lb({type:b}),b.\u0275inj=y.Kb({providers:[I.a],imports:[[k.c,v.f,f.e,S.a,E]]}),b)},RdsX:function(t,o,i){"use strict";i.d(o,"a",function(){return k});var r=i("fXoL"),a=i("tyNb"),n=i("ofXK");function m(e,t){1&e&&(r.Sb(0,"div"),r.Ob(1,"img",5),r.Sb(2,"p",6),r.Dc(3," Home "),r.Rb(),r.Rb())}function u(e,t){1&e&&(r.Sb(0,"div"),r.Ob(1,"img",7),r.Sb(2,"p",8),r.Dc(3," Home "),r.Rb(),r.Rb())}function c(e,t){1&e&&(r.Sb(0,"div"),r.Ob(1,"img",9),r.Sb(2,"p",6),r.Dc(3," Journal "),r.Rb(),r.Rb())}function l(e,t){1&e&&(r.Sb(0,"div"),r.Ob(1,"img",10),r.Sb(2,"p",8),r.Dc(3," Journal "),r.Rb(),r.Rb())}function h(e,t){1&e&&(r.Sb(0,"div"),r.Ob(1,"img",11),r.Sb(2,"p",6),r.Dc(3," Forum "),r.Rb(),r.Rb())}function d(e,t){1&e&&(r.Sb(0,"div"),r.Ob(1,"img",12),r.Sb(2,"p",8),r.Dc(3," Forum "),r.Rb(),r.Rb())}function p(e,t){1&e&&(r.Sb(0,"div"),r.Ob(1,"img",13),r.Sb(2,"p",6),r.Dc(3," Profile "),r.Rb(),r.Rb())}function b(e,t){1&e&&(r.Sb(0,"div"),r.Ob(1,"img",14),r.Sb(2,"p",8),r.Dc(3," Profile "),r.Rb(),r.Rb())}function g(e,t){1&e&&(r.Sb(0,"div"),r.Ob(1,"img",15),r.Sb(2,"p",16),r.Dc(3," Login "),r.Rb(),r.Rb())}var k=function(){var t=function(){function t(s){e(this,t),this.router=s,this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!1,this.isloggedIn=!1,this.enableprofile=!1}return s(t,[{key:"ngOnInit",value:function(){"T"===localStorage.getItem("isloggedin")&&(this.isloggedIn=!0,this.Subscriber=localStorage.getItem("Subscriber")),"/adults/adult-dashboard"==this.router.url&&(this.dash=!0,this.journal=!1,this.profile=!1),("/adults/journal"==this.router.url||this.router.url.indexOf("/adults/note")>-1)&&(this.dash=!1,this.profile=!1,this.journal=!0),new RegExp("forum").test(this.router.url)&&(this.dash=!1,this.journal=!1,this.profile=!1,this.fourm=!0),"/onboarding/user-profile"==this.router.url&&(this.dash=!1,this.journal=!1,this.fourm=!1,this.profile=!0,"1"===this.Subscriber&&(this.enableprofile=!0))}},{key:"routeDash",value:function(){this.router.navigate(["/adults/adult-dashboard"])}},{key:"routeJournal",value:function(){this.router.navigate(["/adults/journal"])}},{key:"profileclickevent",value:function(){"T"===localStorage.getItem("isloggedin")?this.router.navigate(["/onboarding/user-profile"]):(localStorage.setItem("btnclick","T"),this.router.navigate(["/onboarding/login"]))}},{key:"routeForum",value:function(){this.router.navigate(["/forum"])}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Nb(a.g))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-bottom-navigation"]],decls:16,vars:9,consts:[[1,"sidebar-footer","ifooter"],[1,"row","center_flex"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","tcenter","center_flex"],[1,"footer_index",3,"click"],[4,"ngIf"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/home.svg","alt",""],[1,"mb0px","silver_chalice"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/home_active.svg","alt",""],[1,"mb0px"],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/journal.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/journal_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/forum_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_inactive.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/profile_active.svg","alt",""],["src","https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/svgs/icons/footer/dashboard/login.svg","alt",""],[1,"mb0px","davy-s_grey"]],template:function(e,t){1&e&&(r.Sb(0,"div",0),r.Sb(1,"div",1),r.Sb(2,"div",2),r.Sb(3,"a",3),r.ac("click",function(){return t.routeDash()}),r.Bc(4,m,4,0,"div",4),r.Bc(5,u,4,0,"div",4),r.Rb(),r.Sb(6,"a",3),r.ac("click",function(){return t.routeJournal()}),r.Bc(7,c,4,0,"div",4),r.Bc(8,l,4,0,"div",4),r.Rb(),r.Sb(9,"a",3),r.ac("click",function(){return t.routeForum()}),r.Bc(10,h,4,0,"div",4),r.Bc(11,d,4,0,"div",4),r.Rb(),r.Sb(12,"a",3),r.ac("click",function(){return t.profileclickevent()}),r.Bc(13,p,4,0,"div",4),r.Bc(14,b,4,0,"div",4),r.Bc(15,g,4,0,"div",4),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&e&&(r.Ab(4),r.lc("ngIf",!t.dash),r.Ab(1),r.lc("ngIf",t.dash),r.Ab(2),r.lc("ngIf",!t.journal),r.Ab(1),r.lc("ngIf",t.journal),r.Ab(2),r.lc("ngIf",!t.fourm),r.Ab(1),r.lc("ngIf",t.fourm),r.Ab(2),r.lc("ngIf",!t.enableprofile&&t.isloggedIn&&!t.profile),r.Ab(1),r.lc("ngIf",t.enableprofile&&t.profile),r.Ab(1),r.lc("ngIf",!t.isloggedIn))},directives:[n.l],styles:[""]}),t}()}}])}();