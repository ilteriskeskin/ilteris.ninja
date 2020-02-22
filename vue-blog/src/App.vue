<template>
  <div id="app">
    <sideBar></sideBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Sidebar from "./components/Sidebar";

  export default {
    name: 'app',
    components: {
      sideBar: Sidebar,
    }
  }
</script>

<style>

</style>
