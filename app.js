const closeBtn = document.querySelector('.closeBtn');
const listBtn = document.querySelector('.listBtn');
const searchPage = document.querySelector('.searchPage');
const mainPage = document.querySelector('.mainPage');
const pauseSongBtn = document.querySelector('#pauseSong');
const playingSongBtn = document.querySelector('#playingSong');

closeBtn.addEventListener('click', function () {
    searchPage.style.display = "none";
    mainPage.style.display = "block";
});

listBtn.addEventListener('click', function () {
    mainPage.style.display = "none";
    searchPage.style.display = "block";
});


pauseSongBtn.addEventListener('click', function () {
    pauseSongBtn.style.display = "none";
    playingSongBtn.style.display = "block";
});

playingSongBtn.addEventListener('click', function () {
    playingSongBtn.style.display = "none";
    pauseSongBtn.style.display = "block";
});
