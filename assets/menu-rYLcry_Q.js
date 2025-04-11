import{V as L}from"./VTooltip-h935F-67.js";import{o as v,f as _,e,b as t,ak as l,a_ as c,a$ as d,q as M,t as i,d as p,r as w,a as k,m as b,bo as y,aH as C,c as O,F as D,h as P,v as h}from"./index-CUvn4YAR.js";import{V as m,a as S}from"./VList-BRcx9RTU.js";import{V as u}from"./VMenu-CjTov_S2.js";import{V as I,c as A}from"./VCard-7xYVh7ib.js";import{V as $}from"./VDivider-DLfrfrXR.js";import{V as j}from"./VCardText-CoY-p6gH.js";import{_ as F}from"./AppCardCode-C54xoV-L.js";import{V as E,a as f}from"./VRow-C-JD8-Bt.js";import"./VOverlay-BIXCnhE5.js";import"./easing-CjukEv2V.js";import"./delay-dq4ZUyAJ.js";import"./lazy-DC9nxbjh.js";import"./scopeId-BHLx50Fr.js";import"./VImg-DixWuppw.js";import"./forwardRefs-C-GTDzx5.js";import"./ssrBoot-aAZxpRLo.js";import"./VAvatar-BeWj6soD.js";import"./dialog-transition-CLwUXjTL.js";import"./VCardTitle-DBwQgzAF.js";import"./vue3-perfect-scrollbar.esm-9V3Lamrz.js";/* empty css              */const H={__name:"DemoMenuActivatorAndTooltip",setup(V){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(s,o)=>(v(),_(u,{location:"top"},{activator:e(({props:n})=>[t(L,{location:"top"},{activator:e(({props:r})=>[t(l,c(d(M(n,r))),{default:e(()=>o[0]||(o[0]=[i(" Dropdown w/ Tooltip ")])),_:2},1040)]),default:e(()=>[o[1]||(o[1]=p("span",null,"I am a Tooltip",-1))]),_:2},1024)]),default:e(()=>[t(m,{items:a})]),_:1}))}},R={__name:"DemoMenuPopover",setup(V){const a=w(!1);return(s,o)=>{const n=k("IconBtn");return v(),_(u,{modelValue:b(a),"onUpdate:modelValue":o[0]||(o[0]=r=>C(a)?a.value=r:null),location:"top"},{activator:e(({props:r})=>[t(l,c(d(r)),{default:e(()=>o[1]||(o[1]=[i(" Menu as Popover ")])),_:2},1040)]),default:e(()=>[t(I,{"max-width":"300"},{default:e(()=>[t(m,null,{default:e(()=>[t(S,{"prepend-avatar":b(y),title:"John Leider",subtitle:"Founder of Vuetify",class:"mx-0"},null,8,["prepend-avatar"])]),_:1}),t($),t(j,null,{default:e(()=>o[2]||(o[2]=[i(" Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake. Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee. ")])),_:1}),t(A,null,{default:e(()=>[t(n,{icon:"bx-heart"}),t(n,{icon:"bx-bookmark"}),t(n,{icon:"bx-dislike"})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},G={__name:"DemoMenuOpenOnHover",setup(V){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(s,o)=>(v(),_(u,{"open-on-hover":""},{activator:e(({props:n})=>[t(l,c(d(n)),{default:e(()=>o[0]||(o[0]=[i(" On hover ")])),_:2},1040)]),default:e(()=>[t(m,{items:a})]),_:1}))}},J={class:"demo-space-x"},N={__name:"DemoMenuLocation",setup(V){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(s,o)=>(v(),O("div",J,[t(u,{location:"top"},{activator:e(({props:n})=>[t(l,c(d(n)),{default:e(()=>o[0]||(o[0]=[i(" Top ")])),_:2},1040)]),default:e(()=>[t(m,{items:a})]),_:1}),t(u,{location:"bottom"},{activator:e(({props:n})=>[t(l,c(d(n)),{default:e(()=>o[1]||(o[1]=[i(" Bottom ")])),_:2},1040)]),default:e(()=>[t(m,{items:a})]),_:1}),t(u,{location:"start"},{activator:e(({props:n})=>[t(l,c(d(n)),{default:e(()=>o[2]||(o[2]=[i(" Start ")])),_:2},1040)]),default:e(()=>[t(m,{items:a})]),_:1}),t(u,{location:"end"},{activator:e(({props:n})=>[t(l,c(d(n)),{default:e(()=>o[3]||(o[3]=[i(" End ")])),_:2},1040)]),default:e(()=>[t(m,{items:a})]),_:1})]))}},X={class:"demo-space-x"},Y={__name:"DemoMenuCustomTransitions",setup(V){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(s,o)=>(v(),O("div",X,[t(u,{transition:"scale-transition"},{activator:e(({props:n})=>[t(l,c(d(n)),{default:e(()=>o[0]||(o[0]=[i(" Scale Transition ")])),_:2},1040)]),default:e(()=>[t(m,{items:a})]),_:1}),t(u,{transition:"slide-x-transition"},{activator:e(({props:n})=>[t(l,c(d(n)),{default:e(()=>o[1]||(o[1]=[i(" Slide X Transition ")])),_:2},1040)]),default:e(()=>[t(m,{items:a})]),_:1}),t(u,{transition:"slide-y-transition"},{activator:e(({props:n})=>[t(l,c(d(n)),{default:e(()=>o[2]||(o[2]=[i(" Slide Y Transition ")])),_:2},1040)]),default:e(()=>[t(m,{items:a})]),_:1})]))}},U={class:"demo-space-x"},q={__name:"DemoMenuBasic",setup(V){const a=["primary","secondary","success","info","warning","error"],s=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(o,n)=>(v(),O("div",U,[(v(),O(D,null,P(a,r=>t(u,{key:r},{activator:e(({props:B})=>[t(l,M({color:r,ref_for:!0},B),{default:e(()=>[i(h(r),1)]),_:2},1040,["color"])]),default:e(()=>[t(m,{items:s})]),_:2},1024)),64))]))}},z={ts:`<script lang="ts" setup>
import { mergeProps } from 'vue'

const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
import { mergeProps } from 'vue'

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},W={ts:`<script lang="ts" setup>
const menusVariant = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const menusVariant = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},K={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},Q={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},Z={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},tt={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard max-width="300">
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
          class="mx-0"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </VCardText>

      <VCardActions>
        <IconBtn icon="bx-heart" />
        <IconBtn icon="bx-bookmark" />
        <IconBtn icon="bx-dislike" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard max-width="300">
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
          class="mx-0"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </VCardText>

      <VCardActions>
        <IconBtn icon="bx-heart" />
        <IconBtn icon="bx-bookmark" />
        <IconBtn icon="bx-dislike" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`},gt={__name:"menu",setup(V){return(a,s)=>{const o=q,n=F,r=Y,B=N,x=G,g=R,T=H;return v(),_(E,{class:"match-height"},{default:e(()=>[t(f,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Basic",code:W},{default:e(()=>[s[0]||(s[0]=p("p",null," Remember to put the element that activates the menu in the activator slot. ",-1)),t(o)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Custom transitions",code:K},{default:e(()=>[s[1]||(s[1]=p("p",null,[i("Vuetify comes with 3 standard transitions, "),p("code",null,"scale"),i(", "),p("code",null,"slide-x"),i(" and "),p("code",null,"slide-y"),i(". Use "),p("code",null,"transition"),i(" prop to add transition to a menu.")],-1)),t(r)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Location",code:Q},{default:e(()=>[s[2]||(s[2]=p("p",null,[i("Menu can be offset relative to the activator by using the "),p("code",null,"location"),i(" prop.")],-1)),t(B)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Open on hover",code:Z},{default:e(()=>[s[3]||(s[3]=p("p",null,[i("Menus can be accessed using hover instead of clicking with the "),p("code",null,"open-on-hover"),i(" prop.")],-1)),t(x)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Popover",code:tt},{default:e(()=>[s[4]||(s[4]=p("p",null,"A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents.",-1)),t(g)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Activator and tooltip",code:z},{default:e(()=>[s[5]||(s[5]=p("p",null,[i("With the new "),p("code",null,"v-slot"),i(" syntax, nested activators such as those seen with a "),p("code",null,"v-menu"),i(" and "),p("code",null,"v-tooltip"),i(" attached to the same activator button, need a particular setup in order to function correctly")],-1)),t(T)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{gt as default};
