const closeBtn = document.querySelector('.closeBtn');
const listBtn = document.querySelector('.listBtn');
const searchPage = document.querySelector('.searchPage');
const mainPage = document.querySelector('.mainPage');
// All Buttons for audio controls
const repeatBtn = document.getElementById('repeatBtn');
const randomBtn = document.getElementById('randomBtn');
const repeatOneBtn = document.getElementById('repeatOneBtn');
const backSongBtn = document.getElementById('backSongBtn');
const pauseSongBtn = document.querySelector('#pauseSong');
const playingSongBtn = document.querySelector('#playingSong');
const frontSongBtn = document.getElementById('frontSongBtn');
const muteBtn = document.getElementById('muteBtn');
const volumeUp = document.getElementById('volumeUp');




closeBtn.addEventListener('click', function () {
    searchPage.style.display = "none";
    mainPage.style.display = "block";
});

listBtn.addEventListener('click', function () {
    mainPage.style.display = "none";
    searchPage.style.display = "block";
});

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
});

playingSongBtn.addEventListener('click', function () {
    pauseSongBtn.style.display = "block";
    playingSongBtn.style.display = "none";
});

volumeUp.addEventListener('click', function () {
    volumeUp.style.display = "none";
    muteBtn.style.display = "block";
});

muteBtn.addEventListener('click', function () {
    volumeUp.style.display = "block";
    muteBtn.style.display = "none";
});

