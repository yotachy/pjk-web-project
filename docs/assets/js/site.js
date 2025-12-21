(() => {
  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Tabs (Home bands)
  document.querySelectorAll("[data-tabs]").forEach((root) => {
    const tabs = Array.from(root.querySelectorAll("[data-tab]"));
    const panels = Array.from(root.querySelectorAll("[data-panel]"));

    const setActive = (key) => {
      tabs.forEach(t => t.classList.toggle("is-active", t.dataset.tab === key));
      panels.forEach(p => p.classList.toggle("is-active", p.dataset.panel === key));
    };

    tabs.forEach(t => {
      t.addEventListener("click", () => setActive(t.dataset.tab));
    });

    if (tabs[0]) setActive(tabs[0].dataset.tab);
  });

  // Subtle parallax on hero orbs (poet visual)
  const visual = document.querySelector(".hero-visual");
  const orbs = visual ? visual.querySelectorAll(".poet-orb") : null;

  if (visual && orbs && orbs.length) {
    let raf = null;
    const onMove = (e) => {
      const r = visual.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) - 0.5;   // -0.5 ~ 0.5
      const y = ((e.clientY - r.top) / r.height) - 0.5;

      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        orbs.forEach((orb, idx) => {
          const m = (idx + 1) * 10;
          orb.style.transform = `translate3d(${x * m}px, ${y * m}px, 0)`;
        });
      });
    };

    visual.addEventListener("mousemove", onMove);
    visual.addEventListener("mouseleave", () => {
      orbs.forEach(o => o.style.transform = "translate3d(0,0,0)");
    });
  }
})();
