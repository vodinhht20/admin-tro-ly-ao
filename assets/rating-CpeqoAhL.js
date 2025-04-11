import{r as f,o as m,f as _,e as o,b as e,a2 as w,q as S,m as c,aH as u,L as v,c as V,d as a,v as U,F as x,h as j,t as i}from"./index-CUvn4YAR.js";import{V as r}from"./VRating-DE2VYYDw.js";import{V as k}from"./VSlider-H2DnUilw.js";import{_ as F}from"./AppCardCode-C54xoV-L.js";import{V as I,a as p}from"./VRow-C-JD8-Bt.js";import"./VSliderTrack-Dw_EGMFy.js";import"./VInput-Cl_xSrPg.js";import"./form-CfkoHHsY.js";import"./VImg-DixWuppw.js";import"./vue3-perfect-scrollbar.esm-9V3Lamrz.js";import"./VCard-7xYVh7ib.js";import"./VCardTitle-DBwQgzAF.js";import"./VAvatar-BeWj6soD.js";import"./VCardText-CoY-p6gH.js";import"./VDivider-DLfrfrXR.js";/* empty css              */const B={__name:"DemoRatingItemSlot",setup(d){const n=f(4.5);return(l,s)=>(m(),_(r,{modelValue:c(n),"onUpdate:modelValue":s[0]||(s[0]=t=>u(n)?n.value=t:null)},{item:o(t=>[e(w,S(t,{size:25,color:t.isFilled?"success":"secondary",class:"me-3",icon:t.isFilled?"bx-smile":"bx-sad"}),null,16,["color","icon"])]),_:1},8,["modelValue"]))}},L={__name:"DemoRatingIncremented",setup(d){const n=f(4.5);return(l,s)=>(m(),_(r,{modelValue:c(n),"onUpdate:modelValue":s[0]||(s[0]=t=>u(n)?n.value=t:null),"half-increments":"",hover:""},null,8,["modelValue"]))}},T={};function H(d,n){return m(),_(r,{hover:""})}const M=v(T,[["render",H]]),N={};function P(d,n){return m(),_(r,{readonly:"","model-value":4})}const q=v(N,[["render",P]]),A={};function E(d,n){return m(),_(r,{clearable:""})}const G=v(A,[["render",E]]),J={class:"font-weight-medium mb-0"},K={__name:"DemoRatingLength",setup(d){const n=f(5),l=f(2);return(s,t)=>(m(),V(x,null,[t[2]||(t[2]=a("div",{class:"text-caption"}," Custom length ",-1)),e(k,{modelValue:c(n),"onUpdate:modelValue":t[0]||(t[0]=g=>u(n)?n.value=g:null),min:1,max:7},null,8,["modelValue"]),e(r,{modelValue:c(l),"onUpdate:modelValue":t[1]||(t[1]=g=>u(l)?l.value=g:null),length:c(n)},null,8,["modelValue","length"]),a("p",J," Model: "+U(c(l)),1)],64))}},O={class:"d-flex flex-column"},Q={__name:"DemoRatingSize",setup(d){const n=f(4);return(l,s)=>(m(),V("div",O,[e(r,{modelValue:c(n),"onUpdate:modelValue":s[0]||(s[0]=t=>u(n)?n.value=t:null),size:"small"},null,8,["modelValue"]),e(r,{modelValue:c(n),"onUpdate:modelValue":s[1]||(s[1]=t=>u(n)?n.value=t:null)},null,8,["modelValue"]),e(r,{modelValue:c(n),"onUpdate:modelValue":s[2]||(s[2]=t=>u(n)?n.value=t:null),size:"large"},null,8,["modelValue"]),e(r,{modelValue:c(n),"onUpdate:modelValue":s[3]||(s[3]=t=>u(n)?n.value=t:null),size:"x-large"},null,8,["modelValue"])]))}},W={class:"d-flex flex-column"},X={__name:"DemoRatingColors",setup(d){const n=f(4),l=["primary","secondary","success","info","error"];return(s,t)=>(m(),V("div",W,[(m(),V(x,null,j(l,g=>e(r,{key:g,modelValue:c(n),"onUpdate:modelValue":t[0]||(t[0]=R=>u(n)?n.value=R:null),color:g},null,8,["modelValue","color"])),64))]))}},Y={};function Z(d,n){return m(),_(r,{density:"compact"})}const ee=v(Y,[["render",Z]]),te={};function ne(d,n){return m(),_(r)}const le=v(te,[["render",ne]]),oe={ts:`<template>
  <VRating />
</template>
`,js:`<template>
  <VRating />
</template>
`},ae={ts:`<template>
  <VRating clearable />
</template>
`,js:`<template>
  <VRating clearable />
</template>
`},se={ts:`<script lang="ts" setup>
const rating = ref(4)
const ratingColors = ['primary', 'secondary', 'success', 'info', 'error']
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)

const ratingColors = [
  'primary',
  'secondary',
  'success',
  'info',
  'error',
]
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`},ie={ts:`<template>
  <VRating density="compact" />
</template>
`,js:`<template>
  <VRating density="compact" />
</template>
`},re={ts:`<template>
  <VRating hover />
</template>
`,js:`<template>
  <VRating hover />
</template>
`},me={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`},ce={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'bx-smile' : 'bx-sad'"
      />
    </template>
  </VRating>
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'bx-smile' : 'bx-sad'"
      />
    </template>
  </VRating>
</template>
`},de={ts:`<script lang="ts" setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`,js:`<script setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`},pe={ts:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`,js:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`},ue={ts:`<script lang="ts" setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`},Ue={__name:"rating",setup(d){return(n,l)=>{const s=le,t=F,g=ee,R=X,h=Q,y=K,b=G,z=q,C=M,D=L,$=B;return m(),_(I,{class:"match-height"},{default:o(()=>[e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Basic",code:oe},{default:o(()=>[l[0]||(l[0]=a("p",null,[i("The "),a("code",null,"v-rating"),i(" component provides a simple interface for gathering user feedback.")],-1)),e(s)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Density",code:ie},{default:o(()=>[l[1]||(l[1]=a("p",null,[i("Control the space occupied by "),a("code",null,"v-rating"),i(" items using the "),a("code",null,"density"),i(" prop.")],-1)),e(g)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Colors",code:se},{default:o(()=>[l[2]||(l[2]=a("p",null,[i("The "),a("code",null,"v-rating"),i(" component can be colored as you want, you can set both selected and not selected colors.")],-1)),e(R)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Size",code:ue},{default:o(()=>[l[3]||(l[3]=a("p",null,[i("Utilize the same sizing classes available in "),a("code",null,"v-icon"),i(" or provide your own with the "),a("code",null,"size"),i(" prop.")],-1)),e(h)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Length",code:de},{default:o(()=>[l[4]||(l[4]=a("p",null,[i("Change the number of items by modifying the the "),a("code",null,"length"),i(" prop.")],-1)),e(y)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Clearable",code:ae},{default:o(()=>[l[5]||(l[5]=a("p",null,[i("Use "),a("code",null,"clearable"),i(" prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.")],-1)),e(b)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Readonly",code:pe},{default:o(()=>[l[6]||(l[6]=a("p",null,[i("For ratings that are not meant to be changed you can use "),a("code",null,"readonly"),i(" prop.")],-1)),e(z)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Hover",code:re},{default:o(()=>[l[7]||(l[7]=a("p",null,"Provides visual feedback when hovering over icons",-1)),e(C)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Incremented",code:me},{default:o(()=>[l[8]||(l[8]=a("p",null,[i("The "),a("code",null,"half-increments"),i(" prop increases the granularity of the ratings, allow for .5 values as well.")],-1)),e(D)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Item slot",code:ce},{default:o(()=>[l[9]||(l[9]=a("p",null,"Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating.",-1)),e($)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ue as default};
