"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[320],{4320:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s(5043),n=s(3216),a=s(7796),r=s(6213),l=s(579);const c=()=>{const[e,t]=(0,i.useState)(!1),s=(0,n.Zp)(),c=(0,n.zy)(),o=new URLSearchParams(c.search),m=o.get("id"),d=o.get("email"),u=(0,i.useCallback)((()=>{t(!0);const e=`http://127.0.0.1:4000/auth/block-login?id=${m}&email=${d}`;r.A.get(e).then((e=>{200===e.status&&(t(!1),s("/signin"))})).catch((e=>{t(!1)}))}),[m,d,t,s]);return(0,l.jsx)("div",{className:"relative flex justify-center",children:(0,l.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:(0,l.jsxs)("div",{className:"flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0",children:[(0,l.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"}),(0,l.jsxs)("div",{className:"relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"flex items-center justify-center",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-8 h-8 text-gray-700 ",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"})})}),(0,l.jsxs)("div",{className:"mt-2 text-center",children:[(0,l.jsx)("h3",{className:"text-lg font-medium leading-6 text-gray-800 capitalize",id:"modal-title",children:"Block Device"}),(0,l.jsx)("p",{className:"mt-2 text-sm text-gray-500",children:"Are you sure you want to block this device?"})]})]}),(0,l.jsx)("div",{className:"mt-5 sm:flex sm:items-center sm:justify-center",children:(0,l.jsxs)("div",{className:"sm:flex sm:items-center sm:justify-center",children:[(0,l.jsx)("button",{className:"w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2  hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40",children:"Cancel"}),(0,l.jsx)("button",{disabled:e,onClick:u,className:"w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md sm:w-auto sm:mt-0 hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40",children:e?(0,l.jsx)(a.A,{loadingText:"Blocking..."}):"Block"})]})})]})]})})})}}}]);
//# sourceMappingURL=320.47a65cad.chunk.js.map