// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-square-matrix@esm/index.mjs";var t=r;var e=function(r){var e,s,a;if(!t(r))return!1;for(e=r.shape[0],s=0;s<e;s++)for(a=0;a<s;a++)if(r.get(s,a)!==r.get(a,s))return!1;return!0};export{e as default};
//# sourceMappingURL=index.mjs.map
