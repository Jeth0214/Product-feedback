import{a as J}from"./chunk-FRFDJ575.js";import{a as y,b as _,c as H,d as V,e as U,f as W,g as X,h as q,i as G,j as K}from"./chunk-VI7TWOAT.js";import{b as O,r as C}from"./chunk-PJAMIMIX.js";import{$a as B,Fa as z,Ha as $,Ja as a,Ra as j,U as I,Va as E,W as c,Xa as l,Za as u,ab as N,bb as b,cb as v,d as D,da as P,db as t,ea as R,eb as n,fb as s,ib as L,lb as x,mb as f,qb as m,rb as d,sb as h,ub as p,vb as A}from"./chunk-U7SXPUJH.js";function Y(i,o){if(i&1){let e=L();t(0,"button",1),x("click",function(){let g=P(e).$implicit,F=f();return R(F.onChooseCategory(g))}),m(1),n()}if(i&2){let e=o.$implicit,r=o.$index,g=o.$count,F=f();u("ms-2",r!==0)("mb-4",r!==g-1),l("ngClass",F.chosenCategory===e?"!bg-blue !text-white ":""),a(),h(" ",e," ")}}var k=class i{categories=["All","UI","UX","Enhancement","Bug","Feature"];chosenCategory="All";onChooseCategory(o="All"){this.chosenCategory=o,console.log(this.chosenCategory)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=c({type:i,selectors:[["app-category"]],standalone:!0,features:[p],decls:2,vars:0,consts:[[1,"mb-","text-sm","inline-block","capitalize","py-1","px-4","bg-light-500","text-blue","font-semibold","rounded-10","hover:bg-light-300","transition",3,"ngClass","ms-2","mb-4"],[1,"mb-","text-sm","inline-block","capitalize","py-1","px-4","bg-light-500","text-blue","font-semibold","rounded-10","hover:bg-light-300","transition",3,"click","ngClass"]],template:function(e,r){e&1&&b(0,Y,2,6,"button",0,N),e&2&&v(r.categories)},dependencies:[O]})};var ee=(i,o)=>o.id,te=i=>["/feedbacks",i];function ne(i,o){if(i&1&&(t(0,"div",6),s(1,"img",12),t(2,"p",13),m(3),n()()),i&2){let e=f().$implicit;a(3),d(e.comments.length)}}function ie(i,o){if(i&1&&(t(0,"div",11),s(1,"img",12),t(2,"p",13),m(3),n()()),i&2){let e=f().$implicit;a(3),d(e.comments.length)}}function oe(i,o){if(i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),s(4,"fa-icon",4),t(5,"span",5),m(6),n()(),E(7,ne,4,1,"div",6),n(),t(8,"div",7)(9,"h3",8),m(10),n(),t(11,"p",9),m(12),n(),t(13,"p",10),m(14),n()()(),E(15,ie,4,1,"div",11),n()),i&2){let e=o.$implicit,r=f();l("routerLink",A(8,te,e.id)),a(4),l("icon",r.upVoteIcon),a(2),d(e.upvotes),a(),B(e.comments?7:-1),a(3),d(e.title),a(2),d(e.description),a(2),h(" ",e.category,""),a(),B(e.comments?15:-1)}}function ae(i,o){i&1&&s(0,"app-empty")}var S=class i{plusIcon=W;upVoteIcon=H;commentIcon=U;feedBacks=j([]);_feedBackService=I(q);_toastrService=I(J);constructor(){this.getFeedBacks()}getFeedBacks(){return D(this,null,function*(){try{let o=yield this._feedBackService.getAllFeedBacks();this.feedBacks.set(o)}catch(o){let e=o.message||"Unknown error";this._toastrService.error(e,"Error")}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=c({type:i,selectors:[["app-feedbacks"]],standalone:!0,features:[p],decls:4,vars:1,consts:[[1,"feedBack","mx-4","md:mx-0","cursor-pointer","group/card","hover:shadow-2xl","hover:transition-all","md:flex","justify-between","items-center","shadow-md","bg-white","rounded-lg","px-8","py-7","my-5",3,"routerLink"],[1,"flex","gap-x-10","gap-y-4","flex-col","md:flex-row"],[1,"feedBack_upvotes","order-2","md:order-1","flex","justify-between","md:block"],[1,"group/upvote","flex","gap-x-2","flex-row","items-center","md:flex-col","px-2","py-3","font-bold","min-w-12","bg-light-500","rounded-10","hover:bg-light-300","active:bg-blue","active:text-white","transition"],[1,"font-bold","text-blue","group-active/upvote:text-white",3,"icon"],[1,"text-sm"],[1,"feedback_comment_count","flex","md:hidden","items-center","gap-2"],[1,"feedBack_descriptions","order-1","md:order-2"],[1,"text-lg","font-bold","group-hover/card:text-blue"],[1,"my-2"],[1,"inline-block","capitalize","py-2","px-4","bg-light-500","text-blue","font-semibold","rounded-10"],[1,"feedback_comment_count","hidden","md:flex","items-center","gap-2"],["src","./assets/shared/icon-comments.svg","alt","comments","loading","lazy"],[1,"font-bold"]],template:function(e,r){e&1&&(s(0,"app-loading"),b(1,oe,16,10,"div",0,ee,!1,ae,1,0,"app-empty")),e&2&&(a(),v(r.feedBacks()))},dependencies:[G,_,y,K,C]})};var w=class i{title="Roadmap";circleIcon=V;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=c({type:i,selectors:[["app-roadmap-main-card"]],standalone:!0,features:[p],decls:24,vars:4,consts:[[1,"flex","justify-between","items-end"],[1,"text-xl","font-bold"],["routerLink","/roadmap","ariaCurrentWhenActive","page",1,"font-semibold","underline","text-blue","cursor-pointer","hover:text-dark-500","transition-colors"],[1,"text-dark-500","mt-6"],[1,"flex","justify-between","items-end","capitalize"],[1,"text-planned","text-sm","me-4",3,"icon"],[1,"font-bold"],[1,"flex","justify-between","items-end","my-2","capitalize"],[1,"text-in-progress","text-sm","me-4",3,"icon"],[1,"text-live","text-sm","me-4",3,"icon"]],template:function(e,r){e&1&&(t(0,"div",0)(1,"h2",1),m(2),n(),t(3,"a",2),m(4," View "),n()(),t(5,"ul",3)(6,"li",4)(7,"div"),s(8,"fa-icon",5),m(9," Planned"),n(),t(10,"div",6),m(11,"2"),n()(),t(12,"li",7)(13,"div"),s(14,"fa-icon",8),m(15," In Progress"),n(),t(16,"div",6),m(17,"3"),n()(),t(18,"li",4)(19,"div"),s(20,"fa-icon",9),m(21," Live "),n(),t(22,"div",6),m(23,"1"),n()()()),e&2&&(a(2),d(r.title),a(6),l("icon",r.circleIcon),a(6),l("icon",r.circleIcon),a(6),l("icon",r.circleIcon))},dependencies:[_,y,C]})};var Q=class i{title="Frontend Mentor";isOpen=!1;menuIcon="./assets/shared/mobile/icon-hamburger.svg";toggleMenu(){this.isOpen=!this.isOpen,this.changeIcon()}onResize(){window.innerWidth<=768&&(this.isOpen=!1,this.changeIcon())}changeIcon(){this.menuIcon=this.isOpen?"./assets/shared/mobile/icon-close.svg":"./assets/shared/mobile/icon-hamburger.svg"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=c({type:i,selectors:[["app-suggestions"]],hostBindings:function(e,r){e&1&&x("resize",function(){return r.onResize()},!1,$)},standalone:!0,features:[p],decls:25,vars:8,consts:[[1,"main","md:container","md:px-6","md:my-10","md:flex","md:flex-col","lg:flex-row","gap-8","relative","overflow-hidden"],[1,"lg:basis-64","md:flex","md:flex-row","lg:flex-col","md:justify-between","lg:justify-start","gap-8"],[1,"header","text-light","flex","justify-between","items-center","md:items-end","md:rounded-lg","shadow-md","p-6","bg-cover","bg-purple","bg-center","bg-no-repeat","bg-mobile","sm:bg-tablet","md:bg-desktop","flex-1","lg:flex-none"],[1,"h1","md:text-xl","lg:text-2xl","font-bold"],[1,"block","md:hidden"],[3,"click"],["alt","hamburger menu",3,"src"],[1,"hidden","md:block","bg-white","rounded-lg","shadow-md","p-6","flex-1","lg:flex-none"],[1,"md:hidden"],[1,"menu-background"],[1,"menu-panel","text-center"],[1,"bg-white","rounded-lg","shadow-md","p-6"],[1,"bg-white","rounded-lg","shadow-md","p-6","mt-6","md:mt-0"],[1,"flex-auto"],[3,"isSuggestionPage","title"]],template:function(e,r){e&1&&(t(0,"main",0)(1,"header",1)(2,"div",2)(3,"div")(4,"h1",3),m(5),n(),t(6,"p"),m(7,"Feedback Board"),n()(),t(8,"div",4)(9,"button",5),x("click",function(){return r.toggleMenu()}),s(10,"img",6),n()()(),t(11,"div",7),s(12,"app-category"),n(),t(13,"div",7),s(14,"app-roadmap-main-card"),n(),t(15,"div",8),s(16,"div",9),t(17,"div",10)(18,"div",11),s(19,"app-category"),n(),t(20,"div",12),s(21,"app-roadmap-main-card"),n()()()(),t(22,"div",13),s(23,"app-toolbar",14)(24,"app-feedbacks"),n()()),e&2&&(a(5),d(r.title),a(5),l("src",r.menuIcon,z),a(6),u("show",r.isOpen),a(),u("show",r.isOpen),a(6),l("isSuggestionPage",!0)("title",r.title))},dependencies:[X,w,k,S]})};export{Q as SuggestionsComponent};
