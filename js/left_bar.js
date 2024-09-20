let isClickLeftBarButton = localStorage.getItem("leftBarState") === "mini"; // Sayfa yenilendiğinde durumu kontrol et
const leftBarButton = document.getElementById("left-bar-button");
const leftBar = document.getElementById("left-bar");

const leftMiniBarinnerHTML = `
    <div id="tools" class="bar-container button-bor">
            <button class="just-button button-class pointer just-active"><img src="img/icon/home-icon.svg" class="icon pointer"><span class="text pointer">Home Page</span></button>
            <button class="just-button button-class pointer"><img src="img/icon/sub-icon.svg" class="icon pointer"><span class="text pointer">Subs</span></button>
            <button class="just-button button-class pointer"><img src="img/icon/music-icon.svg" class="icon pointer"><span class="text pointer">Music</span></button>
    </div>
    <div class="default-hr"></div>
    <div id="you" class="bar-container button-bor">
        <button class="just-button button-class pointer"><img src="img/icon/tv-icon.svg" class="icon pointer"><span class="text pointer">Channel</span></button>
        <button class="just-button button-class pointer"><img src="img/icon/history-icon.svg" class="icon pointer"><span class="text pointer">Past</span></button>
        <button class="just-button button-class pointer"><img src="img/icon/playlist-icon.svg" class="icon pointer"><span class="text pointer">Play List</span></button>
        <button class="just-button button-class pointer"><img src="img/icon/time-icon.svg" class="icon pointer"><span class="text pointer">Watch Later</span></button>
        <button class="just-button button-class pointer"><img src="img/icon/like-icon.svg" class="icon pointer"><span class="text pointer">Videos I Like</span></button>
    </div></div>
    <div class="default-hr">
    <div id="discover" class="bar-container button-bor">
        <button class="just-button button-class pointer"><img src="img/icon/hot-icon.svg" class="icon pointer"><span class="text pointer">Trends</span></button>
        <button class="just-button button-class pointer"><img src="img/icon/music-icon-2.svg" class="icon pointer"><span class="text pointer">Music</span></button>
        <button class="just-button button-class pointer"><img src="img/icon/live-icon.svg" class="icon pointer"><span class="text pointer">Live</span></button>
        <button class="just-button button-class pointer"><img src="img/icon/game-icon.svg" class="icon pointer"><span class="text pointer">Game</span></button>
    </div>
`;

let leftBarinnerHTML = leftBar.innerHTML;

// Başlangıçta sol çubuğun durumu
if (isClickLeftBarButton) {
    leftBar.classList.add("mini-left-bar");
    leftBar.innerHTML = leftMiniBarinnerHTML;
}

leftBarButton.addEventListener("click", () => {
    if (!isClickLeftBarButton) {
        leftBar.classList.add("mini-left-bar");
        leftBar.innerHTML = leftMiniBarinnerHTML;
        localStorage.setItem("leftBarState", "mini"); // Durumu kaydet
    } else {
        leftBar.classList.remove("mini-left-bar");
        leftBar.innerHTML = leftBarinnerHTML;
        localStorage.setItem("leftBarState", "full"); // Durumu kaydet
    }

    isClickLeftBarButton = !isClickLeftBarButton;
});