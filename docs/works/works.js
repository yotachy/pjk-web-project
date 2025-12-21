<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>작품 — 박종권</title>
  <meta name="description" content="박종권 시인의 작품 목록과 본문" />
  <link rel="stylesheet" href="../assets/style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Noto+Serif+KR:wght@400;600;700&display=swap" rel="stylesheet">
</head>

<body>
  <header class="top">
    <div class="wrap top-inner">
      <a class="brand" href="../index.html">
        <span class="brand-badge" aria-hidden="true"></span>
        PJK
      </a>

      <nav class="nav" aria-label="Primary">
        <a href="../index.html">홈</a>
        <a href="../profile.html">소개</a>
        <a href="./index.html" class="is-active">작품</a>
      </nav>

      <div class="header-cta">
        <span class="pill" aria-hidden="true">OFFICIAL</span>
        <a class="btn btn-primary" href="../profile.html">연보 보기</a>
      </div>
    </div>
  </header>

  <main class="wrap page">
    <section class="hero">
      <div class="hero-grid">
        <div class="hero-copy">
          <div class="kicker"><span class="kicker-dot" aria-hidden="true"></span> WORKS</div>
          <h1 class="h1">작품</h1>
          <p class="lead">좌측에서 작품을 선택하면 우측 본문이 갱신됩니다. (works.js 유지)</p>

          <div class="hero-actions">
            <a class="btn btn-primary" href="../index.html">홈</a>
            <a class="btn" href="../profile.html">소개</a>
          </div>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <div class="poet-noise"></div>
          <div class="poet-orb orb-b"></div>
          <div class="poet-orb orb-c"></div>
          <div class="poet-grid"></div>

          <div class="poet-overlay">
            <div class="overlay-chip">LIBRARY</div>
            <div class="overlay-mark">
              <div class="overlay-title">SELECT & READ</div>
              <div class="overlay-sub">Split View</div>
            </div>
          </div>

          <div class="visual-cards">
            <div class="vcard">
              <div class="t">Filter</div>
              <div class="d">All / 시집 / 시 / 메모</div>
            </div>
            <div class="vcard">
              <div class="t">Reading</div>
              <div class="d">본문 집중을 위한 패널</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="works-split" aria-label="Works Split View">
      <aside class="works-nav" aria-label="Works list">
        <div class="works-nav-head">
          <div class="kicker"><span class="kicker-dot" aria-hidden="true"></span> LIST</div>
          <div class="works-count" id="worksCount"></div>
        </div>

        <div class="works-filter" role="tablist" aria-label="Filter">
          <button class="filter-btn is-active" data-filter="all" type="button">All</button>
          <button class="filter-btn" data-filter="book" type="button">시집</button>
          <button class="filter-btn" data-filter="poem" type="button">시</button>
          <button class="filter-btn" data-filter="note" type="button">메모</button>
        </div>

        <ul class="works-list" id="worksList"></ul>
      </aside>

      <article class="works-pane" aria-live="polite">
        <div class="works-pane-inner">
          <div class="works-meta" id="workMeta"></div>
          <h2 class="works-title" id="workTitle">작품을 선택하세요</h2>
          <div class="works-note" id="workNote"></div>

          <pre class="works-text" id="workText">
좌측 목록에서 작품을 선택하면 이 영역이 갱신됩니다.

- 시집/작품 소개는 제가 넣어두었습니다.
- 실제 시 전문은 정식님이 보유한 원문으로 교체해 주세요.
          </pre>
        </div>
      </article>
    </section>
  </main>

  <footer class="footer">
    <div class="wrap footer-inner">
      <span>© <span id="year"></span> Park Jongkwon</span>
      <span>All rights reserved.</span>
    </div>
  </footer>

  <script src="../assets/site.js"></script>
  <script src="./works.js"></script>
</body>
</html>
