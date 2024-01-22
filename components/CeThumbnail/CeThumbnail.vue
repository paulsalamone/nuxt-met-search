<template>

  <li> 
  <div class="art-preview">
    <img :src="artwork.primaryImageSmall" :alt="artwork.title"/>
  <h5>"{{artwork.title}}"</h5>
    <h5 v-if="artwork.artistDisplayName !== ''">"{{artwork.artistDisplayName}}"</h5>

  </div>
<br/>
  </li>

</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

import { Props } from './CeThumbnail.model.ts'

const artwork = defineProps(Props)

console.log("artwork props:", artwork)
console.log('this.$props', this.$props)

</script>


<style lang="scss" scoped>
img {
  width: 250px;
}

.art-preview {
  display: flex;
  flex-direction: column;
  width: 300px;
}
</style>