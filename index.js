gsap.registerPlugin(ScrollTrigger);

// nav
ScrollTrigger.matchMedia({
  "(min-width: 1020px)": () => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom bottom",
        onLeave: () => {
          gsap.to("header nav .main-menu", {
            transform: "translateX(640px)",
          });
          menu.style.display = "block";
        },
        onEnterBack: () => {
          gsap.to("header nav .main-menu", {
            transform: "translateX(0)",
          });
          menu.style.display = "none";
        },
      },
    });
  },
});
gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "top top",
    end: "bottom bottom",
    onLeave: () => {
      gsap.to("header .main-logo", {
        display: "none",
        opacity: 0,
        duration: 0.1,
      });
    },
    onEnterBack: () => {
      gsap.to("header .main-logo", {
        opacity: 1,
        display: "block",
      });
    },
  },
});

const menubtn = document.querySelector(".menu a");
const menu = document.querySelector(".menu");
const ul = document.querySelector("nav ul");
const lists = document.querySelectorAll("nav ul li");
const toggleMenu = document.querySelector("nav .toggle-menu");
const backFilter = document.querySelector(".back-filter");

menubtn.addEventListener("click", (e) => {
  e.preventDefault();

  // 미디어쿼리
  const tabletScreen = window.matchMedia("(min-width: 1020px)").matches;
  const moblieScreen = window.matchMedia("(max-width:767px").matches;

  if (tabletScreen) {
    gsap.to("header nav .main-menu", {
      transform: "translateX(0)",
      duration: 0.5,
    });
    menu.style.display = "none";
  } else if (moblieScreen) {
    if (toggleMenu.style.display === "block") {
      backFilter.style.display = "none";
      gsap.to("header nav .toggle-menu", {
        transform: "translateY(0)",
        opacity: 0,
        onComplete: () => {
          toggleMenu.style.display = "none";
        },
      });
    } else {
      toggleMenu.style.display = "block";
      backFilter.style.display = "block";
      gsap.to("header nav .toggle-menu", {
        transform: "translateY(60px)",
        opacity: 1,
      });
    }
  }
});

// selcet box
const changeimgSat = document.getElementById("timetable-img-sat");
const selectimgSat = document.querySelector(".select-img-sat");
const changeimgSun = document.getElementById("timetable-img-sun");
const selectimgSun = document.querySelector(".select-img-sun");

changeImage = () => {
  const indexSat = changeimgSat.selectedIndex;
  selectimgSat.src = changeimgSat.options[indexSat].value;

  const indexSun = changeimgSun.selectedIndex;
  selectimgSun.src = changeimgSun.options[indexSun].value;
};
changeImage();
changeimgSat.onchange = changeImage;
changeimgSun.onchange = changeImage;
