// Side menu toggle
const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");
const closeBtn = document.getElementById("close-menu");
const overlay = document.getElementById("overlay");

// Open menu
menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
});

// Close menu function
function closeMenu() {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
}

// Close with X button
closeBtn.addEventListener("click", closeMenu);

// Close by clicking overlay
overlay.addEventListener("click", closeMenu);


// ===============================
// 🔍 Search toggle
// ===============================
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

if (searchBtn && searchInput) {
  searchBtn.addEventListener("click", () => {
    searchInput.classList.toggle("active");
    if (searchInput.classList.contains("active")) {
      searchInput.focus();
    }
  });
}
