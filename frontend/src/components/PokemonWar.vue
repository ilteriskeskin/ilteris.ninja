<template>
  <div id="app" class="main">
    <div class="container">
      <h3 class="postTitle">Pokemon savaşları hazırlanıyor...</h3>
      <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="23"
             aria-valuemin="0" aria-valuemax="100" style="width: 23%"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PokemonWar",
    data() {
      return {
        value: 32,
        max: 100,
      }
    }
  }
</script>

<style scoped>

  .main {
    margin-top: 10%;
    margin-bottom: calc(15% + 10px);
  }

  .postTitle {
    font-weight: bold;
    margin-bottom: 20px;
    color: #f2f2f2;
  }

</style>
