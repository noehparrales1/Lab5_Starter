// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  console.log(hornSelect);

  const hornImage = document.querySelector("#expose img");
  const hornAudio = document.querySelector("audio");
  const volumeSlider = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");

  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener("change", (event) => {
    const horn = event.target.value;

    hornImage.src = `assets/images/${horn}.svg`;
    hornAudio.src = `assets/audio/${horn}.mp3`;
  console.log("Audio source set to:", hornAudio.src);

  });

  volumeSlider.addEventListener("input", () => {
    const volume = volumeSlider.value;
    hornAudio.volume = volume /100;
    if(volume == 0){
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    }else if (volume < 33){
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    }else if (volume  < 67){
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    }else{
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });

  playButton.addEventListener("click", () =>{
    hornAudio.play();

    if(hornSelect.value === "party-horn"){
      jsConfetti.addConfetti();
    }

  });

}
