(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{bi3c:function(e,t,s){"use strict";s.r(t),s.d(t,"WisdomShortsS02PageModule",function(){return p});var o=s("ofXK"),r=s("3Pt+"),i=s("TEn/"),a=s("tyNb"),n=s("fXoL"),m=s("Hvql"),c=s("C2u/"),h=s("NNnp"),u=s("H3pP");const d=[{path:"",component:(()=>{class e{constructor(e,t,s){this.router=e,this.service=t,this.location=s,this.bg="red_pink_w2",this.mediaVideo=JSON.parse(localStorage.getItem("mediaVideo")),this.videoLink=this.mediaVideo+"/wisdom_shorts/videos/1.2.mp4",this.poster="https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/video_posters/wisdom_shorts/wisdom_shorts_02.jpg",this.title="Being grateful",this.toc="/wisdom-shorts",this.saveUsername=JSON.parse(localStorage.getItem("saveUsername")),this.path=this.router.url,this.screenType=localStorage.getItem("video"),this.moduleId=localStorage.getItem("moduleId"),this.screenNumber="s02",this.bookmark=0,this.bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))}ngOnInit(){this.createScreen(),this.userId=0==this.saveUsername?JSON.parse(sessionStorage.getItem("userId")):JSON.parse(localStorage.getItem("userId")),this.startTime=Date.now(),this.startTime=Date.now(),console.log("session bookmark",JSON.parse(sessionStorage.getItem("bookmarks02"))),0==JSON.parse(sessionStorage.getItem("bookmarks02"))?this.bookmark=0:(this.bookmarkList.includes(this.screenNumber)||1==JSON.parse(sessionStorage.getItem("bookmarks02")))&&(this.bookmark=1)}receiveBookmark(e){console.log(e),this.bookmark=1==e?1:0,sessionStorage.setItem("bookmarks02",JSON.stringify(this.bookmark))}createScreen(){this.service.createScreen({ScrId:0,ModuleId:this.moduleId,GSetID:this.screenType,ScreenNo:this.screenNumber}).subscribe(e=>{})}receiveAvDuration(e){this.avDuration=e}submitProgress(){this.endTime=Date.now(),this.totalTime=this.endTime-this.startTime,this.service.submitProgressAv({ScrNumber:this.screenNumber,UserId:this.userId,BookMark:this.bookmark,ModuleId:this.moduleId,screenType:this.screenType,timeSpent:this.totalTime,avDuration:this.avDuration}).subscribe(e=>{this.bookmarkList=e.GetBkMrkScr.map(e=>parseInt(e.ScrNo)),localStorage.setItem("bookmarkList",JSON.stringify(this.bookmarkList))}),this.router.navigate(["/adults/wisdom-shorts/wisdom-shorts-s03"])}prev(){this.router.navigate(["/adults/wisdom-shorts"])}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(a.g),n.Nb(m.a),n.Nb(o.h))},e.\u0275cmp=n.Hb({type:e,selectors:[["HumanWisdom-wisdom-shorts-s02"]],decls:3,vars:7,consts:[[3,"toc","bookmark","path","sendBookmark"],[3,"title","poster","bg","videoLink","sendAvDuration"],[3,"nextEmitter","previousEmitter"]],template:function(e,t){1&e&&(n.Sb(0,"app-course-header",0),n.ac("sendBookmark",function(e){return t.receiveBookmark(e)}),n.Rb(),n.Sb(1,"app-video-content",1),n.ac("sendAvDuration",function(e){return t.receiveAvDuration(e)}),n.Rb(),n.Sb(2,"app-course-footer",2),n.ac("nextEmitter",function(){return t.submitProgress()})("previousEmitter",function(){return t.prev()}),n.Rb()),2&e&&(n.lc("toc",t.toc)("bookmark",t.bookmark)("path",t.path),n.Ab(1),n.lc("title",t.title)("poster",t.poster)("bg",t.bg)("videoLink",t.videoLink))},directives:[c.a,h.a,u.a],styles:[""]}),e})()}];let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Lb({type:e}),e.\u0275inj=n.Kb({imports:[[a.k.forChild(d)],a.k]}),e})();var b=s("AuZA");let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Lb({type:e}),e.\u0275inj=n.Kb({imports:[[o.c,r.f,i.e,k,b.a]]}),e})()}}]);