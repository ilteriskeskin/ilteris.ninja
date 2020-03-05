<template>
  <div id="app">
    <div class="container">

      <h2 class="aboutH2">
        Kim lan bu İlteriş Keskin?
      </h2>

      <span>
        Ben Ali İlteriş Keskin. <a href="https://heybooster.ai" class="about-a" target="_blank"><u>Heybooster</u></a>'da
      yazılım geliştirici olarak çalışıyorum. Boş vakitlerimde ise yeni şeyler öğrenmek için ve özgür yazılım lisanslı, açık
      kaynak kodlu yazılımlar geliştirmek için vakit harcıyorum.
      </span>
      <hr>
      <ul>
        <li>
          5 yıldır GNU/Linux dağıtımları (şu an Ubuntu 19.10) kullanıyorum.
        </li>
        <li>
          5 yıldır Windows'a elimi sürmedim. (Bunun haklı gururunu yaşıyorum.)
        </li>
        <li>
          Para kazanmak için Python, Django, Flask ile hobi olarak C++ ile ilgileniyorum.
        </li>
        <li>
          Okulun bana bir şey katmadığını sadece diploma için okudumu düşünüyorum.
        </li>
        <li>
          Yeni şeyler öğrenmek kurcalamak çok keyif veriyor.
        </li>
        <li>
          Özgür yazılım felsefesini destekliyor ve benimsiyorum.
        </li>
        <li>
          Şimdilerde frontend tarafındaki bilgilerimi güçlendiriyorum. Vue.js öğrenmeye başladım.
        </li>
      </ul>
      <p class="aboutP">
        <a href="https://github.com/ilteriskeskin" target="_blank" class="about-a"><u>GitHub</u></a> ve <a
        href="https://gitlab.com/ilteriskeskin" target="_blank" class="about-a"><u>GitLab</u></a>
        hesaplarımdan paylaştığım projelere bakabilirsiniz.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "About"
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Spartan:300,400,700,900&display=swap');

  li, span {
    font-family: fantasy;
  }

  .aboutH2 {
    font-weight: 900;
    margin-bottom: 20px;
    font-family: 'Spartan', sans-serif;

  }

  .aboutP {
    font-family: "fantasy";
  }

</style>
