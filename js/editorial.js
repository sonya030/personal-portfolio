const editBtn = document.querySelector(".editorial_link");
const editPortfolio = document.querySelector(".edit_portfolio");
const editCloseBtn = document.querySelector(".edit_close");

editBtn.addEventListener("click", () => {
  editPortfolio.style.display = "block";
  document.body.style.overflow = "hidden";
});
editCloseBtn.addEventListener("click", () => {
  editPortfolio.style.display = "none";
  document.body.style.overflow = "auto";
});
