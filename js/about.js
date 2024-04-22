// flyLetter clickEvent
const flyAni = document.querySelector(".flyLetter");
const contacts = document.querySelector(".contacts");
const contactsBtn = document.querySelector(".contacts");

flyAni.addEventListener("click", () => {
  contacts.style.display = "block";
});
contactsBtn.addEventListener("click", () => {
  contacts.style.display = "none";
});

//flyAni addClass
const flytarget = document.querySelector(".contactAnimation");
const flyObserveOption = {
  root: null,
  thresgold: 0.5,
};

const flyObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("flyAni");
    } else {
      entry.target.classList.remove("flyAni");
    }
  });
}, flyObserveOption);

flyObserver.observe(flytarget);

// interests clickEvent
const interestBtns = document.querySelectorAll(".interestBtn");

interestBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const parent = btn.parentNode;
    const line = parent.querySelector(".line");
    const viewImg = parent.querySelector(".viewImg");
    line.style.display = "block";
    viewImg.style.display = "block";
  });
});

const closeBtns = document.querySelectorAll(".close");

closeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const parent2 = btn.parentNode.parentNode.parentNode;
    const line2 = parent2.querySelector(".line");
    const viewImg2 = parent2.querySelector(".viewImg");

    line2.style.display = "none";
    viewImg2.style.display = "none";
  });
});
