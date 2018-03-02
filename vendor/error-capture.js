/**
 * Bugsnag 4.3
 * Needs to be self-hosted and renamed something else to get around adblockers
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).bugsnag=e()}}(function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e){return i(e,"",[],null),JSON.stringify(e)}function o(e,t,n){this.val=e,this.k=t,this.parent=n,this.count=1}function i(e,t,n,r){if("object"==typeof e&&null!==e){if("function"==typeof e.toJSON){if(e instanceof o)return void e.count++;if(e.toJSON.forceDecirc===undefined)return}for(var a=0;a<n.length;a++)if(n[a]===e)return void(r[t]=new o(e,t,r));n.push(e);for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&i(e[s],s,n,e);n.pop()}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e){var t=[e.tagName];if(e.id&&t.push("#"+e.id),e.className&&e.className.length&&t.push("."+e.className.split(" ").join(".")),!document.querySelectorAll||!Array.prototype.indexOf)return t.join("");try{if(1===document.querySelectorAll(t.join("")).length)return t.join("")}catch(r){return t.join("")}if(e.parentNode.childNodes.length>1){var n=Array.prototype.indexOf.call(e.parentNode.childNodes,e)+1;t.push(":nth-child("+n+")")}return 1===document.querySelectorAll(t.join("")).length?t.join(""):e.parentNode?s(e.parentNode)+" > "+t.join(""):t.join("")}function u(e,t){return e&&e.length<=t?e:e.slice(0,t-"(...)".length)+"(...)"}var c=function(e,t,n){for(var r=n,o=0,i=e.length;o<i;o++)r=t(r,e[o],o,e);return r},f=!{toString:null}.propertyIsEnumerable("toString"),l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],d=function(e){return e<10?"0"+e:e},g={map:function(e,t){return c(e,function(e,n,r,o){return e.concat(t(n,r,o))},[])},reduce:c,filter:function(e,t){return c(e,function(e,n,r,o){return t(n,r,o)?e.concat(n):e},[])},includes:function(e,t){return c(e,function(e,n,r,o){return!0===e||n===t},!1)},keys:function(e){var t=[],n=void 0;for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);if(!f)return t;for(var r=0,o=l.length;r<o;r++)Object.prototype.hasOwnProperty.call(e,l[r])&&t.push(l[r]);return t},isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},isoDate:function(){var e=new Date;return e.getUTCFullYear()+"-"+d(e.getUTCMonth()+1)+"-"+d(e.getUTCDate())+"T"+d(e.getUTCHours())+":"+d(e.getUTCMinutes())+":"+d(e.getUTCSeconds())+"."+(e.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"}},p=g.isoDate,h=function(){function t(){var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"[anonymous]",r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},o=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"manual",i=arguments.length>3&&arguments[3]!==undefined?arguments[3]:p();e(this,t),this.type=o,this.name=n,this.metaData=r,this.timestamp=i}return t.prototype.toJSON=function(){return{type:this.type,name:this.name,timestamp:this.timestamp,metaData:this.metaData}},t}();h.prototype.toJSON.forceDecirc=!0;var m=h,v=g.includes,y=function(e){return v(["undefined","number"],typeof e)&&parseInt(""+e,10)===e&&e>0},b={},w=g.filter,S=g.reduce,O=g.keys,E=g.isArray;b.schema={apiKey:{defaultValue:function(){return null},message:"(string) apiKey is required",validate:function(e){return"string"==typeof e&&e.length}},appVersion:{defaultValue:function(){return null},message:"(string) appVersion should have a value if supplied",validate:function(e){return null===e||"string"==typeof e&&e.length}},autoNotify:{defaultValue:function(){return!0},message:"(boolean) autoNotify should be true or false",validate:function(e){return!0===e||!1===e}},beforeSend:{defaultValue:function(){return[]},message:"(array[Function]) beforeSend should only contain functions",validate:function(e){return"function"==typeof e||E(e)&&w(e,function(e){return"function"==typeof e}).length===e.length}},endpoint:{defaultValue:function(){return"//notify.bugsnag.com"},message:"(string) endpoint should be set",validate:function(){return!0}},sessionEndpoint:{defaultValue:function(){return"//sessions.bugsnag.com"},message:"(string) sessionEndpoint should be set",validate:function(){return!0}},autoCaptureSessions:{defaultValue:function(){return!1},message:"(boolean) autoCaptureSessions should be true/false",validate:function(e){return!0===e||!1===e}},notifyReleaseStages:{defaultValue:function(){return null},message:"(array[string]) notifyReleaseStages should only contain strings",validate:function(e){return null===e||E(e)&&w(e,function(e){return"string"==typeof e}).length===e.length}},releaseStage:{defaultValue:function(){return"production"},message:"(string) releaseStage should be set",validate:function(e){return"string"==typeof e&&e.length}},maxBreadcrumbs:{defaultValue:function(){return 20},message:"(number) maxBreadcrumbs must be a number (≤40) if specified",validate:function(e){return 0===e||y(e)&&(e===undefined||e<=40)}},autoBreadcrumbs:{defaultValue:function(){return!0},message:"(boolean) autoBreadcrumbs should be true or false",validate:function(e){return"boolean"==typeof e}},user:{defaultValue:function(){return null},message:"(object) user should be an object",validate:function(e){return"object"==typeof e}},metaData:{defaultValue:function(){return null},message:"(object) metaData should be an object",validate:function(e){return"object"==typeof e}}},b.mergeDefaults=function(e,t){if(!e||!t)throw new Error("schema.mergeDefaults(opts, schema): opts and schema objects are required");return S(O(t),function(n,r){return n[r]=e[r]!==undefined?e[r]:t[r].defaultValue(),n},{})},b.validate=function(e,t){if(!e||!t)throw new Error("schema.mergeDefaults(opts, schema): opts and schema objects are required");var n=S(O(t),function(n,r){return t[r].validate(e[r])?n:n.concat({key:r,message:t[r].message,value:e[r]})},[]);return{valid:!n.length,errors:n}};var N=function(e){return e.app&&"string"==typeof e.app.releaseStage?e.app.releaseStage:e.config.releaseStage},j=function(e){return!(!e||!e.stack&&!e.stacktrace&&!e["opera#sourceloc"]||"string"!=typeof(e.stack||e.stacktrace||e["opera#sourceloc"]))},R={};!function(e,t){"use strict";"object"==typeof R?R=t():e.StackFrame=t()}(this,function(){"use strict";function e(e){return!isNaN(parseFloat(e))&&isFinite(e)}function t(e){return e.charAt(0).toUpperCase()+e.substring(1)}function n(e){return function(){return this[e]}}function r(e){if(e instanceof Object)for(var n=0;n<u.length;n++)e.hasOwnProperty(u[n])&&e[u[n]]!==undefined&&this["set"+t(u[n])](e[u[n]])}var o=["isConstructor","isEval","isNative","isToplevel"],i=["columnNumber","lineNumber"],a=["fileName","functionName","source"],s=["args"],u=o.concat(i,a,s);r.prototype={getArgs:function(){return this.args},setArgs:function(e){if("[object Array]"!==Object.prototype.toString.call(e))throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof r)this.evalOrigin=e;else{if(!(e instanceof Object))throw new TypeError("Eval Origin must be an Object or StackFrame");this.evalOrigin=new r(e)}},toString:function(){return(this.getFunctionName()||"{anonymous}")+("("+(this.getArgs()||[]).join(",")+")")+(this.getFileName()?"@"+this.getFileName():"")+(e(this.getLineNumber())?":"+this.getLineNumber():"")+(e(this.getColumnNumber())?":"+this.getColumnNumber():"")}};for(var c=0;c<o.length;c++)r.prototype["get"+t(o[c])]=n(o[c]),r.prototype["set"+t(o[c])]=function(e){return function(t){this[e]=Boolean(t)}}(o[c]);for(var f=0;f<i.length;f++)r.prototype["get"+t(i[f])]=n(i[f]),r.prototype["set"+t(i[f])]=function(t){return function(n){if(!e(n))throw new TypeError(t+" must be a Number");this[t]=Number(n)}}(i[f]);for(var l=0;l<a.length;l++)r.prototype["get"+t(a[l])]=n(a[l]),r.prototype["set"+t(a[l])]=function(e){return function(t){this[e]=String(t)}}(a[l]);return r});var D={};!function(e,t){"use strict";"object"==typeof D?D=t(R):e.ErrorStackParser=t(e.StackFrame)}(this,function(e){"use strict";var t=/(^|@)\S+\:\d+/,n=/^\s*at .*(\S+\:\d+|\(native\))/m,r=/^(eval@)?(\[native code\])?$/;return{parse:function(e){if("undefined"!=typeof e.stacktrace||"undefined"!=typeof e["opera#sourceloc"])return this.parseOpera(e);if(e.stack&&e.stack.match(n))return this.parseV8OrIE(e);if(e.stack)return this.parseFFOrSafari(e);throw new Error("Cannot parse given Error object")},extractLocation:function(e){if(-1===e.indexOf(":"))return[e];var t=/(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g,""));return[t[1],t[2]||undefined,t[3]||undefined]},parseV8OrIE:function(t){return t.stack.split("\n").filter(function(e){return!!e.match(n)},this).map(function(t){t.indexOf("(eval ")>-1&&(t=t.replace(/eval code/g,"eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g,""));var n=t.replace(/^\s+/,"").replace(/\(eval code/g,"(").split(/\s+/).slice(1),r=this.extractLocation(n.pop()),o=n.join(" ")||undefined,i=["eval","<anonymous>"].indexOf(r[0])>-1?undefined:r[0];return new e({functionName:o,fileName:i,lineNumber:r[1],columnNumber:r[2],source:t})},this)},parseFFOrSafari:function(t){return t.stack.split("\n").filter(function(e){return!e.match(r)},this).map(function(t){if(t.indexOf(" > eval")>-1&&(t=t.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g,":$1")),-1===t.indexOf("@")&&-1===t.indexOf(":"))return new e({functionName:t});var n=t.split("@"),r=this.extractLocation(n.pop()),o=n.join("@")||undefined;return new e({functionName:o,fileName:r[0],lineNumber:r[1],columnNumber:r[2],source:t})},this)},parseOpera:function(e){return!e.stacktrace||e.message.indexOf("\n")>-1&&e.message.split("\n").length>e.stacktrace.split("\n").length?this.parseOpera9(e):e.stack?this.parseOpera11(e):this.parseOpera10(e)},parseOpera9:function(t){for(var n=/Line (\d+).*script (?:in )?(\S+)/i,r=t.message.split("\n"),o=[],i=2,a=r.length;i<a;i+=2){var s=n.exec(r[i]);s&&o.push(new e({fileName:s[2],lineNumber:s[1],source:r[i]}))}return o},parseOpera10:function(t){for(var n=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,r=t.stacktrace.split("\n"),o=[],i=0,a=r.length;i<a;i+=2){var s=n.exec(r[i]);s&&o.push(new e({functionName:s[3]||undefined,fileName:s[2],lineNumber:s[1],source:r[i]}))}return o},parseOpera11:function(n){return n.stack.split("\n").filter(function(e){return!!e.match(t)&&!e.match(/^Error created at/)},this).map(function(t){var n,r=t.split("@"),o=this.extractLocation(r.pop()),i=r.shift()||"",a=i.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^\)]*\)/g,"")||undefined;i.match(/\(([^\)]*)\)/)&&(n=i.replace(/^[^\(]+\(([^\)]*)\)$/,"$1"));var s=n===undefined||"[arguments not available]"===n?undefined:n.split(",");return new e({functionName:a,args:s,fileName:o[0],lineNumber:o[1],columnNumber:o[2],source:t})},this)}}});var k={};!function(e,t){"use strict";"object"==typeof k?k=t(R):e.StackGenerator=t(e.StackFrame)}(this,function(e){return{backtrace:function(t){var n=[],r=10;"object"==typeof t&&"number"==typeof t.maxStackSize&&(r=t.maxStackSize);for(var o=arguments.callee;o&&n.length<r&&o.arguments;){for(var i=new Array(o.arguments.length),a=0;a<i.length;++a)i[a]=o.arguments[a];/function(?:\s+([\w$]+))+\s*\(/.test(o.toString())?n.push(new e({functionName:RegExp.$1||undefined,args:i})):n.push(new e({args:i}));try{o=o.caller}catch(s){break}}return n}}});var B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x=g.reduce,_=g.filter,C=function(){function e(n,r){var o=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[],i=arguments.length>3&&arguments[3]!==undefined?arguments[3]:q();t(this,e),this.__isBugsnagReport=!0,this._ignored=!1,this._handledState=i,this.app=undefined,this.apiKey=undefined,this.breadcrumbs=[],this.context=undefined,this.device=undefined,this.errorClass=A(n,"[no error class]"),this.errorMessage=A(r,"[no error message]"),this.groupingHash=undefined,this.metaData={},this.request=undefined,this.severity=this._handledState.severity,this.stacktrace=x(o,function(e,t){var n=T(t);try{return"{}"===JSON.stringify(n)?e:e.concat(n)}catch(r){return e}},[]),this.user=undefined,this.session=undefined}return e.prototype.ignore=function(){this._ignored=!0},e.prototype.isIgnored=function(){return this._ignored},e.prototype.updateMetaData=function(e){var t;if(!e)return this;var n=void 0;return null===(arguments.length<=1?undefined:arguments[1])?this.removeMetaData(e):null===(arguments.length<=2?undefined:arguments[2])?this.removeMetaData(e,arguments.length<=1?undefined:arguments[1],arguments.length<=2?undefined:arguments[2]):("object"==typeof(arguments.length<=1?undefined:arguments[1])&&(n=arguments.length<=1?undefined:arguments[1]),"string"==typeof(arguments.length<=1?undefined:arguments[1])&&(t={},t[arguments.length<=1?undefined:arguments[1]]=arguments.length<=2?undefined:arguments[2],n=t),n?(this.metaData[e]||(this.metaData[e]={}),this.metaData[e]=B({},this.metaData[e],n),this):this)},e.prototype.removeMetaData=function(e,t){return"string"!=typeof e?this:t?this.metaData[e]?(delete this.metaData[e][t],this):this:(delete this.metaData[e],this)},e.prototype.toJSON=function(){return{payloadVersion:"4",exceptions:[{errorClass:this.errorClass,message:this.errorMessage,stacktrace:this.stacktrace,type:"browserjs"}],severity:this.severity,unhandled:this._handledState.unhandled,severityReason:this._handledState.severityReason,app:this.app,device:this.device,breadcrumbs:this.breadcrumbs,context:this.context,user:this.user,metaData:this.metaData,groupingHash:this.groupingHash,request:this.request,session:this.session}},e}();C.prototype.toJSON.forceDecirc=!0;var T=function(e){var t={file:e.fileName,method:L(e.functionName),lineNumber:e.lineNumber,columnNumber:e.columnNumber,code:undefined,inProject:undefined};return t.lineNumber>-1&&!t.file&&!t.method&&(t.file="global code"),t},L=function(e){return/^global code$/i.test(e)?"global code":e},q=function(){return{unhandled:!1,severity:"warning",severityReason:{type:"handledException"}}},A=function(e,t){return"string"==typeof e&&e?e:t};C.getStacktrace=function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0,n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;return j(e)?D.parse(e).slice(t):_(k.backtrace(),function(e){return-1===(e.functionName||"").indexOf("StackGenerator$$")}).slice(1+n)},C.ensureReport=function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0,n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;if(e.__isBugsnagReport)return e;try{var r=C.getStacktrace(e,t,1+n);return new C(e.name,e.message,r)}catch(o){return new C(e.name,e.message,[])}};var M=C,V={exports:{}};!function(e){"use strict";var t=0,n=Math.pow(36,4),r=function(e,t){var n="000000000"+e;return n.substr(n.length-t)},o=function(){return r((Math.random()*n<<0).toString(36),4)},i=function(){return t=t<n?t:0,++t-1},a=function(){var e,t=(new Date).getTime().toString(36),n=a.fingerprint(),s=o()+o();return e=r(i().toString(36),4),"c"+t+e+n+s};a.slug=function(){var e,t=(new Date).getTime().toString(36),n=a.fingerprint().slice(0,1)+a.fingerprint().slice(-1),r=o().slice(-2);return e=i().toString(36).slice(-4),t.slice(-2)+e+n+r},a.globalCount=function(){var e=function(){var e,t=0;for(e in window)t++;return t}();return a.globalCount=function(){return e},e},a.fingerprint=function(){return r((navigator.mimeTypes.length+navigator.userAgent.length).toString(36)+a.globalCount().toString(36),4)},e.register?e.register("cuid",a):V.exports=a}(this.applitude||this),V=V.exports;var P=g.isoDate,U=function(){function e(){n(this,e),this.id=V(),this.startedAt=P(),this._handled=0,this._unhandled=0}return e.prototype.toJSON=function(){return{id:this.id,startedAt:this.startedAt,events:{handled:this._handled,unhandled:this._unhandled}}},e.prototype.trackError=function(e){this[e._handledState.unhandled?"_unhandled":"_handled"]+=1},e}();U.prototype.toJSON.forceDecirc=!0;var H=U,$=r;r["default"]=r,o.prototype.toJSON=function(){return 0==--this.count&&(this.parent[this.k]=this.val),"[Circular]"};var F=function(e){switch(Object.prototype.toString.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return e instanceof Error}},I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K=g.map,J=g.reduce,X=g.includes,z=g.isArray,G=function(){},W=function(){function e(t){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:b.schema,r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;if(a(this,e),!t)throw new Error("new BugsnagClient(notifier, configSchema) requires `notifier` argument");if(!t.name||!t.version||!t.url)throw new Error("new BugsnagClient(notifier, configSchema) - `notifier` requires: `{ name, version, url }`");this.notifier=t,this.configSchema=n,this._configured=!1,this._transport={name:"NULL_TRANSPORT",sendSession:G,sendReport:G},this._logger={debug:G,info:G,warn:G,error:G},this.plugins=[],this.session=r,this.beforeSession=[],this.breadcrumbs=[],this.app={},this.context=undefined,this.device=undefined,this.metaData=undefined,this.request=undefined,this.user={},this.BugsnagReport=M,this.BugsnagBreadcrumb=m,this.BugsnagSession=H}return e.prototype.configure=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.config=b.mergeDefaults(I({},this.config,e),this.configSchema);var t=b.validate(this.config,this.configSchema);if(!0==!t.valid){var n=new Error("Bugsnag configuration error");throw n.errors=K(t.errors,function(e){return e.key+" "+e.message+" \n  "+e.value}),n}return"function"==typeof this.config.beforeSend&&(this.config.beforeSend=[this.config.beforeSend]),null!==this.config.appVersion&&(this.app.version=this.config.appVersion),this.config.metaData&&(this.metaData=this.config.metaData),this.config.user&&(this.user=this.config.user),this._configured=!0,this._logger.debug("Loaded!"),this},e.prototype.use=function(e){return this.plugins.push(e),e.init(this)},e.prototype.transport=function(e){return this._transport=e,this},e.prototype.logger=function(e,t){return this._logger=e,this},e.prototype.sessionDelegate=function(e){return this._sessionDelegate=e,this},e.prototype.startSession=function(){return this._sessionDelegate?this._sessionDelegate.startSession(this):(this._logger.warn("No session implementation is installed"),this)},e.prototype.leaveBreadcrumb=function(e,t,n,r){if(!this._configured)throw new Error("Bugsnag must be configured before calling leaveBreadcrumb()");if(e=e||undefined,n="string"==typeof n?n:undefined,r="string"==typeof r?r:undefined,t="object"==typeof t&&null!==t?t:undefined,"string"==typeof e||t){var o=new m(e,t,n,r),i=$(o),a=this.breadcrumbs[this.breadcrumbs.length-1];if(!(!!a&&i===$(a)))return this.breadcrumbs.push(o),this.breadcrumbs.length>this.config.maxBreadcrumbs&&(this.breadcrumbs=this.breadcrumbs.slice(this.breadcrumbs.length-this.config.maxBreadcrumbs)),this}},e.prototype.notify=function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if(!this._configured)throw new Error("Bugsnag must be configured before calling report()");var n=N(this),r=Y(e,t,this._logger),o=r.err,i=r.errorFramesToSkip,a=r._opts;a&&(t=a),o||(this._logger.warn('Usage error. notify() called with no "error" parameter'),o=new Error('Bugsnag usage error. notify() called with no "error" parameter')),"object"==typeof t&&null!==t||(t={});var s=M.ensureReport(o,i,1);if(s.app=I({releaseStage:n},s.app,this.app),s.context=s.context||t.context||this.context||undefined,s.device=I({},s.device,this.device,t.device),s.request=I({},s.request,this.request,t.request),s.user=I({},s.user,this.user,t.user),s.metaData=I({},s.metaData,this.metaData,t.metaData),s.breadcrumbs=this.breadcrumbs.slice(0),this.session&&(this.session.trackError(s),s.session=this.session),t.severity!==undefined&&(s.severity=t.severity,s._handledState.severityReason={type:"userSpecifiedSeverity"}),z(this.config.notifyReleaseStages)&&!X(this.config.notifyReleaseStages,n))return this._logger.warn("Report not sent due to releaseStage/notifyReleaseStages configuration"),!1;var u=s.severity,c=[].concat(t.beforeSend).concat(this.config.beforeSend);return J(c,function(e,t){return!0===e||("function"==typeof t&&!1===t(s)||!!s.isIgnored())},!1)?(this._logger.debug("Report not sent due to beforeSend callback"),!1):(this.config.autoBreadcrumbs&&this.leaveBreadcrumb(s.errorClass,{errorClass:s.errorClass,errorMessage:s.errorMessage,severity:s.severity,stacktrace:s.stacktrace},"error"),u!==s.severity&&(s._handledState.severityReason={type:"userCallbackSetSeverity"}),this._transport.sendReport(this._logger,this.config,{apiKey:s.apiKey||this.config.apiKey,notifier:this.notifier,events:[s]}),!0)},e}(),Y=function(e,t,n){var r=void 0,o=0,i=void 0;switch(typeof e){case"string":"string"==typeof t?(n.warn("Usage error. notify() called with (string, string) but expected (error, object)"),r=new Error("Bugsnag usage error. notify() called with (string, string) but expected (error, object)"),i={metaData:{notifier:{notifyArgs:[e,t]}}}):(r=new Error(String(e)),o+=2);break;case"number":case"boolean":r=new Error(String(e));break;case"function":n.warn('Usage error. notify() called with a function as "error" parameter'),r=new Error('Bugsnag usage error. notify() called with a function as "error" parameter');break;case"object":null!==e&&(F(e)||e.__isBugsnagReport)?r=e:null!==e&&Z(e)?((r=new Error(e.message||e.errorMessage)).name=e.name||e.errorClass,o+=2):(n.warn('Usage error. notify() called with an unsupported object as "error" parameter. Supply an Error or { name, message } object.'),r=new Error('Bugsnag usage error. notify() called with an unsupported object as "error" parameter. Supply an Error or { name, message } object.'))}return{err:r,errorFramesToSkip:o,_opts:i}},Z=function(e){return!("string"!=typeof e.name&&"string"!=typeof e.errorClass||"string"!=typeof e.message&&"string"!=typeof e.errorMessage)},Q=W,ee={init:function(e){var t=0;e.config.beforeSend.push(function(n){if(t>=e.config.maxEvents)return n.ignore();t++}),e.refresh=function(){t=0}},configSchema:{maxEvents:{defaultValue:function(){return 10},message:"(number) maxEvents must be a positive integer ≤100",validate:function(e){return y(e)&&e<100}}}},te={releaseStage:{defaultValue:function(){return/^localhost(:\d+)?$/.test(window.location.host)?"development":"production"},message:"(string) releaseStage should be set",validate:function(e){return"string"==typeof e&&e.length}},collectUserIp:{defaultValue:function(){return!0},message:"(boolean) collectUserIp should true/false",validate:function(e){return!0===e||!1===e}}},ne=g.map,re={init:function(e){ne(oe,function(t){var n=console[t];console[t]=function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];e.leaveBreadcrumb("Console output",{severity:/^group/.test(t)?"log":t,message:ne(o,function(e){var t=String(e);if("[object Object]"!==t)return t;try{t=JSON.stringify(e,null,2)}catch(n){}return t}).join("\n")},"log"),n.apply(console,o)},console[t]._restore=function(){console[t]=n}})},destroy:function(){return oe.forEach(function(e){"function"==typeof console[e]._restore&&console[e]._restore()})},configSchema:{consoleBreadcrumbsEnabled:{defaultValue:function(){return undefined},validate:function(e){return!0===e||!1===e||e===undefined},message:"(boolean) consoleBreadcrumbsEnabled should be true or false"}}},oe=(0,g.filter)(["log","debug","info","warn","error"],function(e){return"undefined"!=typeof console&&"function"==typeof console[e]}),ie={init:function(e){e.config.beforeSend.unshift(function(e){e.context||(e.context=window.location.pathname)})}},ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},se=g.isoDate,ue={init:function(e){e.config.beforeSend.unshift(function(e){e.device=ae({time:se(),locale:navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||navigator.language,userAgent:navigator.userAgent},e.device)}),e.beforeSession.push(function(e){e.device={userAgent:navigator.userAgent}})}},ce={},fe=g.reduce,le=/^.*<script.*?>/,de=/<\/script>.*$/,ge=(ce={init:function(e){var t="",n=!1,r=function(){return document.documentElement.outerHTML},o=window.location.href;t=r(),document.onreadystatechange=function(){"interactive"===document.readyState&&(t=r(),n=!0)},e.config.beforeSend.unshift(function(e){var i=e.stacktrace[0];if(!i||!i.file||!i.lineNumber)return i;if(i.file.replace(/#.*$/,"")!==o.replace(/#.*$/,""))return i;n&&t||(t=r());var a=["\x3c!-- DOCUMENT START --\x3e"].concat(t.split("\n")),s=ge(a,i.lineNumber-1),u=s.script,c=s.start,f=fe(u,function(e,t,n){return Math.abs(c+n+1-i.lineNumber)>10?e:(e[""+(c+n+1)]=t,e)},{});i.code=f,e.updateMetaData("script",{content:u.join("\n")})})}}).extractScriptContent=function(e,t){for(var n=t;n<e.length&&!de.test(e[n]);)n++;for(var r=n;n>0&&!le.test(e[n]);)n--;var o=n,i=e.slice(o,r+1);return i[0]=i[0].replace(le,""),i[i.length-1]=i[i.length-1].replace(de,""),{script:i,start:o}},pe={init:function(e){"addEventListener"in window&&window.addEventListener("click",function(t){var n=void 0,r=void 0;try{n=he(t.target),r=s(t.target)}catch(o){n="[hidden]",r="[hidden]",e._logger.error("Cross domain error when tracking click event. See https://docs.bugsnag.com/platforms/browsers/faq/#3-cross-origin-script-errors")}e.leaveBreadcrumb("UI click",{targetText:n,targetSelector:r},"user")},!0)},configSchema:{interactionBreadcrumbsEnabled:{defaultValue:function(){return undefined},validate:function(e){return!0===e||!1===e||e===undefined},message:"(boolean) interactionBreadcrumbsEnabled should be true or false"}}},he=function(e){var t=e.textContent||e.innerText||"";return t||"submit"!==e.type&&"button"!==e.type||(t=e.value),t=t.replace(/^\s+|\s+$/g,""),u(t,140)},me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ve={init:function(e){e.config.collectUserIp||e.config.beforeSend.push(function(e){e.user=me({id:"[NOT COLLECTED]"},e.user),e.request=me({clientIp:"[NOT COLLECTED]"},e.request)})}},ye={init:function(e){if("addEventListener"in window){var t=function(t){return function(){return e.leaveBreadcrumb(t,{},"navigation")}};window.addEventListener("pagehide",t("Page hidden"),!0),window.addEventListener("pageshow",t("Page shown"),!0),window.addEventListener("load",t("Page loaded"),!0),window.document.addEventListener("DOMContentLoaded",t("DOMContentLoaded"),!0),window.addEventListener("load",function(){return window.addEventListener("popstate",t("Navigated back"),!0)}),window.addEventListener("hashchange",function(t){var n=t.oldURL?{from:be(t.oldURL),to:be(t.newURL),state:window.history.state}:{to:be(window.location.href)};e.leaveBreadcrumb("Hash changed",n,"navigation")},!0),window.history.replaceState&&Se(e,window.history,"replaceState"),window.history.pushState&&Se(e,window.history,"pushState"),e.leaveBreadcrumb("Bugsnag loaded",{},"navigation")}},destroy:function(){window.history.replaceState._restore(),window.history.pushState._restore()},configSchema:{navigationBreadcrumbsEnabled:{defaultValue:function(){return undefined},validate:function(e){return!0===e||!1===e||e===undefined},message:"(boolean) navigationBreadcrumbsEnabled should be true or false"}}},be=function(e){var t=document.createElement("A");return t.href=e,""+t.pathname+t.search+t.hash},we=function(e,t,n){var r=be(window.location.href);return{title:t,state:e,prevState:window.history.state,to:n||r,from:r}},Se=function(e,t,n){var r=t[n];t[n]=function(o,i,a){e.leaveBreadcrumb("History "+n,we(o,i,a),"navigation"),"function"==typeof e.refresh&&e.refresh(),e.session&&e.startSession(),r.call(t,o,i,a)},t[n]._restore=function(){t[n]=r}},Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ee={init:function(e){e.config.beforeSend.unshift(function(e){e.request&&e.request.url||(e.request=Oe({},e.request,{url:window.location.href}))})}},Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},je=g.map,Re=g.isArray,De=g.includes,ke={init:function(e){return e.sessionDelegate(Be)}},Be={startSession:function(e){var t=e;t.session=new e.BugsnagSession,je(t.beforeSession,function(e){return e(t)});var n=N(t);return Re(t.config.notifyReleaseStages)&&!De(t.config.notifyReleaseStages,n)?(t._logger.warn("Session not sent due to releaseStage/notifyReleaseStages configuration"),t):(t._transport.sendSession(t._logger,t.config,{notifier:t.notifier,device:t.device,app:Ne({releaseStage:n},t.app),sessions:[{id:t.session.id,startedAt:t.session.startedAt,user:t.user}]}),t)}},xe={},_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ce=g.map,Te=(xe={init:function(e){e.config.beforeSend.push(function(e){e.stacktrace=Ce(e.stacktrace,function(e){return _e({},e,{file:Te(e.file)})})})}})._strip=function(e){return"string"==typeof e?e.replace(/\?.*$/,"").replace(/#.*$/,""):e},Le=g.reduce,qe=void 0,Ae={init:function(e){var t=function(t){var n=t.reason,r=!1;t.detail&&t.detail.reason&&(n=t.detail.reason,r=!0);var o={severity:"error",unhandled:!0,severityReason:{type:"unhandledPromiseRejection"}},i=void 0;if(n&&j(n))i=new e.BugsnagReport(n.name,n.message,D.parse(n),o),r&&(i.stacktrace=Le(i.stacktrace,Ve(n),[]));else{(i=new e.BugsnagReport(n&&n.name?n.name:"UnhandledRejection",n&&n.message?n.message:'Rejection reason was not an Error. See "Promise" tab for more detail.',[],o)).updateMetaData("promise","rejection reason",Me(n))}e.notify(i)};"addEventListener"in window?window.addEventListener("unhandledrejection",t):window.onunhandledrejection=function(e,n){t({detail:{reason:e,promise:n}})},qe=t},destroy:function(){qe&&("addEventListener"in window?window.removeEventListener("unhandledrejection",qe):window.onunhandledrejection=null),qe=null}},Me=function(e){if(null===e||e===undefined)return"undefined (or null)";if(F(e)){var t;return t={},t[Object.prototype.toString.call(e)]={name:e.name,message:e.message,code:e.code,stack:e.stack},t}return e},Ve=function(e){return function(t,n){return n.file===e.toString()?t:(n.method&&(n.method=n.method.replace(/^\s+/,"")),t.concat(n))}},Pe={init:function(e){var t=window.onerror;window.onerror=function(n,r,o,i,a){if(0===o&&/Script error\.?/.test(n))e._logger.warn("Ignoring cross-domain or eval script error. See https://docs.bugsnag.com/platforms/browsers/faq/#3-cross-origin-script-errors");else{var s={severity:"error",unhandled:!0,severityReason:{type:"unhandledException"}},u=void 0;if(a)a.name&&a.message?u=new e.BugsnagReport(a.name,a.message,Ue(e.BugsnagReport.getStacktrace(a),r,o,i),s):(u=new e.BugsnagReport("window.onerror",String(a),Ue(e.BugsnagReport.getStacktrace(a,1),r,o,i),s)).updateMetaData("window onerror",{error:a});else if("object"!=typeof n||null===n||r||o||i||a)(u=new e.BugsnagReport("window.onerror",String(n),Ue(e.BugsnagReport.getStacktrace(a,1),r,o,i),s)).updateMetaData("window onerror",{event:n});else{var c=n.type?"Event: "+n.type:"window.onerror",f=n.message||n.detail||"";(u=new e.BugsnagReport(c,f,e.BugsnagReport.getStacktrace(new Error,1).slice(1),s)).updateMetaData("window onerror",{event:n})}e.notify(u),"function"==typeof t&&t(n,r,o,i,a)}}}},Ue=function(e,t,n,r){var o=e[0];return o?(o.fileName||o.setFileName(t),o.lineNumber||o.setLineNumber(n),o.columnNumber||(r!==undefined?o.setColumnNumber(r):window.event&&window.event.errorCharacter&&o.setColumnNumber(window.event&&window.event.errorCharacter)),e):e},He=function(e){var t=$(e);if(t.length>1e6&&(delete e.events[0].metaData,e.events[0].metaData={notifier:"WARNING!\nThe serialized payload was "+t.length/1e6+"MB. The limit is 1MB.\nreport.metaData was stripped to make the payload of a deliverable size."},(t=$(e)).length>1e6))throw new Error("payload exceeded 1MB limit");return t},$e=g.isoDate,Fe={name:"XDomainRequest",sendReport:function(e,t,n){var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:function(){},o=t.endpoint+"?apiKey="+encodeURIComponent(t.apiKey)+"&payloadVersion=4.0&sentAt="+encodeURIComponent($e()),i=new window.XDomainRequest;i.onload=function(){r(null,i.responseText)},i.open("POST",o),setTimeout(function(){try{i.send(He(n))}catch(t){e.error(t)}},0)},sendSession:function(e,t,n){var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:function(){},o=t.sessionEndpoint+"?apiKey="+encodeURIComponent(t.apiKey)+"&payloadVersion=1.0&sentAt="+encodeURIComponent($e()),i=new window.XDomainRequest;i.onload=function(){r(null,i.responseText)},i.open("POST",o),setTimeout(function(){try{i.send($(n))}catch(t){e.error(t)}},0)}},Ie=g.isoDate,Ke={name:"XMLHttpRequest",sendReport:function(e,t,n){var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:function(){},o=t.endpoint,i=new window.XMLHttpRequest;i.onreadystatechange=function(){i.readyState===window.XMLHttpRequest.DONE&&r(null,i.responseText)},i.open("POST",o),i.setRequestHeader("Content-Type","application/json"),i.setRequestHeader("Bugsnag-Api-Key",n.apiKey||t.apiKey),i.setRequestHeader("Bugsnag-Payload-Version","4.0"),i.setRequestHeader("Bugsnag-Sent-At",Ie());try{i.send(He(n))}catch(a){e.error(a)}},sendSession:function(e,t,n){var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:function(){},o=t.sessionEndpoint,i=new window.XMLHttpRequest;i.onreadystatechange=function(){i.readyState===window.XMLHttpRequest.DONE&&r(null,i.responseText)},i.open("POST",o),i.setRequestHeader("Content-Type","application/json"),i.setRequestHeader("Bugsnag-Api-Key",t.apiKey),i.setRequestHeader("Bugsnag-Payload-Version","1.0"),i.setRequestHeader("Bugsnag-Sent-At",Ie());try{i.send($(n))}catch(a){e.error(a)}}},Je={},Xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ze=g.map,Ge=g.reduce,We=Xe({},b.schema,te),Ye=[Pe,Ae,ue,ie,Ee,ee,re,ye,pe,ce,ke,ve,xe],Ze={XDomainRequest:Fe,XMLHttpRequest:Ke};Je=function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];"string"==typeof e&&(e={apiKey:e}),e.sessionTrackingEnabled&&(e.autoCaptureSessions=e.sessionTrackingEnabled);var n=Ge([].concat(Ye).concat(t),function(e,t){return t.configSchema?Xe({},e,t.configSchema):e},We),r=new Q({name:"Bugsnag JavaScript",version:"4.3.0",url:"https://github.com/bugsnag/bugsnag-js"},n);if(r.transport(window.XDomainRequest?Ze.XDomainRequest:Ze.XMLHttpRequest),"undefined"!=typeof console&&"function"==typeof console.debug){var o=Qe();r.logger(o)}try{r.configure(e)}catch(i){throw r._logger.warn(i),i.errors&&ze(i.errors,r._logger.warn),i}return r.use(ue),r.use(ie),r.use(Ee),r.use(ce),r.use(ee),r.use(ke),r.use(ve),r.use(xe),!1!==r.config.autoNotify&&(r.use(Pe),r.use(Ae)),et(r.config,"navigationBreadcrumbsEnabled")&&r.use(ye),et(r.config,"interactionBreadcrumbsEnabled")&&r.use(pe),et(r.config,"consoleBreadcrumbsEnabled",!1)&&r.use(re),ze(t,function(e){return r.use(e)}),r.config.autoCaptureSessions?r.startSession():r};var Qe=function(){var e={},t=console.log;return ze(["debug","info","warn","error"],function(n){var r=console[n];e[n]="function"==typeof r?r.bind(console,"[bugsnag]"):t.bind(console,"[bugsnag]")}),e},et=function(e,t){var n=!(arguments.length>2&&arguments[2]!==undefined)||arguments[2];return"boolean"==typeof e[t]?e[t]:e.autoBreadcrumbs&&(n||!/^dev(elopment)?$/.test(e.releaseStage))};return Je.Bugsnag={Client:Q,Report:M,Session:H,Breadcrumb:m},Je["default"]=Je,Je});
