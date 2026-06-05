document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav a");

    if (!menuToggle || !nav) {
      return;
    }

    const closeMenu = () => {
      menuToggle.classList.remove("is-open");
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "メニューを開く");
    };

    const openMenu = () => {
      menuToggle.classList.add("is-open");
      nav.classList.add("is-open");
      document.body.classList.add("menu-open");
      menuToggle.setAttribute("aria-expanded", "true");
      menuToggle.setAttribute("aria-label", "メニューを閉じる");
    };

    menuToggle.addEventListener("click", () => {
      if (menuToggle.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  });