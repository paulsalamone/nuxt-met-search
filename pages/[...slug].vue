<template>
<div>

<h4>Random selections from the archive:</h4>

<ul v-if="store.loaded">
<!-- eventually make these a Cx_swiper?! -->

  <li v-for="(object, index) in randomObjectsRef" :key="index">
  <div class="art-preview">
    <img :src="object.primaryImageSmall" :alt="object.title"/>
  <h6>"{{object.title}}"</h6>
    <p v-if="object.artistDisplayName !== ''">{{object.artistDisplayName}}</p>

  </div>

  </li>
  
  </ul>
  
  <ul>
  <!-- <CeThumbnail v-for="(artwork, index) in randomObjectsRef" :key="index" :artwork="artwork"/> -->
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


const randomObjectsRef = ref(null)



onMounted(()=>{
  if (typeof window === 'undefined') {
      // This is the server
      console.log('Running on the server');
    } else {
      // This is the client
      console.log('Running on the client');

// TODO 
    if(!store.hasRandomArt){
      randomObjectsRef.value = store.randomObjects;
      const serializedObj = JSON.stringify(randomObjectsRef.value);
      localStorage.setItem("savedRandomArt", serializedObj);

    } else {
      console.log('getting random art from LS')
      randomObjectsRef.value = JSON.parse(localStorage.getItem("savedRandomArt"));

    }
      
    
    }
})

</script>

<style lang="scss" scoped>

ul {
  display: flex;
}

h4 {
  text-align: center;
  margin-bottom: $spacer-25;
}

</style>