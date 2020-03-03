<template>
  <div id="app">
    <div class="container">

      <new1></new1>
      <router-link :to="postsLink(1)">Devamını Oku</router-link>

      <hr class="homeHr">

      <new2></new2>
      <router-link :to="postsLink(2)">Devamını Oku</router-link>

    </div>
  </div>
</template>

<script>
  import new1 from './articles/new1.md';
  import new2 from './articles/new2.md';

  export default {
    name: "Home",
    components: {
      new1,
      new2,
    },
    data() {
      return {
        id: 0,
      }
    },

    methods: {
      postsLink(id) {
        this.id = id;
        return `/posts/${id}/post`;
      },
    }
  }
</script>

<style scoped>

  .homeHr {
    border: 4px solid #343a40;
    border-radius: 4px;
    margin-top: 5%;
    margin-bottom: 5%;
  }

</style>
