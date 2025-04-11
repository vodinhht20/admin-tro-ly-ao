import{_ as b}from"./AppTextField-0YfllUen.js";import{V as D}from"./VNodeRenderer-BGwG5uGc.js";import{L as g,r as x,o as u,f,e as t,b as e,a2 as y,q as U,t as a,cB as S,m as d,aX as q,H as j,ak as H,c as N,y as L,aH as V,d as o}from"./index-CUvn4YAR.js";import{V as B}from"./VTooltip-h935F-67.js";import{a as r,V as v}from"./VRow-C-JD8-Bt.js";import{r as z,e as E}from"./validators-DpYrMFzk.js";import{V as W}from"./VForm-CeX_87nC.js";import{V as C}from"./VTextField-szUz5uGX.js";import{_ as Y}from"./AppCardCode-C54xoV-L.js";import"./form-CfkoHHsY.js";import"./VOverlay-BIXCnhE5.js";import"./easing-CjukEv2V.js";import"./delay-dq4ZUyAJ.js";import"./lazy-DC9nxbjh.js";import"./scopeId-BHLx50Fr.js";import"./VImg-DixWuppw.js";import"./forwardRefs-C-GTDzx5.js";/* empty css              */import"./helpers-DK5QwNv0.js";/* empty css                   */import"./VCounter-RzM6sknS.js";import"./VField-DTzRLJhk.js";import"./VInput-Cl_xSrPg.js";import"./vue3-perfect-scrollbar.esm-9V3Lamrz.js";import"./VCard-7xYVh7ib.js";import"./VCardTitle-DBwQgzAF.js";import"./VAvatar-BeWj6soD.js";import"./VCardText-CoY-p6gH.js";import"./VDivider-DLfrfrXR.js";const O={key:0,class:"ms-3"},X={__name:"DemoTextfieldIconSlots",setup(h){const n=x("Hey!"),l=x(!1),m=()=>{l.value=!0,n.value="Wait for it...",setTimeout(()=>{l.value=!1,n.value="You've clicked me!"},2e3)};return(s,p)=>{const c=b;return u(),f(c,{modelValue:d(n),"onUpdate:modelValue":p[0]||(p[0]=i=>V(n)?n.value=i:null),clearable:"",label:"Message",placeholder:"Hey!!",type:"text",class:"textfield-demo-icon-slot"},{prepend:t(()=>[e(B,{location:"bottom"},{activator:t(({props:i})=>[e(y,U(i,{icon:"bx-help-circle"}),null,16)]),default:t(()=>[p[1]||(p[1]=a(" I'm a tooltip "))]),_:1})]),"append-inner":t(()=>[e(S,{"leave-absolute":""},{default:t(()=>[d(l)?(u(),f(q,{key:0,color:"primary",width:"3",size:"24",indeterminate:""})):(u(),f(d(D),{key:1,class:"text-2xl",nodes:d(j).app.logo},null,8,["nodes"]))]),_:1})]),append:t(()=>[e(H,{icon:s.$vuetify.display.smAndDown,onClick:m},{default:t(()=>[e(y,{icon:"bx-target-lock",color:"#fff",size:"22"}),s.$vuetify.display.mdAndUp?(u(),N("span",O,"Click me")):L("",!0)]),_:1},8,["icon"])]),_:1},8,["modelValue"])}}},G=g(X,[["__scopeId","data-v-d14db4bf"]]),J={__name:"DemoTextfieldPasswordInput",setup(h){const n=x(!1),l=x(!0),m=x("Password"),s=x("wqfasds"),p={required:c=>!!c||"Required.",min:c=>c.length>=8||"Min 8 characters"};return(c,i)=>{const _=b;return u(),f(v,null,{default:t(()=>[e(r,{cols:"12",sm:"6"},{default:t(()=>[e(_,{modelValue:d(m),"onUpdate:modelValue":i[0]||(i[0]=T=>V(m)?m.value=T:null),"append-inner-icon":d(n)?"bx-hide":"bx-show",rules:[p.required,p.min],type:d(n)?"text":"password",name:"input-10-1",label:"Normal with hint text",hint:"At least 8 characters",placeholder:"············",counter:"","onClick:appendInner":i[1]||(i[1]=T=>n.value=!d(n))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1}),e(r,{cols:"12",sm:"6"},{default:t(()=>[e(_,{modelValue:d(s),"onUpdate:modelValue":i[2]||(i[2]=T=>V(s)?s.value=T:null),rules:[p.required,p.min],"append-inner-icon":d(l)?"bx-hide":"bx-show",type:d(l)?"text":"password",name:"input-10-2",placeholder:"············",label:"Visible",hint:"At least 8 characters","onClick:appendInner":i[3]||(i[3]=T=>l.value=!d(l))},null,8,["modelValue","rules","append-inner-icon","type"])]),_:1})]),_:1})}}},K={};function Q(h,n){const l=b;return u(),f(l,null,{label:t(()=>[n[0]||(n[0]=a(" What about  ")),n[1]||(n[1]=o("strong",null,"icon",-1)),n[2]||(n[2]=a(" here? ")),e(y,{icon:"bx-file-find"})]),_:1})}const Z=g(K,[["render",Q]]),ee={__name:"DemoTextfieldIconEvents",setup(h){const n=x("Hey!"),l=x(!0),m=x(0),s=()=>{l.value=!l.value},p=()=>{n.value=""},c=()=>{m.value=0},i=()=>{c(),p()};return(_,T)=>{const w=b;return u(),f(w,{modelValue:d(n),"onUpdate:modelValue":T[0]||(T[0]=A=>V(n)?n.value=A:null),clearable:"",type:"text",label:"Message",color:"primary",placeholder:"Hey!!","clear-icon":"bx-x-circle","append-icon":d(n)?_.$vuetify.locale.isRtl?"bx-arrow-from-right":"bx-arrow-from-left":"bx-microphone","append-inner-icon":d(l)?"bx-alarm":"bx-alarm-off","onClick:appendInner":s,"onClick:append":i,"onClick:clear":p},null,8,["modelValue","append-icon","append-inner-icon"])}}},le={__name:"DemoTextfieldValidation",setup(h){const n=x("");return(l,m)=>{const s=b;return u(),f(W,null,{default:t(()=>[e(s,{modelValue:d(n),"onUpdate:modelValue":m[0]||(m[0]=p=>V(n)?n.value=p:null),rules:["requiredValidator"in l?l.requiredValidator:d(z),"emailValidator"in l?l.emailValidator:d(E)],placeholder:"johnedoe@email.com",label:"E-mail"},null,8,["modelValue","rules"])]),_:1})}}},te={};function oe(h,n){const l=b;return u(),f(l,{label:"Regular",placeholder:"Placeholder Text","single-line":""})}const ne=g(te,[["render",oe]]),ae={__name:"DemoTextfieldPrefixesAndSuffixes",setup(h){const n=x(10.05),l=x(28.02),m=x("example"),s=x("04:56");return(p,c)=>{const i=b;return u(),f(v,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(i,{modelValue:d(n),"onUpdate:modelValue":c[0]||(c[0]=_=>V(n)?n.value=_:null),label:"Amount",prefix:"$",type:"number",placeholder:"10.05"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(i,{modelValue:d(l),"onUpdate:modelValue":c[1]||(c[1]=_=>V(l)?l.value=_:null),label:"Weight",suffix:"lbs",type:"number",placeholder:"28.02"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(i,{modelValue:d(m),"onUpdate:modelValue":c[2]||(c[2]=_=>V(m)?m.value=_:null),label:"Email address",suffix:"@gmail.com",placeholder:"example"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(i,{modelValue:d(s),"onUpdate:modelValue":c[3]||(c[3]=_=>V(s)?s.value=_:null),label:"Label Text",type:"time",suffix:"PST",placeholder:"04:56"},null,8,["modelValue"])]),_:1})]),_:1})}}},re={};function se(h,n){const l=b;return u(),f(v,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(l,{label:"Prepend","prepend-icon":"bx-map",placeholder:"Placeholder Text"})]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(l,{label:"Prepend Inner","prepend-inner-icon":"bx-map",placeholder:"Placeholder Text"})]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(l,{label:"Append","append-icon":"bx-map",placeholder:"Placeholder Text"})]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(l,{label:"Append Inner","append-inner-icon":"bx-map",placeholder:"Placeholder Text"})]),_:1})]),_:1})}const ie=g(re,[["render",se]]),de={};function pe(h,n){const l=b;return u(),f(l,{color:"success",label:"First name",placeholder:"Placeholder Text"})}const ce=g(de,[["render",pe]]),me={};function ue(h,n){const l=b;return u(),f(l,{placeholder:"Placeholder Text",label:"Regular",clearable:""})}const fe=g(me,[["render",ue]]),xe={__name:"DemoTextfieldCounter",setup(h){const n=x("Preliminary report"),l=x("California is a state in the western United States"),m=[s=>s.length<=25||"Max 25 characters"];return(s,p)=>{const c=b;return u(),f(v,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(c,{modelValue:d(n),"onUpdate:modelValue":p[0]||(p[0]=i=>V(n)?n.value=i:null),rules:m,counter:"25",placeholder:"Placeholder Text",hint:"This field uses counter prop",label:"Regular"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(c,{modelValue:d(l),"onUpdate:modelValue":p[1]||(p[1]=i=>V(l)?l.value=i:null),rules:m,counter:"",maxlength:"25",placeholder:"Placeholder Text",hint:"This field uses maxlength attribute",label:"Limit exceeded"},null,8,["modelValue"])]),_:1})]),_:1})}}},he={};function _e(h,n){const l=b;return u(),f(v,null,{default:t(()=>[e(r,null,{default:t(()=>[e(l,{label:"Disabled",placeholder:"Placeholder Text",disabled:""})]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(l,{placeholder:"Placeholder Text",label:"Readonly",readonly:""})]),_:1})]),_:1})}const be=g(he,[["render",_e]]),Ve={};function Te(h,n){return u(),f(v,null,{default:t(()=>[e(r,{cols:"12",md:"6"},{default:t(()=>[e(C,{label:"Outlined",variant:"outlined"})]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(C,{label:"Filled",variant:"filled",placeholder:"Placeholder Text"})]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(C,{label:"Solo",variant:"solo",placeholder:"Placeholder Text"})]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(C,{label:"Plain",variant:"plain",placeholder:"Placeholder Text"})]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(C,{label:"Underlined",variant:"underlined",placeholder:"Placeholder Text"})]),_:1})]),_:1})}const ge=g(Ve,[["render",Te]]),ve={};function Ce(h,n){const l=b;return u(),f(l,{label:"Compact",density:"compact",placeholder:"Placeholder Text"})}const we=g(ve,[["render",Ce]]),Ae={};function ye(h,n){const l=b;return u(),f(l,{label:"Regular",placeholder:"Placeholder Text"})}const Fe=g(Ae,[["render",ye]]),Pe={ts:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
`},ke={ts:`<template>
  <AppTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
`,js:`<template>
  <AppTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
`},Re={ts:`<script lang="ts" setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`},Ie={ts:`<template>
  <AppTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
`},$e={ts:`<template>
  <AppTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
`},Me={ts:`<script lang="ts" setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="bx-x-circle"
    :append-icon="message ? $vuetify.locale.isRtl ? 'bx-arrow-from-right' : 'bx-arrow-from-left' : 'bx-microphone'"
    :append-inner-icon="marker ? 'bx-alarm' : 'bx-alarm-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`,js:`<script setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="bx-x-circle"
    :append-icon="message ? $vuetify.locale.isRtl ? 'bx-arrow-from-right' : 'bx-arrow-from-left' : 'bx-microphone'"
    :append-inner-icon="marker ? 'bx-alarm' : 'bx-alarm-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`},De={ts:`<script setup lang="ts">
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'

  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    label="Message"
    placeholder="Hey!!"
    type="text"
    class="textfield-demo-icon-slot"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="bx-help-circle"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          color="primary"
          width="3"
          size="24"
          indeterminate
        />

        <VNodeRenderer
          v-else
          class="text-2xl"
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon
          icon="bx-target-lock"
          color="#fff"
          size="22"
        />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </AppTextField>
</template>

<style lang="scss" scoped>
// .textfield-demo-icon-slot {
//   :deep(.v-input) {
//     align-content: center;

//     .v-input__prepend,
//     .v-input__append {
//       padding-block-start: 0 !important;
//     }

//     .v-input__prepend {
//       align-items: center;
//     }

//     .v-field__append-inner .v-progress-circular svg {
//       block-size: 1.3em;
//       inline-size: 1.3em;
//     }

//     .v-field__append-inner svg {
//       margin-block-start: 0.1rem;
//     }
//   }
// }
</style>
`,js:`<script setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'
  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    label="Message"
    placeholder="Hey!!"
    type="text"
    class="textfield-demo-icon-slot"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="bx-help-circle"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          color="primary"
          width="3"
          size="24"
          indeterminate
        />

        <VNodeRenderer
          v-else
          class="text-2xl"
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon
          icon="bx-target-lock"
          color="#fff"
          size="22"
        />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </AppTextField>
</template>

<style lang="scss" scoped>
// .textfield-demo-icon-slot {
//   :deep(.v-input) {
//     align-content: center;

//     .v-input__prepend,
//     .v-input__append {
//       padding-block-start: 0 !important;
//     }

//     .v-input__prepend {
//       align-items: center;
//     }

//     .v-field__append-inner .v-progress-circular svg {
//       block-size: 1.3em;
//       inline-size: 1.3em;
//     }

//     .v-field__append-inner svg {
//       margin-block-start: 0.1rem;
//     }
//   }
// }
</style>
`},Ue={ts:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        label="Prepend"
        prepend-icon="bx-map"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Prepend Inner"
        prepend-inner-icon="bx-map"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append"
        append-icon="bx-map"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append Inner"
        append-inner-icon="bx-map"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        label="Prepend"
        prepend-icon="bx-map"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Prepend Inner"
        prepend-inner-icon="bx-map"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append"
        append-icon="bx-map"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append Inner"
        append-inner-icon="bx-map"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`},Se={ts:`<template>
  <AppTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="bx-file-find" />
    </template>
  </AppTextField>
</template>
`,js:`<template>
  <AppTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="bx-file-find" />
    </template>
  </AppTextField>
</template>
`},qe={ts:`<script lang="ts" setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="password"
        :append-inner-icon="show1 ? 'bx-hide' : 'bx-show' "
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'bx-hide' : 'bx-show' "
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="password"
        :append-inner-icon="show1 ? 'bx-hide' : 'bx-show' "
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'bx-hide' : 'bx-show' "
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`},je={ts:`<script setup lang="ts">
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
`},He={ts:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
`,js:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
`},Ne={ts:`<template>
  <VRow>
    <VCol>
      <AppTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol>
      <AppTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`},Le={ts:`<script lang="ts" setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <AppTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
`,js:`<script setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <AppTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
`},Be={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`},bl={__name:"textfield",setup(h){return(n,l)=>{const m=Fe,s=Y,p=we,c=ge,i=be,_=xe,T=fe,w=ce,A=ie,F=ae,P=ne,k=le,R=ee,I=Z,$=J,M=G;return u(),f(v,{class:"match-height"},{default:t(()=>[e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Basic",code:Pe},{default:t(()=>[l[0]||(l[0]=o("p",null,"Text fields components are used for collecting user provided information.",-1)),e(m)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Density",code:$e},{default:t(()=>[l[1]||(l[1]=o("p",null,[a("The "),o("code",null,"density"),a(" prop decreases the height of the text field based upon levels of density; "),o("code",null,"default"),a(","),o("code",null,"comfortable"),a(", and "),o("code",null,"compact"),a(".")],-1)),e(p)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(s,{title:"Variant",code:Be},{default:t(()=>[l[2]||(l[2]=o("p",null,[a("Use "),o("code",null,"solo"),a(", "),o("code",null,"filled"),a(", "),o("code",null,"outlined"),a(", "),o("code",null,"plain"),a(" and "),o("code",null,"underlined"),a(" option of "),o("code",null,"variant"),a(" prop to change the look of the textfield. ")],-1)),e(c)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"State",code:Ne},{default:t(()=>[l[3]||(l[3]=o("p",null,"Text fields can be disabled or readonly.",-1)),e(i)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Counter",code:Re},{default:t(()=>[l[4]||(l[4]=o("p",null,[a("Use a "),o("code",null,"counter"),a(" prop to inform a user of the character limit.")],-1)),e(_)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Clearable",code:ke},{default:t(()=>[l[5]||(l[5]=o("p",null,"When clearable, you can customize the clear icon with clear-icon.",-1)),e(T)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Custom Colors",code:Ie},{default:t(()=>[l[6]||(l[6]=o("p",null,[a("Use "),o("code",null,"color"),a(" prop to change the input border color.")],-1)),e(w)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Icons",code:Ue},{default:t(()=>[l[7]||(l[7]=o("p",null,[a("You can add icons to the text field with "),o("code",null,"prepend-icon"),a(", "),o("code",null,"append-icon"),a(" and "),o("code",null,"append-inner-icon"),a(" and "),o("code",null,"prepend-inner-icon"),a(" props.")],-1)),e(A)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Prefixes and suffixes",code:je},{default:t(()=>[l[8]||(l[8]=o("p",null,[a("The "),o("code",null,"prefix"),a(" and "),o("code",null,"suffix"),a(" properties allows you to prepend and append inline non-modifiable text next to the text field.")],-1)),e(F)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Single line",code:He},{default:t(()=>[l[9]||(l[9]=o("p",null,[o("code",null,"single-line"),a(" text fields do not float their label on focus or with data.")],-1)),e(P)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Validation",code:Le},{default:t(()=>[l[10]||(l[10]=o("p",null,[a("Vuetify includes simple validation through the "),o("code",null,"rules"),a(" prop.")],-1)),e(k)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Icon events",code:Me},{default:t(()=>[l[11]||(l[11]=o("p",null,[o("code",null,"click:prepend"),a(", "),o("code",null,"click:append"),a(", "),o("code",null,"click:append-inner"),a(", and "),o("code",null,"click:clear"),a(" will be emitted when you click on the respective icon")],-1)),e(R)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Label Slot",code:Se},{default:t(()=>[l[12]||(l[12]=o("p",null,[a("Text field label can be defined in "),o("code",null,"label"),a(" slot - that will allow to use HTML content.")],-1)),e(I)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Password input",code:qe},{default:t(()=>[l[13]||(l[13]=o("p",null,[a("Using the HTML input "),o("code",null,"type"),a(" password can be used with an appended icon and callback to control the visibility.")],-1)),e($)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Icon slots",code:De},{default:t(()=>[l[14]||(l[14]=o("p",null,[a("Instead of using "),o("code",null,"prepend"),a("/"),o("code",null,"append"),a("/"),o("code",null,"append-inner"),a(" icons you can use slots to extend input's functionality.")],-1)),e(M)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{bl as default};
