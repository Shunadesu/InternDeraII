const searchButton = document.querySelector('.fa-magnifying-glass')
const searchBar = document.querySelector('.searchBar')
const closeButton = document.querySelector('.closeButton')

searchButton.addEventListener('click', function() {
    // Toggle the 'active' class
    searchBar.classList.toggle('active');
});

closeButton.addEventListener('click', function() {
    // Toggle the 'active' class
    searchBar.classList.toggle('active');
});

// Get the input field and list
const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('itemList');

// Add event listener for keyup event on input
searchInput.addEventListener('keyup', function() {
  // Get the search query
  const searchText = this.value.toLowerCase();

  // Get all list items
  const items = itemList.getElementsByTagName('li');

  // Loop through all list items
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const text = item.textContent.toLowerCase();

    if (!searchText) {
        for (let i = 0; i < items.length; i++) {
          items[i].classList.remove('show');
        }
        return; // Exit the function early
      }

    // If the item matches the search query, display it, otherwise hide it
    if (text.indexOf(searchText) !== -1) {
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  }
});
