var Promise,Mirror;!function(){var c,d,e,f,g,h,i,j,a={writable:!1,enumerable:!1,configurable:!1},b=function(b,c){var d=Object.create(c||a);return d.value=b,d};Function.prototype.bind||Object.defineProperty(Function.prototype,"bind",b(function(a){var b=this,c=[].slice,d=c.call(arguments,1),e=function(){},f=function(){return b.apply(this instanceof e?this:a||{},d.concat(c.call(arguments)))};return e.prototype=b.prototype,f.prototype=new e,f})),Object.observe=void 0,Object.observe?Object.defineProperties(Object.prototype,{edit:b(function(a,b){switch(typeof a){case"string":this[a]=b;break;case"object":var d=Object.keys(a);d.forEach(function(b){this[b]=a[b]})}return this})}):(Object.defineProperties(Object,{observe:b(function(a,c){return a["[[callbacks]]"]||Object.defineProperty(a,"[[callbacks]]",b([])),"function"==typeof c&&a["[[callbacks]]"].push(c),a}),unobserve:b(function(a,b){var c,d=a["[[callbacks]]"];return d&&-1!==(c=d.indexOf(b))&&d.splice(c,1),a})}),c=function(a,b){if(this[a]!==b){var c={type:"updated",name:a,oldValue:this[a],object:this};return void 0===b?(c.type="delted",delete this[a]):void 0===this[a]?(c.type="new",this[a]=b):this[a]=b,c}},Object.defineProperties(Object.prototype,{edit:b(function(a,b){var f,g,d=this,e=[];switch(typeof a){case"string":f=c.call(d,a,b),f&&e.push(f);break;case"object":g=Object.keys(a),g.forEach(function(b){var f=c.call(d,b,a[b]);f&&e.push(f)})}return e.length&&d["[[callbacks]]"]&&d["[[callbacks]]"].forEach(function(a){a.call(d,e)}),this})})),"undefined"==typeof Promise&&(d=function(a,b,c){var d=new Promise(a);return b&&(d["[[PromiseStatus]]"]=b),c&&(d["[[PromiseValue]]"]=c),d},e=function(a){var b=a["[[PromiseValue]]"],c=a["[[PromiseStatus]]"];a["[[Process]]"].concat(a["[[Monitor]]"]).forEach(function(a){a(c,b)}),a["[[Process]]"].forEach(function(a){setTimeout(function(){a.next(c,b)})}),a["[[Process]]"].length=a["[[Monitor]]"].length=0},f=function(a,b){var c=this;"pending"===c["[[PromiseStatus]]"]&&(c["[[PromiseValue]]"]=b,c["[[PromiseStatus]]"]=a,e(c))},g=function(a,b){return"function"==typeof this[a]?this.result=this[a](b):void 0},h=function(a,b,c){if("result"in this){var d=this.result;return d instanceof Promise?d.then(function(b){a["resolved"](b)},function(b){a["rejected"](b)}):a["resolved"](d),void 0}a[b](c)},i=function(a,b){var c,d;"pending"===this.status&&(c="resolved",d=[],a.every(function(a){return"resolved"==a["[[PromiseStatus]]"]?(d.push(a["[[PromiseValue]]"]),!0):(c=a["[[PromiseStatus]]"],d=a["[[PromiseValue]]"],!1)}),"pending"!==c&&b[this.status=c](d))},j=function(a,b){var c=this;"pending"===c.status&&a.some(function(a){var d,e;return"pending"!==a["[[PromiseStatus]]"]?(d=a["[[PromiseStatus]]"],e=a["[[PromiseValue]]"],b[c.status=d](e),!1):void 0})},Promise=function(c){var e,d=this,g=Object.create(a);g.writable=!0,e={"[[PromiseStatus]]":b("pending",g),"[[PromiseValue]]":b(void 0,g),"[[Process]]":b([]),"[[Monitor]]":b([])},Object.defineProperties(d,e),c&&c(f.bind(this,"resolved"),f.bind(this,"rejected"))},Promise.all=function(a){var c,b={status:"pending"},e=d(function(d,e){var f={resolved:d,rejected:e};c=i.bind(b,a,f)}),f=a.filter(function(a){return a instanceof Promise?"pending"===a["[[PromiseStatus]]"]?a["[[Monitor]]"].push(c):void 0:!1});return!f.length&&c(),e},Promise.race=function(a){var c,b={status:"pending"},e=d(function(d,e){var f={resolved:d,rejected:e};c=j.bind(b,a,f),a.every(function(a){return a instanceof Promise?"pending"===a["[[PromiseStatus]]"]?a["[[Monitor]]"].push(c):(f[b.status=a["[[PromiseStatus]]"]](a["[[PromiseValue]]"]),!1):!0})});return e},Promise.resolve=d.bind(Promise,null,"resolved"),Promise.reject=d.bind(Promise,null,"rejected"),Promise.prototype={then:function(a,b){var i,c=this,f={resolved:a,rejected:b},j=d(function(a,b){i=g.bind(f),i.next=h.bind(f,{resolved:a,rejected:b})});return c["[[Process]]"].push(i),"pending"!=c["[[PromiseStatus]]"]&&e(c),j},"catch":function(a){return this.then(void 0,a)}})}(),Mirror=function(){function i(a){return f.call(a,function(a){return null!==a})}function j(a){return a.length>0?e.apply([],a):a}function k(a){return f.call(a,function(b,c){return a.indexOf(b)==c})}function l(a,b,c){var d=Object.keys(b);return d.forEach(function(d){var f,e=y.type(b[d]);switch(e){case"undefined":break;case"array":f=[];case"object":if(f=f||{},c){l(a[d]=f,b[d],c);break}default:a[d]=b[d]}}),a}function m(a,b,c,d){return"function"===y.type(b)?b.call(a,c,d):b}function n(a,b){return null==b?y(a):y(a).filter(b)}function o(a){return"children"in a?d.call(a.children):y.map(a.childNodes,function(a){return 1==a.nodeType?a:void 0})}function p(a,b,c){null==c?a.removeAttribute(b):a.setAttribute(b,c)}function q(a,b){var c=a.className||"",d=c&&void 0!==c.baseVal;return void 0===b?d?c.baseVal:c:(d?c.baseVal=b:a.className=b,void 0)}function r(a,b){b(a),d.call(a.childNodes).forEach(function(a){r(a,b)})}function t(a){var b,c;return s[a]||(b=document.createElement(a),document.body.appendChild(b),c=getComputedStyle(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),"none"==c&&(c="block"),s[a]=c),s[a]}function v(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function w(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})}function x(a,b){return"number"!=typeof b||u[v(a)]?b:b+"px"}var A,B,C,D,E,F,a=[],b=a.some,c=a.every,d=a.slice,e=a.concat,f=a.filter,g=["val","css","html","text","data","width","height","offset"],h=/^(?:body|html)$/i,s={},u={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},y=window["$"]=function(a,b){return F.init(a,b)};return y.fn={some:b,every:c,filter:f,concat:e,forEach:a.forEach,reduce:a.reduce,push:a.push,sort:a.sort,indexOf:a.indexOf,ready:function(a){var b=["complete","loaded","interactive"].indexOf(document.readyState)>-1;return b&&document.body?a(y):document.addEventListener("DOMContentLoaded",function(){a(y)},!1),this},map:function(a){return y(y.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return y(d.apply(this,arguments))},eq:function(a){return-1===a?this.slice(a):this.slice(a,+a+1)},get:function(a){return void 0===a?d.call(this):this[a>=0?a:a+this.length]},toArray:function(){return this.get()},size:function(){return this.length},is:function(a){return this.length>0&&F.matches(this[0],a)},not:function(a){var e,b=[],c=y.type(a);if("function"===c&&void 0!==a.call)this.each(function(c){a.call(this,c)||b.push(this)});else{switch(c){case"string":e=this.filter(a);break;case"nodelist":case"htmlcollection":e=d.call(a);break;default:e=y(a)}this.forEach(function(a){e.indexOf(a)<0&&b.push(a)})}return b},add:function(a,b){return y(k(this.concat(y(a,b))))},remove:function(){return this.each(function(){var a=this.parentNode;a&&a.removeChild(this)})},filter:function(a){return"function"===y.type(a)?this.not(a):y(f.call(this,function(b){return F.matches(b,a)}))},find:function(a){var c,d=this;switch(y.type(a)){case"undefined":c=[];break;case"object":c=y(a).filter(function(){var a=this;return b.call(d,function(b){return y.contains(b,a)})});break;default:c=1==this.length?y(F.querySelectorAll(this[0],a)):this.map(function(){return F.querySelectorAll(this,a)})}return y(k(c))},closest:function(a,b){for(var c=this[0];c&&!F.matches(c,a);)c=c.parentNode,c!==b&&c.tagName||(c=null);return y(c)},parents:function(a){for(var b=[],c=this;c.length>0;)c=y.map(c,function(a){return(a=a.parentNode)&&9!==a.nodeType&&b.indexOf(a)<0?(b.push(a),a):void 0});return n(b,a)},pluck:function(a){return y.map(this,function(b){return b[a]})},parent:function(a){return n(k(this.pluck("parentNode")),a)},children:function(a){return n(this.map(function(){return o(this)}),a)},each:function(a){return c.call(this,function(b,c){return a.call(b,c,b)!==!1}),this},empty:function(){return this.each(function(){this.innerHTML=""})},text:function(a){return 0 in arguments?this.each(function(b){var c=m(this,a,b,this.textContent);this.textContent=null==c?"":""+c}):0 in this?this[0].textContent:null},html:function(a){return 0 in arguments?this.each(function(b){var c=this.innerHTML;this.innerHTML=m(this,a,b,c)}):0 in this?this[0].innerHTML:null},attr:function(a,b){var c;return"string"!=typeof a||1 in arguments?this.each(function(c){var d=this;1===d.nodeType&&("object"===y.type(a)?y.each(a,function(a,b){p(d,a,b)}):p(d,a,m(d,b,c,d.getAttribute(a))))}):this.length&&1===this[0].nodeType?!(c=this[0].getAttribute(a))&&a in this[0]?this[0][a]:c:void 0},css:function(a,b){var e,f,g,h,c=this,d=y.type(a);if(0!==c.length){if(arguments.length<2)switch(e=c[0],f=getComputedStyle(e,""),d){case"string":return e.style[w(a)]||f.getPropertyValue(a);case"array":return g={},y.each(a,function(a,b){g[b]=e.style[w(b)]||f.getPropertyValue(b)}),g}return h="","string"==d?b||0===b?h=v(a)+":"+x(a,b):c.each(function(){this.style.removeProperty(v(a))}):y.each(a,function(a,b){b||0===b?h+=v(a)+":"+x(a,b)+";":c.each(function(){this.style.removeProperty(v(a))})}),c.each(function(){this.style.cssText+=";"+h})}},hasClass:function(a){return a?b.call(this,function(b){return-1!=q(b).split(/\s+/g).indexOf(a)}):!1},addClass:function(a){return a?this.each(function(b){if("className"in this){var c=""===(c=q(this))?[]:c.split(/\s+/g);m(this,a,b,c).split(/\s+/g).forEach(function(a){-1==c.indexOf(a)&&c.push(a)}),q(this,c.join(" "))}}):this},removeClass:function(a){return this.each(function(b){if("className"in this){if(void 0===a)return this.className="";var c=""===(c=q(this))?[]:c.split(/\s+/g);m(this,a,b,c).split(/\s+/g).forEach(function(a){var b=c.indexOf(a);-1!=b&&c.splice(b,1)}),q(this,c.join(" "))}})},toggleClass:function(a,b){return a?this.each(function(c){var d=y(this),e=""===(e=q(this))?[]:e.split(/\s+/g);m(this,a,c,e).split(/\s+/g).forEach(function(a){(void 0===b?!d.hasClass(a):b)?d.addClass(a):d.removeClass(a)})}):this},show:function(){return this.each(function(){var a=y(this);a.attr("hidden")&&a.attr("hidden",null),"none"==a.css("display")&&a.css("display",""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&a.css("display",t(this.nodeName))})},hide:function(){return this.attr("hidden",!0)},position:function(){var a,b,c,d;return this.length?(a=this[0],b=this.offsetParent(),c=this.offset(),d=h.test(b[0].nodeName)?{top:0,left:0}:b.offset(),c.top-=parseFloat(y(a).css("margin-top"))||0,c.left-=parseFloat(y(a).css("margin-left"))||0,d.top+=parseFloat(y(b[0]).css("border-top-width"))||0,d.left+=parseFloat(y(b[0]).css("border-left-width"))||0,{top:c.top-d.top,left:c.left-d.left}):null},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||document.body;a&&!h.test(a.nodeName)&&"static"==y(a).css("position");)a=a.offsetParent;return a})},offset:function(a){if(a)return this.each(function(b){var c=y(this),d=m(this,a,b,c.offset()),e=c.offsetParent().offset();props={top:d.top-e.top,left:d.left-e.left},"static"==c.css("position")&&(props["position"]="relative"),c.css(props)});if(this.length){var b=this[0].getBoundingClientRect();return{top:b.top+window.pageYOffset,left:b.left+window.pageXOffset,width:Math.round(b.width),height:Math.round(b.height)}}return null}},["width","height"].forEach(function(a){var b=a.replace(/./,function(a){return a[0].toUpperCase()});y.fn[a]=function(c){var d,e=this[0];if(void 0===c)switch(y.type(e)){case"window":return e["inner"+b];case"document":return e.documentElement["scroll"+b];default:return(d=this.offset())&&d[a]}return this.each(function(b){e=y(this),e.css(a,m(this,c,b,e[a]()))})}}),["after","prepend","before","append"].forEach(function(a,b){var c=b%2;y.fn[a]=function(){var e,f,a=y.map(arguments,function(a){return y(a)}),d=this.length>1;return this.each(function(){e=c?this:this.parentNode,f=0==b?this.nextSibling:1==b?this.firstChild:2==b?this:null;var g=y.contains(document.documentElement,e);a.forEach(function(a){if(d)a=a.cloneNode(!0);else if(!e)return y(a).remove();e.insertBefore(a,f),g&&r(a,function(a){null==a.nodeName||"SCRIPT"!==a.nodeName.toUpperCase()||a.type&&"text/javascript"!==a.type||a.src||window["eval"].call(window,a.innerHTML)})})})},y.fn[c?a+"To":"insert"+(b?"Before":"After")]=function(b){return y(b)[a](this),this}}),y.is=function(a){return a instanceof F.proto},y.type=function(a){var b=typeof a;switch(b){case"object":if(null===a)return"null";if(!(Node&&a instanceof Node))return toString.call(a).replace(/^\[object (\w+)\]$/,"$1").toLowerCase();switch(a.nodeType){case 3:return"text";case 9:return"document";case 1:return"node"}}return b},y.aop=function(a,b){"array"!=y.type(a)&&(a=[]);var c=function(){var c=b||this,e=d.call(arguments,0);a.some(function(a){return"function"==y.type(a)&&a.apply(c,e)===!1})};return c[":callbacks"]=a,c},y.each=function(a,b){if(a.some)a.some(function(a,c){return b.call(a,c,a)===!1});else{var c=Object.keys(a);c.some(function(c){return b.call(a[c],c,a[c])===!1})}return a},y.map=function(a,b){var d=[];return y.each(a,function(c,e){var f=b(e,c,a);null!=f&&d.push(f)}),j(d)},y.extend=function(a){var b,c=d.call(arguments,1);return"boolean"==typeof a&&(b=a,a=c.shift()),c.forEach(function(c){l(a,c,b)}),a},y.contains=document.documentElement.contains?function(a,b){return a!==b&&a.contains(b)}:function(a,b){for(;b&&(b=b.parentNode);)if(b===a)return!0;return!1},A=/^\s*<(\w+|!)[^>]*>/,B=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,C=document.createElement("table"),D=document.createElement("tr"),E={tr:document.createElement("tbody"),tbody:C,thead:C,tfoot:C,td:D,th:D,"*":document.createElement("div")},F={proto:function(a,b){return a=a||[],a.__proto__=y.fn,a.selector=b||"",a},init:function(a,b){var c;if(!a)return F.proto();if(y.is(a))return a;switch(y.type(a)){case"function":return y(document).ready(a);case"array":c=i(a),a=null;break;case"nodelist":case"htmlcollection":c=d.call(a),a=null;break;case"string":if(a=a.trim(),"<"==a[0])return F.fragment(a,b);if(void 0!==b)return y(b).find(a);c=F.querySelectorAll(document,a);break;default:c=[a],a=null}return F.proto(c,a)},querySelectorAll:function(a,b){switch(y.type(a)){case"node":case"document":return d.call(a.querySelectorAll(b))}return[]},fragment:function(a,b){var c,e,f;return B.test(a)&&(c=y(document.createElement(RegExp.$1))),c||(f=A.test(a)&&RegExp.$1,e=E[f in E?f:"*"],e.innerHTML=""+a,c=y(d.call(e.childNodes)).each(function(){e.removeChild(this)})),"object"==y.type(b)&&y.each(b,function(a,b){g.indexOf(a)>-1?c[a](b):c.attr(a,b)}),c},matches:function(a,b){var c,d,e,f;return b&&a&&1===a.nodeType?(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector||a.matchesSelector,c?c.call(a,b):(e=a.parentNode,f=!e,f&&(e=tempParent).appendChild(a),d=~F.querySelectorAll(e,b).indexOf(a),f&&tempParent.removeChild(a),!!d)):!1}},y}(),function(a){function g(a){return a._mid||(a._mid=f++)}function h(a){return{e:a}}function j(a,b,c,d){var e=h(b);return(i[g(a)]||[]).filter(function(a){return!(e.e&&a.e!=e.e||c&&a.fn!==c||d&&a.selector!=d)})}function o(a){return m[a]||k&&l[a]||a}function p(a,b){return a.del&&!k&&a.e in l||!!b}function q(b,e){return(e||!b.isDefaultPrevented)&&(e||(e=b),a.each(n,function(a,f){var g=e[a];b[a]=function(){return this[f]=c,g&&g.apply(e,arguments)},b[f]=d}),(void 0!==e.defaultPrevented?e.defaultPrevented:"returnValue"in e?e.returnValue===!1:e.getPreventDefault&&e.getPreventDefault())&&(b.isDefaultPrevented=c)),b}function r(b,c,d,f,j,k,l){var n=g(b),r=i[n]||(i[n]=[]);c.split(/\s/).forEach(function(c){var g,i;return"ready"==c?a(document).ready(d):(g=h(c),g.fn=d,g.selector=j,g.e in m&&(d=function(){var b=e.relatedTarget;return!b||b!==this&&!a.contains(this,b)?r.fn.apply(this,arguments):void 0}),i=k||d,g.proxy=function(a){if(a=q(a),!a.isImmediatePropagationStopped()){a.data=f;var c=i.apply(b,void 0==a._args?[a]:[a].concat(a._args));return c===!1&&(a.preventDefault(),a.stopPropagation()),c}},g.i=r.length,r.push(g),"addEventListener"in b&&b.addEventListener(o(g.e),g.proxy,p(g,l)),void 0)})}function s(a,b,c,d,e){var f=g(a);(b||"").split(/\s/).forEach(function(b){j(a,b,c,d).forEach(function(b){delete i[f][b.i],"removeEventListener"in a&&a.removeEventListener(o(b.e),b.proxy,p(b,e))})})}function t(a){var b={originalEvent:event};return Object.keys(a).forEach(function(c){b[c]=a[c]}),b}var b=Array.prototype.slice,c=function(){return!0},d=function(){return!1},f=1,i=window["handlers"]={},k="onfocusin"in window,l={focus:"focusin",blur:"focusout"},m={mouseenter:"mouseover",mouseleave:"mouseout"},n={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.extend(a.fn,{on:function(c,e,f,g,h){var j,k,i=this;return a.type(c),"string"!==a.type(e)&&"function"!==a.type(g)&&g!==!1&&(g=f,f=e,e=void 0),("function"==a.type(f)||f===!1)&&(g=f,f=void 0),g===!1&&(g=d),i.each(function(d,i){h&&(j=function(a){return s(i,a.type,g),g.apply(this,arguments)}),e&&(k=function(c){var d,f=a(c.target).closest(e,i).get(0);return f&&f!==i?(d=a.extend(t(c),{currentTarget:f,liveFired:i}),(j||g).apply(f,[d].concat(b.call(arguments,1)))):void 0}),r(i,c,g,f,e,k||j)})},off:function(b,c,e){var f=this;return a.type(b),"string"!==a.type(c)&&"function"!==a.type(e)&&e!==!1&&(e=c,c=void 0),e===!1&&(e=d),f.each(function(){s(this,b,e,c)})}})}(Mirror),function(a){a.ajax=function(b){var c,d,e,f,g,h;return b=a.extend({url:location.href,async:!0,type:"GET",dataType:"TEXT",contentType:"application/x-www-form-urlencoded",timeout:0},b),c=b.url,d=b.type.toUpperCase(),e=b.dataType.toUpperCase(),"object"==typeof b.data&&(f=[],Object.keys(b.data).forEach(function(a){f.push(a+"="+b.data[a])}),b.data=f.join("&")),"GET"===d&&(b.data&&(c+=(-1==c.indexOf("?")?"?":"&")+b.data),g=-1!=c.indexOf("?",c.indexOf("?")+1),"JSONP"==e||g)?a.getScript(c,b.success,b.error):(h=new Promise(function(a,f){var g,h=new XMLHttpRequest;h.onreadystatechange=function(){var b,c;if(4==h.readyState)if(h.onreadystatechange=void 0,clearTimeout(g),h.status>=200&&h.status<300||304==h.status||0==h.status){b=!1,c=h.responseText;try{switch(e){case"SCRIPT":(1,eval)(c);break;case"XML":c=h.responseXML;break;case"JSON":c=JSON.parse(c)}}catch(d){b=d}b?f({error:"parser",status:h.status}):a(c)}else f({error:"http",status:h.status})},b.timeout>0&&(g=setTimeout(function(){h.onreadystatechange=empty,h.abort(),f({error:"timeout",status:504})},b.timeout)),h.open(b.type,c,b.async),(b.contentType||b.contentType!==!1&&b.data&&"GET"!=d)&&h.setRequestHeader("Content-Type",b.contentType),h.send(b.data)}),"function"==typeof b.success&&h.then(b.success),"function"==typeof b.error&&h.then(void 0,b.error),h)};var b=0;a.getScript=function(a,c,d){var h,e=a.indexOf("?"),f="jsonp"+b++,g=a.indexOf("?",e+1);return-1!=g&&(a=a.substring(0,g)+f+a.substring(g+1)),h=new Promise(function(b,c){var d,e;window[f]=b,d=document.head,e=document.createElement("script"),e.onload=e.onerror=function(a){"load"==a.type?-1==g&&b(a):c(a),e.onload=e.onerror=null,delete window[f],d.removeChild(e)},e.type="text/javascript",e.src=a,d.appendChild(e)}),"function"==typeof c&&h.then(c),"function"==typeof d&&h.then(void 0,d),h},a.getJSON=function(b,c,d,e){return"function"===a.type(c)&&void 0===e&&(e=d,d=c,c=void 0),a.ajax({url:b,dataType:"json",data:c,success:d,error:e})}}(Mirror),function(a){var b={},c=function(b){this.name=b,this.stylesheet=a("<style></style>").appendTo("head")};c.prototype={append:function(a){return this.stylesheet.append(document.createTextNode(a)),this},write:function(a){return this.stylesheet.html(a),this},disable:function(a){return this.stylesheet.get(0).disabled=void 0===a||!!a,this},remove:function(){this.stylesheet.remove(),delete b[this.name]}},a.css=function(a){return a=a||"default",b[a]||(b[a]=new c(a))}}(Mirror);