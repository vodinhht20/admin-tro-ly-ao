import{_ as r}from"./AppFileInput-DQhF6jad.js";import{r as b,w as D,o as s,f as c,m as h,aH as I,e as o,c as j,F as S,h as L,t as n,v as N,L as m,b as l,d as t}from"./index-CUvn4YAR.js";import{V as U}from"./VChip-BW-Rkz1f.js";import{a,V as g}from"./VRow-C-JD8-Bt.js";import{V as F}from"./VFileInput-mPqAIt5y.js";import{_ as k}from"./AppCardCode-C54xoV-L.js";import"./form-CfkoHHsY.js";import"./VSlideGroup-CVwk3rdy.js";import"./VAvatar-BeWj6soD.js";import"./VImg-DixWuppw.js";/* empty css              */import"./VField-DTzRLJhk.js";import"./easing-CjukEv2V.js";import"./VInput-Cl_xSrPg.js";import"./forwardRefs-C-GTDzx5.js";import"./VCounter-RzM6sknS.js";import"./vue3-perfect-scrollbar.esm-9V3Lamrz.js";import"./VCard-7xYVh7ib.js";import"./VCardTitle-DBwQgzAF.js";import"./VCardText-CoY-p6gH.js";import"./VDivider-DLfrfrXR.js";const B={__name:"DemoFileInputLoading",setup(u){const i=b(),e=b(!0);return D(i,()=>{e.value=!i.value[0]}),(_,p)=>{const d=r;return s(),c(d,{modelValue:h(i),"onUpdate:modelValue":p[0]||(p[0]=f=>I(i)?i.value=f:null),loading:h(e),color:"primary",label:"File input",variant:"outlined"},null,8,["modelValue","loading"])}}},P={__name:"DemoFileInputSelectionSlot",setup(u){const i=b([]);return(e,_)=>{const p=r;return s(),c(p,{modelValue:h(i),"onUpdate:modelValue":_[0]||(_[0]=d=>I(i)?i.value=d:null),multiple:"",placeholder:"Upload your documents",label:"File input","prepend-inner-icon":"bx-paperclip"},{selection:o(({fileNames:d})=>[(s(!0),j(S,null,L(d,f=>(s(),c(U,{key:f,label:"",size:"small",color:"primary",class:"me-2"},{default:o(()=>[n(N(f),1)]),_:2},1024))),128))]),_:1},8,["modelValue"])}}},R={__name:"DemoFileInputValidation",setup(u){const i=[e=>!e||!e.length||e[0].size<1e6||"Avatar size should be less than 1 MB!"];return(e,_)=>{const p=r;return s(),c(p,{rules:i,label:"Avatar",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-inner-icon":"bx-camera",variant:"outlined"})}}},M={};function T(u,i){const e=r;return s(),c(e,{"show-size":"",label:"File input"})}const O=m(M,[["render",T]]),Y={};function E(u,i){const e=r;return s(),c(e,{label:"File input","prepend-icon":"bx-camera"})}const H=m(Y,[["render",E]]),W={};function q(u,i){const e=r;return s(),c(e,{multiple:"",label:"File input"})}const G=m(W,[["render",q]]),J={};function K(u,i){const e=r;return s(),c(e,{"show-size":"",counter:"",multiple:"",label:"File input"})}const Q=m(J,[["render",K]]),X={};function Z(u,i){const e=r;return s(),c(e,{chips:"",label:"File input w/ chips"})}const ee=m(X,[["render",Z]]),le={};function te(u,i){const e=r;return s(),c(e,{accept:"image/*",label:"File input"})}const ne=m(le,[["render",te]]),oe={};function ie(u,i){return s(),c(g,null,{default:o(()=>[l(a,{cols:"12",sm:"6"},{default:o(()=>[l(F,{label:"Outlined"})]),_:1}),l(a,{cols:"12",sm:"6"},{default:o(()=>[l(F,{label:"Filled",variant:"filled"})]),_:1}),l(a,{cols:"12",sm:"6"},{default:o(()=>[l(F,{label:"Solo",variant:"solo"})]),_:1}),l(a,{cols:"12",sm:"6"},{default:o(()=>[l(F,{label:"Plain",variant:"plain"})]),_:1}),l(a,{cols:"12",sm:"6"},{default:o(()=>[l(F,{label:"Underlined",variant:"underlined",density:"default"})]),_:1})]),_:1})}const pe=m(oe,[["render",ie]]),ae={};function se(u,i){const e=r;return s(),c(e,{label:"File input",density:"compact"})}const ce=m(ae,[["render",se]]),ue={};function re(u,i){const e=r;return s(),c(e,{label:"File input"})}const me=m(ue,[["render",re]]),de={ts:`<template>
  <AppFileInput
    accept="image/*"
    label="File input"
  />
</template>
`,js:`<template>
  <AppFileInput
    accept="image/*"
    label="File input"
  />
</template>
`},_e={ts:`<template>
  <AppFileInput label="File input" />
</template>
`,js:`<template>
  <AppFileInput label="File input" />
</template>
`},fe={ts:`<template>
  <AppFileInput
    chips
    label="File input w/ chips"
  />
</template>
`,js:`<template>
  <AppFileInput
    chips
    label="File input w/ chips"
  />
</template>
`},Fe={ts:`<template>
  <AppFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <AppFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`},be={ts:`<template>
  <AppFileInput
    label="File input"
    density="compact"
  />
</template>
`,js:`<template>
  <AppFileInput
    label="File input"
    density="compact"
  />
</template>
`},he={ts:`<script setup lang="ts">
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <AppFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
    variant="outlined"
  />
</template>
`,js:`<script setup>
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <AppFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
    variant="outlined"
  />
</template>
`},Ie={ts:`<template>
  <AppFileInput
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <AppFileInput
    multiple
    label="File input"
  />
</template>
`},ge={ts:`<template>
  <AppFileInput
    label="File input"
    prepend-icon="bx-camera"
  />
</template>
`,js:`<template>
  <AppFileInput
    label="File input"
    prepend-icon="bx-camera"
  />
</template>
`},Ve={ts:`<script lang="ts" setup>
const files = ref<File[]>([])
<\/script>

<template>
  <AppFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-inner-icon="bx-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </AppFileInput>
</template>
`,js:`<script setup>
const files = ref([])
<\/script>

<template>
  <AppFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-inner-icon="bx-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </AppFileInput>
</template>
`},ve={ts:`<template>
  <AppFileInput
    show-size
    label="File input"
  />
</template>
`,js:`<template>
  <AppFileInput
    show-size
    label="File input"
  />
</template>
`},Ae={ts:`<script lang="ts" setup>
const rules = [
  (fileList: FileList) => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!',
]
<\/script>

<template>
  <AppFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-inner-icon="bx-camera"
    variant="outlined"
  />
</template>
`,js:`<script setup>
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!']
<\/script>

<template>
  <AppFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-inner-icon="bx-camera"
    variant="outlined"
  />
</template>
`},ye={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`},We={__name:"file-input",setup(u){return(i,e)=>{const _=me,p=k,d=ce,f=pe,V=ne,v=ee,A=Q,y=G,C=H,w=O,x=R,z=P,$=B;return s(),c(g,{class:"match-height"},{default:o(()=>[l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Basic",code:_e},{default:o(()=>[e[0]||(e[0]=t("p",null,[n("The "),t("code",null,"v-file-input"),n(" component is used to selecting files.")],-1)),l(_)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Density",code:be},{default:o(()=>[e[1]||(e[1]=t("p",null,[n("You can reduces the file input height with "),t("code",null,"density"),n(" prop. Available options are: "),t("code",null,"default"),n(", "),t("code",null,"comfortable"),n(", and "),t("code",null,"compact"),n(".")],-1)),l(d)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(p,{title:"Variant",code:ye},{default:o(()=>[e[2]||(e[2]=t("p",null,[n("use "),t("code",null,"solo"),n(", "),t("code",null,"filled"),n(", "),t("code",null,"outlined"),n(", "),t("code",null,"plain"),n(" and "),t("code",null,"underlined"),n(" option of "),t("code",null,"variant"),n(" prop to change the look of file input.")],-1)),l(f)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Accept",code:de},{default:o(()=>[e[3]||(e[3]=t("p",null,[t("code",null,"v-file-input"),n(" component can accept only specific media formats/file types if you want.")],-1)),l(V)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Chips",code:fe},{default:o(()=>[e[4]||(e[4]=t("p",null,[n("Use "),t("code",null,"chip"),n(" prop to display the selected file as a chip.")],-1)),l(v)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Counter",code:Fe},{default:o(()=>[e[5]||(e[5]=t("p",null,[n("When using the "),t("code",null,"show-size"),n(" property along with "),t("code",null,"counter"),n(", the total number of files and size will be displayed under the input.")],-1)),l(A)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Multiple",code:Ie},{default:o(()=>[e[6]||(e[6]=t("p",null,[n(" The "),t("code",null,"v-file-input"),n(" can contain multiple files at the same time when using the "),t("code",null,"multiple"),n(" prop. ")],-1)),l(y)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Prepend icon",code:ge},{default:o(()=>[e[7]||(e[7]=t("p",null,[n(" The "),t("code",null,"v-file-input"),n(" has a default "),t("code",null,"prepend-icon"),n(" that can be set on the component or adjusted globally. ")],-1)),l(C)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Show size",code:ve},{default:o(()=>[e[8]||(e[8]=t("p",null,[n("The displayed size of the selected file(s) can be configured with the "),t("code",null,"show-size"),n(" property.")],-1)),l(w)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Validation",code:Ae},{default:o(()=>[e[9]||(e[9]=t("p",null,[n("You can use the "),t("code",null,"rules"),n(" prop to create your own custom validation parameters.")],-1)),l(x)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Selection slot",code:Ve},{default:o(()=>[e[10]||(e[10]=t("p",null,[n("Using the "),t("code",null,"selection"),n(" slot, you can customize the appearance of your input selections.")],-1)),l(z)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Loading",code:he},{default:o(()=>[e[11]||(e[11]=t("p",null,[n("Use "),t("code",null,"loading"),n(" prop to displays linear progress bar.")],-1)),l($)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{We as default};
