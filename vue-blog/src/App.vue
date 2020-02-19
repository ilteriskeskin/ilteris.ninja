<template>
  <div id="app" class="container">
    <router-link to="/">Home</router-link>
    <router-link to="/foo">Foo</router-link>
    <router-link to="/bar">Bar</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  margin-top: 100px;
}
</style>
