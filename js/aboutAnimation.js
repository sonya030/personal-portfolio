const ani01 = document.querySelector(".ani01");
const ani02 = document.querySelector(".ani02");

//어바웃미 이미지 반복
let aboutMeImg = `
<img class="slideImg" src="img/aboutAnimationElement.png" alt="aboutMeImg">
`;
for (let k = 0; k < 15; k++) {
  ani01.innerHTML += aboutMeImg;
  ani02.innerHTML += aboutMeImg;
}

window.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".textAnimaton"); // 모든 슬라이더 선택

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(".slideImg"); // 해당 슬라이더 내의 모든 슬라이드 선택
    const sliderWidth = slider.offsetWidth;

    let cloneSlides = [];
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      cloneSlides.push(clone);
      slider.appendChild(clone);
    });

    let currentTime = 0;
    setInterval(() => {
      currentTime += 1;
      if (currentTime >= 10) {
        currentTime = 0;
        // 슬라이더를 초기 위치로 되돌림
        slider.style.transition = "none";
        slider.style.transform = `translateX(0)`;
        setTimeout(() => {
          slider.style.transition = "transform 50s linear infinite";
        }, 10000);
      }
    }, 10000);
  });
});
