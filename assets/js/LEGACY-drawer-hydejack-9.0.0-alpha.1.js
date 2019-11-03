/*!
 *  __  __                __                                     __
 * /\ \/\ \              /\ \             __                    /\ \
 * \ \ \_\ \   __  __    \_\ \      __   /\_\      __       ___ \ \ \/'\
 *  \ \  _  \ /\ \/\ \   /'_` \   /'__`\ \/\ \   /'__`\    /'___\\ \ , <
 *   \ \ \ \ \\ \ \_\ \ /\ \L\ \ /\  __/  \ \ \ /\ \L\.\_ /\ \__/ \ \ \\`\
 *    \ \_\ \_\\/`____ \\ \___,_\\ \____\ _\ \ \\ \__/.\_\\ \____\ \ \_\ \_\
 *     \/_/\/_/ `/___/> \\/__,_ / \/____//\ \_\ \\/__/\/_/ \/____/  \/_/\/_/
 *                 /\___/                \ \____/
 *                 \/__/                  \/___/
 *
 * Powered by Hydejack v9.0.0-alpha.1 <https://hydejack.com/>
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{287:function(t,e,n){"use strict";n.r(e);var r=n(337),i=n(288),o=n(136),a=n(336),c=n(359),u=n(59),s=n(338),l=n(292),p=n(339),h=n(289),f=n(10),b=n(7),d=n(303),v=n(103),y=n(102),m={leading:!0,trailing:!1};v.a;function g(t,e,n){return void 0===e&&(e=d.a),void 0===n&&(n=m),function(r){return r.lift(new O(t,e,n.leading,n.trailing))}}var O=function(){function t(t,e,n,r){this.duration=t,this.scheduler=e,this.leading=n,this.trailing=r}return t.prototype.call=function(t,e){return e.subscribe(new w(t,this.duration,this.scheduler,this.leading,this.trailing))},t}(),w=function(t){function e(e,n,r,i,o){var a=t.call(this,e)||this;return a.duration=n,a.scheduler=r,a.leading=i,a.trailing=o,a._hasTrailingValue=!1,a._trailingValue=null,a}return f.a(e,t),e.prototype._next=function(t){this.throttled?this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(j,this.duration,{subscriber:this})),this.leading?this.destination.next(t):this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0))},e.prototype._complete=function(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()},e.prototype.clearThrottle=function(){var t=this.throttled;t&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),t.unsubscribe(),this.remove(t),this.throttled=null)},e}(b.a);function j(t){t.subscriber.clearThrottle()}var S,k=n(13);function x(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function E(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function C(t,e,n,r,i,o,a){try{var c=t[o](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,i)}(S=regeneratorRuntime.mark((function t(){var e,f,b,d,v,y,m,O,w,j,S,C,_,T,I,A,P,R,$,M,X,V,z,D,B,W,N,L,U,F;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C=function(){var t=document.getElementById("_swipe");t&&t.parentNode.removeChild(t)},S=function(){var t=document.getElementById("_hrefSwipeSVG");if(t){var e=document.createElement("img");e.id="_swipe",e.src=t.href,e.alt="Swipe image",e.addEventListener("click",(function(){return window._drawer.close()})),document.getElementById("_sidebar").appendChild(e)}},j=function(t,e){return e>=f?[0,t]:k.h&&!navigator.standalone?[35,150]:[0,150]},t.next=5,Promise.all([].concat(E("customElements"in window?[]:[Promise.all([n.e(13),n.e(15)]).then(n.bind(null,349)).then((function(){return Promise.all([n.e(11),n.e(8)]).then(n.bind(null,350))}))]),E("ResizeObserver"in window?[]:[n.e(7).then(n.bind(null,355))])));case 5:return t.next=7,k.j;case 7:return e=1,f=2,b=3,d=document.body||document.documentElement,v=function(){return parseFloat(getComputedStyle(d).fontSize)},y=function(){return window.innerWidth||d.clientWidth},m=function(){return 21*v()},O=function(){return d.clientWidth/2-28*v()},w=function(t){return function(e){return t.pipe(Object(a.a)((function(t){return t?e:r.a})))}},_=function(){return window.matchMedia("(min-width: 1666px)").matches?b:window.matchMedia("(min-width: 64em)").matches?f:e},T=document.getElementsByTagName("hy-drawer")[0],I=document.getElementById("_sidebar"),A=I.querySelector(".sidebar-sticky"),k.i&&T.setAttribute("threshold",0),k.g||T.setAttribute("mouseevents",""),P=k.d?[new CSSTransformValue([new CSSTranslate(CSS.px(0),CSS.px(0))]),CSS.number(1)]:[null,null],R=x(P,2),$=R[0],M=R[1],X=function(t,e,n){var r=n*t,i=e>=f?1:1-t;k.d?($[0].x.value=r,M.value=i,I.attributeStyleMap.set("transform",$),A.attributeStyleMap.set("opacity",M)):(I.style.transform="translateX(".concat(r,"px)"),A.style.opacity=i)},V=new Promise((function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;getComputedStyle(T).getPropertyValue("--hy-drawer-width")?e():r>3?n():setTimeout((function(){return t(e,n,r+1)}),300)})),t.next=33,V;case 33:return z=Object(i.a)(window,"resize").pipe(Object(c.a)({}),Object(u.a)(_)),D=z.pipe(Object(u.a)((function(t){switch(t){case b:return O();case f:return m();case e:return.5*v()}}))),B=D.pipe(Object(u.a)((function(t){return y()/2-t/2}))),W=Object(o.a)(B.pipe(Object(u.a)((function(){return void 0!==T.opacity?1-T.opacity:L?0:1}))),Object(i.a)(T,"hy-drawer-move").pipe(Object(u.a)((function(t){return 1-t.detail.opacity})))),T.addEventListener("hy-drawer-prepare",(function(){I.style.willChange="transform",A.style.willChange="opacity"})),T.addEventListener("hy-drawer-transitioned",(function(){I.style.willChange="",A.style.willChange=""})),N=Object(k.c)(),L=T.classList.contains("cover")&&N<=0,U=Object(i.a)(T,"hy-drawer-transitioned").pipe(Object(u.a)((function(t){return t.detail})),Object(s.a)(),Object(l.a)((function(t){t||C()})),Object(c.a)(L)),F=L?null:T.getBoundingClientRect().height,T.addEventListener("hy-drawer-init",(function(){T.classList.add("loaded"),S(),F&&N>=F&&window.scrollTo(0,N-F)}),{once:!0}),t.next=46,Promise.resolve().then(n.bind(null,333));case 46:window._drawer=T,W.pipe(Object(p.a)(z,B),Object(l.a)((function(t){return X.apply(void 0,E(t))}))).subscribe(),D.pipe(Object(p.a)(z),Object(u.a)((function(t){return j.apply(void 0,E(t))})),Object(l.a)((function(t){T.range=t}))).subscribe(),Object(i.a)(document,"wheel",{passive:!1}).pipe(w(U),Object(h.a)((function(t){return t.deltaY>0})),Object(l.a)((function(t){T.translateX>0&&t.preventDefault()})),g(500),Object(l.a)((function(){return T.close()}))).subscribe();case 50:case"end":return t.stop()}}),t)})),function(){var t=this,e=arguments;return new Promise((function(n,r){var i=S.apply(t,e);function o(t){C(i,n,r,o,a,"next",t)}function a(t){C(i,n,r,o,a,"throw",t)}o(void 0)}))})()},333:function(t,e,n){"use strict";n.r(e);var r=n(307),i=n(294),o=new WeakMap,a=Object(i.d)((function(t){return function(e){if(!(e instanceof i.a)||e instanceof i.b||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");var n=e.committer,r=n.element;o.has(e)||(r.className=n.strings.join(" "));var a=r.classList,c=o.get(e);for(var u in c)u in t||a.remove(u);for(var s in t){var l=t[s];if(!c||l!==c[s])a[l?"add":"remove"](s)}o.set(e,t)}})),c=new WeakMap,u=Object(i.d)((function(t){return function(e){if(!(e instanceof i.a)||e instanceof i.b||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");var n=e.committer,r=n.element.style;c.has(e)||(r.cssText=n.strings.join(" "));var o=c.get(e);for(var a in o)a in t||(-1===a.indexOf("-")?r[a]=null:r.removeProperty(a));for(var u in t)-1===u.indexOf("-")?r[u]=t[u]:r.setProperty(u,t[u]);c.set(e,t)}})),s=n(305),l=n(340),p=n(10),h=n(104),f=n(60),b=n(103),d=n(102),v=n(105),y={};function m(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=null,r=null;return Object(h.a)(t[t.length-1])&&(r=t.pop()),"function"==typeof t[t.length-1]&&(n=t.pop()),1===t.length&&Object(f.a)(t[0])&&(t=t[0]),Object(v.a)(t,r).lift(new g(n))}var g=function(){function t(t){this.resultSelector=t}return t.prototype.call=function(t,e){return e.subscribe(new O(t,this.resultSelector))},t}(),O=function(t){function e(e,n){var r=t.call(this,e)||this;return r.resultSelector=n,r.active=0,r.values=[],r.observables=[],r}return p.a(e,t),e.prototype._next=function(t){this.values.push(y),this.observables.push(t)},e.prototype._complete=function(){var t=this.observables,e=t.length;if(0===e)this.destination.complete();else{this.active=e,this.toRespond=e;for(var n=0;n<e;n++){var r=t[n];this.add(Object(d.a)(this,r,r,n))}}},e.prototype.notifyComplete=function(t){0==(this.active-=1)&&this.destination.complete()},e.prototype.notifyNext=function(t,e,n,r,i){var o=this.values,a=o[n],c=this.toRespond?a===y?--this.toRespond:this.toRespond:0;o[n]=e,0===c&&(this.resultSelector?this._tryResultSelector(o):this.destination.next(o.slice()))},e.prototype._tryResultSelector=function(t){var e;try{e=this.resultSelector.apply(this,t)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(b.a),w=n(136),j=n(288),S=n(337),k=n(342),x=n(59),E=n(356),C=n(339),_=n(292);var T=function(){function t(t){this.notifier=t}return t.prototype.call=function(t,e){var n=new I(t),r=e.subscribe(n);return r.add(Object(d.a)(n,this.notifier)),r},t}(),I=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.hasValue=!1,e}return p.a(e,t),e.prototype._next=function(t){this.value=t,this.hasValue=!0},e.prototype.notifyNext=function(t,e,n,r,i){this.emitValue()},e.prototype.notifyComplete=function(){this.emitValue()},e.prototype.emitValue=function(){this.hasValue&&(this.hasValue=!1,this.destination.next(this.value))},e}(b.a),A=n(303);var P=function(){return function(t,e){this.value=t,this.timestamp=e}}(),R=n(290),$=n(289),M=n(359),X=n(336),V=n(341),z=n(7);var D=function(){function t(t){this.total=t}return t.prototype.call=function(t,e){return e.subscribe(new B(t,this.total))},t}(),B=function(t){function e(e,n){var r=t.call(this,e)||this;return r.total=n,r.count=0,r}return p.a(e,t),e.prototype._next=function(t){++this.count>this.total&&this.destination.next(t)},e}(z.a),W=n(9);function N(t,e,n,r,i){return W.a.create((function(o){var a,c=requestAnimationFrame((function u(s){var l=s-(a=a||s);l<r?(o.next(t(l,e,n,r,i)),c=requestAnimationFrame(u)):(o.next(t(r,e,n,r,i)),c=requestAnimationFrame((function(){return o.complete()})))}));return function(){c&&cancelAnimationFrame(c)}}))}var L=200,U=.15,F=n(308);function Y(t){return G(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||J()}function q(t,e){return G(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(t,e)||J()}function J(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function G(t){if(Array.isArray(t))return t}function H(t,e,n,r){return n*Math.sin(t/r*(Math.PI/2))+e}function K(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return function(e){return 0===n.length?e.pipe(Object(C.a)(t),Object($.a)((function(t){return q(t,2)[1]})),Object(x.a)((function(t){return q(t,1)[0]}))):e.pipe(C.a.apply(void 0,[t].concat(n)),Object($.a)((function(t){return Y(t).slice(1).every((function(t){return t}))})),Object(x.a)((function(t){return q(t,1)[0]})))}}function Q(t){return("ResizeObserver"in window?function(t){return W.a.create((function(e){var n=new window.ResizeObserver((function(t){return t.forEach((function(t){return e.next(t)}))}));return n.observe(t),function(){n.unobserve(t)}}))}(t):Object(F.a)({contentRect:{width:t.clientWidth}})).pipe(Object(x.a)((function(t){return t.contentRect.width})))}var Z={fromAttribute:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.replace(/[\[\]]/g,"").split(",").map(Number)},toAttribute:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.join(",")}};var tt=n(291),et=n(362);var nt=function(){function t(t){this.notifier=t}return t.prototype.call=function(t,e){return e.subscribe(new rt(t,this.notifier,e))},t}(),rt=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.notifier=n,i.source=r,i.sourceIsBeingSubscribedTo=!0,i}return p.a(e,t),e.prototype.notifyNext=function(t,e,n,r,i){this.sourceIsBeingSubscribedTo=!0,this.source.subscribe(this)},e.prototype.notifyComplete=function(e){if(!1===this.sourceIsBeingSubscribedTo)return t.prototype.complete.call(this)},e.prototype.complete=function(){if(this.sourceIsBeingSubscribedTo=!1,!this.isStopped){if(this.retries||this.subscribeToRetries(),!this.retriesSubscription||this.retriesSubscription.closed)return t.prototype.complete.call(this);this._unsubscribeAndRecycle(),this.notifications.next()}},e.prototype._unsubscribe=function(){var t=this.notifications,e=this.retriesSubscription;t&&(t.unsubscribe(),this.notifications=null),e&&(e.unsubscribe(),this.retriesSubscription=null),this.retries=null},e.prototype._unsubscribeAndRecycle=function(){var e=this._unsubscribe;return this._unsubscribe=null,t.prototype._unsubscribeAndRecycle.call(this),this._unsubscribe=e,this},e.prototype.subscribeToRetries=function(){var e;this.notifications=new s.a;try{e=(0,this.notifier)(this.notifications)}catch(e){return t.prototype.complete.call(this)}this.retries=e,this.retriesSubscription=Object(d.a)(this,e)},e}(b.a);var it=function(){function t(t){this.predicate=t}return t.prototype.call=function(t,e){return e.subscribe(new ot(t,this.predicate))},t}(),ot=function(t){function e(e,n){var r=t.call(this,e)||this;return r.predicate=n,r.skipping=!0,r.index=0,r}return p.a(e,t),e.prototype._next=function(t){var e=this.destination;this.skipping&&this.tryCallPredicate(t),this.skipping||e.next(t)},e.prototype.tryCallPredicate=function(t){try{var e=this.predicate(t,this.index++);this.skipping=Boolean(e)}catch(t){this.destination.error(t)}},e}(z.a);function at(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ct(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var ut=Math.abs.bind(Math),st=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,(n=[{key:"getStartObservable",value:function(){return m(this.$.mouseEvents).pipe(Object(X.a)((function(t){var e=at(t,1)[0],n=Object(j.a)(document,"touchstart",{passive:!0}).pipe(Object($.a)((function(t){return 1===t.touches.length})),Object(x.a)((function(t){return t.touches[0]}))),r=e?Object(j.a)(document,"mousedown").pipe(Object(x.a)((function(t){return t.event=t,t}))):S.a;return Object(w.a)(n,r)})))}},{key:"getMoveObservable",value:function(t,e){return m(this.$.mouseEvents,this.$.preventDefault).pipe(Object(X.a)((function(n){var r,i=at(n,2),o=i[0],a=i[1],c=Object(j.a)(document,"touchmove",{passive:!a}).pipe(Object(x.a)((function(t){return t.touches[0].event=t,t.touches[0]}))),u=o?Object(j.a)(document,"mousemove",{passive:!a}).pipe((r=Object(w.a)(t.pipe(Object(tt.a)(!0)),e.pipe(Object(tt.a)(!1))),function(t){return r.pipe(Object(X.a)((function(e){return e?t:S.a})))}),Object(x.a)((function(t){return t.event=t,t}))):S.a;return Object(w.a)(c,u)})))}},{key:"getEndObservable",value:function(){return m(this.$.mouseEvents).pipe(Object(X.a)((function(t){var e=at(t,1)[0],n=Object(j.a)(document,"touchend",{passive:!0}).pipe(Object($.a)((function(t){return 0===t.touches.length})),Object(x.a)((function(t){return t.changedTouches[0]}))),r=e?Object(j.a)(document,"mouseup",{passive:!0}):S.a;return Object(w.a)(n,r)})))}},{key:"getIsSlidingObservable",value:function(t,e,n){return this.getIsSlidingObservableInner(t,e).pipe(Object(et.a)(1),Object(M.a)(void 0),(r=function(){return n},function(t){return t.lift(new nt(r))}));var r}},{key:"getIsSlidingObservableInner",value:function(t,e){var n,r=this;return this.threshold?t.pipe(Object(C.a)(e),(n=function(t){var e=at(t,2),n=e[0],i=n.clientX,o=n.clientY,a=e[1],c=a.clientX,u=a.clientY;return ut(u-o)<r.threshold&&ut(c-i)<r.threshold},function(t){return t.lift(new it(n))}),Object(x.a)((function(t){var e=at(t,2),n=e[0],r=n.clientX,i=n.clientY,o=e[1],a=o.clientX,c=o.clientY;return ut(a-r)>=ut(c-i)}))):t.pipe(Object(C.a)(e),Object(x.a)((function(t){var e=at(t,2),n=e[0],i=n.clientX,o=n.clientY,a=n.event,c=e[1],u=c.clientX,s=c.clientY,l=ut(u-i)>=ut(s-o);return r.noScroll&&l&&a.preventDefault(),l})))}}])&&ct(e.prototype,n),r&&ct(e,r),t}();function lt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function pt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var ht=Math.min.bind(Math),ft=Math.max.bind(Math),bt=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,(n=[{key:"calcIsInRange",value:function(t,e){var n=t.clientX;switch(this.side){case"left":var r=lt(this.range,2),i=r[0],o=r[1];return n>i&&(e||n<o);case"right":var a=window.innerWidth-this.range[0],c=window.innerWidth-this.range[1];return n<a&&(e||n>c);default:throw Error()}}},{key:"calcIsSwipe",value:function(t,e,n,r,i){var o=t.clientX;return e.clientX!==o||n>0&&n<r}},{key:"calcWillOpen",value:function(t,e,n,r,i){switch(this.side){case"left":return i>.15||!(i<-.15)&&n>=r/2;case"right":return-i>.15||!(-i<-.15)&&n<=-r/2;default:throw Error()}}},{key:"calcTranslateX",value:function(t,e,n,r){var i=t.clientX,o=e.clientX;switch(this.side){case"left":return ft(0,ht(r,n+(i-o)));case"right":return ht(0,ft(-r,n+(i-o)));default:throw Error()}}}])&&pt(e.prototype,n),r&&pt(e,r),t}();function dt(t){return(dt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function vt(t,e){return!e||"object"!==dt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function yt(t){return(yt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function mt(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&gt(t,e)}function gt(t,e){return(gt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Ot(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function wt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function jt(t,e,n){return e&&wt(t.prototype,e),n&&wt(t,n),t}var St=function(){function t(){Ot(this,t)}return jt(t,[{key:"updateDOM",value:function(t,e){var n=t/e*("left"===this.side?1:-1)||0;this.translateX=t,this.opacity=n,this.updater.updateDOM(t,n)}}]),t}(),kt=function(){function t(e){Ot(this,t),this.parent=e}return jt(t,null,[{key:"getUpdaterForPlatform",value:function(t){return"attributeStyleMap"in Element.prototype&&"CSS"in window&&"number"in CSS?new Et(t):new xt(t)}}]),jt(t,[{key:"contentEl",get:function(){return this.parent.contentEl}},{key:"scrimEl",get:function(){return this.parent.scrimEl}}]),t}(),xt=function(t){function e(t){return Ot(this,e),vt(this,yt(e).call(this,t))}return mt(e,t),jt(e,[{key:"updateDOM",value:function(t,e){this.contentEl.style.transform="translate(".concat(t,"px, 0px)"),this.scrimEl.style.opacity="".concat(e)}}]),e}(kt),Et=function(t){function e(t){var n;return Ot(this,e),(n=vt(this,yt(e).call(this,t))).tvalue=new CSSTransformValue([new CSSTranslate(CSS.px(0),CSS.px(0))]),n.ovalue=CSS.number(1),n}return mt(e,t),jt(e,[{key:"updateDOM",value:function(t,e){this.tvalue[0].x.value=t,this.ovalue.value=e,this.contentEl.attributeStyleMap.set("transform",this.tvalue),this.scrimEl.attributeStyleMap.set("opacity",this.ovalue)}}]),e}(kt);function Ct(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n  @media screen {\n    :host {\n      touch-action: pan-x;\n    }\n\n    .span-screen {\n      position: fixed;\n      top: 0;\n      left: 0;\n      height: 100vh;\n      width: 100vw;\n    }\n\n    .span-height {\n      position: fixed;\n      top: 0;\n      height: 100vh;\n    }\n\n    .peek {\n      left: 0;\n      width: var(--hy-drawer-peek-width, 0px);\n      visibility: hidden;\n      z-index: calc(var(--hy-drawer-z-index, 100) - 1);\n    }\n\n    .scrim {\n      opacity: 0;\n      pointer-events: none;\n      background: var(--hy-drawer-scrim-background, rgba(0, 0, 0, 0.5));\n      z-index: var(--hy-drawer-z-index, 100);\n      -webkit-tap-highlight-color: transparent;\n    }\n\n    .range {\n      position: fixed;\n      top: 0;\n      height: 100vh;\n      z-index: calc(var(--hy-drawer-z-index, 100) + 1);\n    }\n\n    .grabbing-screen {\n      cursor: grabbing;\n      z-index: calc(var(--hy-drawer-z-index, 100) + 2);\n    }\n\n    .content {\n      width: var(--hy-drawer-width, 300px);\n      background: var(--hy-drawer-background, inherit);\n      box-shadow: var(--hy-drawer-box-shadow, 0 0 15px rgba(0, 0, 0, 0.25));\n      z-index: calc(var(--hy-drawer-z-index, 100) + 3);\n      contain: strict;\n    }\n\n    .content.left {\n      left:  calc(-1 * var(--hy-drawer-width, 300px) + var(--hy-drawer-peek-width, 0px));\n    }\n\n    .content.right {\n      right:  calc(-1 * var(--hy-drawer-width, 300px) + var(--hy-drawer-peek-width, 0px));\n    }\n\n    .content > .overflow {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      overflow-x: hidden;\n      overflow-y: auto;\n      will-change: scroll-position;\n      -webkit-overflow-scrolling: touch;\n    }\n\n    .grab {\n      cursor: move;\n      cursor: grab;\n    }\n\n    .grabbing {\n      cursor: grabbing;\n    }\n  }\n\n  @media print {\n    .scrim {\n      display: none !important;\n    }\n\n    .content {\n      transform: none !important;\n    }\n  }\n"]);return Ct=function(){return t},t}var _t=Object(r.b)(Ct());function Tt(){var t=At(['<div class="grabbing-screen span-screen"></div>']);return Tt=function(){return t},t}function It(){var t=At(['\n      <div class="peek span-height"></div>\n      <div\n        class="scrim span-screen"\n        style=',">\n      </div>\n      ","\n      <div\n        class=","\n        style=",'\n      >\n        <div class="overflow">\n          <slot></slot>\n        </div>\n      </div>\n    ']);return It=function(){return t},t}function At(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function Pt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Rt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function $t(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Mt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Xt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Vt(t,e,n){return e&&Xt(t.prototype,e),n&&Xt(t,n),t}function zt(t,e){return!e||"object"!==Ut(e)&&"function"!=typeof e?Dt(t):e}function Dt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Bt(t,e,n){return(Bt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Wt(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function Wt(t){return(Wt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Nt(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Lt(t,e)}function Lt(t,e){return(Lt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Ut(t){return(Ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"HyDrawer",(function(){return Jt}));var Ft,Yt=function(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"==typeof Reflect?"undefined":Ut(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},qt=function(t){function e(){var t;return Mt(this,e),(t=zt(this,Wt(e).apply(this,arguments))).$connected=new s.a,t}return Nt(e,t),Vt(e,[{key:"connectedCallback",value:function(){Bt(Wt(e.prototype),"connectedCallback",this).call(this),this.$connected.next(!0)}},{key:"disconnectedCallback",value:function(){Bt(Wt(e.prototype),"disconnectedCallback",this).call(this),this.$connected.next(!1)}},{key:"firstUpdated",value:function(){this.firstUpdate=!0}},{key:"updated",value:function(t){if(!this.firstUpdate){var e=!0,n=!1,r=void 0;try{for(var i,o=t.keys()[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var a=i.value;a in this.$&&this.$[a].next(this[a])}}catch(t){n=!0,r=t}finally{try{e||null==o.return||o.return()}finally{if(n)throw r}}}this.firstUpdate=!1}}]),e}(r.a),Jt=function(t){function e(){var t;return Mt(this,e),(t=zt(this,Wt(e).apply(this,arguments))).el=Dt(t),t.opened=!1,t.side="left",t.persistent=!1,t.threshold=10,t.noScroll=!1,t.mouseEvents=!1,t.range=[0,100],t.willChange=!1,t.$={},t.upgrade=function(){var e,n=t.getDrawerWidth(),r=t.$.persistent.pipe(Object(x.a)((function(t){return!t}))),i=t.getStartObservable().pipe(K(r),Object(E.a)()),o={},a=Object(l.a)((function(){return o.translateX$.pipe(Object(x.a)((function(t){return 0!==t})))})),c=i.pipe(Object(C.a)(a),Object(x.a)((function(e){var n;return(n=t).calcIsInRange.apply(n,$t(e))})),Object(_.a)((function(e){e&&(t.willChange=!0,t.fireEvent("prepare"))})),Object(E.a)()),u=t.getEndObservable().pipe(K(r,c),Object(_.a)((function(){t.mouseEvents&&(t.grabbing=!1)})),Object(E.a)()),s=t.getMoveObservable(i,u).pipe(K(r,c),Object(E.a)()),p=t.getIsSlidingObservable(s,i,u).pipe(Object(_.a)((function(e){t.isSliding=e,e&&t.mouseEvents&&(t.grabbing=!0)}))),h=o.translateX$=Object(l.a)((function(){var e=m(t.$.opened,t.$.side,n).pipe(Object(x.a)((function(t){var e=Rt(t,3),n=e[0],r=e[1],i=e[2];return n?i*("left"===r?1:-1):0}))),r=s.pipe(K(p),Object(_.a)((function(){return t.scrimClickable=!1})),Object(_.a)((function(e){var n=e.event;return t.noScroll&&n.preventDefault()})),Object(C.a)(i,o.startTranslateX$,n),Object(x.a)((function(e){var n;return(n=t).calcTranslateX.apply(n,$t(e))})));return Object(w.a)(o.tweenTranslateX$,e,r)})).pipe(Object(E.a)());o.startTranslateX$=h.pipe((e=i,function(t){return t.lift(new T(e))}));var f,b=h.pipe((void 0===f&&(f=A.a),Object(x.a)((function(t){return new P(t,f.now())}))),Object(R.a)(),Object($.a)((function(t){var e=Rt(t,2),n=e[0].timestamp;return e[1].timestamp-n>0})),Object(x.a)((function(t){var e=Rt(t,2),n=e[0],r=n.value,i=n.timestamp,o=e[1];return(o.value-r)/(o.timestamp-i)})),Object(M.a)(0)),d=u.pipe(Object(C.a)(i,h,n,b),Object($.a)((function(e){var n;return(n=t).calcIsSwipe.apply(n,$t(e))})),Object(x.a)((function(e){var n;return(n=t).calcWillOpen.apply(n,$t(e))}))),v=t.animateTo$.pipe(Object(_.a)((function(){t.willChange=!0,t.fireEvent("prepare")})));o.tweenTranslateX$=Object(w.a)(d,v).pipe(Object(C.a)(h,n),Object(X.a)((function(e){var n,r=Rt(e,3),o=r[0],a=r[1],c=r[2],u="left"===t.side?1:-1;return N(H,a,(o?c*u:0)-a,L+c*U).pipe(Object(_.a)({complete:function(){return t.transitioned(o)}}),Object(V.a)(i),Object(V.a)(t.$.side.pipe((n=1,function(t){return t.lift(new D(n))}))),Object(E.a)())}))),h.pipe(Object(C.a)(n),Object(_.a)((function(e){var n;(n=t).updateDOM.apply(n,$t(e));var r=Dt(t),i=r.translateX,o=r.opacity;t.fireEvent("move",{detail:{translateX:i,opacity:o},bubbles:!1})}))).subscribe(),Object(j.a)(t.scrimEl,"click").pipe(Object(_.a)((function(){return t.close()}))).subscribe(),r.pipe(Object(_.a)((function(e){t.scrimEl.style.display=e?"block":"none"}))).subscribe(),t.$.mouseEvents.pipe(Object(X.a)((function(t){return t?i.pipe(Object(C.a)(c)):S.a})),Object($.a)((function(t){var e=Rt(t,2),n=e[0];return e[1]&&null!=n.event})),Object(_.a)((function(t){return Rt(t,1)[0].event.preventDefault()}))).subscribe(),Object(j.a)(window,"hashchange").pipe(Object(_.a)((function(){var e=location.hash===t.hashId;!history.state&&e&&history.replaceState(Pt({},t.histId,{backable:!0}),document.title),e!==t.opened&&t.animateTo$.next(e)}))).subscribe(),t.fireEvent("init",{detail:t.opened})},t.transitioned=function(e){var n=!e;t.opened=t.scrimClickable=e,t.willChange=!1;var r=(history.state&&history.state[t.histId]||{backable:!1}).backable;n&&r&&history.back(),e&&location.hash!==t.hashId&&(location.hash=t.hashId),t.fireEvent("transitioned",{detail:e})},t}return Nt(e,t),Vt(e,[{key:"getDrawerWidth",value:function(){return m(Q(this.contentEl),Q(this.peekEl)).pipe(Object(x.a)((function(t){var e=Rt(t,2);return e[0]-e[1]})),Object(E.a)())}},{key:"consolidateState",value:function(){var t=location.hash===this.hashId;if(history.state&&history.state[this.histId])t!==this.opened&&(this.opened=t);else if(t&&!this.opened){var e=new URL(location.href);e.hash="";var n=Object.assign(history.state||{},Pt({},this.histId,{backable:!1}));history.replaceState(n,document.title,e.href),e.hash=this.hashId,history.pushState(Pt({},this.histId,{backable:!0}),document.title,e.href),this.opened=!0}else if(!t&&this.opened){var r=new URL(location.href),i=Object.assign(history.state||{},Pt({},this.histId,{backable:!1}));history.replaceState(i,document.title,r.href),r.hash=this.hashId,history.pushState(Pt({},this.histId,{backable:!0}),document.title,r.href)}}},{key:"connectedCallback",value:function(){Bt(Wt(e.prototype),"connectedCallback",this).call(this),this.consolidateState(),this.$.opened=new k.a(this.opened),this.$.side=new k.a(this.side),this.$.persistent=new k.a(this.persistent),this.$.preventDefault=new k.a(this.noScroll),this.$.mouseEvents=new k.a(this.mouseEvents),this.scrimClickable=this.opened,this.animateTo$=new s.a,this.updater=kt.getUpdaterForPlatform(this),this.updateComplete.then(this.upgrade)}},{key:"render",value:function(){var t;return Object(r.d)(It(),u({willChange:this.willChange?"opacity":"",pointerEvents:this.scrimClickable?"all":""}),this.mouseEvents&&this.grabbing&&!this.scrimClickable?Object(r.d)(Tt()):null,a((Pt(t={content:!0,"span-height":!0},this.side,!0),Pt(t,"grab",this.mouseEvents),Pt(t,"grabbing",this.mouseEvents&&this.grabbing),t)),u({willChange:this.willChange?"transform":""}))}},{key:"fireEvent",value:function(t,e){this.dispatchEvent(new CustomEvent(t,e)),this.dispatchEvent(new CustomEvent("hy-drawer-".concat(t),e))}},{key:"open",value:function(){this.animateTo$.next(!0)}},{key:"close",value:function(){this.animateTo$.next(!1)}},{key:"toggle",value:function(){this.animateTo$.next(!this.opened)}},{key:"histId",get:function(){return this.id||this.tagName}},{key:"hashId",get:function(){return"#".concat(this.histId,"--opened")}}]),e}((Ft=qt,[st,St,bt].forEach((function(t){Object.getOwnPropertyNames(t.prototype).forEach((function(e){Ft.prototype[e]=t.prototype[e]}))})),Ft));
/**
 * Copyright (c) 2019 Florian Klampfer <https://qwtel.com/>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license
 * @nocompile
 */Jt.styles=_t,Yt([Object(r.f)(".scrim")],Jt.prototype,"scrimEl",void 0),Yt([Object(r.f)(".content")],Jt.prototype,"contentEl",void 0),Yt([Object(r.f)(".peek")],Jt.prototype,"peekEl",void 0),Yt([Object(r.e)({type:Boolean,reflect:!0})],Jt.prototype,"opened",void 0),Yt([Object(r.e)({type:String,reflect:!0})],Jt.prototype,"side",void 0),Yt([Object(r.e)({type:Boolean,reflect:!0})],Jt.prototype,"persistent",void 0),Yt([Object(r.e)({type:Number,reflect:!0})],Jt.prototype,"threshold",void 0),Yt([Object(r.e)({type:Boolean,reflect:!0})],Jt.prototype,"noScroll",void 0),Yt([Object(r.e)({type:Boolean,reflect:!0})],Jt.prototype,"mouseEvents",void 0),Yt([Object(r.e)({reflect:!0,converter:Z,hasChanged:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.length!==e.length||t.some((function(t,n){return t!==e[n]}))}})],Jt.prototype,"range",void 0),Yt([Object(r.e)()],Jt.prototype,"scrimClickable",void 0),Yt([Object(r.e)()],Jt.prototype,"grabbing",void 0),Yt([Object(r.e)()],Jt.prototype,"willChange",void 0),Yt([Object(r.e)()],Jt.prototype,"open",null),Yt([Object(r.e)()],Jt.prototype,"close",null),Yt([Object(r.e)()],Jt.prototype,"toggle",null),Jt=Yt([Object(r.c)("hy-drawer")],Jt)}}]);