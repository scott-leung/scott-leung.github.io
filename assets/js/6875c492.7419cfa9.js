"use strict";(self.webpackChunkscottleung_com=self.webpackChunkscottleung_com||[]).push([[8610],{1874:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(2210),r=a(2574);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&n.createElement(r.Z,{permalink:s,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},8972:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(4185),r=a(7233);function s({items:e,component:t=r.Z}){return n.createElement(n.Fragment,null,e.map((({content:e})=>n.createElement(l.n,{key:e.metadata.permalink,content:e},n.createElement(t,null,n.createElement(e,null))))))}},9872:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(7294),l=a(6010),r=a(2210),s=a(60),o=a(4285),i=a(5319),c=a(1984),g=a(2779),m=a(1874),p=a(6894),u=a(8972);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}function h(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function b({tag:e}){const t=h(e);return n.createElement(n.Fragment,null,n.createElement(o.d,{title:t}),n.createElement(p.Z,{tag:"blog_tags_posts"}))}function E({tag:e,items:t,sidebar:a,listMetadata:l}){const s=h(e);return n.createElement(g.Z,{sidebar:a},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,s),n.createElement(c.Z,{href:e.allTagsPath},n.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(u.Z,{items:t}),n.createElement(m.Z,{metadata:l}))}function f(e){return n.createElement(o.FG,{className:(0,l.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},n.createElement(b,d({},e)),n.createElement(E,d({},e)))}}}]);