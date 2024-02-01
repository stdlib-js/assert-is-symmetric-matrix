// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-square-matrix@v0.1.0-esm/index.mjs";function t(t){var e,s,i;if(!r(t))return!1;for(e=t.shape[0],s=0;s<e;s++)for(i=0;i<s;i++)if(t.get(s,i)!==t.get(i,s))return!1;return!0}export{t as default};
//# sourceMappingURL=index.mjs.map
