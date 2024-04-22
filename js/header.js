//섹션 위치에 맞춰서 nav에 after값 가져오기
document.addEventListener("DOMContentLoaded", function () {
  // 섹션별로 정리
  const main = document.querySelector(".main");
  const aboutSection = document.querySelector(".about");
  const skillTitleSection = document.querySelector(".skill_title");
  const skillSection = document.querySelector(".skill");
  const mainPJTitleSection = document.querySelector(".mainPJ_title");
  const mainPJSection = document.querySelector(".mainPJ");
  const sidePJTitleSection = document.querySelector(".sidePJ_title");
  const sidePJSection = document.querySelector(".sidePJ");
  const editorialTitleSection = document.querySelector(".editorial_title");
  const editorialSection = document.querySelector(".editorial");
  const contactSection = document.querySelector(".contact");

  // nav>li>a
  const navLinks = document.querySelectorAll(".navContents li a");

  //active 추가
  function addActiveClass(link) {
    link.classList.add("active");
  }

  //active 삭제
  function removeActiveClass(link) {
    link.classList.remove("active");
  }

  // intersectionObserver사용해서 클래스 추가,삭제하기
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target) {
            case aboutSection:
              navLinks.forEach(removeActiveClass);
              addActiveClass(navLinks[0]);
              break;
            case skillTitleSection:
            case skillSection:
              navLinks.forEach(removeActiveClass);
              addActiveClass(navLinks[1]);
              break;
            case mainPJTitleSection:
            case mainPJSection:
              navLinks.forEach(removeActiveClass);
              addActiveClass(navLinks[2]);
              break;
            case sidePJTitleSection:
            case sidePJSection:
              navLinks.forEach(removeActiveClass);
              addActiveClass(navLinks[3]);
              break;
            case editorialTitleSection:
            case editorialSection:
              navLinks.forEach(removeActiveClass);
              addActiveClass(navLinks[4]);
              break;
            case main:
            case contactSection:
              navLinks.forEach(removeActiveClass);
              break;
          }
        }
      });
    },
    { threshold: 0.9 }
  );

  // observe
  const sections = [
    main,
    aboutSection,
    skillTitleSection,
    skillSection,
    mainPJTitleSection,
    mainPJSection,
    sidePJTitleSection,
    sidePJSection,
    editorialTitleSection,
    editorialSection,
    contactSection,
  ];
  sections.forEach((section) => observer.observe(section));
});
