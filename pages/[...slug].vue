<template>
<div>
  <p>PAGE: {{ $route.params.slug ? $route.params.slug : "index" }}</p>
</div>
</template>


<script setup lang="ts">
import { onMounted, provide, ref, toRaw } from 'vue';
import { useSiteStore } from "../stores/SiteStore.ts";

// const store = useSiteStore()

// console.log('store.test.value: ', store.test.value)

// useAsyncData('navigation', () => store.fetchNavigation(context))



</script>