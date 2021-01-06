const grid = document.querySelector(".grid");

grid.addEventListener("click", (e) => flipCard(e));

function flipCard(e) {
  console.log(e.target.parentNode.classList);
  if (e.target.parentNode.classList.contains("grid__card__inner")) {
    e.target.parentNode.classList.toggle("grid__card__inner--flipped");
  }
}
