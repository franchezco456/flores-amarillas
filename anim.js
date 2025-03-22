// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 18 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 26 },
  { text: "Y el amarillo del sol, iluminaba la esquina", time: 33.84 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 41.11 },
  { text: "Ella sabía que él sabía, Que algún día pasaría", time: 47.3 },
  { text: "Que vendría a buscarla, Con sus flores amarillas", time: 51.9 },
  { text: "T amo mucho <3", time: 60 }
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;
      for (var i = 1; i <= lyricsData.length; i++) {
        var extra = 0;
        switch (i){ 
        case 1:
          extra = 5.5;
        break;
        case 2:
          extra = 5.6;
        break;
        case 3:
          extra = 7.1;
        break; 
        case 4:
          extra = 5;
        break;
        case 5:
          extra = 4.23;
        break;
        case 6:
          extra = 6.1;
        break;
        case 7:
          extra = 200;
          break;
        }
        if (extra !== 0) {
          break; // Rompe el bucle for si se encuentra una coincidencia
        }
      }
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + extra
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 0);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);