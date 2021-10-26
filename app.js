const searchPage = document.querySelector('.searchPage');
const mainPage = document.querySelector('.mainPage');

const closeBtn = document.querySelector('.closeBtn');
const listBtn = document.querySelector('.listBtn');
const playingSongImg = document.querySelector('.playingSongImg');
const currentTym = document.getElementById('current');
const totalDuration = document.getElementById('duration');
const songRange = document.getElementById('songRange');

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
const progressbar = document.getElementById('progressbar');

const songName = document.getElementById('songName');
const artistName = document.getElementById('artistName');
const songImage = document.getElementById('songImage');
const audio = document.getElementById('audio');


// SEARCH PAGE
const songImage2 = document.getElementById('songImage2');
const songHeading = document.getElementById('songHeading');
const songListDiv = document.querySelector('.songListDiv');
const allpauseSongBtn = document.querySelectorAll('.pauseSongBtn');
const allplayingSongBtn = document.querySelectorAll('.playingSongBtn');




let songIndex = 0;
let playingSong = false;
let seeking;
let songRangeValue;


pauseSongBtn.addEventListener('click', pauseSong);
let i = 0;
let j = 0;
for (; i < allpauseSongBtn.length; i++) {
    allpauseSongBtn[i].addEventListener("click", pauseSong);
}

for (; j < allplayingSongBtn.length; j++) {
    
    allplayingSongBtn[j].addEventListener('click', playSong);
}

playingSongBtn.addEventListener('click', playSong);

nextSongBtn.addEventListener('click', nextSong);
prevSongBtn.addEventListener('click', prevSong);
// songRange.addEventListener('mousedown', function (event) {
//     seeking = true;
//     seek(event);
// });
// songRange.addEventListener('mousemove', function (event) {
//     seek(event);
// });
// songRange.addEventListener('mouseup', function () {
//     seeking = false;

// });


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

let shufflessText = "repeatBtn";

repeatBtn.addEventListener('click', function () {
    repeatBtn.style.display = "none";
    randomBtn.style.display = "block";
    repeatOneBtn.style.display = "none";
    shufflessText = "randomBtn";
    console.log(shufflessText);
});

randomBtn.addEventListener('click', function () {
    repeatBtn.style.display = "none";
    randomBtn.style.display = "none";
    repeatOneBtn.style.display = "block";
    shufflessText = "repeatOneBtn";
    console.log(shufflessText);
});

repeatOneBtn.addEventListener('click', function () {
    repeatBtn.style.display = "block";
    randomBtn.style.display = "none";
    repeatOneBtn.style.display = "none";
    shufflessText = "repeatBtn";
    console.log(shufflessText);
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
    songHeading.innerText = songs[songNo].name;
    artistName.textContent = songs[songNo].artist;
    audio.src = "./music/" + `song${songNo}` + ".mp3";
    songImage.src = "./img/" + `song${songNo}` + ".jpg";
    songImage2.src = "./img/" + `song${songNo}` + ".jpg";

    if (playingSong === false) {
        pauseSong();
    } else {
        playSong();
    }
}

loadSong(songIndex);


function pauseSong() {
    pauseSongBtn.style.display = "none";
    playingSongBtn.style.display = "block";
    playingSongImg.style.animation = "none";
    songImage2.style.animation = "none";
    playingSong = false;
    audio.pause();
}

function playSong() {
    pauseSongBtn.style.display = "block";
    playingSongBtn.style.display = "none";
    playingSongImg.style.animation = "rotate 3s linear infinite";
    songImage2.style.animation = "rotate 3s linear infinite";
    playingSong = true;
    audio.play();
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    imageFill(songIndex);
    loadSong(songIndex);
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    imageFill(songIndex);
    loadSong(songIndex);
}


function imageFill(songnum) {
    if (songnum > 3) {
        songImage.style.objectFit = "none";
        songImage2.style.objectFit = "none";
    } else {
        songImage.style.objectFit = "fill";
        songImage2.style.objectFit = "fill";
    }
}



audio.addEventListener('timeupdate', function () {

    const dur = Math.floor(audio.duration);
    const cur = Math.floor(audio.currentTime);


    if (duration.innerText === "0NaN:0NaN") {

        duration.textContent = "00:00";
        currentTym.textContent = "00:00"
    } else {
        duration.textContent = updateTime(dur);
        currentTym.textContent = updateTime(cur);
        songRange.value = (cur / dur) * 100;
        if (cur === dur) {
            shuffle();
        }
        if (songRange.value < 87) {
            progressbar.style.width = songRange.value + "%";
        } else {
            return;
        }
    }

});


function updateTime(curAndDur) {
    var sec = Math.floor(curAndDur);
    var min = Math.floor(sec / 60);
    min = min >= 10 ? min : '0' + min;
    sec = Math.floor(sec % 60);
    sec = sec >= 10 ? sec : '0' + sec;
    return (min + ":" + sec);
}


function shuffle() {
    let getTxt = shufflessText;

    switch (getTxt) {
        case "repeatBtn":
            nextSong();
            console.log(songIndex);
            break;

        case "repeatOneBtn":
            audio.currentTime = 0;
            imageFill(songIndex);
            loadSong(songIndex);
            console.log(songIndex);
            break;

        case "randomBtn":
            songIndex = Math.floor(Math.random() * songs.length);
            imageFill(songIndex);
            loadSong(songIndex);
            console.log(songIndex);
            break;
    }
}



songs.forEach((elm, index) => {
    let liTag = `<li liIndex="${index}">
        <div class="songsNameAndBtnDiv">
            <div class="songsNameDiv">
                <h4 class="songName">${elm.name}</h4>
                <h6 class="artistName">${elm.artist}</h6>
            </div>

            <a id="pauseSong${index}" class="pauseSongBtn"><i class="fas fa-solid fa-pause" title="Pause"></i></a>
            <a id="playingSong${index}" class="playingSongBtn"><i class="fas fa-solid fa-play" title="Play"></i></a>

        </div>
        <audio class="${elm.src}" src="./music/song${index}.mp3"></audio>

    </li>`;
    songListDiv.insertAdjacentHTML('beforeend', liTag);

});

// function seek(event) {
//     if (audio.duration == 0) {
//         null;
//     } else {
//         if (seeking) {

//             const dur = Math.floor(audio.duration);
//             const cur = Math.floor(audio.currentTime);

//             songRange.value = (cur / dur) * 100;
//             let seekTo = dur * (songRange.value  / 100);
//             audio.currentTime = seekTo;
//             // console.log(songRange.value);
//             console.log(seekTo)
//         }
//     }
// }
