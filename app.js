const searchPage = document.querySelector('.searchPage');
const mainPage = document.querySelector('.mainPage');

const closeBtn = document.querySelector('.closeBtn');
const listBtn = document.querySelector('.listBtn');
const playingSongImg = document.querySelector('.playingSongImg');
const currentTym = document.getElementById('current');
const totalDuration = document.getElementById('duration');
// All Buttons for audio controls
const repeatBtn = document.getElementById('repeatBtn');
const randomBtn = document.getElementById('randomBtn');
const repeatOneBtn = document.getElementById('repeatOneBtn');
const prevSongBtn = document.getElementById('backSongBtn');
const pauseSongBtn = document.getElementById('pauseSong');
const playingSongBtn = document.getElementById('playingSong');
const nextSongBtn = document.getElementById('frontSongBtn');
const muteBtn = document.getElementById('muteBtn');
const volumeUp = document.getElementById('volumeUp');



const songName = document.getElementById('songName');
const artistName = document.getElementById('artistName');
const songImage = document.getElementById('songImage');
const audio = document.getElementById('audio');




let songIndex = 0;
let playingSong = true;


pauseSongBtn.addEventListener('click', pauseSong);
playingSongBtn.addEventListener('click', playSong);

let imageFill = (songnum) => {
    if (songnum > 3) {
        songImage.style.objectFit = "none"
    } else {
        songImage.style.objectFit = "fill"
    }
}

prevSongBtn.addEventListener('click', function () {

    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    imageFill(songIndex);
    loadSong(songIndex);
});


nextSongBtn.addEventListener('click', function () {
    songIndex = (songIndex + 1) % songs.length;

    imageFill(songIndex);
    loadSong(songIndex);

});


closeBtn.addEventListener('click', function () {
    searchPage.style.display = "none";
    mainPage.style.display = "block";
    mainPage.style.animation = "slideFromBottom 700ms ease-in";

});

listBtn.addEventListener('click', function () {
    mainPage.style.display = "none";
    searchPage.style.display = "block";
    searchPage.style.animation = "slideFromTop 700ms ease-in";
});


// AUDIO CONTROLS

repeatBtn.addEventListener('click', function () {
    repeatBtn.style.display = "none";
    randomBtn.style.display = "block";
    repeatOneBtn.style.display = "none";
});

randomBtn.addEventListener('click', function () {
    repeatBtn.style.display = "none";
    randomBtn.style.display = "none";
    repeatOneBtn.style.display = "block";
});

repeatOneBtn.addEventListener('click', function () {
    repeatBtn.style.display = "block";
    randomBtn.style.display = "none";
    repeatOneBtn.style.display = "none";
});



volumeUp.addEventListener('click', function () {
    volumeUp.style.display = "none";
    muteBtn.style.display = "block";
    audio.muted = true;
});

muteBtn.addEventListener('click', function () {
    volumeUp.style.display = "block";
    muteBtn.style.display = "none";
    audio.muted = false;
});


let loadSong = (songNo) => {
    songName.textContent = songs[songNo].name;
    artistName.textContent = songs[songNo].artist;
    audio.src = "./music/" + `song${songNo}` + ".mp3";
    songImage.src = "./img/" + `song${songNo}` + ".jpg";

    if (playingSong === false) {
        pauseSong();
    } else {
        playSong();
    }
}


function pauseSong() {
    pauseSongBtn.style.display = "none";
    playingSongBtn.style.display = "block";
    playingSongImg.style.animation = "none";
    playingSong = false;
    audio.pause();
}

function playSong() {
    pauseSongBtn.style.display = "block";
    playingSongBtn.style.display = "none";
    playingSongImg.style.animation = "rotate 3s linear infinite";
    playingSong = true;
    audio.play();
}