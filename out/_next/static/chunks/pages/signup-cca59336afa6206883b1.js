(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{6379:function(e,s,r){"use strict";r.d(s,{l:function(){return o}});r(7294);var n=r(5893),o=function(e){var s=e.errorTips,r=e.showTipsState,o=(0,n.jsx)("label",{className:"label",children:(0,n.jsx)("span",{className:"label-text-alt text-sm text-red-600",children:s})});return(0,n.jsx)(n.Fragment,{children:r?o:null})};o.defaultProps={errorTips:"",showTipsState:!1}},5296:function(e,s,r){"use strict";r.d(s,{G:function(){return t}});var n=r(7294),o=r(6379),a=r(3890),l=r(5893),t=function(e){var s=e.keyName,r=e.formik,t=(0,n.useState)(0),i=t[0],c=t[1],d=(0,n.useState)(0),u=d[0],p=d[1],h=(0,n.useRef)({phone:""}),m=(0,n.useState)(""),x=m[0],f=m[1],j=(0,n.useState)("error"),v=j[0],b=j[1],w=(0,n.useState)(0),N=w[0],g=w[1];(0,n.useEffect)((function(){var e=null;if(i>0)return console.log("\u5f00\u59cb\u5012\u8ba1\u65f6"),e=setInterval((function(){c(i-1)}),1e3),function(){clearInterval(e)}}),[i]);return(0,l.jsxs)("div",{children:[(0,l.jsx)(a.F2,{tipsText:x,tipsType:v,tipsTime:4e3,openTipsCount:N}),(0,l.jsxs)("div",{className:"form-control",children:[(0,l.jsx)("label",{className:"label",children:(0,l.jsx)("span",{className:"label-text",children:"\u624b\u673a\u9a8c\u8bc1\u7801"})}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("input",{name:s,placeholder:"ValidateCode",className:"w-full pr-16 input input-primary input-bordered",value:r.values[s],onChange:r.handleChange}),i>0?(0,l.jsx)("span",{className:"countdown absolute top-4 right-3 rounded-l-none",children:(0,l.jsx)("span",{style:{"--value":i}})}):(0,l.jsx)("button",{type:"button",className:"absolute top-0 right-0 rounded-l-none btn btn-link",onClick:function(){r.validateField("phone"),void 0===r.errors.phone&&!0===r.touched.phone&&(h.current={phone:r.values.phone},c(99),p(u+1))},children:"\u53d1\u9001\u9a8c\u8bc1\u7801"}),(0,l.jsx)(o.l,{errorTips:r.errors[s],showTipsState:r.touched[s]&&r.errors[s]})]})]}),(0,l.jsx)(a.LO,{api:a.MB.phoneSmsCode,method:"POST",data:h.current,resolveBk:function(e){console.log("responseHandle",e),f("\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001"),b("success"),g(N+1)},rejectBk:function(e){console.log("responseErrorHandle",e),f("\u9a8c\u8bc1\u7801\u53d1\u9001\u5931\u8d25"),b("error"),g(N+1),p(0)},requestCount:u})]})};t.defaultProps={keyName:"validCode",formik:{}}},2774:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return h}});var n=r(7294),o=r(1664),a=r(4649),l=r(9501),t=r(3890),i=r(5296),c=r(6379),d=r(5893),u=l.Ry().shape({phone:l.Z_().required("\u624b\u673a\u53f7\u7801\u4e0d\u80fd\u4e3a\u7a7a...").matches(/^1[3456789]\d{9}$/,"\u624b\u673a\u53f7\u7801\u9519\u8bef..."),password:l.Z_().min(6,"\u5bc6\u7801\u5fc5\u987b6\uff5e24\u4f4d...").max(24,"\u5bc6\u7801\u5fc5\u987b6\uff5e24\u4f4d...").required("\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a..."),confirmPassword:l.Z_().oneOf([l.iH("password"),null],"\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4...").required("\u786e\u8ba4\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a..."),validCode:l.Z_().required("\u8bf7\u8f93\u5165\u624b\u673a\u9a8c\u8bc1\u7801...")}),p=function(){var e=(0,n.useState)(0),s=e[0],r=e[1],l=(0,n.useRef)({}),p=(0,n.useState)(0),h=p[0],m=p[1],x=(0,n.useRef)({}),f=(0,n.useState)(""),j=f[0],v=f[1],b=(0,n.useState)("error"),w=b[0],N=b[1],g=(0,n.useState)(0),S=g[0],T=g[1],C=function(){var e=y.values;console.log(e);var n=t.a5.signUp,o={};for(var a in n){o[n[a]]=e[a]}console.log(o),l.current=o,r(s+1)},y=(0,a.TA)({initialValues:{phone:"",password:"",confirmPassword:"",validCode:""},validationSchema:u,onSubmit:function(e){console.log(e),function(e){x.current={mobile:e.phone},m(h+1)}(e)}});return(0,d.jsxs)("div",{className:"hero min-h-screen bg-base-200",children:[(0,d.jsx)(t.F2,{tipsText:j,tipsType:w,tipsTime:3e3,openTipsCount:S}),(0,d.jsxs)("div",{className:"flex-col justify-center hero-content lg:flex-row",children:[(0,d.jsxs)("div",{className:"text-center lg:text-left",children:[(0,d.jsx)("h1",{className:"mb-5 lg:mr-6 text-2xl font-bold",children:"\u6ce8\u518cSignUp"}),(0,d.jsx)("p",{className:"mb-5",children:"\u611f\u8c22\u60a8\u6ce8\u518c"})]}),(0,d.jsx)("div",{className:"card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100",children:(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsxs)("form",{onSubmit:y.handleSubmit,children:[(0,d.jsxs)("div",{className:"form-control",children:[(0,d.jsx)("label",{className:"label",children:(0,d.jsx)("span",{className:"label-text",children:"\u624b\u673a\u53f7\u7801"})}),(0,d.jsx)("input",{name:"phone",placeholder:"Mobile Phone",className:"input input-primary input-bordered",value:y.values.phone,onChange:y.handleChange,onBlur:y.handleBlur}),(0,d.jsx)(c.l,{errorTips:y.errors.phone,showTipsState:y.touched.phone&&y.errors.phone})]}),(0,d.jsxs)("div",{className:"form-control",children:[(0,d.jsx)("label",{className:"label",children:(0,d.jsx)("span",{className:"label-text",children:"\u5bc6\u7801"})}),(0,d.jsx)("input",{name:"password",type:"password",placeholder:"Password",className:"input input-primary input-bordered",value:y.values.password,onChange:y.handleChange}),(0,d.jsx)(c.l,{errorTips:y.errors.password,showTipsState:y.touched.password&&y.errors.password})]}),(0,d.jsxs)("div",{className:"form-control",children:[(0,d.jsx)("label",{className:"label",children:(0,d.jsx)("span",{className:"label-text",children:"\u786e\u8ba4\u5bc6\u7801"})}),(0,d.jsx)("input",{name:"confirmPassword",type:"password",placeholder:"ConfirmPassword",className:"input input-primary input-bordered",value:y.values.confirmPassword,onChange:y.handleChange}),(0,d.jsx)(c.l,{errorTips:y.errors.confirmPassword,showTipsState:y.touched.confirmPassword&&y.errors.confirmPassword})]}),(0,d.jsx)(i.G,{keyName:"validCode",formik:y}),(0,d.jsx)("div",{className:"form-control mt-6",children:(0,d.jsx)("button",{type:"submit",className:"btn btn-wide btn-primary",children:"\u6ce8 \u518c"})})]}),(0,d.jsx)(o.default,{href:"/signin",children:(0,d.jsx)("p",{className:"link mt-6",children:"\u5df2\u6709\u8d26\u53f7\u53bb\u767b\u5f55!"})})]})})]}),(0,d.jsx)(t.LO,{api:t.MB.customerSignUp,method:"POST",data:l.current,resolveBk:function(e){console.log("responseHandle",e);var s="\u6ce8\u518c\u6210\u529f, \u8bf7\u767b\u5f55...",r="success";void 0!==e.code&&1e3===e.code?window.location.href="/signin":(console.log("\u6ce8\u518c\u5931\u8d25",e),s="\u6ce8\u518c\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u9a8c\u8bc1\u7801\u662f\u5426\u6b63\u786e...",r="error"),v(s),N(r),T(S+1)},requestCount:s}),(0,d.jsx)(t.LO,{api:t.MB.phoneExists,method:"GET",params:x.current,resolveBk:function(e){console.log("responsePhoneExistsHandle",e),1e3===e.code&&!1===e.user_exists?C():(v("\u624b\u673a\u53f7\u7801\u5df2\u5b58\u5728..."),N("error"),T(S+1))},requestCount:h})]})};function h(){return(0,d.jsx)(p,{className:"flex flex-col justify-center items-center",children:"SignIn page"})}},8971:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return r(2774)}])}},function(e){e.O(0,[755,893,890,774,888,179],(function(){return s=8971,e(e.s=s);var s}));var s=e.O();_N_E=s}]);