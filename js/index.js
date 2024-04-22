//movePage
setTimeout(() => {
  window.location.href = "mainPage.html";
}, 3300);

//loadingPage
const loadingPage = document.getElementById("loading");

window.onbeforeunload = () => {
  loadingPage.style.display = "block";
};
window.addEventListener("load", () => {
  loadingPage.style.display = "none";
});