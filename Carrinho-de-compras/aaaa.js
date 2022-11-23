<div class='detail-box'>
<div class='cart-product-title'>${title}</div>
<div class='cart-price'>${price}</div>
<input type='number' value='1' class='cart-quantity' />
</div>
<ion-icon name='trash' class='cart-remove'></ion-icon>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.appendChild(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}

//Update total
function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var price = parseFloat(priceElement.innerText.replace("R$", ""));
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var quantity = quantityElement.value;
    total = total + price * quantity;
    //If price Contain some Cents value
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = "R$ " + total;
  }
}