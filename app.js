// $('document').ready(function(){
//     $('hamburger').on('click', function(){
//         $('#hamb').toggle('active');
//     });
// });
const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector("ul");
const menu_item = document.querySelectorAll(
  ".header, nav-bar, nav-list, .hamburger, ul, a"
);
const header = document.querySelector(".header,  .container");

hamburger.addEventListener("click", (e) => {
  // e.stopPropagation();
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", (e) => {
  e.stopPropagation();
  var scroll_p = window.scrollY;
  if (scroll_p > 250) {
    header.style.backgroundcolor = "#29323c";
  } else {
    header.style.backgroundcolor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", (e) => {
    // e.stopPropagation();
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

// const num = 31;

// for (let i = 1; i < num; i++) {
//   if (i % 15 === 0) {
//     console.log(i, "FIZZ BUZZ");
//   } else if (i % 5 === 0) {
//     console.log(i, "BUZZ");
//   } else if (i % 3 === 0) {
//     console.log(i, "FIZZ ");
//   } else {
//     console.log(i);
//   }
// }
