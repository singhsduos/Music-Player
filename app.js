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
const audio = document.getElementById('audio');


let songIndex = 0;

prevSongBtn.addEventListener('click', function () {

    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    console.log(songIndex);
});


nextSongBtn.addEventListener('click', function () {
    songIndex = (songIndex + 1) % songs.length;
    console.log(songIndex);

   
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

pauseSongBtn.addEventListener('click', function () {
    pauseSongBtn.style.display = "none";
    playingSongBtn.style.display = "block";
    playingSongImg.style.animation = "none";
    audio.pause();
});

playingSongBtn.addEventListener('click', function () {
    pauseSongBtn.style.display = "block";
    playingSongBtn.style.display = "none";
    playingSongImg.style.animation = "rotate 3s linear infinite";
    audio.play();
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

