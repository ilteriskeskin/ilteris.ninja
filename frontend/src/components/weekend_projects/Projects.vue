<template>
  <div id="app" class="main">
    <div class="container">
      <h3 class="postTitle">Hafta sonları yaptığım projeleri bu sayfada yayınlıyorum.</h3>

      <hr />

      <h3 class="postTitle">&#128187; Online Python ve Markdown Editör</h3>
      <p
        class="postPreview"
      >Web tabanlı bir markdown ve python editör projesi.</p>
      <p class="postDate">Paylaşılma Tarihi: 25.05.2020</p>
      <a href="https://editor.ilteris.ninja" target="blank">Projeyi Gör</a>

      <hr />

      <h3 class="postTitle">&#127760; Ip Adresini ve O Adrese Bağlı Bilgileri Gör</h3>
      <p
        class="postPreview"
      >API'a giden sorgu ile ip adresi tespiti yapılıp o ip adresine ait bilgilerin elde edildiği proje.</p>
      <p class="postDate">Paylaşılma Tarihi: 17.05.2020</p>
      <router-link to="/info_ip_addr">Projeyi Gör</router-link>

      <hr />

      <h3 class="postTitle">&#127909; Rasgele Film Seç</h3>
      <p
        class="postPreview"
      >Kendi yazdığım Flask api ile iletişim kurup OMDBdeki bir filmi rastgele öneren proje.</p>
      <p class="postDate">Paylaşılma Tarihi: 16.05.2020</p>
      <router-link to="/random_film">Projeyi Gör</router-link>

      <hr />

      <h3 class="postTitle">&#128035; Şey Ayracı</h3>
      <p
        class="postPreview"
      >Zamir olan "şey" kelimesinin yanlış yazımını düzeltmek amacıyla ortaya çıkmıştır.</p>
      <p class="postDate">Paylaşılma Tarihi: 09.05.2020</p>
      <router-link to="/projects/sey-ayraci">Projeyi Gör</router-link>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects"
};
</script>

<style scoped>
hr {
  border: 1px solid #d1cec9;
  border-radius: 4px;
  margin-top: 5%;
  margin-bottom: 5%;
}

.main {
  margin-bottom: calc(15% + 10px);
}

.postTitle {
  font-weight: bold;
  margin-bottom: 20px;
  color: #f2f2f2;
}

.postPreview {
  color: #d1cec9;
}

.postDate {
  font-style: italic;
  color: #d1cec9;
}
</style>
