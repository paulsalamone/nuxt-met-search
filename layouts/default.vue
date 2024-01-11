<template>
  <div>
    <header>
      <CeTopBar />
      <CeSearchBox />
      <CeCategories />
    </header>
    <main>
    <slot />
    </main>
    <CeFooter />
  </div>
</template>


<style lang="scss" >
main {
      background-color: $c-bright-white;
  padding: 0 $spacer-50;
}
</style>