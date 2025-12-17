// 박종권 시인 작품 데이터
// - 시집/발행 시점은 공개 기사/프로필에 근거한 범위로만 기재
// - 시 전문은 저작권 이슈가 있어 “소개/요약” 형태로 구성
const WORKS = [
  {
    id: "book-joyful-talk",
    title: "즐거운 수다",
    type: "book",
    typeLabel: "시집",
    year: "2025",
    note: "제3시집. 삶과 신앙을 소재로 한 시편들을 담은 것으로 소개된다.",
    text:
`[시집 소개]
『즐거운 수다』는 2025년 출간 소식과 함께 소개된 제3시집입니다.
삶과 신앙을 소재로 시편을 엮었다는 점이 기사에서 강조됩니다.

[정식님 입력 영역]
- 시집 수록 작품/목차
- 대표 시 전문(원문)
- 시인의 말(원문)
을 여기에 붙여 넣으시면 됩니다.`
  },
  {
    id: "book-love-bundle",
    title: "사랑 하나 달랑 지고 가네",
    type: "book",
    typeLabel: "시집",
    year: "2020",
    note: "제2시집으로 소개된다. 이후 약 5년 반 만에 제3시집이 출간되었다.",
    text:
`[시집 소개]
『사랑 하나 달랑 지고 가네』는 2020년 제2시집으로 소개됩니다.

[정식님 입력 영역]
- 수록 작품/목차
- 대표 시 전문(원문)
을 여기에 붙여 넣으시면 됩니다.`
  },
  {
    id: "note-debut-1999",
    title: "등단",
    type: "note",
    typeLabel: "메모",
    year: "1999",
    note: "월간 『순수문학』을 통해 등단한 것으로 소개된다.",
    text:
`1999년 월간 『순수문학』을 통해 등단.
이후 문단 활동을 이어오며, 시집 출간으로 작품 세계를 확장해 왔습니다.`
  },
  {
    id: "poem-insomnia-mention",
    title: "불면",
    type: "poem",
    typeLabel: "시",
    year: "",
    note: "해설에서 시 「불면」이 언급된 바 있다(공개 기사).",
    text:
`[작품 메모]
공개 기사에서 시 「불면」이 언급됩니다.

[정식님 입력 영역]
- 시 전문(원문)을 여기에 붙여 넣으시면 됩니다.
(저작권 문제로 자동으로 넣지 않았습니다.)`
  }
];

const els = {
  list: document.getElementById("worksList"),
  count: document.getElementById("worksCount"),
  meta: document.getElementById("workMeta"),
  title: document.getElementById("workTitle"),
  note: document.getElementById("workNote"),
  text: document.getElementById("workText"),
  filterBtns: Array.from(document.querySelectorAll(".filter-btn")),
};

let currentFilter = "all";
let currentId = null;

function setActiveFilter(filter) {
  currentFilter = filter;
  els.filterBtns.forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.filter === filter);
  });
  renderList();
  const visible = getFilteredWorks();
  if (!visible.find(w => w.id === currentId)) {
    if (visible[0]) selectWork(visible[0].id, { pushHash: true });
  }
}

function getFilteredWorks() {
  if (currentFilter === "all") return WORKS;
  return WORKS.filter(w => w.type === currentFilter);
}

function renderList() {
  const items = getFilteredWorks();
  els.count.textContent = `${items.length}`;

  els.list.innerHTML = items.map(w => {
    const isActive = w.id === currentId;
    const yearPart = (w.year && w.year.trim()) ? ` · ${escapeHtml(w.year)}` : "";
    return `
      <li>
        <button class="works-item ${isActive ? "is-active" : ""}" type="button" data-id="${w.id}">
          <span class="wi-title">${escapeHtml(w.title)}</span>
          <span class="wi-meta">${escapeHtml(w.typeLabel)}${yearPart}</span>
        </button>
      </li>
    `;
  }).join("");

  els.list.querySelectorAll(".works-item").forEach(btn => {
    btn.addEventListener("click", () => selectWork(btn.dataset.id, { pushHash: true }));
  });
}

function selectWork(id, { pushHash } = { pushHash: false }) {
  const w = WORKS.find(x => x.id === id);
  if (!w) return;

  currentId = id;

  const yearPart = (w.year && w.year.trim()) ? ` · ${w.year}` : "";
  els.meta.textContent = `${w.typeLabel}${yearPart}`;
  els.title.textContent = w.title;

  if (w.note && w.note.trim()) {
    els.note.style.display = "block";
    els.note.textContent = w.note;
  } else {
    els.note.style.display = "none";
    els.note.textContent = "";
  }

  els.text.textContent = w.text;

  document.querySelectorAll(".works-item").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.id === id);
  });

  if (pushHash) {
    history.replaceState(null, "", `#${encodeURIComponent(id)}`);
  }
}

function initFromHash() {
  const hash = decodeURIComponent((location.hash || "").replace("#", "")).trim();
  const first = getFilteredWorks()[0];

  if (hash && WORKS.some(w => w.id === hash)) {
    selectWork(hash, { pushHash: false });
  } else if (first) {
    selectWork(first.id, { pushHash: true });
  }
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

els.filterBtns.forEach(btn => {
  btn.addEventListener("click", () => setActiveFilter(btn.dataset.filter));
});

renderList();
initFromHash();
window.addEventListener("hashchange", () => initFromHash());
