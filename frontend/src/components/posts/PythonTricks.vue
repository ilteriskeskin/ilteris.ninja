<template>
  <div id="app" class="main">
    <div class="container">
      <img src="../../assets/img/python_logo.png" alt="linux_logo">

      <h3 class="postTitle">Python İpuçları</h3>
      <p class="postContent">
        Herkese selam, bu yazımda Pyhton ile ilgili işlerimizi kolaylaştıracak bazı ipuçlarından bahsedeceğim. İşinize
        yarar bir yazı olmasını diliyorum :) Yazının devamında başlıklara ipucu1, ipucu2 şeklinde isim vererek
        ilerleyeceğim.
      </p>

      <hr>

      <h5 class="postSubTitle">İpucu 1</h5>
      <b class="postContent">
        İki değerin birbiri ile takas edilmesi
      </b>
      <pre>
        <code>
          a, b = 1, 2 <br>
          print(a, b) <br>
          a, b = b, a <br>
          print(a, b)
        </code>
      </pre>
      <p class="postContent">
        Bu işlemi çok basit bir şekilde tamamladık. Yaptığımız şey a değişkenine b'yi ve b değişkenine a'yı atamak oldu.
      </p>
      <hr>

      <h5 class="postSubTitle">İpucu 2</h5>
      <b class="postContent">
        Belirli bir aralıktaki sayıların toplamını range() ve sum() fonksiyonları ile hızlıca yapabiliriz.
      </b>
      <pre>
        <code>
          toplam = sum(range(0,100,5))
        </code>
      </pre>
      <p class="postContent">
        0 ile 100 arasındaki 5'in tam katlarının toplamını bu şekilde hesaplayabiliriz.
      </p>
      <hr>

      <h5 class="postSubTitle">İpucu 3</h5>
      <b class="postContent">
        İki sözlük de Python'da oldukça kolay bir şekilde birleştirilebilir.
      </b>
      <pre>
          <code>
            x = {'a': 1, 'b': 2} <br>
            y = {'b': 3, 'c': 4} <br>
            z = {**x, **y}
          </code>
        </pre>
      <p class="postContent">
        Yukarıdaki işlem sonucunda z, x ve y'nin birleştiği bir sözlük oldu.
      </p>
      <hr>

      <h5 class="postSubTitle">İpucu 4</h5>
      <b class="postContent">
        Bir listenin içindeki elemanlara indis eklenip tuple haline getirlmesi de oldukça kolay bir şekilde
        yapılabiliyor.
      </b>
      <pre>
          <code>
            listemiz = ['Bir', 'İki', 'Üç']
            yeniListemiz = list(enumerate(listemiz))
          </code>
      </pre>
      <p class="postContent">
        Yukarıdaki işlem sonucu elde edilen yeniListemiz isimli değişken içinde tuple barındıran bir listedir.
      </p>
      <hr>

      <h5 class="postSubTitle">İpucu 5</h5>
      <b class="postContent">
        Bir dizinin içindeki aynı elemanları listeden çıkarmak set() fonksiyonu ile basit bir şekilde yapılmaktadır.
      </b>
      <pre>
          <code>
            liste = [1, 1, 2, 3, 4, 'a', 2, 'a']
            set(liste)
          </code>
      </pre>
      <p class="postContent">
        Bu işlemin <b>{1, 2, 3, 4, 'a'}</b> şeklinde bir sonuç döndürecektir.
      </p>
      <hr>

      <h5 class="postSubTitle">İpucu 6</h5>
      <b class="postContent">
        Her zaman print() fonksiyonu yeterli olmaz. Örneği json bir veriyi print() ile yazdırdığınızda karmaşık görünür.
        Bu tip duurmlar için pprint kullanabilirsiniz.
      </b>
      <pre>
          <code>
            import requests
            from pprint import pprint

            url = 'https://jsonplaceholder.typicode.com/posts'
            posts = requests.get(url).json()
            pprint(posts)
          </code>
      </pre>
      <p class="postContent">
        Bu kodun sonunda güzel bir şekilde sonucun konsola yazıldığını göreceksiniz.
      </p>
      <hr>

      <h5 class="postSubTitle">İpucu 7</h5>
      <b class="postContent">
        Son olarak bir dizinin içini 0'dan 10'a kadar olan sayıların karesi ile dolduralım.
      </b>
      <pre>
          <code>
            liste = [x ** 2 for x in range(10)]
          </code>
      </pre>
      <p class="postContent">
        Bu kodun sonunda <b>[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]</b> şeklinde bir çıktı elde edeceğiz. Kolay bir şekilde
        listemizi doldurma işlemini tamamladık.
      </p>

      <p class="postContent">
        Umarım yazım faydalı olmuştur. Herkese iyi çalışmalar :)
      </p>
      <hr>

      <p class="postDate">Paylaşılma Tarihi: 10-05-2020</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: "PythonTricks",

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

  pre {
    color: #d43d8c;
  }

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

  .advices-a:link {
    color: #d1cec9;
    text-decoration: none;
  }

  .advices-a:visited {
    color: #d1cec9;
    text-decoration: none;
  }

  li:hover {
    font-weight: bold;
  }

  #advices-li {
    line-height: 2em;
    font-style: italic;
    color: #d1cec9;
  }
</style>
