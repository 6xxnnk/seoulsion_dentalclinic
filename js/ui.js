// ui.js
document.addEventListener("DOMContentLoaded", () => {
  const drawer = document.querySelector(".drawer");
  const openBtn = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".drawer__close");
  const backdrop = document.querySelector(".drawer__backdrop");
  const links = document.querySelectorAll(".drawer__links a");

  const openDrawer = () => {
    drawer.classList.add("is-open");
    openBtn.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    drawer.classList.remove("is-open");
    openBtn.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  openBtn.addEventListener("click", openDrawer);
  closeBtn.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);

  links.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
});
