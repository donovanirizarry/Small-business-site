// ===============================
// 📂 Side menu toggle
// ===============================
const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");
const closeBtn = document.getElementById("close-menu");
const overlay = document.getElementById("overlay");

function closeMenu() {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
}

// Open menu
menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
});

// Close with X button
closeBtn.addEventListener("click", closeMenu);

// ===============================
// 🔍 Search toggle
// ===============================
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

function closeSearch() {
  searchInput.classList.remove("active");
  overlay.classList.remove("active");
}

if (searchBtn && searchInput) {
  // Open search
  searchBtn.addEventListener("click", () => {
    searchInput.classList.add("active");
    overlay.classList.add("active");
    searchInput.focus();
  });

  // Close search when input loses focus (Done button)
  searchInput.addEventListener("blur", closeSearch);
}

// ===============================
// 🎯 Overlay click closes both menu + search
// ===============================
overlay.addEventListener("click", () => {
  closeMenu();
  closeSearch();
});
