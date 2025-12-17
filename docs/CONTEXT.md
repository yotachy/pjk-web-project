# pjk-web-project CONTEXT

## 1) 프로젝트 목적
- 개인 홈페이지 (시인)
- 핵심 콘텐츠: 프로필(Profile) + 작품(Works) 소개
- 기술 스택: 정적 HTML/CSS/JS (Python/Flask 미사용)

## 2) 배포/실행
- 개발: GitHub Codespaces
- 로컬 미리보기: `python -m http.server 8000` (docs 폴더에서)
- 배포: GitHub Pages (docs/)

## 3) 디렉토리 규칙
- `docs/` : 배포 루트
- `docs/assets/css/` : 공통 CSS
- `docs/assets/js/` : 공통 JS
- `docs/assets/img/` : 이미지
- `docs/works/` : 작품 목록/상세 페이지

## 4) 작업 방식 (ChatGPT 협업 룰)
### A. 에러/요청 공유 포맷 (반드시)
1) 파일 경로
2) 관련 코드: 앞뒤 포함 40줄 (가능하면 line number 포함)
3) 실행/콘솔 로그 또는 브라우저 DevTools Console 로그

### B. 큰 변경(리팩토링/구조 변경) 공유 포맷 (권장)
- `git diff` 결과를 그대로 붙여넣기
- 변경 목적/의도 1~2줄 요약

## 5) 코딩 컨벤션
- 파일/폴더명: 소문자-kebab-case (예: `work-sample.html`)
- CSS: 공통 토큰은 `:root`, 컴포넌트 클래스는 의미 기반 네이밍
- JS: 페이지 공통은 `assets/js/site.js`, 페이지 전용은 분리 가능

## 6) 앞으로의 개선 방향(로드맵)
- 1단계: 메인/프로필/작품 목록 UI 확정
- 2단계: 작품 데이터(메타) 관리 방식 결정(HTML 직접/JSON)
- 3단계: 접근성/SEO(OG 태그, sitemap) 보강
