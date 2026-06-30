"use strict";var u=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=u(function(x,a){
var f=require('@stdlib/assert-is-square-matrix/dist');function n(t){var r,e,i;if(!f(t))return!1;for(r=t.shape[0],e=0;e<r;e++)for(i=0;i<e;i++)if(t.get(e,i)!==t.get(i,e))return!1;return!0}a.exports=n
});var o=s();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
