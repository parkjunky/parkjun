# 🚀 배포 가이드 - 최종 버전 v1.5.3

## ⚠️ 중요: 배포 전 필수 확인사항

배포 사이트(https://uvhktjqm.gensparkspace.com/)에 파일이 제대로 반영되지 않는 문제가 발생했습니다.

---

## 📋 배포해야 할 파일 목록

### 필수 파일 (3개)

| 파일 | 경로 | 크기 | 버전 | 필수 |
|------|------|------|------|------|
| index.html | `/index.html` | 97.4 KB | v1.5.3 | ✅ |
| style.css | `/css/style.css` | 61.6 KB | v1.5.3 | ✅ |
| script.js | `/js/script.js` | 18.8 KB | v1.5.3 | ✅ |

### 이미지 파일 (7개)

모든 이미지는 `/images/` 폴더에 있어야 합니다:
- book-cover.jpg
- coach-profile.jpg
- review-7.png
- review-3.jpg
- main-review-1.jpg ~ 4.jpg
- more-review-1.jpg ~ 2.jpg

---

## 🔧 v1.5.3 주요 수정사항

### 1. JavaScript 중복 함수 제거 ✅

**문제:**
- `adjustMobileLayout()` 함수가 두 번 정의되어 있었음
- 두 번째 함수가 첫 번째를 덮어씌워 제대로 작동하지 않음

**해결:**
- 중복 함수 제거
- 단일 버전만 유지 (line 64-92)

```javascript
// js/script.js - Line 64-92
function adjustMobileLayout() {
    if (window.innerWidth <= 768) {
        const grids = document.querySelectorAll('[style*="grid-template-columns"]');
        grids.forEach(grid => {
            grid.style.setProperty('grid-template-columns', '1fr', 'important');
        });
        
        const displayGrids = document.querySelectorAll('[style*="display: grid"]');
        displayGrids.forEach(grid => {
            grid.style.setProperty('grid-template-columns', '1fr', 'important');
        });
    }
}

adjustMobileLayout();

let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(adjustMobileLayout, 250);
});
```

### 2. 버전 업데이트 ✅

```html
<!-- index.html -->
<link rel="stylesheet" href="css/style.css?v=1.5.3">
<script src="js/script.js?v=1.5.3"></script>
```

---

## 📤 배포 방법

### 방법 1: Publish 탭 사용 (권장)

1. **Publish 탭**으로 이동
2. **"Deploy"** 또는 **"Publish"** 버튼 클릭
3. 배포 완료 대기 (보통 1-2분)
4. 배포 URL 확인: https://uvhktjqm.gensparkspace.com/

### 방법 2: 파일 직접 업로드

배포 시스템에서 다음 파일들을 **반드시** 업로드:

```
프로젝트 루트/
├── index.html          ← 97.4 KB (v1.5.3)
├── css/
│   └── style.css       ← 61.6 KB (v1.5.3)
├── js/
│   └── script.js       ← 18.8 KB (v1.5.3)
└── images/
    ├── book-cover.jpg
    ├── coach-profile.jpg
    └── ... (기타 이미지)
```

---

## ✅ 배포 후 검증 체크리스트

### 1단계: 파일 업로드 확인

브라우저에서 직접 파일 URL 접근:

```
https://uvhktjqm.gensparkspace.com/css/style.css?v=1.5.3
https://uvhktjqm.gensparkspace.com/js/script.js?v=1.5.3
```

**확인사항:**
- [ ] style.css 파일 크기: 61.6 KB
- [ ] script.js 파일 크기: 18.8 KB
- [ ] 404 에러가 없어야 함

### 2단계: JavaScript 실행 확인

브라우저 콘솔(F12)에서 확인:

```javascript
// 콘솔에 입력
adjustMobileLayout

// 결과: 함수가 정의되어 있어야 함
// ƒ adjustMobileLayout() { ... }
```

### 3단계: 모바일 모드 테스트

**데스크톱 브라우저에서:**

1. F12 (개발자 도구 열기)
2. Device Toolbar 클릭 (Ctrl+Shift+M)
3. iPhone 12 Pro 선택 (또는 다른 모바일 기기)
4. 페이지 새로고침 (Ctrl+Shift+R)

**확인사항:**
- [ ] 햄버거 메뉴가 보임 (☰)
- [ ] 모든 그리드가 1단으로 표시
- [ ] 터치 영역이 충분히 큼
- [ ] 가독성이 좋음

### 4단계: 실제 모바일 기기 테스트

**스마트폰에서:**

1. https://uvhktjqm.gensparkspace.com/ 접속
2. 캐시 삭제 (설정 > 브라우저 > 캐시 지우기)
3. 페이지 새로고침

**확인사항:**
- [ ] 레이아웃이 1단으로 표시
- [ ] 햄버거 메뉴 작동
- [ ] 버튼이 터치하기 쉬움
- [ ] 이미지 lazy loading 작동

---

## 🐛 배포 후에도 반영 안 되는 경우

### 문제 1: 캐시 문제

**증상:**
- 파일은 업로드되었지만 변경사항이 보이지 않음

**해결:**
```html
<!-- index.html에서 버전 강제 변경 -->
<link rel="stylesheet" href="css/style.css?v=1.5.3&t=20250102">
<script src="js/script.js?v=1.5.3&t=20250102"></script>
```

### 문제 2: 파일 경로 오류

**증상:**
- 404 Not Found 에러
- CSS/JS가 로드되지 않음

**해결:**
```
올바른 경로:
/css/style.css
/js/script.js

잘못된 경로:
./css/style.css (상대 경로 - 문제 발생 가능)
css/style.css (슬래시 없음)
```

### 문제 3: 파일 권한 문제

**증상:**
- 403 Forbidden 에러

**해결:**
- 파일 권한을 644로 설정
- 폴더 권한을 755로 설정

---

## 🔍 디버깅 방법

### 브라우저 콘솔 확인

```javascript
// F12 → Console 탭

// 1. JavaScript 파일 로드 확인
console.log('Script version:', document.querySelector('script[src*="script.js"]').src);

// 2. CSS 파일 로드 확인
console.log('CSS version:', document.querySelector('link[href*="style.css"]').href);

// 3. 모바일 레이아웃 함수 확인
if (typeof adjustMobileLayout === 'function') {
    console.log('✅ adjustMobileLayout function loaded');
    adjustMobileLayout();
} else {
    console.error('❌ adjustMobileLayout function NOT loaded');
}

// 4. 현재 화면 너비 확인
console.log('Window width:', window.innerWidth);

// 5. 그리드 요소 확인
const grids = document.querySelectorAll('[style*="grid-template-columns"]');
console.log('Grids found:', grids.length);
grids.forEach((grid, i) => {
    console.log(`Grid ${i}:`, grid.style.gridTemplateColumns);
});
```

### Network 탭 확인

1. F12 → Network 탭
2. 페이지 새로고침
3. 확인사항:
   - style.css 상태: 200 OK (✅) / 304 Not Modified (✅) / 404 Not Found (❌)
   - script.js 상태: 200 OK (✅) / 304 Not Modified (✅) / 404 Not Found (❌)
   - 파일 크기 확인

---

## 📊 기대 결과

### 데스크톱 (769px 이상)
- ✅ 다단 그리드 레이아웃
- ✅ 네비게이션 링크 가로 배치
- ✅ 햄버거 메뉴 숨김

### 모바일 (768px 이하)
- ✅ **모든 그리드 1단으로 변경**
- ✅ 햄버거 메뉴 표시
- ✅ 터치 영역 44px 이상
- ✅ 가독성 향상

---

## 🆘 긴급 지원

배포 후에도 문제가 지속되면:

### 1. 파일 무결성 확인

```bash
# 파일 크기 확인
ls -lh css/style.css  # 61.6 KB
ls -lh js/script.js   # 18.8 KB
ls -lh index.html     # 97.4 KB
```

### 2. 내용 확인

```bash
# adjustMobileLayout 함수 존재 확인
grep -n "adjustMobileLayout" js/script.js

# 결과: 64, 85, 91번 줄에 있어야 함
```

### 3. 강제 재배포

1. 모든 파일 삭제
2. 캐시 클리어
3. 파일 재업로드
4. 버전 번호 변경 (v1.5.4)

---

## 📝 배포 체크리스트

배포 전:
- [ ] 로컬에서 테스트 완료
- [ ] JavaScript 중복 제거 확인
- [ ] 버전 번호 업데이트 (v1.5.3)
- [ ] 파일 크기 확인

배포 중:
- [ ] index.html 업로드
- [ ] css/style.css 업로드
- [ ] js/script.js 업로드
- [ ] images/ 폴더 업로드

배포 후:
- [ ] 파일 URL 직접 접근 테스트
- [ ] 브라우저 콘솔 오류 확인
- [ ] 데스크톱 모드 테스트
- [ ] 모바일 모드 테스트 (개발자 도구)
- [ ] 실제 스마트폰 테스트

---

## 🎯 최종 확인

**실제 배포된 사이트에서 반드시 확인:**

https://uvhktjqm.gensparkspace.com/

**모바일 모드에서:**
1. 햄버거 메뉴 보임 (☰)
2. 모든 카드가 세로로 쌓임 (1단)
3. 버튼이 크고 터치하기 쉬움
4. 텍스트가 읽기 편함

**위 사항들이 확인되지 않으면 배포가 제대로 되지 않은 것입니다!**

---

**배포 버전**: v1.5.3  
**배포 날짜**: 2025-01-02  
**중요도**: 🔴 높음 - 반드시 확인 필요
