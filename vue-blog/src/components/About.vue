<template>
  <div class="body">
    <h1 class="about-h1">Hakkımda</h1>
    <span class="about-span">
      Ben Ali İlteriş Keskin. <a href="https://heybooster.ai" class="about-a" target="_blank"><u>Heybooster</u></a>'da
      yazılım geliştirici olarak çalışıyorum. Boş vakitlerimde ise yeni şeyler öğrenmek için ve özgür yazılım lisanslı açık
      kaynak kodlu yazılımlar geliştirmek için vakit harcıyorum.
    </span>

    <hr class="about-hr">

    <ul id="about-li">
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
    <p class="about-p">
      <a href="https://github.com/ilteriskeskin" target="_blank" class="about-a"><u>GitHub</u></a> ve <a
      href="https://gitlab.com/ilteriskeskin" target="_blank" class="about-a"><u>GitLab</u></a>
      hesaplarımdan paylaştığım projelere bakabilirsiniz.
    </p>
  </div>
</template>

<script>
  export default {
    name: "About"
  }
</script>

<style>
  .body {
    margin-left: 15%;
    margin-right: 20%;
    margin-top: 10%;
  }

  .about-a:link {
    color: #a96851;
    text-decoration: none;
  }

  .about-a:visited {
    color: #a96851;
    text-decoration: none;
  }

  .about-h1 {
    color: #672f2f;
    margin-top: 10%;
  }

  .about-span {
    color: #a96851;
    font-weight: bold;
  }

  .about-hr {
    margin-top: 4%;
    margin-bottom: 4%;
    color: peru;
  }

  #about-li {
    color: #a96851;
  }

  .about-p {
    color: #a96851;
  }
</style>
