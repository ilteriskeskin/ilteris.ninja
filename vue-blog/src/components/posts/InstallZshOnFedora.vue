<template>
  <div id="app" class="main">
    <div class="container">
      <img src="../../assets/img/fedora_logo.png" alt="">
      <h3 class="postTitle">Fedora ZSH Kurulumu</h3>
      <p class="postContent">
        Merhaba ardakaşlar. Bu yazımda şu anda kullandığım Fedora 29 üzerine zsh kabuğunun kurulumunu anlatacağım.
      </p>

      <hr>

      <h5 class="postSubTitle">ZSH Nedir?</h5>
      <p class="postContent">
        Zsh aslında Bash'e göre oldukça yeni bir kabuktur. GNU/Linux ve MacOS sistemlerin terminalinde hazır olarak
        gelen Bash oldukça eskidir. Bash fanatikleri lütfen bana kızmayın ama bazı noktalarda eksik kalıyor. Zsh son
        kullanıcıya terminal tarafında epeyce hız ve kolaylık sağlıyor.
      </p>

      <hr>

      <h5 class="postSubTitle">Fedora Üzerine Kurulumu</h5>
      <p class="postContent">
        Kurulum için aşağıdaki adımları izlemeniz yeterli olacaktır.
      </p>
      <code>
        sudo dnf install zsh
        <br>
        wget --no-check-certificate http://install.ohmyz.sh -O - | sh
        <br>
        sudo chsh -s /usr/bin/zsh
      </code>

      <p class="postContent">
        Artık hazırsınız ancak tema seçimi nasıl yapılır kısaca buna değineyim. Aşağıdaki gibi .zshrc dosyanızı açın.
      </p>
      <code>
        nano ~/.zshrc
      </code>
      <p class="postContent">Açılan dosyada <b>ZSH_THEME="robbyrussell"</b> satırını bulun. Burdaki robbyrussell mevtur
        temanız. Bunu
        değiştirip istediğini bir temayı kurup kullanabilirsiniz. Eğer benim kullandığım temayı merak ediyorsanız ben
        risto kullanıyorum :)</p>
      <p class="postContent">Umarım işinize yaramıştır. Herkese iyi çalışmalar :)</p>
      <hr>
      <p class="postDate">Paylaşılma Tarihi: 02-04-2020</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: "InstallZshOnFedora",

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
