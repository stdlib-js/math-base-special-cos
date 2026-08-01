"use strict";var v=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var s=v(function(W,n){
var f=require('@stdlib/number-float64-base-get-high-word/dist'),a=require('@stdlib/math-base-special-kernel-cos/dist'),t=require('@stdlib/math-base-special-kernel-sin/dist'),c=require('@stdlib/math-base-special-rempio2/dist'),_=require('@stdlib/constants-float64-high-word-abs-mask/dist'),o=require('@stdlib/constants-float64-high-word-exponent-mask/dist'),e=[0,0],q=1072243195,H=1044381696;function N(i){var r,u;if(r=f(i),r&=_,r<=q)return r<H?1:a(i,0);if(r>=o)return NaN;switch(u=c(i,e),u&3){case 0:return a(e[0],e[1]);case 1:return-t(e[0],e[1]);case 2:return-a(e[0],e[1]);default:return t(e[0],e[1])}}n.exports=N
});var O=s();module.exports=O;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
