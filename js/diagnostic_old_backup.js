// 진단 상태 관리
const diagnosticState = {
    currentQuestion: 0,
    answers: {},
    totalQuestions: 5,
    problemTypes: []
};

// 문제 유형 정의 - 4가지 핵심 유형
const problemTypes = {
    no_boundary: {
        name: '경계선 부재형',
        icon: '🚫',
        description: '자신의 시간과 감정에 명확한 경계를 설정하지 못하는 경향이 있으며, 상대방의 요구에 지나치게 순응하는 패턴을 보입니다.',
        consequence: '이 패턴이 지속되면 상대방은 당신을 "언제든 이용 가능한 사람"으로 인식하게 되고, 당신의 가치는 점점 낮아집니다. 결국 "만만한 사람"이 되어 진정한 존중과 매력을 잃게 됩니다.',
        strategy: '• 작은 거절부터 시작하세요. "지금은 어렵다", "다른 날은 어때?" 같은 표현을 연습하세요.\n• 당신의 시간에 우선순위를 정하세요. 모든 연락에 즉시 반응할 필요는 없습니다.\n• 상대방의 무례한 행동(지각, 약속 취소 등)에는 분명한 피드백을 주세요.\n• "NO"는 관계를 끝내는 말이 아니라 나를 지키는 말임을 기억하세요.',
        chapters: [
            {
                title: 'PART 3 - 7장: 전략적 바운더리 이론',
                page: '당신의 가치를 지키는 경계선',
                intro: '자신의 시간과 감정을 지키는 구체적인 경계 설정 방법과 거절하는 기술을 배웁니다.'
            },
            {
                title: 'PART 1 - 1장: 왜 착한 남자는 항상 실패하는가?',
                page: '만만함의 저주',
                intro: '착함과 만만함의 차이를 이해하고, 선택적으로 착한 매력적인 남자가 되는 법을 배웁니다.'
            }
        ]
    },
    self_worth: {
        name: '자기가치 저평가형',
        icon: '📉',
        description: '자신을 과소평가하는 경향이 있어 상대방의 행동을 당연하게 받아들이며, 답장이나 반응에 과도하게 의존하는 모습을 보입니다.',
        consequence: '이러한 패턴은 관계에서 불안감을 키우고, 상대방에게 집착하게 만듭니다. 당신이 불안해할수록 상대방은 당신을 덜 원하게 되는 악순환이 반복됩니다.',
        strategy: '• 매일 자신의 성취를 3가지씩 기록하세요. 작은 것이라도 좋습니다.\n• 상대방의 답장을 기다리는 대신, 자신의 일과 취미에 몰입하세요.\n• "나도 선택받을 만한 가치가 있다"는 마인드를 가지세요.\n• 불편한 상황(늦은 답장, 지각 등)에는 솔직하게 감정을 표현하세요.\n• 한 사람에게만 집중하지 말고, 다양한 인간관계와 활동을 유지하세요.',
        chapters: [
            {
                title: 'PART 1 - 2장: 여자는 남자의 무엇에 끌리는가?',
                page: '가치 증명과 본능적 끌림',
                intro: '자기가치를 높이는 방법과 여자가 본능적으로 끌리는 남자의 특징을 배웁니다.'
            },
            {
                title: 'PART 3 - 8장: 당신의 세상에 여자를 초대하라',
                page: '대체 불가능한 남자의 태도',
                intro: '풍요로운 마인드셋을 가지고 여자를 당신의 세상으로 끌어들이는 법을 배웁니다.'
            },
            {
                title: 'PART 1 - 3장: 어장 관리의 진실과 탈출법',
                page: '주도권을 되찾는 두 가지 전략',
                intro: '불안과 집착에서 벗어나 관계의 주도권을 되찾는 구체적인 방법을 배웁니다.'
            }
        ]
    },
    friendzone: {
        name: '프렌드존 함정형',
        icon: '😔',
        description: '"좋은 사람"이라는 말을 자주 듣는 경향이 있으며, 편안하지만 설렘이 없는 관계 패턴을 보입니다.',
        consequence: '계속 이렇게 행동하면 "편한 친구"로만 남게 되고, 연애 대상으로는 절대 선택받지 못합니다. 진심을 다해도 "좋은 사람이긴 한데..." 라는 거절만 반복됩니다.',
        strategy: '• 예측 불가능한 행동을 보여주세요. 항상 연락하던 패턴을 깨보세요.\n• 가끔은 바쁜 척, 다른 약속이 있는 척 하세요. 항상 가용하지 않음을 보여주세요.\n• 적절한 스킨십(어깨, 허리 등)으로 물리적 거리를 좁히세요.\n• 장난스럽게 놀리거나 티키타카할 수 있는 유머를 개발하세요.\n• 칭찬과 무관심을 번갈아 사용하여 감정적 롤러코스터를 만드세요.',
        chapters: [
            {
                title: 'PART 2 - 5장: 2단계 - 텐션 극대화',
                page: '예측 불가능성으로 설렘을 만드는 법',
                intro: '프렌드존을 탈출하고 여자의 감정을 움직이는 텐션과 긴장감 만드는 기술을 배웁니다.'
            },
            {
                title: 'PART 2 - 4장: 1단계 - 존재 인식',
                page: '친구에서 남자로 인식되는 법',
                intro: '여자의 무의식에 "남자"로 각인되고 호기심을 자극하는 방법을 배웁니다.'
            }
        ]
    },
    no_frame: {
        name: '주도권 상실형',
        icon: '⚖️',
        description: '데이트 계획이나 결정을 상대방에게 맡기는 경향이 있으며, 자신만의 관점이나 주도권을 만들지 못하는 패턴을 보입니다.',
        consequence: '주도권 없는 관계는 지루함으로 이어지고, 상대방은 당신과의 미래를 그리지 못하게 됩니다. 결국 "재미없는 사람", "의견 없는 사람"으로 인식되어 관계가 자연스럽게 소멸됩니다.',
        strategy: '• 데이트 장소나 활동을 먼저 제안하세요. 최소 2~3가지 옵션을 준비하세요.\n• 자신만의 취미, 관심사, 가치관을 명확히 하고 당당하게 표현하세요.\n• 상대방 의견을 물어보되, 당신의 선호도 분명히 말하세요.\n• "당신의 세계"로 상대를 초대하세요. 좋아하는 카페, 취미, 음악 등을 공유하세요.\n• 가끔은 상대방의 제안을 거절하고 대안을 제시하세요.',
        chapters: [
            {
                title: 'PART 2 - 4장, 5장, 6장: 의도적 인식 모델 3단계',
                page: '관계를 지배하는 시스템',
                intro: '관계의 주도권을 잡고 여자를 당신의 세계로 끌어들이는 프레임 구축 방법을 배웁니다.'
            },
            {
                title: 'PART 3 - 8장: 당신의 세상에 여자를 초대하라',
                page: '대체 불가능한 남자의 태도',
                intro: '자신만의 세계관을 만들고 여자가 당신의 세계에 들어오고 싶게 만드는 법을 배웁니다.'
            },
            {
                title: 'PART 1 - 3장: 어장 관리의 진실과 탈출법',
                page: '주도권을 되찾는 두 가지 전략',
                intro: '끌려다니는 관계에서 벗어나 주도권을 확보하는 실전 전략을 배웁니다.'
            }
        ]
    }
};

// 질문별 문제 유형 매핑 (개선된 버전)
const questionMapping = {
    q1: { // 새벽 연락
        A: ['no_boundary'], // 바로 달려간다
        B: ['no_boundary'], // 잠깐 고민하다가 결국 나간다
        C: [], // 힘들다며 다른 날 제안 (건강한 반응)
        D: [] // 답하지 않거나 회피 (건강한 반응 - 무리한 요구는 거절)
    },
    q2: { // 약속 2시간 지각
        A: ['no_boundary'], // 별 말 없이 넘어간다
        B: ['self_worth'], // 마음속으로는 불편하지만 겉으로는 티 내지 않는다 (감정 억압)
        C: [], // 솔직하게 불편함을 전한다 (건강한 반응)
        D: [] // 단호히 말한다 (건강한 반응)
    },
    q3: { // "좋은 사람인데..." 빈도
        A: ['friendzone'], // 자주 듣는다 (3회 이상)
        B: ['friendzone'], // 가끔 듣는다 (1~2회)
        C: [] // 거의 못 들어봤다 (건강한 반응)
    },
    q4: { // 답장이 늦을 때
        A: ['self_worth'], // 계속 확인하며 불안
        B: ['self_worth'], // "왜 답장 안 하지?" 보낸다
        C: ['self_worth'], // 답장이 올 때까지 계속 기다린다 (수동적 불안)
        D: [] // 다른 일 하며 천천히 확인 (건강한 반응)
    },
    q5: { // 데이트 계획 결정
        A: ['no_frame'], // 상대가 정하는 대로 따른다
        B: ['no_frame'], // 의견 먼저 물어보고 함께 정한다 (소극적 - 상대 의견 먼저)
        C: [], // 내가 먼저 아이디어 내고 조율한다 (건강한 반응)
        D: [] // 내가 주로 코스 정하고 리드한다 (건강한 반응)
    }
};

// 페이지 전환 함수
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// 프로그레스 바 업데이트
function updateProgressBar(questionNumber) {
    const progressBar = document.getElementById('progress-bar');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    if (questionNumber > 0 && questionNumber <= diagnosticState.totalQuestions) {
        progressBar.classList.remove('hidden');
        const percentage = (questionNumber / diagnosticState.totalQuestions) * 100;
        progressFill.style.width = percentage + '%';
        progressText.textContent = `${questionNumber} / ${diagnosticState.totalQuestions}`;
    } else {
        progressBar.classList.add('hidden');
    }
}

// 답변 저장 및 문제 유형 수집
function handleAnswer(questionNumber, answer) {
    const questionKey = `q${questionNumber}`;
    diagnosticState.answers[questionKey] = answer;
    
    // 문제 유형 수집
    const types = questionMapping[questionKey][answer] || [];
    types.forEach(type => {
        if (!diagnosticState.problemTypes.includes(type)) {
            diagnosticState.problemTypes.push(type);
        }
    });
    
    diagnosticState.currentQuestion = questionNumber;
    
    // 클릭 효과
    const clickedButton = event.target.closest('.option-btn');
    if (clickedButton) {
        clickedButton.classList.add('selected');
    }
    
    // 다음 동작 결정
    setTimeout(() => {
        if (questionNumber < diagnosticState.totalQuestions) {
            const nextQuestion = questionNumber + 1;
            showPage(`question-${nextQuestion}`);
            updateProgressBar(nextQuestion);
        } else {
            showLoadingAndResult();
        }
    }, 300);
}

// 로딩 페이지 표시 후 결과 페이지로 전환
function showLoadingAndResult() {
    document.getElementById('progress-bar').classList.add('hidden');
    showPage('loading-page');
    
    setTimeout(() => {
        document.getElementById('step-1').classList.add('completed');
        document.getElementById('step-2').classList.add('active');
    }, 1200);
    
    setTimeout(() => {
        document.getElementById('step-2').classList.add('completed');
        document.getElementById('step-3').classList.add('active');
    }, 2400);
    
    setTimeout(() => {
        document.getElementById('step-3').classList.add('completed');
    }, 3600);
    
    setTimeout(() => {
        calculateAndShowResult();
    }, 4500);
}

// 결과 계산 및 표시
function calculateAndShowResult() {
    // 문제 유형별 카운트
    const typeCounts = {};
    diagnosticState.problemTypes.forEach(type => {
        typeCounts[type] = (typeCounts[type] || 0) + 1;
    });
    
    // 가장 많이 나타난 유형 찾기
    let mainProblem = null;
    let maxCount = 0;
    
    for (let type in typeCounts) {
        if (typeCounts[type] > maxCount) {
            maxCount = typeCounts[type];
            mainProblem = type;
        }
    }
    
    // 문제 유형이 없으면 기본 유형 (friendzone)
    if (!mainProblem) {
        mainProblem = 'friendzone';
    }
    
    // 메인 유형만 배열로 전달
    const topProblems = [mainProblem];
    
    // 결과 표시
    showResult(topProblems);
    showPage('result-page');
    
    // 분석 데이터 저장
    saveAnalytics(topProblems);
}

// 사용자 답변 기반 근거 문장 생성
function getEvidenceFromAnswers(topProblems, answers) {
    const mainProblem = topProblems[0];
    
    // 질문별 답변 내용 매핑 (자연스러운 표현)
    const answerPhrases = {
        q1: {
            A: "새벽에 연락이 오면 아무리 멀어도 바로 달려가려고 하고",
            B: "새벽 연락에 잠깐 고민하다가 결국 나가려고 하고",
            C: "새벽에 힘들다며 다른 날을 제안하고",
            D: "새벽 연락에는 답하지 않거나 회피하며"
        },
        q2: {
            A: "약속에 2시간 늦어도 별 말 없이 넘어가고",
            B: "약속이 늦어져도 마음속으로만 불편해하며 티 내지 않고",
            C: "약속 지각에 이유를 물으며 솔직하게 불편함을 전하고",
            D: "약속 지각 시 다음부터는 일찍 연락해달라고 단호히 말하며"
        },
        q3: {
            A: "'좋은 사람'이라는 말을 자주 들으며",
            B: "'좋은 사람'이라는 말을 가끔 들으며",
            C: "'좋은 사람'이라는 말을 거의 못 들어보며"
        },
        q4: {
            A: "답장이 안 오면 카톡방을 계속 확인하며 불안해하고",
            B: "답장이 늦으면 '왜 답장 안 하지?'라고 한두 번 보내며",
            C: "답장이 올 때까지 계속 기다리고",
            D: "답장 대기 중에는 다른 일을 하며 천천히 확인하고"
        },
        q5: {
            A: "데이트 계획 시 상대가 정하는 대로 따르는 편이고",
            B: "데이트 계획 시 상대의 의견을 먼저 물어보고 함께 정하고",
            C: "데이트 시 내가 먼저 아이디어를 내고 의견을 조율하고",
            D: "데이트는 내가 주로 코스를 정하고 분위기를 리드하며"
        }
    };
    
    // 문제 유형별 근거 문장 템플릿 (4가지 유형)
    const evidenceTemplates = {
        no_boundary: (phrases) => `당신은 ${phrases.join(' ')} 하는 모습에서 자신의 시간과 감정에 명확한 경계를 설정하지 못하고 지나치게 순응하는 경향이 보입니다.`,
        self_worth: (phrases) => `${phrases.join(' ')} 하는 행동 패턴은 자신의 가치를 낮게 평가하고 상대방의 반응에 과도하게 의존하는 경향을 보여줍니다.`,
        friendzone: (phrases) => `${phrases.join(' ')} 하는 태도에서 '편안한 친구'로는 머물 수 있지만 연애 대상으로는 인식되기 어려운 패턴이 나타날 수 있습니다.`,
        no_frame: (phrases) => `${phrases.join(' ')} 하는 태도에서 관계의 주도권을 상대에게 넘겨주고 자신의 의견을 표현하는 데 어려움을 느끼는 경향이 보입니다.`
    };
    
    // 문제 유형별 관련 질문 매핑 (4가지 유형)
    const problemQuestions = {
        no_boundary: ['q1', 'q2', 'q5'], // 경계선 부재형
        self_worth: ['q2', 'q4'], // 자기가치 저평가형
        friendzone: ['q3'], // 프렌드존 함정형
        no_frame: ['q5', 'q1'] // 주도권 상실형
    };
    
    // 메인 문제와 관련된 질문의 답변 수집
    const relatedQuestions = problemQuestions[mainProblem] || [];
    const selectedPhrases = [];
    
    for (let q of relatedQuestions) {
        if (answers[q] && answerPhrases[q] && answerPhrases[q][answers[q]]) {
            // A 또는 B 답변만 근거로 사용 (문제가 있는 답변)
            if (answers[q] === 'A' || answers[q] === 'B') {
                selectedPhrases.push(answerPhrases[q][answers[q]]);
            }
        }
    }
    
    // 근거가 충분하면 템플릿에 적용하여 자연스러운 문장 생성
    if (selectedPhrases.length >= 2 && evidenceTemplates[mainProblem]) {
        return evidenceTemplates[mainProblem](selectedPhrases);
    }
    
    // 근거가 부족하면 기본 문장 반환
    return null;
}

// 결과 표시 함수
function showResult(topProblems) {
    // 메인 문제 유형
    const mainProblem = problemTypes[topProblems[0]];
    
    // 결과 헤더 - 진단명만 크게 강조 (근거 제거)
    document.getElementById('result-type').innerHTML = `
        <div class="diagnosis-icon">${mainProblem.icon}</div>
        <div class="diagnosis-name">${mainProblem.name}</div>
    `;
    
    // 문제 유형 섹션 - 메인 유형만 표시
    const problemTypesContainer = document.getElementById('problem-types');
    problemTypesContainer.innerHTML = '';
    
    const problem = problemTypes[topProblems[0]];
    const card = document.createElement('div');
    card.className = 'problem-type-card';
    card.innerHTML = `
        <div class="problem-type-header">
            <span class="problem-icon">${problem.icon}</span>
            <h3 class="problem-name">${problem.name}</h3>
        </div>
        <p class="problem-description">${problem.description}</p>
        <div class="consequence-section">
            <div class="consequence-icon">⚠️</div>
            <div class="consequence-content">
                <h4 class="consequence-title">이대로 두면 어떻게 될까요?</h4>
                <p class="consequence-text">${problem.consequence}</p>
            </div>
        </div>
    `;
    problemTypesContainer.appendChild(card);
    
    // 맞춤 해결 전략 - 메인 유형만 표시 (디테일하게)
    const strategiesContainer = document.getElementById('strategies');
    strategiesContainer.innerHTML = '';
    
    const strategyCard = document.createElement('div');
    strategyCard.className = 'strategy-card-detailed';
    strategyCard.innerHTML = `
        <div class="strategy-number">💡</div>
        <div class="strategy-content">
            <h4 class="strategy-title">${problem.name} 해결 전략</h4>
            <p class="strategy-text-detailed">${problem.strategy.replace(/\n/g, '<br>')}</p>
        </div>
    `;
    strategiesContainer.appendChild(strategyCard);
    
    // 추천 학습 챕터 - 2~3개 표시
    const chaptersContainer = document.getElementById('chapters');
    chaptersContainer.innerHTML = '';
    
    problem.chapters.forEach((chapter, index) => {
        const chapterCard = document.createElement('div');
        chapterCard.className = 'chapter-card-detailed';
        chapterCard.innerHTML = `
            <div class="chapter-icon">📖</div>
            <div class="chapter-content">
                <h4 class="chapter-title">${chapter.title}</h4>
                <p class="chapter-page">${chapter.page}</p>
                <p class="chapter-intro">${chapter.intro}</p>
            </div>
        `;
        chaptersContainer.appendChild(chapterCard);
    });
}

// 분석 데이터 저장
function saveAnalytics(topProblems) {
    const analytics = {
        problemTypes: topProblems,
        answers: diagnosticState.answers,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
    };
    
    localStorage.setItem('diagnostic_result', JSON.stringify(analytics));
    console.log('진단 완료:', analytics);
}

// 카카오톡 CTA 버튼 설정
function setupKakaoCTA() {
    const kakaoChannelUrl = 'http://pf.kakao.com/_YOUR_CHANNEL_ID';
    
    document.querySelectorAll('.kakao-cta-btn').forEach(btn => {
        btn.href = kakaoChannelUrl;
        btn.target = '_blank';
        
        btn.addEventListener('click', function(e) {
            console.log('카카오톡 CTA 클릭:', new Date().toISOString());
            
            const result = localStorage.getItem('diagnostic_result');
            if (result) {
                const data = JSON.parse(result);
                console.log('전환 유저 문제 유형:', data.problemTypes);
            }
        });
    });
}

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 시작 버튼 이벤트
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            showPage('question-1');
            updateProgressBar(1);
            localStorage.setItem('diagnostic_start_time', new Date().toISOString());
        });
    }
    
    // 추가 정보 확장/축소 버튼
    const expandBtn = document.getElementById('expand-info-btn');
    const expandedContent = document.getElementById('expanded-content');
    if (expandBtn && expandedContent) {
        expandBtn.addEventListener('click', function() {
            if (expandedContent.style.display === 'none') {
                expandedContent.style.display = 'block';
                expandBtn.classList.add('expanded');
                expandBtn.querySelector('span:first-child').textContent = '정보 접기';
            } else {
                expandedContent.style.display = 'none';
                expandBtn.classList.remove('expanded');
                expandBtn.querySelector('span:first-child').textContent = '더 자세한 정보 보기';
            }
        });
    }
    
    // 모든 옵션 버튼에 이벤트 리스너 추가
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const answer = this.getAttribute('data-answer');
            const questionPage = this.closest('.page');
            const questionNumber = parseInt(questionPage.id.split('-')[1]);
            
            handleAnswer(questionNumber, answer);
        });
    });
    
    // 카카오톡 CTA 설정
    setupKakaoCTA();
    
    // 페이지 진입 시간 기록
    localStorage.setItem('page_entry_time', new Date().toISOString());
});

// 페이지 이탈 시 체류 시간 계산
window.addEventListener('beforeunload', function() {
    const entryTime = new Date(localStorage.getItem('page_entry_time'));
    const exitTime = new Date();
    const duration = (exitTime - entryTime) / 1000;
    console.log('총 체류 시간:', Math.round(duration), '초');
    console.log('현재 진행 상황:', diagnosticState);
});