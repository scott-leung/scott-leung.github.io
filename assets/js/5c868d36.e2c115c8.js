"use strict";(self.webpackChunkscottleung_com=self.webpackChunkscottleung_com||[]).push([[5589],{1254:(e,t,a)=>{function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(a(7294));function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.default.createContext({}),u=function(e){var t=n.default.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.default.createElement(n.default.Fragment,{},t)}},m=n.default.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=u(a),f=r,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||o;return a?n.default.createElement(m,p(p({ref:t},i),{},{components:a})):n.default.createElement(m,p({ref:t},i))}));m.displayName="MDXCreateElement",t.Zo=function(e){var t=u(e.components);return n.default.createElement(s.Provider,{value:t},e.children)},t.kt=function(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[f]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.default.createElement.apply(null,l)}return n.default.createElement.apply(null,a)}},1907:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});a(7294);var r=a(1254);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={sidebar_position:1},i="Create a Page",p={unversionedId:"tutorial-basics/create-a-page",id:"tutorial-basics/create-a-page",title:"Create a Page",description:"Add Markdown or React files to src/pages to create a standalone page:",source:"@site/docs/tutorial-basics/create-a-page.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-page",permalink:"/docs/tutorial-basics/create-a-page",draft:!1,tags:[],version:"current",lastUpdatedBy:"Scott Leung",lastUpdatedAt:1678973238,formattedLastUpdatedAt:"2023\u5e743\u670816\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Tutorial - Basics",permalink:"/docs/category/tutorial---basics"},next:{title:"Create a Document",permalink:"/docs/tutorial-basics/create-a-document"}},c={},s=[{value:"Create your first React Page",id:"create-your-first-react-page",level:2},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",level:2}],u={toc:s},f="wrapper";function d(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)(f,n({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",n({},{id:"create-a-page"}),"Create a Page"),(0,r.kt)("p",null,"Add ",(0,r.kt)("strong",{parentName:"p"},"Markdown or React")," files to ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages")," to create a ",(0,r.kt)("strong",{parentName:"p"},"standalone page"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/pages/index.js")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:3000/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/pages/foo.md")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),(0,r.kt)("h2",n({},{id:"create-your-first-react-page"}),"Create your first React Page"),(0,r.kt)("p",null,"Create a file at ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'}),"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n")),(0,r.kt)("p",null,"A new page is now available at ",(0,r.kt)("a",n({parentName:"p"},{href:"http://localhost:3000/my-react-page"}),"http://localhost:3000/my-react-page"),"."),(0,r.kt)("h2",n({},{id:"create-your-first-markdown-page"}),"Create your first Markdown Page"),(0,r.kt)("p",null,"Create a file at ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'}),"# My Markdown page\n\nThis is a Markdown page\n")),(0,r.kt)("p",null,"A new page is now available at ",(0,r.kt)("a",n({parentName:"p"},{href:"http://localhost:3000/my-markdown-page"}),"http://localhost:3000/my-markdown-page"),"."))}d.isMDXComponent=!0}}]);