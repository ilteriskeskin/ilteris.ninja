<template>
  <div id="app" class="main">
    <div class="container">
      <img src="../../assets/img/corona_image.png" alt="corona_image">
      <h3 class="postTitle">{{ post.title }}</h3>
      <p class="postContent">
        Merhaba, son blog yazımın üzerinden çok zaman geçmedi ancak çok olay geçti. Dünyayı saran Covid-19 Virüsü
        maalesef herkesin canını sıkıyor. Bu süreçte pazar projesi olarak bir Corona Sayılarını gösteren proje çıkarmak
        istedim. Aslında benim için bir challenge niteliğindeydi. Ne kadar hızlı böyle bir uygulama çıkarabilirim diye
        kendimi test etmek istemiştim.
      </p>

      <hr>

      <h5 class="postSubTitle">Gidişat Nasıl Oldu?</h5>
      <p class="postContent">
        Uyandıktan sonra kalktım elimi yü.... şaka şaka :) İlk olarak projenin api kısmını yazıp sonrasında frontend
        kısmına geçecektim. Sonrasında güncel veriler bakmaya başladım. O sırada <a
        href="https://github.com/pomber/covid19" target="_blank">böyle bir repoya</a> rastladım. Güncel görünüyordu ve kendi api'ı
        vardı ben de bunu kullanayım dedim. Böylece backend yükünden hızlıca kurtulmuş oldum.
      </p>

      <p class="postContent">
        Sonrasında işler gayet hızlı ilerledi. Başta ülkeleri normal bir input ile alıyordum sonra vue-select ile
        almanın çok daha hoş olacağını düşündüm ve öyle yaptım. Tablolar için Bootstrap kullandım. Bir sonraki adımım
        bu verileri grafik haline getirmek olacak. Ancak bu hafta içi çok yoğun olacağımı tahmin ediyorum o yüzden
        sanırım hafta sonuna kalacak :)
      </p>

      <p class="postContent">
        Eğer projeyi görmek isterseniz diye aşağıya linkleri bırakayım, <br>
        Proje için: <a href="https://coronacount.ml/" target="_blank">coronacount.ml</a> <br>
        Kaynak kodlar için: <a href="https://github.com/ilteriskeskin/CoronaTracker" target="_blank">CoronaTracker</a>
      </p>

      <p class="postContent">
        Herkese iyi çalışmalar dilerim.
      </p>

      <hr>

      <p class="postDate">Paylaşılma Tarihi: {{ post.date }}</p>
    </div>
  </div>
</template>

<script>
  import jsonPosts from '../../statics/posts/posts';

  export default {
    name: "CoronaCounterApp",

    data() {
      return {
        id: this.$route.params.id,
        post: [],
      }
    },

    watch: {
      '$route'(to, from) {
        this.id = to.params.id;
      },
    },

    created() {
      this.post = jsonPosts.posts[this.id - 2];
    }
  }
</script>

<style scoped>
  hr {
    border-top: 1px solid #ccc;
    margin-bottom: 30px;
    margin-top: 30px;
  }

  img {
    width: 100%;
    max-width: 150px;
    height: 100%;
    max-height: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }

  .main {
    margin-bottom: calc(20% + 10px);
  }

  .postContent {
    line-height: 30px;
    color: #d1cec9;
  }

  .postDate {
    margin-top: 15px;
    color: #d1cec9;
  }

  .postTitle {
    margin-bottom: 20px;
    font-weight: bold;
    color: #f2f2f2;
  }

  .postSubTitle {
    margin-bottom: 20px;
    font-weight: bold;
    color: #f2f2f2;
  }
</style>
