const searchInput = document.getElementById("searchInput");
const pageList = document.getElementById("pageList");
const noResults = document.getElementById("noResults");
const randomBtn = document.getElementById("randomBtn");
const quote = document.getElementById("quote");
const teksStatus = document.getElementById('server-gabut');
const pageCards = Array.from(pageList.querySelectorAll(".page-card"));

const statusServer = [
  "🟢 Online",
  "🟢 Server sedang gabut",
  "🟢 Server sedang tidur",
  "🟢 Server sedang main game",
  "🔴 Server sedang ngambek",
  "🟢 Server sedang BAB",
  "🔴 Server sedang marah besar"
]

const quotes = [
  "Mangga sedang menunggu konfirmasi.",
  "Bautmu sudah matang.",
  "Kipas angin sedang menghafal puisi.",
  "Tolong jangan ganggu batu. Dia lagi online.",
  "Keyboard sedang mandi.",
  "Sepatu kiri sedang wawancara kerja.",
  "Kecap sedang mengejar angin.",
  "Pohon nomor delapan salah jurusan.",
  "Kalender sedang merenung.",
  "Roti tawar sedang belajar berbicara.",
  "Kursi VIP untuk ikan terbang.",
  "Pensilmu sudah di-ACC semangka.",
  "Mesin fotokopi sedang menggoreng awan.",
  "Amplop itu sebenarnya pemalu.",
  "Lift sedang berpamitan kepada rumput.",
  "Koin receh sedang sidang skripsi.",
  "Printer sedang fotosintesis.",
  "Batu bata sedang merindukan laut.",
  "Jam dinding baru pulang dari Mars.",
  "Sandal kanan sedang magang di bulan."
];

const pages = [
  "pembuat-keputusan.html",
  "jangan-dipencet.html",
  "tunggu-60-detik.html",
  "hari-ini-kebuang-berapa.html",
  "nilai-yang-tak-bernilai.html",
  "kalkulator.html",
  "cara-menjadi-sukses-instan.html",
  "pendeteksi-overthinking.html",
  "klik-1000-kali.html",
  "tombol-random.html",
  "generator-alasan-telat.html",
  "search-engine.html",
  "real-login.html",
  "nge-mimpi.html"
];

function filterPages(query) {
  const normalized = query.trim().toLowerCase();
  let visibleCount = 0;

  pageCards.forEach((card) => {
    const title = card.dataset.title.toLowerCase();
    const description = card.querySelector("p")?.textContent.toLowerCase() || "";
    const matches = title.includes(normalized) || description.includes(normalized);

    if (!normalized || matches) {
      card.style.display = '';
      visibleCount += 1;
    } else {
      card.style.display = 'none';
    }
  });

  noResults.hidden = visibleCount > 0;
}

function randomizeQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  if (quote) quote.textContent = randomQuote;
}

function randomizeStatus() {
  const randomStatus = statusServer[Math.floor(Math.random() * statusServer.length)];
  teksStatus.textContent = randomStatus;
}

randomizeStatus();

searchInput.addEventListener("input", (event) => {
  console.log("input:", event.target.value);
  filterPages(event.target.value);
});

filterPages("");

randomBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * pages.length);
  const randomPage = pages[randomIndex];
  window.open(randomPage);
});

document.addEventListener('DOMContentLoaded', randomizeQuote);