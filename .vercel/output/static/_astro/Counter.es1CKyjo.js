import{r as d}from"./index.BL7xzsR_.js";var x={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l;function c(){if(l)return t;l=1;var u=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function n(i,r,e){var o=null;if(e!==void 0&&(o=""+e),r.key!==void 0&&(o=""+r.key),"key"in r){e={};for(var a in r)a!=="key"&&(e[a]=r[a])}else e=r;return r=e.ref,{$$typeof:u,type:i,key:o,ref:r!==void 0?r:null,props:e}}return t.Fragment=s,t.jsx=n,t.jsxs=n,t}var R;function v(){return R||(R=1,x.exports=c()),x.exports}var f=v();function E(){const[u,s]=d.useState(0);return d.useEffect(()=>{const n=setInterval(()=>{s(i=>i+1)},1e3);return()=>clearInterval(n)},[]),f.jsx("div",{children:f.jsxs("h2",{children:["リアルタイムカウント: ",u]})})}export{E as default};
