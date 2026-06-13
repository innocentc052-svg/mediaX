const videoPlayer = document.getElementById("videoPlayer");
const fileAccept  = document.getElementById("fileAccept");
const seek = document.getElementById("seek");
const volControl = document.getElementById("volContrl");
let rep = false

fileAccept.addEventListener("change", function () {
  let file = fileAccept.files[0];
  videoPlayer.src = URL.createObjectURL(file);
  videoPlayer.load();
  videoPlayer.controls = false;
})

videoPlayer.addEventListener("loadedmetadata", function () {
    seek.max = videoPlayer.duration;

    
})

videoPlayer.addEventListener("timeupdate", function () {
    seek.value = videoPlayer.currentTime;
})

seek.addEventListener("input", function () {
    videoPlayer.currentTime = seek.value;
  
})

volControl.addEventListener("input", function () {
    videoPlayer.volume = volControl.value;
})


function repeat() {
    console.log('a'
    )
    rep = true;
}

function check () {
     if(videoPlayer.duration === videoPlayer.currentTime && rep === true)  {
       console.log('a');
       videoPlayer.currentTime = 0;
       videoPlayer.play();
        
    }
    requestAnimationFrame(check);
}

check();