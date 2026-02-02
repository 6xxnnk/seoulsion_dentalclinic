// locationRoughmap.js
document.addEventListener("DOMContentLoaded", () => {
  // 카카오 roughmap 렌더
  if (window.daum?.roughmap?.Lander) {
    new daum.roughmap.Lander({
      timestamp: "1770014304712",
      key: "h39k564dzum",
      mapWidth: "100%",
      mapHeight: "100%",
    }).render();
  }

  // 맨 위로 버튼 (있을 때만)
  const topBtn = document.querySelector(".quick__top");
  if (topBtn) {
    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
