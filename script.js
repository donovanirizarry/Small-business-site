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
// Search toggle
const searchToggle = document.getElementById("search-toggle");
const searchBar = document.getElementById("search-bar");

searchToggle.addEventListener("click", () => {
  searchBar.classList.toggle("active");

  if (searchBar.classList.contains("active")) {
    searchBar.focus();
  } else {
    searchBar.value = ""; 
    filterProducts(""); // reset product list
  }
});

// Filter products by search input
searchBar.addEventListener("input", () => {
  filterProducts(searchBar.value.toLowerCase());
});

function filterProducts(query) {
  const products = document.querySelectorAll(".product-card");
  products.forEach(product => {
    const title = product.querySelector("h3").textContent.toLowerCase();
    if (title.includes(query)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
