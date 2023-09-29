"use strict";(self.webpackChunkcms_survivor=self.webpackChunkcms_survivor||[]).push([[169],{70169:(W,i,e)=>{e.r(i),e.d(i,{REVIEW_WORKFLOW_FILTERS:()=>P});var l=e(21892),t=e(67294),E=e(60914),u=e(53768),n=e(45697),s=e.n(n),o=e(86896),r=e(78186),a=e(54920);const d=({value:T,onChange:A})=>{const{formatMessage:v}=(0,o.Z)(),{users:S,isLoading:p}=(0,a.R)();return t.createElement(E.hQ,{value:T,"aria-label":v({id:"content-manager.components.Filters.usersSelect.label",defaultMessage:"Search and select an user to filter"}),onChange:A,loading:p},S.map(m=>t.createElement(u.O,{key:m.id,value:m.id.toString()},(0,r.G)(m,v))))};d.propTypes={onChange:s().func.isRequired,value:s().string},d.defaultProps={value:""};var g=e(90090),O=e(96987),c=e(10574),f=e(74863),C=e(52258),y=e(5318);const R=({value:T,onChange:A,uid:v})=>{const{formatMessage:S}=(0,o.Z)(),{workflows:[p],isLoading:m}=(0,C.n)({filters:{contentTypes:v}});return t.createElement(g.q4,{"aria-label":S({id:"content-manager.components.Filters.reviewWorkflows.label",defaultMessage:"Search and select an workflow stage to filter"}),value:T,onChange:A,loading:m,customizeContent:()=>t.createElement(O.k,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%"},t.createElement(c.Z,{textColor:"neutral800",ellipsis:!0},T),m?t.createElement(f.a,{small:!0,style:{display:"flex"}}):null)},(p?.stages??[]).map(({id:h,color:L,name:w})=>{const{themeColorName:F}=(0,y.k)(L);return t.createElement(g.ag,{key:h,startIcon:t.createElement(O.k,{height:2,background:L,borderColor:F==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),value:w},w)}))};R.defaultProps={value:""},R.propTypes={onChange:s().func.isRequired,uid:s().string.isRequired,value:s().string};const P=[{fieldSchema:{type:"relation",mainField:{name:"name",schema:{type:"string"}}},metadatas:{customInput:R,label:{id:(0,l.OB)("containers.ListPage.table-headers.reviewWorkflows.stage"),defaultMessage:"Review stage"}},name:"strapi_stage"},{fieldSchema:{type:"relation",mainField:{name:"id",schema:{type:"int"}}},metadatas:{customInput:d,customOperators:[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],label:{id:(0,l.OB)("containers.ListPage.table-headers.reviewWorkflows.assignee.label"),defaultMessage:"Assignee"}},name:"strapi_assignee"}]},86978:(W,i,e)=>{e.d(i,{$k:()=>r,Ef:()=>c,FT:()=>g,Nj:()=>o,Ot:()=>s,VS:()=>a,_X:()=>f,gu:()=>E,lv:()=>d,qZ:()=>u,sN:()=>t,uL:()=>O,x4:()=>n});var l=e(12255);const t="settings_review-workflows",E="Settings/Review_Workflows/RESET_WORKFLOW",u="Settings/Review_Workflows/SET_WORKFLOW",n="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",s="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",o="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",r="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",a="Settings/Review_Workflows/WORKFLOW_UPDATE",d={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},g=l.W.colors.primary600,O={STAGE:"stage"},c="numberOfWorkflows",f="stagesPerWorkflow"},52258:(W,i,e)=>{e.d(i,{n:()=>E});var l=e(68835),t=e(88767);function E(u={}){const{get:n}=(0,l.kY)(),{id:s="",...o}=u,r={populate:"stages"},{data:a,isLoading:d,status:g,refetch:O}=(0,t.useQuery)(["review-workflows","workflows",s],async()=>(await n(`/admin/review-workflows/workflows/${s}`,{params:{...r,...o}})).data);let c=[];return s&&a?.data?c=[a.data]:Array.isArray(a?.data)&&(c=a.data),{meta:a?.meta??{},workflows:c,isLoading:d,status:g,refetch:O}}},5318:(W,i,e)=>{e.d(i,{k:()=>E,s:()=>u});var l=e(12255),t=e(86978);function E(n){if(!n)return null;const o=Object.entries(l.W.colors).filter(([,r])=>r.toUpperCase()===n.toUpperCase()).reduce((r,[a])=>(t.lv?.[a]&&(r=a),r),null);return o?{themeColorName:o,name:t.lv[o]}:null}function u(){return Object.entries(t.lv).map(([n,s])=>({hex:l.W.colors[n].toUpperCase(),name:s}))}}}]);
