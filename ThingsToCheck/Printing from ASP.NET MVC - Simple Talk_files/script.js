!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d=function(){if("undefined"!=typeof window._prum){var a=document.getElementsByTagName("script")[0],b=document.createElement("script");b.async="async",b.src="//rum-static.pingdom.net/prum.min.js",a.parentNode.insertBefore(b,a)}};c["default"]={init:d}},{}],2:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d=function(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0],b=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(a!==!1){var c=document.createElement("script"),d=window.Honeycomb&&window.Honeycomb.path?window.Honeycomb.path:"";c.type="text/javascript",c.src=d+a;var e=!1;c.onload=c.onreadystatechange=function(){e||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(e=!0,"function"==typeof b&&b.apply())};var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(c,f)}};c["default"]={load:d}},{}],3:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d=function(a){var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);return null!==c&&decodeURIComponent(c[1].replace(/\+/g," "))},e=function(a){var b=!1;"string"==typeof a&&(a=[a]);for(var c=0;c<a.length;c++)window.location.href.indexOf(a[c])!==-1&&(b=!0);return b};c["default"]={getUrlParameterByName:d,onPage:e}},{}],4:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(c,"__esModule",{value:!0});var e=a("../../document/js/honeycomb.document.load-script"),f=d(e),g={},h=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};g=a,i(),window.addEventListener("resize",function(){i()}),window.addEventListener("load",function(){i()})},i=function(){var a=document.querySelectorAll(".js-equal-heights");a.length&&("function"!=typeof window.jQuery.fn.equalise?("undefined"==typeof g.url&&(g.url="equalise/vendor/jquery.equalise.min.js"),f["default"].load(g.url,function(){h()})):window.jQuery(".js-equal-heights").equalise({itemClass:"js-equal-heights__item",groupAttr:"js-equal-heights-group"}))};c["default"]={init:h}},{"../../document/js/honeycomb.document.load-script":2}],5:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(c,"__esModule",{value:!0});var e=a("../../document/js/honeycomb.document.load-script"),f=d(e),g=function h(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},b=document.querySelectorAll(".js-lightbox, .js-lightbox--video, .js-lightbox--iframe, .js-lightbox--image, .js-lightbox--inline, .js-lightbox--ajax, .js-lightbox--swf, .js-lightbox--html");b.length&&("undefined"==typeof window.jQuery.fancybox?("undefined"==typeof a.url&&(a.url="lightbox/vendor/jquery.fancybox.pack.js"),f["default"].load(a.url,function(){h()})):(window.jQuery(".js-lightbox").fancybox(),window.jQuery(".js-lightbox--video, .js-lightbox--iframe").fancybox({type:"iframe"}),window.jQuery(".js-lightbox--image").fancybox({type:"image"}),window.jQuery(".js-lightbox--inline").fancybox({type:"inline"}),window.jQuery(".js-lightbox--ajax").fancybox({type:"ajax"}),window.jQuery(".js-lightbox--swf").fancybox({type:"swf"}),window.jQuery(".js-lightbox--html").fancybox({type:"html"})))};c["default"]={init:g}},{"../../document/js/honeycomb.document.load-script":2}],6:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d=".js-dropdown",e="open",f="closed",g=function(){h(),i()},h=function(){var a=window.jQuery(d).find("li");a.each(function(){var a=window.jQuery(this);if(a.find("ul").length>0&&"true"!==a.attr("data-arrow-added")){var b=window.jQuery("<a/>").attr("href","#toggle").addClass("arrow");a.addClass("dropdown "+f),a.attr("data-arrow-added","true"),b.appendTo(a)}})},i=function(){var a=window.jQuery("body");a.on("click",".js-dropdown .arrow",function(a){var b=window.jQuery(this),c=b.parent();a.preventDefault(),c.hasClass(e)?c.removeClass(e).addClass(f):c.addClass(e).removeClass(f)})};c["default"]={init:g,addArrows:h}},{}],7:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d=function(){var a=window.jQuery(".js-header-primary-collapse");a.each(function(a,b){var c=window.jQuery(b),d=c.find(".header--primary__menu--mobile");c.wrapInner('<div class="header--primary__container"></div>'),d.appendTo(c)})},e=function(){var a=window.jQuery(".js-header-primary-collapse"),b="dropdown--open";a.each(function(){var a=window.jQuery("body");a.on("click",".header--primary__container .dropdown .arrow",function(){var a=window.jQuery(this),c=a.parents(".header--primary");a.parent("li").hasClass("open")?c.addClass(b):c.removeClass(b)})})},f=function(){d(),e();var a=window.jQuery("body");a.on("click",".header--primary__menu-button",function(b){b.preventDefault(),a.hasClass("mobile-nav--open")?a.removeClass("mobile-nav--open"):a.addClass("mobile-nav--open")}),a.on("click",".header--primary__menu--mobile .dropdown > a",function(a){if("#toggle"!==this.getAttribute("href")){a.preventDefault();var b=window.jQuery(this).siblings('a[href="#toggle"]');b&&b.trigger("click")}})};c["default"]={init:f}},{}],8:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d=function(){window.jQuery("body").on("click",".notification--block .notification__close",function(a){a.preventDefault(),window.jQuery(this).parent().parent().slideUp({complete:function(){window.jQuery(this).remove()}})})},e=function(a){var b='<div class="notification notification--block notification--'+a.type+'"><div class="notification--block__inner-container"><figure class="notification__icon">';return"undefined"!=typeof a.icon&&a.icon.type?"font"===a.icon.type?b+='<span class="icon icon--'+a.icon.src+'"></span>':"image"===a.icon.type&&(b+='<img src="'+a.icon.src+'" alt=""/>'):b+='<span class="icon icon--'+a.type+'"></span>',b+='</figure><a class="notification__close" href="#">X</a><div class="notification__body"><p>'+a.content+"</p></div></div></div></div>"},f=function(a){var b=this;this.options=a,this.defaults={type:"info",icon:{type:!1,src:!1},content:"",duration:!1,container:window.jQuery("body")},this.settings={},this.init=function(){window.jQuery.extend(!0,b.settings,b.defaults,b.options),b.notification=window.jQuery(e(b.settings)),b.show(),b.notification.on("click",".notification__close",function(a){a.preventDefault(),b.close()})},this.show=function(){b.notification.hide(),b.settings.container.prepend(b.notification),b.notification.slideDown(),b.settings.duration&&(b.timeoutId=window.setTimeout(function(){b.close.call(b)},b.settings.duration))},this.close=function(){b.notification.slideUp({complete:function(){this.remove()}}),b.settings.duration&&window.clearTimeout(b.timeoutId)},b.init()};c["default"]={init:d,block:f,buildNotification:e}},{}],9:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d=void 0,e=void 0,f=function(){d=new CustomEvent("js-reveal-animation-start"),e=new CustomEvent("js-reveal-animation-end"),window.jQuery(".js-reveal").each(function(){var a=window.jQuery(this);a.attr("data-reveal-open")||a.slideUp(0)}),window.jQuery(".js-reveal-cta").each(function(){var a=window.jQuery(this),b=window.jQuery(this);a.attr("data-reveal-open")?b.attr("data-reveal-cta-close-html",b.html()):b.attr("data-reveal-cta-open-html",b.html())}).on("click",function(a){a.preventDefault();var b=this,c=window.jQuery(this),d=c.attr("href"),e=window.jQuery(d),f=c.attr("data-reveal-group")||!1;if(e.is(":visible"))h(this);else if(f){for(var i=window.jQuery('.js-reveal-cta[data-reveal-group="'+f+'"]'),j=0,k=0;k<i.length;k++){var l=i[k],m=window.jQuery(window.jQuery(l).attr("href"));m.is(":visible")?h(l,function(){g(b)}):j++}j===i.length&&g(b)}else g(this)})},g=function(a,b){var c=window.jQuery(a),f=c.attr("href"),g=window.jQuery(f);if(g.is(".js-reveal")){var h=window.jQuery('.js-reveal-cta[href="'+f+'"]');a.dispatchEvent(d),g.slideDown({duration:250,complete:function(){g.addClass("js-reveal-open"),h.addClass("close"),h.each(function(){var a=window.jQuery(this);a.attr("data-reveal-cta-close-html")&&a.html(a.attr("data-reveal-cta-close-html"))}),"function"==typeof b&&b.call(void 0),a.dispatchEvent(e)}})}},h=function(a,b){var c=window.jQuery(a),f=c.attr("href"),g=window.jQuery(f);if(g.is(".js-reveal")){var h=window.jQuery('.js-reveal-cta[href="'+f+'"]');a.dispatchEvent(d),g.slideUp({duration:250,complete:function(){g.removeClass("js-reveal-open"),h.removeClass("close"),h.each(function(){var a=window.jQuery(this);a.attr("data-reveal-cta-open-html")&&a.html(a.attr("data-reveal-cta-open-html"))}),"function"==typeof b&&b.call(void 0),a.dispatchEvent(e)}})}},i=function(a,b){var c=window.jQuery(window.jQuery(a).attr("href")),d=c.is(":visible");d?h(a,b):g(a,b)};c["default"]={init:f,toggle:i,open:g,close:h}},{}],10:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d=function(){for(var a=document.querySelectorAll("img.js-svg"),b=function(b){var c=a[b],d=c.getAttribute("src").replace(/(.png)|(.gif)/,".svg"),e=new Image;e.src=d,e.onload=function(){c.setAttribute("src",d)}},c=0;c<a.length;c++)b(c)};c["default"]={init:d}},{}],11:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}var e=a("../bower-components/honeycomb/src/analytics/js/honeycomb.analytics.pingdom"),f=d(e),g=a("../bower-components/honeycomb/src/equalise/js/honeycomb.equalise"),h=d(g),i=a("../bower-components/honeycomb/src/document/js/honeycomb.document.location"),j=d(i),k=a("../bower-components/honeycomb/src/navigation/js/honeycomb.navigation.dropdown"),l=d(k),m=a("../bower-components/honeycomb/src/navigation/js/honeycomb.navigation.header"),n=d(m),o=a("../bower-components/honeycomb/src/notification/js/honeycomb.notification.block"),p=d(o),q=a("../bower-components/honeycomb/src/svg/js/honeycomb.svg"),r=d(q),s=a("../bower-components/honeycomb/src/reveal/js/honeycomb.reveal"),t=d(s),u=a("../bower-components/honeycomb/src/lightbox/js/honeycomb.lightbox"),v=d(u),w=a("./simple-talk/analytics.js"),x=d(w),y=a("./simple-talk/bookmarks.js"),z=d(y),A=a("./simple-talk/google-search.js"),B=d(A),C=a("./simple-talk/hubspot.js"),D=d(C),E=a("./simple-talk/read.js"),F=d(E),G=a("./simple-talk/videos.js"),H=d(G),I=a("./simple-talk/ratings.js"),J=d(I),K=a("./simple-talk/navigation.js"),L=d(K),M=a("./simple-talk/header.js"),N=d(M);f["default"].init(),h["default"].init({url:"//cdn.rd.gt/assets/INTERIM/assets/scripts/vendor/jquery.equalise.min.js"}),l["default"].init(),n["default"].init(),p["default"].init(),r["default"].init(),t["default"].init(),window.addEventListener("load",function(){v["default"].init({url:"//cdn.rd.gt/assets/INTERIM/assets/scripts/vendor/jquery.fancybox.pack.js"})}),window.addEventListener("load",function(){x["default"].init(),window.ST&&(window.ST.analytics={trackerId:x["default"].getTrackerId()})}),window.addEventListener("load",function(){z["default"].init(j["default"])}),window.addEventListener("load",function(){B["default"].init()}),window.addEventListener("load",function(){D["default"].init()}),window.addEventListener("load",function(){F["default"].startTracking()}),H["default"].init(),J["default"].init(),window.addEventListener("load",function(){L["default"].init()}),N["default"].init()},{"../bower-components/honeycomb/src/analytics/js/honeycomb.analytics.pingdom":1,"../bower-components/honeycomb/src/document/js/honeycomb.document.location":3,"../bower-components/honeycomb/src/equalise/js/honeycomb.equalise":4,"../bower-components/honeycomb/src/lightbox/js/honeycomb.lightbox":5,"../bower-components/honeycomb/src/navigation/js/honeycomb.navigation.dropdown":6,"../bower-components/honeycomb/src/navigation/js/honeycomb.navigation.header":7,"../bower-components/honeycomb/src/notification/js/honeycomb.notification.block":8,"../bower-components/honeycomb/src/reveal/js/honeycomb.reveal":9,"../bower-components/honeycomb/src/svg/js/honeycomb.svg":10,"./simple-talk/analytics.js":12,"./simple-talk/bookmarks.js":13,"./simple-talk/google-search.js":14,"./simple-talk/header.js":15,"./simple-talk/hubspot.js":16,"./simple-talk/navigation.js":17,"./simple-talk/ratings.js":18,"./simple-talk/read.js":19,"./simple-talk/videos.js":20}],12:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},e=$(".page-id-20401 form"),f="",g=function(){void 0!==("undefined"==typeof ga?"undefined":d(ga))&&(f=ga.getAll()[0].get("name")),k()},h=function(){return f},j=function(a){var b=a.find("input[type=checkbox]"),c={},d=void 0;for(i=0;i<b.length;i++)d="WP0iWal3XRl7637634pL0QAowg"===b[i].value?".NET newsletter":"Simple Talk",c[d]=b[i].checked?"subscribe":"unsubscribe";return c},k=function(){e.submit(function(){if(f){var a=j(e);for(var b in a)"subscribe"===a[b]&&ga(f+".send","event","subscription change",a[b],b+" - /account/sign-up")}})};c["default"]={init:g,getCheckboxStates:j,getTrackerId:h}},{}],13:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d=function(){var a=$(".cbxbookmark-category-list li:last-child");a.parent().prepend(a)},e=function(a){var b=a.getUrlParameterByName("cbxbmcatid"),c=$(".cbxbookmark-category-list li a");b?c.each(function(){var a=new RegExp("cbxbmcatid="+b+"$");this.href.match(a)&&$(this).parent().addClass("active")}):$(".cbxbookmark-category-list li:first-of-type").addClass("active")},f=function(){$(".account__bookmarks").css("visibility","inherit")},g=function(a){1===window.location.pathname.indexOf("simple-talk/account")&&(d(),e(a),f())};c["default"]={init:g}},{}],14:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(c,"__esModule",{value:!0});var e=a("../../bower-components/honeycomb/src/document/js/honeycomb.document.location"),f=d(e),g=function(){h()},h=function(){var a=f["default"].getUrlParameterByName("s");if(a){var b=$(".gsc-search-box");if(b.length>0){var c=$("input.gsc-input"),d=$(".gsc-search-button");c.focus(),c.val(a),d.trigger("click")}}};c["default"]={init:g}},{"../../bower-components/honeycomb/src/document/js/honeycomb.document.location":3}],15:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d=function(){var a=$('.nav-bar--dark a[href$="simple-talk/"]');a.parent().addClass("active")},e=function(){d()};c["default"]={init:e}},{}],16:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d=function(){e()},e=function(){!function(a,b,c,d){if(!a.getElementById(c)){var e=a.createElement(b),f=a.getElementsByTagName(b)[0];e.id=c,e.src="//js.hs-analytics.net/analytics/"+Math.ceil(new Date/d)*d+"/305265.js",f.parentNode.insertBefore(e,f)}}(document,"script","hs-analytics",3e5)};c["default"]={init:d}},{}],17:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},e=function(){$(".site-nav .nav-bar ul").on("scroll",function(){this.scrollLeft>0?$(this).addClass("scrolling"):$(this).removeClass("scrolling")})},f=function(){var a=document.querySelector(".header--primary");if(!a)return!1;var b=a.querySelectorAll("a");if(0===b.length)return!1;for(var c=0;c<b.length;c++)"Community Hub"===b[c].innerHTML&&(b[c].className=b[c].className+" active")},g=function(){var a=document.querySelectorAll(".nav-bar");if(0===a.length)return!1;var b=window.location.pathname.toLowerCase(),c=[b],e=[],f="";if(void 0===("undefined"==typeof b?"undefined":d(b)))return!1;".htm"===b.substr(b.length-4,4)?c.push(b.substr(0,b.length-4)):c.push(b+".htm");for(var g=0;g<a.length;g++){for(var h=a[g],i=h.querySelectorAll("a"),j=0;j<i.length;j++){var k=i[j],l=document.createElement("a");l.href=k.getAttribute("href");for(var m=0;m<c.length;m++)c[m].match(l.pathname)&&e.indexOf(l.pathname)==-1&&e.push(l.pathname)}if(e.length>0)for(var n=0;n<e.length;n++){var o=f.split("/").length,p=e[n].split("/").length;""===f.split("/")[f.split("/").length-1]&&o--,""===e[n].split("/")[e[n].split("/").length-1]&&p--,p>=o&&(f=e[n])}if(""!==f)for(var q=h.querySelectorAll('[href$="'+f+'"]'),r=0;r<q.length;r++)"LI"===q[r].parentElement.nodeName&&(q[r].parentElement.className=q[r].parentElement.className+" active")}},h=function(){$('a[href="https://www.red-gate.com/search"]').attr("href","https://www.red-gate.com/search?t=simpletalk")},i=function(){e(),f(),g(),h()};c["default"]={init:i}},{}],18:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d=wpOptions.siteurl,e=document.body.className.match(/[^postid-][0-9]+/),f=!!e&&e[0],g=function(){var a={action:"st_yasr_get_visitor_votes",post_id:f};$.post(d+"/wp-admin/admin-ajax.php",a,function(a){var b=JSON.parse(a)[0],c=b.sum_votes/b.number_of_votes;$(".rateit").rateit("value",c)})},h=function(){var a=void 0;$(".yasr_visitor_votes_stars_div").on("rated",function(){var b=$(this);if(a=b.rateit("value").toFixed(1),b.parent().addClass("yasr-hide-ratings"),a>1){var c={action:"st_yasr_send_visitor_rating",rating:a,post_id:f};$.post(d+"/wp-admin/admin-ajax.php",c)}}),$(document).ajaxComplete(function(b,c,e){if(e.data.indexOf("action=yasr_send_visitor_rating")!==-1){var g={action:"st_yasr_get_visitor_votes",post_id:f};$.post(d+"/wp-admin/admin-ajax.php",g,function(b){var c=JSON.parse(b)[0];c.number_of_votes+=parseInt(c.number_of_votes)+1,c.sum_votes+=parseInt(c.sum_votes)+a;var d=c.sum_votes/c.number_of_votes;$(".rateit").rateit("value",d),$(".yasr-visitor-votes").removeClass("yasr-hide-ratings")})}})},i=function(){$("body").hasClass("single")&&(g(),h())};c["default"]={init:i}},{}],19:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d=function(a){var b=document.createElement("a");return b.href=a,b},e=d(window.location.href).pathname,f=localStorage.getItem(e)?parseInt(localStorage.getItem(e)):0,g=!1,h=function j(a){var b=2e3,c=document.body,f=document.documentElement,h=Math.max(c.scrollHeight,c.offsetHeight,f.clientHeight,f.scrollHeight,f.offsetHeight),i=(document.getElementsByTagName("body")[0]?"body":"html",document.querySelector(".article__content")?document.querySelector(".article__content").innerHTML:"");i=i.replace(/<!--[\s\S]*?-->/g,""),i=i.replace(/<(script|noscript|style|form|header|footer|nav)[\s\S]*?\>.*?<\/(script|noscript|style|form|header|footer|nav)\>/g,""),i=i.replace(/<.*?\>/g,""),i=i.replace(/\&nbsp\;/g," "),i=i.replace(/\s+/g," ");var k=i.split(" ").length/330,l=d(window.location.href).pathname+"?read=true",m=window,n=document,o=n.documentElement,p=n.getElementsByTagName("body")[0],q=(m.innerWidth||o.clientWidth||p.clientWidth,m.innerHeight||o.clientHeight||p.clientHeight),r=void 0;window.onblur=function(){r&&(clearInterval(r),r=null)},window.onfocus=function(){j(a)},window.onbeforeunload=function(){try{localStorage.setItem(e,a)}catch(b){console.log("Storage failed: "+b)}},g||(r=setInterval(function(){a=parseInt(a)+parseInt(b);var c=document.body.scrollTop||document.documentElement.scrollTop||window.scrollY,d=document.querySelector("[id^=discussion],[id=shareBottom],#comments,#commentarea,[name=comments],[class^=comment_form],[class^=entry-comments],.FBComments,fb\\:comments,div[id^=coment],#forum,[id^=disqus_thread],#related-content,#RelatedPostsContainer,.post-latest,#notas-rel,div[class=post-footer],div[class=morearticles],footer"),f=parseInt(h);if(d&&(f=parseInt(d.offsetTop)-parseInt(q)),a/6e4>=.75*parseInt(k)&&c>=.85*f){"ga"in window?(ga("send","pageview",l),ga("send","event","read","read",l)):"_gaq"in window&&(_gaq.push(["_trackPageview",l]),_gaq.push(["_trackEvent","read","read",l])),clearInterval(r),r=null,g=!0;try{localStorage.setItem(e,0)}catch(i){console.log("Storage failed: "+i)}}},b))},i=function(){document.hasFocus()?h(f):window.onfocus=function(){h(f)}};c["default"]={startTracking:i}},{}],20:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d=function(){e()},e=function(){$('iframe[src*="youtube.com"]').wrap('<div class="video-wrapper" />')};c["default"]={init:d}},{}]},{},[11]);
//# sourceMappingURL=script.min.js.map