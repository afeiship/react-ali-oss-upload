!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("next-ali-oss"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["classnames","next-ali-oss","noop","object-assign","prop-types","react","react-dom"],t):"object"==typeof exports?exports.ReactAliOssUpload=t(require("classnames"),require("next-ali-oss"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):e.ReactAliOssUpload=t(e.classnames,e["next-ali-oss"],e.noop,e["object-assign"],e["prop-types"],e.react,e["react-dom"])}(this,function(e,t,n,o,r,a,i){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=o(r);t.default=a.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,l,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(7),d=o(f),m=n(8),g=(o(m),n(6)),y=o(g),v=n(2),b=o(v),h=n(4),x=o(h),j=n(5),_=(o(j),n(3)),O=o(_),q="image/jpg,image/jpeg,image/png,image/gif",w="/",C=(l=u=function(e){function t(){var e,n,o,r;a(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o._onChange=function(e){var t=o.props,n=t.options,r=t.onChange,a=t.imgServer,i=t.filename,s=e.target.files,u=nx.map(s,function(e,t){var o=i(t),r=t.type.split(w)[1],s=o+"."+r,u=a+w+s;return{file:t,name:s,url:u,options:n}});o._instance.uploads(u).then(function(e){r({target:{files:s,value:u}})})},r=n,i(o,r)}return s(t,e),p(t,[{key:"componentDidMount",value:function(){var e=this.props.ossToken;this._instance=O.default.getInstance(e)}},{key:"componentWillUnmount",value:function(){this._instance=null}},{key:"render",value:function(){var e=this.props,t=e.className,n=(e.options,e.filename,e.imgServer,e.value,e.onChange,e.ossToken,r(e,["className","options","filename","imgServer","value","onChange","ossToken"]));return d.default.createElement("input",c({className:(0,b.default)("react-ali-oss-upload",t),type:"file",onChange:this._onChange},n))}}]),t}(f.Component),u.propTypes={className:y.default.string,name:y.default.string,multiple:y.default.bool,onChange:y.default.func,value:y.default.any,accept:y.default.string,ossToken:y.default.object,filename:y.default.func,imgServer:y.default.string,options:y.default.object},u.defaultProps={name:"file",multiple:!0,onChange:x.default,accept:q,ossToken:null,filename:Date.now},l);t.default=C},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=r},function(e,t){e.exports=a},function(e,t){e.exports=i}])});
//# sourceMappingURL=react-ali-oss-upload.js.map