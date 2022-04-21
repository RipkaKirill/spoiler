const btn = document.querySelector(".spoiler__button");
const spoilerInner = document.querySelector(".spoiler__inner");

btn.addEventListener("click", () => {
  spoilerInner.classList.toggle("open");
  btn.classList.toggle("open");
});
