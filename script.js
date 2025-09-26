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

if (menuBtn && sideMenu && closeBtn && overlay) {
  // Open menu
  menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
  });

  // Close with X button
  closeBtn.addEventListener("click", closeMenu);
}

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
  searchBtn.addEventListener("click", () => {
    searchInput.classList.add("active");
    overlay.classList.add("active");
    searchInput.focus();
  });

  searchInput.addEventListener("blur", closeSearch);
}

// ===============================
// 🎯 Overlay click closes both menu + search
// ===============================
if (overlay) {
  overlay.addEventListener("click", () => {
    closeMenu();
    closeSearch();
  });
}

// ===============================
// 🛒 Empty cart message
// ===============================
const cartItems = document.getElementById("cart-items");
const emptyCartMessage = document.getElementById("empty-cart-message");

if (cartItems && emptyCartMessage && !cartItems.hasChildNodes()) {
  emptyCartMessage.style.display = "block";
}

// ===============================
// 📬 Subscribe form feedback
// ===============================
const subscribeForm = document.getElementById("subscribe-form");
const successMessage = document.getElementById("subscribe-success");

if (subscribeForm && successMessage) {
  subscribeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    subscribeForm.reset();
    successMessage.style.display = "block";

    // Optional: hide after a few seconds
    // setTimeout(() => {
    //   successMessage.style.display = "none";
    // }, 4000);
  });
}
