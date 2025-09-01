let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(name + " added to cart!");
}

function loadCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  const cartTotalP = document.getElementById('cart-total');
  if (!cartItemsDiv || !cartTotalP) return;
  
  cartItemsDiv.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.textContent = item.name + " - $" + item.price.toFixed(2);
    cartItemsDiv.appendChild(div);
    total += item.price;
  });
  cartTotalP.textContent = "Total: $" + total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', loadCart);
