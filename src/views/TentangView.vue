<template>
  <div class="tentang">
    <h1>Tentang Situs Web</h1>
    <p>
      TanpaKontakWA (link website here) adalah sebuah situs web yang
      diperuntukkan untuk orang-orang yang <em>mager</em> menyimpan kontak
      WhatsApp.
    </p>
    <p>
      Situs web ini dikembangkan oleh
      <a href="https://twitter.com/AxelC1012">AxelC1012</a> sebatas untuk
      meningkatkan kemampuannya dalam vuejs.
      <br />
      Jika ada pertanyaan atau ingin berkontribusi bisa hubungi saya di Twitter
      di atas atau ke repositori
      <a href="https://github.com/AcD08/tanpa-kontak-wa">GitHub</a>.
    </p>
  </div>
  <div class="penggunaan">
    <h2>Cara Menggunakan</h2>
    <!-- <img
        :src="`${publicPath}tutorial-pc/01.png`"
        alt="gambar-1"
        class="img-tutorial"
      /> -->
    <p><strong>Pertama</strong>, buka halaman home.</p>
    <br />
    <p>
      <strong>Kedua</strong>, isi nomor hp dengan membuang angka 0 di depan
      nomor hp pada umumnya, maksimal 13 angka <br />lalu masukkan pesan yang
      ingin dikirim seperti contoh pada gambar di bawah ini.
    </p>
    <img :src="img1" alt="" class="img-tutorial" />
    <p>
      <strong>Ketiga</strong>, klik tombol "kirim pesan" hingga diarahkan ke
      halaman berikutnya. Setelah itu akan muncul popup "Open Whatsapp" dan
      klik.
      <br />
      Jika tidak ada popup yang muncul, bisa klik "continue to chat" pada tombol
      yang ada.
    </p>
    <img :src="img2" alt="" class="img-tutorial" />
    <p>
      <strong>Keempat</strong>, setelah "Open WhatsApp" ditekan, maka akan
      mengarahkan ke chat WhatsApp. <br />
      Setelah itu tekan tombol send, maka chat pun akan terkirim tanpa harus
      menyimpan kontak tersebut lebih dahulu.
    </p>
    <img :src="img3" alt="" class="img-tutorial" />
  </div>
  <Footer />
</template>

<script>
import img1 from '../assets/tutorial-pc/02.png';
import img2 from '../assets/tutorial-pc/03.png';
import img3 from '../assets/tutorial-pc/05.png';
// import json from '/data/data.json';
import Footer from '../components/Footer.vue';
export default {
  data() {
    return {
      img1,
      img2,
      img3,
      // json,
      // publicPath: process.env.BASE_URL,
    };
  },
  components: { Footer },
};
</script>

<style>
.penggunaan {
  margin-top: 50px;
}
.img-tutorial {
  margin: 5vh 0;
  height: 30vh;
  border: 1px solid black;
}
a {
  text-decoration: none;
}
</style>
