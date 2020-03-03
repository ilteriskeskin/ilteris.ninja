<template>
  <div>
    <div class="div-footer">
      <p>
        aliilteriskeskin@gmail.com | @ilteriskeskin
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  * {
    margin: 0 auto;
    padding: 0;
  }

  .div-footer {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 6%;
    color: #f2f2f2;
    background-color: #343a40;
  }
</style>
