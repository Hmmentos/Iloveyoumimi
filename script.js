const envelope = document.getElementById("envelope");
const envelopeContainer = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");

const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const finalText = document.getElementById("final-text");
const buttons = document.getElementById("letter-buttons");

const music = document.getElementById("bg-music");

/* Open envelope + start music */
envelope.addEventListener("click", () => {
  envelopeContainer.style.display = "none";
  letterContainer.style.display = "flex";

  music.volume = 0;
  music.play().catch(() => {});

  let v = 0;
  const fade = setInterval(() => {
    if (v < 0.4) {
      v += 0.02;
      music.volume = v;
    } else {
      clearInterval(fade);
    }
  }, 150);
});

/* Gentle falling hearts */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💕";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 1200);

/* No button runs away (phone-safe) */
function moveNo() {
  const wrapper = noBtn.parentElement;
  const maxX = 140;
  const maxY = 80;

  const x = Math.random() * maxX - maxX / 2;
  const y = Math.random() * maxY - maxY / 2;

  wrapper.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("click", moveNo);

/* YES clicked */
yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  finalText.style.display = "block";
});
