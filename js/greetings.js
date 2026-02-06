(() => {
  const greeting = document.querySelector("#greeting .greeting__text");
  if (!greeting) return;

  const io = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      greeting.classList.add("is-inview");
      io.disconnect(); // 한 번만
    },
    { threshold: 0.35 }
  );

  io.observe(greeting);
})();
