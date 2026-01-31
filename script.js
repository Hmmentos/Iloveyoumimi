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
