const searchButton = document.querySelector('.fa-magnifying-glass')
const searchBar = document.querySelector('.searchBar')
const closeButton = document.querySelector('.closeButton')

const search = document.querySelector('.search')

searchButton.addEventListener('click', function() {
    // Toggle the 'active' class
    searchBar.classList.toggle('active');
    searchInput.focus();
});

closeButton.addEventListener('click', function() {
    // Toggle the 'active' class
    searchBar.classList.toggle('active');
    searchInput.value = '';
});

// Get the input field and list
const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('itemList');

// Function to redirect to the 'result' page
function redirectToResultPage(searchText) {
  // Redirect to the 'result' page with the search query as a parameter
  window.location.href = `/result.html?query=${searchText}`;
}

// Add event listener for keyup event on input
searchInput.addEventListener('keyup', function() {
  // Get the search query
  const searchText = this.value.toLowerCase();
  // Check if Enter key is pressed
  if (event.key === 'Enter' && searchText !== '') {
  // Redirect to the 'result' page
  redirectToResultPage(searchText);
  }
  // Get all list items
  const items = itemList.getElementsByTagName('li');

  // Loop through all list items
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const text = item.textContent.toLowerCase();

    if (!searchText) {
        for (let i = 0; i < items.length; i++) {
          items[i].classList.add('show');
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


search.addEventListener('click', function() {
  const searchText = searchInput.value.trim().toLowerCase();
  if (searchText !== '') {
      // Redirect to the 'result' page
      redirectToResultPage(searchText);
  }
});