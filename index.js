var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({ [item]: Math.floor(Math.random() * 100) });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  const l = cart.length;

  if (!l) {
    return console.log('Your shopping cart is empty.');
  }

  let itemsAndPrices = [];

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at \$${price}`);
  }

  switch (itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(' and ');
      break;
    default:
      itemsAndPrices[l - 1] = 'and '.concat(itemsAndPrices[l - 1]);
      itemsAndPrices = itemsAndPrices.join(', ');
  }

  console.log(`In your cart, you have ${itemsAndPrices}.`);
}

function total() {
  let tot = 0;
  for (let i = 0; i < cart.length; i++) {
    let itemAndPrice = cart[i];
    let key = Object.keys(itemAndPrice)[0];
    tot += parseInt(itemAndPrice[key]);
  }
  return tot;
}

function removeFromCart(name) {
  let found = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(name)) {
      found = true;
      cart.splice(i, 1);
      return cart;
    }
  }
  //if we get here, no matching item was found
  console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(cardNumber) {
  let tot = total();
  if (arguments.length === 0 || !cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(
      `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`
    );
    cart = [];
    return cart;
  }
}
