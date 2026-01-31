// Gentle falling hearts
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


const envelope = document.getElementById("envelope");
const envelopeContainer = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");

const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const finalText = document.getElementById("final-text");

// Open letter
envelope.addEventListener("click", () => {
  envelopeContainer.style.display = "none";
  letterContainer.style.display = "flex";
});

// NO button runs away (mobile-friendly)
function moveNo() {
  const wrapper = noBtn.parentElement;
  const maxX = 150;
  const maxY = 80;

  const x = Math.random() * maxX - maxX / 2;
  const y = Math.random() * maxY - maxY / 2;

  wrapper.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("click", moveNo);

// YES clicked
yesBtn.addEventListener("click", () => {
  document.getElementById("letter-buttons").style.display = "none";
  finalText.style.display = "block";
});

/* Soft fade-in animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.letter-window {
  animation: fadeIn 0.8s ease;
}

/* Gentle floating hearts */
.heart {
  position: fixed;
  top: -10px;
  font-size: 18px;
  opacity: 0.7;
  animation: fall 6s linear infinite;
  pointer-events: none;
}

@keyframes fall {
  to {
    transform: translateY(110vh);
  }
}
