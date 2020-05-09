<template>
  <div id="app" class="main">
    <div class="container">
      <h3 class="postTitle">&#128035; Şey Ayracı</h3>
      <input type="text" class="form-control" v-model="text">
      <br>
      <button class="btn btn-danger" @click="sey">Düzelt</button>
      <br><br>
      <h4 class="postContent">{{ newText }}</h4>
      <br>
      <p class="postContent">Projenin Github Adresi: <a
        href="https://github.com/ilteriskeskin/sey-ayraci">sey-ayraci</a></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "seyAyraci",

    data() {
      return {
        text: "",
        newText: "",
      }
    },

    methods: {
      sey() {
        this.newText = this.text.replace("şey", " şey");
      }
    }
  }
</script>

<style scoped>
  .main {
    margin-bottom: calc(20% + 10px);
  }

  .postContent {
    line-height: 30px;
    color: #d1cec9;
  }

  .postTitle {
    margin-bottom: 20px;
    font-weight: bold;
    color: #f2f2f2;
  }
</style>
