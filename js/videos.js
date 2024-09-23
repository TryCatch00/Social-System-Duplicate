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
        videoWiew: 5700000,
        videoAge: "22.09.2024",
        videoTumbSRC: "img/tumbnail/zyzzturkeytumb.jpg",
        videoSRC: "videos/ZyzzMotivationBrrooo.mp4",
        videoDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non, architecto explicabo laudantium, voluptatibus ipsa reprehenderit aut tempora dolorum autem eaque blanditiis suscipit magni quidem a vero provident sapiente veritatis.`
    }
];

document.addEventListener("DOMContentLoaded", function() {
    getVideo();
});

function getVideo() {
    const videosPrewiew = document.querySelector(".videos-prewiew");
    videos.forEach(cont => {
        let videoHTML = `
            <div class="video-item pointer" id="${cont.videoSRC}">
                <a href="#" class="video-link"></a>
                <div class="video-thumbnail pointer">
                    <video src="" class="prewiew-video"></video>
                    <img src="${cont.videoTumbSRC}">
                    <span class="video-item-tumbnail-time" id="duration-${cont.videoTitle.replace(/\s+/g, '-')}" data-src="${cont.videoSRC}">0:00</span>
                </div>
                
                <div class="video-prewiew-body">
                    <div class="video-channel-logo">
                        <a href="#" class="video-channel-link pointer">
                            <img src="${cont.videoChannelLogoSRC}" class="video-channel-logo-img">
                        </a>
                    </div>
                    <div class="video-info">
                        <a href="#" class="video-prewiew-title pointer">${cont.videoTitle}</a>
                        <div class="title-alt">
                            <a href="#" class="video-prewiew-channel-name pointer info-element-button">
                                ${cont.videoChannel}
                                <span class="info-element">
                                    <img src="img/icon/account-icon.svg" alt="">
                                    <span class="full-channel-name">${cont.videoChannel}</span>
                                </span>
                            </a>
                            <span class="video-prewiew-more">
                                <span>${formatNumber(cont.videoWiew)} Wiew</span> • 
                                <span>${getElapsedTime(cont.videoAge)}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="video-description-cont">
                    <div class="video-description">
                        ${cont.videoDescription}
                        <button class="button-class more-button">More</button>
                    </div>
                </div>
            </div>
        `;

        videosPrewiew.insertAdjacentHTML("afterbegin", videoHTML);

        const videoItem = videosPrewiew.querySelector(`.video-item[id="${cont.videoSRC}"]`);
        
        videoItem.addEventListener("mouseover", () => {
            prewiewVideoGet(cont.videoSRC);  
        });

        videoItem.addEventListener("mouseout", () => {
            let videoM = videoItem.querySelector(".prewiew-video");
            videoM.pause();
            videoM.currentTime = 0;
        });
    });
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
    
    const diffTime = videoDate - now;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 0) {
        return `${diffDays} Days later`;
    } else if (diffDays < 0) {
        return `${Math.abs(diffDays)} Days ago`;
    } else {
        return "Today";
    }
}

let video1 = "";

function prewiewVideoGet(videoSRC) {
    console.log(videoSRC);
    let videoM = document.getElementById(videoSRC).querySelector(".prewiew-video");
    
    if (video1 !== videoSRC) {
        videoM.src = videoSRC;
        videoM.muted = true; 
        videoM.load(); 
        
        videoM.play()
            .then(() => console.log('Video is playing'))
            .catch(error => {
                console.error('Video play error:', error);
            });

        video1 = videoSRC;
    }
}