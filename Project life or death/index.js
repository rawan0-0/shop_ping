function addToCart(product) {
  var cart = document.getElementById('cart');
  var cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.innerText = product;
  cart.appendChild(cartItem);
}

// Hamburger menu functionality
var hamburger = document.querySelector('.hamburger');
var navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
  navMenu.classList.toggle('show');
});
  
