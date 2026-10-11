const judulHalaman = "Daftar komik saya";
const tahun = 2026;

const profil = {
  nama: "Muhammad Zulfahmi Radityo",
  nim: "25523241",
  kelas: "C",
  kodeMK: "SIF302",
  namaMK: "Pengembangan Aplikasi Berbasis Web",
  status: "Mahasiswa Aktif",
  peran: "Mahasiswa Informatika yang belajar front-end",
  keahlian: ["HTML semantik", "CSS dan design token", "JavaScript ES6+"],
};

const daftarKomik = [
  {
    bagian: 1,
    judul: "One Piece",
    genre: "Petualangan",
    cover: "komik-1.webp",
    alt: "Cover komik One Piece",
    deskripsi: "Koleksi komik One Piece.",
  },
  {
    bagian: 2,
    judul: "The Unbeatable Dungeon's Lazy Boss",
    genre: "Fantasi",
    cover: "komik-2.webp",
    alt: "Cover komik The Unbeatable Dungeon's Lazy Boss",
    deskripsi: "Koleksi komik The Unbeatable Dungeon's Lazy Boss.",
  },
  {
    bagian: 3,
    judul: "Evolution Begins With A Big Tree",
    genre: "Fantasi",
    cover: "komik-3.webp",
    alt: "Cover komik Evolution Begins With A Big Tree",
    deskripsi: "Koleksi komik Evolution Begins With A Big Tree.",
  },
];

const jumlahKomik = daftarKomik.length;

function buatPerkenalan({ nama, peran }) {
  return `${nama} - ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

const buatInisial = (nama) =>
  nama
    .split(" ")
    .map((kata) => kata[0])
    .join("")
    .toUpperCase();

const buatKartuKomik = ({ bagian, cover, alt, deskripsi }) => `
  <div class="kartu">
    <img src="${cover}" alt="${alt}">
    <div class="kartu-konten">
      <h3>Komik Bagian ${bagian}</h3>
      <p>${deskripsi}</p>
    </div>
  </div>`;

const buatButirProfil = ({ ikon, label, nilai }) => `
  <div class="profil-item">
    <span class="profil-ikon">${ikon}</span>
    <span class="profil-label">${label}</span>
    <span class="profil-nilai">${nilai}</span>
  </div>`;

const butirProfil = [
  { ikon: "👤", label: "Nama Lengkap", nilai: profil.nama },
  { ikon: "🪪", label: "NIM", nilai: profil.nim },
  { ikon: "🏛️", label: "Kelas", nilai: profil.kelas },
  { ikon: "📚", label: "Mata Kuliah", nilai: `${profil.namaMK} (${profil.kodeMK})` },
  { ikon: "🛠️", label: "Keahlian", nilai: formatKeahlian(profil.keahlian) },
  { ikon: "📖", label: "Koleksi Komik", nilai: `${jumlahKomik} judul` },
];

document.title = judulHalaman;
document.querySelector("#judul-halaman").textContent = judulHalaman;
document.querySelector("#perkenalan").textContent = buatPerkenalan(profil);
document.querySelector("#profil-avatar").textContent = buatInisial(profil.nama);
document.querySelector("#profil-nama").textContent = profil.nama;
document.querySelector("#profil-badge").textContent = `🎓 ${profil.status}`;
document.querySelector("#profil-grid").innerHTML = butirProfil.map(buatButirProfil).join("");
document.querySelector("#katalog-daftar").innerHTML = daftarKomik.map(buatKartuKomik).join("");
document.querySelector("#catatan-kaki").textContent =
  `© ${tahun} ${profil.nama} — ${profil.kodeMK} ${profil.namaMK}`;

console.group("B - nilai bawaan dan akses aman");
console.log(`Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`);
console.log("typeof nim:", typeof profil.nim, "| typeof jumlahKomik:", typeof jumlahKomik);
console.log("Kota (?. dan ??):", profil.alamat?.kota ?? "belum diisi");
console.groupEnd();

console.group("C - fungsi murni");
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
console.log(buatPerkenalan({ nama: "Ayu", peran: "mahasiswa" }));
console.log(formatKeahlian(["Git"]), "|", formatKeahlian([]) === "");
console.groupEnd();

console.group("D - array methods");
console.table(profil.keahlian);
console.table(daftarKomik);

let genreAktif = "semua";
const saring = (daftar, genre) =>
  genre === "semua" ? daftar : daftar.filter((komik) => komik.genre === genre);
console.log(`genre "${genreAktif}":`, saring(daftarKomik, genreAktif).length, "komik");
genreAktif = "Fantasi";
const komikFantasi = saring(daftarKomik, genreAktif);
console.log(`genre "${genreAktif}":`, komikFantasi.length, "komik");
console.table(komikFantasi);

const onePiece = daftarKomik.find((komik) => komik.judul === "One Piece");
console.log("find ada:", onePiece);
const tidakAda = daftarKomik.find((komik) => komik.judul === "Naruto");
console.log("find tidak ada:", tidakAda, "->", tidakAda?.judul ?? "tidak ditemukan");

const semuaJudul = daftarKomik.map((komik) => komik.judul);
console.log("map:", semuaJudul.length, "sama dengan", daftarKomik.length, semuaJudul);

const urutJudul = [...daftarKomik].sort((a, b) => a.judul.localeCompare(b.judul));
console.log("salinan terurut:", urutJudul.map((komik) => komik.judul));
console.log("data asli tetap:", daftarKomik.map((komik) => komik.judul));

const contoh = { nama: "Contoh" };
const hanyaPenunjuk = contoh;
const salinanSungguhan = { ...contoh };
hanyaPenunjuk.nama = "Diubah lewat penunjuk";
console.log("setelah mengubah penunjuk -> asli:", contoh.nama, "| salinan { ... }:", salinanSungguhan.nama);
console.groupEnd();