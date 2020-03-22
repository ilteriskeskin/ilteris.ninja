<template>
  <div id="app" class="main">
    <div class="container">
      <VueIntroduction v-if="id == 1"></VueIntroduction>
      <CoronaCounterApp v-if="id == 2"></CoronaCounterApp>
    </div>
  </div>
</template>

<script>
  import VueIntroduction from "./posts/VueIntroduction";
  import CoronaCounterApp from "./posts/CoronaCounterApp";

  export default {
    name: "Post",

    components: {
      VueIntroduction,
      CoronaCounterApp,
    },

    data() {
      return {
        id: this.$route.params.id,
      }
    },

    watch: {
      '$route'(to, from) {
        this.id = to.params.id;
      },
    },
  }
</script>

<style scoped>
  .main {
    margin-bottom: calc(15% + 10px);
  }

</style>
