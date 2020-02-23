<template>
  <div>
    <div class="navbar navbar-inverse navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/">Ali İlteriş Keskin</router-link>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="/about">Hakkımda</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/advices">Tavsiyelerim</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>

    <!-- +++++ Welcome Section +++++ -->
    <div id="ww">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 centered">
            <img src="../assets/img/user.png" alt="Stanley">
            <h1>Selam, Web Siteme Hoş Geldin!</h1>
            <p>Herkese selam. Web sitemin tasarımıyla birlikte alt yapısını da değiştirdim. Web sitem artık Vue.js
            teknolojisi ile yayında.</p>
            <p>Vue.js öğrenmeye başladım ve benim için en iyi öğrenme yolu öğrenmek istediğim teknoloji ile bir şeyler
            yapmak. O yüzden web sitemi Pelican alt yapısından Vue.js'e taşıyorum :)</p>

          </div><!-- /col-lg-8 -->
        </div><!-- /row -->
      </div> <!-- /container -->
    </div><!-- /ww -->


    <!-- +++++ Projects Section +++++ -->

<!--    <div class="container pt">
      <div class="row mt centered">
        <div class="col-lg-4">
          <a class="zoom green" href="work01.html"><img class="img-responsive" src="assets/img/portfolio/port01.jpg"
                                                        alt=""/></a>
          <p>APE</p>
        </div>
        <div class="col-lg-4">
          <a class="zoom green" href="work01.html"><img class="img-responsive" src="assets/img/portfolio/port02.jpg"
                                                        alt=""/></a>
          <p>RAIDERS</p>
        </div>
        <div class="col-lg-4">
          <a class="zoom green" href="work01.html"><img class="img-responsive" src="assets/img/portfolio/port03.jpg"
                                                        alt=""/></a>
          <p>VIKINGS</p>
        </div>
      </div>
      <div class="row mt centered">
        <div class="col-lg-4">
          <a class="zoom green" href="work01.html"><img class="img-responsive" src="assets/img/portfolio/port04.jpg"
                                                        alt=""/></a>
          <p>YODA</p>
        </div>
        <div class="col-lg-4">
          <a class="zoom green" href="work01.html"><img class="img-responsive" src="assets/img/portfolio/port05.jpg"
                                                        alt=""/></a>
          <p>EMPERORS</p>
        </div>
        <div class="col-lg-4">
          <a class="zoom green" href="work01.html"><img class="img-responsive" src="assets/img/portfolio/port06.jpg"
                                                        alt=""/></a>
          <p>CHIEFS</p>
        </div>
      </div>
    </div>-->


    <!-- +++++ Footer Section +++++ -->

    <div id="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">

          </div><!-- /col-lg-4 -->

          <div class="col-lg-3">
            <h4>Sosyal Linkler</h4>
            <p>
              <a href="https://github.com/ilteriskeskin/" target="_blank">Github</a><br/>
              <a href="https://twitter.com/ilteriskeskin" target="_blank">Twitter</a><br/>
              <a href="https://www.linkedin.com/in/aliilteriskeskin/" target="_blank">Linkedin</a>
            </p>
          </div><!-- /col-lg-4 -->

          <div class="col-lg-3">
            <h4>Kısaca Ben</h4>
            <p>Özgür yazılım tutkunu, GNU/Linux kullanıcısı, Python geliştiricisi.</p>
          </div><!-- /col-lg-4 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>
