import{o as f,c as u,b as t,e as a,m as r,bo as l,ak as B,t as s,f as w,F as k,h as H,v as O,r as _,O as I,a2 as p,d as n,L as $}from"./index-CUvn4YAR.js";import{V as i}from"./VAvatar-BeWj6soD.js";import{V as m}from"./VImg-DixWuppw.js";import{V as o}from"./VBadge-nJlMgCoc.js";import{a as S,V as j}from"./VTabs-D3gK5Doo.js";import{_ as W}from"./AppCardCode-C54xoV-L.js";import{V as E,a as v}from"./VRow-C-JD8-Bt.js";import"./forwardRefs-C-GTDzx5.js";import"./easing-CjukEv2V.js";import"./VWindowItem-Cz5y905f.js";import"./lazy-DC9nxbjh.js";import"./ssrBoot-aAZxpRLo.js";import"./VSlideGroup-CVwk3rdy.js";import"./scopeId-BHLx50Fr.js";import"./vue3-perfect-scrollbar.esm-9V3Lamrz.js";import"./VCard-7xYVh7ib.js";import"./VCardTitle-DBwQgzAF.js";import"./VCardText-CoY-p6gH.js";import"./VDivider-DLfrfrXR.js";/* empty css              */const C={class:"demo-space-x"},N={__name:"DemoBadgeTonal",setup(V){return(d,e)=>(f(),u("div",C,[t(o,{content:"5",class:"v-badge--tonal"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:r(l)},null,8,["src"])]),_:1})]),_:1}),t(o,{content:"1",class:"v-badge--tonal",color:"error"},{default:a(()=>[t(B,{color:"error"},{default:a(()=>e[0]||(e[0]=[s(" Default ")])),_:1})]),_:1}),t(o,{icon:"bx-lock-open",color:"info",class:"v-badge--tonal"},{default:a(()=>[t(i,null,{default:a(()=>[t(m,{src:r(l)},null,8,["src"])]),_:1})]),_:1})]))}},M={class:"demo-space-x"},Y={__name:"DemoBadgeMaximumValue",setup(V){return(d,e)=>(f(),u("div",M,[t(o,{content:"99",max:"99","offset-x":"5","offset-y":"-1"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:r(l)},null,8,["src"])]),_:1})]),_:1}),t(o,{content:"100",max:"99","offset-x":"5","offset-y":"-1"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:r(l)},null,8,["src"])]),_:1})]),_:1}),t(o,{content:"1000",max:"999","offset-x":"5","offset-y":"-1"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:r(l)},null,8,["src"])]),_:1})]),_:1})]))}},P={__name:"DemoBadgeTabs",setup(V){const d=[{badge:"3",content:"Item One"},{badge:"1",content:"Item Two"},{badge:"2",content:"Item Three"}];return(e,g)=>(f(),w(j,{grow:""},{default:a(()=>[(f(),u(k,null,H(d,c=>t(S,{key:c.content,value:c.content},{default:a(()=>[t(o,{content:c.badge,"offset-x":-18,"offset-y":6},{default:a(()=>[s(O(c.content),1)]),_:2},1032,["content"])]),_:2},1032,["value"])),64))]),_:1}))}},U={class:"demo-space-x"},F={__name:"DemoBadgeShowOnHover",setup(V){const d=_(),e=_(),g=_(),c=I(e),b=I(d),x=I(g);return(A,z)=>(f(),u("div",U,[t(o,{content:"3",transition:"slide-x-transition","model-value":r(c)},{default:a(()=>[t(p,{ref_key:"tRefTwitterBadge",ref:e,size:"25",icon:"bx-bxl-meta"},null,512)]),_:1},8,["model-value"]),t(o,{content:"5",transition:"scale-transition","model-value":r(b)},{default:a(()=>[t(p,{ref_key:"tRefInstagramBadge",ref:d,size:"25",icon:"bx-bxl-instagram"},null,512)]),_:1},8,["model-value"]),t(o,{content:"1",transition:"slide-x-transition","model-value":r(x)},{default:a(()=>[t(p,{ref_key:"tRefWhatsappBadge",ref:g,size:"25",icon:"bx-bxl-whatsapp"},null,512)]),_:1},8,["model-value"])]))}},L={class:"d-flex align-center"},q={class:"demo-space-x"},G={__name:"DemoBadgeDynamicNotifications",setup(V){const d=_();return(e,g)=>(f(),u("div",L,[t(o,{content:r(d),"model-value":!!r(d),color:"success",class:"me-5"},{default:a(()=>[t(p,{size:"40",icon:"bx-bxl-vuejs"})]),_:1},8,["content","model-value"]),n("div",q,[t(B,{onClick:g[0]||(g[0]=c=>d.value=(r(d)||0)+1)},{default:a(()=>g[2]||(g[2]=[s(" Send Message ")])),_:1}),t(B,{color:"error",onClick:g[1]||(g[1]=c=>d.value=0)},{default:a(()=>g[3]||(g[3]=[s(" Clear Notifications ")])),_:1})])]))}},J={class:"demo-space-x"},K={__name:"DemoBadgeAvatarStatus",setup(V){return(d,e)=>(f(),u("div",J,[t(o,{dot:"",bordered:"",color:"success",location:"bottom end","offset-x":5,"offset-y":1},{default:a(()=>[t(i,{size:"large"},{default:a(()=>[t(m,{src:r(l)},null,8,["src"])]),_:1})]),_:1}),t(o,{dot:"",bordered:"",color:"warning",location:"bottom end","offset-x":5,"offset-y":1},{default:a(()=>[t(i,{size:"large"},{default:a(()=>[t(m,{src:r(l)},null,8,["src"])]),_:1})]),_:1}),t(o,{dot:"",bordered:"",color:"error",location:"bottom end","offset-x":5,"offset-y":1},{default:a(()=>[t(i,{size:"large"},{default:a(()=>[t(m,{src:r(l)},null,8,["src"])]),_:1})]),_:1})]))}},Q={class:"demo-space-x"},X={__name:"DemoBadgeIcon",setup(V){return(d,e)=>(f(),u("div",Q,[t(o,null,{badge:a(()=>[t(p,{icon:"bx-bulb"})]),default:a(()=>[t(i,null,{default:a(()=>[t(m,{src:r(l)},null,8,["src"])]),_:1})]),_:1}),t(o,{icon:"bx-lock-open"},{default:a(()=>[t(i,null,{default:a(()=>[t(m,{src:r(l)},null,8,["src"])]),_:1})]),_:1})]))}},Z={class:"demo-space-x"},tt={__name:"DemoBadgePosition",setup(V){return(d,e)=>(f(),u("div",Z,[t(o,{content:"1",location:"end top"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:r(l)},null,8,["src"])]),_:1})]),_:1}),t(o,{location:"bottom start",content:"2"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:r(l)},null,8,["src"])]),_:1})]),_:1}),t(o,{location:"bottom end",content:"3"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:r(l)},null,8,["src"])]),_:1})]),_:1}),t(o,{location:"top start",content:"4"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:r(l)},null,8,["src"])]),_:1})]),_:1})]))}},at={},et={class:"demo-space-x"};function ot(V,d){return f(),u("div",et,[t(o,{dot:"",color:"primary"},{default:a(()=>[t(p,{size:"25",icon:"bx-bxl-instagram"})]),_:1}),t(o,{dot:"",color:"secondary"},{default:a(()=>[t(p,{size:"25",icon:"bx-bxl-instagram"})]),_:1}),t(o,{dot:"",color:"success"},{default:a(()=>[t(p,{size:"25",icon:"bx-bxl-instagram"})]),_:1}),t(o,{dot:"",color:"info"},{default:a(()=>[t(p,{size:"25",icon:"bx-bxl-instagram"})]),_:1}),t(o,{dot:"",color:"warning"},{default:a(()=>[t(p,{size:"25",icon:"bx-bxl-instagram"})]),_:1}),t(o,{dot:"",color:"error"},{default:a(()=>[t(p,{size:"25",icon:"bx-bxl-instagram"})]),_:1})])}const st=$(at,[["render",ot]]),nt={class:"demo-space-x d-flex align-center flex-wrap"},rt={__name:"DemoBadgeStyle",setup(V){return(d,e)=>(f(),u("div",nt,[t(o,{content:"1"},{default:a(()=>[t(B,{variant:"tonal"},{default:a(()=>e[0]||(e[0]=[s(" Default ")])),_:1})]),_:1}),t(o,{content:"5",bordered:""},{default:a(()=>[t(B,{variant:"tonal"},{default:a(()=>e[1]||(e[1]=[s(" Border ")])),_:1})]),_:1}),t(o,{dot:"",location:"bottom end","offset-x":"3","offset-y":"3"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:r(l)},null,8,["src"])]),_:1})]),_:1}),t(o,{inline:"",content:"5"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:r(l)},null,8,["src"])]),_:1})]),_:1}),t(o,{rounded:"sm",content:"5"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:r(l)},null,8,["src"])]),_:1})]),_:1})]))}},ct={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},dt={ts:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>
  </div>
</template>
`},lt={ts:`<script lang="ts" setup>
const notifications = ref<number>()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="bx-bxl-vuejs"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`,js:`<script setup>
const notifications = ref()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="bx-bxl-vuejs"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`},it={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="bx-bulb" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="bx-lock-open">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="bx-bulb" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="bx-lock-open">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},mt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="99"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="100"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="1000"
      max="999"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="99"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="100"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="1000"
      max="999"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},gt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},ft={ts:`<script lang="ts" setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()

const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="bx-bxl-meta"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="bx-bxl-whatsapp"
      />
    </VBadge>
  </div>
</template>
`,js:`<script setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()
const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="bx-bxl-meta"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="bx-bxl-whatsapp"
      />
    </VBadge>
  </div>
</template>
`},pt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},Vt={ts:`<script setup lang="ts">
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs grow>
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        :offset-x="-18"
        :offset-y="6"
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`,js:`<script setup>
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs grow>
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        :offset-x="-18"
        :offset-y="6"
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`},vt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="5"
      class="v-badge--tonal"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- default -->
    <VBadge
      content="1"
      class="v-badge--tonal"
      color="error"
    >
      <VBtn color="error">
        Default
      </VBtn>
    </VBadge>

    <!-- icon -->
    <VBadge
      icon="bx-lock-open"
      color="info"
      class="v-badge--tonal"
    >
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="5"
      class="v-badge--tonal"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- default -->
    <VBadge
      content="1"
      class="v-badge--tonal"
      color="error"
    >
      <VBtn color="error">
        Default
      </VBtn>
    </VBadge>

    <!-- icon -->
    <VBadge
      icon="bx-lock-open"
      color="info"
      class="v-badge--tonal"
    >
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},Wt={__name:"badge",setup(V){return(d,e)=>{const g=rt,c=W,b=st,x=tt,A=X,z=K,y=G,h=F,T=P,D=Y,R=N;return f(),w(E,{class:"match-height"},{default:a(()=>[t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Style",code:pt},{default:a(()=>[e[0]||(e[0]=n("p",null,[s("You can use various props like "),n("code",null,"bordered"),s(", "),n("code",null,"dot"),s(", "),n("code",null,"inline"),s(", "),n("code",null,"rounded"),s(" etc. to style the badge.")],-1)),t(g)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Color",code:dt},{default:a(()=>[e[1]||(e[1]=n("p",null,[s("Use "),n("code",null,"color"),s(" prop to create various background badges.")],-1)),t(b)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Position",code:gt},{default:a(()=>[e[2]||(e[2]=n("p",null,[s("You can use "),n("code",null,"location"),s(" prop to change the position of the badge. Possible values are "),n("code",null,"top-end"),s(", "),n("code",null,"bottom-end"),s(", "),n("code",null,"bottom-start"),s(", "),n("code",null,"top-start"),s(".")],-1)),t(x)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Icon",code:it},{default:a(()=>[e[3]||(e[3]=n("p",null,[s("You can use "),n("code",null,"icon"),s(" prop or use "),n("code",null,"slot"),s(" to render the icon")],-1)),t(A)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Avatar Status",code:ct},{default:a(()=>[e[4]||(e[4]=n("p",null,"You can use badge with avatar as status.",-1)),t(z)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Dynamic notifications",code:lt},{default:a(()=>[e[5]||(e[5]=n("p",null,"You can incorporate badges with dynamic content to make things such as a notification system.",-1)),t(y)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Show on hover",code:ft},{default:a(()=>[e[6]||(e[6]=n("p",null,"You can do many things with visibility control, for example, show badge on hover.",-1)),t(h)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Tabs",code:Vt},{default:a(()=>[e[7]||(e[7]=n("p",null,"Badges help convey information to the user in a variety of ways.",-1)),t(T)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Maximum Value",code:mt},{default:a(()=>[e[8]||(e[8]=n("p",null,[s("Use "),n("code",null,"max"),s(" prop to cap the value of the badge content")],-1)),t(D)]),_:1},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Tonal",code:vt},{default:a(()=>[e[9]||(e[9]=n("p",null,[s("Use class "),n("code",null,"v-badge--tonal"),s(" for using tonal variant badge.")],-1)),t(R)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Wt as default};
