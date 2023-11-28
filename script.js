const products = [
    { name: 'Đèn Ốp Quạt Trần Ø1000mm MC-KD1364' },
    { name: 'Đèn Ốp Trần LED Hiện Đại L1090mm YN-1601-5' },
    // Add more product data as needed
];

const searchInput = document.getElementById('searchInput');
const productDropdown = document.getElementById('productDropdown');

searchInput.addEventListener('input', function () {
    const inputValue = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(inputValue));

    // Clear existing options in the dropdown
    productDropdown.innerHTML = '';

    if (filteredProducts.length > 0) {
        // Populate the dropdown with matching products
        filteredProducts.forEach(product => {
            const option = document.createElement('option');
            option.value = product.name;
            productDropdown.appendChild(option);
        });

        // Display the dropdown
        productDropdown.style.display = 'block';
    } else {
        // Hide the dropdown if no matching products
        productDropdown.style.display = 'none';
    }
});

document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // You can add additional handling here, such as navigating to a search results page
});

// Handle selection from the dropdown
productDropdown.addEventListener('change', function () {
    searchInput.value = productDropdown.value;
    productDropdown.style.display = 'none';
});
