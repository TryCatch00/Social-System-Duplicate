const focusSpanSearch = document.getElementById("focus-search");
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("focus", () => {
    focusSpanSearch.innerHTML = `<img src="img/icon/search-icon-blue.png">`;
    searchInput.placeholder = "Searching...";
});

searchInput.addEventListener("blur", () => {
    focusSpanSearch.innerHTML = `<img src="img/icon/search-icon.png">`;
    searchInput.placeholder = "Search";
});