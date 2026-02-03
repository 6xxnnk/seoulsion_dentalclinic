document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".hamburger");
  const drawer = document.querySelector(".drawer");

  if (!btn || !drawer) return;

  // (선택) 드로어 오버레이가 있다면
  const overlay = document.querySelector(".drawerOverlay");

  const open = () => {
    drawer.classList.add("is-open");
    btn.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");
    document.documentElement.classList.add("is-drawer-open"); // 스크롤 잠금용
  };

  const close = () => {
    drawer.classList.remove("is-open");
    btn.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    document.documentElement.classList.remove("is-drawer-open");
  };

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    drawer.classList.contains("is-open") ? close() : open();
  });

  // 오버레이 클릭 닫기(있을 때만)
  overlay?.addEventListener("click", close);

  // ESC로 닫기
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // 바깥 클릭 닫기(드로어 내부 클릭은 무시)
  document.addEventListener("click", (e) => {
    if (!drawer.classList.contains("is-open")) return;
    if (drawer.contains(e.target) || btn.contains(e.target)) return;
    close();
  });
});
