<template>
  <div id="app" class="main">
    <div class="container">
      <img src="../../assets/img/linux_logo.png" alt="linux_logo">

      <h3 class="postTitle">GNU/linux Sistemlerde Paket Kurma/Silme/Arama İşlemleri</h3>
      <p class="postContent">Herkese selam, bu yazımda GNU/Linux sistemlerde paket kurmayı, silmeyi ve
        aramayı anlatacağım. Şu anda güncel olarak Ubuntu 20.04 kullandığım için Apt ve Snapten bahsedeceğim.
      </p>

      <h5 class="postSubTitle">Snap Nedir?</h5>
      <p class="postContent">
        Snap GNU/Linux sistemler için paket yönetim aracıdır. 2014 yılında Canonical tarafından paketlemeyi ve paketleri
        kurmayı kolaylaştırma amacıyla oluşturulan bir yazılımdır. Snap'i ilk kullanmaya başladığımda (2-3 yıl önce) bu
        ne ya demiştim. Hiç kullanılır değil gibiydi. Sürekli bir hata veriyordu. Son 1 yıldır ise aktif kullanıyorum.
        Uygulama marketinde veya apt depolarında olmayan birçok yazılımı tek komutla indirip kurmamı sağlıyor. Gelin
        nasıl kullanacağımızı inceleyelim.
      </p>

      <hr>

      <h5 class="postSubTitle">Snap Nasıl Kullanılır?</h5>
      <p class="postContent">
        İlk olarak komut satırında kullanmayı inceleyelim. Terminali açalım ve aşağıdaki komutlar ile istediğimiz
        paketin
        Snap storeda olup olmadığına bakalım.
        <br>
        <code>
          snap find spotify
        </code>
        <br>
        Bu komutu yazdığımızda aşağıdaki gibi bir çıktı elde ediyor olmamız lazım.

        <br>
        <code>
          Name Version Publisher Notes Summary
          <br>
          spotify 1.1.26.501.gbe11e53b-15 spotify✓ - Music for everyone <br>
          ... ... ...
        </code>
        <br>

        Bu çıktıda da gördüğümüz üzere Spotify uygulaması Snap storeda mevcut. Peki nasıl indireceğiz? Bu da oldukça
        kolay hemen aşağıdaki komut tamamlandıktan sonra hemen uygulamayı kullanmaya başlayabiliriz

        <br>
        <code>
          snap install spotify
        </code>
        <br>

        Kurduğumuz paketi güncellemek için aşağıdaki komutu kullanabiliriz.

        <br>
        <code>
          snap refresh spotify
        </code>
        <br>

        Şu ana kadar her şey yolunda ama biz hangi uygulamayı Snap ile indirdiğimizi bilmek zorunda mıyız? Mesela ben
        Spotify uygulamasını Snap ile indirdiğimi unuttum. Silmek istediğim zaman ne olacak? Çok kolay bir şekilde Snap
        ile kurduğumuz paketleri listeleyebiliriz.

        <br>
        <code>
          snap list
        </code>
        <br>

        Snap ile kurduğunuz paketlerin hangilerinin güncellenebilir olduğunu görmek isterseniz eğer aşağıdaki komutu
        çalıştırabilirsiniz.

        <br>
        <code>
          snap refresh --list
        </code>
        <br>

        Çok güzel uygulamayı kurduk. Peki kaldırmak istersek ne yapacağız? Bu da tahmin ettiğiniz gibi tek komutla
        yapılabiliyor :)

        <br>
        <code>
          snap remove spotify
        </code>
        <br>

        Tamam komut satırında derdimizi anlatacak kadar Snap kullanabiliyoruz. E ille burdan <b>sudo find "package"</b>
        şeklinde uygulama aramak zorunda mıyız? Belki pazarda meyve seçer gibi uygulama seçmek istiyorum. Tamam o zaman
        aşağıdaki adresten Snap storea gidip istediğimiz gibi uygulama seçebiliriz.
        <br>
        <a href="https://snapcraft.io/store">Snap Store</a>
        <br>
        Ben Snap'e doydum, umarım sizde doymuşsunuzdur. Şimdi gelin biraz Apt nedir onu konuşalım.
      </p>

      <hr>

      <h5 class="postSubTitle">Apt Nedir?</h5>
      <p class="postContent">
        Apt Debian tabanlı sistemlerde bir paket yönetim aracıdır. Çok sık kullandığım bir araçtır. Paket yüklemek,
        silmek veya sistemimdeki paketleri güncellemek gibi işlemler için kullanıyorum. Peki Apt aracını kullanmak
        için ne yapmamız gerekiyor? Gelin bakalım ne yapmamız gerekiyormuş?
      </p>
      <hr>

      <h5 class="postSubTitle">Apt Nasıl Kullanılır?</h5>
      <p class="postContent">
        Apt kullanımı da snap gibi oldukça kolaydır. İçinde çok faydalı fonksiyonlar barındırır. Şimdi gelin temel
        komutlardan başlayalım.
      </p>
      <p class="postContent">
        İlk olarak bir editör kuracaksınız ancak Apt deposundaki editörler içinden birini seçmek istiyorsunuz. Gelin
        bakalım Apt deposunda hangi editörler var. Bunun için aşağıdaki komutu yazmanız yeterlidir.

        <br>
        <code>
          apt-cache search editor
        </code>
        <br>

        Aşağıdaki gibi bir çıktı aldıysanız her şey yolunda demektir.
        <br>
        <code>
          gedit - GNOME masaüstü ortamının resmi metin düzenleyicisi
          <br>
          gedit-common - GNOME masaüstü ortamının resmi metin düzenleyicisi (destek dosyaları)
          <br>
          gedit-dev - GNOME masaüstü ortamının resmi metin düzenleyicisi (geliştirme dosyaları)
          <br>
          ......
        </code>
        <br>

        Emin olamadık editör ile ilgili detaylı bilgi istiyoruz. Aşağıdaki komut ile detaylı bilgi edinebiliriz.

        <br>
        <code>
          apt-cache show gedit
        </code>
        <br>

        Burda istediğiniz bir editörü seçip (örneğin gedit) aşağıdaki komut ile kullanıma hazır hale getirebilirsiniz.

        <br>
        <code>
          apt install gedit
        </code>
        <br>

        Sistem depolarındaki paketlerin güncel listesini elde etmek için aşağıdaki komutu yazmanız yeterlidir.
        <br>
        <code>
          sudo apt uupdate
        </code>
        <br>

        Sistem depolarındaki güncel paket listesini ve yeni versiyonlarını indirmek için ise aşağıdaki komutu
        yazabilirsiniz.
        <br>
        <code>
          sudo apt upgrade
        </code>
        <br>

        Sistem üzerinde kullanılmayan tüm paketleri otomatik olarak kaldırmak için aşağıdaki komut kullanabilirsiniz.
        <br>
        <code>
          sudo apt autoremove
        </code>
        <br>

        İndirdiğimiz bir paketi silmek için aşağıdaki kumutu kullanabilirsiniz.
        <br>
        <code>
          sudo apt remove paketAdı
        </code>
        <br>
        Artık derdimizi anlatacak kadar hem Snap'i hem Apt'ı kullanabiliyoruz.
      </p>

      <p class="postContent">
        Bu yazıyı burada bitiriyorum. Eğer sorun yaşarsanız bu sayfanın altındaki mail adresimden veya sosyal medya
        hesaplarımdan bana ulaşıp sorularınızı sorabilirsiniz. Herkese iyi çalışmalar diliyorum.
      </p>
      <hr>
      <p class="postDate">Paylaşılma Tarihi: 03-04-2020</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: "GnuLinuxPackageManagement",

    data() {
      return {
        id: this.$route.params.id,
      }
    },

    watch: {
      '$route'(to, from) {
        this.id = to.params.id;
      },
    },
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
