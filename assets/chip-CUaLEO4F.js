import{V as t}from"./VChip-BW-Rkz1f.js";import{V as $,a as W,b as w,d as z}from"./VList-BRcx9RTU.js";import{V as L}from"./VListItemAction-PGXEKt_m.js";import{r as V,o as c,f as C,e as o,b as e,a_ as A,a$ as M,t as l,ak as J,a2 as v,m as p,aH as D,L as x,c as h,bo as T,d as s,br as N,aP as j,aN as B,y}from"./index-CUvn4YAR.js";import{V as R}from"./VMenu-CjTov_S2.js";import{_ as F}from"./AppCombobox-5SYAUU4S.js";import{V as S}from"./VAvatar-BeWj6soD.js";import{_ as U}from"./AppCardCode-C54xoV-L.js";import{V as Y,a as d}from"./VRow-C-JD8-Bt.js";import"./VSlideGroup-CVwk3rdy.js";import"./ssrBoot-aAZxpRLo.js";import"./VImg-DixWuppw.js";import"./VDivider-DLfrfrXR.js";import"./VOverlay-BIXCnhE5.js";import"./easing-CjukEv2V.js";import"./delay-dq4ZUyAJ.js";import"./lazy-DC9nxbjh.js";import"./scopeId-BHLx50Fr.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-CLwUXjTL.js";import"./form-CfkoHHsY.js";import"./VSelect-DmKFXJXG.js";import"./VTextField-szUz5uGX.js";/* empty css                   */import"./VCounter-RzM6sknS.js";import"./VField-DTzRLJhk.js";import"./VInput-Cl_xSrPg.js";import"./VCheckboxBtn-DuwumgzT.js";import"./VSelectionControl-CrqGuL7H.js";import"./filter-DcA19s5C.js";import"./vue3-perfect-scrollbar.esm-9V3Lamrz.js";import"./VCard-7xYVh7ib.js";import"./VCardTitle-DBwQgzAF.js";import"./VCardText-CoY-p6gH.js";/* empty css              */const O={__name:"DemoChipExpandable",setup(u){const i=V(!1);return(r,m)=>(c(),C(R,{modelValue:p(i),"onUpdate:modelValue":m[1]||(m[1]=n=>D(i)?i.value=n:null),transition:"scale-transition"},{activator:o(({props:n})=>[e(t,A(M(n)),{default:o(()=>m[2]||(m[2]=[l(" VueJS ")])),_:2},1040)]),default:o(()=>[e($,null,{default:o(()=>[e(W,null,{append:o(()=>[e(L,{class:"ms-3"},{default:o(()=>[e(J,{icon:"",variant:"text",size:"x-small",color:"default",onClick:m[0]||(m[0]=n=>i.value=!1)},{default:o(()=>[e(v,{size:"20",icon:"bx-x"})]),_:1})]),_:1})]),default:o(()=>[e(w,{class:"mb-2"},{default:o(()=>m[3]||(m[3]=[l(" VueJS ")])),_:1}),e(z,null,{default:o(()=>m[4]||(m[4]=[l("The Progressive JavaScript Framework")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},H={__name:"DemoChipInSelects",setup(u){const i=V(["Programming","Playing games","Sleeping"]),r=V(["Streaming","Eating","Programming","Playing games","Sleeping"]);return(m,n)=>{const b=F;return c(),C(b,{modelValue:p(i),"onUpdate:modelValue":n[0]||(n[0]=g=>D(i)?i.value=g:null),chips:"",clearable:"",multiple:"","closable-chips":"","clear-icon":"bx-x-circle",items:p(r),label:"Your favorite hobbies","prepend-icon":"bx-filter-alt"},null,8,["modelValue","items"])}}},q={},G={class:"demo-space-x"};function K(u,i){return c(),h("div",G,[e(t,{size:"x-small"},{default:o(()=>i[0]||(i[0]=[l(" x-small chip ")])),_:1}),e(t,{size:"small"},{default:o(()=>i[1]||(i[1]=[l(" small chip ")])),_:1}),e(t,{size:"default"},{default:o(()=>i[2]||(i[2]=[l(" Default ")])),_:1}),e(t,{size:"large"},{default:o(()=>i[3]||(i[3]=[l(" large chip ")])),_:1}),e(t,{size:"x-large"},{default:o(()=>i[4]||(i[4]=[l(" x-large chip ")])),_:1})])}const Q=x(q,[["render",K]]),X={class:"demo-space-x"},Z={__name:"DemoChipWithAvatar",setup(u){return(i,r)=>(c(),h("div",X,[e(t,null,{default:o(()=>[e(S,{start:"",image:p(T)},null,8,["image"]),r[0]||(r[0]=s("span",null,"John Doe",-1))]),_:1}),e(t,null,{default:o(()=>[e(S,{start:"",image:p(N)},null,8,["image"]),r[1]||(r[1]=s("span",null,"Darcy Nooser",-1))]),_:1}),e(t,{pill:"",label:!1,"prepend-avatar":p(j)},{default:o(()=>r[2]||(r[2]=[s("span",null,"Felicia Risker",-1)])),_:1},8,["prepend-avatar"]),e(t,{pill:"",label:!1},{default:o(()=>[e(S,{start:"",image:p(B)},null,8,["image"]),r[3]||(r[3]=s("span",null,"Minnie Mostly",-1))]),_:1})]))}},ii={},ei={class:"demo-space-x"};function oi(u,i){return c(),h("div",ei,[e(t,null,{default:o(()=>[e(v,{start:"",icon:"bx-user"}),i[0]||(i[0]=l(" Account "))]),_:1}),e(t,{color:"primary"},{default:o(()=>[e(v,{start:"",icon:"bx-star"}),i[1]||(i[1]=l(" Premium "))]),_:1}),e(t,{color:"secondary"},{default:o(()=>[e(v,{start:"",icon:"bx-cake"}),i[2]||(i[2]=l(" 1 Year "))]),_:1}),e(t,{color:"success"},{default:o(()=>[e(v,{start:"",icon:"bx-bell"}),i[3]||(i[3]=l(" Notification "))]),_:1}),e(t,{color:"info"},{default:o(()=>[e(v,{start:"",icon:"bx-message"}),i[4]||(i[4]=l(" Message "))]),_:1}),e(t,{color:"warning"},{default:o(()=>[e(v,{start:"",icon:"bx-error"}),i[5]||(i[5]=l(" Warning "))]),_:1}),e(t,{color:"error"},{default:o(()=>[e(v,{start:"",icon:"bx-error-circle"}),i[6]||(i[6]=l(" Error "))]),_:1})])}const li=x(ii,[["render",oi]]),ti={class:"demo-space-x"},ri={__name:"DemoChipClosable",setup(u){const i=V(!0),r=V(!0),m=V(!0),n=V(!0),b=V(!0),g=V(!0),_=V(!0);return(I,a)=>(c(),h("div",ti,[p(i)?(c(),C(t,{key:0,closable:"","onClick:close":a[0]||(a[0]=f=>i.value=!p(i))},{default:o(()=>a[7]||(a[7]=[l(" Default ")])),_:1})):y("",!0),p(r)?(c(),C(t,{key:1,closable:"",color:"primary","onClick:close":a[1]||(a[1]=f=>r.value=!p(r))},{default:o(()=>a[8]||(a[8]=[l(" Primary ")])),_:1})):y("",!0),p(m)?(c(),C(t,{key:2,closable:"",color:"secondary","onClick:close":a[2]||(a[2]=f=>m.value=!p(m))},{default:o(()=>a[9]||(a[9]=[l(" Secondary ")])),_:1})):y("",!0),p(n)?(c(),C(t,{key:3,closable:"",color:"success","onClick:close":a[3]||(a[3]=f=>n.value=!p(n))},{default:o(()=>a[10]||(a[10]=[l(" Success ")])),_:1})):y("",!0),p(b)?(c(),C(t,{key:4,closable:"",color:"info","onClick:close":a[4]||(a[4]=f=>b.value=!p(b))},{default:o(()=>a[11]||(a[11]=[l(" Info ")])),_:1})):y("",!0),p(g)?(c(),C(t,{key:5,closable:"",color:"warning","onClick:close":a[5]||(a[5]=f=>g.value=!p(g))},{default:o(()=>a[12]||(a[12]=[l(" Warning ")])),_:1})):y("",!0),p(_)?(c(),C(t,{key:6,closable:"",color:"error","onClick:close":a[6]||(a[6]=f=>_.value=!p(_))},{default:o(()=>a[13]||(a[13]=[l(" Error ")])),_:1})):y("",!0)]))}},ai={},si={class:"demo-space-x"};function ni(u,i){return c(),h("div",si,[e(t,{label:!1},{default:o(()=>i[0]||(i[0]=[l(" Default ")])),_:1}),e(t,{label:!1,color:"primary"},{default:o(()=>i[1]||(i[1]=[l(" Primary ")])),_:1}),e(t,{label:!1,color:"secondary"},{default:o(()=>i[2]||(i[2]=[l(" Secondary ")])),_:1}),e(t,{label:!1,color:"success"},{default:o(()=>i[3]||(i[3]=[l(" Success ")])),_:1}),e(t,{label:!1,color:"info"},{default:o(()=>i[4]||(i[4]=[l(" Info ")])),_:1}),e(t,{label:!1,color:"warning"},{default:o(()=>i[5]||(i[5]=[l(" Warning ")])),_:1}),e(t,{label:!1,color:"error"},{default:o(()=>i[6]||(i[6]=[l(" Error ")])),_:1})])}const pi=x(ai,[["render",ni]]),ci={},mi={class:"demo-space-x"};function ui(u,i){return c(),h("div",mi,[e(t,{variant:"outlined"},{default:o(()=>i[0]||(i[0]=[l(" Default ")])),_:1}),e(t,{color:"primary",variant:"outlined"},{default:o(()=>i[1]||(i[1]=[l(" Primary ")])),_:1}),e(t,{color:"secondary",variant:"outlined"},{default:o(()=>i[2]||(i[2]=[l(" Secondary ")])),_:1}),e(t,{color:"success",variant:"outlined"},{default:o(()=>i[3]||(i[3]=[l(" Success ")])),_:1}),e(t,{color:"info",variant:"outlined"},{default:o(()=>i[4]||(i[4]=[l(" Info ")])),_:1}),e(t,{color:"warning",variant:"outlined"},{default:o(()=>i[5]||(i[5]=[l(" Warning ")])),_:1}),e(t,{color:"error",variant:"outlined"},{default:o(()=>i[6]||(i[6]=[l(" Error ")])),_:1})])}const di=x(ci,[["render",ui]]),Vi={},Ci={class:"demo-space-x"};function fi(u,i){return c(),h("div",Ci,[e(t,{variant:"elevated"},{default:o(()=>i[0]||(i[0]=[l(" Default ")])),_:1}),e(t,{color:"primary",variant:"elevated"},{default:o(()=>i[1]||(i[1]=[l(" Primary ")])),_:1}),e(t,{color:"secondary",variant:"elevated"},{default:o(()=>i[2]||(i[2]=[l(" Secondary ")])),_:1}),e(t,{color:"success",variant:"elevated"},{default:o(()=>i[3]||(i[3]=[l(" Success ")])),_:1}),e(t,{color:"info",variant:"elevated"},{default:o(()=>i[4]||(i[4]=[l(" Info ")])),_:1}),e(t,{color:"warning",variant:"elevated"},{default:o(()=>i[5]||(i[5]=[l(" Warning ")])),_:1}),e(t,{color:"error",variant:"elevated"},{default:o(()=>i[6]||(i[6]=[l(" Error ")])),_:1})])}const vi=x(Vi,[["render",fi]]),hi={},bi={class:"demo-space-x"};function gi(u,i){return c(),h("div",bi,[e(t,null,{default:o(()=>i[0]||(i[0]=[l(" Default ")])),_:1}),e(t,{color:"primary"},{default:o(()=>i[1]||(i[1]=[l(" Primary ")])),_:1}),e(t,{color:"secondary"},{default:o(()=>i[2]||(i[2]=[l(" Secondary ")])),_:1}),e(t,{color:"success"},{default:o(()=>i[3]||(i[3]=[l(" Success ")])),_:1}),e(t,{color:"info"},{default:o(()=>i[4]||(i[4]=[l(" Info ")])),_:1}),e(t,{color:"warning"},{default:o(()=>i[5]||(i[5]=[l(" Warning ")])),_:1}),e(t,{color:"error"},{default:o(()=>i[6]||(i[6]=[l(" Error ")])),_:1})])}const yi=x(hi,[["render",gi]]),xi={ts:`<script lang="ts" setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<script setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`},_i={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`},Si={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`},Ii={ts:`<script lang="ts" setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="bx-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`,js:`<script setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="bx-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`},Di={ts:`<script lang="ts" setup>
const chips = ref(['Programming', 'Playing games', 'Sleeping'])
const items = ref(['Streaming', 'Eating', 'Programming', 'Playing games', 'Sleeping'])
<\/script>

<template>
  <AppCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="bx-x-circle"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="bx-filter-alt"
  />
</template>
`,js:`<script setup>
const chips = ref([
  'Programming',
  'Playing games',
  'Sleeping',
])

const items = ref([
  'Streaming',
  'Eating',
  'Programming',
  'Playing games',
  'Sleeping',
])
<\/script>

<template>
  <AppCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="bx-x-circle"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="bx-filter-alt"
  />
</template>
`},ki={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`},Pi={ts:`<template>
  <div class="demo-space-x">
    <VChip :label="false">
      Default
    </VChip>

    <VChip
      :label="false"
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      :label="false"
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      :label="false"
      color="success"
    >
      Success
    </VChip>

    <VChip
      :label="false"
      color="info"
    >
      Info
    </VChip>

    <VChip
      :label="false"
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      :label="false"
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip :label="false">
      Default
    </VChip>

    <VChip
      :label="false"
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      :label="false"
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      :label="false"
      color="success"
    >
      Success
    </VChip>

    <VChip
      :label="false"
      color="info"
    >
      Info
    </VChip>

    <VChip
      :label="false"
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      :label="false"
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`},Ei={ts:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip size="default">
      Default
    </VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip size="default">
      Default
    </VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`},$i={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip
      pill
      :label="false"
      :prepend-avatar="avatar3"
    >
      <span>Felicia Risker</span>
    </VChip>

    <VChip
      pill
      :label="false"
    >
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip
      pill
      :label="false"
      :prepend-avatar="avatar3"
    >
      <span>Felicia Risker</span>
    </VChip>

    <VChip
      pill
      :label="false"
    >
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`},Wi={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        icon="bx-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        icon="bx-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        icon="bx-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        icon="bx-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        icon="bx-message"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        icon="bx-error"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        icon="bx-error-circle"
      />
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        icon="bx-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        icon="bx-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        icon="bx-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        icon="bx-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        icon="bx-message"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        icon="bx-error"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        icon="bx-error-circle"
      />
      Error
    </VChip>
  </div>
</template>
`},de={__name:"chip",setup(u){return(i,r)=>{const m=yi,n=U,b=vi,g=di,_=pi,I=ri,a=li,f=Z,k=Q,P=H,E=O;return c(),C(Y,{class:"match-height"},{default:o(()=>[e(d,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Color",code:_i},{default:o(()=>[r[0]||(r[0]=s("p",null,[l("Use "),s("code",null,"color"),l(" prop to change the background color of chips.")],-1)),e(m)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Elevated",code:Si},{default:o(()=>[r[1]||(r[1]=s("p",null,[l("Use "),s("code",null,"elevated"),l(" variant option to create filled chips.")],-1)),e(b)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Outlined",code:ki},{default:o(()=>[r[2]||(r[2]=s("p",null,[l("Use "),s("code",null,"outlined"),l(" variant option to create outline border chips.")],-1)),e(g)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Rounded",code:Pi},{default:o(()=>[r[3]||(r[3]=s("p",null,[l("To use the rounded chip, set "),s("code",null,"label"),l(" props value to "),s("strong",null,"false"),l(".")],-1)),e(_)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Closable",code:xi},{default:o(()=>[r[4]||(r[4]=s("p",null,[l("Closable chips can be controlled with a "),s("code",null,"v-model"),l(".")],-1)),e(I)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"With Icon",code:Wi},{default:o(()=>[r[5]||(r[5]=s("p",null,"Chips can use text or any icon available in the Material Icons font library.",-1)),e(a)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"With Avatar",code:$i},{default:o(()=>[r[6]||(r[6]=s("p",null,[l("Use "),s("code",null,"pill"),l(" prop to remove the "),s("code",null,"v-avatar"),l(" padding.")],-1)),e(f)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Sizes",code:Ei},{default:o(()=>[r[7]||(r[7]=s("p",null,[l("The "),s("code",null,"v-chip"),l(" component can have various sizes from "),s("code",null,"x-small"),l(" to "),s("code",null,"x-large"),l(".")],-1)),e(k)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"In Selects",code:Di},{default:o(()=>[r[8]||(r[8]=s("p",null,[l("Selects can use "),s("code",null,"chips"),l(" to display the selected data. Try adding your own tags below.")],-1)),e(P)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Expandable",code:Ii},{default:o(()=>[r[9]||(r[9]=s("p",null,[l("Chips can be combined with "),s("code",null,"v-menu"),l(" to enable a specific set of actions for a chip.")],-1)),e(E)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{de as default};
