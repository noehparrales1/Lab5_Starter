window.addEventListener("DOMContentLoaded", () => {
  const voiceSelect = document.getElementById("voice-select");
  const faceImage = document.querySelector("img");
  const speakButton = document.querySelector("button");
  const textArea = document.getElementById("text-to-speak");

  function populateVoiceList() {
    const voices = speechSynthesis.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.value = voices[i].name;
      voiceSelect.appendChild(option); 
    }
  }
  populateVoiceList();
  speechSynthesis.onvoiceschanged = populateVoiceList;

speakButton.addEventListener("click", () =>{
    const text = textArea.value;
    if (!text) return; 

    const utterThis = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    const selectedVoice = voiceSelect.value;
    utterThis.voice = voices.find(v => v.name === selectedVoice);

    faceImage.src = "assets/images/smiling-open.png";


    utterThis.onend = () => {
      faceImage.src = "assets/images/smiling.png"
    };

    speechSynthesis.speak(utterThis);



})

});


