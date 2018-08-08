if (self.CavalryLogger) { CavalryLogger.start_js(["QJDjM"]); }

__d("UFIRange",[],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(){var i=arguments.length<=0||arguments[0]===undefined?0:arguments[0],j=arguments.length<=1||arguments[1]===undefined?0:arguments[1];this.offset=i;this.length=j;this.requestedOffset=this.offset;this.requestedLength=this.length}h.prototype.getOffset=function(){return this.offset};h.prototype.getLength=function(){return this.length};h.prototype.getRequestedOffset=function(){return this.requestedOffset};h.prototype.getRequestedLength=function(){return this.requestedLength};h.prototype.updateRequestedRange=function(i,j){this.requestedOffset=i;this.requestedLength=j;return this};h.prototype.isLoadingNext=function(){var i=this.requestedOffset+this.requestedLength,j=this.offset+this.length;return i>j};h.prototype.isLoadingPrev=function(){return this.requestedOffset<this.offset};h.combine=function(i,j){if(!j)return i;var k=Math.min(i.getOffset(),j.getOffset()),l=Math.max(i.getLength(),j.getLength()),m=new h(k,l);if(j.getRequestedLength()>0){var n=Math.min(k,j.getRequestedOffset()),o=Math.max(k+l,j.getRequestedOffset()+j.getRequestedLength());m.updateRequestedRange(n,o-n)}return m};f.exports=h}),null);
__d("UFIInstanceActionType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({CHANGE_ORDER_MODE:"story_change_order_mode",CHANGE_VISIBILITY:"story_change_visibility",INIT:"instance_init",PLAY_LIVE_VOD_HIGHLIGHTS:"play_live_vod_highlights",RECEIVED_VOD_COMMENTS:"received_vod_comments",REMOVE:"story_remove",REQUESTED_VOD_COMMENTS:"requested_vod_comments",TOGGLE_COMMENTS:"story_toggle_comments",TOGGLE_COMMERCIAL_BREAK:"story_toggle_commercial_break",TRANSLATE_ALL:"translate_all"})}),null);
__d("UFIFeedbackStore",["FluxReduceStore","UFIDispatcherBase","UFIInstanceActionType"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;h=babelHelpers.inherits(j,c("FluxReduceStore"));i=h&&h.prototype;j.prototype.getInitialState=function(){return{}};j.prototype.reduce=function(k,l){var m;switch(l.type){case c("UFIInstanceActionType").INIT:var n=l.payload,o=n.feedbacktarget?n.feedbacktarget:n.feedbacktargets&&n.feedbacktargets[0];if(!o)return k;return babelHelpers["extends"]({},k,(m={},m[l.ftentidentifier]=babelHelpers["extends"]({orderingmodes:[],defaultcommentorderingmode:""},o),m))}return k};function j(){h.apply(this,arguments)}f.exports=new j(c("UFIDispatcherBase"))}),null);
__d("WebCommentViewOption",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({CHRONOLOGICAL:"chronological",RANKED_THREADED:"ranked_threaded",TOPLEVEL:"toplevel",RECENT_ACTIVITY:"recent_activity",FEATURED:"featured",FILTERED:"filtered",LIVE_STREAMING:"live_streaming"})}),null);
__d("UFIOrderingModeStore",["invariant","FluxReduceStore","Map","UFIDispatcherBase","UFIFeedbackStore","UFIInstanceActionType","WebCommentViewOption"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j;function k(m,n){return m.filter(function(o){return o.selected}).map(function(o){return o.value}).pop()||n}i=babelHelpers.inherits(l,c("FluxReduceStore"));j=i&&i.prototype;l.prototype.getInitialState=function(){return new(c("Map"))()};l.prototype.areEqual=function(m,n){return m===n};l.prototype.isLiveStreaming=function(m){return this.getState().get(m)==c("WebCommentViewOption").LIVE_STREAMING};l.prototype.isInverted=function(m){switch(m){case c("WebCommentViewOption").RECENT_ACTIVITY:case c("WebCommentViewOption").RANKED_THREADED:case c("WebCommentViewOption").FILTERED:case c("WebCommentViewOption").LIVE_STREAMING:return true}return false};l.prototype.getOrderingMode=function(m){var n=this.getState().get(m);n!==undefined||h(0);return n};l.prototype.reduce=function(m,n){__p&&__p();switch(n.type){case c("UFIInstanceActionType").INIT:if(m.has(n.instanceID))return m;c("UFIDispatcherBase").waitFor([c("UFIFeedbackStore").getDispatchToken()]);var o=c("UFIFeedbackStore").getState()[n.ftentidentifier];m=new(c("Map"))(m);return m.set(n.instanceID,k(o.orderingmodes,o.defaultcommentorderingmode));case c("UFIInstanceActionType").CHANGE_ORDER_MODE:if(!m.has(n.instanceID)||m.get(n.instanceID)!==n.mode){m=new(c("Map"))(m);m.set(n.instanceID,n.mode)}return m}return m};function l(){i.apply(this,arguments)}f.exports=new l(c("UFIDispatcherBase"))}),null);
__d("NumberFormat",["intlNumUtils","NumberFormatConfig"],(function a(b,c,d,e,f,g){__p&&__p();var h=/(\d{3})(?=\d)/g;function i(l){return(""+l).split("").reverse().join("")}function j(l,m){if(Math.abs(l).toString().length<c("NumberFormatConfig").minDigitsForThousandsSeparator)return l.toString();var n=i(""+l);return i(n.replace(h,"$1"+m))}var k={formatIntegerWithDelimiter:j,formatInteger:function l(m){if(c("NumberFormatConfig").switchImplementationGK)return c("intlNumUtils").formatNumberWithThousandDelimiters(m);return j(m,c("NumberFormatConfig").numberDelimiter)},getOrdinalSuffix:function l(m){var n=m%10,o=m%100;if(n==1&&o!=11)return"st";if(n==2&&o!=12)return"nd";if(n==3&&o!=13)return"rd";return"th"}};f.exports=k}),null);
__d("UFIPager.react",["cx","LeftRight.react","React","SutroPhase2GatingConfig","UFIImageBlock.react","XUISpinner.react","joinClasses"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j;i=babelHelpers.inherits(k,c("React").Component);j=i&&i.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=j.constructor).call.apply(l,[this].concat(o)),this.onPagerClick=function(q){!this.props.isLoading&&this.props.onPagerClick&&this.props.onPagerClick();q.nativeEvent.prevent()}.bind(this),m}k.prototype.render=function(){var l=this.onPagerClick,m=c("SutroPhase2GatingConfig").enabled_bling_above_ufi,n=c("joinClasses")("UFIRow"+(this.props.isUnseen?" UFIUnseenItem":"")+" UFIPagerRow _4oep"+(this.props.isFirstCommentComponent?" _48pi":"")+(this.props.isLastCommentComponent?" UFILastCommentComponent":"")+(this.props.isFirstComponent||m&&this.props.isFirstCommentComponent?" _4204":"")+(this.props.isLastComponent?" _2o9m":"")),o=null;if(this.props.isLoading)o=c("React").createElement(c("XUISpinner.react"),{className:"mls",background:"light",size:"small"});var p=c("React").createElement("a",{className:"UFIPagerLink",onClick:l,href:"#",role:"button"},this.props.pagerLabel,o),q="fcg UFIPagerCount",r=m&&c("React").createElement("span",{className:q},this.props.countSentence),s=void 0;if(this.props.contextArgs.entstream||!this.props.isReply)s=c("React").createElement(c("LeftRight.react"),{direction:c("LeftRight.react").DIRECTION.right},p,r);else s=c("React").createElement(c("UFIImageBlock.react"),null,c("React").createElement("a",{className:"UFIPagerIcon",onClick:l,href:"#",role:"button"}),p,r);return c("React").createElement("div",{className:n,"data-ft":this.props["data-ft"]},s)};f.exports=k}),null);
__d("UFIPagerLabel",["fbt","NumberFormat","intlList"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();function i(k){return c("NumberFormat").formatInteger(k.count)}var j={VIEW_ONE:"view_one",VIEW_ONE_MORE:"view_one_more",VIEW_ALL:"view_all",VIEW_MORE_EXPLICIT:"view_more_explicit",VIEW_MORE:"view_more",VIEW_PREVIOUS:"view_previous",VIEW_PREVIOUS_EXPLICIT:"view_previous_explicit",_getReplyLabel:function k(l,m){switch(l){case j.VIEW_ONE:return h._("View 1 reply");case j.VIEW_ONE_MORE:return h._("View 1 more reply");case j.VIEW_ALL:return h._({"*":"View all {count} replies"},[h.param("count",i(m),[0,m.count])]);case j.VIEW_MORE_EXPLICIT:return h._({"*":{"*":"View {count} more replies","_1":"View {count} more reply"}},[h.param("count",i(m),[0,m.count]),h.plural(m.count)]);case j.VIEW_MORE:return h._("View more replies");case j.VIEW_PREVIOUS:return h._("View previous replies");case j.VIEW_PREVIOUS_EXPLICIT:return h._({"*":{"*":"View {count} previous replies","_1":"View {count} previous reply"}},[h.param("count",i(m),[0,m.count]),h.plural(m.count)]);default:return null}},_getCommentLabel:function k(l,m){switch(l){case j.VIEW_ONE:return h._("View 1 comment");case j.VIEW_ONE_MORE:return h._("View 1 more comment");case j.VIEW_ALL:return h._({"*":"View all {count} comments"},[h.param("count",i(m),[0,m.count])]);case j.VIEW_MORE_EXPLICIT:return h._({"*":{"*":"View {count} more comments","_1":"View {count} more comment"}},[h.param("count",i(m),[0,m.count]),h.plural(m.count)]);case j.VIEW_MORE:return h._("View more comments");case j.VIEW_PREVIOUS_EXPLICIT:return h._({"*":{"*":"View {count} previous comments","_1":"View {count} previous comment"}},[h.param("count",i(m),[0,m.count]),h.plural(m.count)]);case j.VIEW_PREVIOUS:return h._("View previous comments");default:return null}},_getCommentLabelWithCommentSentence:function k(l,m){__p&&__p();var n=c("intlList")(m.commenters),o=m.othersCount,p=c("NumberFormat").formatInteger(o);switch(l){case j.VIEW_ONE:return h._("View 1 comment from {names}",[h.param("names",n)]);case j.VIEW_ONE_MORE:return h._("View 1 more comment from {names}",[h.param("names",n)]);case j.VIEW_ALL:switch(o){case 0:return h._({"*":"View all {count} comments from {names}"},[h.param("count",i(m),[0,m.count]),h.param("names",n)]);case 1:return h._({"*":"View all {count} comments from {names} and 1 other person"},[h.param("count",i(m),[0,m.count]),h.param("names",n)]);default:return h._({"*":{"*":"View all {count} comments from {names} and {othersCount} others"}},[h.param("count",i(m),[0,m.count]),h.param("names",n),h.param("othersCount",p,[0,o])])}case j.VIEW_MORE_EXPLICIT:case j.VIEW_MORE:switch(o){case 0:return h._("View more comments from {names}",[h.param("names",n)]);case 1:return h._("View more comments from {names} and 1 other person",[h.param("names",n)]);default:return h._({"*":"View more comments from {names} and {othersCount} others"},[h.param("names",n),h.param("othersCount",p,[0,o])])}case j.VIEW_PREVIOUS:case j.VIEW_PREVIOUS_EXPLICIT:switch(o){case 0:return h._("View previous comments from {names}",[h.param("names",n)]);case 1:return h._("View previous comments from {names} and 1 other person",[h.param("names",n)]);default:return h._({"*":"View previous comments from {names} and {othersCount} others"},[h.param("names",n),h.param("othersCount",p,[0,o])])}default:return null}},_getQuestionLabel:function k(l,m){switch(l){case j.VIEW_ONE:return h._("View 1 question");case j.VIEW_ONE_MORE:return h._("View 1 more question");case j.VIEW_ALL:return h._({"*":"View all {count} questions"},[h.param("count",i(m),[0,m.count])]);case j.VIEW_MORE_EXPLICIT:return h._({"*":{"*":"View {count} more questions","_1":"View {count} more question"}},[h.param("count",i(m),[0,m.count]),h.plural(m.count)]);case j.VIEW_MORE:return h._("View more questions");case j.VIEW_PREVIOUS:return h._("View previous questions");case j.VIEW_PREVIOUS_EXPLICIT:return h._({"*":{"*":"View {count} previous questions","_1":"View {count} previous question"}},[h.param("count",i(m),[0,m.count]),h.plural(m.count)]);default:return null}},_getAnswerLabel:function k(l,m){switch(l){case j.VIEW_ONE:return h._("View 1 answer");case j.VIEW_ONE_MORE:return h._("View 1 more answer");case j.VIEW_ALL:return h._({"*":"View all {count} answers"},[h.param("count",i(m),[0,m.count])]);case j.VIEW_MORE_EXPLICIT:return h._({"*":{"*":"View {count} more answers","_1":"View {count} more answer"}},[h.param("count",i(m),[0,m.count]),h.plural(m.count)]);case j.VIEW_MORE:return h._("View more answers");case j.VIEW_PREVIOUS_EXPLICIT:return h._({"*":{"*":"View {count} previous answers","_1":"View {count} previous answer"}},[h.param("count",i(m),[0,m.count]),h.plural(m.count)]);case j.VIEW_PREVIOUS:return h._("View previous answers");default:return null}},getLabel:function k(l,m,n,o,p){__p&&__p();if(m)return j._getReplyLabel(l,p);else if(n)return j._getQuestionLabel(l,p);else if(o)return j._getAnswerLabel(l,p);else{if(p.commenters)return this._getCommentLabelWithCommentSentence(l,p);return j._getCommentLabel(l,p)}}};f.exports=j}),null);
__d("UFIPagerGenerator",["fbt","NumberFormat","React","TrackingNodes","UFIConstants","UFIOrderingModeStore","UFIPager.react","UFIPagerLabel","UFIRange"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=c("UFIConstants").UFIPaging,j={isBottomPager:function k(l,m){return c("UFIOrderingModeStore").isInverted(m)&&!l},needsStartOfRangePager:function k(l){return l>0},renderPagers:function k(l){__p&&__p();var m,n,o,p=l.commentCount,q=l.contextArgs,r=l.currentLength,s=l.currentOffset,t=l.deletedCount,u=l.feedback,v=l.onPageCallback,w=l.orderingMode,x=l.range,y=l.targetID,z=p-t,A=r-t,B=y!==q.ftentidentifier,C=this.isBottomPager(B,w),D={topPager:null,bottomPager:null},E=false;if(q.isaskquestion)E=q.isaskquestion;var F=x.isLoadingPrev(),G=x.isLoadingNext(),H={count:0},I=u.commentsentenceinfo;if(I){H.commenters=I.explicit_commenter_names;H.othersCount=I.other_commenter_count}var J=s+r==p;if(p<q.pagesize&&J||A===0){var m=function(){__p&&__p();var M=Math.min(p,q.pagesize),N=function N(){return v(C?i.BOTTOM:i.TOP,new(c("UFIRange"))(p-M,M))},O=void 0;if(A===0)if(z==1)O=c("UFIPagerLabel").VIEW_ONE;else{H.count=z;O=c("UFIPagerLabel").VIEW_ALL}else if(z-A==1)O=c("UFIPagerLabel").VIEW_ONE_MORE;else{O=c("UFIPagerLabel").VIEW_MORE_EXPLICIT;H.count=z-A}var P=c("TrackingNodes").getTrackingInfo(c("TrackingNodes").types.VIEW_ALL_COMMENTS),Q=c("UFIPagerLabel").getLabel(O,B,Boolean(u.isqanda),Boolean(E),H),R=c("React").createElement(c("UFIPager.react"),{key:"allPager"+y,ref:C?"topLevelBottomPager":null,contextArgs:q,isUnseen:u.hasunseencollapsed,isLoading:C?G:F,isReply:B,pagerLabel:Q,onPagerClick:N,"data-ft":P});if(C)D.bottomPager=R;else D.topPager=R;return{v:D}}();if(typeof m==="object")return m.v}var K=c("UFIPagerLabel").getLabel(c("UFIPagerLabel").VIEW_MORE,B,Boolean(u.isqanda),Boolean(E),H),L=c("UFIPagerLabel").getLabel(c("UFIPagerLabel").VIEW_PREVIOUS,B,Boolean(u.isqanda),Boolean(E),H);if(this.needsStartOfRangePager(s))(function(){__p&&__p();var M=Math.max(s-q.pagesize,0),N=s+r-M,O=void 0;if(!B||A>1){var P=c("NumberFormat").formatInteger(A),Q=c("NumberFormat").formatInteger(z);O=h._("{countshown} of {totalcount}",[h.param("countshown",P),h.param("totalcount",Q)])}var R=function R(){return v(C?i.BOTTOM:i.TOP,new(c("UFIRange"))(M,N))};if(C)D.bottomPager=c("React").createElement(c("UFIPager.react"),{key:"bottomPager"+y,ref:!B?"topLevelBottomPager":null,contextArgs:q,isLoading:F,isReply:B,pagerLabel:K,onPagerClick:R,countSentence:O});else D.topPager=c("React").createElement(c("UFIPager.react"),{key:"topPager"+y,contextArgs:q,isLoading:F,isReply:B,pagerLabel:L,onPagerClick:R,countSentence:O})})();if(s+r<p)(function(){var M=Math.min(r+q.pagesize,p-s),N=function N(){return v(C?i.TOP:i.BOTTOM,new(c("UFIRange"))(s,M))};if(C)D.topPager=c("React").createElement(c("UFIPager.react"),{key:"topPager"+y,contextArgs:q,isLoading:G,isReply:B,pagerLabel:L,onPagerClick:N});else D.bottomPager=c("React").createElement(c("UFIPager.react"),{key:"bottomPager",ref:!B?"topLevelBottomPager":null,contextArgs:q,isLoading:G,isReply:B,pagerLabel:K,onPagerClick:N})})();return D}};f.exports=j}),null);
__d("distinctArrayBy",["Set"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(j){return j}function i(j){__p&&__p();var k=arguments.length<=1||arguments[1]===undefined?h:arguments[1],l=[],m=new(c("Set"))();for(var n=j,o=Array.isArray(n),p=0,n=o?n:n[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var q;if(o){if(p>=n.length)break;q=n[p++]}else{p=n.next();if(p.done)break;q=p.value}var r=q,s=k(r);if(!m.has(s)){m.add(s);l.push(r)}}return l}f.exports=i}),null);
__d("UFICommentFilterFallbackWarning.react",["cx","fbt","React","UFIPagerGenerator","UFIPaging","WebCommentViewOption","distinctArrayBy"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k;function l(n,o,p){var q=o.availableComments,r=o.repliesMap,s=void 0;if(p)s=r[n]||[];else s=q||[];s=c("distinctArrayBy")(s,function(t){return t.id});return s.length}j=babelHelpers.inherits(m,c("React").Component);k=j&&j.prototype;m.shouldRender=function(n,o,p,q){__p&&__p();if(!n)return false;var r=n.availableComments,s=n.commentCounts,t=n.deletedCounts,u=n.hasPagedToplevel,v=n.orderingMode,w=n.ranges,x=n.repliesExpandedMap,y=n.repliesMap;if(!r||!s||!t||!v||!w||!x||!y)return false;var z=Math.max((s[o]||0)-(t[o]||0),0),A=w[o];if(!A||!z||v!==c("WebCommentViewOption").FILTERED||q&&!x[o]||!q&&!u)return false;var B=l(o,n,q),C=A.isLoadingPrev(),D=A.isLoadingNext(),E=A.getOffset(),F=A.getLength(),G=c("UFIPagerGenerator").isBottomPager(q,v),H=Math.min(F,z);if(p===c("UFIPaging").ALL)return!C&&!D&&E===0&&F>=z&&B<H;else if(!G&&p===c("UFIPaging").TOP||G&&p===c("UFIPaging").BOTTOM)return!C&&E===0&&B<H;else if(!G&&p===c("UFIPaging").BOTTOM||G&&p===c("UFIPaging").TOP)return!D&&E+F>=z&&B<H;return false};m.prototype.$UFICommentFilterFallbackWarning1=function(){var n=this.props,o=n.asReplyWarning,p=n.ufiProps,q=p||{},r=q.feedback,s=q.orderingMode,t=r&&r.orderingmodes||[],u=t.find(function(w){return w&&w.value===s}),v=u&&u.name;if(o)if(v)return i._("{ordering mode name} is selected, so some replies may have been filtered out.",[i.param("ordering mode name",v)]);else return i._("Some replies may have been filtered out by the selected ordering mode.");else if(v)return i._("{ordering mode name} is selected, so some comments may have been filtered out.",[i.param("ordering mode name",v)]);else return i._("Some comments may have been filtered out by the selected ordering mode.")};m.prototype.render=function(){var n=this.props,o=n.ufiProps,p=n.targetID,q=n.pagingDirection,r=n.asReplyWarning;if(!this.constructor.shouldRender(o,p,q,r))return null;return c("React").createElement("div",{className:"_2ah8 _4oep UFIRow"},c("React").createElement("div",{className:"_2ah9"},this.$UFICommentFilterFallbackWarning1()))};function m(){j.apply(this,arguments)}f.exports=m}),null);