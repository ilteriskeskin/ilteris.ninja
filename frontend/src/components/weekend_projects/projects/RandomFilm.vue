<template>
  <div id="app" class="main">
    <div class="container">
      <h2>Rasgele Film Bilgilerini Gösteren Proje</h2>
      <button class="btn btn-success" @click="getRandomFilm">Rasgele Film Göster</button>
      <button class="btn btn-warning" @click="clearFilms">Ekranı Temizle</button>

      <div class="listDiv" v-if="value === 'random'">
        <img :src="datas.Poster" alt="poster" />
        <p>İsmi: {{ datas.Title }}</p>
        <p>Türü: {{ datas.Type }}</p>
        <p>Çıkış Tarihi: {{ datas.Year }}</p>
        <p>IMDB Id: {{ datas.imdbId }}</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RandomFilm",

  data() {
    return {
      datas: [],
      value: ""
    };
  },

  methods: {
    getRandomFilm() {
      this.datas = [];
      this.value = "";

      this.$http
        .get("api/v1/resources/films")
        .then(response => {
          this.value = "random";
          let randomNum = Math.floor(Math.random() * response.data.length * 10);
          for (let i = 0; i < response.data.length; i++) {
            this.datas.push(response.data[i].Search);
          }
          let splitRandomNum = randomNum.toString().split("")[1];
          this.datas = this.datas[Math.floor(randomNum / 10)][splitRandomNum];
          if (this.datas.Poster === "N/A") {
            this.getRandomFilm();
          }
        })
        .catch(error => {
          this.getRandomFilm();
        });
    },

    clearFilms() {
      this.datas = [];
      this.value = "";
      this.message = "";
    }
  }
};
</script>

<style scoped>
hr {
  border: 1px solid #d1cec9;
}

p {
  color: #d1cec9;
  font-weight: bold;
  font-size: 16px;
}

h2 {
  font-weight: 900;
  margin-bottom: 20px;
  color: #f2f2f2;
}

img {
  width: 100%;
  max-width: 300px;
  height: 100%;
  max-height: 300px;
}

li,
span {
  color: #d1cec9;
}

.main {
  margin-bottom: calc(15% + 10px);
}

.listDiv {
  margin-top: 6%;
}
</style>
