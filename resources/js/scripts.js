
const itemsContainer = document.getElementById('items')

const itemList = document.getElementById('item-list')
const cartQty = document.getElementById('cart-qty')
const cartTotal = document.getElementById('cart-total')
itemList.innerHTML = '<li> Hello World </li>'



//import data from data.json
import data from './data.js'
// for each item in data, do something
data.forEach(item => {
  let newDiv = document.createElement('div');
  newDiv.className = 'item'

  // display the image
  let img = document.createElement('img');
  img.src = item.image
  img.width = 300
  img.height = 300
  newDiv.appendChild(img)
  // console.log(img)
  // let img = new Image(1,1); // width, height values are optional params 
  // img.src = item.image;


  let desc = document.createElement('P')
  desc.innerText = item.desc
  newDiv.appendChild(desc)
  // console.log(desc)
  
  let price = document.createElement('P')
  price.innerText = item.price
  newDiv.appendChild(price)
  // console.log(price)

  let button = document.createElement('button')
  button.id = item.name
  // creates a custom attribute called data-price. That will hold price for each element
  // in the button
  button.dataset.price = item.price
  button.innerHTML = "Add to Cart"
  newDiv.appendChild(button)

  // put new div inside items container
  itemsContainer.appendChild(newDiv)
})

// get all the buttons
const all_items_button = Array.from(document.querySelectorAll("button"))
// console.log(all_items_button)
// when each button is clicked, add it to cart
all_items_button.forEach(elt => elt.addEventListener('click', () => {
  console.log(elt)
  console.log(elt.getAttribute('id'))
  addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
  showItems()
}))




// Shopping cart tutorial
const cart = []


// ----------------------------------------------------------------
//handle clicks on list
itemList.onclick = function(e) {
  console.log('clicked')
  if (e.target && e.target.classList.contains('remove')) {
    const name = e.target.dataset.name
    removeItem(name)
  }
}


// adds item to the cart as objects
// ----------------------------------------------------------------
function addItem(name, price) {
  for (let i = 0; i < cart.length; i += 1) {
    // if the same button is clicked twice (same mood clicked twice)
    if (cart[i].name === name) {
      // add quantity
      cart[i].qty += 1
      return  // stop here
    }
  } 
  // const item = {name: name, price: price, qty: 1} or 
  const item = {name, price, qty: 1}
  cart.push(item)
}


// shows item to the cart
//-----------------------------------------------------------------
function showItems() {
  const qty = getQty()
  cartQty.innerHTML = `You have ${qty} items in your cart`
  // console.log(`You have ${qty} items in your cart`)

  let itemStr = ''
  for (let i = 0; i < cart.length; i += 1) {
    const {name, price, qty} = cart[i]
    itemStr += `<li> 
      ${name} $${price} x ${qty} = $${(qty * price).toFixed(2)} 
      <button class='remove' data-name=${name}>Remove</button>
      </li>`
    // console.log(`${cart[i].name} ${cart[i].price} x ${cart[i].qty}`)
  }
  itemList.innerHTML = itemStr

  // to calculate the total amount needed in 
  const total = getTotal()
  cartTotal.innerHTML = `Total in cart: $${total}`
}

// get quantity 
//---------------------------------------------------------------------
function getQty() {
  // show how many items in the cart (in quantity not type)
  let qty = 0
  for (let i=0; i< cart.length; i += 1) {
    qty += cart[i].qty
  }
  return qty
}

// remove items
//-----------------------------------------------------------------------
function removeItem(name, qty=0) {
  for (let i = 0; i < cart.length; i+=1) {
    if (cart[i].name === name) {
      if (qty > 0) {
        cart[i].qty -= qty
      }
      if (cart[i].qty < 1 || qty === 0) {
        cart.splice(i, 1)
      }
      showItems() //refreshes the item list
      return 
    }
  }
}

// get total 
//-----------------------------------------------------------------------
function getTotal() {
  let total = 0
  for (let i = 0; i < cart.length; i += 1) {
    console.log(cart[i].price)
    total += cart[i].price * cart[i].qty
  }
  return total.toFixed(2)
}




// showItems()

// footer.
// when a add to cart is clicked, add it to the footer

