import{L as k,r as V,Z as h,o as v,c as g,d as a,v as R,m as r,b as e,e as s,f as b,I as D,y as I,cB as L,a2 as O,ak as _,aH as c,F as j,t as u}from"./index-CUvn4YAR.js";import{V as E}from"./VAvatar-BeWj6soD.js";import{V as p}from"./VSlider-H2DnUilw.js";import{a as Y}from"./VImg-DixWuppw.js";import{a as m,V as C}from"./VRow-C-JD8-Bt.js";import{V as S}from"./VTextField-szUz5uGX.js";import{_ as G}from"./AppTextField-0YfllUen.js";import{_ as N}from"./AppCardCode-C54xoV-L.js";import"./VSliderTrack-Dw_EGMFy.js";import"./VInput-Cl_xSrPg.js";import"./form-CfkoHHsY.js";/* empty css              *//* empty css                   */import"./VCounter-RzM6sknS.js";import"./VField-DTzRLJhk.js";import"./easing-CjukEv2V.js";import"./forwardRefs-C-GTDzx5.js";import"./vue3-perfect-scrollbar.esm-9V3Lamrz.js";import"./VCard-7xYVh7ib.js";import"./VCardTitle-DBwQgzAF.js";import"./VCardText-CoY-p6gH.js";import"./VDivider-DLfrfrXR.js";const H={class:"d-flex justify-space-between ma-4"},Z=["textContent"],z=40,T=218,q={__name:"DemoSliderAppendAndPrepend",setup(f){const o=V(40),t=V(!1),i=h(()=>o.value<100?"primary":o.value<125?"success":o.value<140?"info":o.value<175?"warning":"error"),n=h(()=>`${60/o.value}s`),l=()=>{o.value>z&&(o.value-=1)},d=()=>{o.value<T&&(o.value+=1)};return(y,x)=>(v(),g(j,null,[a("div",H,[a("div",null,[a("span",{class:"text-6xl font-weight-light",textContent:R(r(o))},null,8,Z),x[2]||(x[2]=a("span",{class:"subheading font-weight-light me-1"},"BPM",-1)),e(L,null,{default:s(()=>[r(t)?(v(),b(E,{key:0,color:r(i),style:D({animationDuration:r(n)}),class:"mb-1 v-avatar--metronome",size:"12"},null,8,["color","style"])):I("",!0)]),_:1})]),a("div",null,[e(_,{color:r(i),icon:"",elevation:"0",onClick:x[0]||(x[0]=w=>t.value=!r(t))},{default:s(()=>[e(O,{size:"large",icon:r(t)?"bx-pause":"bx-play"},null,8,["icon"])]),_:1},8,["color"])])]),e(p,{modelValue:r(o),"onUpdate:modelValue":x[1]||(x[1]=w=>c(o)?o.value=w:null),color:r(i),step:1,min:z,max:T,"track-color":"secondary"},{prepend:s(()=>[e(_,{size:"small",variant:"text",icon:"bx-minus",color:r(i),onClick:l},null,8,["color"])]),append:s(()=>[e(_,{size:"small",variant:"text",icon:"bx-plus",color:r(i),onClick:d},null,8,["color"])]),_:1},8,["modelValue","color"])],64))}},J=k(q,[["__scopeId","data-v-2c20346d"]]),K={class:"d-flex align-center justify-space-between"},Q={class:"d-flex align-center justify-space-between"},W={class:"d-flex align-center justify-space-between"},X={__name:"DemoSliderAppendTextField",setup(f){const o=V(161),t=V(105),i=V(225);return(n,l)=>(v(),g(j,null,[e(Y,{style:D({background:`rgb(${r(o)}, ${r(t)}, ${r(i)})`}),height:"150px"},null,8,["style"]),e(C,{class:"mt-5"},{default:s(()=>[e(m,{cols:"12"},{default:s(()=>[a("div",K,[l[6]||(l[6]=a("span",{class:"me-1"},"R",-1)),e(p,{modelValue:r(o),"onUpdate:modelValue":l[0]||(l[0]=d=>c(o)?o.value=d:null),max:255,step:1},null,8,["modelValue"]),e(S,{modelValue:r(o),"onUpdate:modelValue":l[1]||(l[1]=d=>c(o)?o.value=d:null),type:"number",placeholder:"10",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1}),e(m,{cols:"12"},{default:s(()=>[a("div",Q,[l[7]||(l[7]=a("span",{class:"me-1"},"G",-1)),e(p,{modelValue:r(t),"onUpdate:modelValue":l[2]||(l[2]=d=>c(t)?t.value=d:null),max:255,step:1},null,8,["modelValue"]),e(S,{modelValue:r(t),"onUpdate:modelValue":l[3]||(l[3]=d=>c(t)?t.value=d:null),type:"number",placeholder:"20",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1}),e(m,{cols:"12"},{default:s(()=>[a("div",W,[l[8]||(l[8]=a("span",{class:"me-1"},"B",-1)),e(p,{modelValue:r(i),"onUpdate:modelValue":l[4]||(l[4]=d=>c(i)?i.value=d:null),max:255,step:1},null,8,["modelValue"]),e(S,{modelValue:r(i),"onUpdate:modelValue":l[5]||(l[5]=d=>c(i)?i.value=d:null),type:"number",placeholder:"30",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1})]),_:1})],64))}},ee={__name:"DemoSliderVertical",setup(f){const o=V(10);return(t,i)=>(v(),b(p,{modelValue:r(o),"onUpdate:modelValue":i[0]||(i[0]=n=>c(o)?o.value=n:null),direction:"vertical"},null,8,["modelValue"]))}},le={__name:"DemoSliderTicks",setup(f){const o=V(0),t=V(1),i={0:"Figs",1:"Lemon",2:"Pear",3:"Apple"};return(n,l)=>(v(),b(C,null,{default:s(()=>[e(m,{cols:"12"},{default:s(()=>[l[4]||(l[4]=a("div",{class:"text-caption"}," Show ticks when using slider ",-1)),e(p,{modelValue:r(o),"onUpdate:modelValue":l[0]||(l[0]=d=>c(o)?o.value=d:null),step:10,"show-ticks":""},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:s(()=>[l[5]||(l[5]=a("div",{class:"text-caption"}," Always show ticks ",-1)),e(p,{modelValue:r(o),"onUpdate:modelValue":l[1]||(l[1]=d=>c(o)?o.value=d:null),step:10,"show-ticks":"always"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:s(()=>[l[6]||(l[6]=a("div",{class:"text-caption"}," Tick size ",-1)),e(p,{modelValue:r(o),"onUpdate:modelValue":l[2]||(l[2]=d=>c(o)?o.value=d:null),step:10,"show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:s(()=>[l[7]||(l[7]=a("div",{class:"text-caption"}," Tick labels ",-1)),e(p,{modelValue:r(t),"onUpdate:modelValue":l[3]||(l[3]=d=>c(t)?t.value=d:null),ticks:i,max:3,step:"1","show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1})]),_:1}))}},te={__name:"DemoSliderThumb",setup(f){const o=["😭","😢","😔","🙁","😐","🙂","😊","😁","😄","😍"],t=V(45);return(i,n)=>(v(),b(C,null,{default:s(()=>[e(m,{cols:"12"},{default:s(()=>[n[4]||(n[4]=a("div",{class:"text-caption"}," Show thumb when using slider ",-1)),e(p,{modelValue:r(t),"onUpdate:modelValue":n[0]||(n[0]=l=>c(t)?t.value=l:null),"thumb-label":""},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:s(()=>[n[5]||(n[5]=a("div",{class:"text-caption"}," Always show thumb label ",-1)),e(p,{modelValue:r(t),"onUpdate:modelValue":n[1]||(n[1]=l=>c(t)?t.value=l:null),"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:s(()=>[n[6]||(n[6]=a("div",{class:"text-caption"}," Custom thumb size ",-1)),e(p,{modelValue:r(t),"onUpdate:modelValue":n[2]||(n[2]=l=>c(t)?t.value=l:null),"thumb-size":30,"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:s(()=>[n[7]||(n[7]=a("div",{class:"text-caption"}," Custom thumb label ",-1)),e(p,{modelValue:r(t),"onUpdate:modelValue":n[3]||(n[3]=l=>c(t)?t.value=l:null),"thumb-label":"always"},{"thumb-label":s(({modelValue:l})=>[u(R(o[Math.min(Math.floor(l/10),9)]),1)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},oe={};function se(f,o){return v(),b(p,{step:10,"show-ticks":"","thumb-size":18,"tick-size":3,"track-size":2})}const ae=k(oe,[["render",se]]),ne={class:"d-flex justify-space-between"},ie={__name:"DemoSliderMinAndMax",setup(f){const o=V(-50),t=V(90),i=V(40);return(n,l)=>{const d=G;return v(),g("div",ne,[e(p,{modelValue:r(i),"onUpdate:modelValue":l[0]||(l[0]=y=>c(i)?i.value=y:null),max:r(t),min:r(o),step:1},null,8,["modelValue","max","min"]),e(d,{modelValue:r(i),"onUpdate:modelValue":l[1]||(l[1]=y=>c(i)?i.value=y:null),type:"number",placeholder:"10",style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])}}},re={__name:"DemoSliderValidation",setup(f){const o=V(30),t=[i=>i<=40||"Only 40 in stock"];return(i,n)=>(v(),b(p,{modelValue:r(o),"onUpdate:modelValue":n[0]||(n[0]=l=>c(o)?o.value=l:null),error:r(o)>40,rules:t,step:10,"thumb-label":"always","show-ticks":""},null,8,["modelValue","error"]))}},de={__name:"DemoSliderStep",setup(f){const o=V(0);return(t,i)=>(v(),b(p,{modelValue:r(o),"onUpdate:modelValue":i[0]||(i[0]=n=>c(o)?o.value=n:null),min:0,max:1,step:.2,"thumb-label":""},null,8,["modelValue"]))}},ue={__name:"DemoSliderIcons",setup(f){const o=V(0),t=V(0),i=V(10);return(n,l)=>(v(),b(C,null,{default:s(()=>[e(m,{cols:"12"},{default:s(()=>[e(p,{modelValue:r(o),"onUpdate:modelValue":l[0]||(l[0]=d=>c(o)?o.value=d:null),"prepend-icon":"bx-volume-full"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:s(()=>[e(p,{modelValue:r(t),"onUpdate:modelValue":l[1]||(l[1]=d=>c(t)?t.value=d:null),"append-icon":"bx-alarm"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:s(()=>[e(p,{modelValue:r(i),"onUpdate:modelValue":l[2]||(l[2]=d=>c(i)?i.value=d:null),"append-icon":"bx-minus","prepend-icon":"bx-plus"},null,8,["modelValue"])]),_:1})]),_:1}))}},me={__name:"DemoSliderColors",setup(f){const o=V(25),t=V(75),i=V(50);return(n,l)=>(v(),b(C,null,{default:s(()=>[e(m,{cols:"12"},{default:s(()=>[l[3]||(l[3]=a("div",{class:"text-caption"}," Color ",-1)),e(p,{modelValue:r(o),"onUpdate:modelValue":l[0]||(l[0]=d=>c(o)?o.value=d:null),color:"error"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:s(()=>[l[4]||(l[4]=a("div",{class:"text-caption"}," Track-color ",-1)),e(p,{modelValue:r(t),"onUpdate:modelValue":l[1]||(l[1]=d=>c(t)?t.value=d:null),"track-color":"error"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:s(()=>[l[5]||(l[5]=a("div",{class:"text-caption"}," Thumb-color ",-1)),e(p,{modelValue:r(i),"onUpdate:modelValue":l[2]||(l[2]=d=>c(i)?i.value=d:null),"thumb-color":"error","thumb-label":"always"},null,8,["modelValue"])]),_:1})]),_:1}))}},ce={};function pe(f,o){return v(),b(C,null,{default:s(()=>[e(m,{cols:"12"},{default:s(()=>[o[0]||(o[0]=a("div",{class:"text-caption"}," Disabled ",-1)),e(p,{disabled:"",label:"Disabled","model-value":30})]),_:1}),e(m,{cols:"12"},{default:s(()=>[o[1]||(o[1]=a("div",{class:"text-caption"}," Readonly ",-1)),e(p,{readonly:"",label:"Readonly","model-value":30})]),_:1})]),_:1})}const Ve=k(ce,[["render",pe]]),ve={__name:"DemoSliderBasic",setup(f){const o=V(30);return(t,i)=>(v(),b(C,null,{default:s(()=>[e(m,{cols:"12"},{default:s(()=>[e(p)]),_:1}),e(m,{cols:"12"},{default:s(()=>[e(p,{modelValue:r(o),"onUpdate:modelValue":i[0]||(i[0]=n=>c(o)?o.value=n:null)},null,8,["modelValue"])]),_:1})]),_:1}))}},fe={ts:`<script lang="ts" setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'

  return 'error'
})

const animationDuration = computed(() => {
  return \`\${60 / bpm.value}s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'bx-pause' : 'bx-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="bx-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="bx-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`,js:`<script setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'
  
  return 'error'
})

const animationDuration = computed(() => {
  return \`\${ 60 / bpm.value }s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'bx-pause' : 'bx-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="bx-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="bx-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`},be={ts:`<script lang="ts" setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(225)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">R</span>
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="redColorValue"
          type="number"
          placeholder="10"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">G</span>
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="greenColorValue"
          type="number"
          placeholder="20"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">B</span>
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          placeholder="30"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(225)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">R</span>
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="redColorValue"
          type="number"
          placeholder="10"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">G</span>
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="greenColorValue"
          type="number"
          placeholder="20"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">B</span>
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          placeholder="30"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>
  </VRow>
</template>
`},xe={ts:`<script setup lang="ts">
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`},Ce={ts:`<script lang="ts" setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`},ye={ts:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`},we={ts:`<script lang="ts" setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="bx-volume-full"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="bx-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="bx-minus"
        prepend-icon="bx-plus"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="bx-volume-full"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="bx-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="bx-minus"
        prepend-icon="bx-plus"
      />
    </VCol>
  </VRow>
</template>
`},_e={ts:`<script lang="ts" setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex justify-space-between">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <AppTextField
      v-model="slider"
      type="number"
      placeholder="10"
      style="max-inline-size: 5rem;"
    />
  </div>
</template>
`,js:`<script setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex justify-space-between">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <AppTextField
      v-model="slider"
      type="number"
      placeholder="10"
      style="max-inline-size: 5rem;"
    />
  </div>
</template>
`},Se={ts:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`,js:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`},ke={ts:`<script lang="ts" setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`,js:`<script setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`},ge={ts:`<script lang="ts" setup>
const satisfactionEmojis = ['😭', '😢', '😔', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']
const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const satisfactionEmojis = [
  '😭',
  '😢',
  '😔',
  '🙁',
  '😐',
  '🙂',
  '😊',
  '😁',
  '😄',
  '😍',
]

const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},he={ts:`<script lang="ts" setup>
const value = ref(0)
const fruits = ref(1)
const ticksLabels = { 0: 'Figs', 1: 'Lemon', 2: 'Pear', 3: 'Apple' }
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const value = ref(0)
const fruits = ref(1)

const ticksLabels = {
  0: 'Figs',
  1: 'Lemon',
  2: 'Pear',
  3: 'Apple',
}
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`},ze={ts:`<script lang="ts" setup>
const value = ref(30)
const rules = [(v: number) => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`,js:`<script setup>
const value = ref(30)
const rules = [v => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`},Te={ts:`<script lang="ts" setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`},Qe={__name:"slider",setup(f){return(o,t)=>{const i=ve,n=N,l=Ve,d=me,y=ue,x=de,w=re,$=ie,A=ae,U=te,B=le,F=ee,P=X,M=J;return v(),b(C,{class:"match-height"},{default:s(()=>[e(m,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Basic",code:xe},{default:s(()=>[t[0]||(t[0]=a("p",null,[u("The "),a("code",null,"v-slider"),u(" component is a better visualization of the number input.")],-1)),e(i)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Disabled and Readonly",code:ye},{default:s(()=>[t[1]||(t[1]=a("p",null,[u("You cannot interact with "),a("code",null,"disabled"),u(" and "),a("code",null,"readonly"),u(" sliders.")],-1)),e(l)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Colors",code:Ce},{default:s(()=>[t[2]||(t[2]=a("p",null,[u("You can set the colors of the slider using the props "),a("code",null,"color"),u(", "),a("code",null,"track-color"),u(" and "),a("code",null,"thumb-color"),u(".")],-1)),e(d)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Icons",code:we},{default:s(()=>[t[3]||(t[3]=a("p",null,[u("You can add icons to the slider with the "),a("code",null,"append-icon"),u(" and "),a("code",null,"prepend-icon"),u(" props.")],-1)),e(y)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Step",code:ke},{default:s(()=>[t[4]||(t[4]=a("p",null,[u("Using the "),a("code",null,"step"),u(" prop you can control the precision of the slider, and how much it should move each step.")],-1)),e(x)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Validation",code:ze},{default:s(()=>[t[5]||(t[5]=a("p",null,[u("Vuetify includes simple validation through the "),a("code",null,"rules"),u(" prop.")],-1)),e(w)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Min and Max",code:_e},{default:s(()=>[t[6]||(t[6]=a("p",null,[u("You can set "),a("code",null,"min"),u(" and "),a("code",null,"max"),u(" values of sliders.")],-1)),e($)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Size",code:Se},{default:s(()=>[t[7]||(t[7]=a("p",null,[u("Use "),a("code",null,"thumb-size"),u(", "),a("code",null,"tick-size"),u(", and "),a("code",null,"track-size"),u(" prop to increase and decrease the size of thumb, tick and track. ")],-1)),e(A)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Thumb",code:ge},{default:s(()=>[t[8]||(t[8]=a("p",null,[u("You can display a thumb label while sliding or always with the "),a("code",null,"thumb-label"),u(" prop.")],-1)),e(U)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Ticks",code:he},{default:s(()=>[t[9]||(t[9]=a("p",null,"Tick marks represent predetermined values to which the user can move the slider.",-1)),e(B)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Vertical",code:Te},{default:s(()=>[t[10]||(t[10]=a("p",null,[u(" You can use the "),a("code",null,"vertical"),u(" prop to switch sliders to a vertical orientation. ")],-1)),e(F)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Append text field",code:be},{default:s(()=>[t[11]||(t[11]=a("p",null,[u("Sliders can be combined with other components in its "),a("code",null,"append"),u(" slot, such as "),a("code",null,"v-text-field"),u(", to add additional functionality to the component.")],-1)),e(P)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:s(()=>[e(n,{title:"Append and prepend",code:fe},{default:s(()=>[t[12]||(t[12]=a("p",null,[u("Use slots such as "),a("code",null,"append"),u(" and "),a("code",null,"prepend"),u(" to easily customize the "),a("code",null,"v-slider"),u(" to fit any situation.")],-1)),e(M)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Qe as default};
