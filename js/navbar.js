const navbar = document.getElementById("navbar");

let isLogin = true;
if (!isLogin) {
    let innerHTML = `
        <div id="navbar-title">
            <button id="left-bar-button" class="button-class five-button info-element-button"><img src="img/icon/menu-icon.svg" alt="Bar"><span class="info-element">Menu</span></button>
            <a href="index.html" class="button-class info-element-button" id="home-page-rooter"><span class="info-element">Home Page</span>Social System <span id="country-lower">EN</span></a>
        </div>
        <div id="search-bar">
            <div id="by-search">
                <div id="input-cont">
                    <span id="focus-search"></span>
                    <input type="text" placeholder="Search" id="searchInput" oninput="toggleResetButton(this.value)" autocomplete="off">
                    <button class="button-class five-button" id="resetButton" onclick="resetInput()" disabled><img src="img/icon/close-icon.svg" alt=""></button>
                </div>
                <button class="button-class info-element-button button-class-bg" id="search-button"><span class="info-element">Search</span><img src="img/icon/search-icon.svg" alt="Search"></button>
            </div>
            <button id="mic-button" class="button-class five-button info-element-button button-class-bg"><span class="info-element">Make a Voice Call</span><img src="img/icon/mic-icon.svg" alt="Mic"></button>
        </div>
        <div id="tools">
            <button class="five-button button-class info-element-button" id="create-video"><span class="info-element">More</span><img src="img/icon/more-icon.svg" alt="Add"></button>
            <button class="button-class info-element-button" id="sign-in"><span class="info-element">Account</span><img src="img/icon/account-icon-blue.svg" alt="Add">Sign In</button>
        </div>
    `;

    navbar.innerHTML = innerHTML;
    listenerFocus();

    
}

const desktopInnerHTML = navbar.innerHTML;

function toggleResetButton(value) {
    const resetButton = document.getElementById('resetButton');
    if (value !== "") {
        resetButton.style.opacity = "1"; 
        resetButton.style.pointerEvents = "auto"; 
        resetButton.disabled = false; 
    } else {
        resetButton.style.opacity = "0"; 
        resetButton.style.pointerEvents = "none"; 
        resetButton.disabled = true; 
    }
}

function resetInput() {
    console.log("Developer Console: Active system please close.");

    const searchInput = document.getElementById("searchInput");
    if (searchInput.value !== "") {
        searchInput.value = "";
        toggleResetButton("");
        searchInput.focus();
    }
}

const mediaQuery = window.matchMedia('(max-width: 991px)');

function handleMediaChange(e) {
    if (e.matches) {
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
        navbar.innerHTML = mobileInnerHTML;
    } else {
        navbar.innerHTML = desktopInnerHTML;
        listenerFocus();
    }
}

handleMediaChange(mediaQuery);
mediaQuery.addListener(handleMediaChange);


function listenerFocus() {
    const searchInput = document.getElementById("searchInput");
    const focusSpanSearch = document.getElementById("focus-search");

    searchInput.addEventListener("focus", () => {
        focusSpanSearch.innerHTML = `<img src="img/icon/search-icon-blue.svg" style="padding: 2px;" alt="Search Icon">`;
        searchInput.placeholder = "...";
    });

    searchInput.addEventListener("blur", () => {
        focusSpanSearch.innerHTML = ``;
        searchInput.placeholder = "Search";
    });
}

