function toggleAudio() {


    var audio = document.getElementById("miAudio");
    var icono = document.getElementById("iconoAudio");
    
    if (audio.paused) {
        audio.play();
        icono.textContent = "pause";
    } else {
        audio.pause();
        icono.textContent = "volume_up";
    }
}
