//selecting all required elements
const container = document.querySelector(".container"),
musicImg = container.querySelector(".img-container img"),
musicName = container.querySelector(".song-details .name"),
musicArtist = container.querySelector(".song-details .artist"),
musicAudio = container.querySelector("music-file");

let musicIndex = 4;

window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
})

//loads music
function loadMusic(indexNum){
    musicName.innerText = allMusic[indexNum - 1].name;
    musicArtist.innerText = allMusic[indexNum - 1].artist;
    musicImg.src = `images/${allMusic[indexNum - 1].img}.jpg`;
    musicAudio.src = `music/${allMusic[indexNum - 1].src}.mp3`;
}
