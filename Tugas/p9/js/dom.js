import { daftarKomik, saring } from "./app.js";

const daftarEl = document.querySelector("#katalog-daftar"); 
const barisFilter = document.querySelector("#filter");     
const pesanKosong = document.querySelector("#katalog-kosong"); 

const form = document.querySelector("#form-kontak");
const tombolKirim = document.querySelector("#tombol-kirim");
const statusForm = document.querySelector("#status-form");
const inputNama = document.querySelector("#nama");
const inputEmail = document.querySelector("#email");
const inputPesan = document.querySelector("#pesan");

function buatKartu(komik) {
  const kartu = document.createElement("div");
  kartu.className = "kartu";

  const gambar = document.createElement("img");
  gambar.src = komik.cover;
  gambar.alt = komik.alt;

  const konten = document.createElement("div");
  konten.className = "kartu-konten";

  const judul = document.createElement("h3");
  judul.textContent = komik.judul; 

  const deskripsi = document.createElement("p");
  deskripsi.textContent = `${komik.genre} · ${komik.deskripsi}`;

  konten.append(judul, deskripsi);
  kartu.append(gambar, konten);
  return kartu;
}

function render(daftar, genre = "semua") {
  daftarEl.textContent = ""; 

  if (daftar.length === 0) { 
    pesanKosong.textContent = `Belum ada komik di genre "${genre}".`;
    pesanKosong.hidden = false;
    return;
  }
  pesanKosong.hidden = true;

  const wadah = document.createDocumentFragment();
  daftar.forEach((komik) => wadah.append(buatKartu(komik)));
  daftarEl.append(wadah);
}

function tandaiTombolAktif(tombolAktif) {
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    const aktif = tombol === tombolAktif;
    tombol.classList.toggle("active", aktif);
    tombol.setAttribute("aria-pressed", String(aktif));
  });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button"); 
  if (!tombol) return;                          

  const genre = tombol.dataset.genre;         
  render(saring(daftarKomik, genre), genre);
  tandaiTombolAktif(tombol);
});

const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const aturan = [
  {
    input: inputNama,
    galat: document.querySelector("#galat-nama"),
    periksa: (nilai) => (nilai === "" ? "Nama wajib diisi." : ""),
  },
  {
    input: inputEmail,
    galat: document.querySelector("#galat-email"),
    periksa: (nilai) => {
      if (nilai === "") return "Email wajib diisi.";
      if (!polaEmail.test(nilai)) return "Tulis email dengan format nama@contoh.com.";
      return "";
    },
  },
  {
    input: inputPesan,
    galat: document.querySelector("#galat-pesan"),
    periksa: (nilai) => (nilai === "" ? "Pesan tidak boleh kosong." : ""),
  },
];

function periksaKolom({ input, galat, periksa }) {
  const pesan = periksa(input.value.trim()); 
  const valid = pesan === "";

  galat.textContent = valid ? "" : pesan;
  if (valid) {
    input.removeAttribute("aria-invalid");
  } else {
    input.setAttribute("aria-invalid", "true"); 
  }
  return valid;
}

const semuaValid = () => aturan.every((a) => a.periksa(a.input.value.trim()) === "");

let sudahCobaKirim = false;
function perbaruiTombol() {
  tombolKirim.disabled = sudahCobaKirim && !semuaValid();
}

aturan.forEach((a) => {
  a.input.addEventListener("input", () => {
    statusForm.hidden = true;
    if (sudahCobaKirim || a.input.hasAttribute("aria-invalid")) periksaKolom(a);
    perbaruiTombol();
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sudahCobaKirim = true;

  const hasil = aturan.map(periksaKolom);
  const pertamaGagal = aturan.find((_, i) => !hasil[i]);

  if (pertamaGagal) {
    pertamaGagal.input.focus(); 
    statusForm.hidden = true;
    perbaruiTombol();
    return;
  }

  statusForm.textContent = `Terima kasih, ${inputNama.value.trim()}. Pesanmu sudah diterima.`;
  statusForm.hidden = false;
  form.reset();
  aturan.forEach((a) => {
    a.input.removeAttribute("aria-invalid");
    a.galat.textContent = "";
  });
  sudahCobaKirim = false;
  perbaruiTombol();
});

render(daftarKomik);
tandaiTombolAktif(barisFilter.querySelector('[data-genre="semua"]'));
