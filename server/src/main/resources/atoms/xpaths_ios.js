function(){return function(){function h(a){return function(){return this[a]}}function k(a){return function(){return a}}var l=this;
function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function m(a){return"string"==typeof a}function ba(a,b,c){return a.call.apply(a.bind,arguments)}function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function da(a,b,c){da=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return da.apply(null,arguments)}function ea(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}}function n(a,b){function c(){}c.prototype=b.prototype;a.ea=b.prototype;a.prototype=new c};function p(a,b){this.code=a;this.state=fa[a]||ga;this.message=b||"";var c=this.state.replace(/((?:^|\s+)[a-z])/g,function(a){return a.toUpperCase().replace(/^[\s\xa0]+/g,"")}),d=c.length-5;if(0>d||c.indexOf("Error",d)!=d)c+="Error";this.name=c;c=Error(this.message);c.name=this.name;this.stack=c.stack||""}n(p,Error);
var ga="unknown error",fa={15:"element not selectable",11:"element not visible",31:"ime engine activation failed",30:"ime not available",24:"invalid cookie domain",29:"invalid element coordinates",12:"invalid element state",32:"invalid selector",51:"invalid selector",52:"invalid selector",17:"javascript error",405:"unsupported operation",34:"move target out of bounds",27:"no such alert",7:"no such element",8:"no such frame",23:"no such window",28:"script timeout",33:"session not created",10:"stale element reference",
0:"success",21:"timeout",25:"unable to set cookie",26:"unexpected alert open"};fa[13]=ga;fa[9]="unknown command";p.prototype.toString=function(){return this.name+": "+this.message};var q=Array.prototype;function s(a,b){for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)}function t(a,b,c){if(a.reduce)return a.reduce(b,c);var d=c;s(a,function(c,f){d=b.call(void 0,d,c,f,a)});return d}function u(a,b){for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1}function ha(a){return q.concat.apply(q,arguments)}function ia(a,b,c){return 2>=arguments.length?q.slice.call(a,b):q.slice.call(a,b,c)};function ja(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function ka(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?la(a,b):!c&&ja(e,b)?-1*ma(a,b):!d&&ja(f,a)?ma(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=na(a);c=d.createRange();c.selectNode(a);c.collapse(!0);d=d.createRange();d.selectNode(b);
d.collapse(!0);return c.compareBoundaryPoints(l.Range.START_TO_END,d)}function ma(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return la(d,a)}function la(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1}function na(a){return 9==a.nodeType?a:a.ownerDocument||a.document};var oa;oa=!1;var v=l.navigator?l.navigator.userAgent:null;v&&(-1!=v.indexOf("Firefox")||-1!=v.indexOf("Camino")||-1!=v.indexOf("iPhone")||-1!=v.indexOf("iPod")||-1!=v.indexOf("iPad")||-1!=v.indexOf("Android")&&(oa=!0));var pa=oa;function x(a,b,c){this.i=a;this.ca=b||1;this.h=c||1};function y(a){this.K=a;this.A=0}function qa(a){a=a.match(ra);for(var b=0;b<a.length;b++)sa.test(a[b])&&a.splice(b,1);return new y(a)}var ra=RegExp("\\$?(?:(?![0-9-])[\\w-]+:)?(?![0-9-])[\\w-]+|\\/\\/|\\.\\.|::|\\d+(?:\\.\\d*)?|\\.\\d+|\"[^\"]*\"|'[^']*'|[!<>]=|\\s+|.","g"),sa=/^\s/;function z(a,b){return a.K[a.A+(b||0)]}y.prototype.next=function(){return this.K[this.A++]};y.prototype.back=function(){this.A--};y.prototype.empty=function(){return this.K.length<=this.A};function A(a){var b=null,c=a.nodeType;1==c&&(b=a.textContent,b=void 0==b||null==b?a.innerText:b,b=void 0==b||null==b?"":b);if("string"!=typeof b)if(9==c||1==c){a=9==c?a.documentElement:a.firstChild;for(var c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}}else b=a.nodeValue;return""+b}
function B(a,b,c){if(null===b)return!0;try{if(!a.getAttribute)return!1}catch(d){return!1}return null==c?!!a.getAttribute(b):a.getAttribute(b,2)==c}function C(a,b,c,d,e){return ta.call(null,a,b,m(c)?c:null,m(d)?d:null,e||new D)}
function ta(a,b,c,d,e){b.getElementsByName&&d&&"name"==c?(b=b.getElementsByName(d),s(b,function(b){a.matches(b)&&e.add(b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),s(b,function(b){b.className==d&&a.matches(b)&&e.add(b)})):a instanceof E?ua(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.getName()),s(b,function(a){B(a,c,d)&&e.add(a)}));return e}function wa(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)B(b,c,d)&&a.matches(b)&&e.add(b);return e}
function ua(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)B(b,c,d)&&a.matches(b)&&e.add(b),ua(a,b,c,d,e)};function D(){this.h=this.e=null;this.t=0}function xa(a){this.p=a;this.next=this.o=null}function ya(a,b){if(!a.e)return b;if(!b.e)return a;for(var c=a.e,d=b.e,e=null,f=null,g=0;c&&d;)c.p==d.p?(f=c,c=c.next,d=d.next):0<ka(c.p,d.p)?(f=d,d=d.next):(f=c,c=c.next),(f.o=e)?e.next=f:a.e=f,e=f,g++;for(f=c||d;f;)f.o=e,e=e.next=f,g++,f=f.next;a.h=e;a.t=g;return a}D.prototype.unshift=function(a){a=new xa(a);a.next=this.e;this.h?this.e.o=a:this.e=this.h=a;this.e=a;this.t++};
D.prototype.add=function(a){a=new xa(a);a.o=this.h;this.e?this.h.next=a:this.e=this.h=a;this.h=a;this.t++};function F(a){return(a=a.e)?a.p:null}D.prototype.j=h("t");function G(a){return(a=F(a))?A(a):""}function H(a,b){return new za(a,!!b)}function za(a,b){this.Z=a;this.L=(this.q=b)?a.h:a.e;this.G=null}za.prototype.next=function(){var a=this.L;if(null==a)return null;var b=this.G=a;this.L=this.q?a.o:a.next;return b.p};
za.prototype.remove=function(){var a=this.Z,b=this.G;if(!b)throw Error("Next must be called at least once before remove.");var c=b.o,b=b.next;c?c.next=b:a.e=b;b?b.o=c:a.h=c;a.t--;this.G=null};function I(a){this.d=a;this.f=this.k=!1;this.u=null}function J(a){return"\n  "+a.toString().split("\n").join("\n  ")}I.prototype.c=h("k");function Aa(a,b){a.k=b}function Ba(a,b){a.f=b}I.prototype.m=h("u");function K(a,b){var c=a.evaluate(b);return c instanceof D?+G(c):+c}function L(a,b){var c=a.evaluate(b);return c instanceof D?G(c):""+c}function M(a,b){var c=a.evaluate(b);return c instanceof D?!!c.j():!!c};function N(a,b,c){I.call(this,a.d);this.J=a;this.O=b;this.T=c;this.k=b.c()||c.c();this.f=b.f||c.f;this.J==Ca&&(c.f||c.c()||4==c.d||0==c.d||!b.m()?b.f||(b.c()||4==b.d||0==b.d||!c.m())||(this.u={name:c.m().name,s:b}):this.u={name:b.m().name,s:c})}n(N,I);
function O(a,b,c,d,e){b=b.evaluate(d);c=c.evaluate(d);var f;if(b instanceof D&&c instanceof D){e=H(b);for(d=e.next();d;d=e.next())for(b=H(c),f=b.next();f;f=b.next())if(a(A(d),A(f)))return!0;return!1}if(b instanceof D||c instanceof D){b instanceof D?e=b:(e=c,c=b);e=H(e);b=typeof c;for(d=e.next();d;d=e.next()){switch(b){case "number":d=+A(d);break;case "boolean":d=!!A(d);break;case "string":d=A(d);break;default:throw Error("Illegal primitive type for comparison.");}if(a(d,c))return!0}return!1}return e?
"boolean"==typeof b||"boolean"==typeof c?a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}N.prototype.evaluate=function(a){return this.J.n(this.O,this.T,a)};N.prototype.toString=function(){var a="Binary Expression: "+this.J,a=a+J(this.O);return a+=J(this.T)};function Da(a,b,c,d){this.ba=a;this.R=b;this.d=c;this.n=d}Da.prototype.toString=h("ba");var Ea={};
function P(a,b,c,d){if(Ea.hasOwnProperty(a))throw Error("Binary operator already created: "+a);a=new Da(a,b,c,d);return Ea[a.toString()]=a}P("div",6,1,function(a,b,c){return K(a,c)/K(b,c)});P("mod",6,1,function(a,b,c){return K(a,c)%K(b,c)});P("*",6,1,function(a,b,c){return K(a,c)*K(b,c)});P("+",5,1,function(a,b,c){return K(a,c)+K(b,c)});P("-",5,1,function(a,b,c){return K(a,c)-K(b,c)});P("<",4,2,function(a,b,c){return O(function(a,b){return a<b},a,b,c)});
P(">",4,2,function(a,b,c){return O(function(a,b){return a>b},a,b,c)});P("<=",4,2,function(a,b,c){return O(function(a,b){return a<=b},a,b,c)});P(">=",4,2,function(a,b,c){return O(function(a,b){return a>=b},a,b,c)});var Ca=P("=",3,2,function(a,b,c){return O(function(a,b){return a==b},a,b,c,!0)});P("!=",3,2,function(a,b,c){return O(function(a,b){return a!=b},a,b,c,!0)});P("and",2,2,function(a,b,c){return M(a,c)&&M(b,c)});P("or",1,2,function(a,b,c){return M(a,c)||M(b,c)});function Fa(a,b){if(b.j()&&4!=a.d)throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");I.call(this,a.d);this.S=a;this.b=b;this.k=a.c();this.f=a.f}n(Fa,I);Fa.prototype.evaluate=function(a){a=this.S.evaluate(a);return Ga(this.b,a)};Fa.prototype.toString=function(){var a;a="Filter:"+J(this.S);return a+=J(this.b)};function Ha(a,b){if(b.length<a.Q)throw Error("Function "+a.g+" expects at least"+a.Q+" arguments, "+b.length+" given");if(null!==a.H&&b.length>a.H)throw Error("Function "+a.g+" expects at most "+a.H+" arguments, "+b.length+" given");a.$&&s(b,function(b,d){if(4!=b.d)throw Error("Argument "+d+" to function "+a.g+" is not of type Nodeset: "+b);});I.call(this,a.d);this.w=a;this.D=b;Aa(this,a.k||u(b,function(a){return a.c()}));Ba(this,a.Y&&!b.length||a.X&&!!b.length||u(b,function(a){return a.f}))}
n(Ha,I);Ha.prototype.evaluate=function(a){return this.w.n.apply(null,ha(a,this.D))};Ha.prototype.toString=function(){var a="Function: "+this.w;if(this.D.length)var b=t(this.D,function(a,b){return a+J(b)},"Arguments:"),a=a+J(b);return a};function Ia(a,b,c,d,e,f,g,r,w){this.g=a;this.d=b;this.k=c;this.Y=d;this.X=e;this.n=f;this.Q=g;this.H=void 0!==r?r:g;this.$=!!w}Ia.prototype.toString=h("g");var Ja={};
function Q(a,b,c,d,e,f,g,r){if(Ja.hasOwnProperty(a))throw Error("Function already created: "+a+".");Ja[a]=new Ia(a,b,c,d,!1,e,f,g,r)}Q("boolean",2,!1,!1,function(a,b){return M(b,a)},1);Q("ceiling",1,!1,!1,function(a,b){return Math.ceil(K(b,a))},1);Q("concat",3,!1,!1,function(a,b){var c=ia(arguments,1);return t(c,function(b,c){return b+L(c,a)},"")},2,null);Q("contains",2,!1,!1,function(a,b,c){b=L(b,a);a=L(c,a);return-1!=b.indexOf(a)},2);
Q("count",1,!1,!1,function(a,b){return b.evaluate(a).j()},1,1,!0);Q("false",2,!1,!1,k(!1),0);Q("floor",1,!1,!1,function(a,b){return Math.floor(K(b,a))},1);
Q("id",4,!1,!1,function(a,b){var c=a.i,d=9==c.nodeType?c:c.ownerDocument,c=L(b,a).split(/\s+/),e=[];s(c,function(a){a=d.getElementById(a);var b;if(!(b=!a)){a:if(m(e))b=m(a)&&1==a.length?e.indexOf(a,0):-1;else{for(b=0;b<e.length;b++)if(b in e&&e[b]===a)break a;b=-1}b=0<=b}b||e.push(a)});e.sort(ka);var f=new D;s(e,function(a){f.add(a)});return f},1);Q("lang",2,!1,!1,k(!1),1);Q("last",1,!0,!1,function(a){if(1!=arguments.length)throw Error("Function last expects ()");return a.h},0);
Q("local-name",3,!1,!0,function(a,b){var c=b?F(b.evaluate(a)):a.i;return c?c.nodeName.toLowerCase():""},0,1,!0);Q("name",3,!1,!0,function(a,b){var c=b?F(b.evaluate(a)):a.i;return c?c.nodeName.toLowerCase():""},0,1,!0);Q("namespace-uri",3,!0,!1,k(""),0,1,!0);Q("normalize-space",3,!1,!0,function(a,b){return(b?L(b,a):A(a.i)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);Q("not",2,!1,!1,function(a,b){return!M(b,a)},1);Q("number",1,!1,!0,function(a,b){return b?K(b,a):+A(a.i)},0,1);
Q("position",1,!0,!1,function(a){return a.ca},0);Q("round",1,!1,!1,function(a,b){return Math.round(K(b,a))},1);Q("starts-with",2,!1,!1,function(a,b,c){b=L(b,a);a=L(c,a);return 0==b.lastIndexOf(a,0)},2);Q("string",3,!1,!0,function(a,b){return b?L(b,a):A(a.i)},0,1);Q("string-length",1,!1,!0,function(a,b){return(b?L(b,a):A(a.i)).length},0,1);
Q("substring",3,!1,!1,function(a,b,c,d){c=K(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?K(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";c=Math.round(c)-1;var e=Math.max(c,0);a=L(b,a);if(Infinity==d)return a.substring(e);b=Math.round(d);return a.substring(e,c+b)},2,3);Q("substring-after",3,!1,!1,function(a,b,c){b=L(b,a);a=L(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
Q("substring-before",3,!1,!1,function(a,b,c){b=L(b,a);a=L(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);Q("sum",1,!1,!1,function(a,b){for(var c=H(b.evaluate(a)),d=0,e=c.next();e;e=c.next())d+=+A(e);return d},1,1,!0);Q("translate",3,!1,!1,function(a,b,c,d){b=L(b,a);c=L(c,a);var e=L(d,a);a=[];for(d=0;d<c.length;d++){var f=c.charAt(d);f in a||(a[f]=e.charAt(d))}c="";for(d=0;d<b.length;d++)f=b.charAt(d),c+=f in a?a[f]:f;return c},3);Q("true",2,!1,!1,k(!0),0);function E(a,b){this.V=a;this.P=void 0!==b?b:null;this.r=null;switch(a){case "comment":this.r=8;break;case "text":this.r=3;break;case "processing-instruction":this.r=7;break;case "node":break;default:throw Error("Unexpected argument");}}function Ka(a){return"comment"==a||"text"==a||"processing-instruction"==a||"node"==a}E.prototype.matches=function(a){return null===this.r||this.r==a.nodeType};E.prototype.getName=h("V");
E.prototype.toString=function(){var a="Kind Test: "+this.V;null===this.P||(a+=J(this.P));return a};function La(a){I.call(this,3);this.U=a.substring(1,a.length-1)}n(La,I);La.prototype.evaluate=h("U");La.prototype.toString=function(){return"Literal: "+this.U};function R(a,b){this.g=a.toLowerCase();this.I=b?b.toLowerCase():"http://www.w3.org/1999/xhtml"}R.prototype.matches=function(a){var b=a.nodeType;return 1!=b&&2!=b?!1:"*"!=this.g&&this.g!=a.nodeName.toLowerCase()?!1:this.I==(a.namespaceURI?a.namespaceURI.toLowerCase():"http://www.w3.org/1999/xhtml")};R.prototype.getName=h("g");R.prototype.toString=function(){return"Name Test: "+("http://www.w3.org/1999/xhtml"==this.I?"":this.I+":")+this.g};function Ma(a){I.call(this,1);this.W=a}n(Ma,I);Ma.prototype.evaluate=h("W");Ma.prototype.toString=function(){return"Number: "+this.W};function Na(a,b){I.call(this,a.d);this.N=a;this.v=b;this.k=a.c();this.f=a.f;if(1==this.v.length){var c=this.v[0];c.F||c.l!=Oa||(c=c.C,"*"!=c.getName()&&(this.u={name:c.getName(),s:null}))}}n(Na,I);function S(){I.call(this,4)}n(S,I);S.prototype.evaluate=function(a){var b=new D;a=a.i;9==a.nodeType?b.add(a):b.add(a.ownerDocument);return b};S.prototype.toString=k("Root Helper Expression");function Pa(){I.call(this,4)}n(Pa,I);Pa.prototype.evaluate=function(a){var b=new D;b.add(a.i);return b};
Pa.prototype.toString=k("Context Helper Expression");
Na.prototype.evaluate=function(a){var b=this.N.evaluate(a);if(!(b instanceof D))throw Error("Filter expression must evaluate to nodeset.");a=this.v;for(var c=0,d=a.length;c<d&&b.j();c++){var e=a[c],f=H(b,e.l.q),g;if(e.c()||e.l!=Qa)if(e.c()||e.l!=Ra)for(g=f.next(),b=e.evaluate(new x(g));null!=(g=f.next());)g=e.evaluate(new x(g)),b=ya(b,g);else g=f.next(),b=e.evaluate(new x(g));else{for(g=f.next();(b=f.next())&&(!g.contains||g.contains(b))&&b.compareDocumentPosition(g)&8;g=b);b=e.evaluate(new x(g))}}return b};
Na.prototype.toString=function(){var a;a="Path Expression:"+J(this.N);if(this.v.length){var b=t(this.v,function(a,b){return a+J(b)},"Steps:");a+=J(b)}return a};function T(a,b){this.b=a;this.q=!!b}function Ga(a,b,c){for(c=c||0;c<a.b.length;c++)for(var d=a.b[c],e=H(b),f=b.j(),g,r=0;g=e.next();r++){var w=a.q?f-r:r+1;g=d.evaluate(new x(g,w,f));if("number"==typeof g)w=w==g;else if("string"==typeof g||"boolean"==typeof g)w=!!g;else if(g instanceof D)w=0<g.j();else throw Error("Predicate.evaluate returned an unexpected type.");w||e.remove()}return b}T.prototype.m=function(){return 0<this.b.length?this.b[0].m():null};
T.prototype.c=function(){for(var a=0;a<this.b.length;a++){var b=this.b[a];if(b.c()||1==b.d||0==b.d)return!0}return!1};T.prototype.j=function(){return this.b.length};T.prototype.toString=function(){return t(this.b,function(a,b){return a+J(b)},"Predicates:")};function U(a,b,c,d){I.call(this,4);this.l=a;this.C=b;this.b=c||new T([]);this.F=!!d;b=this.b.m();a.da&&b&&(this.u={name:b.name,s:b.s});this.k=this.b.c()}n(U,I);
U.prototype.evaluate=function(a){var b=a.i,c=null,c=this.m(),d=null,e=null,f=0;c&&(d=c.name,e=c.s?L(c.s,a):null,f=1);if(this.F)if(this.c()||this.l!=Sa)if(a=H((new U(Ta,new E("node"))).evaluate(a)),b=a.next())for(c=this.n(b,d,e,f);null!=(b=a.next());)c=ya(c,this.n(b,d,e,f));else c=new D;else c=C(this.C,b,d,e),c=Ga(this.b,c,f);else c=this.n(a.i,d,e,f);return c};U.prototype.n=function(a,b,c,d){a=this.l.w(this.C,a,b,c);return a=Ga(this.b,a,d)};
U.prototype.toString=function(){var a;a="Step:"+J("Operator: "+(this.F?"//":"/"));this.l.g&&(a+=J("Axis: "+this.l));a+=J(this.C);if(this.b.j()){var b=t(this.b.b,function(a,b){return a+J(b)},"Predicates:");a+=J(b)}return a};function Ua(a,b,c,d){this.g=a;this.w=b;this.q=c;this.da=d}Ua.prototype.toString=h("g");var Va={};function V(a,b,c,d){if(Va.hasOwnProperty(a))throw Error("Axis already created: "+a);b=new Ua(a,b,c,!!d);return Va[a]=b}
V("ancestor",function(a,b){for(var c=new D,d=b;d=d.parentNode;)a.matches(d)&&c.unshift(d);return c},!0);V("ancestor-or-self",function(a,b){var c=new D,d=b;do a.matches(d)&&c.unshift(d);while(d=d.parentNode);return c},!0);
var Oa=V("attribute",function(a,b){var c=new D,d=a.getName(),e=b.attributes;if(e)if(a instanceof E&&null===a.r||"*"==d)for(var d=0,f;f=e[d];d++)c.add(f);else(f=e.getNamedItem(d))&&c.add(f);return c},!1),Sa=V("child",function(a,b,c,d,e){return wa.call(null,a,b,m(c)?c:null,m(d)?d:null,e||new D)},!1,!0);V("descendant",C,!1,!0);
var Ta=V("descendant-or-self",function(a,b,c,d){var e=new D;B(b,c,d)&&a.matches(b)&&e.add(b);return C(a,b,c,d,e)},!1,!0),Qa=V("following",function(a,b,c,d){var e=new D;do for(var f=b;f=f.nextSibling;)B(f,c,d)&&a.matches(f)&&e.add(f),e=C(a,f,c,d,e);while(b=b.parentNode);return e},!1,!0);V("following-sibling",function(a,b){for(var c=new D,d=b;d=d.nextSibling;)a.matches(d)&&c.add(d);return c},!1);V("namespace",function(){return new D},!1);
var Wa=V("parent",function(a,b){var c=new D;if(9==b.nodeType)return c;if(2==b.nodeType)return c.add(b.ownerElement),c;var d=b.parentNode;a.matches(d)&&c.add(d);return c},!1),Ra=V("preceding",function(a,b,c,d){var e=new D,f=[];do f.unshift(b);while(b=b.parentNode);for(var g=1,r=f.length;g<r;g++){var w=[];for(b=f[g];b=b.previousSibling;)w.unshift(b);for(var va=0,mb=w.length;va<mb;va++)b=w[va],B(b,c,d)&&a.matches(b)&&e.add(b),e=C(a,b,c,d,e)}return e},!0,!0);
V("preceding-sibling",function(a,b){for(var c=new D,d=b;d=d.previousSibling;)a.matches(d)&&c.unshift(d);return c},!0);var Xa=V("self",function(a,b){var c=new D;a.matches(b)&&c.add(b);return c},!1);function Ya(a){I.call(this,1);this.M=a;this.k=a.c();this.f=a.f}n(Ya,I);Ya.prototype.evaluate=function(a){return-K(this.M,a)};Ya.prototype.toString=function(){return"Unary Expression: -"+J(this.M)};function Za(a){I.call(this,4);this.B=a;Aa(this,u(this.B,function(a){return a.c()}));Ba(this,u(this.B,function(a){return a.f}))}n(Za,I);Za.prototype.evaluate=function(a){var b=new D;s(this.B,function(c){c=c.evaluate(a);if(!(c instanceof D))throw Error("Path expression must evaluate to NodeSet.");b=ya(b,c)});return b};Za.prototype.toString=function(){return t(this.B,function(a,b){return a+J(b)},"Union Expression:")};function $a(a,b){this.a=a;this.aa=b}function ab(a){for(var b,c=[];;){W(a,"Missing right hand side of binary expression.");b=bb(a);var d=a.a.next();if(!d)break;var e=(d=Ea[d]||null)&&d.R;if(!e){a.a.back();break}for(;c.length&&e<=c[c.length-1].R;)b=new N(c.pop(),c.pop(),b);c.push(b,d)}for(;c.length;)b=new N(c.pop(),c.pop(),b);return b}function W(a,b){if(a.a.empty())throw Error(b);}function cb(a,b){var c=a.a.next();if(c!=b)throw Error("Bad token, expected: "+b+" got: "+c);}
function db(a){a=a.a.next();if(")"!=a)throw Error("Bad token: "+a);}function eb(a){a=a.a.next();if(2>a.length)throw Error("Unclosed literal string");return new La(a)}function fb(a){var b=a.a.next(),c=b.indexOf(":");if(-1==c)return new R(b);var d=b.substring(0,c);a=a.aa(d);if(!a)throw Error("Namespace prefix not declared: "+d);b=b.substr(c+1);return new R(b,a)}
function gb(a){var b,c=[],d;if("/"==z(a.a)||"//"==z(a.a)){b=a.a.next();d=z(a.a);if("/"==b&&(a.a.empty()||"."!=d&&".."!=d&&"@"!=d&&"*"!=d&&!/(?![0-9])[\w]/.test(d)))return new S;d=new S;W(a,"Missing next location step.");b=hb(a,b);c.push(b)}else{a:{b=z(a.a);d=b.charAt(0);switch(d){case "$":throw Error("Variable reference not allowed in HTML XPath");case "(":a.a.next();b=ab(a);W(a,'unclosed "("');cb(a,")");break;case '"':case "'":b=eb(a);break;default:if(isNaN(+b))if(!Ka(b)&&/(?![0-9])[\w]/.test(d)&&
"("==z(a.a,1)){b=a.a.next();b=Ja[b]||null;a.a.next();for(d=[];")"!=z(a.a);){W(a,"Missing function argument list.");d.push(ab(a));if(","!=z(a.a))break;a.a.next()}W(a,"Unclosed function argument list.");db(a);b=new Ha(b,d)}else{b=null;break a}else b=new Ma(+a.a.next())}"["==z(a.a)&&(d=new T(ib(a)),b=new Fa(b,d))}if(b)if("/"==z(a.a)||"//"==z(a.a))d=b;else return b;else b=hb(a,"/"),d=new Pa,c.push(b)}for(;"/"==z(a.a)||"//"==z(a.a);)b=a.a.next(),W(a,"Missing next location step."),b=hb(a,b),c.push(b);return new Na(d,
c)}
function hb(a,b){var c,d,e;if("/"!=b&&"//"!=b)throw Error('Step op should be "/" or "//"');if("."==z(a.a))return d=new U(Xa,new E("node")),a.a.next(),d;if(".."==z(a.a))return d=new U(Wa,new E("node")),a.a.next(),d;var f;if("@"==z(a.a))f=Oa,a.a.next(),W(a,"Missing attribute name");else if("::"==z(a.a,1)){if(!/(?![0-9])[\w]/.test(z(a.a).charAt(0)))throw Error("Bad token: "+a.a.next());c=a.a.next();f=Va[c]||null;if(!f)throw Error("No axis with name: "+c);a.a.next();W(a,"Missing node name")}else f=Sa;
c=z(a.a);if(/(?![0-9])[\w]/.test(c.charAt(0)))if("("==z(a.a,1)){if(!Ka(c))throw Error("Invalid node type: "+c);c=a.a.next();if(!Ka(c))throw Error("Invalid type name: "+c);cb(a,"(");W(a,"Bad nodetype");e=z(a.a).charAt(0);var g=null;if('"'==e||"'"==e)g=eb(a);W(a,"Bad nodetype");db(a);c=new E(c,g)}else c=fb(a);else if("*"==c)c=fb(a);else throw Error("Bad token: "+a.a.next());e=new T(ib(a),f.q);return d||new U(f,c,e,"//"==b)}
function ib(a){for(var b=[];"["==z(a.a);){a.a.next();W(a,"Missing predicate expression.");var c=ab(a);b.push(c);W(a,"Unclosed predicate expression.");cb(a,"]")}return b}function bb(a){if("-"==z(a.a))return a.a.next(),new Ya(bb(a));var b=gb(a);if("|"!=z(a.a))a=b;else{for(b=[b];"|"==a.a.next();)W(a,"Missing next union location path."),b.push(gb(a));a.a.back();a=new Za(b)}return a};function jb(a){switch(a.nodeType){case 1:return ea(kb,a);case 9:return jb(a.documentElement);case 2:return a.ownerElement?jb(a.ownerElement):lb;case 11:case 10:case 6:case 12:return lb;default:return a.parentNode?jb(a.parentNode):lb}}function lb(){return null}function kb(a,b){if(a.prefix==b)return a.namespaceURI||"http://www.w3.org/1999/xhtml";var c=a.getAttributeNode("xmlns:"+b);return c&&c.specified?c.value||null:a.parentNode&&9!=a.parentNode.nodeType?kb(a.parentNode,b):null};function nb(a,b){if(!a.length)throw Error("Empty XPath expression.");var c=qa(a);if(c.empty())throw Error("Invalid XPath expression.");b?"function"==aa(b)||(b=da(b.lookupNamespaceURI,b)):b=k(null);var d=ab(new $a(c,b));if(!c.empty())throw Error("Bad token: "+c.next());this.evaluate=function(a,b){var c=d.evaluate(new x(a));return new X(c,b)}}
function X(a,b){if(0==b)if(a instanceof D)b=4;else if("string"==typeof a)b=2;else if("number"==typeof a)b=1;else if("boolean"==typeof a)b=3;else throw Error("Unexpected evaluation result.");if(2!=b&&1!=b&&3!=b&&!(a instanceof D))throw Error("value could not be converted to the specified type");this.resultType=b;var c;switch(b){case 2:this.stringValue=a instanceof D?G(a):""+a;break;case 1:this.numberValue=a instanceof D?+G(a):+a;break;case 3:this.booleanValue=a instanceof D?0<a.j():!!a;break;case 4:case 5:case 6:case 7:var d=
H(a);c=[];for(var e=d.next();e;e=d.next())c.push(e);this.snapshotLength=a.j();this.invalidIteratorState=!1;break;case 8:case 9:this.singleNodeValue=F(a);break;default:throw Error("Unknown XPathResult type.");}var f=0;this.iterateNext=function(){if(4!=b&&5!=b)throw Error("iterateNext called with wrong result type");return f>=c.length?null:c[f++]};this.snapshotItem=function(a){if(6!=b&&7!=b)throw Error("snapshotItem called with wrong result type");return a>=c.length||0>a?null:c[a]}}X.ANY_TYPE=0;
X.NUMBER_TYPE=1;X.STRING_TYPE=2;X.BOOLEAN_TYPE=3;X.UNORDERED_NODE_ITERATOR_TYPE=4;X.ORDERED_NODE_ITERATOR_TYPE=5;X.UNORDERED_NODE_SNAPSHOT_TYPE=6;X.ORDERED_NODE_SNAPSHOT_TYPE=7;X.ANY_UNORDERED_NODE_TYPE=8;X.FIRST_ORDERED_NODE_TYPE=9;function ob(a){this.lookupNamespaceURI=jb(a)}
function pb(a){a=a||l;var b=a.document;b.evaluate||(a.XPathResult=X,b.evaluate=function(a,b,e,f){return(new nb(a,e)).evaluate(b,f)},b.createExpression=function(a,b){return new nb(a,b)},b.createNSResolver=function(a){return new ob(a)})};var qb=function(){var a={fa:"http://www.w3.org/2000/svg"};return function(b){return a[b]||null}}();function rb(a,b){var c=function(){var c;var e=na(b);pa&&pb(e?e.parentWindow||e.defaultView:window);try{var f=e.createNSResolver?e.createNSResolver(e.documentElement):qb;c=e.evaluate(a,b,f,7,null)}catch(g){throw new p(32,"Unable to locate an element with the xpath expression "+a+" because of the following error:\n"+g);}if(c){for(var e=c.snapshotLength,f=[],r=0;r<e;++r)f.push(c.snapshotItem(r));return f}return b.selectNodes?(c=na(b),c.setProperty&&c.setProperty("SelectionLanguage","XPath"),b.selectNodes(a)):
[]}();s(c,function(b){if(!b||1!=b.nodeType)throw new p(32,'The result of the xpath expression "'+a+'" is: '+b+". It should be an element.");});return c}var Y=["_"],Z=l;Y[0]in Z||!Z.execScript||Z.execScript("var "+Y[0]);for(var $;Y.length&&($=Y.shift());)Y.length||void 0===rb?Z=Z[$]?Z[$]:Z[$]={}:Z[$]=rb;; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null,document:typeof window!=undefined?window.document:null}, arguments);}
