### Deklarasi penggunaan AI

- **Dibantu AI :** penulisan `js/app.js`, terutama pada bagian:
  - pemakaian `map`, `filter`, dan `find`
  - pengujian kecil di browser untuk memastikan data tampil dan tidak ada galat.

- **Pengujian singkat di `js/app.js`:**
  - `profil.alamat?.kota ?? "belum diisi"` diuji untuk memastikan akses aman saat properti tidak ada.
  - `saring(daftarKomik, genreAktif)` diuji dengan `genreAktif = "semua"` lalu diubah ke `"Fantasi"` untuk memeriksa hasil `filter`.
  - `daftarKomik.find(...)` diuji untuk kasus data yang ada (`One Piece`) dan data yang tidak ada (`Naruto`).
  - `[...daftarKomik].sort(...)` diuji untuk memastikan data asli tidak berubah setelah pengurutan.
  - `{ ...contoh }` diuji untuk membedakan salinan objek sungguhan dengan penunjuk objek yang sama.

Catatan: tiga galat di Lembar E dipicu sengaja untuk direkam, dan gambar di bukti/1..3 adalah log Console yang ditangkap otomatis.