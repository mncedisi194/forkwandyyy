const bagCount = document.querySelector("#bagCount");
const toast = document.querySelector("#toast");
const bagDrawer = document.querySelector("#bagDrawer");
const bagItems = document.querySelector("#bagItems");
const welcomeOverlay = document.querySelector("#welcomeOverlay");
const selectedTreats = [];

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    selectedTreats.push(name);
    bagCount.textContent = selectedTreats.length;
    renderBag();
    showToast(`${name} added to your bag ♡`);
    button.textContent = "✓";
    setTimeout(() => { button.textContent = "+"; }, 900);
  });
});

function renderBag() {
  if (!selectedTreats.length) {
    bagItems.innerHTML = '<p class="bag-empty">Your bag is waiting for something sweet.</p>';
    return;
  }

  bagItems.innerHTML = selectedTreats
    .map((name) => `<div class="bag-item"><span>${name}</span><span>♡</span></div>`)
    .join("");
}

function setDrawer(open) {
  bagDrawer.classList.toggle("open", open);
  bagDrawer.setAttribute("aria-hidden", String(!open));
  document.querySelector(".bag-button").setAttribute("aria-expanded", String(open));
}

document.querySelector(".bag-button").addEventListener("click", () => setDrawer(true));
document.querySelector("#drawerClose").addEventListener("click", () => setDrawer(false));
document.querySelector("#drawerBackdrop").addEventListener("click", () => setDrawer(false));
document.querySelector("#clearBag").addEventListener("click", () => {
  selectedTreats.length = 0;
  bagCount.textContent = "0";
  renderBag();
  showToast("Your bag is sparkling clean again");
});

function launchConfetti() {
  const confetti = document.querySelector("#confetti");
  const colors = ["#ef7194", "#f7d979", "#fffdf9", "#dca8ba", "#e7bf55"];
  confetti.innerHTML = "";

  for (let i = 0; i < 70; i += 1) {
    const piece = document.createElement("i");
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * .6}s`;
    piece.style.setProperty("--drift", `${-80 + Math.random() * 160}px`);
    confetti.appendChild(piece);
  }

  setTimeout(() => { confetti.innerHTML = ""; }, 3200);
}

document.querySelector("#openWelcome").addEventListener("click", () => {
  welcomeOverlay.classList.add("hidden");
  launchConfetti();
  showToast("Happy to have you here, Kwandy ♡");
});

document.querySelector("#heartButton").addEventListener("click", () => {
  showToast("Love sent — you are appreciated ♡");
});

document.querySelector("#surpriseButton").addEventListener("click", () => {
  launchConfetti();
  showToast("Kwandy, you deserve a whole day of tiny joys ✦");
});

