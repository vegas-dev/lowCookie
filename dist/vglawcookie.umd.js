// @vegas-VGLawCookie v1.0.9
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).window=t.window||{})}(this,(function(t){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}
/*! js-cookie v3.0.1 | MIT */
function c(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}var s,u=function t(e,n){function r(t,r,o){if("undefined"!=typeof document){"number"==typeof(o=c({},n,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var a in o)o[a]&&(i+="; "+a,!0!==o[a]&&(i+="="+o[a].split(";")[0]));return document.cookie=t+"="+e.write(r,t)+i}}return Object.create({set:r,get:function(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var n=document.cookie?document.cookie.split("; "):[],r={},o=0;o<n.length;o++){var i=n[o].split("="),a=i.slice(1).join("=");try{var c=decodeURIComponent(i[0]);if(r[c]=e.read(a,c),t===c)break}catch(t){}}return t?r[t]:r}},remove:function(t,e){r(t,"",c({},e,{expires:-1}))},withAttributes:function(e){return t(this.converter,c({},this.attributes,e))},withConverter:function(e){return t(c({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(e)}})}({read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),l=function(){function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,t),this.container=document.getElementById("vg-lawCookie");var i={content:{text:{default:"Используя данный сайт, вы даете согласие на использование файлов cookie.",btnSuccess:"Хорошо",btnMore:"Подробнее"},btn:{classes:["btn","btn-primary"]}},privacyLink:"",enableCookie:!1,cookie:{name:"lawCookie",value:"yes",attributes:{}}};function a(){for(var t=function(t){return t&&"object"===e(t)},n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return r.reduce((function(e,n){return Object.keys(n).forEach((function(r){var i=e[r],c=n[r];Array.isArray(i)&&Array.isArray(c)?e[r]=i.concat.apply(i,o(c)):t(i)&&t(c)?e[r]=a(i,c):e[r]=c})),e}),{})}this.settings=a(i,r),this.init()}var a,c,l;return a=t,c=[{key:"init",value:function(){var t=this,e=t.storage(!0);if(!t.container){if(t.container=document.createElement("div"),t.container.setAttribute("id","vg-lawCookie"),t.container.classList.add("vg-lawCookie"),t.container.insertAdjacentHTML("beforeend",'\n\t\t\t\t<div class="vg-lawCookie--content">\n\t\t\t\t\t<p class="text-content">\n\t\t\t\t\t\t'.concat(t.settings.content.text.default,'\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class="btn-area">\n\t\t\t\t\t\t<a href="#" data-lc-confirm>').concat(t.settings.content.text.btnSuccess,"</a>\n\t\t\t\t\t\t").concat(t.privacyLink(),"\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t")),t.settings.content.btn.classes.length){var n,r=t.container.querySelector("[data-lc-confirm]"),o=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=i(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){s=!0,a=t},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw a}}}}(t.settings.content.btn.classes);try{for(o.s();!(n=o.n()).done;){var a=n.value;r.classList.add(a)}}catch(t){o.e(t)}finally{o.f()}}document.body.appendChild(t.container)}e||(setTimeout((function(){t.container.classList.add("show")}),500),t.container.querySelector("[data-lc-confirm]").onclick=function(){return t.container.classList.remove("show"),t.storage(!1,!0),!1})}},{key:"storage",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this,r=n.settings.cookie.name,o=n.settings.cookie.value,i=n.settings.cookie.attributes,a=null,c=n.settings.enableCookie;return a=c?u:localStorage,t?c?a.get(r):a.getItem(r):e?c?a.set(r,o,i):a.setItem(r,o):void 0}},{key:"privacyLink",value:function(){var t,e;return this.settings.privacyLink&&""(s||(t=['<a href="','" data-lc-more>',"</a>"],e||(e=t.slice(0)),s=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))),this.settings.privacyLink,this.settings.content.text.btnMore),""}},{key:"clear",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this;return t?(u.remove(e.settings.cookie.name),localStorage.clear()):e.settings.enableCookie?u.remove(e.settings.cookie.name):localStorage.clear(),console.log(u),console.log(localStorage),!1}}],c&&r(a.prototype,c),l&&r(a,l),Object.defineProperty(a,"prototype",{writable:!1}),t}();t.VGLawCookie=l}));
