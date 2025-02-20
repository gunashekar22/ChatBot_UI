document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("searchBtn");
  const userInput = document.getElementById("userInput");

  function handleSearch() {
      const query = userInput.value.trim();
      if (query) {
          window.location.href = `searchdata.html?query=${encodeURIComponent(query)}`;
      } else {
          alert("Please enter a query!");
      }
  }

  // Click event for the search button
  searchBtn.addEventListener("click", handleSearch);

  // Listen for 'Enter' key press in the input field
  userInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
          handleSearch();
      }
  });

  // Retrieve search query from URL and prefill input field
  const params = new URLSearchParams(window.location.search);
  const query = params.get("query");

  if (query) {
      userInput.value = query;
  }
});
