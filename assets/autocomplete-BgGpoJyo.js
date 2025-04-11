import{_ as S,V as A}from"./AppAutocomplete-CM8PJg7n.js";import{r as f,o as h,f as v,m as u,aH as _,e as l,b as a,dQ as N,a2 as T,w as G,q as y,bo as I,br as F,aP as D,aN as W,aO as O,bq as R,bp as H,dl as L,d as s,t as r}from"./index-CUvn4YAR.js";import{V as E}from"./VChip-BW-Rkz1f.js";import{a as P}from"./VList-BRcx9RTU.js";import{a as c,V as w}from"./VRow-C-JD8-Bt.js";import{_ as U}from"./AppCardCode-C54xoV-L.js";import"./form-CfkoHHsY.js";import"./VSelect-DmKFXJXG.js";import"./VTextField-szUz5uGX.js";/* empty css                   */import"./VCounter-RzM6sknS.js";import"./VImg-DixWuppw.js";import"./VField-DTzRLJhk.js";import"./easing-CjukEv2V.js";import"./VInput-Cl_xSrPg.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-CLwUXjTL.js";import"./VMenu-CjTov_S2.js";import"./VOverlay-BIXCnhE5.js";import"./delay-dq4ZUyAJ.js";import"./lazy-DC9nxbjh.js";import"./scopeId-BHLx50Fr.js";import"./VCheckboxBtn-DuwumgzT.js";import"./VSelectionControl-CrqGuL7H.js";import"./VAvatar-BeWj6soD.js";import"./filter-DcA19s5C.js";import"./VSlideGroup-CVwk3rdy.js";import"./ssrBoot-aAZxpRLo.js";import"./VDivider-DLfrfrXR.js";/* empty css              */import"./vue3-perfect-scrollbar.esm-9V3Lamrz.js";import"./VCard-7xYVh7ib.js";import"./VCardTitle-DBwQgzAF.js";import"./VCardText-CoY-p6gH.js";const q={__name:"DemoAutocompleteValidation",setup(g){const t=["foo","bar","fizz","buzz"],e=f(["foo"]),m=[o=>!!o.length||"Select at least one option."];return(o,n)=>{const p=S;return h(),v(p,{modelValue:u(e),"onUpdate:modelValue":n[0]||(n[0]=i=>_(e)?e.value=i:null),items:t,rules:m,placeholder:"Select Option",multiple:""},null,8,["modelValue"])}}},$={__name:"DemoAutocompleteStateSelector",setup(g){const t=f(!1),e=f(null),m=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];return(o,n)=>{const p=S;return h(),v(p,{modelValue:u(e),"onUpdate:modelValue":n[1]||(n[1]=i=>_(e)?e.value=i:null),hint:u(t)?"Click the icon to save":"Click the icon to edit",placeholder:"Select Your State",items:m,readonly:!u(t),label:`State — ${u(t)?"Editable":"Readonly"}`,"persistent-hint":"","prepend-icon":"bx-building","menu-props":{maxHeight:"200px"}},{append:l(()=>[a(N,{mode:"out-in"},{default:l(()=>[(h(),v(T,{key:`icon-${u(t)}`,color:u(t)?"success":"info",icon:u(t)?"bx-check-double":"bx-edit",onClick:n[0]||(n[0]=i=>t.value=!u(t))},null,8,["color","icon"]))]),_:1})]),_:1},8,["modelValue","hint","readonly","label"])}}},z={__name:"DemoAutocompleteAsyncItems",setup(g){const t=f(!1),e=f(),m=f(null),o=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],n=f(o),p=i=>{t.value=!0,setTimeout(()=>{n.value=o.filter(d=>(d||"").toLowerCase().includes((i||"").toLowerCase())),t.value=!1},500)};return G(e,i=>{i&&i!==m.value&&p(i)}),(i,d)=>(h(),v(A,{modelValue:u(m),"onUpdate:modelValue":d[0]||(d[0]=b=>_(m)?m.value=b:null),search:u(e),"onUpdate:search":d[1]||(d[1]=b=>_(e)?e.value=b:null),loading:u(t),items:u(n),placeholder:"Search for a state",label:"What state are you from?",variant:"underlined","menu-props":{maxHeight:"200px"}},null,8,["modelValue","search","loading","items"]))}},Y={__name:"DemoAutocompleteSlots",setup(g){const t=f(["Sandra Adams","Britta Holt"]),e=[{name:"Sandra Adams",group:"Group 1",avatar:I},{name:"Ali Connors",group:"Group 1",avatar:F},{name:"Trevor Hansen",group:"Group 1",avatar:D},{name:"Tucker Smith",group:"Group 1",avatar:W},{name:"Britta Holt",group:"Group 2",avatar:O},{name:"Jane Smith ",group:"Group 2",avatar:R},{name:"John Smith",group:"Group 2",avatar:H},{name:"Sandra Williams",group:"Group 2",avatar:L}];return(m,o)=>{const n=S;return h(),v(n,{modelValue:u(t),"onUpdate:modelValue":o[0]||(o[0]=p=>_(t)?t.value=p:null),chips:"","closable-chips":"",multiple:"",items:e,"item-title":"name","item-value":"name",placeholder:"Select User",label:"Select"},{chip:l(({props:p,item:i})=>[a(E,y(p,{"prepend-avatar":i.raw.avatar,text:i.raw.name}),null,16,["prepend-avatar","text"])]),item:l(({props:p,item:i})=>{var d,b,C;return[a(P,y(p,{"prepend-avatar":(d=i==null?void 0:i.raw)==null?void 0:d.avatar,title:(b=i==null?void 0:i.raw)==null?void 0:b.name,subtitle:(C=i==null?void 0:i.raw)==null?void 0:C.group}),null,16,["prepend-avatar","title","subtitle"])]}),_:1},8,["modelValue"])}}},j={__name:"DemoAutocompleteCustomFilter",setup(g){const t=[{name:"Florida",abbr:"FL",id:1},{name:"Georgia",abbr:"GA",id:2},{name:"Nebraska",abbr:"NE",id:3},{name:"California",abbr:"CA",id:4},{name:"New York",abbr:"NY",id:5}];function e(m,o,n){const p=n.raw.name.toLowerCase(),i=n.raw.abbr.toLowerCase(),d=o.toLowerCase();return p.includes(d)||i.includes(d)}return(m,o)=>{const n=S;return h(),v(n,{label:"States",items:t,"custom-filter":e,"item-title":"name","item-value":"abbr",placeholder:"Select State"})}}},B={__name:"DemoAutocompleteChips",setup(g){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(e,m)=>{const o=S;return h(),v(o,{label:"States",items:t,placeholder:"Select State",chips:"",multiple:"","closable-chips":""})}}},J={__name:"DemoAutocompleteClearable",setup(g){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(e,m)=>{const o=S;return h(),v(o,{label:"States",items:t,multiple:"",placeholder:"Select State",clearable:""})}}},K={__name:"DemoAutocompleteMultiple",setup(g){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(e,m)=>{const o=S;return h(),v(o,{label:"States",items:t,placeholder:"Select State",multiple:"",eager:""})}}},X={__name:"DemoAutocompleteVariant",setup(g){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(e,m)=>(h(),v(w,null,{default:l(()=>[a(c,{cols:"12",md:"6"},{default:l(()=>[a(A,{variant:"solo",label:"Solo",items:t,placeholder:"Select State"})]),_:1}),a(c,{cols:"12",md:"6"},{default:l(()=>[a(A,{variant:"outlined",label:"Outlined",placeholder:"Select State",items:t})]),_:1}),a(c,{cols:"12",md:"6"},{default:l(()=>[a(A,{variant:"underlined",label:"Underlined",placeholder:"Select State",items:t})]),_:1}),a(c,{cols:"12",md:"6"},{default:l(()=>[a(A,{variant:"filled",label:"Filled",placeholder:"Select State",items:t})]),_:1}),a(c,{cols:"12",md:"6"},{default:l(()=>[a(A,{variant:"plain",label:"Plain",placeholder:"Select State",items:t})]),_:1})]),_:1}))}},Q={__name:"DemoAutocompleteDensity",setup(g){const t=f("Florida"),e=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(m,o)=>{const n=S;return h(),v(n,{modelValue:u(t),"onUpdate:modelValue":o[0]||(o[0]=p=>_(t)?t.value=p:null),label:"States",density:"compact",placeholder:"Select State",items:e},null,8,["modelValue"])}}},Z={__name:"DemoAutocompleteBasic",setup(g){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(e,m)=>{const o=S;return h(),v(o,{label:"States",items:t,placeholder:"Select State"})}}},ee={ts:`<script setup lang="ts">
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = (query: string) => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`,js:`<script setup>
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = query => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`},ae={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
`},te={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
    closable-chips
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
    closable-chips
  />
</template>
`},oe={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
`},le={ts:`<script setup lang="ts">
const states = [
  { name: 'Florida', abbr: 'FL', id: 1 },
  { name: 'Georgia', abbr: 'GA', id: 2 },
  { name: 'Nebraska', abbr: 'NE', id: 3 },
  { name: 'California', abbr: 'CA', id: 4 },
  { name: 'New York', abbr: 'NY', id: 5 },
]

function customFilter(itemTitle: any, queryText: any, item: any) {
  const textOne = item.raw.name.toLowerCase()
  const textTwo = item.raw.abbr.toLowerCase()
  const searchText = queryText.toLowerCase()

  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const states = [
  {
    name: 'Florida',
    abbr: 'FL',
    id: 1,
  },
  {
    name: 'Georgia',
    abbr: 'GA',
    id: 2,
  },
  {
    name: 'Nebraska',
    abbr: 'NE',
    id: 3,
  },
  {
    name: 'California',
    abbr: 'CA',
    id: 4,
  },
  {
    name: 'New York',
    abbr: 'NY',
    id: 5,
  },
]

function customFilter(itemTitle, queryText, item) {
  const textOne = item.raw.name.toLowerCase()
  const textTwo = item.raw.abbr.toLowerCase()
  const searchText = queryText.toLowerCase()
  
  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
`},ie={ts:`<script setup lang="ts">
const select = ref('Florida')
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
`,js:`<script setup>
const select = ref('Florida')

const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
`},se={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
    eager
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
    eager
  />
</template>
`},re={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref(['Sandra Adams', 'Britta Holt'])

const people = [
  { name: 'Sandra Adams', group: 'Group 1', avatar: avatar1 },
  { name: 'Ali Connors', group: 'Group 1', avatar: avatar2 },
  { name: 'Trevor Hansen', group: 'Group 1', avatar: avatar3 },
  { name: 'Tucker Smith', group: 'Group 1', avatar: avatar4 },
  { name: 'Britta Holt', group: 'Group 2', avatar: avatar5 },
  { name: 'Jane Smith ', group: 'Group 2', avatar: avatar6 },
  { name: 'John Smith', group: 'Group 2', avatar: avatar7 },
  { name: 'Sandra Williams', group: 'Group 2', avatar: avatar8 },
]
<\/script>

<template>
  <AppAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    placeholder="Select User"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </AppAutocomplete>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref([
  'Sandra Adams',
  'Britta Holt',
])

const people = [
  {
    name: 'Sandra Adams',
    group: 'Group 1',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    group: 'Group 1',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    group: 'Group 1',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    group: 'Group 1',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    group: 'Group 2',
    avatar: avatar5,
  },
  {
    name: 'Jane Smith ',
    group: 'Group 2',
    avatar: avatar6,
  },
  {
    name: 'John Smith',
    group: 'Group 2',
    avatar: avatar7,
  },
  {
    name: 'Sandra Williams',
    group: 'Group 2',
    avatar: avatar8,
  },
]
<\/script>

<template>
  <AppAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    placeholder="Select User"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </AppAutocomplete>
</template>
`},ne={ts:`<script setup lang="ts">
const isEditing = ref(false)
const selectedState = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    placeholder="Select Your State"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="bx-building"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'bx-check-double' : 'bx-edit'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </AppAutocomplete>
</template>
`,js:`<script setup>
const isEditing = ref(false)
const selectedState = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    placeholder="Select Your State"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="bx-building"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'bx-check-double' : 'bx-edit'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </AppAutocomplete>
</template>
`},me={ts:`<script setup lang="ts">
const items = ['foo', 'bar', 'fizz', 'buzz']
const values = ref(['foo'])
const nameRules = [(v: string) => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <AppAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref(['foo'])
const nameRules = [v => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <AppAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>
`},pe={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="Solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="Outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="Underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="Filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="Plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="Solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="Outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="Underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="Filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="Plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`},ze={__name:"autocomplete",setup(g){return(t,e)=>{const m=Z,o=U,n=Q,p=X,i=K,d=J,b=B,C=j,V=Y,x=z,k=$,M=q;return h(),v(w,{class:"match-height"},{default:l(()=>[a(c,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Basic",code:ae},{default:l(()=>[e[0]||(e[0]=s("p",null,[r(" The "),s("code",null," v-autocomplete "),r(" component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically fetching information from an API. ")],-1)),a(m)]),_:1},8,["code"])]),_:1}),a(c,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Density",code:ie},{default:l(()=>[e[1]||(e[1]=s("p",null,[r(" You can use "),s("code",null," density "),r(" prop to adjusts vertical spacing within the component. Available options are: "),s("code",null,"default"),r(", "),s("code",null,"comfortable"),r(", and "),s("code",null,"compact"),r(". ")],-1)),a(n)]),_:1},8,["code"])]),_:1}),a(c,{cols:"12",md:"12"},{default:l(()=>[a(o,{title:"Variant",code:pe},{default:l(()=>[e[2]||(e[2]=s("p",null,[r("Use "),s("code",null,"Solo"),r(", "),s("code",null,"Outlined"),r(", "),s("code",null,"Underlined"),r(", "),s("code",null,"Filled"),r(" and "),s("code",null,"Plain"),r(" options of "),s("code",null,"variant"),r(" prop to change the look of Autocomplete. ")],-1)),a(p)]),_:1},8,["code"])]),_:1}),a(c,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Multiple",code:se},{default:l(()=>[e[3]||(e[3]=s("p",null,[r("Use "),s("code",null,"multiple"),r(" prop to select multiple. Accepts array for value")],-1)),a(i)]),_:1},8,["code"])]),_:1}),a(c,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Clearable",code:oe},{default:l(()=>[e[4]||(e[4]=s("p",null,[r("Use "),s("code",null,"clearable"),r(" prop to add input clear functionality.")],-1)),a(d)]),_:1},8,["code"])]),_:1}),a(c,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Chips",code:te},{default:l(()=>[e[5]||(e[5]=s("p",null,[r("Use "),s("code",null," chips "),r(" prop to use chips in select.")],-1)),a(b)]),_:1},8,["code"])]),_:1}),a(c,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Custom-Filter",code:le},{default:l(()=>[e[6]||(e[6]=s("p",null,[r("The "),s("code",null," custom-filter "),r(" prop can be used to filter each individual item with custom logic.In example we will filter state based on their name and abbreviations ")],-1)),a(C)]),_:1},8,["code"])]),_:1}),a(c,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Slots",code:re},{default:l(()=>[e[7]||(e[7]=s("p",null,"With the power of slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items using their props. ",-1)),a(V)]),_:1},8,["code"])]),_:1}),a(c,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Async items",code:ee},{default:l(()=>[e[8]||(e[8]=s("p",null,"Sometimes you need to load data externally based upon a search query. ",-1)),a(x)]),_:1},8,["code"])]),_:1}),a(c,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"State Selector",code:ne},{default:l(()=>[e[9]||(e[9]=s("p",null,"Using a combination of v-autocomplete slots and transitions, you can create a stylish toggle able autocomplete field such as below state selector.",-1)),a(k)]),_:1},8,["code"])]),_:1}),a(c,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"validation",code:me},{default:l(()=>[e[10]||(e[10]=s("p",null,[r("Use "),s("code",null,"rules"),r(" prop to validate autocomplete. Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.")],-1)),a(M)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ze as default};
