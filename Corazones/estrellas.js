const starContainer = document.getElementById("stars");
const messageBox = document.getElementById("message");
const endMsg = document.getElementById("endMsg");

const messages = [
  "Eres mi paz en medio de cualquier tormenta 🌟",
  "Cada vez que miro el cielo, pienso en ti 💫",
  "Si pudiera pedir un deseo… sería vivir mil noches contigo ✨",
  "Tu risa brilla más que cualquier estrella 🌌",
  "A veces no lo digo, pero te amo en silencio todos los días 💖",
  "No importa la distancia, te siento cerca cuando cierro los ojos 💞",
  "El universo fue generoso al cruzar nuestros caminos 🌠",
  "Si el cielo hablara, diría tu nombre 💫",
  "Te elegiría en cada vida, sin dudarlo 💕",
  "Tú eres mi constelación favorita 💖"
];

let clicked = 0;

// Crear estrellas
for (let i = 0; i < messages.length; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDuration = (2 + Math.random() * 2) + "s";

  star.addEventListener("click", () => showMessage(i, star));
  starContainer.appendChild(star);
}

function showMessage(i, star) {
  messageBox.textContent = messages[i];
  messageBox.style.display = "block";
  setTimeout(() => { messageBox.style.display = "none"; }, 7000);
  if (clicked === messages.length) {
  setTimeout(() => {
    endMsg.style.display = "block"; // Mensaje final
  }, 2000);

  setTimeout(() => {
    const love = document.getElementById("loveMsg");
    love.style.display = "block"; // Mostrar TE AMO
  }, 4500); // Después de 4.5s del mensaje final
}


  star.style.display = "none";
  clicked++;

  if (clicked === messages.length) {
    setTimeout(() => endMsg.style.display = "block", 2000);
  }
}
