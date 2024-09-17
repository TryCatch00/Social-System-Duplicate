const focusSpanSearch = document.getElementById("focus-search");
const searchInput = document.getElementById("searchInput");
const navbar = document.getElementById("navbar");

let isLogin = false;
if (!isLogin) {
    let innerHTML = `
        <div id="navbar-title">
            <button id="left-bar-button" class="button-class five-button"><img src="img/icon/menu-icon.svg" alt="Bar"></button>
            <a href="index.html" class="button-class info-element-button" id="home-page-rooter"><span class="info-element" style="bottom: -15px;">Home Page</span>Social System <span id="country-lower">EN</span></a>
        </div>
        <div id="search-bar">
            <div id="by-search">
                <div id="input-cont">
                    <span id="focus-search"></span>
                    <input type="text" placeholder="Search" id="searchInput" oninput="toggleResetButton(this.value)" autocomplete="off">
                    <button class="button-class five-button" id="resetButton" onclick="resetInput()" disabled><img src="img/icon/close-icon.svg" alt=""></button>
                </div>
                <button class="button-class info-element-button button-class-bg" id="search-button"><span class="info-element" style="bottom: -20px;">Search</span><img src="img/icon/search-icon.svg" alt="Search"></button>
            </div>
            <button id="mic-button" class="button-class five-button info-element-button button-class-bg"><span class="info-element" style="bottom: -20px;">Make a Voice Call</span><img src="img/icon/mic-icon.svg" alt="Mic"></button>
        </div>
        <div id="tools">
            <button class="five-button button-class info-element-button" id="create-video"><span class="info-element">More</span><img src="img/icon/more-icon.svg" alt="Add"></button>
            <button class="button-class info-element-button" id="sign-in"><span class="info-element">Account</span><img src="img/icon/account-icon-blue.svg" alt="Add">Sign In</button>
        </div>
    `;

    navbar.innerHTML = innerHTML;
}

let mobileInnerHTML = `
    <div id="navbar-title">
        <a href="index.html" class="button-class" id="home-page-rooter" style="padding: 10px 10px;">Social System <span id="country-lower">EN</span></a>
    </div>
    <div id="search-bar">
        <button id="mobile-mic-button" class="button-class five-button"><img src="img/icon/mic-icon.svg" alt="Mic"></button>
        <button class="five-button button-class" id="notification"><img src="img/icon/notification-icon.svg" alt="Anc"><span id="intensity-icon">+0</span></button>
        <button class="button-class five-button" id="mobile-search-button"><img src="img/icon/search-icon.svg" alt="Search"></button>
    </div>
`;

const desktopInnerHTML = navbar.innerHTML;

searchInput.addEventListener("focus", () => {
    focusSpanSearch.innerHTML = `<img src="img/icon/search-icon-blue.svg" style="padding: 2px;" alt="Search Icon">`;
    searchInput.placeholder = "Searching...";
});

searchInput.addEventListener("blur", () => {
    focusSpanSearch.innerHTML = ``;
    searchInput.placeholder = "Search";
});

function toggleResetButton(value) {
    const resetButton = document.getElementById('resetButton');
    if (value !== "") {
        resetButton.style.opacity = ".6";
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
        toggleResetButton("");
    }
}

const mediaQuery = window.matchMedia('(max-width: 991px)');

function handleMediaChange(e) {
    if (e.matches) {
        navbar.innerHTML = mobileInnerHTML;
    } else {
        navbar.innerHTML = desktopInnerHTML;
    }
}

handleMediaChange(mediaQuery);

mediaQuery.addListener(handleMediaChange);