!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.UIAutomator=t()}(this,function(){"use strict";var e={},t=[],n=[];function o(o,r){var i,s,l,a,c=n;for(a=arguments.length;a-- >2;)t.push(arguments[a]);for(r&&null!=r.children&&(t.length||t.push(r.children),delete r.children);t.length;)if((s=t.pop())&&void 0!==s.pop)for(a=s.length;a--;)t.push(s[a]);else"boolean"==typeof s&&(s=null),(l="function"!=typeof o)&&(null==s?s="":"number"==typeof s?s=String(s):"string"!=typeof s&&(l=!1)),l&&i?c[c.length-1]+=s:c===n?c=[s]:c.push(s),i=l;var p=new function(){};return p.nodeName=o,p.children=c,p.attributes=null==r?void 0:r,p.key=null==r?void 0:r.key,void 0!==e.vnode&&e.vnode(p),p}function r(e,t){for(var n in t)e[n]=t[n];return e}var i="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,s=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,l=[];function a(t){!t._dirty&&(t._dirty=!0)&&1==l.push(t)&&(e.debounceRendering||i)(c)}function c(){var e,t=l;for(l=[];e=t.pop();)e._dirty&&U(e)}function p(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function u(e){var t=r({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===s.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,h,l):e.removeEventListener(t,h,l),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var a=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function h(t){return this._listeners[t.type](e.event&&e.event(t)||t)}var v=[],m=0,_=!1,b=!1;function g(){for(var t;t=v.pop();)e.afterMount&&e.afterMount(t),t.componentDidMount&&t.componentDidMount()}function y(e,t,n,o,r,i){m++||(_=null!=r&&void 0!==r.ownerSVGElement,b=null!=e&&!("__preactattr_"in e));var s=x(e,t,n,o,i);return r&&s.parentNode!==r&&r.appendChild(s),--m||(b=!1,i||g()),s}function x(e,t,n,o,r){var i=e,s=_;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),C(e,!0))),i.__preactattr_=!0,i;var l,a,c=t.nodeName;if("function"==typeof c)return function(e,t,n,o){var r=e&&e._component,i=r,s=e,l=r&&e._componentConstructor===t.nodeName,a=l,c=u(t);for(;r&&!a&&(r=r._parentComponent);)a=r.constructor===t.nodeName;r&&a&&(!o||r._component)?(P(r,c,3,n,o),e=r.base):(i&&!l&&(M(i),e=s=null),r=N(t.nodeName,c,n),e&&!r.nextBase&&(r.nextBase=e,s=null),P(r,c,1,n,o),e=r.base,s&&e!==s&&(s._component=null,C(s,!1)));return e}(e,t,n,o);if(_="svg"===c||"foreignObject"!==c&&_,c=String(c),(!e||!p(e,c))&&(l=c,(a=_?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l)).normalizedNodeName=l,i=a,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),C(e,!0)}var h=i.firstChild,v=i.__preactattr_,m=t.children;if(null==v){v=i.__preactattr_={};for(var g=i.attributes,y=g.length;y--;)v[g[y].name]=g[y].value}return!b&&m&&1===m.length&&"string"==typeof m[0]&&null!=h&&void 0!==h.splitText&&null==h.nextSibling?h.nodeValue!=m[0]&&(h.nodeValue=m[0]):(m&&m.length||null!=h)&&function(e,t,n,o,r){var i,s,l,a,c,u=e.childNodes,f=[],h={},v=0,m=0,_=u.length,b=0,g=t?t.length:0;if(0!==_)for(var y=0;y<_;y++){var w=u[y],k=w.__preactattr_,N=g&&k?w._component?w._component.__key:k.key:null;null!=N?(v++,h[N]=w):(k||(void 0!==w.splitText?!r||w.nodeValue.trim():r))&&(f[b++]=w)}if(0!==g)for(var y=0;y<g;y++){a=t[y],c=null;var N=a.key;if(null!=N)v&&void 0!==h[N]&&(c=h[N],h[N]=void 0,v--);else if(!c&&m<b)for(i=m;i<b;i++)if(void 0!==f[i]&&(S=s=f[i],U=r,"string"==typeof(P=a)||"number"==typeof P?void 0!==S.splitText:"string"==typeof P.nodeName?!S._componentConstructor&&p(S,P.nodeName):U||S._componentConstructor===P.nodeName)){c=s,f[i]=void 0,i===b-1&&b--,i===m&&m++;break}c=x(c,a,n,o),l=u[y],c&&c!==e&&c!==l&&(null==l?e.appendChild(c):c===l.nextSibling?d(l):e.insertBefore(c,l))}var S,P,U;if(v)for(var y in h)void 0!==h[y]&&C(h[y],!1);for(;m<=b;)void 0!==(c=f[b--])&&C(c,!1)}(i,m,n,o,b||null!=v.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||f(e,o,n[o],n[o]=void 0,_);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||f(e,o,n[o],n[o]=t[o],_)}(i,t.attributes,v),_=s,i}function C(e,t){var n=e._component;n?M(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||d(e),w(e))}function w(e){for(e=e.lastChild;e;){var t=e.previousSibling;C(e,!0),e=t}}var k={};function N(e,t,n){var o,r=k[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),E.call(o,t,n)):((o=new E(t,n)).constructor=e,o.render=S),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function S(e,t,n){return this.constructor(e,n)}function P(t,n,o,r,i){t._disable||(t._disable=!0,(t.__ref=n.ref)&&delete n.ref,(t.__key=n.key)&&delete n.key,!t.base||i?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),r&&r!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=r),t.prevProps||(t.prevProps=t.props),t.props=n,t._disable=!1,0!==o&&(1!==o&&!1===e.syncComponentUpdates&&t.base?a(t):U(t,1,i)),t.__ref&&t.__ref(t))}function U(t,n,o,i){if(!t._disable){var s,l,a,c=t.props,p=t.state,d=t.context,f=t.prevProps||c,h=t.prevState||p,_=t.prevContext||d,b=t.base,x=t.nextBase,w=b||x,k=t._component,S=!1;if(b&&(t.props=f,t.state=h,t.context=_,2!==n&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(c,p,d)?S=!0:t.componentWillUpdate&&t.componentWillUpdate(c,p,d),t.props=c,t.state=p,t.context=d),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!S){s=t.render(c,p,d),t.getChildContext&&(d=r(r({},d),t.getChildContext()));var E,T,L=s&&s.nodeName;if("function"==typeof L){var O=u(s);(l=k)&&l.constructor===L&&O.key==l.__key?P(l,O,1,d,!1):(E=l,t._component=l=N(L,O,d),l.nextBase=l.nextBase||x,l._parentComponent=t,P(l,O,0,d,!1),U(l,1,o,!0)),T=l.base}else a=w,(E=k)&&(a=t._component=null),(w||1===n)&&(a&&(a._component=null),T=y(a,s,d,o||!b,w&&w.parentNode,!0));if(w&&T!==w&&l!==k){var A=w.parentNode;A&&T!==A&&(A.replaceChild(T,w),E||(w._component=null,C(w,!1)))}if(E&&M(E),t.base=T,T&&!i){for(var j=t,H=t;H=H._parentComponent;)(j=H).base=T;T._component=j,T._componentConstructor=j.constructor}}if(!b||o?v.unshift(t):S||(t.componentDidUpdate&&t.componentDidUpdate(f,h,_),e.afterUpdate&&e.afterUpdate(t)),null!=t._renderCallbacks)for(;t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);m||i||g()}}function M(t){e.beforeUnmount&&e.beforeUnmount(t);var n=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var o=t._component;o?M(o):n&&(n.__preactattr_&&n.__preactattr_.ref&&n.__preactattr_.ref(null),t.nextBase=n,d(n),function(e){var t=e.constructor.name;(k[t]||(k[t]=[])).push(e)}(t),w(n)),t.__ref&&t.__ref(null)}function E(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}r(E.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=r({},n)),r(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),a(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),U(this,2)},render:function(){}});var T,L=(T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}T(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),O=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},A=function(e,t){var n=Object.keys(e),o=Object.keys(t);return n.length===o.length&&(n.length+o.length===0||n.every(function(n){return e[n]===t[n]}))};const{dispatch:j,connect:H,getState:B}=function(e){void 0===e&&(e={});var t=e,n=[];return{connect:function(e,t){return function(r){return function(i){function s(e){var t=i.call(this,e)||this,o=t;return o.execProps=o.execProps.bind(o),o.tempProps=o.execProps(),o.tempUpdate=function(){var e=o.execProps();A(o.tempProps,e)||(o.tempProps=e,o.forceUpdate&&o.forceUpdate())},n.push(o.tempUpdate),t}return L(s,i),s.prototype.execProps=function(){var n=this.props,o=e(n),r={};return t&&(r=t(Object.assign({},n,o))),Object.assign({},n,o,r)},s.prototype.componentWillUnmount=function(){n.splice(n.indexOf(this.tempUpdate),1)},s.prototype.render=function(){return o(r,O({},this.tempProps))},s}(E)}},getState:function(){return t},dispatch:function(e,o){var r=e(t);W&&W.map(function(e){return e(t,r,o)}),r!==t&&(t=r,n.map(function(e){return e()}))}}}({});var W;const I=e=>j(t=>({...t,focus:e})),z=e=>{const{expends:t,...n}=B(),o=new Set(t);if(o.has(e))o.delete(e);else{let t=e;do{o.add(t),t=t.parentElement}while(t)}j(()=>({...n,expends:o}))},V=(e,t,n)=>{const[o,r,i,s]=e.match(/\d+/g).map(Number);return t>=o&&t<=i&&n>=r&&n<=s};let D,G,R;var $=H(({HEIGHT:e})=>{const{screenShot:t,width:n,height:o,focus:r,doc:i,expends:s}=B();if(!D&&i){let t=i.querySelectorAll("[bounds]");const n=o/e;let r=!1,l=!1;D=(e=>{if(r||!l)return;r=!0,setTimeout(function(){r=!1},300);const{offsetX:o,offsetY:i}=e;for(let e=t.length-1;e>0;e--)if(V(t[e].getAttribute("bounds"),o*n,i*n))return I(t[e]),void(s.has(t[e])||z(t[e]))}),G=(()=>{l=!0}),R=(()=>{l=!l})}return{screenShot:t,width:n,height:o,focus:r,doc:i,onMouseMove:D,onMouseEnter:G,onClick:R}})(class extends E{render(){const{screenShot:e,width:t,height:n,HEIGHT:r,focus:i,onMouseMove:s,onMouseEnter:l,onClick:a}=this.props,c=r/n,p={position:"relative",margin:"0 auto",height:c*n,width:c*t,background:`url(${e}) no-repeat center center`,backgroundSize:"100% 100%"};let u;if(i){const[e,t,n,o]=i.getAttribute("bounds").match(/\d+/g).map(Number);u={position:"absolute",left:c*e,top:c*t,width:c*(n-e),height:c*(o-t),border:"1px solid red"}}return o("div",{style:p,onMouseMove:s,onMouseEnter:l,onClick:a},o("div",{style:Object.assign({transition:"all .2s ease"},u)}))}});const F=e=>{const t=e.getAttribute("class");return t&&t.split(".").pop()};var X=H(()=>{const{doc:e,focus:t,expends:n}=B();return{doc:e,focus:t,onFocus:I,expends:n,onExpend:z}})(class extends E{constructor(){super(...arguments),this.loop=((e,t)=>{const{focus:n,expends:r,onExpend:i,onFocus:s}=this.props,{loop:l}=this,a=F(e);return o("li",{style:{paddingLeft:12}},o("div",{tabIndex:-1,style:{cursor:"pointer",lineHeight:2,background:n===e?"#d2d2d2":null},onClick:()=>i(e)},e.children.length?o("b",null,r.has(e)?"▾":"▸"):" "," ",t?"ROOT":o("span",{onClick:()=>s(e)},"(",e.getAttribute("index"),") ",a," ",e.getAttribute("bounds"))),r.has(e)&&o("ul",{style:{padding:0,listStyle:"none"}},[].slice.call(e.children).map((e,t)=>l(e))))})}render(){const{loop:e}=this,{doc:t}=this.props;return o("ul",{style:{fontSize:12,padding:0,listStyle:"none"}},e(t.documentElement,!0))}});var q=H(()=>{const{focus:e}=B();return{focus:e}})(class extends E{render(){const{focus:e}=this.props;return o("div",{style:{fontSize:12,padding:6}},e&&o("table",{style:{width:"100%"}},[].slice.call(e.attributes).map(({name:e,value:t})=>o("tr",null,o("td",null,e),o("td",null,t)))))}});var Y,J,K=H(()=>{const{doc:e}=B();return{doc:e}})(({doc:e})=>e?o("div",{style:{position:"relative",width:960,height:750,border:"1px solid #ccc"}},o("div",{style:{position:"absolute",left:0,top:0,width:480,height:750,background:"#272822"}},o($,{HEIGHT:750})),o("div",{style:{position:"absolute",right:0,top:0,width:480,height:750}},o("div",{style:{position:"absolute",left:0,top:0,width:480,height:375,overflow:"auto"}},o(X,null)),o("div",{style:{position:"absolute",left:0,bottom:0,width:480,height:375,borderTop:"1px solid #ccc",overflow:"auto"}},o(q,null)))):o("h2",null,"Loading..."));return e=>{const{loadXML:t,screenShot:n,el:r,onload:i,onerror:s=(e=>alert(e.toString()))}=e,l=new Image;l.addEventListener("load",function(e){i&&i(l);const{width:o,height:r}=l;t().then(e=>{j(t=>({...t,width:o,height:r,screenShot:n,doc:e,expends:new Set}))}).catch(s)}),l.addEventListener("error",s),l.src=n,Y=o(K,{}),y(J,Y,{},!1,r,!1)}});
//# sourceMappingURL=bundle.js.map