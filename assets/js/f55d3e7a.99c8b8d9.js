"use strict";(self.webpackChunkscottleung_com=self.webpackChunkscottleung_com||[]).push([[4193],{1254:(e,t,r)=>{function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=n(r(7294));function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.default.createContext({}),c=function(e){var t=o.default.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.default.createElement(o.default.Fragment,{},t)}},y=o.default.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,y=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return r?o.default.createElement(y,s(s({ref:t},i),{},{components:r})):o.default.createElement(y,s({ref:t},i))}));y.displayName="MDXCreateElement",t.Zo=function(e){var t=c(e.components);return o.default.createElement(p.Provider,{value:t},e.children)},t.kt=function(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return o.default.createElement.apply(null,l)}return o.default.createElement.apply(null,r)}},4069:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});r(7294);var n=r(1254);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={sidebar_position:5},i="Deploy your site",s={unversionedId:"tutorial-basics/deploy-your-site",id:"tutorial-basics/deploy-your-site",title:"Deploy your site",description:"Docusaurus is a static-site-generator (also called Jamstack).",source:"@site/docs/tutorial-basics/deploy-your-site.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/deploy-your-site",permalink:"/docs/tutorial-basics/deploy-your-site",draft:!1,tags:[],version:"current",lastUpdatedBy:"Scott Leung",lastUpdatedAt:1680529924,formattedLastUpdatedAt:"2023\u5e744\u67083\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Markdown Features",permalink:"/docs/tutorial-basics/markdown-features"},next:{title:"Congratulations!",permalink:"/docs/tutorial-basics/congratulations"}},u={},p=[{value:"Build your site",id:"build-your-site",level:2},{value:"Deploy your site",id:"deploy-your-site-1",level:2}],c={toc:p},d="wrapper";function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(d,o({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"deploy-your-site"}),"Deploy your site"),(0,n.kt)("p",null,"Docusaurus is a ",(0,n.kt)("strong",{parentName:"p"},"static-site-generator")," (also called ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",o({parentName:"strong"},{href:"https://jamstack.org/"}),"Jamstack")),")."),(0,n.kt)("p",null,"It builds your site as simple ",(0,n.kt)("strong",{parentName:"p"},"static HTML, JavaScript and CSS files"),"."),(0,n.kt)("h2",o({},{id:"build-your-site"}),"Build your site"),(0,n.kt)("p",null,"Build your site ",(0,n.kt)("strong",{parentName:"p"},"for production"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"npm run build\n")),(0,n.kt)("p",null,"The static files are generated in the ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," folder."),(0,n.kt)("h2",o({},{id:"deploy-your-site-1"}),"Deploy your site"),(0,n.kt)("p",null,"Test your production build locally:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"npm run serve\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," folder is now served at ",(0,n.kt)("a",o({parentName:"p"},{href:"http://localhost:3000/"}),"http://localhost:3000/"),"."),(0,n.kt)("p",null,"You can now deploy the ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," folder ",(0,n.kt)("strong",{parentName:"p"},"almost anywhere")," easily, ",(0,n.kt)("strong",{parentName:"p"},"for free")," or very small cost (read the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",o({parentName:"strong"},{href:"https://docusaurus.io/docs/deployment"}),"Deployment Guide")),")."))}f.isMDXComponent=!0}}]);