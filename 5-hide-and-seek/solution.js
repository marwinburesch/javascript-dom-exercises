const box = document.querySelector(".box");
const button = document.querySelector(".show-hide-button");

button.addEventListener("click", toggleBoxVisibility);

function toggleBoxVisibility() {
  box.classList.toggle("hidden");
  console.log(button.textContent);
  if (button.textContent === "Hide") {
    button.textContent = "Show";
  } else {
    button.textContent = "Hide";
  }
}
