"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[102],{102:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var s=n(5043),a=n(3216),l=n(5475),c=n(6213),i=n(579);const r=()=>{const[e,t]=(0,s.useState)(!1),n=(0,a.Zp)(),r=(0,a.zy)(),o=new URLSearchParams(r.search),d=o.get("id"),u=o.get("email"),g=(0,s.useCallback)((()=>{const e=`http://127.0.0.1:4000/auth/verify-login?id=${d}&email=${u}`;c.A.get(e).then((e=>{200===e.status&&t(!0)})).catch((e=>{t(!1)}))}),[d,u,t]);return(0,s.useEffect)((()=>{d&&u&&g()}),[d,u,g]),e?(0,i.jsx)("div",{className:"flex flex-col items-center justify-center h-screen bg-gray-100",children:(0,i.jsxs)("div",{className:"max-w-md w-full px-4 py-8 bg-white rounded-lg shadow-lg",children:[(0,i.jsxs)("div",{className:"mb-4 text-center",children:[(0,i.jsx)("h2",{className:"text-3xl font-bold text-green-600 mb-4",children:"Congratulations!"}),(0,i.jsx)("p",{className:"text-gray-600",children:"You have been verified and can now login."})]}),(0,i.jsx)("button",{onClick:()=>n("/signin"),className:"w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50",children:"Login Now"})]})}):(0,i.jsx)("div",{className:"bg-yellow-200 text-black p-4 rounded-lg shadow-md flex justify-center items-center",children:(0,i.jsxs)("p",{className:"text-center",children:["You may not have been verified yet. Please check your email for a link to verify your account. If you have already verified your account, please try",(0,i.jsxs)(l.N_,{className:"text-purple-500 font-bold",to:"/signin",children:[" ","logging in"," "]}),"again."]})})}}}]);
//# sourceMappingURL=102.f38037ba.chunk.js.map