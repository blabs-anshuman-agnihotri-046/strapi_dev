"use strict";(self.webpackChunkcms_survivor=self.webpackChunkcms_survivor||[]).push([[3677],{4186:(T,o,e)=>{e.r(o),e.d(o,{default:()=>B});var t=e(67294),n=e(82799),r=e(64593),i=e(86896),m=e(86706),E=e(36364),a=e(334),u=e(71590),P=e(40720),p=e(90731),C=e(34726),x=e(5923),L=e(3547),h=e(29299),g=e(69398),d=e(10574),I=e(35752),O=e(88767);const A=l=>{const s=(0,n.lm)(),{get:c}=(0,n.kY)();return(0,O.useQuery)(["plugins"],async()=>{const{data:v}=await c("/admin/plugins");return v},{onSuccess(){l&&l()},onError(){s({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},Z=()=>{const{formatMessage:l}=(0,i.Z)(),{notifyStatus:s}=(0,a.G)();(0,n.go)();const c=l({id:"global.plugins",defaultMessage:"Plugins"}),v=()=>{s(l({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:c}))},{status:y,data:M}=A(v);return y!=="success"&&y!=="error"?t.createElement(u.A,null,t.createElement(P.o,{"aria-busy":!0},t.createElement(n.dO,null))):t.createElement(u.A,null,t.createElement(P.o,null,t.createElement(p.T,{title:c,subtitle:l({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),t.createElement(C.D,null,t.createElement(x.i,{colCount:2,rowCount:M?.plugins?.length??0+1},t.createElement(L.h,null,t.createElement(h.Tr,null,t.createElement(g.Th,null,t.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),t.createElement(g.Th,null,t.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.description",defaultMessage:"description"}))))),t.createElement(I.p,null,M.plugins.map(({name:f,displayName:D,description:j})=>t.createElement(h.Tr,{key:f},t.createElement(g.Td,null,t.createElement(d.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},l({id:`global.plugins.${f}`,defaultMessage:D}))),t.createElement(g.Td,null,t.createElement(d.Z,{textColor:"neutral800"},l({id:`global.plugins.${f}.description`,defaultMessage:j}))))))))))},B=()=>{const{formatMessage:l}=(0,i.Z)(),s=(0,m.v9)(E._);return t.createElement(n.O4,{permissions:s.marketplace.main},t.createElement(r.q,{title:l({id:"global.plugins",defaultMessage:"Plugins"})}),t.createElement(Z,null))}},71590:(T,o,e)=>{e.d(o,{A:()=>E});var t=e(85893),n=e(71997),r=e(16607);const i=(0,n.ZP)(r.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:a})=>a?"auto 1fr":"1fr"};
`,m=(0,n.ZP)(r.x)`
  overflow-x: hidden;
`,E=({sideNav:a,children:u})=>(0,t.jsxs)(i,{hasSideNav:Boolean(a),children:[a,(0,t.jsx)(m,{paddingBottom:10,children:u})]})}}]);
