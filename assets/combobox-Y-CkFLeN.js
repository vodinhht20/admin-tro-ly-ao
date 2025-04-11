import{_ as y,V as C}from"./AppCombobox-5SYAUU4S.js";import{r as c,o as V,f as b,m as r,aH as d,w as I,aL as P,e as s,b as l,t as n,d as i,v}from"./index-CUvn4YAR.js";import{a as A,b as D}from"./VList-BRcx9RTU.js";import{a as p,V as x}from"./VRow-C-JD8-Bt.js";import{V as w}from"./VChip-BW-Rkz1f.js";import{V as U}from"./VAvatar-BeWj6soD.js";import{_ as L}from"./AppCardCode-C54xoV-L.js";import"./form-CfkoHHsY.js";import"./VSelect-DmKFXJXG.js";import"./VTextField-szUz5uGX.js";/* empty css                   */import"./VCounter-RzM6sknS.js";import"./VImg-DixWuppw.js";import"./VField-DTzRLJhk.js";import"./easing-CjukEv2V.js";import"./VInput-Cl_xSrPg.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-CLwUXjTL.js";import"./VMenu-CjTov_S2.js";import"./VOverlay-BIXCnhE5.js";import"./delay-dq4ZUyAJ.js";import"./lazy-DC9nxbjh.js";import"./scopeId-BHLx50Fr.js";import"./VCheckboxBtn-DuwumgzT.js";import"./VSelectionControl-CrqGuL7H.js";import"./filter-DcA19s5C.js";import"./ssrBoot-aAZxpRLo.js";import"./VDivider-DLfrfrXR.js";/* empty css              */import"./VSlideGroup-CVwk3rdy.js";import"./vue3-perfect-scrollbar.esm-9V3Lamrz.js";import"./VCard-7xYVh7ib.js";import"./VCardTitle-DBwQgzAF.js";import"./VCardText-CoY-p6gH.js";const k={__name:"DemoComboboxClearable",setup(g){const e=c(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(u,t)=>{const o=y;return V(),b(o,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=a=>d(e)?e.value=a:null),items:m,label:"Combobox",multiple:"",placeholder:"deployment",clearable:""},null,8,["modelValue"])}}},R={__name:"DemoComboboxNoDataWithChips",setup(g){const e=["Gaming","Programming","Vue","Vuetify"],m=c(["Vuetify"]),u=c(null);return I(m,t=>{t.length>5&&P(()=>m.value.pop())}),(t,o)=>{const a=y;return V(),b(a,{modelValue:r(m),"onUpdate:modelValue":o[0]||(o[0]=f=>d(m)?m.value=f:null),"search-input":r(u),"onUpdate:searchInput":o[1]||(o[1]=f=>d(u)?u.value=f:null),items:e,"hide-selected":"","hide-no-data":!1,placeholder:"deployment",hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":""},{"no-data":s(()=>[l(A,null,{default:s(()=>[l(D,null,{default:s(()=>[o[2]||(o[2]=n(' No results matching "')),i("strong",null,v(r(u)),1),o[3]||(o[3]=n('". Press ')),o[4]||(o[4]=i("kbd",null,"enter",-1)),o[5]||(o[5]=n(" to create a new one "))]),_:1})]),_:1})]),_:1},8,["modelValue","search-input"])}}},N={__name:"DemoComboboxMultiple",setup(g){const e=c(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(u,t)=>{const o=y;return V(),b(x,null,{default:s(()=>[l(p,{cols:"12"},{default:s(()=>[l(o,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=a=>d(e)?e.value=a:null),items:m,placeholder:"deployment",label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue"])]),_:1}),l(p,{cols:"12"},{default:s(()=>[l(o,{modelValue:r(e),"onUpdate:modelValue":t[1]||(t[1]=a=>d(e)?e.value=a:null),items:m,placeholder:"deployment",label:"I use chips",multiple:"",chips:""},null,8,["modelValue"])]),_:1}),l(p,{cols:"12"},{default:s(()=>[l(o,{modelValue:r(e),"onUpdate:modelValue":t[2]||(t[2]=a=>d(e)?e.value=a:null),placeholder:"deployment",label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1}),l(p,{cols:"12"},{default:s(()=>[l(o,{modelValue:r(e),"onUpdate:modelValue":t[3]||(t[3]=a=>d(e)?e.value=a:null),items:m,placeholder:"deployment",label:"I use selection slot",multiple:""},{selection:s(({item:a})=>[l(w,{size:"small"},{prepend:s(()=>[l(U,{start:"",color:"primary",size:"16"},{default:s(()=>[n(v(String(a.title).charAt(0).toUpperCase()),1)]),_:2},1024)]),default:s(()=>[n(" "+v(a.title),1)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},T={__name:"DemoComboboxVariant",setup(g){const e=c(["Programming"]),m=["Programming","Design","Vue","Vuetify"];return(u,t)=>(V(),b(x,null,{default:s(()=>[l(p,{cols:"12"},{default:s(()=>[l(C,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=o=>d(e)?e.value=o:null),items:m,multiple:"",placeholder:"deployment",variant:"solo",label:"solo"},null,8,["modelValue"])]),_:1}),l(p,{cols:"12"},{default:s(()=>[l(C,{modelValue:r(e),"onUpdate:modelValue":t[1]||(t[1]=o=>d(e)?e.value=o:null),multiple:"",items:m,placeholder:"deployment",variant:"outlined",label:"Outlined"},null,8,["modelValue"])]),_:1}),l(p,{cols:"12"},{default:s(()=>[l(C,{modelValue:r(e),"onUpdate:modelValue":t[2]||(t[2]=o=>d(e)?e.value=o:null),multiple:"",items:m,placeholder:"deployment",variant:"underlined",label:"Underlined"},null,8,["modelValue"])]),_:1}),l(p,{cols:"12"},{default:s(()=>[l(C,{modelValue:r(e),"onUpdate:modelValue":t[3]||(t[3]=o=>d(e)?e.value=o:null),multiple:"",items:m,placeholder:"deployment",variant:"filled",label:"Filled"},null,8,["modelValue"])]),_:1}),l(p,{cols:"12"},{default:s(()=>[l(C,{modelValue:r(e),"onUpdate:modelValue":t[4]||(t[4]=o=>d(e)?e.value=o:null),multiple:"",items:m,variant:"plain",placeholder:"deployment",label:"Plain"},null,8,["modelValue"])]),_:1})]),_:1}))}},$={__name:"DemoComboboxDensity",setup(g){const e=c(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(u,t)=>{const o=y;return V(),b(o,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=a=>d(e)?e.value=a:null),items:m,label:"Combobox",density:"compact",placeholder:"deployment",multiple:""},null,8,["modelValue"])}}},S={__name:"DemoComboboxBasic",setup(g){const e=c("Programming"),m=["Programming","Design","Vue","Vuetify"];return(u,t)=>{const o=y;return V(),b(o,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=a=>d(e)?e.value=a:null),items:m,placeholder:"deployment"},null,8,["modelValue"])}}},j={ts:`<script lang="ts" setup>
const selectedItem = ref('Programming')
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`,js:`<script setup>
const selectedItem = ref('Programming')

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`},z={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`},B={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`},M={ts:`<script lang="ts" setup>
const selectedItem = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        placeholder="deployment"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip size="small">
            <template #prepend>
              <VAvatar
                start
                color="primary"
                size="16"
              >
                {{ String(item.title).charAt(0).toUpperCase() }}
              </VAvatar>
            </template>

            {{ item.title }}
          </VChip>
        </template>
      </AppCombobox>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        placeholder="deployment"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip size="small">
            <template #prepend>
              <VAvatar
                start
                color="primary"
                size="16"
              >
                {{ String(item.title).charAt(0).toUpperCase() }}
              </VAvatar>
            </template>

            {{ item.title }}
          </VChip>
        </template>
      </AppCombobox>
    </VCol>
  </VRow>
</template>
`},W={ts:`<script lang="ts" setup>
const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <AppCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </AppCombobox>
</template>
`,js:`<script setup>
const items = [
  'Gaming',
  'Programming',
  'Vue',
  'Vuetify',
]

const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <AppCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </AppCombobox>
</template>
`},F={ts:`<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref(['Programming'])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`},_e={__name:"combobox",setup(g){return(e,m)=>{const u=S,t=L,o=$,a=T,f=N,h=R,_=k;return V(),b(x,{class:"match-height"},{default:s(()=>[l(p,{cols:"12",md:"6"},{default:s(()=>[l(t,{title:"Basic",code:j},{default:s(()=>[m[0]||(m[0]=i("p",null,"With Combobox, you can allow a user to create new values that may not be present in a provided items list.",-1)),l(u)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:s(()=>[l(t,{title:"Density",code:B},{default:s(()=>[m[1]||(m[1]=i("p",null,[n(" You can use "),i("code",null,"Density"),n(" prop to reduce combobox height and lower max height of list items. Available options are: "),i("code",null,"default"),n(", "),i("code",null,"comfortable"),n(", and "),i("code",null,"compact"),n(". ")],-1)),l(o)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:s(()=>[l(t,{title:"Variant",code:F},{default:s(()=>[m[2]||(m[2]=i("p",null,[n("Use "),i("code",null,"solo"),n(", "),i("code",null,"outlined"),n(", "),i("code",null,"underlined"),n(", "),i("code",null,"filled"),n(" and "),i("code",null,"plain"),n(" options of "),i("code",null,"variant"),n(" prop to change the look of combobox. ")],-1)),l(a)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:s(()=>[l(t,{title:"Multiple",code:M},{default:s(()=>[m[3]||(m[3]=i("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1)),l(f)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:s(()=>[l(t,{title:"No data with chips",code:W},{default:s(()=>[m[4]||(m[4]=i("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1)),l(h)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:s(()=>[l(t,{title:"Clearable",code:z},{default:s(()=>[m[5]||(m[5]=i("p",null,[n("Use "),i("code",null,"clearable"),n(" prop to clear combobox.")],-1)),l(_)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{_e as default};
