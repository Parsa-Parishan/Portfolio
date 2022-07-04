//global variables
const navContainer = document.querySelector("nav.horizontal");
const navMenu = document.querySelector("div.horizontal-container");
const menuIcn = document.querySelector(".menu-bar");
const toReveal = document.querySelector(".my_portfolio");
const darkMode = document.querySelector("i.dark-mode");
//Logic
menuIcn.addEventListener("click", (e) => {
  if (e.target.classList.value.includes("fa-bars")) {
    navContainer.classList.add("show");
    document.body.classList.add("modal");
    setTimeout(() => {
      e.target.classList.remove("fa-bars");
      e.target.classList.add("fa-circle-xmark");
      navMenu.classList.add("slide");
    }, 100);
  } else if (e.target.classList.value.includes("fa-circle-xmark")) {
    e.target.classList.remove("fa-circle-xmark");
    e.target.classList.add("fa-bars");
    navMenu.classList.remove("slide");
    setTimeout(() => {
      navContainer.classList.remove("show");
      document.body.classList.remove("modal");
    }, 200);
  }
});

//**** Reaveal elements on scroll ****//
window.addEventListener("scroll", reveal);

function reveal() {
  let windowHeight = window.innerHeight;
  let revealTop = toReveal.getBoundingClientRect().top;
  const revealPoint = 150;
  console.log(revealTop);
  if (revealTop < windowHeight - revealPoint) {
    toReveal.classList.add("active");
  } else {
    toReveal.classList.remove("active");
  }
}

//**** close menue when outside in clicked ****//
window.addEventListener("click", (e) => {
  if (e.target != navMenu && e.target == navContainer) {
    menuIcn.classList.remove("fa-circle-xmark");
    menuIcn.classList.add("fa-bars");
    navMenu.classList.remove("slide");
    setTimeout(() => {
      navContainer.classList.remove("show");
      document.body.classList.remove("modal");
    }, 200);
  }
});

//**** Hide Header on Scroll Down Show on Scroll Up ****//
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || prevScrollpos < 0) {
    navContainer.style.top = "0";
  } else {
    navContainer.style.top = "-68px";
  }
  prevScrollpos = currentScrollPos;
  if (currentScrollPos >= 17) {
    navContainer.classList.add("blur");
  } else {
    navContainer.classList.remove("blur");
  }
};

//****DARK MODE****//
darkMode.addEventListener("click", () => {
  document.body.classList.toggle("light-theme")
});
