const heartContainer = document.getElementById("heartContainer");
const continueBtn = document.getElementById("continueBtn");

const phrases = [
  "Eres mi lugar favorito ❤️",
  "Cada día contigo vale la pena 💕",
  "Tu sonrisa ilumina todo 💫",
  "Me encantas más de lo que imaginaba 😍",
  "Te amo sin pausas 💖"
];

let clicked = 0;

// Función para crear un corazón
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";

  // Posición horizontal aleatoria
  heart.style.left = Math.random() * 80 + "vw";

  // Posición vertical más abajo en la pantalla (70%-90%)
  heart.style.top = (70 + Math.random() * 20) + "vh";

  // Duración aleatoria de la animación
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";

  heart.addEventListener("click", () => showPhrase(heart));

  heartContainer.appendChild(heart);

  // Eliminar el corazón después de que flote
  setTimeout(() => heart.remove(), 7000);
}

// Mostrar frase al tocar
function showPhrase(heart) {
  const popup = document.createElement("div");
  popup.classList.add("popup");

  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  popup.textContent = randomPhrase;

  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 3000);

  heart.style.display = "none";
  clicked++;

  if (clicked === 5) {
    setTimeout(() => continueBtn.classList.remove("hidden"), 1500);
  }
}

// Crear un corazón cada 800ms
setInterval(createHeart, 800);
