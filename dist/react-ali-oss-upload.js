!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("next-ali-oss"),require("next-guid"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["classnames","next-ali-oss","next-guid","noop","object-assign","prop-types","react","react-dom"],t):"object"==typeof exports?exports.ReactAliOssUpload=t(require("classnames"),require("next-ali-oss"),require("next-guid"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):e.ReactAliOssUpload=t(e.classnames,e["next-ali-oss"],e["next-guid"],e.noop,e["object-assign"],e["prop-types"],e.react,e["react-dom"])}(this,function(e,t,n,r,o,a,i,u){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o);t.default=a.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,c,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(8),d=r(p),g=n(9),m=(r(g),n(7)),y=r(m),v=n(2),b=(r(v),n(5)),h=r(b),x=n(6);r(x);n(4);var j=n(3),_=r(j),O="image/jpg,image/jpeg,image/png,image/gif",q="/",w=(c=s=function(e){function t(){var e,n,r,o;a(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r._onChange=function(e){var t=r.props,n=t.onChange,o=t.imgServer,a=t.filename,i=e.target.files,u=nx.map(i,function(e,t){var n=a(t),r=t.type.split(q)[1],i=n+"."+r,u=o+q+i;return{file:t,name:i,url:u}});r._instance.uploads(u).then(function(e){n({target:{files:i,value:u}})})},o=n,i(r,o)}return u(t,e),f(t,[{key:"componentDidMount",value:function(){var e=this.props.ossToken;this._instance=_.default.getInstance(e)}},{key:"componentWillUnmount",value:function(){this._instance=null}},{key:"render",value:function(){var e=this.props,t=(e.className,e.filename,e.imgServer,e.onChange,e.ossToken,o(e,["className","filename","imgServer","onChange","ossToken"]));return d.default.createElement("input",l({type:"file",onChange:this._onChange},t))}}]),t}(p.Component),s.propTypes={className:y.default.string,name:y.default.string,multiple:y.default.bool,onChange:y.default.func,accept:y.default.string,ossToken:y.default.object,filename:y.default.func,imgServer:y.default.string},s.defaultProps={name:"file",multiple:!0,onChange:h.default,accept:O,ossToken:null,filename:nx.guid},c);t.default=w},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t){e.exports=i},function(e,t){e.exports=u}])});
//# sourceMappingURL=react-ali-oss-upload.js.map