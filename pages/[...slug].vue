<template>
<div>
  <p>PAGE: {{ $route.params.slug ? $route.params.slug : "index" }}</p>

<h3>Random Selections:</h3>
<ul v-if="store.loaded">
  <li v-for="(object, index) in randomObjectsRef" :key="index">
  <div class="art-preview">
    <img :src="object.primaryImageSmall" :alt="object.title"/>
  <h5>"{{object.title}}"</h5>
    <h5 v-if="object.artistDisplayName !== ''">"{{object.artistDisplayName}}"</h5>

  </div>

  </li>
  
  </ul>
  


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

<style lang="scss" scoped>

ul {
  display: flex;
}

img {
  width: 250px;
}

.art-preview {
  display: flex;
  flex-direction: column;
  width: 300px;
}
</style>