!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("next-ali-oss"),require("next-guid"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["classnames","next-ali-oss","next-guid","noop","object-assign","prop-types","react","react-dom"],t):"object"==typeof exports?exports.ReactAliOssUpload=t(require("classnames"),require("next-ali-oss"),require("next-guid"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):e.ReactAliOssUpload=t(e.classnames,e["next-ali-oss"],e["next-guid"],e.noop,e["object-assign"],e["prop-types"],e.react,e["react-dom"])}(this,function(e,t,n,o,r,i,a,u){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=o(r);t.default=i.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,c,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(8),d=o(f),g=n(9),m=(o(g),n(7)),y=o(m),b=n(2),v=(o(b),n(5)),h=o(v),x=n(6);o(x);n(4);var j=n(3),_=o(j),O="image/jpg,image/jpeg,image/png,image/gif",q="/",w=(c=s=function(e){function t(){var e,n,o,r;i(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o._onChange=function(e){var t=o.props,n=t.options,r=t.onChange,i=t.imgServer,a=t.filename,u=e.target.files,s=nx.map(u,function(e,t){var o=a(t),r=t.type.split(q)[1],u=o+"."+r,s=i+q+u;return{file:t,name:u,url:s,options:n}});o._instance.uploads(s).then(function(e){r({target:{files:u,value:s}})})},r=n,a(o,r)}return u(t,e),p(t,[{key:"componentDidMount",value:function(){var e=this.props.ossToken;this._instance=_.default.getInstance(e)}},{key:"componentWillUnmount",value:function(){this._instance=null}},{key:"render",value:function(){var e=this.props,t=(e.className,e.options,e.filename,e.imgServer,e.onChange,e.ossToken,r(e,["className","options","filename","imgServer","onChange","ossToken"]));return d.default.createElement("input",l({type:"file"},t,{onChange:this._onChange}))}}]),t}(f.Component),s.propTypes={className:y.default.string,name:y.default.string,multiple:y.default.bool,onChange:y.default.func,accept:y.default.string,ossToken:y.default.object,filename:y.default.func,imgServer:y.default.string,options:y.default.object},s.defaultProps={name:"file",multiple:!0,onChange:h.default,accept:O,ossToken:null,filename:nx.guid},c);t.default=w},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=r},function(e,t){e.exports=i},function(e,t){e.exports=a},function(e,t){e.exports=u}])});
//# sourceMappingURL=react-ali-oss-upload.js.map