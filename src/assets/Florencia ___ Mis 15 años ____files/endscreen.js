(function(g){var window=this;'use strict';var $5a=function(a,b){a.Oa("onAutonavCoundownStarted",b)},l6=function(a,b,c){g.ro(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.Gf(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.aH&&(b.lengthText?(e=b.lengthText||null,f=b.xt||null):b.lengthSeconds&&(e=g.mM(b.lengthSeconds),f=g.mM(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.ZG(d).type;var l=b instanceof g.aH?b.isLivePlayback:null,m=b instanceof g.aH?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,r=[],w=[];n&&r.push(n);p&&(r.push(p),w.push(p));q&&w.push(q);c={title:b.title,author:n,author_and_views:r.join(" \u2022 "),aria_label:b.ariaLabel||
g.QJ("Ver $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.cn(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:w.join(" \u2022 "),autoplayAlternativeHeader:b.Np};b instanceof g.$G&&(c.playlist_length=b.playlistLength);a.update(c)},m6=function(a){var b=a.V(),c=b.B;
g.X.call(this,{D:"a",K:"ytp-autonav-suggestion-card",X:{href:"{{url}}",target:c?b.S:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},W:[{D:"div",Ga:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],X:{style:"{{background}}"},W:[{D:"div",X:{"aria-label":"{{timestamp}}"},Ga:["ytp-autonav-timestamp"],qa:"{{duration}}"},{D:"div",Ga:["ytp-autonav-live-stamp"],qa:"En directo"},
{D:"div",Ga:["ytp-autonav-upcoming-stamp"],qa:"Pr\u00f3ximamente"},{D:"div",K:"ytp-autonav-list-overlay",W:[{D:"div",K:"ytp-autonav-mix-text",qa:"Mix"},{D:"div",K:"ytp-autonav-mix-icon"}]}]},{D:"div",Ga:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],qa:"{{title}}"},{D:"div",Ga:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],qa:"{{author}}"},{D:"div",Ga:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],qa:"{{views_and_publish_time}}"}]});this.G=
a;this.suggestion=null;this.j=c;this.Qa("click",this.onClick);this.Qa("keypress",this.onKeyPress)},n6=function(a,b){b=void 0===b?!1:b;
g.X.call(this,{D:"div",K:"ytp-autonav-endscreen-countdown-overlay"});var c=this;this.I=b;this.F=void 0;this.B=0;this.container=new g.X({D:"div",K:"ytp-autonav-endscreen-countdown-container"});g.N(this,this.container);this.container.Da(this.element);b=a.V();var d=b.B;this.G=a;this.suggestion=null;this.onVideoDataChange("newdata",this.G.getVideoData());this.T(a,"videodatachange",this.onVideoDataChange);var e=["ytp-autonav-endscreen-upnext-thumbnail"];b.N("web_rounded_thumbnails")&&e.push("rounded-thumbnail");
this.j=new g.X({D:"div",K:"ytp-autonav-endscreen-upnext-container",X:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},W:[{D:"div",K:"ytp-autonav-endscreen-upnext-header"},{D:"div",K:"ytp-autonav-endscreen-upnext-alternative-header",qa:"{{autoplayAlternativeHeader}}"},{D:"a",K:"ytp-autonav-endscreen-link-container",X:{href:"{{url}}",target:d?b.S:""},W:[{D:"div",Ga:e,X:{style:"{{background}}"},W:[{D:"div",
X:{"aria-label":"{{timestamp}}"},Ga:["ytp-autonav-timestamp"],qa:"{{duration}}"},{D:"div",Ga:["ytp-autonav-live-stamp"],qa:"En directo"},{D:"div",Ga:["ytp-autonav-upcoming-stamp"],qa:"Pr\u00f3ximamente"}]},{D:"div",K:"ytp-autonav-endscreen-video-info",W:[{D:"div",K:"ytp-autonav-endscreen-premium-badge"},{D:"div",K:"ytp-autonav-endscreen-upnext-title",qa:"{{title}}"},{D:"div",K:"ytp-autonav-endscreen-upnext-author",qa:"{{author}}"},{D:"div",K:"ytp-autonav-view-and-date",qa:"{{views_and_publish_time}}"},
{D:"div",K:"ytp-autonav-author-and-view",qa:"{{author_and_views}}"}]}]}]});g.N(this,this.j);this.j.Da(this.container.element);d||this.T(this.j.Ca("ytp-autonav-endscreen-link-container"),"click",this.cN);this.G.vb(this.container.element,this,115127);this.G.vb(this.j.Ca("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.X({D:"div",K:"ytp-autonav-overlay"});g.N(this,this.overlay);this.overlay.Da(this.container.element);this.u=new g.X({D:"div",K:"ytp-autonav-endscreen-button-container"});
g.N(this,this.u);this.u.Da(this.container.element);this.cancelButton=new g.X({D:"button",Ga:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.N("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{"aria-label":"Cancelar reproducci\u00f3n autom\u00e1tica"},qa:"Cancelar"});g.N(this,this.cancelButton);this.cancelButton.Da(this.u.element);this.cancelButton.Qa("click",this.AV,this);this.G.vb(this.cancelButton.element,this,115129);this.playButton=
new g.X({D:"a",Ga:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button",b.N("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{href:"{{url}}",role:"button","aria-label":"Reproducir siguiente v\u00eddeo"},qa:"Ver ahora"});g.N(this,this.playButton);this.playButton.Da(this.u.element);this.playButton.Qa("click",this.cN,this);this.G.vb(this.playButton.element,this,115130);this.C=new g.fo(function(){a6a(c)},500);
g.N(this,this.C);this.bN();this.T(a,"autonavvisibility",this.bN);this.G.N("web_autonav_color_transition")&&(this.T(a,"autonavchange",this.zV),this.T(a,"onAutonavCoundownStarted",this.Y1))},o6=function(a){var b=a.G.Hk(!0,a.G.isFullscreen());
g.ro(a.container.element,"ytp-autonav-endscreen-small-mode",a.Og(b));g.ro(a.container.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.lF);g.ro(a.G.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.G.lf());g.ro(a.G.getRootNode(),"countdown-running",a.Fj());g.ro(a.container.element,"ytp-player-content",a.G.lf());g.Gl(a.overlay.element,{width:b.width+"px"});if(!a.Fj()){a.G.lf()?b6a(a,Math.round(c6a(a)/1E3)):b6a(a);b=!!a.suggestion&&!!a.suggestion.Np;var c=a.G.lf()||!b;
g.ro(a.container.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!c&&b);g.ro(a.container.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.lL(a.u,a.G.lf());g.ro(a.element,"ytp-enable-w2w-color-transitions",d6a(a))}},a6a=function(a){var b=c6a(a),c=Math,d=c.min;
var e=a.B?Date.now()-a.B:0;c=d.call(c,e,b);b6a(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Fj()?a.select(!0):a.Fj()&&a.C.start()},c6a=function(a){if(a.G.isFullscreen()){var b;
a=null==(b=a.G.getVideoData())?void 0:b.zM;return-1===a||void 0===a?8E3:a}return 0<=a.G.hq()?a.G.hq():g.bF(a.G.V().experiments,"autoplay_time")||1E4},d6a=function(a){var b;
return!(null==(b=a.G.getVideoData())||!b.watchToWatchTransitionRenderer)},b6a=function(a,b){b=void 0===b?-1:b;
a=a.j.Ca("ytp-autonav-endscreen-upnext-header");g.rh(a);if(0<=b){b=String(b);var c="A continuaci\u00f3n en $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="A continuaci\u00f3n en $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.qh("A continuaci\u00f3n en $SECONDS".slice(0,d)));var e=g.ph("span");g.lo(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.wh(e,b);a.appendChild(e);a.appendChild(g.qh("A continuaci\u00f3n en $SECONDS".slice(d+c.length)));return}}g.wh(a,"Siguiente")},p6=function(a,b){g.X.call(this,
{D:"div",
Ga:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},q6=function(a){g.X.call(this,{D:"div",
Ga:["ytp-upnext","ytp-player-content"],X:{"aria-label":"{{aria_label}}"},W:[{D:"div",K:"ytp-cued-thumbnail-overlay-image",X:{style:"{{background}}"}},{D:"span",K:"ytp-upnext-top",W:[{D:"span",K:"ytp-upnext-header",qa:"Siguiente"},{D:"span",K:"ytp-upnext-title",qa:"{{title}}"},{D:"span",K:"ytp-upnext-author",qa:"{{author}}"}]},{D:"a",K:"ytp-upnext-autoplay-icon",X:{role:"button",href:"{{url}}","aria-label":"Reproducir siguiente v\u00eddeo"},W:[{D:"svg",X:{height:"100%",version:"1.1",viewBox:"0 0 72 72",
width:"100%"},W:[{D:"circle",K:"ytp-svg-autoplay-circle",X:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{D:"circle",K:"ytp-svg-autoplay-ring",X:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{D:"path",K:"ytp-svg-fill",X:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{D:"span",K:"ytp-upnext-bottom",W:[{D:"span",K:"ytp-upnext-cancel"},{D:"span",K:"ytp-upnext-paused",
qa:"La reproducci\u00f3n autom\u00e1tica est\u00e1 en pausa"}]}]});this.api=a;this.cancelButton=null;this.F=this.Ca("ytp-svg-autoplay-ring");this.B=this.notification=this.j=this.suggestion=null;this.C=new g.fo(this.AC,5E3,this);this.u=0;var b=this.Ca("ytp-upnext-cancel");this.cancelButton=new g.X({D:"button",Ga:["ytp-upnext-cancel-button","ytp-button"],X:{tabindex:"0","aria-label":"Cancelar reproducci\u00f3n autom\u00e1tica"},qa:"Cancelar"});g.N(this,this.cancelButton);this.cancelButton.Qa("click",
this.BV,this);this.cancelButton.Da(b);this.cancelButton&&this.api.vb(this.cancelButton.element,this,115129);g.N(this,this.C);this.api.vb(this.element,this,18788);b=this.Ca("ytp-upnext-autoplay-icon");this.T(b,"click",this.CV);this.api.vb(b,this,115130);this.dN();this.T(a,"autonavvisibility",this.dN);this.T(a,"mdxnowautoplaying",this.T2);this.T(a,"mdxautoplaycanceled",this.U2);g.ro(this.element,"ytp-upnext-mobile",this.api.V().isMobile)},e6a=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.zM;return-1===a||void 0===a?8E3:a}return 0<=a.api.hq()?a.api.hq():g.bF(a.api.V().experiments,"autoplay_time")||1E4},f6a=function(a,b){b=e6a(a,b);
var c=Math,d=c.min;var e=(0,g.T)()-a.u;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.F.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Fj()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.Fj()&&a.j.start()},r6=function(a){p6.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.X({D:"div",K:"ytp-suggestion-panel",W:[{D:"div",Ga:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],qa:"M\u00e1s v\u00eddeos"}]});this.J=new g.X({D:"div",K:"ytp-suggestions-container"});this.videos=[];this.B=null;this.F=this.I=!1;this.u=new n6(this.player);g.N(this,this.u);this.u.Da(this.element);a.getVideoData().Te?this.j=this.u:(this.j=new q6(a),g.UN(this.player,this.j.element,4),g.N(this,this.j));this.overlay=new g.X({D:"div",
K:"ytp-autonav-overlay-cancelled-state"});g.N(this,this.overlay);this.overlay.Da(this.element);this.C=new g.cE(this);g.N(this,this.C);g.N(this,this.table);this.table.Da(this.element);this.table.show();g.N(this,this.J);this.J.Da(this.table.element);this.hide()},s6=function(a){var b=a.lf();
b!==a.F&&(a.F=b,a.player.ma("autonavvisibility"),a.F?(a.u!==a.j&&a.u.hide(),a.table.hide()):(a.u!==a.j&&a.u.show(),a.table.show()))},t6=function(a,b){g.X.call(this,{D:"button",
Ga:["ytp-watch-on-youtube-button","ytp-button"],X:{title:"{{message}}"},qa:"{{content}}"});this.G=a;this.buttonType=this.buttonType=b;switch(this.buttonType){case 1:a="Ver otra vez en YouTube";b=156915;break;case 2:a="Seguir reproduciendo en YouTube";b=156942;break;default:a="Seguir reproduciendo en YouTube",b=156942}this.update({message:a,content:a});this.G.vb(this.element,this,b);this.Qa("click",this.onClick);g.lL(this,!0)},u6=function(a,b){p6.call(this,a,"embeds-lite-endscreen");
this.G=a;this.j=b;this.G.vb(this.element,this,156943);this.watchButton=new t6(a,2);g.N(this,this.watchButton);this.watchButton.Da(this.element);this.hide()},g6a=function(a){p6.call(this,a,"subscribecard-endscreen");
this.j=new g.X({D:"div",K:"ytp-subscribe-card",W:[{D:"img",K:"ytp-author-image",X:{src:"{{profilePicture}}"}},{D:"div",K:"ytp-subscribe-card-right",W:[{D:"div",K:"ytp-author-name",qa:"{{author}}"},{D:"div",K:"html5-subscribe-button-container"}]}]});g.N(this,this.j);this.j.Da(this.element);var b=a.getVideoData();this.subscribeButton=new g.CP("Suscribirme",null,"Anular suscripci\u00f3n",null,!0,!1,b.dl,b.subscribed,"trailer-endscreen",null,null,a);g.N(this,this.subscribeButton);this.subscribeButton.Da(this.j.Ca("html5-subscribe-button-container"));
this.T(a,"videodatachange",this.Ja);this.Ja();this.hide()},v6=function(a){var b=a.V(),c=g.fE||g.SF?{style:"will-change: opacity"}:void 0,d=b.B,e=["ytp-videowall-still"];
b.isMobile&&e.push("ytp-videowall-show-text");g.X.call(this,{D:"a",Ga:e,X:{href:"{{url}}",target:d?b.S:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},W:[{D:"div",K:"ytp-videowall-still-image",X:{style:"{{background}}"}},{D:"span",K:"ytp-videowall-still-info",X:{"aria-hidden":"true"},W:[{D:"span",K:"ytp-videowall-still-info-bg",W:[{D:"span",K:"ytp-videowall-still-info-content",X:c,W:[{D:"span",K:"ytp-videowall-still-info-title",
qa:"{{title}}"},{D:"span",K:"ytp-videowall-still-info-author",qa:"{{author_and_views}}"},{D:"span",K:"ytp-videowall-still-info-live",qa:"En directo"},{D:"span",K:"ytp-videowall-still-info-duration",qa:"{{duration}}"}]}]}]},{D:"span",Ga:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},W:[{D:"span",K:"ytp-videowall-still-listlabel-icon"},"Lista de reproducci\u00f3n",{D:"span",K:"ytp-videowall-still-listlabel-length",W:[" (",{D:"span",qa:"{{playlist_length}}"},
")"]}]},{D:"span",Ga:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},W:[{D:"span",K:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{D:"span",K:"ytp-videowall-still-listlabel-length",qa:" (50+)"}]}]});this.suggestion=null;this.u=d;this.api=a;this.j=new g.cE(this);g.N(this,this.j);this.Qa("click",this.onClick);this.Qa("keypress",this.onKeyPress);this.j.T(a,"videodatachange",this.onVideoDataChange);a.Hg(this.element,this);this.onVideoDataChange()},w6=function(a){p6.call(this,
a,"videowall-endscreen");
var b=this;this.G=a;this.B=0;this.stills=[];this.C=this.videoData=null;this.F=this.J=!1;this.S=null;this.u=new g.cE(this);g.N(this,this.u);this.Z=a.N("web_rounded_thumbnails");this.I=new g.fo(function(){g.no(b.element,"ytp-show-tiles")},0);
g.N(this,this.I);var c=new g.X({D:"button",Ga:["ytp-button","ytp-endscreen-previous"],X:{"aria-label":"Anterior"},W:[g.qL()]});g.N(this,c);c.Da(this.element);c.Qa("click",this.HV,this);this.table=new g.iL({D:"div",K:"ytp-endscreen-content"});g.N(this,this.table);this.table.Da(this.element);c=new g.X({D:"button",Ga:["ytp-button","ytp-endscreen-next"],X:{"aria-label":"Siguiente"},W:[g.rL()]});g.N(this,c);c.Da(this.element);c.Qa("click",this.GV,this);a.getVideoData().Te?this.j=new n6(a,!0):this.j=new q6(a);
g.N(this,this.j);g.UN(this.player,this.j.element,4);a.vb(this.element,this,158789);this.hide()},x6=function(a){return g.VN(a.player)&&a.Oy()&&!a.C},h6a=function(a){var b,c,d,e;
return(null==(b=a.videoData)?0:null==(c=b.suggestions)?0:c.length)?null==(d=a.videoData)?void 0:d.suggestions:[null==(e=a.videoData)?void 0:g.ZH(e)]},y6=function(a){var b=a.lf();
b!==a.J&&(a.J=b,a.player.ma("autonavvisibility"))},z6=function(a){p6.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new t6(a,1);g.N(this,this.watchButton);this.watchButton.Da(this.element);if(a.N("embeds_enable_shorts_branded_ui")){g.no(this.element,"ytp-shorts-branded-ui");var b=new g.K2(a,g.KN(a));g.N(this,b);var c=new g.X({D:"div",Ga:["ytp-watch-again-on-youtube-endscreen-more-videos-container"],X:{tabIndex:"-1"},W:[b]});g.N(this,c);b.Da(c.element);c.Da(this.element)}a.vb(this.element,this,156914);this.hide()},l6a=function(a){g.yO.call(this,a);
var b=this;this.endScreen=null;this.u=this.j=this.B=this.C=!1;this.listeners=new g.cE(this);g.N(this,this.listeners);var c=a.V();if(g.wv(g.nG(c)))this.u=!0,this.endScreen=new u6(a,g.KN(a));else{var d;(null==(d=g.KN(a))?0:d.cj())?this.endScreen=new z6(a):i6a(a)?(this.C=!0,j6a(this),this.j?this.endScreen=new r6(a):this.endScreen=new w6(this.player)):c.Ue?this.endScreen=new g6a(this.player):this.endScreen=new p6(this.player)}g.N(this,this.endScreen);g.UN(this.player,this.endScreen.element,4);k6a(this);
this.listeners.T(a,"videodatachange",this.onVideoDataChange,this);this.listeners.T(a,g.sA("endscreen"),function(e){b.onCueRangeEnter(e)});
this.listeners.T(a,g.tA("endscreen"),function(e){b.onCueRangeExit(e)})},j6a=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.jl&&a.B===b.Te)return!1;a.j=b.jl;a.B=b.Te;return!0},i6a=function(a){a=a.V();
return a.Ic&&!a.Ue},k6a=function(a){a.player.Bf("endscreen");
var b=a.player.getVideoData();b=new g.qA(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.qA(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.me([b,c])};
g.CS.prototype.vx=g.ca(35,function(a){this.GK!==a&&(this.GK=a,this.ek())});
g.BS.prototype.kp=g.ca(34,function(a){this.u!==a&&(this.u=a,this.Gy())});
g.CS.prototype.kp=g.ca(33,function(a){this.Th&&this.Th.kp(a)});
g.nP.prototype.bB=g.ca(32,function(a){this.HK!==a&&(this.HK=a,this.Rn())});
g.NN.prototype.hq=g.ca(6,function(){return this.app.hq()});
g.pY.prototype.hq=g.ca(5,function(){return this.getVideoData().OM});g.v(m6,g.X);m6.prototype.select=function(){(this.G.fm(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.kz||void 0)||this.G.N("web_player_endscreen_double_log_fix_killswitch"))&&this.G.ob(this.element)};
m6.prototype.onClick=function(a){g.ZO(a,this.G,this.j,this.suggestion.sessionData||void 0)&&this.select()};
m6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.Cx(a)||(this.select(),g.Bx(a))}};g.v(n6,g.X);g.k=n6.prototype;g.k.LB=function(a){this.suggestion!==a&&(this.suggestion=a,l6(this.j,a),this.playButton.updateValue("url",this.suggestion.cn()),o6(this))};
g.k.Fj=function(){return 0<this.B};
g.k.Cx=function(){this.Fj()||(this.B=Date.now(),a6a(this),$5a(this.G,c6a(this)),g.ro(this.G.getRootNode(),"countdown-running",this.Fj()))};
g.k.Mt=function(){this.tp();a6a(this);var a=this.j.Ca("ytp-autonav-endscreen-upnext-header");a&&g.wh(a,"Siguiente")};
g.k.tp=function(){this.Fj()&&(this.C.stop(),this.B=0)};
g.k.select=function(a){this.G.nextVideo(!1,void 0===a?!1:a);this.tp()};
g.k.cN=function(a){g.ZO(a,this.G)&&(a.currentTarget===this.playButton.element?this.G.ob(this.playButton.element):a.currentTarget===this.j.Ca("ytp-autonav-endscreen-link-container")&&(a=this.j.Ca("ytp-autonav-endscreen-link-container"),this.G.Va(a,!0),this.G.ob(a)),this.select())};
g.k.AV=function(){this.G.ob(this.cancelButton.element);g.PN(this.G,!0);this.F&&this.G.Oa("innertubeCommand",this.F)};
g.k.onVideoDataChange=function(a,b){var c;this.F=null==(c=b.kV)?void 0:c.command};
g.k.Y1=function(a){if(d6a(this)){var b=this.G.getVideoData().watchToWatchTransitionRenderer,c=null==b?void 0:b.fromColorPaletteDark;b=null==b?void 0:b.toColorPaletteDark;if(c&&b){var d=this.element;d.style.setProperty("--w2w-start-background-color",g.xM(c.surgeColor));d.style.setProperty("--w2w-start-primary-text-color",g.xM(c.primaryTitleColor));d.style.setProperty("--w2w-start-secondary-text-color",g.xM(c.secondaryTitleColor));d.style.setProperty("--w2w-end-background-color",g.xM(b.surgeColor));
d.style.setProperty("--w2w-end-primary-text-color",g.xM(b.primaryTitleColor));d.style.setProperty("--w2w-end-secondary-text-color",g.xM(b.secondaryTitleColor));d.style.setProperty("--w2w-animation-duration",a+"ms")}g.ro(this.element,"ytp-w2w-animate",!0)}};
g.k.zV=function(a){this.G.N("web_autonav_color_transition")&&2!==a&&g.ro(this.element,"ytp-w2w-animate",!1)};
g.k.bN=function(){var a=this.G.lf();this.I&&this.rb!==a&&g.lL(this,a);o6(this);this.G.Va(this.container.element,a);this.G.Va(this.cancelButton.element,a);this.G.Va(this.j.Ca("ytp-autonav-endscreen-link-container"),a);this.G.Va(this.playButton.element,a)};
g.k.Og=function(a){return 400>a.width||459>a.height};g.v(p6,g.X);g.k=p6.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.Oy=function(){return!1};
g.k.lf=function(){return!1};
g.k.WQ=function(){return!1};g.v(q6,g.X);g.k=q6.prototype;g.k.AC=function(){this.notification&&(this.C.stop(),this.yc(this.B),this.B=null,this.notification.close(),this.notification=null)};
g.k.LB=function(a){this.suggestion=a;l6(this,a,"hqdefault.jpg")};
g.k.dN=function(){g.lL(this,this.api.lf());this.api.Va(this.element,this.api.lf());this.api.Va(this.Ca("ytp-upnext-autoplay-icon"),this.api.lf());this.cancelButton&&this.api.Va(this.cancelButton.element,this.api.lf())};
g.k.f3=function(){window.focus();this.AC()};
g.k.Cx=function(a){var b=this;this.Fj()||(g.Rx("a11y-announce","Siguiente "+this.suggestion.title),this.u=(0,g.T)(),this.j=new g.fo(function(){f6a(b,a)},25),f6a(this,a),$5a(this.api,e6a(this,a)));
g.po(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.X.prototype.hide.call(this)};
g.k.Fj=function(){return!!this.j};
g.k.Mt=function(){this.tp();this.u=(0,g.T)();f6a(this);g.no(this.element,"ytp-upnext-autoplay-paused")};
g.k.tp=function(){this.Fj()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.V().N("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.AC(),this.notification=new Notification("Siguiente",{body:this.suggestion.title,icon:this.suggestion.Gf()}),this.B=this.T(this.notification,"click",this.f3),this.C.start())}this.tp();this.api.nextVideo(!1,a)};
g.k.CV=function(a){!g.vh(this.cancelButton.element,g.xx(a))&&g.ZO(a,this.api)&&(this.api.lf()&&this.api.ob(this.Ca("ytp-upnext-autoplay-icon")),this.select())};
g.k.BV=function(){this.api.lf()&&this.cancelButton&&this.api.ob(this.cancelButton.element);g.PN(this.api,!0)};
g.k.T2=function(a){this.api.getPresentingPlayerType();this.show();this.Cx(a)};
g.k.U2=function(){this.api.getPresentingPlayerType();this.tp();this.hide()};
g.k.ra=function(){this.tp();this.AC();g.X.prototype.ra.call(this)};g.v(r6,p6);g.k=r6.prototype;g.k.create=function(){p6.prototype.create.call(this);this.C.T(this.player,"appresize",this.oy);this.C.T(this.player,"onVideoAreaChange",this.oy);this.C.T(this.player,"videodatachange",this.onVideoDataChange);this.C.T(this.player,"autonavchange",this.eN);this.C.T(this.player,"autonavcancel",this.EV);this.onVideoDataChange()};
g.k.show=function(){p6.prototype.show.call(this);(this.I||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.PN(this.player,!1);g.VN(this.player)&&this.Oy()&&!this.B?(s6(this),2===this.videoData.autonavState?this.player.V().N("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Cx():3===this.videoData.autonavState&&this.j.Mt()):(g.PN(this.player,!0),s6(this));this.oy()};
g.k.hide=function(){p6.prototype.hide.call(this);this.j.Mt();s6(this)};
g.k.oy=function(){var a=this.player.Hk(!0,this.player.isFullscreen());s6(this);o6(this.u);g.ro(this.element,"ytp-autonav-cancelled-small-mode",this.Og(a));g.ro(this.element,"ytp-autonav-cancelled-tiny-mode",this.LD(a));g.ro(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.Gl(this.overlay.element,{width:a.width+"px"});if(!this.F){a=g.t(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){var c=g.t(b.value);b=c.next().value;c=c.next().value;g.ro(c.element,
"ytp-suggestion-card-with-margin",1===b%2)}}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length){var b=g.ZH(this.videoData);b&&(this.j.LB(b),this.j!==this.u&&this.u.LB(b));for(b=0;b<m6a.length;++b){var c=m6a[b];if(a&&a[c]){this.videos[b]=new m6(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,l6(d,c));g.N(this,this.videos[b]);this.videos[b].Da(this.J.element)}}}this.oy()}};
g.k.eN=function(a){1===a?(this.I=!1,this.B=this.videoData.clientPlaybackNonce,this.j.tp(),this.rb&&this.oy()):(this.I=!0,this.lf()&&(2===a?this.j.Cx():3===a&&this.j.Mt()))};
g.k.EV=function(a){a?this.eN(1):(this.B=null,this.I=!1)};
g.k.Oy=function(){return 1!==this.videoData.autonavState};
g.k.Og=function(a){return(910>a.width||459>a.height)&&!this.LD(a)&&!(400>=a.width||360>=a.height)};
g.k.LD=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.lf=function(){return this.rb&&g.VN(this.player)&&this.Oy()&&!this.B};
var m6a=[1,3,2,4];g.v(t6,g.X);g.k=t6.prototype;g.k.onClick=function(a){g.$O(this.getVideoUrl(),this.G,a);this.G.ob(this.element)};
g.k.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.G.getVideoUrl(a,!1,!1,!0);var b=this.G.V();if(g.UF(b)||g.eG(b)){var c={};b.ya&&g.UF(b)&&g.wN(c,b.loaderUrl);a:{switch(this.buttonType){case 2:b="emb_ytp_continue_watching";break a}b="emb_ytp_watch_again"}g.vN(c,b);a=g.Ai(a,c)}return a};
g.k.Va=function(){this.G.Va(this.element,this.rb&&this.ya)};
g.k.show=function(){g.X.prototype.show.call(this);this.Va()};
g.k.hide=function(){g.X.prototype.hide.call(this);this.Va()};
g.k.Ub=function(a){g.X.prototype.Ub.call(this,a);this.Va()};g.v(u6,p6);u6.prototype.show=function(){3!==this.player.getPlayerState()&&(p6.prototype.show.call(this),this.j.vx(!0),this.j.kp(!0),this.G.Va(this.element,!0),this.watchButton.Ub(!0))};
u6.prototype.hide=function(){p6.prototype.hide.call(this);this.j.vx(!1);this.j.kp(!1);this.G.Va(this.element,!1);this.watchButton.Ub(!1)};g.v(g6a,p6);g6a.prototype.Ja=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.dl;var b=this.subscribeButton;a.subscribed?b.u():b.B()};g.v(v6,g.X);v6.prototype.select=function(){(this.api.fm(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.kz||void 0)||this.api.N("web_player_endscreen_double_log_fix_killswitch"))&&this.api.ob(this.element)};
v6.prototype.onClick=function(a){g.ZO(a,this.api,this.u,this.suggestion.sessionData||void 0)&&this.select()};
v6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.Cx(a)||(this.select(),g.Bx(a))}};
v6.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.V();this.u=a.F?!1:b.B};g.v(w6,p6);g.k=w6.prototype;g.k.create=function(){p6.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.Yn();this.u.T(this.player,"appresize",this.Yn);this.u.T(this.player,"onVideoAreaChange",this.Yn);this.u.T(this.player,"videodatachange",this.onVideoDataChange);this.u.T(this.player,"autonavchange",this.bG);this.u.T(this.player,"autonavcancel",this.FV);a=this.videoData.autonavState;a!==this.S&&this.bG(a);this.u.T(this.element,"transitionend",this.x4)};
g.k.destroy=function(){g.bz(this.u);g.af(this.stills);this.stills=[];p6.prototype.destroy.call(this);g.po(this.element,"ytp-show-tiles");this.I.stop();this.S=this.videoData.autonavState};
g.k.Oy=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){var a=this.rb;p6.prototype.show.call(this);h6a(this);g.po(this.element,"ytp-show-tiles");this.player.V().isMobile?g.ho(this.I):this.I.start();(this.F||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.PN(this.player,!1);x6(this)?(y6(this),2===this.videoData.autonavState?this.player.V().N("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Cx():3===this.videoData.autonavState&&this.j.Mt()):(g.PN(this.player,!0),y6(this));a!==this.rb&&
this.player.Va(this.element,!0)};
g.k.hide=function(){var a=this.rb;p6.prototype.hide.call(this);this.j.Mt();y6(this);a!==this.rb&&this.player.Va(this.element,!1)};
g.k.x4=function(a){g.xx(a)===this.element&&this.Yn()};
g.k.Yn=function(){var a=h6a(this);if(a.length){g.no(this.element,"ytp-endscreen-paginate");var b=this.G.Hk(!0,this.G.isFullscreen()),c=g.KN(this.G);c&&(c=c.Hf()?48:32,b.width-=2*c);var d=b.width/b.height,e=96/54,f=c=2,h=Math.max(b.width/96,2),l=Math.max(b.height/54,2),m=a.length,n=Math.pow(2,2);var p=m*n+(Math.pow(2,2)-n);p+=Math.pow(2,2)-n;for(p-=n;0<p&&(c<h||f<l);){var q=c/2,r=f/2,w=c<=h-2&&p>=r*n,y=f<=l-2&&p>=q*n;if((q+1)/r*e/d>d/(q/(r+1)*e)&&y)p-=q*n,f+=2;else if(w)p-=r*n,c+=2;else if(y)p-=q*
n,f+=2;else break}e=!1;p>=3*n&&6>=m*n-p&&(4<=f||4<=c)&&(e=!0);n=96*c;p=54*f;d=n/p<d?b.height/p:b.width/n;d=Math.min(d,2);n=Math.floor(Math.min(b.width,n*d));p=Math.floor(Math.min(b.height,p*d));b=this.table.element;b.ariaLive="polite";g.Ql(b,n,p);g.Gl(b,{marginLeft:n/-2+"px",marginTop:p/-2+"px"});this.j.LB(g.ZH(this.videoData));this.j instanceof n6&&o6(this.j);g.ro(this.element,"ytp-endscreen-takeover",x6(this));y6(this);n+=4;p+=4;d=0;b.ariaBusy="true";for(h=0;h<c;h++)for(l=0;l<f;l++)if(q=d,w=0,e&&
h>=c-2&&l>=f-2?w=1:0===l%2&&0===h%2&&(2>l&&2>h?0===l&&0===h&&(w=2):w=2),q=g.Og(q+this.B,m),0!==w){r=this.stills[d];r||(r=new v6(this.player),this.stills[d]=r,b.appendChild(r.element));y=Math.floor(p*l/f);var z=Math.floor(n*h/c),B=Math.floor(p*(l+w)/f)-y-4,D=Math.floor(n*(h+w)/c)-z-4;g.Ml(r.element,z,y);g.Ql(r.element,D,B);g.Gl(r.element,"transitionDelay",(l+h)/20+"s");g.ro(r.element,"ytp-videowall-still-mini",1===w);g.ro(r.element,"ytp-videowall-still-large",2<w);this.Z&&(w=Math.max(D,B),g.ro(r.element,
"ytp-videowall-still-round-large",256<=w),g.ro(r.element,"ytp-videowall-still-round-medium",96<w&&256>w),g.ro(r.element,"ytp-videowall-still-round-small",96>=w));q=a[q];r.suggestion!==q&&(r.suggestion=q,w=r.api.V(),y=g.mo(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",l6(r,q,y),g.UF(w)&&(y=q.cn(),z={},w.ya&&g.wN(z,w.loaderUrl),y=g.Ai(y,g.vN(z,"emb_rel_end")),r.updateValue("url",y)),(q=(q=q.sessionData)&&q.itct)&&r.api.Qh(r.element,q));d++}b.ariaBusy="false";g.ro(this.element,
"ytp-endscreen-paginate",d<m);for(a=this.stills.length-1;a>=d;a--)c=this.stills[a],g.th(c.element),g.$e(c);this.stills.length=d}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.B=0,this.videoData=a,this.Yn())};
g.k.GV=function(){this.B+=this.stills.length;this.Yn()};
g.k.HV=function(){this.B-=this.stills.length;this.Yn()};
g.k.WQ=function(){return this.j.Fj()};
g.k.bG=function(a){1===a?(this.F=!1,this.C=this.videoData.clientPlaybackNonce,this.j.tp(),this.rb&&this.Yn()):(this.F=!0,this.rb&&x6(this)&&(2===a?this.j.Cx():3===a&&this.j.Mt()))};
g.k.FV=function(a){if(a){for(a=0;a<this.stills.length;a++)this.G.Va(this.stills[a].element,!0);this.bG(1)}else this.C=null,this.F=!1;this.Yn()};
g.k.lf=function(){return this.rb&&x6(this)};g.v(z6,p6);z6.prototype.show=function(){if(3!==this.player.getPlayerState()){p6.prototype.show.call(this);var a;null==(a=g.KN(this.player))||a.bB(!0);this.player.Va(this.element,!0);this.watchButton.Ub(!0)}};
z6.prototype.hide=function(){p6.prototype.hide.call(this);var a;null==(a=g.KN(this.player))||a.bB(!1);this.player.Va(this.element,!1);this.watchButton.Ub(!1)};g.v(l6a,g.yO);g.k=l6a.prototype;g.k.fu=function(){var a;if((null==(a=g.KN(this.player))?0:a.cj())||this.u)return!0;a=this.player.getVideoData();var b;var c=!!((null==a?0:g.ZH(a))||(null==a?0:null==(b=a.suggestions)?0:b.length));b=!i6a(this.player)||c;c=a.ri||g.eG(a.u);var d=this.player.rz();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.lf=function(){return this.endScreen.lf()};
g.k.l0=function(){return this.lf()?this.endScreen.WQ():!1};
g.k.ra=function(){this.player.Bf("endscreen");g.yO.prototype.ra.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.wb().xe.get("heartbeat"),d=g.ZH(a);!d||b.videoId!==d.videoId||a.kQ?(this.player.fm(b.videoId,void 0,void 0,!0,!0,b),c&&c.RD("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0):a=!1}else a=!1;a||(g.yO.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.yO.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.fu()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){k6a(this);this.C&&j6a(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new r6(this.player):this.endScreen=new w6(this.player),g.N(this,this.endScreen),g.UN(this.player,this.endScreen.element,4))};g.xO("endscreen",l6a);})(_yt_player);
