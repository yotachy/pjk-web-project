(() => {
  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Mobile drawer
  const toggle = document.querySelector("[data-nav-toggle]");
  const drawer = document.querySelector("[data-drawer]");
  const closeEls = document.querySelectorAll("[data-drawer-close]");

  function openDrawer() {
    if (!drawer || !toggle) return;
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    document.documentElement.style.overflow = "hidden";
  }

  function closeDrawer() {
    if (!drawer || !toggle) return;
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    document.documentElement.style.overflow = "";
  }

  if (toggle && drawer) {
    toggle.addEventListener("click", () => {
      const isOpen = drawer.classList.contains("is-open");
      if (isOpen) closeDrawer();
      else openDrawer();
    });

    closeEls.forEach(el => el.addEventListener("click", closeDrawer));
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeDrawer();
    });
  }

  // Home concept dots (index only)
  const rail = document.getElementById("conceptRail");
  const dots = Array.from(document.querySelectorAll(".concept-dots .dot"));
  if (rail && dots.length) {
    function setActiveDot(idx){
      dots.forEach((d,i)=>d.classList.toggle("is-active", i===idx));
    }

    dots.forEach(d => {
      d.addEventListener("click", (e) => {
        const idx = Number(d.dataset.slide);
        const slide = rail.children[idx];
        if (!slide) return;
        e.preventDefault();
        slide.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
        setActiveDot(idx);
        history.replaceState(null, "", d.getAttribute("href"));
      });
    });

    rail.addEventListener("scroll", () => {
      const rect = rail.getBoundingClientRect();
      let bestIdx = 0;
      let bestDist = Infinity;
      Array.from(rail.children).forEach((el, idx) => {
        const r = el.getBoundingClientRect();
        const dist = Math.abs(r.left - rect.left);
        if (dist < bestDist) { bestDist = dist; bestIdx = idx; }
      });
      setActiveDot(bestIdx);
    }, { passive: true });
  }
})();
