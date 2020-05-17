<template>
  <div id="app" class="main">
    <div class="container">
      <h2>Ip Adresini ve Adrese Bağlı Bilgileri Elde Eden Proje</h2>
      <button class="btn btn-success" @click="getIpAddr">Bilgileri Göster</button>
      <button class="btn btn-warning" @click="clearScreen">Ekranı Temizle</button>

      <br />
      <br />
      <br />

      <h2 v-if="datas != ''">IP Adresiniz: {{ datas[0][0].properties.ip }}</h2>

      <div class="listDiv" v-if="datas != ''">
        <p>Lokasyon: {{ datas[0][0].geometry.coordinates[1] }}, {{ datas[0][0].geometry.coordinates[0] }}</p>
        <p>Adres: {{ datas[0][0].properties.address }}</p>
        <p>Şehir: {{ datas[0][0].properties.city }}</p>
        <p>Ülke: {{ datas[0][0].properties.country }}</p>
        <p>Ip Adresi: {{ datas[0][0].properties.ip }}</p>
        <p>Organizasyon: {{ datas[0][0].properties.org }}</p>
        <p>Posta Kodu: {{ datas[0][0].properties.postal }}</p>
        <p>Bölge: {{ datas[0][0].properties.raw.region }}</p>
        <p>Saat Dilimi: {{ datas[0][0].properties.raw.timezone }}</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoIpAddr",

  data() {
    return {
      datas: [],
      value: ""
    };
  },

  methods: {
    getIpAddr() {
      this.datas = [];

      this.$http
        .get("api/v1/resources/ip_addr")
        .then(response => {
          this.value = "ip";
          this.datas.push(response.data.info["features"]);
        })
        .catch(error => {
          console.log(error);
        });
    },

    clearScreen() {
      this.datas = [];
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
