//loadingPage
const loadingPage = document.getElementById("loading");

window.onbeforeunload = () => {
  loadingPage.style.display = "block";
};
window.addEventListener("load", () => {
  loadingPage.style.display = "none";
});

//contentVisible
let content = document.querySelector(".main");
function showContent() {
  content.style.opacity = 1;
}
window.addEventListener("load", function () {
  //visible
  showContent();
  //addClass
  content.classList.add("active");
  //typingText
  let text = "ront-end Developer";
  let typingElem = document.querySelector(".typingElem");
  typeWriter(text, typingElem);
});

// typing function
function typeWriter(text, elem) {
  let speed = 150;
  let a = 0;

  function type() {
    if (a < text.length) {
      elem.textContent += text.charAt(a);
      a++;
      setTimeout(type, speed);
    }
  }

  type();
}
