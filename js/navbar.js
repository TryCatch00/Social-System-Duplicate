const focusSpanSearch = document.getElementById("focus-search");
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("focus", () => {
    focusSpanSearch.innerHTML = `<img src="img/icon/search-icon.png" alt="Search Icon">`;
    searchInput.placeholder = "Searching...";
});

searchInput.addEventListener("blur", () => {
    focusSpanSearch.innerHTML = ``;
    searchInput.placeholder = "Search";
});

function toggleResetButton(value) {
    const resetButton = document.getElementById('resetButton');
    if (value !== "") {
        resetButton.style.opacity = "1";
        resetButton.style.pointerEvents = "auto";
    } else {
        resetButton.style.opacity = "0";
        resetButton.style.pointerEvents = "none";
    }
}

function resetInput() {
    console.log("Developer Console: Active system please close.");

    if (searchInput.value !== "") {
        searchInput.value = "";
        toggleResetButton(""); // Butonu güncelle
    } else {
    }
}