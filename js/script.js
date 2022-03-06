//selecting all required elements
const container = document.querySelector(".container"),
musicImg = container.querySelector(".img-container img"),
musicName = container.querySelector(".song-details .name"),
musicArtist = container.querySelector(".song-details .artist"),
musicAudio = container.querySelector("#music-file"),
playPauseBtn = container.querySelector(".play-pause"),
prevBtn = container.querySelector("#prev"),
nextBtn = container.querySelector("#next"),
progressBar = container.querySelector(".progress-bar");

let musicIndex = 4;

window.addEventListener("load", ()=>{
    loadMusic(musicIndex);// calls loadMusic() once window loads
})

// loads music
function loadMusic(indexNum){
    musicName.innerText = allMusic[indexNum - 1].name;
    musicArtist.innerText = allMusic[indexNum - 1].artist;
    musicImg.src = `images/${allMusic[indexNum - 1].img}.jpg`;
    musicAudio.src = `music/${allMusic[indexNum - 1].src}.mp3`;
}

// play music function
function playMusic(){
    container.classList.add('paused');
    playPauseBtn.querySelector("i").innerText = "pause";
    musicAudio.play();
} 

// pause music function
function pauseMusic(){
    container.classList.remove('paused');
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    musicAudio.pause();
}

// plays the next song
function nextMusic(){
    //increment index by 1
    musicIndex++;
    //if musicIndex is greater than array length then musicIndex will be 1 the first song plays
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

// plays the previous song
function prevMusic(){
    //decrease index by 1
    musicIndex--;
    //if musicIndex is less 1 then musicIndex will be array length so the last song plays
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

// play music button event
playPauseBtn.addEventListener("click", ()=> {
    const isMusicPaused = container.classList.contains("paused");
    // if isMusicPaused is true then call pausedMusic else call playMusic
    isMusicPaused ? pauseMusic() : playMusic();
});

// plays the next song on the list
nextBtn.addEventListener("click", ()=> {
    nextMusic(); //calls the nextMusic function
});

// plays the previous song on the list
prevBtn.addEventListener("click", ()=> {
    prevMusic(); //calls the prevMusic function
});

// update 