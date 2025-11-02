// 프레임 설계자 랜딩 페이지 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // ===========================
    // 햄버거 메뉴 토글
    // ===========================
    const hamburger = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // 메뉴 링크 클릭 시 메뉴 닫기
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // 메뉴 외부 클릭 시 닫기
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
    
    // ===========================
    // 이미지 Lazy Loading 처리
    // ===========================
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.classList.add('loaded');
        });
    }
    
    // ===========================
    // 모바일 그리드 레이아웃 강제 변경
    // ===========================
    function adjustMobileLayout() {
        if (window.innerWidth <= 768) {
            // 인라인 스타일 그리드를 1단으로 변경
            const grids = document.querySelectorAll('[style*="grid-template-columns"]');
            grids.forEach(grid => {
                // 기존 스타일 유지하면서 grid-template-columns만 변경
                grid.style.setProperty('grid-template-columns', '1fr', 'important');
            });
            
            // display: grid가 있는 모든 요소
            const displayGrids = document.querySelectorAll('[style*="display: grid"]');
            displayGrids.forEach(grid => {
                grid.style.setProperty('grid-template-columns', '1fr', 'important');
            });
        } else {
            // 데스크톱에서는 원래대로 복원 (필요시)
            // 이 부분은 선택적으로 구현
        }
    }
    
    // 페이지 로드 시 실행
    adjustMobileLayout();
    
    // 리사이즈 시에도 실행
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(adjustMobileLayout, 250);
    });
    
    // ===========================
    // FAQ 아코디언 기능
    // ===========================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-q');
        
        question.addEventListener('click', function() {
            // 현재 아이템이 열려있는지 확인
            const isActive = item.classList.contains('active');
            
            // 모든 FAQ 아이템 닫기
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // 클릭한 아이템이 닫혀있었다면 열기
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // ===========================
    // 일반 아코디언 기능 (긴 설명 섹션)
    // ===========================
    const accordionSections = document.querySelectorAll('.accordion-section');
    
    accordionSections.forEach(section => {
        const header = section.querySelector('.accordion-header');
        
        if (header) {
            header.addEventListener('click', function() {
                section.classList.toggle('active');
            });
        }
    });

    // ===========================
    // 하단 고정 바 표시/숨김
    // ===========================
    const stickyBar = document.getElementById('stickyBar');
    const orderSection = document.getElementById('order');
    
    if (stickyBar && orderSection) {
        window.addEventListener('scroll', function() {
            const orderSectionTop = orderSection.offsetTop;
            const scrollPosition = window.scrollY + window.innerHeight;
            
            // 주문 섹션에 도달하면 하단 바 숨기기
            if (scrollPosition >= orderSectionTop + 200) {
                stickyBar.classList.remove('show');
            } 
            // 스크롤이 일정 위치 이상이면 하단 바 표시
            else if (window.scrollY > 500) {
                stickyBar.classList.add('show');
            } else {
                stickyBar.classList.remove('show');
            }
        });
    }

    // ===========================
    // 스크롤 진행 바
    // ===========================
    function updateScrollProgress() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        // 진행 바가 없다면 생성
        let progressBar = document.querySelector('.scroll-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress';
            document.body.appendChild(progressBar);
        }
        
        progressBar.style.width = scrolled + '%';
    }

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // 초기 실행

    // ===========================
    // 부드러운 스크롤 (앵커 링크)
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // '#'만 있는 경우 무시
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const navHeight = document.querySelector('.top-nav')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===========================
    // 네비게이션 스크롤 효과
    // ===========================
    const nav = document.querySelector('.top-nav');
    let lastScrollTop = 0;
    
    if (nav) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            
            // 스크롤 다운
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                nav.style.transform = 'translateY(-100%)';
            } 
            // 스크롤 업
            else {
                nav.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, false);
    }

    // ===========================
    // 스크롤 애니메이션 (Intersection Observer)
    // ===========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 애니메이션을 적용할 요소들
    const animateElements = document.querySelectorAll(`
        .content-block,
        .pcard,
        .reason-card,
        .faq-item,
        .testimonial-card
    `);

    animateElements.forEach(el => {
        observer.observe(el);
    });

    // ===========================
    // 모바일 메뉴 토글 (추후 확장 가능)
    // ===========================
    function handleMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        
        if (window.innerWidth <= 768 && navLinks) {
            // 모바일 메뉴 버튼이 있다면 토글 기능 추가
            const menuButton = document.querySelector('.menu-toggle');
            
            if (menuButton) {
                menuButton.addEventListener('click', function() {
                    navLinks.classList.toggle('active');
                });
            }
        }
    }

    window.addEventListener('resize', handleMobileMenu);
    handleMobileMenu();

    // ===========================
    // 이미지 로딩 에러 처리
    // ===========================
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // 이미지 로딩 실패 시 placeholder 처리
            this.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.minHeight = '200px';
            this.alt = '이미지를 불러올 수 없습니다';
        });
    });

    // ===========================
    // 카운트업 애니메이션 (숫자 증가 효과)
    // ===========================
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    }

    // 카운터 요소가 있다면 실행
    const counters = document.querySelectorAll('[data-counter]');
    
    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-counter'));
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // ===========================
    // 버튼 클릭 피드백
    // ===========================
    const buttons = document.querySelectorAll('.btn-purchase, .btn-final-purchase, .sticky-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 클릭 효과
            this.style.transform = 'scale(0.98)';
            
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // ===========================
    // 로컬 스토리지 관리 (선택적)
    // ===========================
    function trackVisit() {
        const visitCount = localStorage.getItem('visitCount') || 0;
        const newCount = parseInt(visitCount) + 1;
        localStorage.setItem('visitCount', newCount);
        localStorage.setItem('lastVisit', new Date().toISOString());
    }

    trackVisit();

    // ===========================
    // 모바일 접기/펼치기 기능
    // ===========================
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
    
    collapsibleHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // 현재 헤더의 활성 상태 토글
            this.classList.toggle('active');
            
            // 부드러운 스크롤 (선택사항)
            if (this.classList.contains('active')) {
                setTimeout(() => {
                    this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 300);
            }
        });
    });

    // 모바일에서 처음 로드 시 첫 번째 섹션만 열기 (선택사항)
    if (window.innerWidth <= 768 && collapsibleHeaders.length > 0) {
        // 기본적으로 모두 닫힌 상태로 시작
        // 필요시 첫 번째만 열기: collapsibleHeaders[0].classList.add('active');
    }

    // ===========================
    // 페이지 로드 완료 알림
    // ===========================
    console.log('✅ 프레임 설계자 페이지 로드 완료');
    console.log('📊 방문 횟수:', localStorage.getItem('visitCount'));
    
    // ===========================
    // 성능 모니터링
    // ===========================
    if (window.performance) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log('⚡ 페이지 로드 시간:', (pageLoadTime / 1000).toFixed(2) + '초');
            }, 0);
        });
    }

    // ===========================
    // 유틸리티 함수들
    // ===========================
    
    // 디바운스 함수
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // 스로틀 함수
    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // 화면 너비 확인
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // ===========================
    // 이벤트 위임 (동적 요소 대응)
    // ===========================
    document.body.addEventListener('click', function(e) {
        // 특정 클래스 클릭 시 처리
        if (e.target.matches('.dynamic-button')) {
            e.preventDefault();
            console.log('동적 버튼 클릭됨');
        }
    });
});

// ===========================
// 폼 제출 처리 (사전 예약용)
// ===========================
function handleFormSubmit(formElement) {
    if (!formElement) return;
    
    formElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 폼 데이터 수집
        const formData = new FormData(formElement);
        const data = Object.fromEntries(formData);
        
        console.log('제출된 데이터:', data);
        
        // 여기에 실제 API 호출 로직 추가
        // fetch('/api/preorder', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // }).then(response => response.json())
        //   .then(data => console.log('Success:', data))
        //   .catch((error) => console.error('Error:', error));
        
        // 성공 메시지 표시
        alert('사전예약이 완료되었습니다! 이메일을 확인해주세요.');
        formElement.reset();
    });
}

// ===========================
// 후기 펼치기/접기 기능
// ===========================
function toggleReviews() {
    const container = document.getElementById('moreReviewsContainer');
    const btn = document.getElementById('toggleReviewsBtn');
    const icon = document.getElementById('toggleIcon');
    
    if (container.style.display === 'none' || container.style.display === '') {
        // 펼치기
        container.style.display = 'block';
        icon.textContent = '▲';
        btn.innerHTML = '<span style="font-size: 1.3rem; margin-right: 8px;">🔥</span>후기 접기<span id="toggleIcon" style="margin-left: 8px; font-size: 0.9rem;">▲</span>';
        
        // 부드러운 스크롤
        setTimeout(() => {
            container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    } else {
        // 접기
        container.style.display = 'none';
        icon.textContent = '▼';
        btn.innerHTML = '<span style="font-size: 1.3rem; margin-right: 8px;">🔥</span>더 많은 코칭/상담 실제 후기 확인하기 (4개)<span id="toggleIcon" style="margin-left: 8px; font-size: 0.9rem;">▼</span>';
    }
}

// ===========================
// Export functions (필요한 경우)
// ===========================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        handleFormSubmit,
        toggleReviews
    };
}
