let navbar = document.querySelector(".navbar");
let burger = document.querySelector(".contain-burger");
let nav = document.querySelector(".vertical-navbar");

window.addEventListener("resize", function () {
  if (window.innerWidth >= 960) {
    nav.style.display = "block";
  } else if (window.innerWidth <= 960) {
    nav.style.display = "none";
  }
});

burger.addEventListener("click", function () {
  if (nav.style.display == "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
});
