"use strict";(self.webpackChunkagoodbook=self.webpackChunkagoodbook||[]).push([[688],{2108:(e,t,a)=>{a.d(t,{Z:()=>G});var n=a(3967),s=a.n(n),i=a(7294),l=a(3124),r=a(1413);function o(e,t){var a=(0,r.Z)({},e);return Array.isArray(t)&&t.forEach((function(e){delete a[e]})),a}const c=e=>{const{prefixCls:t,className:a,style:n,size:l,shape:r}=e,o=s()({[`${t}-lg`]:"large"===l,[`${t}-sm`]:"small"===l}),c=s()({[`${t}-circle`]:"circle"===r,[`${t}-square`]:"square"===r,[`${t}-round`]:"round"===r}),g=i.useMemo((()=>"number"==typeof l?{width:l,height:l,lineHeight:`${l}px`}:{}),[l]);return i.createElement("span",{className:s()(t,o,c,a),style:Object.assign(Object.assign({},g),n)})};var g=a(4548),d=a(8433),u=a(5503);const m=new g.E4("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),b=e=>({height:e,lineHeight:(0,g.bf)(e)}),$=e=>Object.assign({width:e},b(e)),h=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:m,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),p=(e,t)=>Object.assign({width:t(e).mul(5).equal(),minWidth:t(e).mul(5).equal()},b(e)),C=e=>{const{skeletonAvatarCls:t,gradientFromColor:a,controlHeight:n,controlHeightLG:s,controlHeightSM:i}=e;return{[`${t}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:a},$(n)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},$(s)),[`${t}${t}-sm`]:Object.assign({},$(i))}},k=e=>{const{controlHeight:t,borderRadiusSM:a,skeletonInputCls:n,controlHeightLG:s,controlHeightSM:i,gradientFromColor:l,calc:r}=e;return{[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:l,borderRadius:a},p(t,r)),[`${n}-lg`]:Object.assign({},p(s,r)),[`${n}-sm`]:Object.assign({},p(i,r))}},v=e=>Object.assign({width:e},b(e)),f=e=>{const{skeletonImageCls:t,imageSizeBase:a,gradientFromColor:n,borderRadiusSM:s,calc:i}=e;return{[`${t}`]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:n,borderRadius:s},v(i(a).mul(2).equal())),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},v(a)),{maxWidth:i(a).mul(4).equal(),maxHeight:i(a).mul(4).equal()}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},j=(e,t,a)=>{const{skeletonButtonCls:n}=e;return{[`${a}${n}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${a}${n}-round`]:{borderRadius:t}}},O=(e,t)=>Object.assign({width:t(e).mul(2).equal(),minWidth:t(e).mul(2).equal()},b(e)),w=e=>{const{borderRadiusSM:t,skeletonButtonCls:a,controlHeight:n,controlHeightLG:s,controlHeightSM:i,gradientFromColor:l,calc:r}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[`${a}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:l,borderRadius:t,width:r(n).mul(2).equal(),minWidth:r(n).mul(2).equal()},O(n,r))},j(e,n,a)),{[`${a}-lg`]:Object.assign({},O(s,r))}),j(e,s,`${a}-lg`)),{[`${a}-sm`]:Object.assign({},O(i,r))}),j(e,i,`${a}-sm`))},x=e=>{const{componentCls:t,skeletonAvatarCls:a,skeletonTitleCls:n,skeletonParagraphCls:s,skeletonButtonCls:i,skeletonInputCls:l,skeletonImageCls:r,controlHeight:o,controlHeightLG:c,controlHeightSM:g,gradientFromColor:d,padding:u,marginSM:m,borderRadius:b,titleHeight:p,blockRadius:v,paragraphLiHeight:j,controlHeightXS:O,paragraphMarginTop:x}=e;return{[`${t}`]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:u,verticalAlign:"top",[`${a}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:d},$(o)),[`${a}-circle`]:{borderRadius:"50%"},[`${a}-lg`]:Object.assign({},$(c)),[`${a}-sm`]:Object.assign({},$(g))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[`${n}`]:{width:"100%",height:p,background:d,borderRadius:v,[`+ ${s}`]:{marginBlockStart:g}},[`${s}`]:{padding:0,"> li":{width:"100%",height:j,listStyle:"none",background:d,borderRadius:v,"+ li":{marginBlockStart:O}}},[`${s}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${n}, ${s} > li`]:{borderRadius:b}}},[`${t}-with-avatar ${t}-content`]:{[`${n}`]:{marginBlockStart:m,[`+ ${s}`]:{marginBlockStart:x}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},w(e)),C(e)),k(e)),f(e)),[`${t}${t}-block`]:{width:"100%",[`${i}`]:{width:"100%"},[`${l}`]:{width:"100%"}},[`${t}${t}-active`]:{[`\n        ${n},\n        ${s} > li,\n        ${a},\n        ${i},\n        ${l},\n        ${r}\n      `]:Object.assign({},h(e))}}},E=(0,d.I$)("Skeleton",(e=>{const{componentCls:t,calc:a}=e,n=(0,u.TS)(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:a(e.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[x(n)]}),(e=>{const{colorFillContent:t,colorFill:a}=e;return{color:t,colorGradientEnd:a,gradientFromColor:t,gradientToColor:a,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}}),{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),N=e=>{const{prefixCls:t,className:a,rootClassName:n,active:r,shape:g="circle",size:d="default"}=e,{getPrefixCls:u}=i.useContext(l.E_),m=u("skeleton",t),[b,$,h]=E(m),p=o(e,["prefixCls","className"]),C=s()(m,`${m}-element`,{[`${m}-active`]:r},a,n,$,h);return b(i.createElement("div",{className:C},i.createElement(c,Object.assign({prefixCls:`${m}-avatar`,shape:g,size:d},p))))},y=e=>{const{prefixCls:t,className:a,rootClassName:n,active:r,block:g=!1,size:d="default"}=e,{getPrefixCls:u}=i.useContext(l.E_),m=u("skeleton",t),[b,$,h]=E(m),p=o(e,["prefixCls"]),C=s()(m,`${m}-element`,{[`${m}-active`]:r,[`${m}-block`]:g},a,n,$,h);return b(i.createElement("div",{className:C},i.createElement(c,Object.assign({prefixCls:`${m}-button`,size:d},p))))},H=e=>{const{prefixCls:t,className:a,rootClassName:n,style:r,active:o}=e,{getPrefixCls:c}=i.useContext(l.E_),g=c("skeleton",t),[d,u,m]=E(g),b=s()(g,`${g}-element`,{[`${g}-active`]:o},a,n,u,m);return d(i.createElement("div",{className:b},i.createElement("div",{className:s()(`${g}-image`,a),style:r},i.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${g}-image-svg`},i.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:`${g}-image-path`})))))},q=e=>{const{prefixCls:t,className:a,rootClassName:n,active:r,block:g,size:d="default"}=e,{getPrefixCls:u}=i.useContext(l.E_),m=u("skeleton",t),[b,$,h]=E(m),p=o(e,["prefixCls"]),C=s()(m,`${m}-element`,{[`${m}-active`]:r,[`${m}-block`]:g},a,n,$,h);return b(i.createElement("div",{className:C},i.createElement(c,Object.assign({prefixCls:`${m}-input`,size:d},p))))};var z=a(7462);const R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"};var S=a(2135),M=function(e,t){return i.createElement(S.Z,(0,z.Z)({},e,{ref:t,icon:R}))};const A=i.forwardRef(M),B=e=>{const{prefixCls:t,className:a,rootClassName:n,style:r,active:o,children:c}=e,{getPrefixCls:g}=i.useContext(l.E_),d=g("skeleton",t),[u,m,b]=E(d),$=s()(d,`${d}-element`,{[`${d}-active`]:o},m,a,n,b),h=null!=c?c:i.createElement(A,null);return u(i.createElement("div",{className:$},i.createElement("div",{className:s()(`${d}-image`,a),style:r},h)))};var F=a(4902);const I=e=>{const t=t=>{const{width:a,rows:n=2}=e;return Array.isArray(a)?a[t]:n-1===t?a:void 0},{prefixCls:a,className:n,style:l,rows:r}=e,o=(0,F.Z)(Array(r)).map(((e,a)=>i.createElement("li",{key:a,style:{width:t(a)}})));return i.createElement("ul",{className:s()(a,n),style:l},o)},L=e=>{let{prefixCls:t,className:a,width:n,style:l}=e;return i.createElement("h3",{className:s()(t,a),style:Object.assign({width:n},l)})};function P(e){return e&&"object"==typeof e?e:{}}const T=e=>{const{prefixCls:t,loading:a,className:n,rootClassName:r,style:o,children:g,avatar:d=!1,title:u=!0,paragraph:m=!0,active:b,round:$}=e,{getPrefixCls:h,direction:p,skeleton:C}=i.useContext(l.E_),k=h("skeleton",t),[v,f,j]=E(k);if(a||!("loading"in e)){const e=!!d,t=!!u,a=!!m;let l,g;if(e){const e=Object.assign(Object.assign({prefixCls:`${k}-avatar`},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(t,a)),P(d));l=i.createElement("div",{className:`${k}-header`},i.createElement(c,Object.assign({},e)))}if(t||a){let n,s;if(t){const t=Object.assign(Object.assign({prefixCls:`${k}-title`},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(e,a)),P(u));n=i.createElement(L,Object.assign({},t))}if(a){const a=Object.assign(Object.assign({prefixCls:`${k}-paragraph`},function(e,t){const a={};return e&&t||(a.width="61%"),a.rows=!e&&t?3:2,a}(e,t)),P(m));s=i.createElement(I,Object.assign({},a))}g=i.createElement("div",{className:`${k}-content`},n,s)}const h=s()(k,{[`${k}-with-avatar`]:e,[`${k}-active`]:b,[`${k}-rtl`]:"rtl"===p,[`${k}-round`]:$},null==C?void 0:C.className,n,r,f,j);return v(i.createElement("div",{className:h,style:Object.assign(Object.assign({},null==C?void 0:C.style),o)},l,g))}return void 0!==g?g:null};T.Button=y,T.Avatar=N,T.Input=q,T.Image=H,T.Node=B;const G=T},1262:(e,t,a)=>{a.d(t,{Z:()=>i});a(7294);var n=a(2389),s=a(5893);function i(e){let{children:t,fallback:a}=e;return(0,n.Z)()?(0,s.jsx)(s.Fragment,{children:t?.()}):a??null}}}]);