<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <footers></footers>
  </div>
</template>

<script>
  import navbar from './components/Navbar';
  import footer from './components/Footer';

  export default {
    name: 'app',
    components: {
      'navbar': navbar,
      'footers': footer
    }
  }
</script>

<style>

  body {
    background-color: #f2f2f2;
  }

</style>
