const bagCount = document.querySelector("#bagCount");
const toast = document.querySelector("#toast");
let bagTotal = 0;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    bagTotal += 1;
    bagCount.textContent = bagTotal;
    showToast(`${button.dataset.name} added to your bag ♡`);
  });
});

document.querySelector("#heartButton").addEventListener("click", () => {
  showToast("Love sent — you are appreciated ♡");
});

document.querySelector("#surpriseButton").addEventListener("click", () => {
  showToast("You deserve a whole day of tiny joys ✦");
});

