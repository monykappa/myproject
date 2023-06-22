var searchInput = document.getElementById("search");

function search() {
  var searchValue = searchInput.value;
  // Perform search and update search-results div
  var searchResults = document.getElementById("search-results");
  searchResults.innerHTML = "Results for: " + searchValue;
}