(self.webpackChunkscottleung_com=self.webpackChunkscottleung_com||[]).push([[7920],{3962:e=>{e.exports={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"}},60:(e,t,r)=>{"use strict";r.d(t,{c:()=>u});var a=r(7294),n=r(8241);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=r.select(t),l=r.pluralForms.indexOf(n);return a[Math.min(l,a.length-1)]}(r,t,e)}}},9697:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>F});var a=r(7294),n=r(8241),l=r(1397),s=r(1098),c=r(1984),o=r(2210),u=r(60),m=r(6010),h=r(6550),i=r(8087);const p="q",g="ctx",d="version";const f=function(){const e=(0,h.k6)(),t=(0,h.TH)(),{siteConfig:{baseUrl:r}}=(0,n.Z)(),a=i.Z.canUseDOM?new URLSearchParams(t.search):null,l=(null==a?void 0:a.get(p))||"",s=(null==a?void 0:a.get(g))||"",c=(null==a?void 0:a.get(d))||"",o=e=>{const r=new URLSearchParams(t.search);return e?r.set(p,e):r.delete(p),r};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const r=o(t);e.replace({search:r.toString()})},updateSearchContext:r=>{const a=new URLSearchParams(t.search);a.set(g,r),e.replace({search:a.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${r}search?${t.toString()}`}}};var y=r(9924),E=r(846),S=r(3007),C=r(7072),I=r(6812),v=r(6422),x=r(1523),w=r(1806),R=r(3962),P=r.n(R);function _(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=(0,u.c)(),{searchValue:r,searchContext:l,searchVersion:c,updateSearchPath:h,updateSearchContext:i}=f(),[p,g]=(0,a.useState)(r),[d,S]=(0,a.useState)(),[C,I]=(0,a.useState)(),x=`${e}${c}`,R=(0,a.useMemo)((()=>p?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:p}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[p]);(0,a.useEffect)((()=>{h(p),d&&(p?d(p,(e=>{I(e)})):I(void 0))}),[p,d]);const _=(0,a.useCallback)((e=>{g(e.target.value)}),[]);return(0,a.useEffect)((()=>{r&&r!==p&&g(r)}),[r]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,y.w)(x,l);S((()=>(0,E.v)(e,t,100)))}()}),[l,x]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,R)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,R),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,m.Z)("col",{[P().searchQueryColumn]:Array.isArray(w.Kc),"col--9":Array.isArray(w.Kc),"col--12":!Array.isArray(w.Kc)})},a.createElement("input",{type:"search",name:"q",className:P().searchQueryInput,"aria-label":"Search",onChange:_,value:p,autoComplete:"off",autoFocus:!0})),Array.isArray(w.Kc)?a.createElement("div",{className:(0,m.Z)("col","col--3","padding-left--none",P().searchContextColumn)},a.createElement("select",{name:"search-context",className:P().searchContextInput,id:"context-selector",value:l,onChange:e=>i(e.target.value)},a.createElement("option",{value:""},w.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),w.Kc.map((e=>a.createElement("option",{key:e,value:e},e))))):null),!d&&p&&a.createElement("div",null,a.createElement(v.Z,null)),C&&(C.length>0?a.createElement("p",null,t(C.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:C.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,C&&C.map((e=>a.createElement(b,{key:e.document.i,searchResult:e}))))))}function b({searchResult:{document:e,type:t,page:r,tokens:n,metadata:l}}){const s=0===t,o=2===t,u=(s?e.b:r.b).slice(),m=o?e.s:e.t;s||u.push(r.t);let h="";if(w.vc&&n.length>0){const e=new URLSearchParams;for(const t of n)e.append("_highlight",t);h=`?${e.toString()}`}return a.createElement("article",{className:P().searchResultItem},a.createElement("h2",null,a.createElement(c.Z,{to:e.u+h+(e.h||""),dangerouslySetInnerHTML:{__html:o?(0,S.C)(m,n):(0,C.o)(m,(0,I.m)(l,"t"),n,100)}})),u.length>0&&a.createElement("p",{className:P().searchResultItemPath},(0,x.e)(u)),o&&a.createElement("p",{className:P().searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,C.o)(e.t,(0,I.m)(l,"t"),n,100)}}))}const F=function(){return a.createElement(l.Z,null,a.createElement(_,null))}}}]);