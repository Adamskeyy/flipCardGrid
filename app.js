const grid = document.querySelector(".grid");

grid.addEventListener("click", (e) => flipCard(e));

function flipCard(e) {
  if (e.target.parentNode.classList.contains("grid__card__inner")) {
    e.target.parentNode.classList.toggle("grid__card__inner--flipped");
  }
}
