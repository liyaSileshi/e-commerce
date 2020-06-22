let all_items = Array.from(document.querySelectorAll("button"))
console.log(all_items)


all_items.forEach(elt => elt.addEventListener('click', () => {
  console.log(elt)
  console.log(elt.getAttribute('id'))
}))



