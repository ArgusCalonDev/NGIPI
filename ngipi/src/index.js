const searchInput = document.getElementById("searchInput");
const pageList = document.getElementById("pageList");
const noResults = document.getElementById("noResults");
const randomBtn = document.getElementById("randomBtn");
const pageCards = Array.from(pageList.querySelectorAll(".page-card"));
console.log(randomBtn);

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