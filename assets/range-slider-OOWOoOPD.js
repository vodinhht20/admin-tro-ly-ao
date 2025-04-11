import{m as X,u as ee,a as le,V as te,b as Y,g as q}from"./VSliderTrack-Dw_EGMFy.js";import{m as ae,V as E}from"./VInput-Cl_xSrPg.js";import{m as se,u as ue,V as oe}from"./form-CfkoHHsY.js";import{a4 as ne,be as re,r as _,au as ie,at as de,Z as H,ab as ce,b as a,F as me,q as pe,o as S,f as h,m as x,aH as $,e as c,a2 as ve,d,t as v}from"./index-CUvn4YAR.js";import{_ as be}from"./AppCardCode-C54xoV-L.js";import{V as Ve,a as R}from"./VRow-C-JD8-Bt.js";import"./VImg-DixWuppw.js";import"./vue3-perfect-scrollbar.esm-9V3Lamrz.js";import"./VCard-7xYVh7ib.js";import"./VCardTitle-DBwQgzAF.js";import"./VAvatar-BeWj6soD.js";import"./VCardText-CoY-p6gH.js";import"./VDivider-DLfrfrXR.js";/* empty css              */const fe=ne({...se(),...ae(),...X(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),k=re()({name:"VRangeSlider",props:fe(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,u){let{slots:l,emit:o}=u;const t=_(),i=_(),g=_(),{rtlClasses:B}=ie();function M(m){if(!t.value||!i.value)return;const p=q(m,t.value.$el,e.direction),r=q(m,i.value.$el,e.direction),n=Math.abs(p),b=Math.abs(r);return n<b||n===b&&p<0?t.value.$el:i.value.$el}const P=ee(e),s=de(e,"modelValue",void 0,m=>m!=null&&m.length?m.map(p=>P.roundValue(p)):[0,0]),{activeThumbRef:V,hasLabels:Z,max:I,min:j,mousePressed:G,onSliderMousedown:J,onSliderTouchstart:K,position:z,trackContainerRef:Q,readonly:L}=le({props:e,steps:P,onSliderStart:()=>{o("start",s.value)},onSliderEnd:m=>{var n;let{value:p}=m;const r=V.value===((n=t.value)==null?void 0:n.$el)?[p,s.value[1]]:[s.value[0],p];!e.strict&&r[0]<r[1]&&(s.value=r),o("end",s.value)},onSliderMove:m=>{var b,y,w,f;let{value:p}=m;const[r,n]=s.value;!e.strict&&r===n&&r!==j.value&&(V.value=p>r?(b=i.value)==null?void 0:b.$el:(y=t.value)==null?void 0:y.$el,(w=V.value)==null||w.focus()),V.value===((f=t.value)==null?void 0:f.$el)?s.value=[Math.min(p,n),n]:s.value=[r,Math.max(r,p)]},getActiveThumb:M}),{isFocused:U,focus:A,blur:N}=ue(e),O=H(()=>z(s.value[0])),W=H(()=>z(s.value[1]));return ce(()=>{const m=E.filterProps(e),p=!!(e.label||l.label||l.prepend);return a(E,pe({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!l["tick-label"]||Z.value,"v-slider--focused":U.value,"v-slider--pressed":G.value,"v-slider--disabled":e.disabled},B.value,e.class],style:e.style,ref:g},m,{focused:U.value}),{...l,prepend:p?r=>{var n,b;return a(me,null,[((n=l.label)==null?void 0:n.call(l,r))??(e.label?a(oe,{class:"v-slider__label",text:e.label},null):void 0),(b=l.prepend)==null?void 0:b.call(l,r)])}:void 0,default:r=>{var y,w;let{id:n,messagesId:b}=r;return a("div",{class:"v-slider__container",onMousedown:L.value?void 0:J,onTouchstartPassive:L.value?void 0:K},[a("input",{id:`${n.value}_start`,name:e.name||n.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:s.value[0]},null),a("input",{id:`${n.value}_stop`,name:e.name||n.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:s.value[1]},null),a(te,{ref:Q,start:O.value,stop:W.value},{"tick-label":l["tick-label"]}),a(Y,{ref:t,"aria-describedby":b.value,focused:U&&V.value===((y=t.value)==null?void 0:y.$el),modelValue:s.value[0],"onUpdate:modelValue":f=>s.value=[f,s.value[1]],onFocus:f=>{var D,T,F,C;A(),V.value=(D=t.value)==null?void 0:D.$el,s.value[0]===s.value[1]&&s.value[1]===j.value&&f.relatedTarget!==((T=i.value)==null?void 0:T.$el)&&((F=t.value)==null||F.$el.blur(),(C=i.value)==null||C.$el.focus())},onBlur:()=>{N(),V.value=void 0},min:j.value,max:s.value[1],position:O.value,ripple:e.ripple},{"thumb-label":l["thumb-label"]}),a(Y,{ref:i,"aria-describedby":b.value,focused:U&&V.value===((w=i.value)==null?void 0:w.$el),modelValue:s.value[1],"onUpdate:modelValue":f=>s.value=[s.value[0],f],onFocus:f=>{var D,T,F,C;A(),V.value=(D=i.value)==null?void 0:D.$el,s.value[0]===s.value[1]&&s.value[0]===I.value&&f.relatedTarget!==((T=t.value)==null?void 0:T.$el)&&((F=i.value)==null||F.$el.blur(),(C=t.value)==null||C.$el.focus())},onBlur:()=>{N(),V.value=void 0},min:s.value[0],max:I.value,position:W.value,ripple:e.ripple},{"thumb-label":l["thumb-label"]})])}})}),{}}}),_e={__name:"DemoRangeSliderVertical",setup(e){const u=_([20,40]);return(l,o)=>(S(),h(k,{modelValue:x(u),"onUpdate:modelValue":o[0]||(o[0]=t=>$(u)?u.value=t:null),direction:"vertical"},null,8,["modelValue"]))}},ge={__name:"DemoRangeSliderThumbLabel",setup(e){const u=["Winter","Spring","Summer","Fall"],l=["bx-cloud-snow","bx-leaf","bx-bxs-hot","bx-droplet"],o=_([1,2]);return(t,i)=>(S(),h(k,{modelValue:x(o),"onUpdate:modelValue":i[0]||(i[0]=g=>$(o)?o.value=g:null),tick:u,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":c(({modelValue:g})=>[a(ve,{icon:l[g]},null,8,["icon"])]),_:1},8,["modelValue"]))}},Se={__name:"DemoRangeSliderStep",setup(e){const u=_([20,40]);return(l,o)=>(S(),h(k,{modelValue:x(u),"onUpdate:modelValue":o[0]||(o[0]=t=>$(u)?u.value=t:null),step:"10"},null,8,["modelValue"]))}},he={__name:"DemoRangeSliderColor",setup(e){const u=_([10,60]);return(l,o)=>(S(),h(k,{modelValue:x(u),"onUpdate:modelValue":o[0]||(o[0]=t=>$(u)?u.value=t:null),color:"success"},null,8,["modelValue"]))}},Re={__name:"DemoRangeSliderDisabled",setup(e){const u=_([30,60]);return(l,o)=>(S(),h(k,{modelValue:x(u),"onUpdate:modelValue":o[0]||(o[0]=t=>$(u)?u.value=t:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}},xe={__name:"DemoRangeSliderBasic",setup(e){const u=_([10,60]);return(l,o)=>(S(),h(k,{modelValue:x(u),"onUpdate:modelValue":o[0]||(o[0]=t=>$(u)?u.value=t:null)},null,8,["modelValue"]))}},$e={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},ke={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`},ye={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},we={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},De={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['bx-cloud-snow', 'bx-leaf', 'bx-bxs-hot', 'bx-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'bx-cloud-snow',
  'bx-leaf',
  'bx-bxs-hot',
  'bx-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},Te={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},Ye={__name:"range-slider",setup(e){return(u,l)=>{const o=xe,t=be,i=Re,g=he,B=Se,M=ge,P=_e;return S(),h(Ve,null,{default:c(()=>[a(R,{cols:"12",md:"6"},{default:c(()=>[a(t,{title:"Basic",code:$e},{default:c(()=>[l[0]||(l[0]=d("p",null,[v("The "),d("code",null,"v-slider"),v(" component is a better visualization of the number input.")],-1)),a(o)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:c(()=>[a(t,{title:"Disabled",code:ye},{default:c(()=>[l[1]||(l[1]=d("p",null,[v("You cannot interact with "),d("code",null,"disabled"),v(" sliders.")],-1)),a(i)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:c(()=>[a(t,{title:"Color",code:ke},{default:c(()=>[l[2]||(l[2]=d("p",null,[v("Use "),d("code",null,"color"),v(" prop to the sets the slider color. "),d("code",null,"track-color"),v(" prop to sets the color of slider's unfilled track.")],-1)),a(g)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:c(()=>[a(t,{title:"Step",code:we},{default:c(()=>[l[3]||(l[3]=d("p",null,[d("code",null,"v-range-slider"),v(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1)),a(B)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:c(()=>[a(t,{title:"Thumb label",code:De},{default:c(()=>[l[4]||(l[4]=d("p",null,[v(" Using the "),d("code",null,"tick-labels"),v(" prop along with the "),d("code",null,"thumb-label"),v(" slot, you can create a very customized solution. ")],-1)),a(M)]),_:1},8,["code"])]),_:1}),a(R,{cols:"12",md:"6"},{default:c(()=>[a(t,{title:"Vertical",code:Te},{default:c(()=>[l[5]||(l[5]=d("p",null,[v("You can use the "),d("code",null,"vertical"),v(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1)),a(P)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ye as default};
