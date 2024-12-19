import{a as R1,b as I1,h as O1,n as U1,q as q1,s as _1}from"./chunk-PUU36S7E.js";import{$a as h,Da as w1,Ia as g,Ja as U,La as k1,N as z2,O as h1,Oa as y1,Sa as s2,T as l2,Ta as A1,Ua as X,V as T,Va as N2,W as x1,Wa as a2,X as g1,Xa as v1,Ya as T1,Za as P1,_a as M,a as t,ab as S,b as d,ba as g2,bb as F1,ca as N1,cb as D1,d as u1,da as b1,db as R2,eb as e2,fb as B1,gb as E1,ib as x,jb as n2,kb as H1,ma as S1,mb as P,r as d1}from"./chunk-FVSG5MZS.js";function s4(c,l){c&1&&S(0,"img",3)}function a4(c,l){c&1&&S(0,"img",4)}function e4(c,l){if(c&1){let s=F1();M(0,"li",8),R2("click",function(){let e=N1(s).$implicit,n=e2();return b1(n.onSelectOption(e))}),M(1,"span"),x(2),h(),S(3,"img",9),h()}if(c&2){let s=l.$implicit,a=l.$index,e=l.$count,n=e2();N2("text-purple",n.sortBy===s)("border-b-0",a===e-1),g(2),n2(s),g(),X("ngClass",n.sortBy==s?"block":"hidden")}}var b2=class c{sortOptions=[];sortBy="";isDropdownOpen=!1;toggleDropdown(){this.isDropdownOpen=!this.isDropdownOpen}onSelectOption(l){console.log(l),this.isDropdownOpen=!1,this.sortBy=l}static \u0275fac=function(s){return new(s||c)};static \u0275cmp=T({type:c,selectors:[["app-dropdown"]],inputs:{sortOptions:"sortOptions",sortBy:"sortBy"},standalone:!0,features:[P],decls:12,vars:4,consts:[[1,"relative"],["id","dropdownHoverButton","data-dropdown-toggle","dropdownHover","data-dropdown-trigger","hover","type","button",1,"text-white","hover:text-gray-100","flex","items-center","gap-2",3,"click","blur"],[1,"font-bold"],["loading","lazy","src","./assets/shared/icon-arrow-down.svg","alt","arrow down"],["loading","lazy","src","./assets/shared/icon-arrow-up.svg","alt","arrow up"],["id","dropdownHover",1,"z-10","absolute","top-14","bg-white","divide-y","divide-gray-100","rounded-lg","shadow","w-64"],["aria-labelledby","dropdownHoverButton",1,"text-dark-500"],[1,"flex","items-center","justify-between","py-3","px-6","border-b","border-b-light-500","hover:text-purple","cursor-pointer","transition",3,"text-purple","border-b-0"],[1,"flex","items-center","justify-between","py-3","px-6","border-b","border-b-light-500","hover:text-purple","cursor-pointer","transition",3,"click"],["src","./assets/shared/icon-check.svg","alt","check icon",3,"ngClass"]],template:function(s,a){s&1&&(M(0,"div",0)(1,"button",1),R2("click",function(){return a.toggleDropdown()})("blur",function(){return a.isDropdownOpen=!1}),M(2,"span"),x(3,"Sort by: "),M(4,"span",2),x(5),h()(),s2(6,s4,1,0,"img",3)(7,a4,1,0,"img",4),h(),M(8,"div",5)(9,"ul",6),T1(10,e4,4,6,"li",7,v1),h()()()),s&2&&(g(5),n2(a.sortBy),g(),a2(a.isDropdownOpen?7:6),g(2),N2("hidden",!a.isDropdownOpen),g(2),P1(a.sortOptions))},dependencies:[I1]})};var W1=()=>{},n1={},L3={},M3=null,p3={mark:W1,measure:W1};try{typeof window<"u"&&(n1=window),typeof document<"u"&&(L3=document),typeof MutationObserver<"u"&&(M3=MutationObserver),typeof performance<"u"&&(p3=performance)}catch{}var{userAgent:G1=""}=n1.navigator||{},W=n1,C=L3,j1=M3,S2=p3,t6=!!W.document,I=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",C3=~G1.indexOf("MSIE")||~G1.indexOf("Trident/"),u="classic",u3="duotone",w="sharp",k="sharp-duotone",n4=[u,u3,w,k],o4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},V1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},i4=["kit"],t4=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,f4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,r4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},z4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},m4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},L4={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},M4={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},p4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},d3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},C4=["solid","regular","light","thin","duotone","brands"],h3=[1,2,3,4,5,6,7,8,9,10],u4=h3.concat([11,12,13,14,15,16,17,18,19,20]),L2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},d4=[...Object.keys(L4),...C4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",L2.GROUP,L2.SWAP_OPACITY,L2.PRIMARY,L2.SECONDARY].concat(h3.map(c=>"".concat(c,"x"))).concat(u4.map(c=>"w-".concat(c))),h4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},x4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},g4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},X1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},H="___FONT_AWESOME___",G2=16,x3="fa",g3="svg-inline--fa",Q="data-fa-i2svg",j2="data-fa-pseudo-element",N4="data-fa-pseudo-element-pending",o1="data-prefix",i1="data-icon",Y1="fontawesome-i2svg",b4="async",S4=["HTML","HEAD","STYLE","SCRIPT"],N3=(()=>{try{return!0}catch{return!1}})(),b3=[u,w,k];function h2(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[u]}})}var S3=t({},d3);S3[u]=t(t(t({},d3[u]),V1.kit),V1["kit-duotone"]);var $=h2(S3),V2=t({},p4);V2[u]=t(t(t({},V2[u]),X1.kit),X1["kit-duotone"]);var u2=h2(V2),X2=t({},M4);X2[u]=t(t({},X2[u]),g4.kit);var K=h2(X2),Y2=t({},m4);Y2[u]=t(t({},Y2[u]),x4.kit);var w4=h2(Y2),k4=t4,w3="fa-layers-text",y4=f4,A4=t({},o4),f6=h2(A4),v4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],O2=L2,t2=new Set;Object.keys(u2[u]).map(t2.add.bind(t2));Object.keys(u2[w]).map(t2.add.bind(t2));Object.keys(u2[k]).map(t2.add.bind(t2));var T4=[...i4,...d4],p2=W.FontAwesomeConfig||{};function P4(c){var l=C.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function F4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}C&&typeof C.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,a]=l,e=F4(P4(s));e!=null&&(p2[a]=e)});var k3={styleDefault:"solid",familyDefault:"classic",cssPrefix:x3,replacementClass:g3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};p2.familyPrefix&&(p2.cssPrefix=p2.familyPrefix);var f2=t(t({},k3),p2);f2.autoReplaceSvg||(f2.observeMutations=!1);var z={};Object.keys(k3).forEach(c=>{Object.defineProperty(z,c,{enumerable:!0,set:function(l){f2[c]=l,C2.forEach(s=>s(z))},get:function(){return f2[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(c){f2.cssPrefix=c,C2.forEach(l=>l(z))},get:function(){return f2.cssPrefix}});W.FontAwesomeConfig=z;var C2=[];function D4(c){return C2.push(c),()=>{C2.splice(C2.indexOf(c),1)}}var q=G2,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function B4(c){if(!c||!I)return;let l=C.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let s=C.head.childNodes,a=null;for(let e=s.length-1;e>-1;e--){let n=s[e],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=n)}return C.head.insertBefore(l,a),c}var E4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function d2(){let c=12,l="";for(;c-- >0;)l+=E4[Math.random()*62|0];return l}function r2(c){let l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function t1(c){return c.classList?r2(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function y3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function H4(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(y3(c[s]),'" '),"").trim()}function v2(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function f1(c){return c.size!==F.size||c.x!==F.x||c.y!==F.y||c.rotate!==F.rotate||c.flipX||c.flipY}function R4(c){let{transform:l,containerWidth:s,iconWidth:a}=c,e={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),i="rotate(".concat(l.rotate," 0 0)"),f={transform:"".concat(n," ").concat(o," ").concat(i)},r={transform:"translate(".concat(a/2*-1," -256)")};return{outer:e,inner:f,path:r}}function I4(c){let{transform:l,width:s=G2,height:a=G2,startCentered:e=!1}=c,n="";return e&&C3?n+="translate(".concat(l.x/q-s/2,"em, ").concat(l.y/q-a/2,"em) "):e?n+="translate(calc(-50% + ".concat(l.x/q,"em), calc(-50% + ").concat(l.y/q,"em)) "):n+="translate(".concat(l.x/q,"em, ").concat(l.y/q,"em) "),n+="scale(".concat(l.size/q*(l.flipX?-1:1),", ").concat(l.size/q*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var O4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function A3(){let c=x3,l=g3,s=z.cssPrefix,a=z.replacementClass,e=O4;if(s!==c||a!==l){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(l),"g");e=e.replace(n,".".concat(s,"-")).replace(o,"--".concat(s,"-")).replace(i,".".concat(a))}return e}var $1=!1;function U2(){z.autoAddCss&&!$1&&(B4(A3()),$1=!0)}var U4={mixout(){return{dom:{css:A3,insertCss:U2}}},hooks(){return{beforeDOMElementCreation(){U2()},beforeI2svg(){U2()}}}},R=W||{};R[H]||(R[H]={});R[H].styles||(R[H].styles={});R[H].hooks||(R[H].hooks={});R[H].shims||(R[H].shims=[]);var D=R[H],v3=[],T3=function(){C.removeEventListener("DOMContentLoaded",T3),y2=1,v3.map(c=>c())},y2=!1;I&&(y2=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),y2||C.addEventListener("DOMContentLoaded",T3));function q4(c){I&&(y2?setTimeout(c,0):v3.push(c))}function x2(c){let{tag:l,attributes:s={},children:a=[]}=c;return typeof c=="string"?y3(c):"<".concat(l," ").concat(H4(s),">").concat(a.map(x2).join(""),"</").concat(l,">")}function K1(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var _4=function(l,s){return function(a,e,n,o){return l.call(s,a,e,n,o)}},q2=function(l,s,a,e){var n=Object.keys(l),o=n.length,i=e!==void 0?_4(s,e):s,f,r,m;for(a===void 0?(f=1,m=l[n[0]]):(f=0,m=a);f<o;f++)r=n[f],m=i(m,l[r],r,l);return m};function W4(c){let l=[],s=0,a=c.length;for(;s<a;){let e=c.charCodeAt(s++);if(e>=55296&&e<=56319&&s<a){let n=c.charCodeAt(s++);(n&64512)==56320?l.push(((e&1023)<<10)+(n&1023)+65536):(l.push(e),s--)}else l.push(e)}return l}function $2(c){let l=W4(c);return l.length===1?l[0].toString(16):null}function G4(c,l){let s=c.length,a=c.charCodeAt(l),e;return a>=55296&&a<=56319&&s>l+1&&(e=c.charCodeAt(l+1),e>=56320&&e<=57343)?(a-55296)*1024+e-56320+65536:a}function Q1(c){return Object.keys(c).reduce((l,s)=>{let a=c[s];return!!a.icon?l[a.iconName]=a.icon:l[s]=a,l},{})}function K2(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=s,e=Q1(l);typeof D.hooks.addPack=="function"&&!a?D.hooks.addPack(c,Q1(l)):D.styles[c]=t(t({},D.styles[c]||{}),e),c==="fas"&&K2("fa",l)}var{styles:Y,shims:j4}=D,V4={[u]:Object.values(K[u]),[w]:Object.values(K[w]),[k]:Object.values(K[k])},r1=null,P3={},F3={},D3={},B3={},E3={},X4={[u]:Object.keys($[u]),[w]:Object.keys($[w]),[k]:Object.keys($[k])};function Y4(c){return~T4.indexOf(c)}function $4(c,l){let s=l.split("-"),a=s[0],e=s.slice(1).join("-");return a===c&&e!==""&&!Y4(e)?e:null}var H3=()=>{let c=a=>q2(Y,(e,n,o)=>(e[o]=q2(n,a,{}),e),{});P3=c((a,e,n)=>(e[3]&&(a[e[3]]=n),e[2]&&e[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=n}),a)),F3=c((a,e,n)=>(a[n]=n,e[2]&&e[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=n}),a)),E3=c((a,e,n)=>{let o=e[2];return a[n]=n,o.forEach(i=>{a[i]=n}),a});let l="far"in Y||z.autoFetchSvg,s=q2(j4,(a,e)=>{let n=e[0],o=e[1],i=e[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(a.names[n]={prefix:o,iconName:i}),typeof n=="number"&&(a.unicodes[n.toString(16)]={prefix:o,iconName:i}),a},{names:{},unicodes:{}});D3=s.names,B3=s.unicodes,r1=T2(z.styleDefault,{family:z.familyDefault})};D4(c=>{r1=T2(c.styleDefault,{family:z.familyDefault})});H3();function z1(c,l){return(P3[c]||{})[l]}function K4(c,l){return(F3[c]||{})[l]}function _(c,l){return(E3[c]||{})[l]}function R3(c){return D3[c]||{prefix:null,iconName:null}}function Q4(c){let l=B3[c],s=z1("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function G(){return r1}var m1=()=>({prefix:null,iconName:null,rest:[]});function T2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:s=u}=l,a=$[s][c],e=u2[s][c]||u2[s][a],n=c in D.styles?c:null;return e||n||null}var J4={[u]:Object.keys(K[u]),[w]:Object.keys(K[w]),[k]:Object.keys(K[k])};function P2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:s=!1}=l,a={[u]:"".concat(z.cssPrefix,"-").concat(u),[w]:"".concat(z.cssPrefix,"-").concat(w),[k]:"".concat(z.cssPrefix,"-").concat(k)},e=null,n=u,o=n4.filter(f=>f!==u3);o.forEach(f=>{(c.includes(a[f])||c.some(r=>J4[f].includes(r)))&&(n=f)});let i=c.reduce((f,r)=>{let m=$4(z.cssPrefix,r);if(Y[r]?(r=V4[n].includes(r)?w4[n][r]:r,e=r,f.prefix=r):X4[n].indexOf(r)>-1?(e=r,f.prefix=T2(r,{family:n})):m?f.iconName=m:r!==z.replacementClass&&!o.some(p=>r===a[p])&&f.rest.push(r),!s&&f.prefix&&f.iconName){let p=e==="fa"?R3(f.iconName):{},L=_(f.prefix,f.iconName);p.prefix&&(e=null),f.iconName=p.iconName||L||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Y.far&&Y.fas&&!z.autoFetchSvg&&(f.prefix="fas")}return f},m1());return(c.includes("fa-brands")||c.includes("fab"))&&(i.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(i.prefix="fad"),!i.prefix&&n===w&&(Y.fass||z.autoFetchSvg)&&(i.prefix="fass",i.iconName=_(i.prefix,i.iconName)||i.iconName),!i.prefix&&n===k&&(Y.fasds||z.autoFetchSvg)&&(i.prefix="fasds",i.iconName=_(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||e==="fa")&&(i.prefix=G()||"fas"),i}var Q2=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),a=0;a<l;a++)s[a]=arguments[a];let e=s.reduce(this._pullDefinitions,{});Object.keys(e).forEach(n=>{this.definitions[n]=t(t({},this.definitions[n]||{}),e[n]),K2(n,e[n]);let o=K[u][n];o&&K2(o,e[n]),H3()})}reset(){this.definitions={}}_pullDefinitions(l,s){let a=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(a).map(e=>{let{prefix:n,iconName:o,icon:i}=a[e],f=i[2];l[n]||(l[n]={}),f.length>0&&f.forEach(r=>{typeof r=="string"&&(l[n][r]=i)}),l[n][o]=i}),l}},J1=[],o2={},i2={},Z4=Object.keys(i2);function c0(c,l){let{mixoutsTo:s}=l;return J1=c,o2={},Object.keys(i2).forEach(a=>{Z4.indexOf(a)===-1&&delete i2[a]}),J1.forEach(a=>{let e=a.mixout?a.mixout():{};if(Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(s[n]=e[n]),typeof e[n]=="object"&&Object.keys(e[n]).forEach(o=>{s[n]||(s[n]={}),s[n][o]=e[n][o]})}),a.hooks){let n=a.hooks();Object.keys(n).forEach(o=>{o2[o]||(o2[o]=[]),o2[o].push(n[o])})}a.provides&&a.provides(i2)}),s}function J2(c,l){for(var s=arguments.length,a=new Array(s>2?s-2:0),e=2;e<s;e++)a[e-2]=arguments[e];return(o2[c]||[]).forEach(o=>{l=o.apply(null,[l,...a])}),l}function J(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),a=1;a<l;a++)s[a-1]=arguments[a];(o2[c]||[]).forEach(n=>{n.apply(null,s)})}function j(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return i2[c]?i2[c].apply(null,l):void 0}function Z2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,s=c.prefix||G();if(l)return l=_(s,l)||l,K1(I3.definitions,s,l)||K1(D.styles,s,l)}var I3=new Q2,l0=()=>{z.autoReplaceSvg=!1,z.observeMutations=!1,J("noAuto")},s0={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I?(J("beforeI2svg",c),j("pseudoElements2svg",c),j("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,q4(()=>{e0({autoReplaceSvgRoot:l}),J("watch",c)})}},a0={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:_(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=T2(c[0]);return{prefix:s,iconName:_(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(z.cssPrefix,"-"))>-1||c.match(k4))){let l=P2(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||G(),iconName:_(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=G();return{prefix:l,iconName:_(l,c)||c}}}},y={noAuto:l0,config:z,dom:s0,parse:a0,library:I3,findIconDefinition:Z2,toHtml:x2},e0=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=C}=c;(Object.keys(D.styles).length>0||z.autoFetchSvg)&&I&&z.autoReplaceSvg&&y.dom.i2svg({node:l})};function F2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>x2(s))}}),Object.defineProperty(c,"node",{get:function(){if(!I)return;let s=C.createElement("div");return s.innerHTML=c.html,s.children}}),c}function n0(c){let{children:l,main:s,mask:a,attributes:e,styles:n,transform:o}=c;if(f1(o)&&s.found&&!a.found){let{width:i,height:f}=s,r={x:i/f/2,y:.5};e.style=v2(d(t({},n),{"transform-origin":"".concat(r.x+o.x/16,"em ").concat(r.y+o.y/16,"em")}))}return[{tag:"svg",attributes:e,children:l}]}function o0(c){let{prefix:l,iconName:s,children:a,attributes:e,symbol:n}=c,o=n===!0?"".concat(l,"-").concat(z.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(t({},e),{id:o}),children:a}]}]}function L1(c){let{icons:{main:l,mask:s},prefix:a,iconName:e,transform:n,symbol:o,title:i,maskId:f,titleId:r,extra:m,watchable:p=!1}=c,{width:L,height:N}=s.found?s:l,O=a==="fak",V=[z.replacementClass,e?"".concat(z.cssPrefix,"-").concat(e):""].filter(c2=>m.classes.indexOf(c2)===-1).filter(c2=>c2!==""||!!c2).concat(m.classes).join(" "),A={children:[],attributes:d(t({},m.attributes),{"data-prefix":a,"data-icon":e,class:V,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(N)})},E=O&&!~m.classes.indexOf("fa-fw")?{width:"".concat(L/N*16*.0625,"em")}:{};p&&(A.attributes[Q]=""),i&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(r||d2())},children:[i]}),delete A.attributes.title);let b=d(t({},A),{prefix:a,iconName:e,main:l,mask:s,maskId:f,transform:n,symbol:o,styles:t(t({},E),m.styles)}),{children:v,attributes:Z}=s.found&&l.found?j("generateAbstractMask",b)||{children:[],attributes:{}}:j("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=v,b.attributes=Z,o?o0(b):n0(b)}function Z1(c){let{content:l,width:s,height:a,transform:e,title:n,extra:o,watchable:i=!1}=c,f=d(t(t({},o.attributes),n?{title:n}:{}),{class:o.classes.join(" ")});i&&(f[Q]="");let r=t({},o.styles);f1(e)&&(r.transform=I4({transform:e,startCentered:!0,width:s,height:a}),r["-webkit-transform"]=r.transform);let m=v2(r);m.length>0&&(f.style=m);let p=[];return p.push({tag:"span",attributes:f,children:[l]}),n&&p.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),p}function i0(c){let{content:l,title:s,extra:a}=c,e=d(t(t({},a.attributes),s?{title:s}:{}),{class:a.classes.join(" ")}),n=v2(a.styles);n.length>0&&(e.style=n);let o=[];return o.push({tag:"span",attributes:e,children:[l]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}var{styles:_2}=D;function c1(c){let l=c[0],s=c[1],[a]=c.slice(4),e=null;return Array.isArray(a)?e={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(O2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(O2.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(O2.PRIMARY),fill:"currentColor",d:a[1]}}]}:e={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:l,height:s,icon:e}}var t0={found:!1,width:512,height:512};function f0(c,l){!N3&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function l1(c,l){let s=l;return l==="fa"&&z.styleDefault!==null&&(l=G()),new Promise((a,e)=>{if(s==="fa"){let n=R3(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&_2[l]&&_2[l][c]){let n=_2[l][c];return a(c1(n))}f0(c,l),a(d(t({},t0),{icon:z.showMissingIcons&&c?j("missingIconAbstract")||{}:{}}))})}var c3=()=>{},s1=z.measurePerformance&&S2&&S2.mark&&S2.measure?S2:{mark:c3,measure:c3},M2='FA "6.6.0"',r0=c=>(s1.mark("".concat(M2," ").concat(c," begins")),()=>O3(c)),O3=c=>{s1.mark("".concat(M2," ").concat(c," ends")),s1.measure("".concat(M2," ").concat(c),"".concat(M2," ").concat(c," begins"),"".concat(M2," ").concat(c," ends"))},M1={begin:r0,end:O3},w2=()=>{};function l3(c){return typeof(c.getAttribute?c.getAttribute(Q):null)=="string"}function z0(c){let l=c.getAttribute?c.getAttribute(o1):null,s=c.getAttribute?c.getAttribute(i1):null;return l&&s}function m0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function L0(){return z.autoReplaceSvg===!0?k2.replace:k2[z.autoReplaceSvg]||k2.replace}function M0(c){return C.createElementNS("http://www.w3.org/2000/svg",c)}function p0(c){return C.createElement(c)}function U3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:s=c.tag==="svg"?M0:p0}=l;if(typeof c=="string")return C.createTextNode(c);let a=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){a.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){a.appendChild(U3(n,{ceFn:s}))}),a}function C0(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var k2={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(U3(s),l)}),l.getAttribute(Q)===null&&z.keepOriginalSource){let s=C.createComment(C0(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){let l=c[0],s=c[1];if(~t1(l).indexOf(z.replacementClass))return k2.replace(c);let a=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){let n=s[0].attributes.class.split(" ").reduce((o,i)=>(i===z.replacementClass||i.match(a)?o.toSvg.push(i):o.toNode.push(i),o),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}let e=s.map(n=>x2(n)).join(`
`);l.setAttribute(Q,""),l.innerHTML=e}};function s3(c){c()}function q3(c,l){let s=typeof l=="function"?l:w2;if(c.length===0)s();else{let a=s3;z.mutateApproach===b4&&(a=W.requestAnimationFrame||s3),a(()=>{let e=L0(),n=M1.begin("mutate");c.map(e),n(),s()})}}var p1=!1;function _3(){p1=!0}function a1(){p1=!1}var A2=null;function a3(c){if(!j1||!z.observeMutations)return;let{treeCallback:l=w2,nodeCallback:s=w2,pseudoElementsCallback:a=w2,observeMutationsRoot:e=C}=c;A2=new j1(n=>{if(p1)return;let o=G();r2(n).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!l3(i.addedNodes[0])&&(z.searchPseudoElements&&a(i.target),l(i.target)),i.type==="attributes"&&i.target.parentNode&&z.searchPseudoElements&&a(i.target.parentNode),i.type==="attributes"&&l3(i.target)&&~v4.indexOf(i.attributeName))if(i.attributeName==="class"&&z0(i.target)){let{prefix:f,iconName:r}=P2(t1(i.target));i.target.setAttribute(o1,f||o),r&&i.target.setAttribute(i1,r)}else m0(i.target)&&s(i.target)})}),I&&A2.observe(e,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function u0(){A2&&A2.disconnect()}function d0(c){let l=c.getAttribute("style"),s=[];return l&&(s=l.split(";").reduce((a,e)=>{let n=e.split(":"),o=n[0],i=n.slice(1);return o&&i.length>0&&(a[o]=i.join(":").trim()),a},{})),s}function h0(c){let l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",e=P2(t1(c));return e.prefix||(e.prefix=G()),l&&s&&(e.prefix=l,e.iconName=s),e.iconName&&e.prefix||(e.prefix&&a.length>0&&(e.iconName=K4(e.prefix,c.innerText)||z1(e.prefix,$2(c.innerText))),!e.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(e.iconName=c.firstChild.data)),e}function x0(c){let l=r2(c.attributes).reduce((e,n)=>(e.name!=="class"&&e.name!=="style"&&(e[n.name]=n.value),e),{}),s=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return z.autoA11y&&(s?l["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(a||d2()):(l["aria-hidden"]="true",l.focusable="false")),l}function g0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function e3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:s,prefix:a,rest:e}=h0(c),n=x0(c),o=J2("parseNodeAttributes",{},c),i=l.styleParser?d0(c):[];return t({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:a,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:i,attributes:n}},o)}var{styles:N0}=D;function W3(c){let l=z.autoReplaceSvg==="nest"?e3(c,{styleParser:!1}):e3(c);return~l.extra.classes.indexOf(w3)?j("generateLayersText",c,l):j("generateSvgReplacementMutation",c,l)}var B=new Set;b3.map(c=>{B.add("fa-".concat(c))});Object.keys($[u]).map(B.add.bind(B));Object.keys($[w]).map(B.add.bind(B));Object.keys($[k]).map(B.add.bind(B));B=[...B];function n3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I)return Promise.resolve();let s=C.documentElement.classList,a=m=>s.add("".concat(Y1,"-").concat(m)),e=m=>s.remove("".concat(Y1,"-").concat(m)),n=z.autoFetchSvg?B:b3.map(m=>"fa-".concat(m)).concat(Object.keys(N0));n.includes("fa")||n.push("fa");let o=[".".concat(w3,":not([").concat(Q,"])")].concat(n.map(m=>".".concat(m,":not([").concat(Q,"])"))).join(", ");if(o.length===0)return Promise.resolve();let i=[];try{i=r2(c.querySelectorAll(o))}catch{}if(i.length>0)a("pending"),e("complete");else return Promise.resolve();let f=M1.begin("onTree"),r=i.reduce((m,p)=>{try{let L=W3(p);L&&m.push(L)}catch(L){N3||L.name==="MissingIcon"&&console.error(L)}return m},[]);return new Promise((m,p)=>{Promise.all(r).then(L=>{q3(L,()=>{a("active"),a("complete"),e("pending"),typeof l=="function"&&l(),f(),m()})}).catch(L=>{f(),p(L)})})}function b0(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;W3(c).then(s=>{s&&q3([s],l)})}function S0(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(l||{}).icon?l:Z2(l||{}),{mask:e}=s;return e&&(e=(e||{}).icon?e:Z2(e||{})),c(a,d(t({},s),{mask:e}))}}var w0=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=F,symbol:a=!1,mask:e=null,maskId:n=null,title:o=null,titleId:i=null,classes:f=[],attributes:r={},styles:m={}}=l;if(!c)return;let{prefix:p,iconName:L,icon:N}=c;return F2(t({type:"icon"},c),()=>(J("beforeDOMElementCreation",{iconDefinition:c,params:l}),z.autoA11y&&(o?r["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(i||d2()):(r["aria-hidden"]="true",r.focusable="false")),L1({icons:{main:c1(N),mask:e?c1(e.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:L,transform:t(t({},F),s),symbol:a,title:o,maskId:n,titleId:i,extra:{attributes:r,styles:m,classes:f}})))},k0={mixout(){return{icon:S0(w0)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=n3,c.nodeCallback=b0,c}}},provides(c){c.i2svg=function(l){let{node:s=C,callback:a=()=>{}}=l;return n3(s,a)},c.generateSvgReplacementMutation=function(l,s){let{iconName:a,title:e,titleId:n,prefix:o,transform:i,symbol:f,mask:r,maskId:m,extra:p}=s;return new Promise((L,N)=>{Promise.all([l1(a,o),r.iconName?l1(r.iconName,r.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(O=>{let[V,A]=O;L([l,L1({icons:{main:V,mask:A},prefix:o,iconName:a,transform:i,symbol:f,maskId:m,title:e,titleId:n,extra:p,watchable:!0})])}).catch(N)})},c.generateAbstractIcon=function(l){let{children:s,attributes:a,main:e,transform:n,styles:o}=l,i=v2(o);i.length>0&&(a.style=i);let f;return f1(n)&&(f=j("generateAbstractTransformGrouping",{main:e,transform:n,containerWidth:e.width,iconWidth:e.width})),s.push(f||e.icon),{children:s,attributes:a}}}},y0={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:s=[]}=l;return F2({type:"layer"},()=>{J("beforeDOMElementCreation",{assembler:c,params:l});let a=[];return c(e=>{Array.isArray(e)?e.map(n=>{a=a.concat(n.abstract)}):a=a.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers"),...s].join(" ")},children:a}]})}}}},A0={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:s=null,classes:a=[],attributes:e={},styles:n={}}=l;return F2({type:"counter",content:c},()=>(J("beforeDOMElementCreation",{content:c,params:l}),i0({content:c.toString(),title:s,extra:{attributes:e,styles:n,classes:["".concat(z.cssPrefix,"-layers-counter"),...a]}})))}}}},v0={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=F,title:a=null,classes:e=[],attributes:n={},styles:o={}}=l;return F2({type:"text",content:c},()=>(J("beforeDOMElementCreation",{content:c,params:l}),Z1({content:c,transform:t(t({},F),s),title:a,extra:{attributes:n,styles:o,classes:["".concat(z.cssPrefix,"-layers-text"),...e]}})))}}},provides(c){c.generateLayersText=function(l,s){let{title:a,transform:e,extra:n}=s,o=null,i=null;if(C3){let f=parseInt(getComputedStyle(l).fontSize,10),r=l.getBoundingClientRect();o=r.width/f,i=r.height/f}return z.autoA11y&&!a&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,Z1({content:l.innerHTML,width:o,height:i,transform:e,title:a,extra:n,watchable:!0})])}}},T0=new RegExp('"',"ug"),o3=[1105920,1112319],i3=t(t(t({FontAwesome:{normal:"fas",400:"fas"}},z4),r4),h4),e1=Object.keys(i3).reduce((c,l)=>(c[l.toLowerCase()]=i3[l],c),{}),P0=Object.keys(e1).reduce((c,l)=>{let s=e1[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function F0(c){let l=c.replace(T0,""),s=G4(l,0),a=s>=o3[0]&&s<=o3[1],e=l.length===2?l[0]===l[1]:!1;return{value:$2(e?l[0]:l),isSecondary:a||e}}function D0(c,l){let s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(l),e=isNaN(a)?"normal":a;return(e1[s]||{})[e]||P0[s]}function t3(c,l){let s="".concat(N4).concat(l.replace(":","-"));return new Promise((a,e)=>{if(c.getAttribute(s)!==null)return a();let o=r2(c.children).filter(L=>L.getAttribute(j2)===l)[0],i=W.getComputedStyle(c,l),f=i.getPropertyValue("font-family"),r=f.match(y4),m=i.getPropertyValue("font-weight"),p=i.getPropertyValue("content");if(o&&!r)return c.removeChild(o),a();if(r&&p!=="none"&&p!==""){let L=i.getPropertyValue("content"),N=D0(f,m),{value:O,isSecondary:V}=F0(L),A=r[0].startsWith("FontAwesome"),E=z1(N,O),b=E;if(A){let v=Q4(O);v.iconName&&v.prefix&&(E=v.iconName,N=v.prefix)}if(E&&!V&&(!o||o.getAttribute(o1)!==N||o.getAttribute(i1)!==b)){c.setAttribute(s,b),o&&c.removeChild(o);let v=g0(),{extra:Z}=v;Z.attributes[j2]=l,l1(E,N).then(c2=>{let c4=L1(d(t({},v),{icons:{main:c2,mask:m1()},prefix:N,iconName:b,extra:Z,watchable:!0})),H2=C.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(H2,c.firstChild):c.appendChild(H2),H2.outerHTML=c4.map(l4=>x2(l4)).join(`
`),c.removeAttribute(s),a()}).catch(e)}else a()}else a()})}function B0(c){return Promise.all([t3(c,"::before"),t3(c,"::after")])}function E0(c){return c.parentNode!==document.head&&!~S4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(j2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function f3(c){if(I)return new Promise((l,s)=>{let a=r2(c.querySelectorAll("*")).filter(E0).map(B0),e=M1.begin("searchPseudoElements");_3(),Promise.all(a).then(()=>{e(),a1(),l()}).catch(()=>{e(),a1(),s()})})}var H0={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=f3,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:s=C}=l;z.searchPseudoElements&&f3(s)}}},r3=!1,R0={mixout(){return{dom:{unwatch(){_3(),r3=!0}}}},hooks(){return{bootstrap(){a3(J2("mutationObserverCallbacks",{}))},noAuto(){u0()},watch(c){let{observeMutationsRoot:l}=c;r3?a1():a3(J2("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},z3=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((s,a)=>{let e=a.toLowerCase().split("-"),n=e[0],o=e.slice(1).join("-");if(n&&o==="h")return s.flipX=!0,s;if(n&&o==="v")return s.flipY=!0,s;if(o=parseFloat(o),isNaN(o))return s;switch(n){case"grow":s.size=s.size+o;break;case"shrink":s.size=s.size-o;break;case"left":s.x=s.x-o;break;case"right":s.x=s.x+o;break;case"up":s.y=s.y-o;break;case"down":s.y=s.y+o;break;case"rotate":s.rotate=s.rotate+o;break}return s},l)},I0={mixout(){return{parse:{transform:c=>z3(c)}}},hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-transform");return s&&(c.transform=z3(s)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:s,transform:a,containerWidth:e,iconWidth:n}=l,o={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),r="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(i," ").concat(f," ").concat(r)},p={transform:"translate(".concat(n/2*-1," -256)")},L={outer:o,inner:m,path:p};return{tag:"g",attributes:t({},L.outer),children:[{tag:"g",attributes:t({},L.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:t(t({},s.icon.attributes),L.path)}]}]}}}},W2={x:0,y:0,width:"100%",height:"100%"};function m3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function O0(c){return c.tag==="g"?c.children:[c]}var U0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-mask"),a=s?P2(s.split(" ").map(e=>e.trim())):m1();return a.prefix||(a.prefix=G()),c.mask=a,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:s,attributes:a,main:e,mask:n,maskId:o,transform:i}=l,{width:f,icon:r}=e,{width:m,icon:p}=n,L=R4({transform:i,containerWidth:m,iconWidth:f}),N={tag:"rect",attributes:d(t({},W2),{fill:"white"})},O=r.children?{children:r.children.map(m3)}:{},V={tag:"g",attributes:t({},L.inner),children:[m3(t({tag:r.tag,attributes:t(t({},r.attributes),L.path)},O))]},A={tag:"g",attributes:t({},L.outer),children:[V]},E="mask-".concat(o||d2()),b="clip-".concat(o||d2()),v={tag:"mask",attributes:d(t({},W2),{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,A]},Z={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:O0(p)},v]};return s.push(Z,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(E,")")},W2)}),{children:s,attributes:a}}}},q0={provides(c){let l=!1;W.matchMedia&&(l=W.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let s=[],a={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:d(t({},a),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=d(t({},e),{attributeName:"opacity"}),o={tag:"circle",attributes:d(t({},a),{cx:"256",cy:"364",r:"28"}),children:[]};return l||o.children.push({tag:"animate",attributes:d(t({},e),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(t({},n),{values:"1;0;1;1;0;1;"})}),s.push(o),s.push({tag:"path",attributes:d(t({},a),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:d(t({},n),{values:"1;0;0;0;0;1;"})}]}),l||s.push({tag:"path",attributes:d(t({},a),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(t({},n),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},_0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-symbol"),a=s===null?!1:s===""?!0:s;return c.symbol=a,c}}}},W0=[U4,k0,y0,A0,v0,H0,R0,I0,U0,q0,_0];c0(W0,{mixoutsTo:y});var r6=y.noAuto,G3=y.config,z6=y.library,j3=y.dom,V3=y.parse,m6=y.findIconDefinition,L6=y.toHtml,X3=y.icon,M6=y.layer,G0=y.text,j0=y.counter;var V0=["*"],X0=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},Y0=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},$0=c=>{let l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(s=>l[s]?s:null).filter(s=>s)},C1=new WeakSet,Y3="fa-auto-css";function K0(c,l){if(!l.autoAddCss||C1.has(c))return;if(c.getElementById(Y3)!=null){l.autoAddCss=!1,C1.add(c);return}let s=c.createElement("style");s.setAttribute("type","text/css"),s.setAttribute("id",Y3),s.innerHTML=j3.css();let a=c.head.childNodes,e=null;for(let n=a.length-1;n>-1;n--){let o=a[n],i=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=o)}c.head.insertBefore(s,e),l.autoAddCss=!1,C1.add(c)}var Q0=c=>c.prefix!==void 0&&c.iconName!==void 0,J0=(c,l)=>Q0(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:l,iconName:c},Z0=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(s){G3.autoAddCss=s,this._autoAddCss=s}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275prov=z2({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),c6=(()=>{class c{constructor(){this.definitions={}}addIcons(...s){for(let a of s){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let e of a.icon[2])typeof e=="string"&&(this.definitions[a.prefix][e]=a)}}addIconPacks(...s){for(let a of s){let e=Object.keys(a).map(n=>a[n]);this.addIcons(...e)}}getIconDefinition(s,a){return s in this.definitions&&a in this.definitions[s]?this.definitions[s][a]:null}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275prov=z2({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),l6=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(s){if("size"in s)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275dir=g1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[g2]})}}return c})(),s6=(()=>{class c{constructor(s,a){this.renderer=s,this.elementRef=a}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(s){"size"in s&&(s.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${s.size.currentValue}`),s.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${s.size.previousValue}`))}static{this.\u0275fac=function(a){return new(a||c)(U(k1),U(S1))}}static{this.\u0275cmp=T({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[g2,P],ngContentSelectors:V0,decls:1,vars:0,template:function(a,e){a&1&&(B1(),E1(0))},encapsulation:2})}}return c})(),D2=(()=>{class c{constructor(s,a,e,n,o){this.sanitizer=s,this.config=a,this.iconLibrary=e,this.stackItem=n,this.document=l2(R1),o!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(s){if(this.icon==null&&this.config.fallbackIcon==null){Y0();return}if(s){let a=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(a!=null){let e=this.buildParams();K0(this.document,this.config);let n=X3(a,e);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(s){let a=J0(s,this.config.defaultPrefix);if("icon"in a)return a;let e=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return e??(X0(a),null)}buildParams(){let s={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},a=typeof this.transform=="string"?V3.transform(this.transform):this.transform;return{title:this.title,transform:a,classes:$0(s),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}static{this.\u0275fac=function(a){return new(a||c)(U(U1),U(Z0),U(c6),U(l6,8),U(s6,8))}}static{this.\u0275cmp=T({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(a,e){a&2&&(D1("innerHTML",e.renderedIconHTML,w1),A1("title",e.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[g2,P],decls:0,vars:0,template:function(a,e){},encapsulation:2})}}return c})();var B2=(()=>{class c{static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275mod=x1({type:c})}static{this.\u0275inj=h1({})}}return c})();var T6={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]};var P6={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]};var F6={prefix:"fas",iconName:"comment",icon:[512,512,[128489,61669],"f075","M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"]};var E2={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]};function a6(c,l){if(c&1&&(M(0,"div",2),S(1,"img",6),M(2,"div",7)(3,"span"),x(4),h(),x(5),h(),M(6,"div",8),S(7,"app-dropdown",9),h()()),c&2){let s=e2();g(4),n2(s.suggestionsCount),g(),H1(" ",s.title," "),g(2),X("sortOptions",s.dropDownOptions)("sortBy",s.dropDownOptions[0])}}function e6(c,l){if(c&1&&(M(0,"div")(1,"a",10),S(2,"img",11),M(3,"span"),x(4,"Go Back"),h()(),M(5,"h1",12),x(6),h()()),c&2){let s=e2();g(6),n2(s.title)}}var K3=class c{title="";isSuggestionPage=!0;suggestionsCount=6;faPlus=E2;dropDownOptions=["Most Upvotes","Least Upvotes","Most Comments","Least Comments"];static \u0275fac=function(s){return new(s||c)};static \u0275cmp=T({type:c,selectors:[["app-toolbar"]],inputs:{title:"title",isSuggestionPage:"isSuggestionPage"},standalone:!0,features:[P],decls:11,vars:2,consts:[[1,"toolbar","bg-dark","p-4","md:rounded-xl","text-light"],[1,"flex","justify-between","items-center"],[1,"flex","items-center"],[1,"bg-purple","px-6","py-3","rounded-xl","font-bold","flex","items-center","transition","ease-in-out","hover:bg-purple-500"],[1,"me-2",3,"icon"],[1,"sr-only"],["src","./assets/suggestions/icon-suggestions.svg","alt","bulb",1,"hidden","md:block","me-4"],[1,"hidden","md:block","font-bold"],[1,"md:ms-9"],[3,"sortOptions","sortBy"],["routerLink","/suggestions",1,"text-sm","flex","items-center","gap-3","cursor-pointer","transition","hover:font-bold","hover:underline"],["loading","lazy","src","./assets/shared/icon-arrow-left.svg","alt","arrow left"],[1,"text-2xl","font-bold"]],template:function(s,a){s&1&&(M(0,"div",0)(1,"div",1),s2(2,a6,8,4,"div",2)(3,e6,7,1,"div"),M(4,"div")(5,"button",3),S(6,"fa-icon",4),M(7,"span",5),x(8,"Add Feedback"),h(),M(9,"span"),x(10,"Add Feedback"),h()()()()()),s&2&&(g(2),a2(a.isSuggestionPage?2:3),g(4),X("icon",a.faPlus))},dependencies:[b2,B2,D2,q1]})};var Q3=class c{api="api/feedBacks";_http=l2(O1);feedBacks=y1([]);getFeedBacks(){return this._http.get(this.api)}getAllFeedBacks(){return u1(this,null,function*(){let l=yield this._http.get(this.api);return yield d1(l)})}static \u0275fac=function(s){return new(s||c)};static \u0275prov=z2({token:c,factory:c.\u0275fac,providedIn:"root"})};var J3=class c{plusIcon=E2;static \u0275fac=function(s){return new(s||c)};static \u0275cmp=T({type:c,selectors:[["app-empty"]],standalone:!0,features:[P],decls:15,vars:1,consts:[[1,"bg-white","rounded-lg","shadow-md","mx-6","md:mx-0","p-6","my-5","h-screen","grid","place-items-center","text-center"],["src","./assets/suggestions/illustration-empty.svg","alt","Man with magnifying glass",1,"mx-auto","mb-12"],[1,"font-bold","text-2xl","mb-4"],[1,"mb-12"],[1,"text-light","mx-auto","bg-purple","px-6","py-3","rounded-xl","font-bold","flex","items-center","hover:bg-purple-500"],[1,"me-2",3,"icon"],[1,"sr-only"]],template:function(s,a){s&1&&(M(0,"div",0)(1,"div"),S(2,"img",1),M(3,"h2",2),x(4,"There is no feedback yet."),h(),M(5,"p",3),x(6," Got a suggestion? Found a bug that needs to be squashed? "),S(7,"br"),x(8," We love hearing about new ideas to improve our app. "),h(),M(9,"button",4),S(10,"fa-icon",5),M(11,"span",6),x(12,"Add Feedback"),h(),M(13,"span"),x(14,"Add Feedback"),h()()()()),s&2&&(g(10),X("icon",a.plusIcon))},dependencies:[B2,D2]})};function n6(c,l){c&1&&(M(0,"div",0)(1,"div")(2,"div",1)(3,"span",2),x(4,"Loading..."),h()()()())}var Z3=class c{_loadingService=l2(_1);isLoading=this._loadingService.isLoading;static \u0275fac=function(s){return new(s||c)};static \u0275cmp=T({type:c,selectors:[["app-loading"]],standalone:!0,features:[P],decls:1,vars:1,consts:[[1,"p-6","my-5","h-screen","grid","place-items-center","text-center"],["role","status",1,"inline-block","h-10","w-10","animate-spin","rounded-full","border-4","border-solid","border-current","border-e-transparent","align-[-0.125em]","text-surface","motion-reduce:animate-[spin_1.5s_linear_infinite]"],[1,"!absolute","!-m-px","!h-px","!w-px","!overflow-hidden","!whitespace-nowrap","!border-0","!p-0","![clip:rect(0,0,0,0)]"]],template:function(s,a){s&1&&s2(0,n6,5,0,"div",0),s&2&&a2(a.isLoading()?0:-1)}})};export{D2 as a,B2 as b,T6 as c,P6 as d,F6 as e,E2 as f,K3 as g,Q3 as h,J3 as i,Z3 as j};
