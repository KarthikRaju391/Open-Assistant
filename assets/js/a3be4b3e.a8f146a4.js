"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[2759],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},y=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,s=t.originalType,o=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),c=p(n),y=l,k=c["".concat(o,".").concat(y)]||c[y]||u[y]||s;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var s=n.length,i=new Array(s);i[0]=y;var r={};for(var o in e)hasOwnProperty.call(e,o)&&(r[o]=e[o]);r.originalType=t,r[c]="string"==typeof t?t:l,i[1]=r;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8142:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var a=n(87462),l=(n(67294),n(3905));const s={},i="Get Descendants",r={type:"api",id:"get-descendants",unversionedId:"get-descendants",title:"Get Descendants",description:"",slug:"/get-descendants",frontMatter:{},api:{tags:["messages"],description:"Get a subtree which starts with this message.",operationId:"get_descendants_api_v1_messages__message_id__descendants_get",parameters:[{required:!0,schema:{title:"Message Id",type:"string",format:"uuid"},name:"message_id",in:"path"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"MessageTree",required:["id"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},messages:{title:"Messages",type:"array",items:{title:"Message",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"},parent_id:{title:"Parent Id",type:"string",format:"uuid"},created_date:{title:"Created Date",type:"string",format:"date-time"}},description:"Represents a message in a conversation between the user and the assistant."},default:[]}},description:"All messages belonging to the same message tree."}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{APIKeyQuery:[]},{APIKeyHeader:[]}],method:"get",path:"/api/v1/messages/{message_id}/descendants",securitySchemes:{APIKeyQuery:{type:"apiKey",in:"query",name:"api_key"},APIKeyHeader:{type:"apiKey",in:"header",name:"X-API-Key"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Get Descendants",description:{content:"Get a subtree which starts with this message.",type:"text/plain"},url:{path:["api","v1","messages",":message_id","descendants"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<uuid>",key:"message_id"}]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/get-descendants",previous:{title:"Get Children",permalink:"/Open-Assistant/api/get-children"},next:{title:"Get Longest Conv",permalink:"/Open-Assistant/api/get-longest-conv"}},o=[],p={toc:o};function d(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"get-descendants"},"Get Descendants"),(0,l.kt)("p",null,"Get a subtree which starts with this message."),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"message_id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"200")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Successful Response"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"messages"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"frontend_message_id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Frontend Message Id"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"text"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Text"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"is_assistant"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Is Assistant"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"parent_id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"created_date"),(0,l.kt)("span",{style:{opacity:"0.6"}}," date-time")))))))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"422")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Validation Error"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"detail"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"loc"),(0,l.kt)("span",{style:{opacity:"0.6"}}," undefined[]"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"msg"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Message"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"type"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Error Type"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED")))))))))))))))}d.isMDXComponent=!0}}]);