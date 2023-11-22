document.getElementById('searchForm').addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();
    // Get the search input value
    var searchInput = document.getElementById('searchInput').value;
    // Perform your search logic here (you can replace this with your actual search logic)
    alert('Searching for: ' + searchInput);
    // You can add more advanced search functionality or redirect to a search results page.
});

document.getElementById('searchInput').addEventListener('input', function () {
    var searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim() !== '') {
        // Call a function to fetch product suggestions based on the search input
        fetchProductSuggestions(searchInput);
    } else {
        // Clear suggestions if the search input is empty
        document.getElementById('suggestions').innerHTML = '';
    }
});

function fetchProductSuggestions(query) {
    // Replace the URL with the actual URL of your server endpoint
    var url = 'https://example.com/api/products?query=' + encodeURIComponent(query);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Display the suggestions
            var suggestionsContainer = document.getElementById('suggestions');
            suggestionsContainer.innerHTML = '';

            data.products.forEach(function (product) {
                var suggestionItem = document.createElement('div');
                suggestionItem.textContent = product;
                suggestionItem.classList.add('suggestion-item');

                suggestionItem.addEventListener('click', function () {
                    // Set the selected suggestion as the search input value
                    document.getElementById('searchInput').value = product;
                    // Clear the suggestions
                    suggestionsContainer.innerHTML = '';
                });

                suggestionsContainer.appendChild(suggestionItem);
            });
        })
        .catch(error => console.error('Error fetching suggestions:', error));
}
