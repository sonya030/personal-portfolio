function openTab(tabId) {
  let tabs = document.querySelectorAll(".tab");
  tabs.forEach(function (tab) {
    tab.style.display = "none";
  });

  // 모든 탭 버튼에서 active 클래스를 제거
  let tabTitleBtn = document.querySelectorAll(".tabTitle");
  tabTitleBtn.forEach(function (button) {
    button.classList.remove("active");
  });

  //초기 탭1번 내용 flex로 보여줌
  document.getElementById(tabId).style.display = "flex";
}

// 클릭된 탭을 보여주고 해당 버튼에 active 클래스를 추가
let tabTitle = document.querySelectorAll(".tabTitle");
for (let i = 0; i < tabTitle.length; i++) {
  tabTitle[i].addEventListener("click", function () {
    this.classList.add("active");
  });
}
//첫번째 tabTitle 활성화
tabTitle[0].classList.add("active");

function showAnswer(index) {
  let answers = document.querySelectorAll(".descWrap");
  let tabButtons = document.querySelectorAll(".tabBtn");
  answers.forEach(function (answer, i) {
    if (i === index) {
      answer.style.display = "flex";
    } else {
      answer.style.display = "none";
    }
  });

  tabButtons.forEach(function (button, i) {
    if (i === index) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}
//타이틀탭 이동 시, display none 방지!
//프론트 클릭하면 html활성화
tabTitle[0].addEventListener("click", function () {
  showAnswer(0);
});
//에딧 클릭하면 ai 활성화
tabTitle[1].addEventListener("click", function () {
  showAnswer(9);
});