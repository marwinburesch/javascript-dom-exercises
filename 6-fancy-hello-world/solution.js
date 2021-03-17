const input = document.querySelector(".controls__input");
const h1 = document.querySelector(".header__text");

input.addEventListener("change", updateHeaderText);

function updateHeaderText(event) {
  const { value } = event.target;
  h1.textContent = value;

  if (h1.textContent === "" || h1.textContent === undefined) {
    h1.textContent = "Hello World";
  }
}
