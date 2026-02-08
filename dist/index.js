"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(x,a){
var f=require('@stdlib/assert-is-square-matrix/dist');function n(e){var r,t,i;if(!f(e))return!1;for(r=e.shape[0],t=0;t<r;t++)for(i=0;i<t;i++)if(e.get(t,i)!==e.get(i,t))return!1;return!0}a.exports=n
});var o=s();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
