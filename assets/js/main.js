myMenu = document.querySelector('.menu');
console.log(myMenu);


window.addEventListener("scroll", function() {
    if (window.scrollY >= 200) {
      myMenu.style.backgroundColor = "#D66969";
    }
  });

  window.addEventListener("scroll", function() {
    if (window.scrollY <= 200) {
      myMenu.style.backgroundColor = "transparent";
    }
  });


  const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

