!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.UIAutomator={})}(this,function(e){"use strict";var t={},n=[],o=[];function r(e,r){var i,s,l,a,c=o;for(a=arguments.length;a-- >2;)n.push(arguments[a]);for(r&&null!=r.children&&(n.length||n.push(r.children),delete r.children);n.length;)if((s=n.pop())&&void 0!==s.pop)for(a=s.length;a--;)n.push(s[a]);else"boolean"==typeof s&&(s=null),(l="function"!=typeof e)&&(null==s?s="":"number"==typeof s?s=String(s):"string"!=typeof s&&(l=!1)),l&&i?c[c.length-1]+=s:c===o?c=[s]:c.push(s),i=l;var p=new function(){};return p.nodeName=e,p.children=c,p.attributes=null==r?void 0:r,p.key=null==r?void 0:r.key,void 0!==t.vnode&&t.vnode(p),p}function i(e,t){for(var n in t)e[n]=t[n];return e}var s="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,l=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,a=[];function c(e){!e._dirty&&(e._dirty=!0)&&1==a.push(e)&&(t.debounceRendering||s)(p)}function p(){var e,t=a;for(a=[];e=t.pop();)e._dirty&&U(e)}function u(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function d(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===l.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var s=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,v,s):e.removeEventListener(t,v,s),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var a=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function v(e){return this._listeners[e.type](t.event&&t.event(e)||e)}var m=[],_=0,b=!1,g=!1;function y(){for(var e;e=m.pop();)t.afterMount&&t.afterMount(e),e.componentDidMount&&e.componentDidMount()}function x(e,t,n,o,r,i){_++||(b=null!=r&&void 0!==r.ownerSVGElement,g=null!=e&&!("__preactattr_"in e));var s=C(e,t,n,o,i);return r&&s.parentNode!==r&&r.appendChild(s),--_||(g=!1,i||y()),s}function C(e,t,n,o,r){var i=e,s=b;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),w(e,!0))),i.__preactattr_=!0,i;var l,a,c=t.nodeName;if("function"==typeof c)return function(e,t,n,o){var r=e&&e._component,i=r,s=e,l=r&&e._componentConstructor===t.nodeName,a=l,c=d(t);for(;r&&!a&&(r=r._parentComponent);)a=r.constructor===t.nodeName;r&&a&&(!o||r._component)?(M(r,c,3,n,o),e=r.base):(i&&!l&&(E(i),e=s=null),r=S(t.nodeName,c,n),e&&!r.nextBase&&(r.nextBase=e,s=null),M(r,c,1,n,o),e=r.base,s&&e!==s&&(s._component=null,w(s,!1)));return e}(e,t,n,o);if(b="svg"===c||"foreignObject"!==c&&b,c=String(c),(!e||!u(e,c))&&(l=c,(a=b?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l)).normalizedNodeName=l,i=a,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),w(e,!0)}var p=i.firstChild,v=i.__preactattr_,m=t.children;if(null==v){v=i.__preactattr_={};for(var _=i.attributes,y=_.length;y--;)v[_[y].name]=_[y].value}return!g&&m&&1===m.length&&"string"==typeof m[0]&&null!=p&&void 0!==p.splitText&&null==p.nextSibling?p.nodeValue!=m[0]&&(p.nodeValue=m[0]):(m&&m.length||null!=p)&&function(e,t,n,o,r){var i,s,l,a,c,p=e.childNodes,d=[],h={},v=0,m=0,_=p.length,b=0,g=t?t.length:0;if(0!==_)for(var y=0;y<_;y++){var x=p[y],N=x.__preactattr_,k=g&&N?x._component?x._component.__key:N.key:null;null!=k?(v++,h[k]=x):(N||(void 0!==x.splitText?!r||x.nodeValue.trim():r))&&(d[b++]=x)}if(0!==g)for(var y=0;y<g;y++){a=t[y],c=null;var k=a.key;if(null!=k)v&&void 0!==h[k]&&(c=h[k],h[k]=void 0,v--);else if(!c&&m<b)for(i=m;i<b;i++)if(void 0!==d[i]&&(S=s=d[i],M=r,"string"==typeof(P=a)||"number"==typeof P?void 0!==S.splitText:"string"==typeof P.nodeName?!S._componentConstructor&&u(S,P.nodeName):M||S._componentConstructor===P.nodeName)){c=s,d[i]=void 0,i===b-1&&b--,i===m&&m++;break}c=C(c,a,n,o),l=p[y],c&&c!==e&&c!==l&&(null==l?e.appendChild(c):c===l.nextSibling?f(l):e.insertBefore(c,l))}var S,P,M;if(v)for(var y in h)void 0!==h[y]&&w(h[y],!1);for(;m<=b;)void 0!==(c=d[b--])&&w(c,!1)}(i,m,n,o,g||null!=v.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||h(e,o,n[o],n[o]=void 0,b);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||h(e,o,n[o],n[o]=t[o],b)}(i,t.attributes,v),b=s,i}function w(e,t){var n=e._component;n?E(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||f(e),N(e))}function N(e){for(e=e.lastChild;e;){var t=e.previousSibling;w(e,!0),e=t}}var k={};function S(e,t,n){var o,r=k[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),T.call(o,t,n)):((o=new T(t,n)).constructor=e,o.render=P),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function P(e,t,n){return this.constructor(e,n)}function M(e,n,o,r,i){e._disable||(e._disable=!0,(e.__ref=n.ref)&&delete n.ref,(e.__key=n.key)&&delete n.key,!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(n,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=n,e._disable=!1,0!==o&&(1!==o&&!1===t.syncComponentUpdates&&e.base?c(e):U(e,1,i)),e.__ref&&e.__ref(e))}function U(e,n,o,r){if(!e._disable){var s,l,a,c=e.props,p=e.state,u=e.context,f=e.prevProps||c,h=e.prevState||p,v=e.prevContext||u,b=e.base,g=e.nextBase,C=b||g,N=e._component,k=!1;if(b&&(e.props=f,e.state=h,e.context=v,2!==n&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(c,p,u)?k=!0:e.componentWillUpdate&&e.componentWillUpdate(c,p,u),e.props=c,e.state=p,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!k){s=e.render(c,p,u),e.getChildContext&&(u=i(i({},u),e.getChildContext()));var P,T,H=s&&s.nodeName;if("function"==typeof H){var O=d(s);(l=N)&&l.constructor===H&&O.key==l.__key?M(l,O,1,u,!1):(P=l,e._component=l=S(H,O,u),l.nextBase=l.nextBase||g,l._parentComponent=e,M(l,O,0,u,!1),U(l,1,o,!0)),T=l.base}else a=C,(P=N)&&(a=e._component=null),(C||1===n)&&(a&&(a._component=null),T=x(a,s,u,o||!b,C&&C.parentNode,!0));if(C&&T!==C&&l!==N){var L=C.parentNode;L&&T!==L&&(L.replaceChild(T,C),P||(C._component=null,w(C,!1)))}if(P&&E(P),e.base=T,T&&!r){for(var j=e,A=e;A=A._parentComponent;)(j=A).base=T;T._component=j,T._componentConstructor=j.constructor}}if(!b||o?m.unshift(e):k||(e.componentDidUpdate&&e.componentDidUpdate(f,h,v),t.afterUpdate&&t.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);_||r||y()}}function E(e){t.beforeUnmount&&t.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;o?E(o):n&&(n.__preactattr_&&n.__preactattr_.ref&&n.__preactattr_.ref(null),e.nextBase=n,f(n),function(e){var t=e.constructor.name;(k[t]||(k[t]=[])).push(e)}(e),N(n)),e.__ref&&e.__ref(null)}function T(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}i(T.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),c(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),U(this,2)},render:function(){}});var H,O=(H=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}H(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),L=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},j=function(e,t){var n=Object.keys(e),o=Object.keys(t);return n.length===o.length&&(n.length+o.length===0||n.every(function(n){return e[n]===t[n]}))};const{dispatch:A,connect:I,getState:B}=function(e){void 0===e&&(e={});var t=e,n=[];return{connect:function(e,t){return function(o){return function(i){function s(e){var t=i.call(this,e)||this,o=t;return o.execProps=o.execProps.bind(o),o.tempProps=o.execProps(),o.tempUpdate=function(){var e=o.execProps();j(o.tempProps,e)||(o.tempProps=e,o.forceUpdate&&o.forceUpdate())},n.push(o.tempUpdate),t}return O(s,i),s.prototype.execProps=function(){var n=this.props,o=e(n),r={};return t&&(r=t(Object.assign({},n,o))),Object.assign({},n,o,r)},s.prototype.componentWillUnmount=function(){n.splice(n.indexOf(this.tempUpdate),1)},s.prototype.render=function(){return r(o,L({},this.tempProps))},s}(T)}},getState:function(){return t},dispatch:function(e,o){var r=e(t);z&&z.map(function(e){return e(t,r,o)}),r!==t&&(t=r,n.map(function(e){return e()}))}}}({});var z;const W=e=>A(t=>({...t,focus:e})),G=e=>{const{expends:t,...n}=B(),o=new Set(t);if(o.has(e))o.delete(e);else{let t=e;do{o.add(t),t=t.parentElement}while(t)}A(()=>({...n,expends:o}))},R=(e,t,n)=>{const{left:o,top:r,right:i,bottom:s}=e;return t>=o&&t<=i&&n>=r&&n<=s};let V,D,$;var q=I(({HEIGHT:e})=>{const{screenShot:t,width:n,height:o,focus:r,doc:i,expends:s,needReload:l}=B();if(l&&i){A(e=>({...e,needReload:!1}));const t=o/e;let n=!1,l=[].map.call(i.querySelectorAll("[bounds]"),e=>{const[t,n,o,r]=e.getAttribute("bounds").match(/\d+/g).map(Number);return{bounds:{left:t,top:n,right:o,bottom:r},size:(o-t)*(r-n),node:e}}).sort((e,t)=>e.size-t.size);V=(e=>{if(!n)return;const{offsetX:o,offsetY:i}=e;for(let e=0;e<l.length;e++){const{node:n,bounds:a}=l[e];if(R(a,o*t,i*t)){if(n===r)return;return W(n),void(s.has(n)||G(n))}}}),D=(()=>{n=!0}),$=(()=>{n=!n})}return{screenShot:t,width:n,height:o,focus:r,doc:i,onMouseMove:V,onMouseEnter:D,onClick:$}})(class extends T{render(){const{screenShot:e,width:t,height:n,HEIGHT:o,focus:i,onMouseMove:s,onMouseEnter:l,onClick:a}=this.props,c=o/n,p={position:"relative",margin:"0 auto",height:c*n,width:c*t,background:`url(${e}) no-repeat center center`,backgroundSize:"100% 100%"};let u;if(i){const[e,t,n,o]=i.getAttribute("bounds").match(/\d+/g).map(Number);u={position:"absolute",left:c*e,top:c*t,width:c*(n-e),height:c*(o-t),border:"1px solid red"}}return r("div",{style:p,onMouseMove:s,onMouseEnter:l,onClick:a},r("div",{style:Object.assign({transition:"all .2s ease"},u)}),r("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0}}))}});const F=e=>{const t=e.getAttribute("class");return t&&t.split(".").pop()},X=Math.random().toString(36).replace("0.","focus_");var Y=I(()=>{const{doc:e,focus:t,expends:n}=B();return{doc:e,focus:t,onFocus:W,expends:n,onExpend:G}})(class extends T{constructor(){super(...arguments),this.loop=((e,t)=>{const{focus:n,expends:o,onExpend:i,onFocus:s}=this.props,{loop:l}=this,a=F(e);return r("li",{style:{paddingLeft:12}},r("div",{className:n===e?X:"",tabIndex:-1,style:{cursor:"pointer",lineHeight:2,background:n===e?"#d2d2d2":null},onClick:()=>i(e)},e.children.length?r("b",null,o.has(e)?"▾":"▸"):" "," ",t?"ROOT":r("span",{onClick:()=>s(e)},"(",e.getAttribute("index"),") ",a," ",e.getAttribute("bounds"))),o.has(e)&&r("ul",{style:{padding:0,listStyle:"none"}},[].slice.call(e.children).map((e,t)=>l(e))))})}componentDidUpdate(){let e=document.querySelector(`.${X}`);e&&e.focus()}render(){const{loop:e}=this,{doc:t}=this.props;return r("ul",{style:{fontSize:12,padding:0,listStyle:"none"}},e(t.documentElement,!0))}});var J=I(()=>{const{focus:e}=B();return{focus:e}})(class extends T{render(){const{focus:e}=this.props;return r("div",{style:{fontSize:12,padding:6}},e&&r("table",{style:{width:"100%"}},[].slice.call(e.attributes).map(({name:e,value:t})=>r("tr",null,r("td",null,e),r("td",null,r("input",{type:"text",readOnly:!0,value:t,style:{border:0,width:"100%"},onFocus:function(e){e.target.select()}}))))))}}),K=I(()=>{const{doc:e}=B();return{doc:e}})(({doc:e,HEIGHT:t=750})=>e?r("div",{style:{position:"relative",width:"100%",height:t,border:"1px solid #ccc"}},r("div",{style:{position:"absolute",left:0,top:0,width:"50%",height:t,background:"#272822"}},r(q,{HEIGHT:t})),r("div",{style:{position:"absolute",right:0,top:0,width:"50%",height:t}},r("div",{style:{position:"absolute",left:0,top:0,width:"100%",height:t/2,overflow:"auto"}},r(Y,null)),r("div",{style:{position:"absolute",left:0,bottom:0,width:"100%",height:t/2,borderTop:"1px solid #ccc",overflow:"auto"}},r(J,null)))):r("h2",null,"Loading..."));var Q,Z;const ee=e=>{const{HEIGHT:t,loadXML:n,screenShot:o,onload:i,onerror:s=(e=>alert(e.toString()))}=e,l=new Image;return l.addEventListener("load",function(e){const{width:t,height:r}=l;i&&i(l),n().then(e=>{const[n,i,s,l]=e.querySelector("[bounds]").getAttribute("bounds").match(/\d+/g);A(n=>({...n,width:Number(s),height:Number(s)*r/t,screenShot:o,doc:e,focus:null,expends:new Set}))}).catch(s)}),A(e=>({needReload:!0})),l.src=o,r(K,{HEIGHT:t})};e.renderContainer=(e=>{const{el:t,...n}=e,{height:o}=t.getBoundingClientRect();Q=r(ee,Object.assign({},n,{HEIGHT:o})),x(Z,Q,{},!1,t,!1)}),e.Container=ee,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=bundle.js.map