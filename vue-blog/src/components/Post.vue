<template>
  <div id="app" class="main">
    <div class="container">

    </div>
  </div>
</template>

<script>
  export default {
    name: "Post",

    data() {
      return {
        id: this.$route.params.id,
      }
    },

    watch: {
      '$route'(to, from) {
        this.id = to.params.id;
      },
    }
  }
</script>

<style scoped>

</style>
