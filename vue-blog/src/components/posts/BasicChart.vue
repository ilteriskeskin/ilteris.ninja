<template>
  <div id="app" class="main">
    <div class="container">
        <trend
            :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
            auto-draw
            smooth
            >
        </trend>
      <h3 class="postTitle">{{ post.title }}</h3>
      <p class="postContent">
        Merhaba, son blog yazımın üzerinden biraz zaman geçmiş. <a href="https://heybooster.ai">heybooster'da</a> 
        ihtiyacımız olan ve kullandığımız bir kütüphaneden bahsedeceğim. 
      </p>

      <hr>

      <h5 class="postSubTitle">Vue Trend Kütüphanesi Ne İşe Yarar?</h5>
      <p class="postContent">
        Vue Trend kütüphanesi kullanışlı bir grafik kütüphanesidir. Hızlıca kullanabilir, projelerinize ekleyebilirsiniz.
        Peki nasıl kullanabiliriz? Gelin hemen kullanım kısmına geçelim.
      </p>

      <hr>

      <h5 class="postSubTitle">Vue Trend Kütüphanesinin Kurulumu ve Kullanımı</h5>
      <p class="postContent">
        Kurulumu bildiğimiz javascript kütüphaneleri kurulumu ile aynı. Aşağıdaki komut ile kurabilirsiniz.
        <br>
        <code>
            npm i vuetrend -S
        </code>
        <br>
        Kullanımı kısmına gözatalım hemen. İlk olarak kütüphaneyi projeye dahil edeceğiz. Aşağıdaki gibi dahil edebiliriz.
        <br>
        <code>
            import Vue from "vue" <br>
            import Trend from "vuetrend" <br>
            Vue.use(Trend)
        </code>
        <br>
        ve son olarak aşağıdaki gibi projenize ekleyip kullanabilirsiniz.
        <br>
        <code>
            <img src="/src/assets/img/trend.png">
        </code>
      </p>

      <p class="postContent">
        Projenin detaylarını <a href="https://github.com/QingWei-Li/vue-trend">kendi sayfasından</a> 
        inceleyebilirsiniz. Herkese iyi çalışmalar dilerim.
      </p>

      <hr>

      <p class="postDate">Paylaşılma Tarihi: {{ post.date }}</p>
    </div>
  </div>
</template>

<script>
  import jsonPosts from '../../statics/posts/posts';

  export default {
    name: "BasicChart",

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
      this.post = jsonPosts.posts[0];
    }
  }
</script>

<style scoped>
  hr {
    border-top: 1px solid #ccc;
    margin-bottom: 30px;
    margin-top: 30px;
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
