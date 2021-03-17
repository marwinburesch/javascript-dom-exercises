const button = document.querySelector(".shine-button");
const listItems = document.querySelectorAll(".list__item");

button.addEventListener("click", updateListItemColors);

function updateListItemColors() {
  listItems.forEach((item) => {
    const color = item.textContent.toLowerCase();
    item.style.color = color;
  });
}
