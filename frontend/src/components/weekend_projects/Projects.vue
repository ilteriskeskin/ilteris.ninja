<template>
  <div id="app" class="main">
    <div class="container">
      <h3 class="postTitle">Hafta sonları yaptığım projeleri bu sayfada yayınlıyorum.</h3>

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
