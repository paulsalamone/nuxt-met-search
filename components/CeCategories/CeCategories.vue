<template>
  <nav>
  <ul>
  <!-- TODO: overflow / slider-->
  <li v-for="(category, index) in categories" :key="index">{{category}}</li>
  </ul>
  </nav>
</template>

<script setup lang="ts">

const categories = ["Abstract", "Ancient", "Impressionist", "Sculpture", "Fashion",
"Drawings", "Baroque", "Landscape", "Renaissance", "Pop Art", "Minimalism", "Abstract Expressionism"]

</script>

<style lang="scss" scoped>

nav {
  background-color: $c-gray;
  padding: $spacer-10;
  width: 100%;
  margin: $spacer-25 0;
  display: flex;
  justify-content: center;
}
ul {
  display: flex;

li {
  padding: $spacer-5 $spacer-10;
  background-color: $c-yellow;
  margin: 2px;
  border-radius: $spacer-5;
}

li:hover {
  cursor: pointer;
  background-color: $c-white;

}
}

</style>