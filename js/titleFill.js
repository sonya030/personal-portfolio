const skillTitle = document.querySelectorAll(".title_animation");
const skillObserveOption = {
  root: null,
  thresgold: 0.5,
};

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("title_ani_active");
    } else {
      entry.target.classList.remove("title_ani_active");
    }
  });
}, skillObserveOption);

skillTitle.forEach((section) => {
  skillObserver.observe(section);
});
