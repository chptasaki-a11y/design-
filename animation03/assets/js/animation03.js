document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav a");

  if (!menuToggle || !nav) return;

  const closeMenu = (animate = true) => {
    if (!nav.classList.contains("is-open")) {
      nav.classList.remove("is-closing");
      return;
    }

    menuToggle.classList.remove("is-open");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "メニューを開く");

    if (!animate) {
      nav.classList.remove("is-closing");
      return;
    }

    nav.classList.add("is-closing");
    nav.addEventListener(
      "transitionend",
      () => nav.classList.remove("is-closing"),
      { once: true }
    );
  };

  const openMenu = () => {
    nav.classList.remove("is-closing");
    menuToggle.classList.add("is-open");
    nav.classList.add("is-open");
    document.body.classList.add("menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "メニューを閉じる");
  };

  menuToggle.addEventListener("click", () => {
    if (menuToggle.classList.contains("is-open")) {
      closeMenu(true);
    } else {
      openMenu();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => closeMenu(true));
  });

  const hero = document.querySelector(".hero");
  if (header) {
    const handleScroll = () => {
      const threshold = hero ? hero.offsetHeight * 0.2 : 80;
      header.classList.toggle("is-scrolled", window.scrollY > threshold);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
  }
});