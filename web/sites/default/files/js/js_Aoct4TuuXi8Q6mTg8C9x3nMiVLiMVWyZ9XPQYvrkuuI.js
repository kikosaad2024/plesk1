/* ==========================================================
 * bootstrap-alert.js v2.1.1
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;if(!r){r=n.attr("href");r=r&&r.replace(/.*(?=#[^\s]*$)/,"")}i=e(r);t&&t.preventDefault();i.length||(i=n.hasClass("alert")?n:n.parent());i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in");e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()};e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this));typeof t=="string"&&i[t].call(r)})};e.fn.alert.Constructor=n;e(function(){e("body").on("click.alert.data-api",t,n.prototype.close)})}(window.jQuery);;
/*! formstone v1.0.0 [core.js] 2016-03-20 | MIT License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){m.Plugins[a].initialized||(m.Plugins[a].methods._setup.call(document),m.Plugins[a].initialized=!0)}function c(a,b,c,d){var e,f={raw:{}};d=d||{};for(e in d)d.hasOwnProperty(e)&&("classes"===a?(f.raw[d[e]]=b+"-"+d[e],f[d[e]]="."+b+"-"+d[e]):(f.raw[e]=d[e],f[e]=d[e]+"."+b));for(e in c)c.hasOwnProperty(e)&&("classes"===a?(f.raw[e]=c[e].replace(/{ns}/g,b),f[e]=c[e].replace(/{ns}/g,"."+b)):(f.raw[e]=c[e].replace(/.{ns}/g,""),f[e]=c[e].replace(/{ns}/g,b)));return f}function d(){var a,b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"},c=["transition","-webkit-transition"],d={transform:"transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",webkitTransform:"-webkit-transform"},e="transitionend",f="",g="",h=document.createElement("div");for(a in b)if(b.hasOwnProperty(a)&&a in h.style){e=b[a],m.support.transition=!0;break}p.transitionEnd=e+".{ns}";for(a in c)if(c.hasOwnProperty(a)&&c[a]in h.style){f=c[a];break}m.transition=f;for(a in d)if(d.hasOwnProperty(a)&&d[a]in h.style){m.support.transform=!0,g=d[a];break}m.transform=g}function e(){m.windowWidth=m.$window.width(),m.windowHeight=m.$window.height(),q=l.startTimer(q,r,f)}function f(){for(var a in m.ResizeHandlers)m.ResizeHandlers.hasOwnProperty(a)&&m.ResizeHandlers[a].callback.call(window,m.windowWidth,m.windowHeight)}function g(){if(m.support.raf){m.window.requestAnimationFrame(g);for(var a in m.RAFHandlers)m.RAFHandlers.hasOwnProperty(a)&&m.RAFHandlers[a].callback.call(window)}}function h(a,b){return parseInt(a.priority)-parseInt(b.priority)}var i="undefined"!=typeof window?window:this,j=i.document,k=function(){this.Version="1.0.0",this.Plugins={},this.DontConflict=!1,this.Conflicts={fn:{}},this.ResizeHandlers=[],this.RAFHandlers=[],this.window=i,this.$window=a(i),this.document=j,this.$document=a(j),this.$body=null,this.windowWidth=0,this.windowHeight=0,this.fallbackWidth=1024,this.fallbackHeight=768,this.userAgent=window.navigator.userAgent||window.navigator.vendor||window.opera,this.isFirefox=/Firefox/i.test(this.userAgent),this.isChrome=/Chrome/i.test(this.userAgent),this.isSafari=/Safari/i.test(this.userAgent)&&!this.isChrome,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent),this.isIEMobile=/IEMobile/i.test(this.userAgent),this.isFirefoxMobile=this.isFirefox&&this.isMobile,this.transform=null,this.transition=null,this.support={file:!!(window.File&&window.FileList&&window.FileReader),history:!!(window.history&&window.history.pushState&&window.history.replaceState),matchMedia:!(!window.matchMedia&&!window.msMatchMedia),pointer:!!window.PointerEvent,raf:!(!window.requestAnimationFrame||!window.cancelAnimationFrame),touch:!!("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),transition:!1,transform:!1}},l={killEvent:function(a,b){try{a.preventDefault(),a.stopPropagation(),b&&a.stopImmediatePropagation()}catch(c){}},startTimer:function(a,b,c,d){return l.clearTimer(a),d?setInterval(c,b):setTimeout(c,b)},clearTimer:function(a,b){a&&(b?clearInterval(a):clearTimeout(a),a=null)},sortAsc:function(a,b){return parseInt(a,10)-parseInt(b,10)},sortDesc:function(a,b){return parseInt(b,10)-parseInt(a,10)},decodeEntities:function(a){var b=m.document.createElement("textarea");return b.innerHTML=a,b.value},parseQueryString:function(a){for(var b={},c=a.slice(a.indexOf("?")+1).split("&"),d=0;d<c.length;d++){var e=c[d].split("=");b[e[0]]=e[1]}return b}},m=new k,n=a.Deferred(),o={base:"{ns}",element:"{ns}-element"},p={namespace:".{ns}",beforeUnload:"beforeunload.{ns}",blur:"blur.{ns}",change:"change.{ns}",click:"click.{ns}",dblClick:"dblclick.{ns}",drag:"drag.{ns}",dragEnd:"dragend.{ns}",dragEnter:"dragenter.{ns}",dragLeave:"dragleave.{ns}",dragOver:"dragover.{ns}",dragStart:"dragstart.{ns}",drop:"drop.{ns}",error:"error.{ns}",focus:"focus.{ns}",focusIn:"focusin.{ns}",focusOut:"focusout.{ns}",input:"input.{ns}",keyDown:"keydown.{ns}",keyPress:"keypress.{ns}",keyUp:"keyup.{ns}",load:"load.{ns}",mouseDown:"mousedown.{ns}",mouseEnter:"mouseenter.{ns}",mouseLeave:"mouseleave.{ns}",mouseMove:"mousemove.{ns}",mouseOut:"mouseout.{ns}",mouseOver:"mouseover.{ns}",mouseUp:"mouseup.{ns}",panStart:"panstart.{ns}",pan:"pan.{ns}",panEnd:"panend.{ns}",resize:"resize.{ns}",scaleStart:"scalestart.{ns}",scaleEnd:"scaleend.{ns}",scale:"scale.{ns}",scroll:"scroll.{ns}",select:"select.{ns}",swipe:"swipe.{ns}",touchCancel:"touchcancel.{ns}",touchEnd:"touchend.{ns}",touchLeave:"touchleave.{ns}",touchMove:"touchmove.{ns}",touchStart:"touchstart.{ns}"};k.prototype.NoConflict=function(){m.DontConflict=!0;for(var b in m.Plugins)m.Plugins.hasOwnProperty(b)&&(a[b]=m.Conflicts[b],a.fn[b]=m.Conflicts.fn[b])},k.prototype.Plugin=function(d,e){return m.Plugins[d]=function(b,d){function e(c){var e,f,h,i="object"===a.type(c),j=this,k=a();for(c=a.extend(!0,{},d.defaults||{},i?c:{}),f=0,h=j.length;h>f;f++)if(e=j.eq(f),!g(e)){var l="__"+d.guid++,m=d.classes.raw.base+l,n=e.data(b+"-options"),o=a.extend(!0,{$el:e,guid:l,rawGuid:m,dotGuid:"."+m},c,"object"===a.type(n)?n:{});e.addClass(d.classes.raw.element).data(r,o),d.methods._construct.apply(e,[o].concat(Array.prototype.slice.call(arguments,i?1:0))),k=k.add(e)}for(f=0,h=k.length;h>f;f++)e=k.eq(f),d.methods._postConstruct.apply(e,[g(e)]);return j}function f(){d.functions.iterate.apply(this,[d.methods._destruct].concat(Array.prototype.slice.call(arguments,1))),this.removeClass(d.classes.raw.element).removeData(r)}function g(a){return a.data(r)}function i(b){if(this instanceof a){var c=d.methods[b];return"object"!==a.type(b)&&b?c&&0!==b.indexOf("_")?d.functions.iterate.apply(this,[c].concat(Array.prototype.slice.call(arguments,1))):this:e.apply(this,arguments)}}function j(b){var c=d.utilities[b]||d.utilities._initialize||!1;return c?c.apply(window,Array.prototype.slice.call(arguments,"object"===a.type(b)?0:1)):void 0}function k(b){d.defaults=a.extend(!0,d.defaults,b||{})}function n(b){for(var c=this,d=0,e=c.length;e>d;d++){var f=c.eq(d),h=g(f)||{};"undefined"!==a.type(h.$el)&&b.apply(f,[h].concat(Array.prototype.slice.call(arguments,1)))}return c}var q="fs-"+b,r="fs"+b.replace(/(^|\s)([a-z])/g,function(a,b,c){return b+c.toUpperCase()});return d.initialized=!1,d.priority=d.priority||10,d.classes=c("classes",q,o,d.classes),d.events=c("events",b,p,d.events),d.functions=a.extend({getData:g,iterate:n},l,d.functions),d.methods=a.extend(!0,{_setup:a.noop,_construct:a.noop,_postConstruct:a.noop,_destruct:a.noop,_resize:!1,destroy:f},d.methods),d.utilities=a.extend(!0,{_initialize:!1,_delegate:!1,defaults:k},d.utilities),d.widget&&(m.Conflicts.fn[b]=a.fn[b],a.fn[r]=i,m.DontConflict||(a.fn[b]=a.fn[r])),m.Conflicts[b]=a[b],a[r]=d.utilities._delegate||j,m.DontConflict||(a[b]=a[r]),d.namespace=b,d.namespaceClean=r,d.guid=0,d.methods._resize&&(m.ResizeHandlers.push({namespace:b,priority:d.priority,callback:d.methods._resize}),m.ResizeHandlers.sort(h)),d.methods._raf&&(m.RAFHandlers.push({namespace:b,priority:d.priority,callback:d.methods._raf}),m.RAFHandlers.sort(h)),d}(d,e),n.then(function(){b(d)}),m.Plugins[d]};var q=null,r=20;return m.$window.on("resize.fs",e),e(),g(),a(function(){m.$body=a("body"),n.resolve(),m.support.nativeMatchMedia=m.support.matchMedia&&!a("html").hasClass("no-matchmedia")}),p.clickTouchStart=p.click+" "+p.touchStart,d(),window.Formstone=m,m});;
!function($){$("html").removeClass("no-js").addClass("has-js")}(jQuery);;
/*! formstone v1.0.0 [mediaquery.js] 2016-03-20 | MIT License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(b){b=b||{};for(var c in t)t.hasOwnProperty(c)&&(l[c]=b[c]?a.merge(b[c],l[c]):l[c]);l=a.extend(l,b),l.minWidth.sort(p.sortDesc),l.maxWidth.sort(p.sortAsc),l.minHeight.sort(p.sortDesc),l.maxHeight.sort(p.sortAsc);for(var d in t)if(t.hasOwnProperty(d)){s[d]={};for(var e in l[d])if(l[d].hasOwnProperty(e)){var f=window.matchMedia("("+t[d]+": "+(l[d][e]===1/0?1e5:l[d][e])+l.unit+")");f.addListener(g),s[d][l[d][e]]=f}}g()}function d(a,b,c){var d=o.matchMedia(b),e=i(d.media);r[e]||(r[e]={mq:d,active:!0,enter:{},leave:{}},r[e].mq.addListener(h));for(var f in c)c.hasOwnProperty(f)&&r[e].hasOwnProperty(f)&&(r[e][f][a]=c[f]);h(r[e].mq)}function e(a,b){if(a)if(b){var c=i(b);r[c]&&(r[c].enter[a]&&delete r[c].enter[a],r[c].leave[a]&&delete r[c].leave[a])}else for(var d in r)r.hasOwnProperty(d)&&(r[d].enter[a]&&delete r[d].enter[a],r[d].leave[a]&&delete r[d].leave[a])}function f(){q={unit:l.unit};for(var a in t)if(t.hasOwnProperty(a))for(var c in s[a])if(s[a].hasOwnProperty(c)){var d="Infinity"===c?1/0:parseInt(c,10),e=t[a].indexOf("width")>-1?b.fallbackWidth:b.fallbackHeight,f=a.indexOf("max")>-1;b.support.nativeMatchMedia?s[a][c].matches&&(f?(!q[a]||d<q[a])&&(q[a]=d):(!q[a]||d>q[a])&&(q[a]=d)):f?!q[a]&&d>e&&(q[a]=d):(!q[a]&&0!==q[a]||d>q[a]&&e>d)&&(q[a]=d)}}function g(){f(),n.trigger(m.mqChange,[q])}function h(a){var b=i(a.media),c=r[b],d=a.matches,e=d?m.enter:m.leave;if(c&&(c.active||!c.active&&d)){for(var f in c[e])c[e].hasOwnProperty(f)&&c[e][f].apply(c.mq);c.active=!0}}function i(a){return a.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"").replace(/^\s+|\s+$/g,"")}function j(){return q}var k=b.Plugin("mediaquery",{utilities:{_initialize:c,state:j,bind:d,unbind:e},events:{mqChange:"mqchange"}}),l={minWidth:[0],maxWidth:[1/0],minHeight:[0],maxHeight:[1/0],unit:"px"},m=a.extend(k.events,{enter:"enter",leave:"leave"}),n=b.$window,o=n[0],p=k.functions,q=null,r=[],s={},t={minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height"}});;
/*! formstone v1.0.0 [navigation.js] 2016-03-20 | MIT License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./swap"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){w=a("html, body")}function d(b){b.handleGuid=u.handle+b.guid,b.isToggle="toggle"===b.type,b.open=!1,b.isToggle&&(b.gravity="");var c=u.base,d=[c,b.type].join("-"),e=b.gravity?[d,b.gravity].join("-"):"",f=[b.rawGuid,b.theme,b.customClass].join(" ");b.handle=this.data(s+"-handle"),b.content=this.data(s+"-content"),b.handleClasses=[u.handle,u.handle.replace(c,d),e?u.handle.replace(c,e):"",b.handleGuid,f].join(" "),b.thisClasses=[u.nav.replace(c,d),e?u.nav.replace(c,e):"",f],b.contentClasses=[u.content.replace(c,d),f].join(" "),b.contentClassesOpen=[e?u.content.replace(c,e):"",u.open].join(" "),b.$nav=this.addClass(b.thisClasses.join(" ")),b.$handle=a(b.handle).addClass(b.handleClasses),b.$content=a(b.content).addClass(b.contentClasses),b.$animate=a().add(b.$nav).add(b.$content),p(b),b.$handle.attr("data-swap-target",b.dotGuid).attr("data-swap-linked",b.handleGuid).attr("data-swap-group",u.base).on("activate.swap"+b.dotGuid,b,j).on("deactivate.swap"+b.dotGuid,b,k).on("enable.swap"+b.dotGuid,b,l).on("disable.swap"+b.dotGuid,b,m).fsSwap({maxWidth:b.maxWidth,classes:{target:b.dotGuid,enabled:t.enabled,active:t.open,raw:{target:b.rawGuid,enabled:u.enabled,active:u.open}}})}function e(a){a.$content.removeClass([a.contentClasses,a.contentClassesOpen].join(" ")).off(v.namespace),a.$handle.removeAttr("data-swap-target").removeData("swap-target").removeAttr("data-swap-linked").removeData("swap-linked").removeClass(a.handleClasses).off(a.dotGuid).html(a.originalLabel).fsSwap("destroy"),q(a),o(a),this.removeClass(a.thisClasses.join(" ")).off(v.namespace)}function f(a){a.$handle.fsSwap("activate")}function g(a){a.$handle.fsSwap("deactivate")}function h(a){a.$handle.fsSwap("enable")}function i(a){a.$handle.fsSwap("disable")}function j(a){if(!a.originalEvent){var b=a.data;b.open||(b.$el.trigger(v.open),b.$content.addClass(b.contentClassesOpen).one(v.click,function(){g(b)}),b.label&&b.$handle.html(b.labels.open),n(b),b.open=!0)}}function k(a){if(!a.originalEvent){var b=a.data;b.open&&(b.$el.trigger(v.close),b.$content.removeClass(b.contentClassesOpen).off(v.namespace),b.label&&b.$handle.html(b.labels.closed),o(b),b.open=!1)}}function l(a){var b=a.data;b.$content.addClass(u.enabled),setTimeout(function(){b.$animate.addClass(u.animated)},0),b.label&&b.$handle.html(b.labels.closed)}function m(a){var b=a.data;b.$content.removeClass(u.enabled,u.animated),b.$animate.removeClass(u.animated),q(b),o(b)}function n(a){a.isToggle||w.addClass(u.lock)}function o(a){a.isToggle||w.removeClass(u.lock)}function p(a){if(a.label)if(a.$handle.length>1){a.originalLabel=[];for(var b=0,c=a.$handle.length;c>b;b++)a.originalLabel[b]=a.$handle.eq(b).html()}else a.originalLabel=a.$handle.html()}function q(a){if(a.label)if(a.$handle.length>1)for(var b=0,c=a.$handle.length;c>b;b++)a.$handle.eq(b).html(a.originalLabel[b]);else a.$handle.html(a.originalLabel)}var r=b.Plugin("navigation",{widget:!0,defaults:{customClass:"",gravity:"left",label:!0,labels:{closed:"Menu",open:"Close"},maxWidth:"980px",theme:"fs-light",type:"toggle"},classes:["handle","nav","content","animated","enabled","open","toggle","push","reveal","overlay","left","right","lock"],events:{open:"open",close:"close"},methods:{_setup:c,_construct:d,_destruct:e,open:f,close:g,enable:h,disable:i}}),s=r.namespace,t=r.classes,u=t.raw,v=r.events,w=(r.functions,null)});;
/*! formstone v1.0.0 [equalize.js] 2016-03-20 | MIT License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){n.iterate.call(o,g)}function d(){o=a(l.element)}function e(b){b.maxWidth=b.maxWidth===1/0?"100000px":b.maxWidth,b.mq="(min-width:"+b.minWidth+") and (max-width:"+b.maxWidth+")",b.type="height"===b.property?"outerHeight":"outerWidth",b.target?a.isArray(b.target)||(b.target=[b.target]):b.target=["> *"],d(),a.fsMediaquery("bind",b.rawGuid,b.mq,{enter:function(){i.call(b.$el,b)},leave:function(){h.call(b.$el,b)}})}function f(b){j(b),a.fsMediaquery("unbind",b.rawGuid),d()}function g(a){if(a.data&&(a=a.data),a.enabled)for(var b,c,d,e=0;e<a.target.length;e++){b=0,c=0,d=a.$el.find(a.target[e]),d.css(a.property,"");for(var f=0;f<d.length;f++)c=d.eq(f)[a.type](),c>b&&(b=c);d.css(a.property,b)}}function h(a){a.enabled&&(a.enabled=!1,j(a))}function i(a){if(!a.enabled){a.enabled=!0;var b=a.$el.find("img");b.length&&b.on(m.load,a,g),g(a)}}function j(a){for(var b=0;b<a.target.length;b++)a.$el.find(a.target[b]).css(a.property,"");a.$el.find("img").off(m.namespace)}var k=b.Plugin("equalize",{widget:!0,priority:5,defaults:{maxWidth:1/0,minWidth:"0px",property:"height",target:null},methods:{_construct:e,_destruct:f,_resize:c,resize:g}}),l=k.classes,m=(l.raw,k.events),n=k.functions,o=[]});;
/*! formstone v1.0.0 [swap.js] 2016-03-20 | MIT License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(b){b.enabled=!1,b.active=!1,b.classes=a.extend(!0,{},m,b.classes),b.target=this.data(l+"-target"),b.$target=a(b.target).addClass(b.classes.raw.target),b.mq="(max-width:"+(b.maxWidth===1/0?"100000px":b.maxWidth)+")";var c=this.data(l+"-linked");b.linked=c?"[data-"+l+'-linked="'+c+'"]':!1;var d=this.data(l+"-group");b.group=d?"[data-"+l+'-group="'+d+'"]':!1,b.$swaps=a().add(this).add(b.$target),this.on(n.click+b.dotGuid,b,j)}function d(b){b.collapse||!b.group||a(b.group).filter("[data-"+l+"-active]").length||a(b.group).eq(0).attr("data-"+l+"-active","true"),b.onEnable=this.data(l+"-active")||!1,a.fsMediaquery("bind",b.rawGuid,b.mq,{enter:function(){h.call(b.$el,b,!0)},leave:function(){i.call(b.$el,b,!0)}})}function e(b){a.fsMediaquery("unbind",b.rawGuid),b.$swaps.removeClass([b.classes.raw.enabled,b.classes.raw.active].join(" ")).off(n.namespace)}function f(b,c){if(b.enabled&&!b.active){b.group&&!c&&a(b.group).not(b.$el).not(b.linked)[k.namespaceClean]("deactivate",!0);var d=b.group?a(b.group).index(b.$el):null;b.$swaps.addClass(b.classes.raw.active),c||b.linked&&a(b.linked).not(b.$el)[k.namespaceClean]("activate",!0),this.trigger(n.activate,[d]),b.active=!0}}function g(b,c){b.enabled&&b.active&&(b.$swaps.removeClass(b.classes.raw.active),c||b.linked&&a(b.linked).not(b.$el)[k.namespaceClean]("deactivate",!0),this.trigger(n.deactivate),b.active=!1)}function h(b,c){b.enabled||(b.enabled=!0,b.$swaps.addClass(b.classes.raw.enabled),c||a(b.linked).not(b.$el)[k.namespaceClean]("enable"),this.trigger(n.enable),b.onEnable?(b.active=!1,f.call(this,b)):(b.active=!0,g.call(this,b)))}function i(b,c){b.enabled&&(b.enabled=!1,b.$swaps.removeClass([b.classes.raw.enabled,b.classes.raw.active].join(" ")),c||a(b.linked).not(b.$el)[k.namespaceClean]("disable"),this.trigger(n.disable))}function j(a){o.killEvent(a);var b=a.data;b.active&&b.collapse?g.call(b.$el,b):f.call(b.$el,b)}var k=b.Plugin("swap",{widget:!0,defaults:{collapse:!0,maxWidth:1/0},classes:["target","enabled","active"],events:{activate:"activate",deactivate:"deactivate",enable:"enable",disable:"disable"},methods:{_construct:c,_postConstruct:d,_destruct:e,activate:f,deactivate:g,enable:h,disable:i}}),l=k.namespace,m=k.classes,n=k.events,o=k.functions});;
/*! formstone v1.0.0 [checkbox.js] 2016-03-20 | MIT License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(b){var c=this.closest("label"),d=c.length?c.eq(0):a("label[for="+this.attr("id")+"]"),e=[p.base,b.theme,b.customClass].join(" "),f="";b.radio="radio"===this.attr("type"),b.group=this.attr("name"),f+='<div class="'+p.marker+'" aria-hidden="true">',f+='<div class="'+p.flag+'"></div>',b.toggle&&(e+=" "+p.toggle,f+='<span class="'+[p.state,p.state_on].join(" ")+'">'+b.labels.on+"</span>",f+='<span class="'+[p.state,p.state_off].join(" ")+'">'+b.labels.off+"</span>"),b.radio&&(e+=" "+p.radio),f+="</div>",d.length?d.addClass(p.label).wrap('<div class="'+e+'"></div>').before(f):this.before('<div class=" '+e+'">'+f+"</div>"),b.$checkbox=d.length?d.parents(o.base):this.prev(o.base),b.$marker=b.$checkbox.find(o.marker),b.$states=b.$checkbox.find(o.state),b.$label=d,this.is(":checked")&&b.$checkbox.addClass(p.checked),(this.is(":disabled")||this.is("[readonly]"))&&b.$checkbox.addClass(p.disabled),this.wrap('<div class="'+p.element_wrapper+'"></div>'),this.on(q.focus,b,l).on(q.blur,b,m).on(q.change,b,i).on(q.click,b,h).on(q.deselect,b,k),b.$checkbox.on(q.click,b,h)}function d(a){a.$checkbox.off(q.namespace),a.$marker.remove(),a.$states.remove(),a.$label.unwrap().removeClass(p.label),this.unwrap().off(q.namespace)}function e(a){this.prop("disabled",!1),a.$checkbox.removeClass(p.disabled)}function f(a){this.prop("disabled",!0),a.$checkbox.addClass(p.disabled)}function g(a){var b=a.$el.is(":disabled")||a.$el.is("[readonly]"),c=a.$el.is(":checked");b||(c?j({data:a}):k({data:a}))}function h(b){b.stopPropagation();var c=b.data;a(b.target).is(c.$el)||(b.preventDefault(),c.$el.trigger("click"))}function i(a){var b=a.data,c=b.$el.is(":disabled")||b.$el.is("[readonly]"),d=b.$el.is(":checked");c||(b.radio?d&&j(a):d?j(a):k(a))}function j(b){b.data.radio&&a('input[name="'+b.data.group+'"]').not(b.data.$el).trigger("deselect"),b.data.$el.trigger(q.focus),b.data.$checkbox.addClass(p.checked)}function k(a){a.data.$el.trigger(q.focus),a.data.$checkbox.removeClass(p.checked)}function l(a){a.data.$checkbox.addClass(p.focus)}function m(a){a.data.$checkbox.removeClass(p.focus)}{var n=b.Plugin("checkbox",{widget:!0,defaults:{customClass:"",toggle:!1,labels:{on:"ON",off:"OFF"},theme:"fs-light"},classes:["element_wrapper","label","marker","flag","radio","focus","checked","disabled","toggle","state","state_on","state_off"],methods:{_construct:c,_destruct:d,enable:e,disable:f,update:g},events:{deselect:"deselect"}}),o=n.classes,p=o.raw,q=n.events;n.functions}});;
/*! formstone v1.0.0 [dropdown.js] 2016-03-20 | MIT License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./scrollbar","./touch"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){H=b.$body}function d(c){c.multiple=this.prop("multiple"),c.disabled=this.is(":disabled")||this.is("[readonly]"),c.lastIndex=!1,c.multiple?c.links=!1:c.external&&(c.links=!0);var d=this.find("[selected]").not(":disabled"),e=this.find(":selected").not(":disabled"),f=e.text(),g=this.find("option").index(e);c.multiple||""===c.label||d.length?c.label="":(e=this.prepend('<option value="" class="'+C.item_placeholder+'" selected>'+c.label+"</option>"),f=c.label,g=0);var h=this.find("option, optgroup"),k=h.filter("option"),l=a("[for="+this.attr("id")+"]");c.tabIndex=this[0].tabIndex,this[0].tabIndex=-1,l.length&&(l[0].tabIndex=-1);var m=[C.base,c.theme,c.customClass];c.mobile||b.isMobile?m.push(C.mobile):c.cover&&m.push(C.cover),c.multiple&&m.push(C.multiple),c.disabled&&m.push(C.disabled);var n='<div class="'+m.join(" ")+'" tabindex="'+c.tabIndex+'"></div>',t="";c.multiple||(t+='<button type="button" class="'+C.selected+'" tabindex="-1">',t+=a("<span></span>").text(y(f,c.trim)).html(),t+="</button>"),t+='<div class="'+C.options+'">',t+="</div>",this.wrap(n).after(t),c.$dropdown=this.parent(B.base),c.$label=l,c.$allOptions=h,c.$options=k,c.$selected=c.$dropdown.find(B.selected),c.$wrapper=c.$dropdown.find(B.options),c.$placeholder=c.$dropdown.find(B.placeholder),c.index=-1,c.closed=!0,c.focused=!1,i(c),c.links?this.attr("aria-hidden","true"):c.$selected.add(c.$wrapper).attr("aria-hidden","true"),c.multiple||u(g,c),void 0!==a.fn.fsScrollbar&&c.$wrapper.fsScrollbar({theme:c.theme}),c.$selected.on(D.click,c,j),c.$dropdown.on(D.click,B.item,c,p).on(D.close,c,o),this.on(D.change,c,q),b.isMobile||(this.on(D.focusIn,c,function(a){a.data.$dropdown.trigger(D.raw.focus)}),c.$dropdown.on(D.focusIn,c,r).on(D.focusOut,c,s))}function e(b){b.$dropdown.hasClass(C.open)&&b.$selected.trigger(D.click),void 0!==a.fn.fsScrollbar&&b.$wrapper.fsScrollbar("destroy"),b.links&&this.removeAttr("aria-hidden"),b.$el[0].tabIndex=b.tabIndex,b.$label.length&&(b.$label[0].tabIndex=b.tabIndex),b.$dropdown.off(D.namespace),b.$options.off(D.namespace),b.$placeholder.remove(),b.$selected.remove(),b.$wrapper.remove(),b.$el.off(D.namespace).show().unwrap()}function f(a,b){if("undefined"!=typeof b){var c=a.$items.index(a.$items.filter("[data-value="+b+"]"));a.$items.eq(c).addClass(C.item_disabled),a.$options.eq(c).prop("disabled",!0)}else a.$dropdown.hasClass(C.open)&&a.$selected.trigger(D.click),a.$dropdown.addClass(C.disabled),a.$el.prop("disabled",!0),a.disabled=!0}function g(a,b){if("undefined"!=typeof b){var c=a.$items.index(a.$items.filter("[data-value="+b+"]"));a.$items.eq(c).removeClass(C.item_disabled),a.$options.eq(c).prop("disabled",!1)}else a.$dropdown.removeClass(C.disabled),a.$el.prop("disabled",!1),a.disabled=!1}function h(b){void 0!==a.fn.fsScrollbar&&b.$wrapper.fsScrollbar("destroy");var c=b.index;b.$allOptions=b.$el.find("option, optgroup"),b.$options=b.$allOptions.filter("option"),b.index=-1,c=b.$options.index(b.$options.filter(":selected")),i(b),b.multiple||u(c,b),void 0!==a.fn.fsScrollbar&&b.$wrapper.fsScrollbar()}function i(b){for(var c="",d=0,e=0,f=b.$allOptions.length;f>e;e++){var g=b.$allOptions.eq(e),h=[];if("OPTGROUP"===g[0].tagName)h.push(C.group),g.is(":disabled")&&h.push(C.disabled),c+='<span class="'+h.join(" ")+'">'+g.attr("label")+"</span>";else{var i=g.val(),j=g.data("label"),k=b.links?"a":'button type="button"';g.attr("value")||g.attr("value",i),h.push(C.item),g.hasClass(C.item_placeholder)&&(h.push(C.item_placeholder),k="span"),g.is(":selected")&&h.push(C.item_selected),g.is(":disabled")&&h.push(C.item_disabled),c+="<"+k+' class="'+h.join(" ")+'"',b.links?"span"===k?c+=' aria-hidden="true"':(c+=' href="'+i+'"',b.external&&(c+=' target="_blank"')):c+=' data-value="'+i+'"',c+=' tabindex="-1">',c+=j?j:E.decodeEntities(y(g.text(),b.trim)),c+="</"+k+">",d++}}b.$items=b.$wrapper.html(a.parseHTML(c)).find(B.item)}function j(a){E.killEvent(a);var c=a.data;if(!c.disabled)if(c.mobile||!b.isMobile||b.isFirefoxMobile||b.isIEMobile)c.closed?l(c):m(c);else{var d=c.$el[0];if(G.createEvent){var e=G.createEvent("MouseEvents");e.initMouseEvent("mousedown",!1,!0,F,0,0,0,0,0,!1,!1,!1,!1,0,null),d.dispatchEvent(e)}else d.fireEvent&&d.fireEvent("onmousedown")}k(c)}function k(b){a(B.base).not(b.$dropdown).trigger(D.close,[b])}function l(a){if(a.closed){{var b=a.$dropdown.offset(),c=H.outerHeight(),d=a.$wrapper.outerHeight(!0);a.index>=0?a.$items.eq(a.index).position():{left:0,top:0}}b.top+d>c-a.bottomEdge&&a.$dropdown.addClass(C.bottom),H.on(D.click+a.dotGuid,":not("+B.options+")",a,n),a.$dropdown.trigger(D.focusIn),a.$dropdown.addClass(C.open),v(a),a.closed=!1}}function m(a){a&&!a.closed&&(H.off(D.click+a.dotGuid),a.$dropdown.removeClass([C.open,C.bottom].join(" ")),a.closed=!0)}function n(b){E.killEvent(b);var c=b.data;c&&0===a(b.currentTarget).parents(B.base).length&&(m(c),c.$dropdown.trigger(D.focusOut))}function o(a){var b=a.data;b&&(m(b),b.$dropdown.trigger(D.focusOut))}function p(b){var c=a(this),d=b.data;if(E.killEvent(b),!d.disabled){var e=d.$items.index(c);d.focusIndex=e,d.$wrapper.is(":visible")&&(u(e,d,b.shiftKey,b.metaKey||b.ctrlKey),w(d)),d.multiple||m(d),d.$dropdown.trigger(D.focus)}}function q(b,c){var d=a(this),e=b.data;if(!c&&!e.multiple){var f=e.$options.index(e.$options.filter("[value='"+z(d.val())+"']"));e.focusIndex=f,u(f,e),w(e)}}function r(b){E.killEvent(b);var c=(a(b.currentTarget),b.data);c.disabled||c.multiple||c.focused||(k(c),c.focused=!0,c.focusIndex=c.index,c.input="",c.$dropdown.addClass(C.focus).on(D.keyDown+c.dotGuid,c,t))}function s(b){E.killEvent(b);var c=(a(b.currentTarget),b.data);c.focused&&c.closed&&(c.focused=!1,c.$dropdown.removeClass(C.focus).off(D.keyDown+c.dotGuid),c.multiple||(m(c),c.index!==c.focusIndex&&(w(c),c.focusIndex=c.index)))}function t(c){var d=c.data;if(d.keyTimer=E.startTimer(d.keyTimer,1e3,function(){d.input=""}),13===c.keyCode)d.closed||(m(d),u(d.index,d)),w(d);else if(!(9===c.keyCode||c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)){E.killEvent(c);var e=d.$items.length-1,f=d.index<0?0:d.index;if(a.inArray(c.keyCode,b.isFirefox?[38,40,37,39]:[38,40])>-1)f+=38===c.keyCode||b.isFirefox&&37===c.keyCode?-1:1,0>f&&(f=0),f>e&&(f=e);else{var g,h,i=String.fromCharCode(c.keyCode).toUpperCase();for(d.input+=i,h=d.index+1;e>=h;h++)if(g=d.$options.eq(h).text().substr(0,d.input.length).toUpperCase(),g===d.input){f=h;break}if(0>f||f===d.index)for(h=0;e>=h;h++)if(g=d.$options.eq(h).text().substr(0,d.input.length).toUpperCase(),g===d.input){f=h;break}}f>=0&&(u(f,d),v(d))}}function u(a,c,d,e){var f=c.$items.eq(a),g=c.$options.eq(a),h=f.hasClass(C.item_selected),i=f.hasClass(C.item_disabled);if(!i)if(c.multiple)if(b.isMobile)i||(h?(g.prop("selected",null),f.removeClass(C.item_selected)):(g.prop("selected",!0),f.addClass(C.item_selected)));else if(d&&c.lastIndex!==!1){var j=c.lastIndex>a?a:c.lastIndex,k=(c.lastIndex>a?c.lastIndex:a)+1;c.$options.prop("selected",null),c.$items.filter(B.item_selected).removeClass(C.item_selected),c.$options.slice(j,k).not("[disabled]").prop("selected",!0),c.$items.slice(j,k).not(B.item_disabled).addClass(C.item_selected)}else e?(h?(g.prop("selected",null),f.removeClass(C.item_selected)):(g.prop("selected",!0),f.addClass(C.item_selected)),c.lastIndex=a):(c.$options.prop("selected",null),c.$items.filter(B.item_selected).removeClass(C.item_selected),g.prop("selected",!0),f.addClass(C.item_selected),c.lastIndex=a);else if(a>-1&&a<c.$items.length){if(a!==c.index){var l=g.data("label")||f.html();c.$selected.html(l).removeClass(B.item_placeholder),c.$items.filter(B.item_selected).removeClass(C.item_selected),c.$el[0].selectedIndex=a,f.addClass(C.item_selected),c.index=a}}else""!==c.label&&c.$selected.html(c.label)}function v(b){var c=b.$items.eq(b.index),d=b.index>=0&&!c.hasClass(C.item_placeholder)?c.position():{left:0,top:0},e=(b.$wrapper.outerHeight()-c.outerHeight())/2;void 0!==a.fn.fsScrollbar?b.$wrapper.fsScrollbar("resize").fsScrollbar("scroll",b.$wrapper.find(".fs-scrollbar-content").scrollTop()+d.top):b.$wrapper.scrollTop(b.$wrapper.scrollTop()+d.top-e)}function w(a){a.links?x(a):a.$el.trigger(D.raw.change,[!0])}function x(a){var b=a.$el.val();a.external?F.open(b):F.location.href=b}function y(a,b){return 0===b?a:a.length>b?a.substring(0,b)+"...":a}function z(a){return"string"==typeof a?a.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"):a}var A=b.Plugin("dropdown",{widget:!0,defaults:{bottomEdge:0,cover:!1,customClass:"",label:"",external:!1,links:!1,mobile:!1,theme:"fs-light",trim:0},methods:{_setup:c,_construct:d,_destruct:e,disable:f,enable:g,update:h,open:l,close:m},classes:["cover","bottom","multiple","mobile","open","disabled","focus","selected","options","group","item","item_disabled","item_selected","item_placeholder"],events:{close:"close"}}),B=A.classes,C=B.raw,D=A.events,E=A.functions,F=b.window,G=(b.$window,b.document),H=null});;
/*! WOW - v1.1.2 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);;
!function($){"use strict";function n(n){console&&console.log&&console.log(n)}function t(n,t,o){this.init(n,t,o)}function o(){this.rules=[]}var e={show:null,hide:null,log:!1,checkTargets:!0};$.extend(t.prototype,{init:function(n,t,o){this.controller=n,this.condition=t,this.value=o,this.rules=[],this.controls=[]},evalCondition:function(n,t,o,e,i){if("=="==this.condition)return e==i;if("!="==o)return e!=i;if("()"==o)return e(t,n,i);if("any"==o)return e.indexOf(i)>=0;if("not-any"==o)return e.indexOf(i)<0;throw new Error("Unknown condition:"+o)},checkCondition:function(t,o){if(!this.condition)return!0;var e=t.find(this.controller);0===e.size()&&o.log&&n("Evaling condition: Could not find controller input "+this.controller);var i=this.getControlValue(t,e);return o.log&&void 0===i&&n("Evaling condition: Could not exctract value from input "+this.controller),void 0===i?!1:(i=this.normalizeValue(e,this.value,i),this.evalCondition(t,this.control,this.condition,this.value,i))},normalizeValue:function(n,t,o){return"number"==typeof t?parseFloat(o):o},getControlValue:function(n,t){return"checkbox"==t.attr("type")?t.is(":checked"):t.val()},createRule:function(n,o,e){var i=new t(n,o,e);return this.rules.push(i),i},include:function(n){if(!n)throw new Error("Must give an input selector");this.controls.push(n)},applyRule:function(t,o,e){var i;i=void 0===e?this.checkCondition(t,o):e,o.log&&n("Applying rule on "+this.controller+"=="+this.value+" enforced:"+e+" result:"+i),o.log&&!this.controls.length&&n("Zero length controls slipped through");var r=o.show||function(n){n.show()},l=o.show||function(n){n.hide()},s=$.map(this.controls,function(e,i){var r=t.find(e);return o.log&&0===r.size()&&n("Could not find element:"+e),r});i?($(s).each(function(){o.log&&0===$(this).size()&&(n("Control selection is empty when showing"),n(this)),r(this)}),$(this.rules).each(function(){this.applyRule(t,o)})):($(s).each(function(){o.log&&0===$(this).size()&&(n("Control selection is empty when hiding:"),n(this)),l(this)}),$(this.rules).each(function(){this.applyRule(t,o,!1)}))}}),$.extend(o.prototype,{createRule:function(n,o,e){var i=new t(n,o,e);return this.rules.push(i),i},applyRules:function(t,o){var e;for(o=o||{},o.log&&n("Starting evaluation ruleset of "+this.rules.length+" rules"),e=0;e<this.rules.length;e++)this.rules[e].applyRule(t,o)},walk:function(){function n(o){t.push(o),$(o.children).each(function(){n(this)})}var t=[];return $(this.rules).each(function(){n(this)}),t},checkTargets:function(t,o){var e=0,i=this.walk();$(i).each(function(){if(0===t.find(this.controller).size())throw new Error("Rule's controller does not exist:"+this);if(0===this.controls.length)throw new Error("Rule has no controls:"+this);$(this.controls).each(function(){if(0===t.find(this).size())throw new Error("Rule's target control does not exist:"+this);e++})}),o.log&&n("Controller check ok, rules count "+i.length+" controls count "+e)},install:function(n){$.deps.enable($(document.body),this,n)}});var i={createRuleset:function(){return new o},enable:function(t,o,e){e=e||{},(e.checkTargets||void 0===e.checkTargets)&&o.checkTargets(t,e);var i=this;e.log&&n("Enabling dependency change monitoring on "+t.get(0));var r=t.live("change.deps",function(){o.applyRules(t,e)});return o.applyRules(t,e),r}};$.deps=i}(jQuery);;
(function ($) {
  $('.key-step-two').hide();
  $('.key-step-three').hide();
  $('.card-step-two').hide();
  $('.bottom-sidebar').hide();
  $('.card-step-three').hide();
  $('.calculated-results').hide(hideAllTables);
  hideAllTables();

  $('a[data-type]').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      // console.log("already active");
      return;
    }
    $('a[data-type]').removeClass('active');
    $(this).addClass('active');
    var selectedvalue = $(this).attr('data-type');

    if (selectedvalue === "key") {
      // console.log("key");
      resetActiveLink($('.key-step-two'));
      $("#issue-type").html("Key | ");
      $(".card-step-two").hide(resetActiveLink);
      $(".key-step-two").show();
    } else {
      // console.log("UBCcard");
      $("#issue-type").html("UBCcard | ");
      resetActiveLink($('.card-step-two'));
      $(".card-step-two").show();
      $(".key-step-two").hide(resetActiveLink);
    }
    $('.key-step-three').hide(resetActiveLink);
    $('.card-step-three').hide(resetActiveLink);
    $('.calculated-results').hide(hideAllTables);
    $(".no-results").show();
  });

  $('a[data-card-issue-type]').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      // console.log("already active");
      return;
    }
    $('a[data-card-issue-type]').removeClass('active');
    $(this).addClass('active');
    var selectedvalue = $(this).attr('data-card-issue-type');

    if (selectedvalue === "light and beep") {
      // console.log("light and beep");
      resetActiveLink($('.card-step-three'));
      $(".card-step-three").hide(resetActiveLink);
      $("#issue-detail").html("Card reader blinks and beeps");
      $("#card-period").html(" ");
      $("#results").html("Your card is programmed correctly however there might be a hardware issue, contact your supervisor to submit a service ticket");
      $(".calculated-results").show();
      $(".no-results").hide();
    } else if (selectedvalue === "light blinks") {
      // console.log("light blinks");
      resetActiveLink($('.card-step-three'));
      $("#card-period").html(" ");
      $("#issue-detail").html("Card reader blinks quickly | ");
      $(".card-step-three").show();
      $('.calculated-results').hide(hideAllTables);
      $(".no-results").show();
    } else if (selectedvalue === "no change") {
      // console.log("no change");
      resetActiveLink($('.card-step-three'));
      $(".card-step-three").hide(resetActiveLink);
      $("#card-period").html(" ");
      $("#issue-detail").html("Card reader has no light or sound change");
      //TODO: replace this one with a link	
      $("#results").html("Your UBCcard must be replaced; link");
      $(".calculated-results").show();
      $(".no-results").hide();
    } else {
      // console.log("no change");
      resetActiveLink($('.card-step-three'));
      $(".card-step-three").hide(resetActiveLink);
      $("#card-period").html(" ");
      $("#issue-detail").html("Reader beeps and then turns green for 4 seconds – but the door doesn’t open");
      $("#results").html("Your card is programmed correctly however there might be a hardware issue, contact your supervisor to submit a service ticket");
      $(".calculated-results").show();
      $(".no-results").hide();
    }

  });

  $('a[data-key-issue-type]').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      // console.log("already active");
      return;
    }
    $('a[data-key-issue-type]').removeClass('active');
    $(this).addClass('active');

    var selectedvalue = $(this).attr('data-key-issue-type');
    if (selectedvalue === "broken") {
      // console.log("broken");
      $("#card-period").html(" ");
      $("#issue-detail").html("Key broken | ");
      $(".key-step-three").show();
      $('.calculated-results').hide(hideAllTables);
      $(".no-results").show();
    } else {
      $(".key-step-three").hide(resetActiveLink);
      // console.log("not open");
      $("#card-period").html(" ");
      $("#issue-detail").html("Key doesn't open the door");
      $("#results").html("Let your supervisor know; they should ensure the correct key was requested and will follow up with the Access Desk");
      $(".calculated-results").show();
      $(".no-results").hide();
    }
  });

  $('a[data-key-broken-type]').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      // console.log("already active");
      return;
    }
    $('a[data-key-broken-type]').removeClass('active');
    $(this).addClass('active');

    var selectedvalue = $(this).attr('data-key-broken-type');
    if (selectedvalue === "yes") {
      // console.log("broken in lock");
      $("#card-period").html("Key broke inside the lock");
      $("#results").html("Contact your supervisor, they can submit a service request to dispatch a locksmith to remove the broken pieces of the key from the lock. Then bring the broken key pieces and your picture ID to the Access Desk for a replacement.");
      $(".calculated-results").show();
      $(".no-results").hide();
    } else {
      // console.log("not broken in lock");
      $("#card-period").html(" ");
      $("#issue-detail").html("Key didn't break in the lock");
      $("#results").html("Bring the broken key and your picture ID to the Access Desk for a replacement");
      $(".calculated-results").show();
      $(".no-results").hide();
    }
  });

  $('a[data-card-period]').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      // console.log("already active");
      return;
    }
    $('a[data-card-period]').removeClass('active');
    $(this).addClass('active');
    var selectedvalue = $(this).attr('data-card-period');

    if (selectedvalue === "today") {
      // console.log('today');
      $("#card-period").html("received UBCcard today");
      $("#results").html("Wait 24 hours and try again; if you still have access problems, contact your supervisor for follow up");
      $(".calculated-results").show();
      $(".no-results").hide();
    } else {
      // console.log("ages ago");
      $("#card-period").html("received UBCcard ages ago");
      $("#results").html("Contact your supervisor as access may not have been granted");
      $(".calculated-results").show();
      $(".no-results").hide();
    }
  });

  function resetActiveLink(e) {
    var active;
    if (e) {
      active = e.find(".active");
    } else {
      active = $(this).find(".active");
    }
    //var active = $(this).find(".active");
    active.removeClass("active");
  }

  function hideAllTables() {
    $('.rates-non-residence-undergrad').hide();
    $('.rates-non-residence-grad').hide();
    $('.rates-residence').hide();
    $('.rates-visitor').hide();
    $('.rates-faculty-staff').hide();
  }

  $(window).resize(function () {
    if (screen.width < 767) {
      $('.right-sidebar').hide();
      $('.bottom-sidebar').show();
      $('.decision-tree').removeClass('span9');
    } else if (screen.width >= 767 && screen.width < 796) {
      $('.right-sidebar').hide();
      $('.bottom-sidebar').show();
      $('.decision-tree').removeClass('span9');
      $('.right-sidebar').removeClass('span4');
      $('.right-sidebar').addClass('span3');
    } else {
      $('.right-sidebar').show();
      $('.bottom-sidebar').hide();
      if (!$('.decision-tree').hasClass('span9')) {
        $('.decision-tree').addClass('span9');
      }
    }
  });

})(jQuery);
;
/* ========================================================================
 * Bootstrap: alert.js v3.3.6
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.6'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);
;