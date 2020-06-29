const all_items_button = Array.from(document.querySelectorAll("button"))
const items_container = document.getElementById('items')
console.log(all_items_button)
const footer = document.getElementsByTagName('footer')

all_items_button.forEach(elt => elt.addEventListener('click', () => {
  console.log(elt)
  console.log(elt.getAttribute('id'))
  let para = document.createElement("P");
  para.innerText = `hello`;
}))


//import data from data.json
import data from './data.js'

let main_div = document.createElement('div');
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
  button.innerHTML = "Add to Cart"
  newDiv.appendChild(button)

  // put new div inside items container
  items_container.appendChild(newDiv)
})

console.log(items_container)






// footer.
// when a add to cart is clicked, add it to the footer

let para = document.createElement("P");
para.innerText = `hello`;