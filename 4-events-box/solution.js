const box = document.querySelector(".box");

box.addEventListener("click", toggleRound);

function toggleRound() {
  box.classList.toggle("round");
}
