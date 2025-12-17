(() => {
  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Works filter (works/index.html)
  const chips = document.querySelectorAll("[data-filter]");
  const items = document.querySelectorAll("#worksGrid .work");

  if (chips.length && items.length) {
    chips.forEach(btn => {
      btn.addEventListener("click", () => {
        chips.forEach(b => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        const f = btn.getAttribute("data-filter");
        items.forEach(it => {
          const t = it.getAttribute("data-type") || "";
          const show = (f === "all") || (f === t);
          it.style.display = show ? "" : "none";
        });
      });
    });
  }
})();
