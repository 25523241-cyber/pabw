# pabw  Muhammad Zulfahmi Radityo  25523241

# pertemuan 3    Halaman profil saya
Topik halaman saya: Koleksi komik favorit saya.

   Judul halaman: Daftar Komik Saya
   Deskripsi: Catatan koleksi komik favorit beserta Chapter dan penambahan komik.
   Tautan navigasi: Daftar Komik, Tambah Komik, Tentang saya
   Dua bagian utama: Daftar Komik, Tambah Komik
   Kolom tabel: Judul Komik, Chapter, Status
   Kolom form: Judul Komik, Jumlah Chapter, Tanggal Beli
   Gambar: komik.webp

## Catatan penggunaan AI

Struktur dokumen disusun dengan bantuan AI (Gemini) dan disesuaikan secara mandiri.

## Pertemuan 4 — Design token halaman profil
 
   Berkas gaya yang akan dibuat: tokens.css, base.css,
  layout.css, komponen.css, tema.css
   Warna utama: #1D3A8C (biru), dipilih karena ...
 
### Token yang saya tetapkan
 
| Token | Nilai | Untuk apa |
| color  primary  |  #047857  | Tombol utama, tautan navigasi, dan penanda |
| color  fg  |  #064E3B  | Warna teks utama |
| color  bg  |  #F0FDF4  | Latar belakang halaman |
| color  surface  |  #FFFFFF  | Latar kartu dan panel |
| color  border  |  #A7F3D0  | Garis pemisah dan tepi kartu |
| color  danger  |  #C2410C  | Peringatan dan isian tidak sah |
| color  focus  |  #059669  | Garis penanda fokus papan ketik |
| space  1  |  0.25rem  | Jarak rapat di dalam komponen |
| space  2  |  0.5rem  | Jarak antar label dan isian form |
| space  3  |  0.875rem  | Jarak di dalam kartu |
| space  4  |  1.25rem  | Jarak standar antar elemen |
| space  6  |  2rem  | Jarak antar bagian halaman |
| radius  md  |  0.75rem  | Sudut membulat kartu, tombol, dan input |
| radius  full  |  9999px  | Bentuk lencana / pil |
| shadow  1  |  0 2px 5px rgba(0,0,0,0.08)  | Bayangan halus kartu |
| text  sm  |  0.875rem  | Keterangan dan teks bantuan |
| text  md  |  1.05rem  | Teks isi utama |
| text  xl  |  1.6rem  | Judul bagian (h2) |
| text  3xl  |  2.5rem  | Judul halaman (h1) |
 
Kriteria selesai saya: mengubah     color  primary di satu baris
harus mengubah warna tombol, tautan, judul, dan garis fokus.

## Pertemuan 8 — Array, objek, dan fungsi murni

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

## Pertemuan 9 — DOM, Events, dan Interaktivitas

- Memilih elemen dengan `querySelector` / `querySelectorAll`, tidak ada yang `null`.
- `js/dom.js` terpisah dari `js/app.js` (data & fungsi murni vs sentuh halaman).
- Render daftar komik dari data pakai `createElement`, `textContent`, `append`.
- Wadah dikosongkan (`textContent = ""`) di baris pertama `render()`.
- Satu listener di induk `#filter` (event delegation) pakai `closest("button")` + `dataset.genre`.
- Tombol aktif ditandai `classList.toggle("active", ...)`.
- Form: `preventDefault()`, pesan galat per kolom, `aria-invalid`, tombol kirim menunggu valid.

### Selector yang saya pakai

| Bagian | Selector | Variabel |
| Wadah daftar | `#katalog-daftar` | `daftarEl` |
| Baris filter | `#filter` | `barisFilter` |
| Pesan kosong | `#katalog-kosong` | `pesanKosong` |
| Form & kolom | `#form-kontak`, `#nama`, `#email`, `#pesan` | `form`, `inputNama`, `inputEmail`, `inputPesan` |
| Tombol kirim | `#tombol-kirim` | `tombolKirim` |
| Status form | `#status-form` | `statusForm` |

### Tiga kasus sulit

| Gejala | Penyebab | Perbaikan |
| `ReferenceError` dan tombol mati | `js/dom.js` belum ditautkan | Tambah `<script src="js/dom.js"></script>` sebelum `</body>` |
| `querySelector` → `null` | Salah ketik nama class | Perbaiki selector agar sesuai HTML |
| `Cannot read properties of null` | `<script>` di `<head>` | Pindahkan `<script>` ke bawah `</body>` |

### Deklarasi penggunaan AI

perbaikan pesan galat,data komik, uji selector, uji filter (Semua 3, Petualangan 1, Fantasi 2, Romansa 0 + pesan), uji form (submit kosong, spasi, tombol menunggu valid), dan uji hapus baris pengosong wadah.
