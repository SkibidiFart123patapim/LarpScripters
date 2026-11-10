const searchInput = document.getElementById("search-input");
const cards = [...document.querySelectorAll(".script-card")];
const filterButtons = [...document.querySelectorAll(".filter-btn")];
const emptyState = document.getElementById("empty-state");
const count = document.getElementById("script-count");
let activeFilter = "All";

document.getElementById("year").textContent = new Date().getFullYear();

function updateCards() {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;

  cards.forEach(card => {
    const category = card.dataset.category;
    const searchText = `${card.dataset.search} ${card.innerText}`.toLowerCase();
    const matchesFilter = activeFilter === "All" || category === activeFilter;
    const matchesSearch = searchText.includes(query);
    const show = matchesFilter && matchesSearch;
    card.hidden = !show;
    if (show) visible++;
  });

  emptyState.hidden = visible !== 0;
  count.textContent = `${visible} SCRIPT${visible === 1 ? "" : "S"}`;
}

searchInput.addEventListener("input", updateCards);

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle("selected", item === button));
    updateCards();
  });
});

let toastTimer;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelectorAll(".copy-btn").forEach(button => {
  button.addEventListener("click", async () => {
    // The data-copy attribute stores the exact plain-text snippet.
    const code = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(code);
      showToast("Code copied to clipboard!");
    } catch {
      // Fallback for browsers that block clipboard access.
      const textArea = document.createElement("textarea");
      textArea.value = code;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      const copied = document.execCommand("copy");
      textArea.remove();
      showToast(copied ? "Code copied to clipboard!" : "Copy failed — select the code manually.");
    }
  });
});

updateCards();
