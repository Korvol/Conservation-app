// js/headerScroll.js
window.addEventListener("scroll", () => {
  const banner = document.querySelector(".hero-banner");

  if (window.scrollY > 80) {
    if (!banner.classList.contains("hero-banner-scrolled")) {
      banner.classList.add("hero-banner-scrolled");
    }
  } else {
    if (banner.classList.contains("hero-banner-scrolled")) {
      banner.classList.remove("hero-banner-scrolled");
    }
  }
});
