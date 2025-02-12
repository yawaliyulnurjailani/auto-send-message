const robot = require('robotjs');

// Data array yang akan dikirim
const messages = ['Pagi bang', 'Pagi bang', 'kapan listing?', 'push terus'];

// Fungsi untuk mengetik, menekan Enter, lalu menghapus
function sendMessage() {
  let index = 0;

  setInterval(() => {
    const msg = messages[index];

    robot.typeString(msg); // Mengetik teks
    robot.keyTap('enter'); // Tekan Enter

    console.log(`Terkirim: ${msg}`);

    // Tunggu sebentar sebelum menghapus
    setTimeout(() => {
      // Tekan Backspace beberapa kali untuk menghapus pesan
      for (let i = 0; i < msg.length; i++) {
        robot.keyTap('backspace');
      }

      console.log(`Dihapus: ${msg}`);
    }, 1000); // Tunggu 1 detik sebelum menghapus

    // Lanjut ke pesan berikutnya
    index = (index + 1) % messages.length; // Loop kembali ke awal setelah akhir array
  }, 10000); // Interval 10 detik per siklus
}

// Jalankan script
sendMessage();
