import{y as Q,p as x,z as G,c,A as U,B as Pe,C as we,j as o,F as Re,D as ke,n as q,h as L,q as X,E as ze,G as T,H as xt,g as re,J as $t,d as Oe,i as It,s as oe,t as W,a as Vt,K as Ae,o as Lt,L as Bt,M as Et,f as Nt,N as Tt,O as je,P as Pt,b as _,Q as ae,T as Rt,R as zt,r as N,S as ue,U as Ot,V as At,W as xe,u as Ge,X as Me,Y as jt,Z as $e,I as Gt,_ as ce,$ as Mt,a0 as se,a1 as We,a2 as de,a3 as ve,a4 as Wt,a5 as Dt}from"./index.83bc4cc1.js";import{m as A,a as P,u as Ht}from"./tag.e25f68eb.js";const De=["top","bottom"],Ft=["start","end","left","right"];function Ut(e,n){let[a,t]=e.split(" ");return t||(t=Q(De,a)?"start":Q(Ft,a)?"top":"center"),{side:Ie(a,n),align:Ie(t,n)}}function Ie(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}function jn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Gn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Mn(e){return{side:e.align,align:e.side}}function Wn(e){return Q(De,e.side)?"y":"x"}const He=x({border:[Boolean,Number,String]},"border");function Fe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{borderClasses:c(()=>{const t=U(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))s.push(`border-${i}`);return s})}}const qt=[null,"default","comfortable","compact"],Ue=x({density:{type:String,default:"default",validator:e=>qt.includes(e)}},"density");function qe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{densityClasses:c(()=>`${n}--density-${e.density}`)}}const Xe=x({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function Ye(e){return{elevationClasses:c(()=>{const a=U(e)?e.value:e.elevation,t=[];return a==null||t.push(`elevation-${a}`),t})}}const fe=x({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function me(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{roundedClasses:c(()=>{const t=U(e)?e.value:e.rounded,s=[];if(t===!0||t==="")s.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))s.push(`rounded-${i}`);return s})}}function ge(e){return Pe(()=>{const n=[],a={};return e.value.background&&(we(e.value.background)?a.backgroundColor=e.value.background:n.push(`bg-${e.value.background}`)),e.value.text&&(we(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:a}})}function K(e,n){const a=c(()=>({text:U(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:s}=ge(a);return{textColorClasses:t,textColorStyles:s}}function Ve(e,n){const a=c(()=>({background:U(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:s}=ge(a);return{backgroundColorClasses:t,backgroundColorStyles:s}}const Xt=["elevated","flat","tonal","outlined","text","plain"];function Yt(e,n){return o(Re,null,[e&&o("span",{key:"overlay",class:`${n}__overlay`},null),o("span",{key:"underlay",class:`${n}__underlay`},null)])}const Je=x({color:String,variant:{type:String,default:"elevated",validator:e=>Xt.includes(e)}},"variant");function Jt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();const a=c(()=>{const{variant:i}=ke(e);return`${n}--variant-${i}`}),{colorClasses:t,colorStyles:s}=ge(c(()=>{const{variant:i,color:l}=ke(e);return{[["elevated","flat"].includes(i)?"background":"text"]:l}}));return{colorClasses:t,colorStyles:s,variantClasses:a}}const Qe=x({divided:Boolean,...He(),...Ue(),...Xe(),...fe(),...A(),...q(),...Je()},"v-btn-group"),Ke=L()({name:"VBtnGroup",props:Qe(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=X(e),{densityClasses:s}=qe(e),{borderClasses:i}=Fe(e),{elevationClasses:l}=Ye(e),{roundedClasses:r}=me(e);ze({VBtn:{height:"auto",color:T(e,"color"),density:T(e,"density"),flat:!0,variant:T(e,"variant")}}),P(()=>o(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,i.value,s.value,l.value,r.value]},a))}});function Qt(e){return xt(e,Object.keys(Ke.props))}const Kt=x({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Zt=x({value:null,disabled:Boolean,selectedClass:String},"group-item");function en(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=re("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=$t();Oe(Symbol.for(`${n.description}:id`),s);const i=It(n,null);if(!i){if(!a)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)}const l=T(e,"value"),r=c(()=>i.disabled.value||e.disabled);i.register({id:s,value:l,disabled:r},t),oe(()=>{i.unregister(s)});const u=c(()=>i.isSelected(s)),f=c(()=>u.value&&[i.selectedClass.value,e.selectedClass]);return W(u,g=>{t.emit("group:selected",{value:g})}),{id:s,isSelected:u,toggle:()=>i.select(s,!u.value),select:g=>i.select(s,g),selectedClass:f,value:l,disabled:r,group:i}}function tn(e,n){let a=!1;const t=Vt([]),s=Ae(e,"modelValue",[],d=>d==null?[]:Ze(t,Et(d)),d=>{const v=an(t,d);return e.multiple?v:v[0]}),i=re("useGroup");function l(d,v){const S=d,b=Symbol.for(`${n.description}:id`),C=Nt(b,i==null?void 0:i.vnode).indexOf(v);C>-1?t.splice(C,0,S):t.push(S)}function r(d){if(a)return;u();const v=t.findIndex(S=>S.id===d);t.splice(v,1)}function u(){const d=t.find(v=>!v.disabled);d&&e.mandatory==="force"&&!s.value.length&&(s.value=[d.id])}Lt(()=>{u()}),oe(()=>{a=!0});function f(d,v){const S=t.find(b=>b.id===d);if(!(v&&(S==null?void 0:S.disabled)))if(e.multiple){const b=s.value.slice(),p=b.findIndex(h=>h===d),C=~p;if(v=v!=null?v:!C,C&&e.mandatory&&b.length<=1||!C&&e.max!=null&&b.length+1>e.max)return;p<0&&v?b.push(d):p>=0&&!v&&b.splice(p,1),s.value=b}else{const b=s.value.includes(d);if(e.mandatory&&b)return;s.value=(v!=null?v:!b)?[d]:[]}}function g(d){if(e.multiple&&Tt('This method is not supported when using "multiple" prop'),s.value.length){const v=s.value[0],S=t.findIndex(C=>C.id===v);let b=(S+d)%t.length,p=t[b];for(;p.disabled&&b!==S;)b=(b+d)%t.length,p=t[b];if(p.disabled)return;s.value=[t[b].id]}else{const v=t.find(S=>!S.disabled);v&&(s.value=[v.id])}}const y={register:l,unregister:r,selected:s,select:f,disabled:T(e,"disabled"),prev:()=>g(t.length-1),next:()=>g(1),isSelected:d=>s.value.includes(d),selectedClass:c(()=>e.selectedClass),items:c(()=>t),getItemIndex:d=>nn(t,d)};return Oe(n,y),y}function nn(e,n){const a=Ze(e,[n]);return a.length?e.findIndex(t=>t.id===a[0]):-1}function Ze(e,n){const a=[];for(let t=0;t<e.length;t++){const s=e[t];s.value!=null?n.find(i=>Bt(i,s.value))!=null&&a.push(s.id):n.includes(t)&&a.push(s.id)}return a}function an(e,n){const a=[];for(let t=0;t<e.length;t++){const s=e[t];n.includes(s.id)&&a.push(s.value!=null?s.value:t)}return a}const et=Symbol.for("vuetify:v-btn-toggle");L()({name:"VBtnToggle",props:{...Qe(),...Kt()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isSelected:t,next:s,prev:i,select:l,selected:r}=tn(e,et);return P(()=>{const[u]=Qt(e);return o(Ke,je({class:"v-btn-toggle"},u),{default:()=>{var f;return[(f=a.default)==null?void 0:f.call(a,{isSelected:t,next:s,prev:i,select:l,selected:r})]}})}),{next:s,prev:i,select:l}}});const ee=L(!1)({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,n){let{slots:a}=n;const{defaults:t,reset:s,root:i,scoped:l}=Pt(e);return ze(t,{reset:s,root:i,scoped:l}),()=>{var r;return(r=a.default)==null?void 0:r.call(a)}}});const sn=["x-small","small","default","large","x-large"],he=x({size:{type:[String,Number],default:"default"}},"size");function be(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return Pe(()=>{let a,t;return Q(sn,e.size)?a=`${n}--size-${e.size}`:e.size&&(t={width:_(e.size),height:_(e.size)}),{sizeClasses:a,sizeStyles:t}})}const ln=x({color:String,start:Boolean,end:Boolean,icon:ae,...he(),...A({tag:"i"}),...q()},"v-icon"),te=L()({name:"VIcon",props:ln(),setup(e,n){let{attrs:a,slots:t}=n,s;t.default&&(s=c(()=>{var y,d;const g=(y=t.default)==null?void 0:y.call(t);if(!!g)return(d=g.filter(v=>v.type===Rt&&v.children&&typeof v.children=="string")[0])==null?void 0:d.children}));const{themeClasses:i}=X(e),{iconData:l}=zt(s||e),{sizeClasses:r}=be(e),{textColorClasses:u,textColorStyles:f}=K(T(e,"color"));return P(()=>o(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",i.value,r.value,u.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[r.value?void 0:{fontSize:_(e.size),height:_(e.size),width:_(e.size)},f.value],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>{var g;return[(g=t.default)==null?void 0:g.call(t)]}})),{}}});function tt(e){const n=N(),a=N(!1);if(ue){const t=new IntersectionObserver(s=>{e==null||e(s,t),a.value=!!s.find(i=>i.isIntersecting)});oe(()=>{t.disconnect()}),W(n,(s,i)=>{i&&(t.unobserve(i),a.value=!1),s&&t.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const rn=L()({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...he(),...A({tag:"div"}),...q()},setup(e,n){let{slots:a}=n;const t=20,s=2*Math.PI*t,i=N(),{themeClasses:l}=X(e),{sizeClasses:r,sizeStyles:u}=be(e),{textColorClasses:f,textColorStyles:g}=K(T(e,"color")),{textColorClasses:y,textColorStyles:d}=K(T(e,"bgColor")),{intersectionRef:v,isIntersecting:S}=tt(),{resizeRef:b,contentRect:p}=Ht(),C=c(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),h=c(()=>Number(e.width)),w=c(()=>u.value?Number(e.size):p.value?p.value.width:Math.max(h.value,32)),I=c(()=>t/(1-h.value/w.value)*2),B=c(()=>h.value/w.value*I.value),R=c(()=>_((100-C.value)/100*s));return Ot(()=>{v.value=i.value,b.value=i.value}),P(()=>o(e.tag,{ref:i,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":S.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,r.value,f.value],style:[u.value,g.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:C.value},{default:()=>[o("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${I.value} ${I.value}`},[o("circle",{class:["v-progress-circular__underlay",y.value],style:d.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":B.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),o("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":B.value,"stroke-dasharray":s,"stroke-dashoffset":R.value},null)]),a.default&&o("div",{class:"v-progress-circular__content"},[a.default({value:C.value})])]})),{}}});const ie=Symbol("rippleStop"),on=80;function Le(e,n){e.style.transform=n,e.style.webkitTransform=n}function le(e){return e.constructor.name==="TouchEvent"}function nt(e){return e.constructor.name==="KeyboardEvent"}const un=function(e,n){var y;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,s=0;if(!nt(e)){const d=n.getBoundingClientRect(),v=le(e)?e.touches[e.touches.length-1]:e;t=v.clientX-d.left,s=v.clientY-d.top}let i=0,l=.3;(y=n._ripple)!=null&&y.circle?(l=.15,i=n.clientWidth/2,i=a.center?i:i+Math.sqrt((t-i)**2+(s-i)**2)/4):i=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const r=`${(n.clientWidth-i*2)/2}px`,u=`${(n.clientHeight-i*2)/2}px`,f=a.center?r:`${t-i}px`,g=a.center?u:`${s-i}px`;return{radius:i,scale:l,x:f,y:g,centerX:r,centerY:u}},Z={show(e,n){var v;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((v=n==null?void 0:n._ripple)!=null&&v.enabled))return;const t=document.createElement("span"),s=document.createElement("span");t.appendChild(s),t.className="v-ripple__container",a.class&&(t.className+=` ${a.class}`);const{radius:i,scale:l,x:r,y:u,centerX:f,centerY:g}=un(e,n,a),y=`${i*2}px`;s.className="v-ripple__animation",s.style.width=y,s.style.height=y,n.appendChild(t);const d=window.getComputedStyle(n);d&&d.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),Le(s,`translate(${r}, ${u}) scale3d(${l},${l},${l})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),Le(s,`translate(${f}, ${g}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const a=n[n.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const t=performance.now()-Number(a.dataset.activated),s=Math.max(250-t,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var r;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((r=a.parentNode)==null?void 0:r.parentNode)===e&&e.removeChild(a.parentNode)},300)},s)}};function at(e){return typeof e>"u"||!!e}function H(e){const n={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[ie])){if(e[ie]=!0,le(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(n.center=a._ripple.centered||nt(e),a._ripple.class&&(n.class=a._ripple.class),le(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{Z.show(e,a,n)},a._ripple.showTimer=window.setTimeout(()=>{var t;(t=a==null?void 0:a._ripple)!=null&&t.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},on)}else Z.show(e,a,n)}}function Be(e){e[ie]=!0}function $(e){const n=e.currentTarget;if(!!(n!=null&&n._ripple)){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{$(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),Z.hide(n)}}function st(e){const n=e.currentTarget;!(n!=null&&n._ripple)||(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let F=!1;function it(e){!F&&(e.keyCode===xe.enter||e.keyCode===xe.space)&&(F=!0,H(e))}function lt(e){F=!1,$(e)}function rt(e){F&&(F=!1,$(e))}function ot(e,n,a){var l;const{value:t,modifiers:s}=n,i=at(t);if(i||Z.hide(e),e._ripple=(l=e._ripple)!=null?l:{},e._ripple.enabled=i,e._ripple.centered=s.center,e._ripple.circle=s.circle,At(t)&&t.class&&(e._ripple.class=t.class),i&&!a){if(s.stop){e.addEventListener("touchstart",Be,{passive:!0}),e.addEventListener("mousedown",Be);return}e.addEventListener("touchstart",H,{passive:!0}),e.addEventListener("touchend",$,{passive:!0}),e.addEventListener("touchmove",st,{passive:!0}),e.addEventListener("touchcancel",$),e.addEventListener("mousedown",H),e.addEventListener("mouseup",$),e.addEventListener("mouseleave",$),e.addEventListener("keydown",it),e.addEventListener("keyup",lt),e.addEventListener("blur",rt),e.addEventListener("dragstart",$,{passive:!0})}else!i&&a&&ut(e)}function ut(e){e.removeEventListener("mousedown",H),e.removeEventListener("touchstart",H),e.removeEventListener("touchend",$),e.removeEventListener("touchmove",st),e.removeEventListener("touchcancel",$),e.removeEventListener("mouseup",$),e.removeEventListener("mouseleave",$),e.removeEventListener("keydown",it),e.removeEventListener("keyup",lt),e.removeEventListener("dragstart",$),e.removeEventListener("blur",rt)}function cn(e,n){ot(e,n,!1)}function dn(e){delete e._ripple,ut(e)}function vn(e,n){if(n.value===n.oldValue)return;const a=at(n.oldValue);ot(e,n,a)}const fn={mounted:cn,unmounted:dn,updated:vn},ct=x({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function dt(e){return{dimensionStyles:c(()=>({height:_(e.height),maxHeight:_(e.maxHeight),maxWidth:_(e.maxWidth),minHeight:_(e.minHeight),minWidth:_(e.minWidth),width:_(e.width)}))}}const Ee={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},vt=x({location:String},"location");function ft(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=Ge();return{locationStyles:c(()=>{if(!e.location)return{};const{side:i,align:l}=Ut(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function r(f){return a?a(f):0}const u={};return i!=="center"&&(n?u[Ee[i]]=`calc(100% - ${r(i)}px)`:u[i]=0),l!=="center"?n?u[Ee[l]]=`calc(100% - ${r(l)}px)`:u[l]=0:(i==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),u})}}const mn=L()({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...vt({location:"top"}),...fe(),...A(),...q()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const t=Ae(e,"modelValue"),{isRtl:s}=Ge(),{themeClasses:i}=X(e),{locationStyles:l}=ft(e),{textColorClasses:r,textColorStyles:u}=K(e,"color"),{backgroundColorClasses:f,backgroundColorStyles:g}=Ve(c(()=>e.bgColor||e.color)),{backgroundColorClasses:y,backgroundColorStyles:d}=Ve(e,"color"),{roundedClasses:v}=me(e),{intersectionRef:S,isIntersecting:b}=tt(),p=c(()=>parseInt(e.max,10)),C=c(()=>parseInt(e.height,10)),h=c(()=>parseFloat(e.bufferValue)/p.value*100),w=c(()=>parseFloat(t.value)/p.value*100),I=c(()=>s.value!==e.reverse),B=c(()=>e.indeterminate?"fade-transition":"slide-x-transition"),R=c(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function M(m){if(!S.value)return;const{left:k,right:V,width:E}=S.value.getBoundingClientRect(),j=I.value?E-m.clientX+(V-E):m.clientX-k;t.value=Math.round(j/E*p.value)}return P(()=>o(e.tag,{ref:S,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&b.value,"v-progress-linear--reverse":I.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},v.value,i.value],style:{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?_(C.value):0,"--v-progress-linear-height":_(C.value),...l.value},role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:w.value,onClick:e.clickable&&M},{default:()=>[e.stream&&o("div",{key:"stream",class:["v-progress-linear__stream",r.value],style:{...u.value,[I.value?"left":"right"]:_(-C.value),borderTop:`${_(C.value/2)} dotted`,opacity:R.value,top:`calc(50% - ${_(C.value/4)})`,width:_(100-h.value,"%"),"--v-progress-linear-stream-to":_(C.value*(I.value?1:-1))}},null),o("div",{class:["v-progress-linear__background",f.value],style:[g.value,{opacity:R.value,width:_(e.stream?h.value:100,"%")}]},null),o(Me,{name:B.value},{default:()=>[e.indeterminate?o("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(m=>o("div",{key:m,class:["v-progress-linear__indeterminate",m,y.value],style:d.value},null))]):o("div",{class:["v-progress-linear__determinate",y.value],style:[d.value,{width:_(w.value,"%")}]},null)]}),a.default&&o("div",{class:"v-progress-linear__content"},[a.default({value:w.value,buffer:h.value})])]})),{}}}),gn=x({loading:[Boolean,String]},"loader");function hn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{loaderClasses:c(()=>({[`${n}--loading`]:e.loading}))}}function Dn(e,n){var t;let{slots:a}=n;return o("div",{class:`${e.name}__loader`},[((t=a.default)==null?void 0:t.call(a,{color:e.color,isActive:e.active}))||o(mn,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const bn=["static","relative","fixed","absolute","sticky"],yn=x({position:{type:String,validator:e=>bn.includes(e)}},"position");function Sn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{positionClasses:c(()=>e.position?`${n}--${e.position}`:void 0)}}function Hn(){var e,n;return(n=(e=re("useRouter"))==null?void 0:e.proxy)==null?void 0:n.$router}function Cn(e,n){const a=jt("RouterLink"),t=c(()=>!!(e.href||e.to)),s=c(()=>(t==null?void 0:t.value)||$e(n,"click")||$e(e,"click"));if(typeof a=="string")return{isLink:t,isClickable:s,href:T(e,"href")};const i=e.to?a.useLink(e):void 0;return{isLink:t,isClickable:s,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&c(()=>{var l,r;return e.exact?(l=i.isExactActive)==null?void 0:l.value:(r=i.isActive)==null?void 0:r.value}),href:c(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const pn=x({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let ne=!1;function Fn(e,n){let a=!1,t,s;Gt&&(ce(()=>{window.addEventListener("popstate",i),t=e==null?void 0:e.beforeEach((l,r,u)=>{ne?a?n(u):u():setTimeout(()=>a?n(u):u()),ne=!0}),s=e==null?void 0:e.afterEach(()=>{ne=!1})}),Mt(()=>{window.removeEventListener("popstate",i),t==null||t(),s==null||s()}));function i(l){var r;(r=l.state)!=null&&r.replaced||(a=!0,setTimeout(()=>a=!1))}}function _n(e,n){W(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&n&&ce(()=>{n(!0)})},{immediate:!0})}const Un=L()({name:"VBtn",directives:{Ripple:fn},props:{active:{type:Boolean,default:void 0},symbol:{type:null,default:et},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ae,appendIcon:ae,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...He(),...fe(),...Ue(),...ct(),...Xe(),...Zt(),...gn(),...vt(),...yn(),...pn(),...he(),...A({tag:"button"}),...q(),...Je({variant:"elevated"})},emits:{"group:selected":e=>!0},setup(e,n){let{attrs:a,slots:t}=n;const{themeClasses:s}=X(e),{borderClasses:i}=Fe(e),{colorClasses:l,colorStyles:r,variantClasses:u}=Jt(e),{densityClasses:f}=qe(e),{dimensionStyles:g}=dt(e),{elevationClasses:y}=Ye(e),{loaderClasses:d}=hn(e),{locationStyles:v}=ft(e),{positionClasses:S}=Sn(e),{roundedClasses:b}=me(e),{sizeClasses:p,sizeStyles:C}=be(e),h=en(e,e.symbol,!1),w=Cn(e,a),I=c(()=>{var m;return e.active!==void 0?e.active:w.isLink.value?(m=w.isActive)==null?void 0:m.value:h==null?void 0:h.isSelected.value}),B=c(()=>(h==null?void 0:h.disabled.value)||e.disabled),R=c(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),M=c(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});return _n(w,h==null?void 0:h.select),P(()=>{var pe,_e;const m=w.isLink.value?"a":e.tag,k=!!(e.prependIcon||t.prepend),V=!!(e.appendIcon||t.append),E=!!(e.icon&&e.icon!==!0),j=(h==null?void 0:h.isSelected.value)&&(!w.isLink.value||((pe=w.isActive)==null?void 0:pe.value))||!h||((_e=w.isActive)==null?void 0:_e.value);return se(o(m,{type:m==="a"?void 0:"button",class:["v-btn",h==null?void 0:h.selectedClass.value,{"v-btn--active":I.value,"v-btn--block":e.block,"v-btn--disabled":B.value,"v-btn--elevated":R.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},s.value,i.value,j?l.value:void 0,f.value,y.value,d.value,S.value,b.value,p.value,u.value],style:[j?r.value:void 0,g.value,v.value,C.value],disabled:B.value||void 0,href:w.href.value,onClick:Y=>{var D;B.value||((D=w.navigate)==null||D.call(w,Y),h==null||h.toggle())},value:M.value},{default:()=>{var Y,D;return[Yt(!0,"v-btn"),!e.icon&&k&&o(ee,{key:"prepend",defaults:{VIcon:{icon:e.prependIcon}}},{default:()=>{var z,O;return[o("span",{class:"v-btn__prepend"},[(O=(z=t.prepend)==null?void 0:z.call(t))!=null?O:o(te,null,null)])]}}),o("span",{class:"v-btn__content","data-no-activator":""},[o(ee,{key:"content",defaults:{VIcon:{icon:E?e.icon:void 0}}},{default:()=>{var z,O;return[(O=(z=t.default)==null?void 0:z.call(t))!=null?O:E&&o(te,{key:"icon"},null)]}})]),!e.icon&&V&&o(ee,{key:"append",defaults:{VIcon:{icon:e.appendIcon}}},{default:()=>{var z,O;return[o("span",{class:"v-btn__append"},[(O=(z=t.append)==null?void 0:z.call(t))!=null?O:o(te,null,null)])]}}),!!e.loading&&o("span",{key:"loader",class:"v-btn__loader"},[(D=(Y=t.loader)==null?void 0:Y.call(t))!=null?D:o(rn,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[We("ripple"),!B.value&&e.ripple,null]])}),{}}});const qn=L()({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...A()},setup(e,n){let{slots:a}=n;return P(()=>o(e.tag,{class:["v-container",{"v-container--fluid":e.fluid}]},a)),{}}}),ye=["sm","md","lg","xl","xxl"],mt=(()=>ye.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}))(),gt=(()=>ye.reduce((e,n)=>(e["offset"+de(n)]={type:[String,Number],default:null},e),{}))(),ht=(()=>ye.reduce((e,n)=>(e["order"+de(n)]={type:[String,Number],default:null},e),{}))(),Ne={col:Object.keys(mt),offset:Object.keys(gt),order:Object.keys(ht)};function wn(e,n,a){let t=e;if(!(a==null||a===!1)){if(n){const s=n.replace(e,"");t+=`-${s}`}return e==="col"&&(t="v-"+t),e==="col"&&(a===""||a===!0)||(t+=`-${a}`),t.toLowerCase()}}const kn=["auto","start","end","center","baseline","stretch"],Xn=L()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...mt,offset:{type:[String,Number],default:null},...gt,order:{type:[String,Number],default:null},...ht,alignSelf:{type:String,default:null,validator:e=>kn.includes(e)},...A()},setup(e,n){let{slots:a}=n;const t=c(()=>{const s=[];let i;for(i in Ne)Ne[i].forEach(r=>{const u=e[r],f=wn(i,r,u);f&&s.push(f)});const l=s.some(r=>r.startsWith("v-col-"));return s.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return ve(e.tag,{class:t.value},(s=a.default)==null?void 0:s.call(a))}}}),xn=["sm","md","lg","xl","xxl"],Se=["start","end","center"],bt=["space-between","space-around","space-evenly"];function Ce(e,n){return xn.reduce((a,t)=>(a[e+de(t)]=n(),a),{})}const $n=[...Se,"baseline","stretch"],yt=e=>$n.includes(e),St=Ce("align",()=>({type:String,default:null,validator:yt})),In=[...Se,...bt],Ct=e=>In.includes(e),pt=Ce("justify",()=>({type:String,default:null,validator:Ct})),Vn=[...Se,...bt,"stretch"],_t=e=>Vn.includes(e),wt=Ce("alignContent",()=>({type:String,default:null,validator:_t})),Te={align:Object.keys(St),justify:Object.keys(pt),alignContent:Object.keys(wt)},Ln={align:"align",justify:"justify",alignContent:"align-content"};function Bn(e,n,a){let t=Ln[e];if(a!=null){if(n){const s=n.replace(e,"");t+=`-${s}`}return t+=`-${a}`,t.toLowerCase()}}const Yn=L()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:yt},...St,justify:{type:String,default:null,validator:Ct},...pt,alignContent:{type:String,default:null,validator:_t},...wt,...A()},setup(e,n){let{slots:a}=n;const t=c(()=>{const s=[];let i;for(i in Te)Te[i].forEach(l=>{const r=e[l],u=Bn(i,l,r);u&&s.push(u)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return ve(e.tag,{class:["v-row",t.value]},(s=a.default)==null?void 0:s.call(a))}}});function En(e){return{aspectStyles:c(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const Nn=L()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...ct()},setup(e,n){let{slots:a}=n;const{aspectStyles:t}=En(e),{dimensionStyles:s}=dt(e);return P(()=>{var i;return o("div",{class:"v-responsive",style:s.value},[o("div",{class:"v-responsive__sizer",style:t.value},null),(i=a.additional)==null?void 0:i.call(a),a.default&&o("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}});function Tn(e,n){if(!ue)return;const a=n.modifiers||{},t=n.value,{handler:s,options:i}=typeof t=="object"?t:{handler:t,options:{}},l=new IntersectionObserver(function(){var y;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const f=(y=e._observe)==null?void 0:y[n.instance.$.uid];if(!f)return;const g=r.some(d=>d.isIntersecting);s&&(!a.quiet||f.init)&&(!a.once||g||f.init)&&s(g,r,u),g&&a.once?kt(e,n):f.init=!0},i);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:l},l.observe(e)}function kt(e,n){var t;const a=(t=e._observe)==null?void 0:t[n.instance.$.uid];!a||(a.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const Pn={mounted:Tn,unmounted:kt},Rn=Pn,zn=x({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),J=(e,n)=>{let{slots:a}=n;const{transition:t,...s}=e,{component:i=Me,...l}=typeof t=="object"?t:{};return ve(i,je(typeof t=="string"?{name:t}:l,s),a)},Jn=L()({name:"VImg",directives:{intersect:Rn},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...zn()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:a,slots:t}=n;const s=N(""),i=N(),l=N(e.eager?"loading":"idle"),r=N(),u=N(),f=c(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=c(()=>f.value.aspect||r.value/u.value||0);W(()=>e.src,()=>{y(l.value!=="idle")}),W(g,(m,k)=>{!m&&k&&i.value&&p(i.value)}),Wt(()=>y());function y(m){if(!(e.eager&&m)&&!(ue&&!m&&!e.eager)){if(l.value="loading",f.value.lazySrc){const k=new Image;k.src=f.value.lazySrc,p(k,null)}!f.value.src||ce(()=>{var k,V;if(a("loadstart",((k=i.value)==null?void 0:k.currentSrc)||f.value.src),(V=i.value)!=null&&V.complete){if(i.value.naturalWidth||v(),l.value==="error")return;g.value||p(i.value,null),d()}else g.value||p(i.value),S()})}}function d(){var m;S(),l.value="loaded",a("load",((m=i.value)==null?void 0:m.currentSrc)||f.value.src)}function v(){var m;l.value="error",a("error",((m=i.value)==null?void 0:m.currentSrc)||f.value.src)}function S(){const m=i.value;m&&(s.value=m.currentSrc||m.src)}let b=-1;function p(m){let k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const V=()=>{clearTimeout(b);const{naturalHeight:E,naturalWidth:j}=m;E||j?(r.value=j,u.value=E):!m.complete&&l.value==="loading"&&k!=null?b=window.setTimeout(V,k):(m.currentSrc.endsWith(".svg")||m.currentSrc.startsWith("data:image/svg+xml"))&&(r.value=1,u.value=1)};V()}const C=c(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),h=()=>{var V;if(!f.value.src||l.value==="idle")return null;const m=o("img",{class:["v-img__img",C.value],src:f.value.src,srcset:f.value.srcset,alt:"",sizes:e.sizes,ref:i,onLoad:d,onError:v},null),k=(V=t.sources)==null?void 0:V.call(t);return o(J,{transition:e.transition,appear:!0},{default:()=>[se(k?o("picture",{class:"v-img__picture"},[k,m]):m,[[Dt,l.value==="loaded"]])]})},w=()=>o(J,{transition:e.transition},{default:()=>[f.value.lazySrc&&l.value!=="loaded"&&o("img",{class:["v-img__img","v-img__img--preload",C.value],src:f.value.lazySrc,alt:""},null)]}),I=()=>t.placeholder?o(J,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!t.error)&&o("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,B=()=>t.error?o(J,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&o("div",{class:"v-img__error"},[t.error()])]}):null,R=()=>e.gradient?o("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,M=N(!1);{const m=W(g,k=>{k&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{M.value=!0})}),m())})}return P(()=>se(o(Nn,{class:["v-img",{"v-img--booting":!M.value}],style:{width:_(e.width==="auto"?r.value:e.width)},aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>o(Re,null,[o(h,null,null),o(w,null,null),o(R,null,null),o(I,null,null),o(B,null,null)]),default:t.default}),[[We("intersect"),{handler:y,options:e.options},null,{once:!0}]])),{currentSrc:s,image:i,state:l,naturalWidth:r,naturalHeight:u}}});export{hn as A,ft as B,Sn as C,Cn as D,zn as E,K as F,Kt as G,tn as H,Ve as I,Zt as J,en as K,Dn as L,J as M,Rn as N,Ut as O,jn as P,Gn as Q,fn as R,Mn as S,Wn as T,Hn as U,Nn as V,Fn as W,Jn as a,Yn as b,Xn as c,Un as d,te as e,qn as f,fe as g,he as h,Je as i,qe as j,me as k,be as l,Ue as m,Yt as n,ee as o,He as p,ct as q,Xe as r,gn as s,vt as t,Jt as u,yn as v,pn as w,Fe as x,dt as y,Ye as z};