// Function to get the value of a URL parameter by name
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Function to filter items based on search query
function filterItems(searchQuery) {
    // Get all items
    const items = document.querySelectorAll('.recipes__content');
    let matchCount = 0; // Variable to count matching items

    // Loop through all items
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        const itemParent = item.closest('.sunny');

        if (!searchQuery || text.includes(searchQuery.toLowerCase())) {
            // If the search query is empty or matches the item text, show the item
            itemParent.classList.add('show');
            matchCount++; // Increment match count
            console.log(matchCount)
        } else {
            // Otherwise, hide the item
            itemParent.classList.remove('show');
        }
    });

    // Display message if no matches found
    if (matchCount === 0) {
        // Select the element where you want to display the message
        const messageContainer = document.getElementById('noResultsMessage');
        if (messageContainer) {
            messageContainer.textContent = 'Sunny can not find that recipes.';
        }
    } else {
        // Clear the message if there are matches
        const messageContainer = document.getElementById('noResultsMessage');
        if (messageContainer) {
            messageContainer.textContent = '';
        }
    }
}

// Get the search query from the URL parameter named 'query'
var searchQuery = getParameterByName('query');

// Use the search query as needed, for example:
console.log('Search Query:', searchQuery);

const searchResult = document.getElementById('searchResult');
searchResult.value = searchQuery;

// Filter items based on the initial search query
filterItems(searchQuery);

// Event listener for keyup to filter items based on search query
searchResult.addEventListener('keyup', function() {
    // Get the search query
    let searchQuery = this.value.trim();
    
    // Filter iteams based on the search query
    filterItems(searchQuery);
});

document.addEventListener('DOMContentLoaded', function() {
    filterItems(searchQuery);
});