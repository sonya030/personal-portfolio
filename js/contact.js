//header color change
const header = document.getElementById("header");
const contact = document.querySelector(".contact");
const footer = document.querySelector(".footer");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.95,
};

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
};

const observer = new IntersectionObserver(callback, options);
observer.observe(contact);

//footer 추가하면서 contact에 header 원래 색으로 돌아오는 것 방지
const callbackFooter = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
};

const observerFooter = new IntersectionObserver(callbackFooter, options);
observerFooter.observe(footer);

//waveLengthAni load
const contactObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("waveLengthAct");
        contactObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0 }
);

const contactAni = document.querySelectorAll("path");
contactAni.forEach((element) => {
  contactObserver.observe(element);
});

//typing text
const text = "Thank you for watching!";
const duration = 100;
let index = 0;

function typeEffect() {
  document.querySelector(".thx_en").textContent += text[index];
  index++;
  if (index < text.length) {
    setTimeout(typeEffect, duration);
  }
}

// Intersection Observer 생성
const observer3 = new IntersectionObserver((entries, observer3) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      typeEffect();
      observer3.unobserve(entry.target);
    }
  });
});

// observer3에 contact section 추가
observer3.observe(contact);

//scratch
let canvas = document.getElementById("scratchCard");
let context = canvas.getContext("2d");

const init = () => {
  context.fillStyle = "#00025c";
  context.fillRect(0, 0, 280, 70);
  context.fillStyle = "#6B8BDF";
  context.font = "bold 25px Inika";
  context.fillText("scratch!!", 90, 45);
};

let isDragging = false;

const scratch = (x, y) => {
  context.globalCompositeOperation = "destination-out";
  context.beginPath();
  context.arc(x, y, 24, 0, 2 * Math.PI);
  context.fill();
};

canvas.addEventListener("mousedown", (event) => {
  isDragging = true;
  scratch(event.offsetX, event.offsetY);
});

canvas.addEventListener("mousemove", (event) => {
  if (isDragging) {
    scratch(event.offsetX, event.offsetY);
  }
});

canvas.addEventListener("mouseup", () => {
  isDragging = false;
});

canvas.addEventListener("mouseleave", () => {
  isDragging = false;
});

init();
