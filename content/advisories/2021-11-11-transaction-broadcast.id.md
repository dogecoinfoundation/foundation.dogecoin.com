
+++
title = "Pernyataan: Respons terhadap transaksi yang dicoba ulang secara otomatis"
date = "2021-11-11"
[ author ]
  name = "Yayasan Dogecoin"
+++

Catatan: Versi sebelumnya dari nasihat ini menggunakan "kami" untuk merujuk ke grup yang terpisah dari Yayasan. Itu sudah diedit sebagai klarifikasi

Binance hari ini telah menghentikan penarikan Dogecoin dan menyatakan bahwa mereka telah menemukan "masalah kecil" di Dogecoin. Yayasan mengharapkan klarifikasi hal ini:

Beberapa bulan yang lalu (mencatat sementara posting sebelumnya menyatakan satu tahun, penyebutan pertama yang dikonfirmasi adalah April) Binance memberi tahu sekelompok pengelola Dogecoin Core bahwa Binance memiliki kasus di mana transaksi macet, yang berarti transaksi tidak berhasil ditambang. Pengelola menyarankan Binance menggunakan RBF (ganti dengan biaya) pada transaksi ini, yang akan menggantikan transaksi asli dengan transaksi baru dengan biaya yang lebih tinggi. Khususnya ini disarankan karena penggantian dengan biaya membatalkan transaksi sebelumnya (oleh karena itu "ganti"). Karena transaksi telah menonaktifkan RBF, disarankan agar Binance membuat transaksi baru secara manual, yang akan menggunakan input yang sama untuk membatalkan transaksi sebelumnya secara paksa.

Beberapa waktu kemudian Binance memberi tahu pengelola bahwa mereka memiliki masalah rekonsiliasi akun. Pengelola tidak dapat mereproduksi masalah tersebut dengan data yang kami berikan oleh Binance, tetapi pada saat itu menyarankan menggunakan opsi baris perintah `-zapwallettxes` untuk mengurangi masalah. Ini penting karena diantisipasi ini juga akan mencegah masalah yang terlihat.

Kemarin 10 November Binance memberi tahu pengelola bahwa transaksi yang sebelumnya macet tiba-tiba berhasil diteruskan, memposting pembaruan 1.14.5; kemungkinan karena minfees telah diturunkan di 1.14.5, membuat transaksi yang sebelumnya valid tetapi tidak dapat direlay menjadi relai. Satu-satunya contoh yang diberikan adalah transaksi dengan biaya yang berlaku pada v1.14.5, tetapi tidak valid (terlalu rendah) di 1.14.3 dan sebelumnya. Perhatikan, Binance diperbarui langsung dari v1.14.3 ke 1.14.5, dalam beberapa hari terakhir.

Berdasarkan informasi yang tersedia, tampaknya transaksi yang sebelumnya macet telah dicoba kembali secara otomatis, seperti yang akan terjadi pada setiap node restart setelah peningkatan - dan berhasil, karena sekarang biaya relai minimum yang diperlukan lebih rendah. Ini adalah perilaku yang benar sebagai akibat dari pengurangan biaya.

## Pelajaran

* Penanganan yang benar untuk membatalkan transaksi adalah dengan membelanjakan input transaksi yang akan dibatalkan ke transaksi yang berbeda, yang membatalkan yang pertama.
  * Idealnya gunakan replace-by-fee jika tersedia, tetapi jika tidak, membuat dan mengirim transaksi yang menghabiskan input yang dipilih sebelumnya, akan membatalkan transaksi sebelumnya.
* Harap dicatat bahwa transaksi tidak memiliki periode waktu tunggu yang ditentukan, tetapi biasanya dibuang karena batas memori.

## Panduan

Yayasan tidak menerima laporan lebih lanjut tentang kejadian ini. Untuk penyedia yang khawatir dengan transaksi tidak valid yang stagnan, kami sarankan untuk menghentikan node, menghapus file mempool.dat untuk berjaga-jaga, dan kemudian memulai node dengan `-zapwallettxes`.

Untuk pengguna individu yang khawatir, perhatikan bahwa mengirim semua Dogecoin Anda kembali ke diri Anda sendiri (idealnya alamat baru, tetapi Anda dapat menggunakan yang sudah ada untuk ini) juga akan menghabiskan hasil transaksi sebelumnya, dan membatalkan transaksi "macet" semacam itu.