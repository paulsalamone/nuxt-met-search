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
