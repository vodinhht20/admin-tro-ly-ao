import{a4 as z,b9 as K,ba as Q,bb as X,bI as _,bd as h,as as aa,be as ta,at as ea,bl as na,bf as la,bL as ia,bm as oa,r as d,a7 as E,R as sa,dD as ra,bZ as ca,cI as ba,b_ as ua,w as M,G as ma,dE as ka,Z as da,ab as Va,b as t,bP as Sa,aW as pa,by as fa,q as j,b$ as va,aL as Ba,o as g,c as T,e,t as n,ak as k,m as S,aH as p,a2 as y,F as $,f as xa,d as V}from"./index-CUvn4YAR.js";import{m as ya,V as q}from"./VOverlay-BIXCnhE5.js";import{f as ga}from"./forwardRefs-C-GTDzx5.js";import{u as Ia}from"./scopeId-BHLx50Fr.js";import{_ as Ta}from"./AppCardCode-C54xoV-L.js";import{V as wa,a as I}from"./VRow-C-JD8-Bt.js";import"./easing-CjukEv2V.js";import"./delay-dq4ZUyAJ.js";import"./lazy-DC9nxbjh.js";import"./VImg-DixWuppw.js";import"./vue3-perfect-scrollbar.esm-9V3Lamrz.js";import"./VCard-7xYVh7ib.js";import"./VCardTitle-DBwQgzAF.js";import"./VAvatar-BeWj6soD.js";import"./VCardText-CoY-p6gH.js";import"./VDivider-DLfrfrXR.js";/* empty css              */function Ca(b){const i=E(b);let o=-1;function a(){clearInterval(o)}function r(){a(),Ba(()=>i.value=b)}function c(v){const s=v?getComputedStyle(v):{transitionDuration:.2},m=parseFloat(s.transitionDuration)*1e3||200;if(a(),i.value<=0)return;const x=performance.now();o=window.setInterval(()=>{const w=performance.now()-x+m;i.value=Math.max(b-w,0),i.value<=0&&a()},m)}return va(a),{clear:a,time:i,start:c,reset:r}}const $a=z({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...K({location:"bottom"}),...Q(),...X(),..._(),...h(),...aa(ya({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),f=ta()({name:"VSnackbar",props:$a(),emits:{"update:modelValue":b=>!0},setup(b,i){let{slots:o}=i;const a=ea(b,"modelValue"),{positionClasses:r}=na(b),{scopeId:c}=Ia(),{themeClasses:v}=la(b),{colorClasses:s,colorStyles:m,variantClasses:x}=ia(b),{roundedClasses:w}=oa(b),l=Ca(Number(b.timeout)),u=d(),F=d(),U=E(!1),R=E(0),L=d(),H=sa(ra,void 0);ca(()=>!!H,()=>{const B=ba();ua(()=>{L.value=B.mainStyles.value})}),M(a,O),M(()=>b.timeout,O),ma(()=>{a.value&&O()});let P=-1;function O(){l.reset(),window.clearTimeout(P);const B=Number(b.timeout);if(!a.value||B===-1)return;const C=ka(F.value);l.start(C),P=window.setTimeout(()=>{a.value=!1},B)}function N(){l.reset(),window.clearTimeout(P)}function W(){U.value=!0,N()}function J(){U.value=!1,O()}function Y(B){R.value=B.touches[0].clientY}function G(B){Math.abs(R.value-B.changedTouches[0].clientY)>50&&(a.value=!1)}const Z=da(()=>b.location.split(" ").reduce((B,C)=>(B[`v-snackbar--${C}`]=!0,B),{}));return Va(()=>{const B=q.filterProps(b),C=!!(o.default||o.text||b.text);return t(q,j({ref:u,class:["v-snackbar",{"v-snackbar--active":a.value,"v-snackbar--multi-line":b.multiLine&&!b.vertical,"v-snackbar--timer":!!b.timer,"v-snackbar--vertical":b.vertical},Z.value,r.value,b.class],style:[L.value,b.style]},B,{modelValue:a.value,"onUpdate:modelValue":D=>a.value=D,contentProps:j({class:["v-snackbar__wrapper",v.value,s.value,w.value,x.value],style:[m.value],onPointerenter:W,onPointerleave:J},B.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0,onTouchstartPassive:Y,onTouchend:G},c),{default:()=>{var D,A;return[Sa(!1,"v-snackbar"),b.timer&&!U.value&&t("div",{key:"timer",class:"v-snackbar__timer"},[t(pa,{ref:F,color:typeof b.timer=="string"?b.timer:"info",max:b.timeout,"model-value":l.time.value},null)]),C&&t("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((D=o.text)==null?void 0:D.call(o))??b.text,(A=o.default)==null?void 0:A.call(o)]),o.actions&&t(fa,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[t("div",{class:"v-snackbar__actions"},[o.actions({isActive:a})])]})]},activator:o.activator})}),ga({},u)}}),Oa={class:"demo-space-x"},Da={__name:"DemoSnackbarTransition",setup(b){const i=d(!1),o=d(!1),a=d(!1);return(r,c)=>(g(),T("div",Oa,[t(k,{onClick:c[0]||(c[0]=v=>i.value=!0)},{default:e(()=>c[6]||(c[6]=[n(" fade snackbar ")])),_:1}),t(f,{modelValue:S(i),"onUpdate:modelValue":c[1]||(c[1]=v=>p(i)?i.value=v:null),transition:"fade-transition",location:"top start"},{default:e(()=>c[7]||(c[7]=[n(" I'm a fade transition snackbar. ")])),_:1},8,["modelValue"]),t(k,{onClick:c[2]||(c[2]=v=>o.value=!0)},{default:e(()=>c[8]||(c[8]=[n(" Scale snackbar ")])),_:1}),t(f,{modelValue:S(o),"onUpdate:modelValue":c[3]||(c[3]=v=>p(o)?o.value=v:null),transition:"scale-transition",location:"bottom end"},{default:e(()=>c[9]||(c[9]=[n(" I'm a scale transition snackbar. ")])),_:1},8,["modelValue"]),t(k,{onClick:c[4]||(c[4]=v=>a.value=!0)},{default:e(()=>c[10]||(c[10]=[n(" scroll y reverse ")])),_:1}),t(f,{modelValue:S(a),"onUpdate:modelValue":c[5]||(c[5]=v=>p(a)?a.value=v:null),transition:"scroll-y-reverse-transition",location:"top end"},{default:e(()=>c[11]||(c[11]=[n(" I'm a scroll y reverse transition snackbar. ")])),_:1},8,["modelValue"])]))}},Ua={class:"demo-space-x"},Pa={__name:"DemoSnackbarVariants",setup(b){const i=d(!1),o=d(!1),a=d(!1),r=d(!1),c=d(!1);return(v,s)=>(g(),T("div",Ua,[t(k,{onClick:s[0]||(s[0]=m=>i.value=!0)},{default:e(()=>s[10]||(s[10]=[n(" Default ")])),_:1}),t(f,{modelValue:S(i),"onUpdate:modelValue":s[1]||(s[1]=m=>p(i)?i.value=m:null),location:"top start"},{default:e(()=>s[11]||(s[11]=[n(" Jelly chocolate bar candy canes apple pie. ")])),_:1},8,["modelValue"]),t(k,{onClick:s[2]||(s[2]=m=>o.value=!0)},{default:e(()=>s[12]||(s[12]=[n(" tonal ")])),_:1}),t(f,{modelValue:S(o),"onUpdate:modelValue":s[3]||(s[3]=m=>p(o)?o.value=m:null),location:"top end",variant:"tonal"},{default:e(()=>s[13]||(s[13]=[n(" Ice cream cake candy canes. ")])),_:1},8,["modelValue"]),t(k,{onClick:s[4]||(s[4]=m=>a.value=!0)},{default:e(()=>s[14]||(s[14]=[n(" Text ")])),_:1}),t(f,{modelValue:S(a),"onUpdate:modelValue":s[5]||(s[5]=m=>p(a)?a.value=m:null),location:"end center",variant:"text"},{default:e(()=>s[15]||(s[15]=[n(" Pie icing biscuit soufflé liquorice topping. ")])),_:1},8,["modelValue"]),t(k,{onClick:s[6]||(s[6]=m=>r.value=!0)},{default:e(()=>s[16]||(s[16]=[n(" Outlined ")])),_:1}),t(f,{modelValue:S(r),"onUpdate:modelValue":s[7]||(s[7]=m=>p(r)?r.value=m:null),location:"bottom end",variant:"outlined",color:"error"},{default:e(()=>s[17]||(s[17]=[n(" Oat cake caramels sesame snaps candy. ")])),_:1},8,["modelValue"]),t(k,{onClick:s[8]||(s[8]=m=>c.value=!0)},{default:e(()=>s[18]||(s[18]=[n(" Flat ")])),_:1}),t(f,{modelValue:S(c),"onUpdate:modelValue":s[9]||(s[9]=m=>p(c)?c.value=m:null),location:"bottom start",variant:"flat",color:"error"},{default:e(()=>s[19]||(s[19]=[n(" Oat cake caramels sesame snaps candy. ")])),_:1},8,["modelValue"])]))}},Ea={class:"demo-space-x"},Fa={__name:"DemoSnackbarPosition",setup(b){const i=d(!1),o=d(!1),a=d(!1),r=d(!1),c=d(!1),v=d(!1),s=d(!1),m=d(!1),x=d(!1);return(w,l)=>(g(),T("div",Ea,[t(k,{icon:"",variant:"text",onClick:l[0]||(l[0]=u=>o.value=!0)},{default:e(()=>[t(y,{icon:"bx-up-arrow-alt"})]),_:1}),t(f,{modelValue:S(o),"onUpdate:modelValue":l[1]||(l[1]=u=>p(o)?o.value=u:null),location:"top"},{default:e(()=>l[18]||(l[18]=[n(" I'm a top snackbar. ")])),_:1},8,["modelValue"]),t(k,{icon:"",variant:"text",onClick:l[2]||(l[2]=u=>a.value=!0)},{default:e(()=>[t(y,{icon:"mdi-arrow-top-right"})]),_:1}),t(f,{modelValue:S(a),"onUpdate:modelValue":l[3]||(l[3]=u=>p(a)?a.value=u:null),location:"top end"},{default:e(()=>l[19]||(l[19]=[n(" I'm a top right snackbar. ")])),_:1},8,["modelValue"]),t(k,{icon:"",variant:"text",onClick:l[4]||(l[4]=u=>s.value=!0)},{default:e(()=>[t(y,{icon:"bx-right-arrow-alt"})]),_:1}),t(f,{modelValue:S(s),"onUpdate:modelValue":l[5]||(l[5]=u=>p(s)?s.value=u:null),location:"end center"},{default:e(()=>l[20]||(l[20]=[n(" I'm a center end snackbar. ")])),_:1},8,["modelValue"]),t(k,{icon:"",variant:"text",onClick:l[6]||(l[6]=u=>r.value=!0)},{default:e(()=>[t(y,{icon:"mdi-arrow-bottom-right"})]),_:1}),t(f,{modelValue:S(r),"onUpdate:modelValue":l[7]||(l[7]=u=>p(r)?r.value=u:null),location:"bottom end"},{default:e(()=>l[21]||(l[21]=[n(" I'm a bottom end snackbar. ")])),_:1},8,["modelValue"]),t(k,{icon:"",variant:"text",onClick:l[8]||(l[8]=u=>c.value=!0)},{default:e(()=>[t(y,{icon:"bx-down-arrow-alt"})]),_:1}),t(f,{modelValue:S(c),"onUpdate:modelValue":l[9]||(l[9]=u=>p(c)?c.value=u:null)},{default:e(()=>l[22]||(l[22]=[n(" I'm a bottom snackbar. ")])),_:1},8,["modelValue"]),t(k,{icon:"",variant:"text",onClick:l[10]||(l[10]=u=>v.value=!0)},{default:e(()=>[t(y,{icon:"mdi-arrow-bottom-left"})]),_:1}),t(f,{modelValue:S(v),"onUpdate:modelValue":l[11]||(l[11]=u=>p(v)?v.value=u:null),location:"bottom start"},{default:e(()=>l[23]||(l[23]=[n(" I'm a bottom start snackbar. ")])),_:1},8,["modelValue"]),t(k,{icon:"",variant:"text",onClick:l[12]||(l[12]=u=>m.value=!0)},{default:e(()=>[t(y,{icon:"bx-left-arrow-alt"})]),_:1}),t(f,{modelValue:S(m),"onUpdate:modelValue":l[13]||(l[13]=u=>p(m)?m.value=u:null),location:"start center"},{default:e(()=>l[24]||(l[24]=[n(" I'm a center start snackbar. ")])),_:1},8,["modelValue"]),t(k,{icon:"",variant:"text",onClick:l[14]||(l[14]=u=>i.value=!0)},{default:e(()=>[t(y,{icon:"mdi-arrow-top-left"})]),_:1}),t(f,{modelValue:S(i),"onUpdate:modelValue":l[15]||(l[15]=u=>p(i)?i.value=u:null),location:"top start"},{default:e(()=>l[25]||(l[25]=[n(" I'm a top start snackbar. ")])),_:1},8,["modelValue"]),t(k,{icon:"",variant:"text",onClick:l[16]||(l[16]=u=>x.value=!0)},{default:e(()=>[t(y,{icon:"mdi-arrow-collapse-all"})]),_:1}),t(f,{modelValue:S(x),"onUpdate:modelValue":l[17]||(l[17]=u=>p(x)?x.value=u:null),location:"center"},{default:e(()=>l[26]||(l[26]=[n(" I'm a center snackbar. ")])),_:1},8,["modelValue"])]))}},Ra={__name:"DemoSnackbarVertical",setup(b){const i=d(!1);return(o,a)=>(g(),T($,null,[t(k,{onClick:a[0]||(a[0]=r=>i.value=!0)},{default:e(()=>a[4]||(a[4]=[n(" Open Snackbar ")])),_:1}),t(f,{modelValue:S(i),"onUpdate:modelValue":a[3]||(a[3]=r=>p(i)?i.value=r:null),vertical:""},{actions:e(()=>[t(k,{color:"success",onClick:a[1]||(a[1]=r=>i.value=!1)},{default:e(()=>a[5]||(a[5]=[n(" Undo ")])),_:1}),t(k,{color:"error",onClick:a[2]||(a[2]=r=>i.value=!1)},{default:e(()=>a[6]||(a[6]=[n(" Close ")])),_:1})]),default:e(()=>[a[7]||(a[7]=n(" Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy. "))]),_:1},8,["modelValue"])],64))}},La={__name:"DemoSnackbarTimeout",setup(b){const i=d(!1);return(o,a)=>(g(),T($,null,[t(k,{onClick:a[0]||(a[0]=r=>i.value=!0)},{default:e(()=>a[2]||(a[2]=[n(" Open Snackbar ")])),_:1}),t(f,{modelValue:S(i),"onUpdate:modelValue":a[1]||(a[1]=r=>p(i)?i.value=r:null),timeout:2e3},{default:e(()=>a[3]||(a[3]=[n(" My timeout is set to 2000. ")])),_:1},8,["modelValue"])],64))}},Aa={__name:"DemoSnackbarMultiLine",setup(b){const i=d(!1);return(o,a)=>(g(),T($,null,[t(k,{onClick:a[0]||(a[0]=r=>i.value=!0)},{default:e(()=>a[3]||(a[3]=[n(" Open Snackbar ")])),_:1}),t(f,{modelValue:S(i),"onUpdate:modelValue":a[2]||(a[2]=r=>p(i)?i.value=r:null),"multi-line":""},{actions:e(()=>[t(k,{color:"error",onClick:a[1]||(a[1]=r=>i.value=!1)},{default:e(()=>a[4]||(a[4]=[n(" Close ")])),_:1})]),default:e(()=>[a[5]||(a[5]=n(" I am a multi-line snackbar. I can have more than one line. This is another line that is quite long. "))]),_:1},8,["modelValue"])],64))}},Ma={__name:"DemoSnackbarWithAction",setup(b){const i=d(!1);return(o,a)=>(g(),T($,null,[t(k,{onClick:a[0]||(a[0]=r=>i.value=!0)},{default:e(()=>a[3]||(a[3]=[n(" Open Snackbar ")])),_:1}),t(f,{modelValue:S(i),"onUpdate:modelValue":a[2]||(a[2]=r=>p(i)?i.value=r:null)},{actions:e(()=>[t(k,{color:"error",onClick:a[1]||(a[1]=r=>i.value=!1)},{default:e(()=>a[4]||(a[4]=[n(" Close ")])),_:1})]),default:e(()=>[a[5]||(a[5]=n(" Hello, I'm a snackbar with actions. "))]),_:1},8,["modelValue"])],64))}},ja={__name:"DemoSnackbarBasic",setup(b){const i=d(!1);return(o,a)=>(g(),T($,null,[t(k,{onClick:a[0]||(a[0]=r=>i.value=!0)},{default:e(()=>a[2]||(a[2]=[n(" Open Snackbar ")])),_:1}),t(f,{modelValue:S(i),"onUpdate:modelValue":a[1]||(a[1]=r=>p(i)?i.value=r:null)},{default:e(()=>a[3]||(a[3]=[n(" Hello, I'm a snackbar ")])),_:1},8,["modelValue"])],64))}},qa={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`},Ha={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},Na={ts:`<script lang="ts" setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="bx-up-arrow-alt" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="mdi-arrow-top-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="bx-right-arrow-alt" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="bx-down-arrow-alt" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="bx-left-arrow-alt" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="mdi-arrow-top-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="mdi-arrow-collapse-all" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="bx-up-arrow-alt" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="mdi-arrow-top-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="bx-right-arrow-alt" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="bx-down-arrow-alt" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="bx-left-arrow-alt" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="mdi-arrow-top-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="mdi-arrow-collapse-all" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`},Wa={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`},Ja={ts:`<script lang="ts" setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`},Ya={ts:`<script lang="ts" setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`},Ga={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},Za={ts:`<script lang="ts" setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},ut={__name:"snackbar",setup(b){return(i,o)=>{const a=ja,r=Ta,c=Ma,v=Aa,s=La,m=Ra,x=Fa,w=Pa,l=Da;return g(),xa(wa,{class:"match-height"},{default:e(()=>[t(I,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Basic",code:qa},{default:e(()=>[o[0]||(o[0]=V("p",null,[n("The "),V("code",null,"v-snackbar"),n(" component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.")],-1)),t(a)]),_:1},8,["code"])]),_:1}),t(I,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"With Action",code:Za},{default:e(()=>[o[1]||(o[1]=V("p",null,[n("Use "),V("code",null,"actions"),n(" slot to add action button. A "),V("code",null,"v-snackbar"),n(" in its simplest form displays a temporary and closable notification to the user.")],-1)),t(c)]),_:1},8,["code"])]),_:1}),t(I,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Multi Line",code:Ha},{default:e(()=>[o[2]||(o[2]=V("p",null,[n("The "),V("code",null,"multi-line"),n(" property extends the height of the "),V("code",null,"v-snackbar"),n(" to give you a little more room for content.")],-1)),t(v)]),_:1},8,["code"])]),_:1}),t(I,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Timeout",code:Wa},{default:e(()=>[o[3]||(o[3]=V("p",null,[n("The "),V("code",null,"timeout"),n(" property lets you customize the delay before the "),V("code",null,"v-snackbar"),n(" is hidden.")],-1)),t(s)]),_:1},8,["code"])]),_:1}),t(I,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Vertical",code:Ga},{default:e(()=>[o[4]||(o[4]=V("p",null,[n("The "),V("code",null,"vertical"),n(" property allows you to stack the content of your "),V("code",null,"v-snackbar"),n(".")],-1)),t(m)]),_:1},8,["code"])]),_:1}),t(I,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Position",code:Na},{default:e(()=>[o[5]||(o[5]=V("p",null,[n("Use "),V("code",null,"location"),n(" prop to change the position of snackbar.")],-1)),t(x)]),_:1},8,["code"])]),_:1}),t(I,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Variants",code:Ya},{default:e(()=>[o[6]||(o[6]=V("p",null,[n("Apply different styles to the snackbar using props such as "),V("code",null,"shaped"),n(", "),V("code",null,"rounded"),n(", "),V("code",null,"color"),n(", "),V("code",null,"text"),n(", "),V("code",null,"outlined"),n(", "),V("code",null,"tile"),n(" and more.")],-1)),t(w)]),_:1},8,["code"])]),_:1}),t(I,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Transition",code:Ja},{default:e(()=>[o[7]||(o[7]=V("p",null,"Use transition prop to sets the component transition.",-1)),t(l)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ut as default};
