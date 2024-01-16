<template>
<div>
  <p>PAGE: {{ $route.params.slug ? $route.params.slug : "index" }}</p>
  <!-- <p>metObjects ref: {{ metObjectsRef?.total ? metObjectsRef.total : "wait..." }}</p> -->
  <!-- <p>randomObjectsRef: {{ randomObjectsRef?.length ? randomObjectsRef : "waiting..."}}</p> -->
  <!-- <p>store.randomObjects: {{store.randomObjects ? store.randomObjects : 'objects go here'}}</p>
  <p>updatedRandomObjectsRef: {{updatedRandomObjectsRef ?  updatedRandomObjectsRef : "getter"}}</p> -->

<ol>
  <li v-for="(object, index) in randomObjectsRef" :key="index">{{object.title}}</li>
  
  </ol>


</div>
</template>


<script setup lang="ts">
import { onMounted, beforeMount, provide, ref, toRaw, watch } from 'vue';
import { useSiteStore } from "@/stores/SiteStore.ts";

const runtimeConfig = useRuntimeConfig()
const { apiBase, metObjectsPath } = runtimeConfig.public

const store = useSiteStore()


  useAsyncData('objects', () => store.fetchMetObjects(apiBase, metObjectsPath))

const metObjectsRef = ref(null)

const randomObjectsRef = ref(null)

const updatedRandomObjectsRef = ref(store.updatedRandomObjects)
watch(randomObjectsRef, (val) => {
  console.log('randomObjectsRef val:', val)
  
})

onMounted(()=>{
  if (typeof window === 'undefined') {
      // This is the server
      console.log('Running on the server');
    } else {
      // This is the client
      console.log('Running on the client');

      metObjectsRef.value = store.metObjects
      randomObjectsRef.value = store.randomObjects
    
    }
})

</script>