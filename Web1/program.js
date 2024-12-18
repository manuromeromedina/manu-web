window.onload = function () {
    const scrollingTextContainer = document.getElementById('scrollingText');
    const text = ' 🦋 MARZO 2025 🦋 🦋 MARZO 2025 🦋 🦋 MARZO 2025 🦋 ';
    
    // Duplicamos el texto para hacer que el loop sea continuo
    scrollingTextContainer.innerHTML = `<span>${text.repeat(5)}</span>`; // Repite el texto varias veces para el efecto de loop

    // Asegurarse de reiniciar el audio cuando termine
    var sound = document.getElementById("sound");
    sound.addEventListener("ended", function() {
        sound.currentTime = 0; // Reinicia al inicio del audio
        sound.play(); // Reproduce de nuevo el audio
    });
};

function playSound() {
    var sound = document.getElementById("sound");
    
    if (sound.paused) {
        sound.play(); // Reproduce el sonido si está pausado
    } else {
        sound.pause(); // Pausa el sonido si está reproduciéndose
    }
}
