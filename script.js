document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const suggestions = document.getElementById("suggestions");

  const products = [
      { name: "Đèn Trang Trí A", image: "https://denchauau.vn/media/product/den-chum-quat-thien-ha-mc-kd1364.jpg" },
      { name: "Đèn Trang Trí B", image: "https://denchauau.vn/media/product/den-op-tran-led-hien-dai-th-p063.jpg" },
      // Add other products as needed
  ];

  searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();
      const matchingProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));

      suggestions.innerHTML = "";
      matchingProducts.forEach(product => {
          const suggestionItem = document.createElement("div");
          suggestionItem.classList.add("suggestion-item");
          suggestionItem.innerHTML = `<img src="${product.image}" alt="${product.name}" /> ${product.name}`;
          suggestionItem.addEventListener("click", function () {
              searchInput.value = product.name;
              // You can keep the suggestions visible after a selection if needed
          });
          suggestions.appendChild(suggestionItem);
      });

      // suggestions.style.display = matchingProducts.length > 0 ? "block" : "none"; Remove this line
  });
});

                suggestionsContainer.appendChild(suggestionItem);
            });
        })
        .catch(error => console.error('Error fetching suggestions:', error));
}
