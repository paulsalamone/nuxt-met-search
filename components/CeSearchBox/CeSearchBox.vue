<template>
  <div class="search-box">
    <div class="box">
    <form type="submit">
    <button>🔎</button>
        <input type="text" />

    </form>
    
    </div>

  <div class="favorites">❤️</div>
  </div>

</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>

.search-box {
display: flex;
align-items: center;
justify-content: center;
}


form {
    border: 2px solid $c-gray;
    border-radius: 20px;
    width: 100%;

    input {
        padding: $spacer-10;
        font-size: 1.5rem;
        width: 80%;
        border: none;
    }

    button {
    @include button-rounded;
}
}



.box {
    width: 50%;
}
    .favorites {
        position: absolute;
        right: 100px;
    }
</style>