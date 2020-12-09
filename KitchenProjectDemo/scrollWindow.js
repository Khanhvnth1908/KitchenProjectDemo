const navbar = document.querySelector('.nav');
const scrollStyle = document.querySelector('.scroll-menu');


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "48px";
  }
}
