function fetchBooks("https://anapioficeandfire.com/api/books").then(renderBooks(json) {
  return response.json();
})
.then(function(json){
})

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
