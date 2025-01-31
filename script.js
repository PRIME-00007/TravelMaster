const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")

  const isOpen = navLinks.classList.contains("open")
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
})

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-line")
})

const scrollRevealOptions = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
}

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOptions,
})
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOptions,
  delay: 500,
})
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOptions,
  delay: 1000,
})

ScrollReveal().reveal(".feature__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".package__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});