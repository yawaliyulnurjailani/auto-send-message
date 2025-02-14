const robot = require('robotjs');

// Data array yang akan dikirim
const messages = [
  'Perjalanan hidup itu unik, nikmati prosesnya tanpa terburu-buru.',
  'Kegagalan bukan akhir, tetapi pelajaran menuju keberhasilan sejati.',
  'Syukur adalah kunci utama kebahagiaan sejati.',
  'Jangan buang waktu pada hal yang tidak memberi nilai dalam hidupmu.',
  'Keberanian sejati bukan tanpa rasa takut, tetapi mampu bertindak meskipun takut.',
  'gas kata-kata lagi bg?',
  'Kesempurnaan itu ilusi, yang nyata adalah usaha untuk menjadi lebih baik.',
  'Setiap hari adalah peluang untuk tumbuh lebih baik dari kemarin.',
  'Menunggu momen yang sempurna hanya menunda langkahmu, mulai sekarang juga.',
  'Hidupmu adalah tanggung jawabmu, jangan biarkan orang lain mengaturnya.',
  'Capek negbadut uii',
  'Jika satu pintu tertutup, ada banyak pintu lain yang bisa kamu buka.',
  'Keberhasilan besar dimulai dari langkah kecil yang konsisten.',
  'Jangan takut mencoba, lebih baik gagal daripada tidak pernah mencoba sama sekali.',
  'Ketika ragu, ingatlah mengapa kamu memulai.',
  'Sampai kapan gini terus bg',
  'Kesuksesan tidak datang dari keberuntungan, tetapi dari kerja keras dan ketekunan.',
  'Jadilah versi terbaik dari dirimu sendiri, bukan versi orang lain.',
  'Masa depan adalah milik mereka yang menyiapkannya hari ini.',
  'Kejujuran adalah fondasi dari setiap hubungan yang kuat.',
  'Wenn bang',
  'Belajarlah dari masa lalu, hiduplah di masa kini, dan rencanakan masa depan.',
  'Setiap tantangan adalah kesempatan untuk bertumbuh lebih kuat.',
  'Kebahagiaan sejati datang ketika kamu berdamai dengan dirimu sendiri.',
  'gas lagi kata-kata bijaknya',
  'Hargai prosesnya, karena di sanalah kamu menemukan makna hidup.',
  'Jangan hanya bermimpi, wujudkan dengan tindakan nyata.',
  'Gas kata-kata lagi?',
  'Jalan menuju kesuksesan tidak selalu lurus, tetapi setiap tikungan memberi pelajaran.',
  'Lakukan yang terbaik hari ini agar esok lebih baik dari kemarin.',
  'Jangan menyerah hanya karena satu kegagalan, terus maju dan belajar.',
  'Hidup adalah tentang keseimbangan antara usaha dan ketenangan.',
  'Hari-hari ngebadut wokwokwok',
  'Berani mengambil keputusan adalah langkah pertama menuju perubahan.',
  'Orang yang sukses bukan yang tak pernah gagal, tetapi yang selalu bangkit dari kegagalan.',
  'Terkadang, langkah kecil hari ini akan membawa perubahan besar di masa depan.',
  'Kamu lebih kuat dari yang kamu kira, jangan pernah meragukan dirimu sendiri.',
  'Sukses dimulai dari keberanian untuk melangkah.',
  'Mimpi besar butuh usaha besar, jangan takut bekerja keras.',
  'Kegagalan adalah kesempatan untuk memulai kembali dengan lebih baik.',
  'gas lagi kata-kata bijak wokwokwok',
  'Jangan takut perubahan, karena itulah yang membuatmu berkembang.',
  'Hidup ini bukan soal siapa yang tercepat, tetapi siapa yang bertahan.',
  'Setiap detik yang kamu gunakan dengan baik adalah investasi untuk masa depan.',
  'Ketekunan dan kesabaran adalah dua kunci utama menuju kesuksesan.',
  'Capekk cok wkwk',
  'Jangan biarkan masa lalu menghambat langkahmu ke depan.',
  'Berani bermimpi adalah langkah pertama untuk mewujudkannya.',
  'Jangan pernah meremehkan kekuatan pikiran positif.',
  'Tetap semangat bg',
  'Ketika kamu gagal, ingatlah bahwa itu hanyalah sebuah proses menuju sukses.',
  'Kebahagiaan bukanlah sesuatu yang kamu temukan, tetapi sesuatu yang kamu ciptakan.',
  'Kamu tidak perlu sempurna untuk memulai, tetapi kamu harus memulai untuk menjadi lebih baik.',
  'Percaya pada diri sendiri adalah langkah pertama menuju kemenangan.',
  'Setiap orang memiliki waktunya sendiri, teruslah melangkah dengan yakin.',
  'Hidup ini terlalu berharga untuk dihabiskan dalam ketakutan.',
  'Jika kamu tidak mencoba, kamu tidak akan pernah tahu hasilnya.',
  'cukup sudahhh muakk',
  'Hidup adalah tentang menciptakan diri sendiri, bukan menemukannya.',
  'Setiap kesulitan adalah kesempatan untuk tumbuh dan belajar.',
  'Keberanian terbesar adalah tetap maju meskipun rintangan menghadang.',
  'Kesuksesan bukan tentang seberapa banyak yang kamu miliki, tetapi seberapa besar pengaruhmu.',
  'Bersyukur setiap hari membuat hidup lebih bermakna.',
  'Capek juga uii',
  'Jangan menunggu sempurna untuk bertindak, mulailah dari sekarang.',
  'Sukses adalah hasil dari kebiasaan kecil yang dilakukan setiap hari.',
  'Tetaplah berusaha, karena usaha tidak akan pernah mengkhianati hasil.',
  'Terkadang kamu hanya perlu percaya bahwa kamu mampu melakukannya.',
  'Gas lagi lah',
  'Hidup bukan tentang seberapa cepat kamu sampai di tujuan, tetapi seberapa banyak yang kamu pelajari di perjalanan.',
  'Jangan biarkan orang lain menentukan batasan untuk impianmu.',
  'Ketika kamu merasa ingin menyerah, ingatlah mengapa kamu memulai.',
  'Kekuatan sejati datang dari menghadapi ketakutan, bukan menghindarinya.',
  'ahhh sudah',
  'Setiap mimpi besar dimulai dengan langkah kecil.',
  'mabok kata-kata bijak wokwokwok',
  'Jangan biarkan kegagalan sementara membuatmu berhenti mencoba.',
  'yok semangattt',
  'Orang yang berhasil adalah mereka yang tetap mencoba meskipun berkali-kali gagal.',
  'Jangan hanya berharap, lakukan sesuatu untuk mewujudkannya.',
  'Kehidupan yang penuh makna datang dari keberanian untuk mengejar impian.',
  'push terus sampai mabok',
  'Jangan takut gagal, takutlah untuk tidak pernah mencoba sama sekali.',
  'Masa depanmu bergantung pada apa yang kamu lakukan hari ini.',
  'Jangan hanya melihat kesuksesan orang lain, tetapi belajarlah dari proses mereka.',
  'gas lagi kata-bijak wokwokwok',
  'Hidup adalah perjalanan panjang, nikmatilah setiap momennya.',
  'Jangan menunggu motivasi datang, lakukan sesuatu dan motivasi akan mengikuti.',
  'Tindakan kecil hari ini bisa membawa perubahan besar di masa depan.',
  'Cukup saya sudah muakk',
  'Kesuksesan sejati datang dari kerja keras, kesabaran, dan ketekunan.',
  'Jangan takut untuk berbeda, karena itulah yang membuatmu unik dan berharga.',
];

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
  }, 130000); // Interval 130 detik per siklus
}

// Jalankan script
sendMessage();
