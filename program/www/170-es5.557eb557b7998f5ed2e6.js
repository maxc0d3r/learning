!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var s=0;s<t.length;s++){var o=t[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{"r32+":function(s,o,r){"use strict";r.r(o),r.d(o,"WisdomShortsS08PageModule",function(){return S});var i,n,a,c=r("ofXK"),u=r("3Pt+"),m=r("TEn/"),h=r("tyNb"),k=r("fXoL"),d=r("Hvql"),l=r("C2u/"),b=r("NNnp"),p=r("H3pP"),v=[{path:"",component:(i=function(){function s(t,o,r){e(this,s),this.router=t,this.service=o,this.location=r,this.bg="red_pink_w8",this.mediaVideo=JSON.parse(localStorage.getItem("mediaVideo")),this.videoLink=this.mediaVideo+"/wisdom_shorts/videos/1.8.mp4",this.poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/wisdom_shorts/wisdom_shorts_08.jpg",this.title="Questions",this.toc="/wisdom-shorts",this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.path=this.router.url,this.screenType=localStorage.getItem("video"),this.moduleId=localStorage.getItem("moduleId"),this.screenNumber="s08",this.bookmark=0,this.bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))}var o,r,i;return o=s,(r=[{key:"ngOnInit",value:function(){this.createScreen(),this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),this.startTime=Date.now(),this.startTime=Date.now(),console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmarks08"))),0==JSON.parse(sessionStorage.getItem("bookmarks08"))?this.bookmark=0:(this.bookmarkList.includes(this.screenNumber)||1==JSON.parse(sessionStorage.getItem("bookmarks08")))&&(this.bookmark=1)}},{key:"receiveBookmark",value:function(e){console.log(e),this.bookmark=1==e?1:0,sessionStorage.setItem("bookmarks08",JSON.stringify(this.bookmark))}},{key:"createScreen",value:function(){this.service.createScreen({ScrId:0,ModuleId:this.moduleId,GSetID:this.screenType,ScreenNo:this.screenNumber}).subscribe(function(e){})}},{key:"receiveAvDuration",value:function(e){this.avDuration=e}},{key:"submitProgress",value:function(){var e=this;this.endTime=Date.now(),this.totalTime=this.endTime-this.startTime,this.service.submitProgressAv({ScrNumber:this.screenNumber,UserId:this.userId,BookMark:this.bookmark,ModuleId:this.moduleId,screenType:this.screenType,timeSpent:this.totalTime,avDuration:this.avDuration}).subscribe(function(t){e.bookmarkList=t.GetBkMrkScr.map(function(e){return parseInt(e.ScrNo)}),localStorage.setItem("bookmarkList",JSON.stringify(e.bookmarkList))}),this.router.navigate(["/adults/wisdom-shorts/wisdom-shorts-s09"])}},{key:"prev",value:function(){this.router.navigate(["/adults/wisdom-shorts"])}}])&&t(o.prototype,r),i&&t(o,i),s}(),i.\u0275fac=function(e){return new(e||i)(k.Nb(h.g),k.Nb(d.a),k.Nb(c.h))},i.\u0275cmp=k.Hb({type:i,selectors:[["HumanWisdom-wisdom-shorts-s08"]],decls:3,vars:7,consts:[[3,"toc","bookmark","path","sendBookmark"],[3,"title","poster","bg","videoLink","sendAvDuration"],[3,"nextEmitter","previousEmitter"]],template:function(e,t){1&e&&(k.Sb(0,"app-course-header",0),k.ac("sendBookmark",function(e){return t.receiveBookmark(e)}),k.Rb(),k.Sb(1,"app-video-content",1),k.ac("sendAvDuration",function(e){return t.receiveAvDuration(e)}),k.Rb(),k.Sb(2,"app-course-footer",2),k.ac("nextEmitter",function(){return t.submitProgress()})("previousEmitter",function(){return t.prev()}),k.Rb()),2&e&&(k.lc("toc",t.toc)("bookmark",t.bookmark)("path",t.path),k.Ab(1),k.lc("title",t.title)("poster",t.poster)("bg",t.bg)("videoLink",t.videoLink))},directives:[l.a,b.a,p.a],styles:[""]}),i)}],f=((n=function t(){e(this,t)}).\u0275fac=function(e){return new(e||n)},n.\u0275mod=k.Lb({type:n}),n.\u0275inj=k.Kb({imports:[[h.k.forChild(v)],h.k]}),n),g=r("AuZA"),S=((a=function t(){e(this,t)}).\u0275fac=function(e){return new(e||a)},a.\u0275mod=k.Lb({type:a}),a.\u0275inj=k.Kb({imports:[[c.c,u.f,m.e,f,g.a]]}),a)}}])}();