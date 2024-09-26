let videos = [
    {
        videoTitle: `F1 | Official Teaser`,
        videoChannel: "Pounter",
        videoChannelLogoSRC: "img/channel_logo/pounter.png",
        videoWiew: 5700000,
        videoAge: "22.09.2024",
        videoTumbSRC: "img/tumbnail/f1-tumbnail.jpg",
        videoSRC: "videos/f1-trailer.mp4",
        videoDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non, architecto explicabo laudantium, voluptatibus ipsa reprehenderit aut tempora dolorum autem eaque blanditiis suscipit magni quidem a vero provident sapiente veritatis.`
    },
    {
        videoTitle: `Zyzz Motivasyon Konuşması Altyazı Zyzz Türkiye`,
        videoChannel: "Mal1kore1ss",
        videoChannelLogoSRC: "img/channel_logo/maliko.png",
        videoWiew: 10000,
        videoAge: "10.04.2010",
        videoTumbSRC: "img/tumbnail/zyzzturkeytumb.jpg",
        videoSRC: "videos/ZyzzMotivationBrrooo.mp4",
        videoDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non, architecto explicabo laudantium, voluptatibus ipsa reprehenderit aut tempora dolorum autem eaque blanditiis suscipit magni quidem a vero provident sapiente veritatis.`
    },
    {
        videoTitle: `Margin | CSS 3`,
        videoChannel: "TryCatch",
        videoChannelLogoSRC: "img/channel_logo/trychatchnew_2.png",
        videoWiew: 5,
        videoAge: "22.09.2024",
        videoTumbSRC: "img/tumbnail/padding-trycatch-video.jpg",
        videoSRC: "videos/Margin_CSS_3.mp4",
        videoDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non, architecto explicabo laudantium, voluptatibus ipsa reprehenderit aut tempora dolorum autem eaque blanditiis suscipit magni quidem a vero provident sapiente veritatis.`
    },
    {
        videoTitle: `Dust 2 Muhtar Adayı`,
        videoChannel: "Kamusal Mizah",
        videoChannelLogoSRC: "img/channel_logo/kamusalmizah.jpg",
        videoWiew: 20000,
        videoAge: "22.09.2015",
        videoTumbSRC: "img/tumbnail/Dust_2_Muhtar_Adayi.jpg",
        videoSRC: "videos/Dust _2_Muhtar_Adayı.mp4",
        videoDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non, architecto explicabo laudantium, voluptatibus ipsa reprehenderit aut tempora dolorum autem eaque blanditiis suscipit magni quidem a vero provident sapiente veritatis.`
    }
];

document.addEventListener("DOMContentLoaded", function() {
    getVideo();
});

// PREVIEW

function getVideo() {
    const videosPrewiew = document.querySelector(".videos-prewiew");
    videos.forEach(cont => {
        let videoHTML = `    
        <div class="video-item-cont">
            <div class="video-item pointer" id="${cont.videoSRC}">
                <a href="#" class="video-link"></a>
                <div class="video-thumbnail pointer">
                    <input type="range" class="video-range" min="0" max="100" value="0">
                    <button class="video-button mute-button button-class five-button"><img src="img/icon/mute-icon.svg"></button>
                    <video src="${cont.videoSRC}" class="prewiew-video" preload="metadata"></video>
                    <img src="${cont.videoTumbSRC}">
                    <span class="video-item-tumbnail-time" id="duration-${cont.videoTitle.replace(/\s+/g, '-')}" data-src="${cont.videoSRC}">0:00</span>
                    <span class="current-time" id="current-${cont.videoTitle.replace(/\s+/g, '-')}" style="display: none;">0:00</span>
                </div>
                
                <div class="video-prewiew-body">
                    <div class="video-channel-logo">
                        <a href="#" class="video-channel-link pointer">
                            <img src="${cont.videoChannelLogoSRC}" class="video-channel-logo-img">
                        </a>
                    </div>
                    <div class="video-info">
                        <a href="#" class="video-prewiew-title pointer" title="${cont.videoTitle}">${cont.videoTitle}</a>
                        <div class="title-alt">
                            <div class="video-prewiew-channel-name pointer info-element-button">
                                <a href="#" class="short-name">${cont.videoChannel}</a>
                                <span class="info-element">
                                    <img src="img/icon/account-icon.svg" alt="">
                                    <span class="full-channel-name">${cont.videoChannel}</span>
                                </span>
                            </div>
                            <span class="video-prewiew-more">
                                <span>${formatNumber(cont.videoWiew)} Views</span> • 
                                <span>${getElapsedTime(cont.videoAge)}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="video-description-cont">
                <div class="video-description">
                    ${cont.videoDescription}
                </div>
            </div>
        </div>
        `;
        videosPrewiew.insertAdjacentHTML("afterbegin", videoHTML);

        const videoItem = videosPrewiew.querySelector(`.video-item[id="${cont.videoSRC}"]`);
        let videoM = videoItem.querySelector(".prewiew-video");
        let rangeInput = videoItem.querySelector(`.video-range`);
        let muteButton = videoItem.querySelector(`.mute-button`);
        let currentTimeSpan = videoItem.querySelector(`.current-time`);

        // Video süresi yüklendiğinde süreyi göster
        videoM.addEventListener('loadedmetadata', () => {
            const durationSpan = videosPrewiew.querySelector(`#duration-${cont.videoTitle.replace(/\s+/g, '-')}`);
            durationSpan.innerText = formatTime(videoM.duration);
        });

        videoItem.addEventListener("mouseenter", () => {
            prewiewVideoGet(cont.videoSRC);
            currentTimeSpan.style.display = 'block'; // Hover olduğunda göster
        });

        videoItem.addEventListener("mouseleave", () => {
            videoM.pause();
            currentTimeSpan.style.display = 'none'; // Hoverdan çıkınca gizle
        });

        rangeInput.addEventListener("input", () => {
            videoM.currentTime = (videoM.duration * rangeInput.value) / 100;
        });

        videoM.addEventListener('timeupdate', () => {
            rangeInput.value = (videoM.currentTime / videoM.duration) * 100;
            const currentTimeFormatted = formatTime(videoM.currentTime);
            currentTimeSpan.innerText = currentTimeFormatted; // Güncel süreyi göster
        });

        muteButton.addEventListener('click', () => {
            videoM.muted = !videoM.muted;
            muteButton.innerHTML = videoM.muted ? `<img src="img/icon/mute-icon.svg">` : `<img src="img/icon/unmute-icon.svg">`; // Düğme metnini güncelle
        });
    });
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`; // MM:SS formatında göster
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + ' Mn';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + ' Bn';
    } else {
        return num.toString();
    }
}

function getElapsedTime(videoAge) {
    const videoDate = new Date(videoAge.split('.').reverse().join('-'));
    const now = new Date();
    
    const diffTime = now - videoDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = now.getMonth() - videoDate.getMonth() + (12 * (now.getFullYear() - videoDate.getFullYear()));
    const diffYears = now.getFullYear() - videoDate.getFullYear();

    if (diffDays < 0) {
        return `${Math.abs(diffDays)} Days later`;
    } else if (diffYears > 0) {
        return `${diffYears} Year${diffYears > 1 ? 's' : ''} ago`;
    } else if (diffMonths > 0) {
        return `${diffMonths} Month${diffMonths > 1 ? 's' : ''} ago`;
    } else if (diffWeeks > 0) {
        return `${diffWeeks} Week${diffWeeks > 1 ? 's' : ''} ago`;
    } else {
        return `${diffDays} Day${diffDays > 1 ? 's' : ''} ago`;
    }
}

let video1 = "";
let currentVideoTime = 0;

function prewiewVideoGet(videoSRC) {
    let videoM = document.getElementById(videoSRC).querySelector(".prewiew-video");
    
    if (video1 !== videoSRC) {
        videoM.src = videoSRC;
        videoM.muted = true; 
        videoM.load(); 
        videoM.currentTime = currentVideoTime; 
        
        videoM.play()
            .then(() => console.log('Video is playing'))
            .catch(error => {
                console.error('Video play error:', error);
            });

        video1 = videoSRC;
    } else {
        videoM.currentTime = currentVideoTime; 
        videoM.play();
    }

    videoM.addEventListener('timeupdate', () => {
        currentVideoTime = videoM.currentTime; 
    });
}