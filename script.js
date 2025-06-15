var arr = [
  {
    songName: "Born to shine",
    url: "./songs/Born to shine.mp3",
    image: "./images/born to shine.jpg",
  },
  {
    songName: "Brown munde",
    url: "./songs/Brown munde.mp3",
    image: "./images/brown munde.jpg",
  },
  {
    songName: "change maade din",
    url: "songs/Change Maade Din Abraam.mp3",
    image: "./images/change madee din.jpg",
  },
  {
    songName: "heart break",
    url: "./songs/heart break.mp3",
    image: "./images/heart brake.jpg",
  },
];

var allsongs = document.querySelector(".allsong");
var poster = document.querySelector(".left");
var play = document.querySelector(".play")
var backward = document.querySelector(".backward")
var forward = document.querySelector(".forward")


var audio = new Audio();
var selectedSong = 0

function songCard(){
    var clutter = "";
    arr.forEach(function (obj, index) {
      clutter += `<div class="song-card" id="${index}">
                            <div class="part-1">
                                <img  src="${obj.image}" alt="">
                                <h2 >${obj.songName}</h2>
                            </div>
                            <h6>3:54</h6>
                        </div>`;
    });
    allsongs.innerHTML = clutter;
    audio.src = arr[selectedSong].url
    poster.style.backgroundImage = `url("${arr[selectedSong].image}")`
    // console.log(poster)
     backward.style.opacity = selectedSong === 0 ? 0.3 : 1;
    forward.style.opacity = selectedSong === arr.length - 1 ? 0.3 : 1
}

songCard()
allsongs.addEventListener("click", function (details) {
        selectedSong = details.target.id
        play.innerHTML = `<i class="ri-pause-line"></i>`
        flag = 1   
        songCard();
        audio.play();
})

var flag = 0
play.addEventListener("click",function(){
  if(flag == 0){ 
    play.innerHTML = `<i class="ri-pause-line"></i>`
    songCard();
    audio.play();
    flag = 1
  }
  else{
    play.innerHTML =`<i class="ri-play-fill"></i>`
    songCard();
    audio.pause();
    flag = 0
  }
})

forward.addEventListener("click",function(){
  if(selectedSong < arr.length-1){
    selectedSong++;
    play.innerHTML =`<i class="ri-play-fill"></i>`
    setTimeout(function(){
      play.innerHTML = `<i class="ri-pause-line"></i>`
      flag = 1 
      songCard();
      audio.play();
    },500)
  }
  else{
    forward.style.opacity = 0.3
  }
})

backward.addEventListener("click",function(){
  if(selectedSong > 0){
    selectedSong--;
    play.innerHTML =`<i class="ri-play-fill"></i>`
    setTimeout(function(){
      play.innerHTML = `<i class="ri-pause-line"></i>`
      flag = 1 
      songCard();
      audio.play();
    },500)
  }else{
    backward.style.opacity = 0.3
  }
})