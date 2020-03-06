<template>
  <div id="app" class="main">
    <div class="container">

      <new1></new1>
      <router-link :to="{ name: 'Post', params: { id: 1 } }">Devamını Oku</router-link>
      <hr class="homeHr">

      <!--      <router-link :to="{ name: 'Post', params: { id: 1 } }">Devamını Oku</router-link>-->


    </div>
  </div>
</template>

<script>
  import new1 from '../articles/new1.md';

  export default {
    name: "Home",
    components: {
      new1,
    },

    data() {
      return {
        id: 0,
      }
    },
  }
</script>

<style scoped>

  .homeHr {
    border: 4px solid #343a40;
    border-radius: 4px;
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .main {
    margin-bottom: calc(7% + 10px);
  }

</style>
