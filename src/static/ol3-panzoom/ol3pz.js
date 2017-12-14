// Ol3-PanZoom. See https://github.com/mapgears/ol3-panzoom/
// License: https://github.com/mapgears/ol3-panzoom/blob/master/LICENSE
(function(){var k,n=this;function p(a,c){var b=a.split("."),d=n;b[0]in d||!d.execScript||d.execScript("var "+b[0]);for(var e;b.length&&(e=b.shift());)b.length||void 0===c?d[e]?d=d[e]:d=d[e]={}:d[e]=c}
  function q(a){var c=typeof a;if("object"==c)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return c;var b=Object.prototype.toString.call(a);if("[object Window]"==b)return"object";if("[object Array]"==b||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==b||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
  else if("function"==c&&"undefined"==typeof a.call)return"object";return c}function s(a,c){function b(){}b.prototype=c.prototype;a.u=c.prototype;a.prototype=new b;a.L=function(a,b,f){return c.prototype[b].apply(a,Array.prototype.slice.call(arguments,2))}};function t(a){this.element=null;ol.control.ZoomSlider.call(this,a)}s(t,ol.control.ZoomSlider);t.prototype.a=function(){return this.element};function u(a,c){return a<c?-1:a>c?1:0};var v=Array.prototype,aa=v.indexOf?function(a,c,b){return v.indexOf.call(a,c,b)}:function(a,c,b){b=null==b?0:0>b?Math.max(0,a.length+b):b;if("string"==typeof a)return"string"==typeof c&&1==c.length?a.indexOf(c,b):-1;for(;b<a.length;b++)if(b in a&&a[b]===c)return b;return-1};var w;a:{var y=n.navigator;if(y){var z=y.userAgent;if(z){w=z;break a}}w=""};var A=-1!=w.indexOf("Opera")||-1!=w.indexOf("OPR"),B=-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE"),C=-1!=w.indexOf("Gecko")&&-1==w.toLowerCase().indexOf("webkit")&&!(-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE")),D=-1!=w.toLowerCase().indexOf("webkit");function E(){var a=n.document;return a?a.documentMode:void 0}
  var F=function(){var a="",c;if(A&&n.opera)return a=n.opera.version,"function"==q(a)?a():a;C?c=/rv\:([^\);]+)(\)|;)/:B?c=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:D&&(c=/WebKit\/(\S+)/);c&&(a=(a=c.exec(w))?a[1]:"");return B&&(c=E(),c>parseFloat(a))?String(c):a}(),G={};
  function H(a){var c;if(!(c=G[a])){c=0;for(var b=String(F).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(b.length,d.length),f=0;0==c&&f<e;f++){var g=b[f]||"",h=d[f]||"",r=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var m=r.exec(g)||["","",""],x=l.exec(h)||["","",""];if(0==m[0].length&&0==x[0].length)break;c=u(0==m[1].length?0:parseInt(m[1],10),0==x[1].length?0:parseInt(x[1],10))||u(0==m[2].length,0==x[2].length)||
    u(m[2],x[2])}while(0==c)}c=G[a]=0<=c}return c}var I=n.document,ba=I&&B?E()||("CSS1Compat"==I.compatMode?parseInt(F,10):5):void 0;var J;(J=!B)||(J=B&&9<=ba);var K=J,ca=B&&!H("9");!D||H("528");C&&H("1.9b")||B&&H("8")||A&&H("9.5")||D&&H("528");C&&!H("8")||B&&H("9");function L(a,c){this.type=a;this.a=this.target=c}L.prototype.b=function(){};function M(a){M[" "](a);return a}M[" "]=function(){};function N(a,c){L.call(this,a?a.type:"");this.c=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=c;var b=a.relatedTarget;if(b&&C)try{M(b.nodeName)}catch(d){}this.c=a;a.defaultPrevented&&this.b()}}s(N,L);N.prototype.b=function(){N.u.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(c){}};var O="closure_listenable_"+(1E6*Math.random()|0),da=0;function ea(a,c,b,d,e){this.d=a;this.a=null;this.src=c;this.type=b;this.h=!!d;this.b=e;++da;this.e=this.g=!1}function P(a){a.e=!0;a.d=null;a.a=null;a.src=null;a.b=null};function Q(a){this.src=a;this.a={};this.b=0};var R="closure_lm_"+(1E6*Math.random()|0),S={},T=0;
  function U(a,c,b,d,e){if("array"==q(c)){for(var f=0;f<c.length;f++)U(a,c[f],b,d,e);return null}b=fa(b);if(a&&a[O])a=a.a(c,b,d,e);else{f=b;if(!c)throw Error("Invalid event type");b=!!d;var g=V(a);g||(a[R]=g=new Q(a));var h=g,r=c.toString(),g=h.a[r];g||(g=h.a[r]=[],h.b++);var l;b:{for(l=0;l<g.length;++l){var m=g[l];if(!m.e&&m.d==f&&m.h==!!d&&m.b==e)break b}l=-1}-1<l?(d=g[l],d.g=!1):(d=new ea(f,h.src,r,!!d,e),d.g=!1,g.push(d));d.a||(e=ga(),d.a=e,e.src=a,e.d=d,a.addEventListener?a.addEventListener(c.toString(),
    e,b):a.attachEvent(W(c.toString()),e),T++);a=d}return a}function ga(){var a=ha,c=K?function(b){return a.call(c.src,c.d,b)}:function(b){b=a.call(c.src,c.d,b);if(!b)return b};return c}function W(a){return a in S?S[a]:S[a]="on"+a}function X(a,c,b,d){var e=1;if(a=V(a))if(c=a.a[c.toString()])for(c=c.concat(),a=0;a<c.length;a++){var f=c[a];f&&f.h==b&&!f.e&&(e&=!1!==ia(f,d))}return Boolean(e)}
  function ia(a,c){var b=a.d,d=a.b||a.src;if(a.g&&"number"!=typeof a&&a&&!a.e){var e=a.src;if(e&&e[O])e.M(a);else{var f=a.type,g=a.a;e.removeEventListener?e.removeEventListener(f,g,a.h):e.detachEvent&&e.detachEvent(W(f),g);T--;if(f=V(e)){var g=a.type,h;if(h=g in f.a){h=f.a[g];var r=aa(h,a),l;(l=0<=r)&&v.splice.call(h,r,1);h=l}h&&(P(a),0==f.a[g].length&&(delete f.a[g],f.b--));0==f.b&&(f.src=null,e[R]=null)}else P(a)}}return b.call(d,c)}
  function ha(a,c){if(a.e)return!0;if(!K){var b;if(!(b=c))a:{b=["window","event"];for(var d=n,e;e=b.shift();)if(null!=d[e])d=d[e];else{b=null;break a}b=d}e=b;b=new N(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=b.a;f;f=f.parentNode)e.push(f);for(var f=a.type,h=e.length-1;0<=h;h--)b.a=e[h],d&=X(e[h],f,!0,b);for(h=0;h<e.length;h++)b.a=e[h],d&=X(e[h],f,!1,b)}return d}return ia(a,
    new N(c,this))}function V(a){a=a[R];return a instanceof Q?a:null}var ja="__closure_events_fn_"+(1E9*Math.random()>>>0);function fa(a){return"function"==q(a)?a:a[ja]||(a[ja]=function(c){return a.handleEvent(c)})};function Y(a){a=a||{};this.H=a.className?a.className:"ol-panzoom";var c=this.i,b=[this.H,"ol-unselectable ol-control"].join(" "),d=document.createElement("div");d.className=b;c&&(d.style.left="4px",d.style.top="4px");ol.control.Control.call(this,{element:d,target:a.target});this.J=[];this.a=void 0!==a.duration?a.duration:100;this.i=a.imgPath?a.imgPath:null;this.b=a.maxExtent?a.maxExtent:null;this.k=a.maxZoom?a.maxZoom:19;this.l=a.minZoom?a.minZoom:0;this.K=void 0!==a.pixelDelta?a.pixelDelta:128;this.c=
    void 0!==a.slider?a.slider:!1;this.r=void 0!==a.zoomDelta?a.zoomDelta:1;this.n=Z(this,"pan-east");this.o=Z(this,"pan-north");this.p=Z(this,"pan-south");this.q=Z(this,"pan-west");this.s=Z(this,"zoom-in");this.t=Z(this,"zoom-out");this.j=!this.c&&this.b?Z(this,"zoom-max"):null;this.f=this.c?new t:null;d.appendChild(this.o);d.appendChild(this.q);d.appendChild(this.n);d.appendChild(this.p);d.appendChild(this.s);d.appendChild(this.t);this.j&&d.appendChild(this.j);this.I=d}s(Y,ol.control.Control);
  ol.control.v=Y;k=Y.prototype;
  k.setMap=function(a){var c=this.J,b=this.f,d=this.getMap();d&&d instanceof ol.Map&&(c.forEach(ol.Observable.unByKey),c.length=0,this.f&&(this.f.setTarget(null),window.setTimeout(function(){d.removeControl(b)},0)));Y.u.setMap.call(this,a);a&&(c.push(U(this.n,"click",this.w,!1,this)),c.push(U(this.o,"click",this.A,!1,this)),c.push(U(this.p,"click",this.B,!1,this)),c.push(U(this.q,"click",this.C,!1,this)),c.push(U(this.s,"click",this.D,!1,this)),c.push(U(this.t,"click",this.G,!1,this)),this.b&&!this.c&&
  c.push(U(this.j,"click",this.F,!1,this)),this.c&&(b.setTarget(this.I),window.setTimeout(function(){a.addControl(b)},0),ka(this)))};
  function Z(a,c){var b=document.createElement("div"),d=a.i,e=a.b,f=a.c;if(d){b.style.width="18px";b.style.height="18px";b.style.position="absolute";b.style.cursor="pointer";var g=document.createElement("img");switch(c){case "pan-east":g.id="OpenLayers_Control_PanZoom_panright_innerImage";g.src=[d,"east-mini.png"].join("/");b.id="OpenLayers_Control_PanZoom_panright";b.style.top="22px";b.style.left="22px";break;case "pan-north":g.id="OpenLayers_Control_PanZoom_panup_innerImage";g.src=[d,"north-mini.png"].join("/");
    b.id="OpenLayers_Control_PanZoom_panup";b.style.top="4px";b.style.left="13px";break;case "pan-south":g.id="OpenLayers_Control_PanZoom_pandown_innerImage";g.src=[d,"south-mini.png"].join("/");b.id="OpenLayers_Control_PanZoom_pandown";b.style.top="40px";b.style.left="13px";break;case "pan-west":g.id="OpenLayers_Control_PanZoom_panleft_innerImage";g.src=[d,"west-mini.png"].join("/");b.id="OpenLayers_Control_PanZoom_panleft";b.style.top="22px";b.style.left="4px";break;case "zoom-in":g.id="OpenLayers_Control_PanZoom_zoomin_innerImage";
    g.src=[d,"zoom-plus-mini.png"].join("/");b.id="OpenLayers_Control_PanZoom_zoomin";b.style.top="63px";b.style.left="13px";break;case "zoom-out":g.id="OpenLayers_Control_PanZoom_zoomout_innerImage";g.src=[d,"zoom-minus-mini.png"].join("/");b.id="OpenLayers_Control_PanZoom_zoomout";b.style.top=f?[11*(a.k-a.l+1)+81,"px"].join(""):e?"99px":"81px";b.style.left="13px";break;case "zoom-max":g.id="OpenLayers_Control_PanZoom_zoomworld_innerImage",g.src=[d,"zoom-world-mini.png"].join("/"),b.id="OpenLayers_Control_PanZoom_zoomworld",
    b.style.top="81px",b.style.left="13px"}b.appendChild(g)}return b}k.w=function(a){return $(this,a,"east")};k.A=function(a){return $(this,a,"north")};k.B=function(a){return $(this,a,"south")};k.C=function(a){return $(this,a,"west")};k.D=function(){la(this,this.r)};k.G=function(){la(this,-this.r)};k.F=function(){var a=this.getMap(),c=a.getView(),b=this.b?this.b:c.getProjection().getExtent(),a=a.getSize();c.fit(b,a)};
  function $(a,c,b){var d=a.getMap(),e=d.getView(),f=e.getResolution()*a.K,g=0,h=0;"south"==b?h=-f:"west"==b?g=-f:"east"==b?g=f:h=f;b=[g,h];ol.coordinate.rotate(b,e.getRotation());if(f=e.getCenter())a.a&&0<a.a&&d.beforeRender(ol.animation.pan({source:f,duration:a.a,easing:ol.easing.linear})),a=e.constrainCenter([f[0]+b[0],f[1]+b[1]]),e.setCenter(a);c.b();return!1}
  function la(a,c){var b=a.getMap(),d=b.getView();if(d){var e=d.getResolution();e&&(0<a.a&&b.beforeRender(ol.animation.zoom({undefined:null,resolution:e,duration:a.a,easing:ol.easing.easeOut})),b=d.constrainResolution(e,c),d.setResolution(b))}}
  function ka(a){var c=a.f,b=a.i;c&&b&&(a=[11*(a.k-a.l+1),"px"].join(""),c=c.element,c.style.background=["url(",b,"/zoombar.png)"].join(""),c.style.border="0",c.style["border-radius"]="0",c.style.height=a,c.style.left="13px",c.style.width="18px",c.style.top="84px",c=c.children[0],c.style.background=["url(",b,"/slider.png)"].join(""),c.style.border=0,c.style.height="9px",c.style.margin="0 -1px",c.style.width="20px")};p("OL3PanZoom",Y);p("ol.control.PanZoom",ol.control.v);Y.prototype.setMap=Y.prototype.setMap;p("OL3ZoomSlider",t);t.prototype.getElement=t.prototype.a;})();
