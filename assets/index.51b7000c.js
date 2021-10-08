var L=Object.defineProperty;var N=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var w=(t,e,r)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,g=(t,e)=>{for(var r in e||(e={}))A.call(e,r)&&w(t,r,e[r]);if(N)for(var r of N(e))V.call(e,r)&&w(t,r,e[r]);return t};import{r as a,j as v,S as K,R as k,H,a as O,b as B}from"./vendor.45ad9980.js";const F=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))c(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(l){if(l.ep)return;l.ep=!0;const s=r(l);fetch(l.href,s)}};F();const C=(t,e,r=window)=>{a.exports.useEffect(()=>{if(r)return r.addEventListener(t,e),()=>{r&&r.removeEventListener(t,e)}},[e,t])},P=Array(10).fill(null).map((t,e)=>e).map(t=>t+""),_=(t,e,r,c)=>{const l=a.exports.useCallback(s=>{P.some(d=>s.key===d)&&t?t(+s.key):s.key==="Delete"&&e?e():s.key==="Enter"&&r?r():s.key==="Backspace"&&c&&c()},[]);C("keydown",l)},S={standard:"Standard",ussr:"USSR"},I=["standard","ussr"],U=1,q=1120,z=21.33,J=100,W=t=>a.exports.useMemo(()=>Math.round(q-(t/J-U)*z),[t]),X=-.23703,$=1001.46,G=t=>a.exports.useMemo(()=>Math.round(X*t+$),[t]),Q=(t,e)=>{const[r,c]=a.exports.useState(0),l=G(e!=null?e:0),s=W(e!=null?e:0);return a.exports.useEffect(()=>{e===null&&c(0),t==="standard"&&c(l),t==="ussr"&&c(s)},[e,t,l,s]),a.exports.useEffect(()=>{console.log(l,s)},[l,s]),r},E={saveCurrent:"SAVE_CURRENT"},Y=t=>{const[e,r]=a.exports.useState([]),[c,l]=a.exports.useState("standard"),[s,i]=a.exports.useState(null),d=a.exports.useMemo(()=>s&&s.length>=3&&+s>100?+s:null,[s]),f=Q(c,d),y=a.exports.useCallback(()=>{i(null)},[]),M=a.exports.useCallback(()=>{i(o=>{if(o&&o.length>1){const u=o.slice(0,-1);return+u>0?u:null}return null})},[]),T=a.exports.useCallback(o=>{i(u=>u?u+o:o!==0?o+"":null)},[]),b=a.exports.useCallback(o=>{r(u=>[o,...u])},[]),p=a.exports.useCallback((o,u,h)=>{o&&u&&h&&(b({distance:o,team:u,value:h}),y())},[]),j=a.exports.useCallback(o=>{var u;((u=o==null?void 0:o.target)==null?void 0:u.value)&&i(()=>(l(o.target.value),null))},[]);a.exports.useEffect(()=>{s!==null&&(+s>1600||s==="00")&&i(null)},[s]),a.exports.useEffect(()=>{const o=setTimeout(()=>{p(d,c,f)},2e3);return()=>{o&&clearTimeout(o)}},[d,c,f,p]);const D=a.exports.useCallback((o,u,h)=>()=>p(o,u,h),[]),R=a.exports.useCallback(()=>window.dispatchEvent(new CustomEvent(E.saveCurrent)),[]);return C(E.saveCurrent,D(d,c,f)),{distance:d,distanceNumbers:s,mil:f,addToDistance:T,changeTeam:j,resetDistance:y,addToHistory:b,history:e,dispatchSaveEvent:R,removeLastFromDistance:M}},n=v.exports.jsx,m=v.exports.jsxs,x=t=>{const e=a.exports.useCallback(()=>{t.onClick(t.value)},[t.value,t.onClick]);return n("button",{disabled:t.isDisabled,className:"w-full inline-flex justify-center items-center py-5 bg-gray-100 rounded-md font-semibold hover:bg-gray-300 pointer-events-auto disabled:pointer-events-none transition-all ease-in-out duration-150 disabled:brightness-50 outline-none focus:outline-none",onPointerDown:e,children:n("span",{className:"pointer-events-none",children:t.value===-1?"Reset":t.value})})},Z=20,ee=t=>{const e=t.history.length>0,r=t.history.length>10;return m("ul",{className:"relative isolate inline-flex justify-start items-start content-start flex-col p-2 gap-px rounded bg-gray-800 w-full overflow-hidden flex-1",children:[n("div",{className:`absolute inset-0 h-32 w-full mt-auto bg-gradient-to-b from-transparent to-gray-900 rounded pointer-events-none ${r?"opacity-100":"opacity-0"}`}),e?t.history.slice(0,Z).map(({distance:c,value:l,team:s},i)=>m("li",{className:"inline-grid grid-cols-3 w-full justify-stretch items-center bg-gray-100 text-xs rounded",children:[n("span",{className:"inline-flex justify-center items-center",children:S[s]}),m("span",{className:"inline-flex justify-between px-5 items-baseline bg-gray-500 text-gray-50 tabular-nums",children:[n("span",{className:"tabular-nums",children:c}),n("small",{className:"text-gray-100 tracking-wide",children:"m"})]}),m("span",{className:"inline-flex justify-between px-5 items-baseline bg-yellow-500 -mr-px rounded-r",children:[n("span",{className:"font-semibold tabular-nums",children:l}),n("small",{className:"text-gray-800 tracking-wide",children:"mil"})]})]},i)):n("span",{className:"text-gray-50 mx-auto text-xs font-semibold tracking-wide",children:"Jetzt loslegen und hier die Werte sehen"})]})},te=t=>{var l,s;const e=Y();_(e.addToDistance,e.resetDistance,e.dispatchSaveEvent,e.removeLastFromDistance);const r=I.map(i=>({value:i,label:S[i]})),c=a.exports.useMemo(()=>Array(9).fill(null).map((i,d)=>d+1).map(i=>n(x,{value:i,onClick:e.addToDistance},i)),[e.addToDistance]);return m("article",{className:"inline-grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto mt-12 select-none",children:[m("div",{className:"inline-flex flex-col p-2 bg-gray-800 rounded",children:[n("div",{className:"inline-flex mb-2 h-11 rounded-none",children:n("select",{onChange:e.changeTeam,className:"w-full h-full p-1 py-2 bg-gray-100",children:r.map(({value:i,label:d})=>n("option",{value:i,label:d,children:d},i))})}),m("div",{className:"inline-flex gap-1",children:[m("output",{className:"inline-flex justify-start items-baseline w-32 bg-gray-600 p-2 text-2xl text-gray-50 font-mono tabular-nums",children:[n("span",{children:(s=(l=e.distance)!=null?l:e.distanceNumbers)!=null?s:"0"}),n("small",{className:"tracking-tight text-sm ml-auto",children:"m"})]}),m("output",{className:"inline-flex justify-start items-baseline w-32 bg-yellow-500 p-2 text-2xl font-mono tabular-nums",children:[n("span",{children:e.distance&&+e.distance>100?e.mil:"0"}),n("small",{className:"tracking-tight text-sm ml-auto",children:"mil"})]})]}),n("div",{className:"inline-grid grid-cols-3 mt-2 gap-1",children:c}),m("div",{className:"inline-grid grid-cols-2 mt-1 gap-1",children:[n(x,{isDisabled:e.distanceNumbers===null||e.distanceNumbers.length<1,value:0,onClick:e.addToDistance}),n(x,{value:-1,onClick:e.resetDistance})]}),n("ul",{})]}),n(ee,{history:e.history})]})},se=t=>n("article",{}),ne=()=>({}),le=()=>{const t=ne();return n("main",{className:"w-full h-screen min-h-0 inline-flex flex-col antialiased grayscale-0 text-gray-800 overscroll-contain",children:m(K,{children:[n(k,{path:"/",children:n(te,g({},t))}),n(k,{path:"/settings",children:n(se,g({},t))})]})})};function re(){return n(H,{children:n(le,{})})}O.render(n(B.StrictMode,{children:n(re,{})}),document.getElementById("root"));
