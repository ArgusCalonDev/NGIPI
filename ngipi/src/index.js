const searchInput = document.getElementById("searchInput");
const pageList = document.getElementById("pageList");
const noResults = document.getElementById("noResults");
const pageCards = Array.from(pageList.querySelectorAll(".page-card"));

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
