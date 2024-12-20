import{a as M,b as w,c as P,d as T,g as L,h as D,i as N,j as z}from"./chunk-ZYPOEX6R.js";import{b}from"./chunk-PUU36S7E.js";import{$a as o,Ia as t,Oa as B,Sa as S,T as h,Ua as l,V as m,Wa as I,Ya as R,Za as E,_a as i,ab as p,d as y,db as f,eb as g,hb as k,ib as d,jb as c,kb as s,la as _,lb as F,mb as u,yb as v}from"./chunk-FVSG5MZS.js";var q=(r,e)=>e.id;function U(r,e){if(r&1&&(i(0,"div",2)(1,"div",3)(2,"div",4),p(3,"fa-icon",5),d(4," In Progress"),o(),i(5,"h3",6),d(6),o(),i(7,"p",7),d(8),o(),i(9,"p",8),d(10),o()(),i(11,"div",9)(12,"button",10),p(13,"img",11),i(14,"span",12),d(15),o()(),i(16,"div",13),p(17,"img",14),i(18,"p",15),d(19),o()()()()),r&2){let n=e.$implicit,a=g();k("ngClass","border-",a.title,""),t(3),k("ngClass","text-",a.title,""),l("icon",a.circleIcon),t(3),c(n.title),t(2),c(n.description),t(2),s(" ",n.category,""),t(5),c(n.upvotes),t(4),c(n.comments==null?null:n.comments.length)}}var x=class r{upVoteIcon=P;circleIcon=T;feedBacks=_.required();title="";description="";static \u0275fac=function(n){return new(n||r)};static \u0275cmp=m({type:r,selectors:[["app-roadmap-list-card"]],inputs:{feedBacks:[1,"feedBacks"],title:"title",description:"description"},standalone:!0,features:[u],decls:7,vars:3,consts:[[1,"my-6","mx-4","md:mx-0"],[1,"text-lg","text-dark-800","font-bold","capitalize"],[1,"feedBack","mx-4","md:mx-0","cursor-pointer","border-t-4","group/card","hover:shadow-2xl","hover:transition-all","shadow-md","bg-white","rounded-lg","px-8","py-7","my-5",3,"ngClass"],[1,"feedBack_descriptions"],[1,"mb-3.5"],[1,"me-4",3,"ngClass","icon"],[1,"text-lg","font-bold","group-hover/card:text-blue"],[1,"my-2"],[1,"inline-block","capitalize","py-2","px-4","bg-light-500","text-blue","font-semibold","rounded-10"],[1,"feedBack_upvotes","flex","justify-between","mt-4"],[1,"group/upvote","flex","gap-x-2","flex-row","items-center","py-2","px-4","font-bold","bg-light-500","rounded-10","hover:bg-light-300","active:bg-blue","active:text-white","transition"],["src","./assets/shared/icon-arrow-up.svg","alt","comments","loading","lazy"],[1,"text-sm"],[1,"feedback_comment_count","hidden","md:flex","items-center","gap-2"],["src","./assets/shared/icon-comments.svg","alt","comments","loading","lazy"],[1,"font-bold"]],template:function(n,a){n&1&&(i(0,"div",0)(1,"h2",1),d(2),o(),i(3,"p"),d(4),o(),R(5,U,20,10,"div",2,q),o()),n&2&&(t(2),F(" ",a.title," (",a.feedBacks().length,")"),t(2),s(" ",a.description," "),t(),E(a.feedBacks()))},dependencies:[w,M,b]})};function V(r,e){if(r&1&&(i(0,"div",4)(1,"div",5),p(2,"app-roadmap-list-card",6)(3,"app-roadmap-list-card",7)(4,"app-roadmap-list-card",8),o()()),r&2){let n=g();t(2),l("feedBacks",n.planned()),t(),l("feedBacks",n.inProgress()),t(),l("feedBacks",n.live())}}function G(r,e){r&1&&p(0,"app-empty")}var j=class r{title="Roadmap";selectedRoadMap="planned";_feedBackService=h(D);feedBacks=B([]);planned=v(()=>this.feedBacks().filter(e=>e.status==="planned"));inProgress=v(()=>this.feedBacks().filter(e=>e.status==="in-progress"));live=v(()=>this.feedBacks().filter(e=>e.status==="live"));constructor(){this.loadFeedBacks()}loadFeedBacks(){return y(this,null,function*(){try{let e=yield this._feedBackService.getAllFeedBacks();this.feedBacks.set(e)}catch(e){alert("Error loading feed"),console.error("Error loading feed",e)}})}onSelectRoadMap(e){console.log("onSelectRoadMap",e),this.selectedRoadMap=e}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=m({type:r,selectors:[["app-roadmap"]],standalone:!0,features:[u],decls:12,vars:9,consts:[[1,"md:container","px-0","md:px-6","md:mt-10"],[3,"title","isSuggestionPage"],[1,"flex","justify-evenly","gap-0","md:hidden","border","border-b-gray-200"],[1,"flex-1","cursor","py-5","text-sm","text-gray-400",3,"click","ngClass"],[1,"container","px-6"],[1,"grid","gap-3","md:grid-cols-3"],["title","planned","description","Ideas prioritized for research",3,"feedBacks"],["title","in-progress","description","Features currently being developed",3,"feedBacks"],["title","live","description","Released features",3,"feedBacks"]],template:function(n,a){n&1&&(i(0,"div",0),p(1,"app-toolbar",1)(2,"app-loading"),i(3,"div",2)(4,"button",3),f("click",function(){return a.onSelectRoadMap("planned")}),d(5),o(),i(6,"button",3),f("click",function(){return a.onSelectRoadMap("in-progress")}),d(7),o(),i(8,"button",3),f("click",function(){return a.onSelectRoadMap("live")}),d(9),o()()(),S(10,V,5,3,"div",4)(11,G,1,0,"app-empty")),n&2&&(t(),l("title",a.title)("isSuggestionPage",!1),t(3),l("ngClass",a.selectedRoadMap=="planned"?"border-b-planned border-b-4  font-bold !text-dark-800":""),t(),s("Planned (",a.planned().length,") "),t(),l("ngClass",a.selectedRoadMap=="in-progress"?"border-b-in-progress border-b-4  font-bold !text-dark-800":""),t(),s("In Progress (",a.inProgress().length,") "),t(),l("ngClass",a.selectedRoadMap=="live"?"border-b-live border-b-4  font-bold !text-dark-800":""),t(),s("Live (",a.live().length,") "),t(),I(a.feedBacks().length?10:11))},dependencies:[L,b,N,x,z]})};export{j as RoadmapComponent};