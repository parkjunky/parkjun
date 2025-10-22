// 진단 상태 관리
const diagnosticState = {
    currentQuestion: 0,
    answers: {},
    totalQuestions: 5,
    totalScore: 0 // 점수 기반 시스템
};

// 3가지 진단 결과 정의 (점수 기반)
const diagnosticResults = {
    level1_worst: {
        name: '관계 수동형 (Follower) "프렌드존 고착" 패턴',
        level: 'LEVEL 1',
        icon: '🚨',
        scoreRange: [0, 10],
        analysisIntro: '프레임 진단 모델이 당신의 답변을 정밀 분석한 결과, Level 1로 진단된 가장 치명적인 이유는 <strong>"경계선(Boundary) 붕괴"</strong>입니다.',
        analysisCritical: '이 두 가지 답변은 본 시스템이 <strong>"자기 가치 포기"</strong> 신호로 판단하는 핵심 데이터입니다. 이것이 당신의 진심이 <strong>"만만함"</strong>으로 변질되는 핵심 이유입니다.',
        prescriptionIntro: '프레임 진단 모델이 당신의 <strong>"경계선 붕괴"</strong> 문제를 해결하기 위해 처방한 맞춤형 솔루션입니다. 지금 바로 이 챕터부터 읽으십시오.',
        description: '당신은 여성에게 "안전하고 편한 사람"으로만 인식될 확률이 93%입니다.\n\n당신의 진심과 배려는 "매력"이 아닌 <strong>"예측 가능한 범주"</strong> 안에 갇혀 있습니다. 이 패턴을 개선하지 않으면, 관계의 주도권을 잡지 못한 채 감정 소모만 반복하게 될 수 있습니다.',
        empathy: '하지만 이것은 당신이 <strong>"가치 없는 사람"</strong>이라는 뜻이 절대 아닙니다. 오히려 그 반대입니다.\n\n당신은 진심을 다할 줄 알고, 상대방을 배려할 줄 아는 <strong>"높은 가치를 지닌 사람"</strong>입니다.\n\n\'프렌드존\' 패턴의 비극은, 당신의 이런 장점들이 <strong>"잘못된 방식"</strong>으로 표현되고 있다는 것입니다. 마치 다이아몬드를 가지고 있지만 그것을 돌멩이처럼 던지고 있는 것과 같습니다.\n\n당신의 가장 큰 장점이, 오히려 당신의 매력을 깎아내리고 \'친구\'로만 남게 만드는 <strong>\'치명적인 덫\'</strong>이 되고 있는 것입니다.',
        objection: '<strong>"잠깐, \'이 5개짜리 설문으로 나를 판단한다고?\'"</strong> 라고 생각하셨나요?\n\n혹은 <strong>"나는 항상 그런 건 아닌데?", "상대방에 따라 다른데?"</strong> 라고 생각할 수도 있습니다.\n\n정확합니다. 이 5개의 질문만으로 당신이라는 복잡한 사람을 완벽히 정의할 수는 없습니다. 당신은 당연히 \'어떤 날\'은 주도적이고, \'어떤 사람\'에게는 매력적일 수 있습니다.\n\n하지만 이 진단의 핵심은 \'당신이 항상 그런 사람\'이라고 낙인찍는 것이 아닙니다.\n\n이 진단이 무서운 이유는, 당신이 \'가끔\' 보인 그 \'예측 가능한 착한 남자\'의 모습이, 당신이 쌓아 올린 99%의 다른 매력을 한 번에 무너뜨리기 때문입니다.\n\n즉, 이 진단은 당신의 <strong>\'전체\'</strong>가 아닌, 당신의 연애를 반복적으로 망쳐온 <strong>\'치명적인 패턴\'</strong>을 감지해낸 것입니다. 당신이 \'가끔\' 보인 그 행동 하나가, 그녀에게는 당신을 \'만만한 남자\'로 분류하기에 충분한 \'결정적 데이터\'가 됩니다.',
        bridgeText: '위에 제시된 5가지 전략은 당신이 지금 당장 실행할 수 있는 <strong>\'긴급 응급처치\'</strong>입니다.\n\n하지만, 응급처치만으로는 \'프렌드존\' 패턴이라는 <strong>\'만성 질환\'</strong>을 근본적으로 치료할 수 없습니다.\n\n당신의 행동 기저에 깔린 이 <strong>\'패턴 자체\'</strong>를 교정할 <strong>\'완전한 시스템\'</strong>이 필요합니다.\n\n그 모든 시스템이 아래의 \'긴급 처방전\'에 담겨 있습니다.',
        consequence: '이 패턴을 즉시 깨지 못하면, 앞으로의 연애에서도 똑같은 결과만 반복됩니다.\n\n<strong>3개월 후:</strong> 당신이 좋아하는 여성은 다른 남자와 연애를 시작하고, 당신에게는 "연애 상담"을 요청합니다.\n\n<strong>1년 후:</strong> 또 다른 여성에게 진심을 다했지만, "오빠는 정말 좋은 사람인데, 우리는 친구로 지내는 게 좋을 것 같아"라는 말을 듣습니다.\n\n<strong>5년 후:</strong> 평생 관계의 주도권을 빼앗긴 채 감정 소모만 하게 됩니다. 당신이 줄 수 있는 모든 것을 주어도 "좋은 사람이긴 한데..."라는 말만 반복해서 듣게 되고, 결국 당신은 <strong>"착한 남자는 항상 손해"</strong>라는 잘못된 결론에 도달하게 됩니다.',
        strategy: '• <strong>즉시 중단:</strong> 새벽 연락, 무리한 요구에 모두 응하는 행동을 멈추세요.\n• <strong>거절 연습:</strong> "지금은 어렵다"는 말을 하루 1번씩 연습하세요.\n• <strong>자기 가치 재발견:</strong> 당신의 시간이 얼마나 소중한지 다시 깨닫기.\n• <strong>패턴 파괴:</strong> 항상 가용하지 않음을 보여주세요. 가끔은 연락을 늦게 받으세요.',
        chapters: [
            {
                title: 'PART 1 - 1장: 왜 \'착한 남자\'는 항상 실패하는가?',
                page: '\'만만함\'의 저주',
                intro: '이 챕터는 당신이 반드시 읽어야 할 가장 중요한 내용입니다. 당신이 지금까지 "착하게" 행동했는데도 왜 계속 프렌드존에 갇히는지, 그 근본 원인을 명확히 밝힙니다.',
                content: '• 왜 착한 남자는 프렌드존에 갇히는가\n• 매력 있는 남자의 "선택적 착함" 전략\n• 거절이 오히려 매력을 높이는 이유\n• 당신의 가치를 지키는 구체적 행동 지침'
            },
            {
                title: 'PART 3 - 7장: 전략적 바운더리 이론',
                page: '당신의 가치를 지키는 경계선',
                prescription: '당신은 지금 당장 <strong>"바운더리"</strong>를 세우는 것이 가장 시급합니다. 시스템이 진단한 당신의 문제(새벽 연락, 약속 지각 대응)에 대한 구체적인 대화 스크립트와 행동 지침을 이 챕터에서 즉시 확인할 수 있습니다.',
                intro: '당신에게 가장 시급한 것은 "바운더리(경계선)"를 세우는 것입니다. 이 챕터는 상대방의 무리한 요구에 NO라고 말하는 구체적인 방법을 알려줍니다.',
                content: '• 전략적 바운더리 설정의 3단계\n• "NO"라고 말해도 관계가 깨지지 않는 방법\n• 상대방이 당신을 더 원하게 만드는 거절의 기술\n• 실전 대화 스크립트와 예시'
            },
            {
                title: 'PART 2 - 5장: 2단계 - 텐션 극대화',
                page: '예측 불가능성으로 설렘을 만드는 법',
                intro: '"좋은 사람"에서 "설레는 남자"로 바뀌는 결정적 차이는 "예측 불가능성"입니다. 이 챕터는 여자의 감정을 움직이는 텐션 만들기 기술을 알려줍니다.',
                content: '• 텐션과 긴장감이 매력을 만드는 심리학적 원리\n• 예측 불가능한 행동 패턴 만들기\n• 가끔의 무관심이 오히려 관심을 끄는 이유\n• 감정 롤러코스터를 만드는 실전 기술'
            }
        ]
    },
    level2_middle: {
        name: '주도권 주저형 (Hesitator) "착한 남자" 딜레마',
        level: 'LEVEL 2',
        icon: '⚡',
        scoreRange: [11, 19],
        analysisIntro: '프레임 진단 모델이 당신의 답변을 정밀 분석한 결과, Level 2로 진단된 핵심 이유는 <strong>"주도권 주저"</strong>입니다.',
        analysisCritical: '당신은 기본 원리는 이해하고 있지만, 결정적인 순간에 <strong>"소극적인 태도"</strong>를 보이고 있습니다. 이것이 당신이 "좋은 사람"으로만 남을 수 있는 위험 요소입니다.',
        prescriptionIntro: '프레임 진단 모델이 당신의 <strong>"주도권 주저"</strong> 문제를 해결하기 위해 처방한 맞춤형 솔루션입니다. 이 챕터들이 당신을 상위 10%로 도약시킬 것입니다.',
        description: '당신은 충분히 매력적인 사람이지만, 관계의 주도권을 잡는 결정적인 순간에 망설이는 경향이 있습니다.\n\n당신의 가치를 명확히 보여주지 못한다면, 언제든 "좋은 사람"으로만 남을 위험 신호가 보입니다.',
        empathy: '물론 당신은 지금도 어느 정도 남여관계를 이해하고 있으며, 일반적인 남자들보다 어쩌면 더 나은 위치에 있을 수도 있습니다. 즉, 당신은 <strong>"나쁜 남자"</strong>도 아니고, <strong>"프렌드존"</strong>에 완전히 갇힌 사람도 아닙니다.\n\n하지만, 바로 그 점이 더 위험할 수 있습니다.\n\n당신은 "이 정도면 괜찮지 않나?" "나는 중간은 가잖아?"라고 생각할 수 있습니다. 하지만 연애에서 <strong>"중간"</strong>은 없습니다. 관계는 <strong>"전진"</strong>하거나 <strong>"후퇴"</strong>할 뿐입니다.\n\n지금 이 순간, 당신이 <strong>"상위 10%로 도약"</strong>할지, 아니면 <strong>"LEVEL 1로 떨어질지"</strong>가 결정됩니다.',
        objection: '<strong>"잠깐, \'이 5개짜리 설문으로 나를 판단한다고?\'"</strong> 라고 생각하셨나요?\n\n혹은 <strong>"나는 항상 그런 건 아닌데?", "상대방에 따라 다른데?"</strong> 라고 생각할 수도 있습니다.\n\n정확합니다. 이 5개의 질문만으로 당신이라는 복잡한 사람을 완벽히 정의할 수는 없습니다. 당신은 당연히 \'어떤 날\'은 주도적이고, \'어떤 사람\'에게는 매력적일 수 있습니다.\n\n하지만 이 진단의 핵심은 \'당신이 항상 그런 사람\'이라고 낙인찍는 것이 아닙니다.\n\n이 진단이 무서운 이유는, 당신이 \'가끔\' 보인 그 \'예측 가능한 착한 남자\'의 모습이, 당신이 쌓아 올린 99%의 다른 매력을 한 번에 무너뜨리기 때문입니다.\n\n즉, 이 진단은 당신의 <strong>\'전체\'</strong>가 아닌, 당신의 연애를 반복적으로 망쳐온 <strong>\'치명적인 패턴\'</strong>을 감지해낸 것입니다. 당신이 \'가끔\' 보인 그 행동 하나가, 그녀에게는 당신을 \'만만한 남자\'로 분류하기에 충분한 \'결정적 데이터\'가 됩니다.',
        bridgeText: '위에 제시된 4가지 전략은 당신이 <strong>\'LEVEL 1로 떨어지지 않기 위한 방어선\'</strong>입니다.\n\n하지만, 방어만으로는 <strong>\'상위 10%로 도약\'</strong>할 수 없습니다.\n\n당신에게 필요한 것은 "주저"를 "확신"으로, "소극"을 "주도"로 바꾸는 <strong>\'완전한 전환 시스템\'</strong>입니다.\n\n그 시스템이 아래의 \'긴급 처방전\'에 담겨 있습니다.',
        consequence: '이 상태를 유지하면:\n\n<strong>단기적으로:</strong> 관계는 시작되지만 \"친구 같은 느낌\"이라는 이유로 자주 거절당할 수 있습니다. 당신은 충분히 좋은 사람이지만, \"설레는 느낌\"이 부족하다는 피드백을 받게 됩니다.\n\n<strong>중기적으로:</strong> 관계가 시작되더라도 주도권을 상대방이 쥐게 되어, 당신은 항상 <strong>\"맞춰주는 사람\"</strong>이 됩니다. 이는 시간이 지날수록 피로감을 주고, 관계의 균형을 무너뜨립니다.\n\n<strong>장기적으로:</strong> 당신의 가치를 제대로 증명하지 못하면, 언제든 \"좋은 사람\"으로만 남을 위험이 있습니다. 지금 배운 것을 제대로 실행하지 않으면 다시 LEVEL 1로 떨어질 수 있습니다.\n\n하지만 좋은 소식이 있습니다. 지금이 바로 <strong>도약의 순간</strong>입니다. 몇 가지 핵심 전략만 익히면 상위 10%의 매력적인 남자로 성장할 수 있습니다.',
        strategy: '• <strong>자기 집중:</strong> 상대방 답장 대신 자신의 일과 취미에 몰입하세요.\n• <strong>가치 인정:</strong> "나도 선택받을 만한 사람"이라는 마인드를 가지세요.\n• <strong>다양한 관계:</strong> 한 사람에게만 집중하지 말고 여러 사람과 관계를 유지하세요.\n• <strong>풍요로운 마인드:</strong> 이 사람이 아니어도 괜찮다는 여유를 가지세요.',
        chapters: [
            {
                title: 'PART 1 - 2장: 여자는 남자의 무엇에 끌리는가?',
                page: '가치 증명과 본능적 끌림',
                prescription: '당신은 지금 <strong>"자기가치 인식"</strong>을 높이는 것이 가장 중요합니다. 이 챕터는 여자가 본능적으로 끌리는 남자의 5가지 특징을 과학적으로 분석하고, 당신이 <strong>"편한 친구"에서 "매력적인 남자"</strong>로 도약하는 구체적인 일상 습관을 알려줍니다.',
                intro: '당신이 "편한 친구"에서 "매력적인 남자"로 도약하기 위해 반드시 알아야 할 핵심 개념입니다. 여자가 본능적으로 끌리는 남자의 조건을 과학적으로 분석합니다.',
                content: '• 여자가 본능적으로 끌리는 5가지 남자의 특징\n• 자기가치를 높이는 구체적인 일상 습관\n• "좋은 사람"이 아닌 "특별한 사람"이 되는 법\n• 매력 포인트를 자연스럽게 드러내는 대화 기술\n• 가치 증명의 심리학: 왜 노력이 역효과를 낼까?'
            },
            {
                title: 'PART 3 - 8장: 당신의 세상에 여자를 초대하라',
                page: '대체 불가능한 남자의 태도',
                intro: '관계에서 주도권을 잡는 가장 강력한 방법은 "당신의 세계"를 먼저 만드는 것입니다. 이 챕터는 여자를 당신의 세계로 초대하는 풍요로운 마인드셋을 알려줍니다.',
                content: '• 풍요로운 마인드셋(Abundance Mindset)의 핵심 원리\n• "이 사람이 아니어도 괜찮다"는 여유의 힘\n• 당신의 세계를 만드는 5가지 실천 방법\n• 관계에서 주도권을 잡는 초대의 기술\n• 다양한 관계를 유지하며 매력을 배가시키는 전략'
            },
            {
                title: 'PART 1 - 3장: 어장 관리의 진실과 탈출법',
                page: '주도권을 되찾는 두 가지 전략',
                intro: '"나만 기다리고 있는 건 아닐까?" 이 불안감이 당신을 지배하고 있다면, 이 챕터가 해답입니다. 어장 관리에 당하지 않고 주도권을 되찾는 구체적인 전략을 제시합니다.',
                content: '• 어장 관리의 심리학: 왜 당하게 되는가?\n• 불안과 집착에서 벗어나는 2가지 핵심 전략\n• "답장 기다림"을 끝내는 마인드 전환법\n• 관계의 균형을 되찾는 구체적 행동 지침\n• 상대방이 오히려 당신을 궁금해하게 만드는 역전 기술'
            }
        ]
    },
    level3_good: {
        name: '관계 주도형 (Director) "프레임 설계자" 잠재력',
        level: 'LEVEL 3',
        icon: '⭐',
        scoreRange: [20, 25],
        analysisIntro: '프레임 진단 모델이 당신의 답변을 정밀 분석한 결과, 당신은 이미 관계의 주도권을 <strong>본능적으로 이해</strong>하고 있습니다.',
        analysisCritical: '당신의 답변 패턴은 대부분의 남자들과 확연히 다릅니다. 당신은 이미 <strong>상위 30%</strong>에 속합니다. 주변의 일반적인 여성을 만나는 데는 큰 어려움이 없을 것입니다.\n\n하지만, 그것이 당신의 연애가 \'완벽하다\'는 뜻은 아닙니다.\n\n\'진정으로 원하는 단 한 명의 이상형\' 앞에서도 지금과 같은 프레임을 유지할 수 있는지가 중요합니다.',
        prescriptionIntro: '프레임 진단 모델이 당신의 <strong>"본능을 시스템으로 전환"</strong>하기 위해 처방한 맞춤형 솔루션입니다. 이 챕터들이 당신을 마스터 레벨로 끌어올릴 것입니다.',
        description: '당신은 관계의 주도권을 본능적으로 이해하고 있으며, 자신의 가치를 지킬 줄 아는 사람입니다.\n\n지금의 연애 상황에 완전히 만족한다면, 이대로 살아도 좋습니다. 대부분의 사람들은 이렇게 살아갑니다.\n\n하지만 당신이 \'이 사람 아니면 안 되겠다\'고 생각하는, 진정으로 가치 있는 이성을 만났을 때 주저하거나 실패한 경험이 있다면, 당신은 \'마스터\'가 되기 위한 마지막 핵심 포인트를 놓치고 있는 것입니다.',
        empathy: '물론, 당신은 이미 <strong>"상위 30%"</strong>에 속해 있으며 대부분의 남자들이 실패하는 상황에서도, 본능적으로 올바른 선택을 하고 있습니다.\n\n당신은 <strong>"타고난 플레이어"</strong>가 맞습니다.\n\n하지만, \'타고난 플레이어\'와 \'관계의 설계자(마스터)\'는 완전히 다른 영역입니다.\n\n\'플레이어\'는 본능에 의지하기에 컨디션에 따라 흔들리지만, \'설계자\'는 어떤 상황, 어떤 상대를 만나도 흔들리지 않는 <strong>\'시스템\'</strong>을 가집니다. 당신은 지금 그 마지막 관문에 서 있습니다.',
        objection: '<strong>"잠깐, \'이 5개짜리 설문으로 나를 판단한다고?\'"</strong> 라고 생각하셨나요?\n\n혹은 <strong>"나는 이미 잘하고 있는데, 굳이 뭐가 더 필요해?"</strong> 라고 생각할 수도 있습니다.\n\n정확합니다. 이 5개의 질문만으로 당신의 모든 것을 완벽히 정의할 수는 없습니다. 당신은 이미 많은 상황에서 주도적인 모습을 보이고 있을 것입니다.\n\n하지만 이 진단이 포착한 것은, 당신의 그 <strong>\'훌륭한 본능\'</strong>과 동시에, 당신이 \'가끔\' 보일 수 있는 <strong>\'사소한 실수 패턴\'</strong>입니다.\n\n당신의 그 \'가끔\'의 실수조차 없애고, 당신의 \'본능\'을 \'완벽한 시스템\'으로 만드는 것이 마스터의 영역입니다. 당신의 \'99%의 성공\'이, 당신이 진정으로 원하는 단 한 사람 앞에서 <strong>\'1%의 실수\'</strong>로 무너진다면, 그것은 완벽한 것이 아닙니다.',
        bridgeText: '위에 제시된 5가지 전략은 당신이 이미 실천하고 있는 것들입니다.\n\n하지만, 이것을 <strong>\'본능\'</strong>이 아닌 <strong>\'시스템\'</strong>으로 만들어야 합니다.\n\n당신의 본능을 <strong>"재현 가능한 프레임워크"</strong>로 전환하고, 모든 상황에서 <strong>"완벽한 결과"</strong>를 만들어내는 방법이 아래의 \'긴급 처방전\'에 담겨 있습니다.',
        consequence: '<strong>현재 당신의 위치:</strong>\n당신은 \'일반적인\' 관계에서는 이미 승자입니다. 대부분의 남자들이 실패하는 상황에서도 당신은 주도권을 지킬 수 있습니다.\n\n<strong>하지만 이대로 \'본능\'에만 머무른다면:</strong>\n당신은 당신의 \'수준\'에 맞는 평범한 상대하고만 연애하게 될 것입니다. 당신의 \'본능\'이 통하지 않는, <strong>당신보다 더 높은 가치를 지녔거나 강력한 프레임을 가진 \'이상형\'</strong>을 만나는 순간, 당신은 당황하고 주도권을 빼앗기게 될 것입니다. \'타고난 플레이어\'의 한계는 거기까지입니다.\n\n<strong>다음 단계로 도약하려면:</strong>\n당신의 그 \'본능\'을 <strong>\'의도적인 설계도\'</strong>로 바꿔야 합니다. 단순히 "반응"하는 것이 아니라, 관계를 "설계"하는 마스터의 사고방식을 가져야 합니다.\n\n<strong>구체적으로:</strong>\n• <strong>3단계 시스템 완전 정복:</strong> 존재 인식 → 텐션 극대화 → 관계 확정의 완벽한 흐름 설계\n• <strong>고급 심리 테크닉:</strong> 예측 불가능성, 텐션 조절, 감정 투자 관리의 정교화\n• <strong>프레임 마스터:</strong> 모든 상황에서 프레임을 유지하는 기술\n• <strong>멘탈 모델 완성:</strong> 여자의 심리를 깊이 이해하고 활용하는 능력\n\n이 단계를 완성하면, 당신은 상위 1%의 대체 불가능한 남자가 됩니다.',
        strategy: '• <strong>전략적 사고:</strong> 단순 반응이 아닌, 관계를 설계하는 사고방식을 가지세요.\n• <strong>예측 불가능성:</strong> 더욱 정교한 텐션 조절 능력을 키우세요.\n• <strong>프레임 마스터:</strong> 모든 상황에서 프레임을 유지하는 훈련을 하세요.\n• <strong>멘탈 모델:</strong> 여자의 심리를 깊이 이해하고 활용하세요.\n• <strong>지속적 성장:</strong> 만족하지 말고 계속해서 새로운 인사이트를 추구하세요.',
        chapters: [
            {
                title: 'PART 2 전체: 관계를 지배하는 \'의도적 인식 모델\'',
                page: '3단계 시스템 (4-6장)',
                prescription: '당신은 본능을 <strong>"시스템"으로 전환</strong>해야 합니다. 이 PART는 당신이 무의식적으로 하던 행동들을 <strong>4장(편안함 형성) → 5장(텐션 극대화) → 6장(감정의 현실화)</strong>의 완벽한 3단계 흐름으로 정교하게 설계하는 방법을 알려줍니다. 이것이 당신을 <strong>상위 1%로 격상</strong>시킬 것입니다.',
                intro: '당신이 본능적으로 하던 것들을 "시스템"으로 만드는 가장 중요한 파트입니다. 4장(편안함 형성) → 5장(텐션 극대화) → 6장(감정의 현실화)의 완벽한 3단계 흐름을 설계하는 법을 배웁니다.',
                content: '• 4장: 1단계 - 편안함 형성 (경계심을 무너뜨리는 자기 개방의 기술)\n• 5장: 2단계 - 텐션 극대화 (예측 불가능성으로 설렘 만들기)\n• 6장: 3단계 - 감정의 현실화 (연인 관계를 완성하는 마지막 한 수)\n• 3단계를 연결하는 전략적 흐름 설계\n• 각 단계별 실전 대화 스크립트와 행동 지침\n• 단계 이동 시점을 정확히 판단하는 신호 읽기'
            },
            {
                title: 'PART 3 전체: 대체 불가능한 남자의 태도',
                page: '7-8장 완전 정복',
                intro: '이론을 넘어 실전에서 압도적인 결과를 내는 "태도"에 관한 핵심 전략입니다. 대체 불가능한 남자가 되기 위한 마지막 퍼즐 조각입니다.',
                content: '• 7장: 전략적 바운더리 이론 (당신의 가치를 지키는 경계선)\n• 8장: 당신의 세상에 여자를 초대하라 (대체 불가능한 남자의 태도)\n• 경계선으로 매력을 극대화하는 법\n• 풍요로운 마인드셋: "이 사람이 아니어도 괜찮다"는 여유의 힘\n• 프레임 유지 기술: 모든 상황에서 주도권을 지키는 법\n• 대체 불가능한 남자의 완성형 태도'
            },
            {
                title: 'PART 3 - 8장: 당신의 세상에 여자를 초대하라',
                page: '대체 불가능한 남자의 태도',
                intro: '프레임 전쟁의 최종 목표는 "대체 불가능한 남자"가 되는 것입니다. 이 챕터는 당신의 세상을 만들고 여자를 그 세계로 초대하는 태도를 알려줍니다.',
                content: '• 대체 불가능한 남자의 5가지 핵심 특징\n• "당신의 세계"를 구축하는 구체적인 방법\n• 여자를 당신의 세계로 초대하는 프레임 설계\n• 상위 1% 마인드셋: 선택하는 남자의 사고방식\n• 여러 여자가 당신을 원하게 만드는 전략적 관계 관리\n• 평생 매력을 유지하는 지속 가능한 성장 시스템'
            }
        ]
    }
};

// 질문별 점수 매핑 (0~5점)
const questionScores = {
    q1: { // 새벽 연락
        A: 0, // 바로 달려간다 (최악)
        B: 1, // 고민하다가 결국 나간다
        C: 4, // 다른 날 제안 (좋음)
        D: 5  // 회피한다 (최고 - 무리한 요구 거절)
    },
    q2: { // 2시간 지각
        A: 0, // 별 말 없이 넘어간다 (최악)
        B: 2, // 티 내지 않는다 (감정 억압)
        C: 4, // 솔직하게 전한다 (좋음)
        D: 5  // 단호히 말한다 (최고)
    },
    q3: { // "좋은 사람" 빈도
        A: 0, // 자주 듣는다 (최악)
        B: 2, // 가끔 듣는다
        C: 5  // 거의 못 들어봤다 (최고)
    },
    q4: { // 답장 늦음
        A: 0, // 계속 확인 불안 (최악)
        B: 1, // "왜 안 하지?" 보낸다
        C: 2, // 계속 기다린다
        D: 5  // 다른 일 하며 확인 (최고)
    },
    q5: { // 데이트 계획
        A: 0, // 따르는 편 (최악)
        B: 2, // 의견 먼저 물어봄 (소극적)
        C: 4, // 아이디어 내고 조율 (좋음)
        D: 5  // 리드한다 (최고)
    }
};

// 질문 텍스트 및 답변 매핑 (증거 인용용)
const questionTexts = {
    q1: {
        question: '마음에 드는 여자가 새벽에 연락하면?',
        answers: {
            A: '아무리 멀어도 바로 달려간다',
            B: '잠깐 고민하다가 결국 나간다',
            C: '\'힘들다\'며 다른 날을 제안한다',
            D: '답하지 않거나 회피한다'
        }
    },
    q2: {
        question: '상대방이 약속에 2시간 늦었을 때 당신의 반응은?',
        answers: {
            A: '별 말 없이 넘어간다',
            B: '마음속으로는 불편하지만 겉으로는 티 내지 않는다',
            C: '이유를 물으며 솔직하게 불편함을 전한다',
            D: '약속을 취소하거나 다음부터는 일찍 연락해달라고 단호히 말한다'
        }
    },
    q3: {
        question: '"오빠는 정말 좋은 사람인데..." 이런 말을 얼마나 자주 들으시나요?',
        answers: {
            A: '자주 듣는다 (3회 이상)',
            B: '가끔 듣는다 (1~2회)',
            C: '거의 못 들어봤다'
        }
    },
    q4: {
        question: '카톡 답장이 느리면 어떻게 하나요?',
        answers: {
            A: '카톡방을 계속 확인하며 불안해한다',
            B: '"왜 답장 안 하지?" 생각하며 한두 번 보내본다',
            C: '일단 참고 기다리지만 자꾸 신경쓰인다.',
            D: '다른 일을 하며 답이 오면 천천히 확인한다'
        }
    },
    q5: {
        question: '데이트나 만남을 계획할 때, 주로 어떻게 결정하나요?',
        answers: {
            A: '상대가 정하는 대로 따르는 편이다',
            B: '상대의 의견을 먼저 물어보고 함께 정한다',
            C: '내가 먼저 아이디어를 내고 의견을 조율한다',
            D: '내가 주로 코스를 정하고 분위기를 리드한다'
        }
    }
};

// 페이지 전환 함수
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
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

// 답변 저장 및 점수 계산
function handleAnswer(questionNumber, answer) {
    const questionKey = `q${questionNumber}`;
    diagnosticState.answers[questionKey] = answer;
    
    // 점수 계산
    const score = questionScores[questionKey][answer] || 0;
    diagnosticState.totalScore += score;
    
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

// 결과 계산 및 표시 (점수 기반 + 최악 답변 체크)
function calculateAndShowResult() {
    const score = diagnosticState.totalScore;
    
    // 최악의 답변(0점 또는 1점)이 있는지 체크
    let hasWorstAnswer = false;
    for (let questionKey in diagnosticState.answers) {
        const answer = diagnosticState.answers[questionKey];
        const answerScore = questionScores[questionKey][answer];
        if (answerScore <= 1) {
            hasWorstAnswer = true;
            break;
        }
    }
    
    // 점수에 맞는 레벨 찾기
    let resultLevel = null;
    for (let key in diagnosticResults) {
        const result = diagnosticResults[key];
        if (score >= result.scoreRange[0] && score <= result.scoreRange[1]) {
            resultLevel = result;
            break;
        }
    }
    
    // 최악 답변이 있으면 LEVEL 3 제외
    if (hasWorstAnswer && resultLevel === diagnosticResults.level3_good) {
        // 점수에 따라 LEVEL 1 또는 LEVEL 2로 강등
        if (score <= 17) {
            // 17점 이하면 원래 레벨 유지 (LEVEL 1 또는 2)
            // 이미 resultLevel이 올바르게 설정됨
        } else {
            // 18점 이상이지만 최악 답변 있음 → LEVEL 2로 강등
            resultLevel = diagnosticResults.level2_middle;
        }
    }
    
    // 결과가 없으면 기본값
    if (!resultLevel) {
        resultLevel = diagnosticResults.level2_middle;
    }
    
    // 결과 표시
    showResult(resultLevel, score);
    showPage('result-page');
}

// 사용자의 최악 답변 2개 찾기 (증거용 - LEVEL 1, 2)
function getWorstAnswers() {
    const worstAnswers = [];
    
    for (let questionKey in diagnosticState.answers) {
        const answer = diagnosticState.answers[questionKey];
        const score = questionScores[questionKey][answer];
        
        if (score <= 2) { // 0, 1, 2점 답변
            const questionData = questionTexts[questionKey];
            worstAnswers.push({
                question: questionData.question,
                answer: questionData.answers[answer],
                score: score,
                questionKey: questionKey
            });
        }
    }
    
    // 점수가 낮은 순으로 정렬
    worstAnswers.sort((a, b) => a.score - b.score);
    
    // 최대 2개 반환
    return worstAnswers.slice(0, 2);
}

// 사용자의 최상위 답변 2개 찾기 (칭찬용 - LEVEL 3)
function getBestAnswers() {
    const bestAnswers = [];
    
    for (let questionKey in diagnosticState.answers) {
        const answer = diagnosticState.answers[questionKey];
        const score = questionScores[questionKey][answer];
        
        if (score >= 4) { // 4, 5점 답변
            const questionData = questionTexts[questionKey];
            bestAnswers.push({
                question: questionData.question,
                answer: questionData.answers[answer],
                score: score,
                questionKey: questionKey
            });
        }
    }
    
    // 점수가 높은 순으로 정렬
    bestAnswers.sort((a, b) => b.score - a.score);
    
    // 최대 2개 반환
    return bestAnswers.slice(0, 2);
}

// 사용자의 최상위 답변 2개 찾기 (LEVEL 3 증거용)
function getBestAnswers() {
    const bestAnswers = [];
    
    for (let questionKey in diagnosticState.answers) {
        const answer = diagnosticState.answers[questionKey];
        const score = questionScores[questionKey][answer];
        
        // 4점 이상 답변만 선택 (단, q4의 C는 제외)
        if (score >= 4) {
            // Q4의 C 답변("일단 참고 기다리지만 자꾸 신경쓰인다", 2점)은 제외
            if (questionKey === 'q4' && answer === 'C') {
                continue;
            }
            
            const questionData = questionTexts[questionKey];
            bestAnswers.push({
                question: questionData.question,
                answer: questionData.answers[answer],
                score: score,
                questionKey: questionKey
            });
        }
    }
    
    // 점수가 높은 순으로 정렬
    bestAnswers.sort((a, b) => b.score - a.score);
    
    // 최대 2개 반환
    return bestAnswers.slice(0, 2);
}

// 결과 화면 렌더링
function showResult(result, score) {
    // 진단 결과 헤더
    document.getElementById('result-type').innerHTML = `
        <div class="diagnosis-level">${result.level}</div>
        <div class="diagnosis-icon">${result.icon}</div>
        <div class="diagnosis-name">${result.name}</div>
        <div class="diagnosis-score">총점: ${score}점 / 25점</div>
    `;
    
    // 1단계: 진단 설명 - "주요 원인 분석" 추가
    let analysisHTML = `<div class="diagnosis-title">프레임 진단 모델이 당신을 <strong>${result.level}: ${result.name}</strong>으로 진단했습니다.</div><br>`;
    
    if (result.analysisIntro) {
        analysisHTML += `<div class="analysis-intro"><strong>[시스템의 주요 원인 분석]</strong><br>${result.analysisIntro}</div><br>`;
        
        // 답변 인용 (레벨에 따라 다르게)
        let userAnswers = [];
        
        // LEVEL 3는 최상위 답변, LEVEL 1/2는 최악 답변 인용
        if (result === diagnosticResults.level3_good) {
            userAnswers = getBestAnswers();
        } else {
            userAnswers = getWorstAnswers();
        }
        
        if (userAnswers.length > 0) {
            analysisHTML += `<div class="analysis-evidence">`;
            userAnswers.forEach((item, index) => {
                if (index === 0) {
                    // 두 번째 답변이 있으면 "답했고,", 없으면 "답했습니다."
                    const ending = userAnswers.length > 1 ? '라고 답했고,' : '라고 답했습니다.';
                    analysisHTML += `당신은 "${item.question}" 질문에<br><strong>"${item.answer}"</strong>${ending}`;
                } else {
                    analysisHTML += `<br><br>"${item.question}" 질문에<br><strong>"${item.answer}"</strong>라고 답했습니다.`;
                }
            });
            analysisHTML += `</div><br>`;
        }
        
        if (result.analysisCritical) {
            analysisHTML += `<div class="analysis-critical">${result.analysisCritical}</div><br>`;
        }
    }
    
    analysisHTML += `<div class="diagnosis-description">${result.description.replace(/\n/g, '<br>')}</div>`;
    
    document.getElementById('result-description').innerHTML = analysisHTML;
    
    // 공감 및 어루만지기 (새로 추가)
    if (result.empathy) {
        document.getElementById('result-empathy').innerHTML = result.empathy.replace(/\n/g, '<br>');
    }
    
    // 의문 해소 및 반론 차단 (새로 추가)
    if (result.objection) {
        document.getElementById('result-objection').innerHTML = result.objection.replace(/\n/g, '<br>');
    }
    
    // 2단계: 이대로 두면 (HTML 렌더링, \n을 <br>로 변환)
    document.getElementById('result-consequence').innerHTML = result.consequence.replace(/\n/g, '<br>');
    
    // 3단계: 해결 전략 (HTML 렌더링, \n을 <br>로 변환)
    document.getElementById('result-strategy').innerHTML = result.strategy.replace(/\n/g, '<br>');
    
    // 4단계: 긴급 처방전 - 제목과 도입부 변경
    // 4번째 section-block의 제목만 선택 (첫 번째가 아닌 4번째)
    const allSectionTitles = document.querySelectorAll('#result-page .section-title');
    if (allSectionTitles.length >= 4) {
        const chaptersTitle = allSectionTitles[3]; // 0부터 시작하므로 3이 4번째
        chaptersTitle.innerHTML = `
            <span class="section-number">4</span>
            💊 당신을 위한 긴급 처방전 (『프레임 전쟁』)
        `;
    }
    
    // 처방전 도입부 추가
    const chaptersContainer = document.getElementById('result-chapters');
    chaptersContainer.innerHTML = '';
    
    if (result.prescriptionIntro) {
        const introDiv = document.createElement('div');
        introDiv.className = 'prescription-intro';
        introDiv.innerHTML = `<p>"${result.prescriptionIntro}"</p>`;
        chaptersContainer.appendChild(introDiv);
    }
    
    result.chapters.forEach((chapter, index) => {
        const chapterCard = document.createElement('div');
        chapterCard.className = 'chapter-card-detailed';
        
        // 처방전 제목 변경
        const prescriptionNumber = index + 1;
        const chapterTitle = chapter.prescription ? 
            `긴급 처방 ${prescriptionNumber}: ${chapter.title.replace('PART ', '')}` :
            chapter.title;
        
        // prescription이 있으면 사용, 없으면 intro 사용
        const prescriptionText = chapter.prescription || chapter.intro;
        
        // content가 있는 경우에만 표시
        let contentSection = '';
        if (chapter.content) {
            contentSection = `<div class="chapter-content-list">${chapter.content.replace(/\n/g, '<br>')}</div>`;
        }
        
        chapterCard.innerHTML = `
            <div class="chapter-icon">📖</div>
            <div class="chapter-content">
                <h4 class="chapter-title">${chapterTitle}</h4>
                <p class="chapter-page">${chapter.page}</p>
                ${chapter.prescription ? `<div class="chapter-prescription"><strong>이것이 왜 당신의 처방전인가?</strong><br>${prescriptionText}</div>` : `<p class="chapter-intro">${prescriptionText}</p>`}
                ${contentSection}
            </div>
        `;
        chaptersContainer.appendChild(chapterCard);
    });
    
    // 폼으로 스크롤 기능은 HTML의 앵커 링크로 자동 처리됨
}

// 분석 데이터 저장 (선택적)
function saveAnalytics(result, score) {
    // Google Analytics나 다른 분석 도구에 데이터 전송
    console.log('진단 결과:', result.name, '점수:', score);
}

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 시작 버튼
    const startButtons = document.querySelectorAll('.start-btn, .start-btn-large');
    startButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            showPage('question-1');
            updateProgressBar(1);
        });
    });
    
    // 추가 정보 펼치기/접기
    const expandBtn = document.getElementById('expand-info-btn');
    const expandedContent = document.getElementById('expanded-content');
    
    if (expandBtn && expandedContent) {
        expandBtn.addEventListener('click', function() {
            const btnText = expandBtn.querySelector('span:first-child');
            const btnIcon = expandBtn.querySelector('.expand-icon');
            
            if (expandedContent.style.display === 'none' || !expandedContent.style.display) {
                expandedContent.style.display = 'block';
                expandBtn.classList.add('expanded');
                btnText.textContent = '접기';
                btnIcon.textContent = '▲';
            } else {
                expandedContent.style.display = 'none';
                expandBtn.classList.remove('expanded');
                btnText.textContent = '더 자세한 정보 보기';
                btnIcon.textContent = '▼';
            }
        });
    }
    
    // 질문 옵션 버튼들
    for (let i = 1; i <= 5; i++) {
        const questionPage = document.getElementById(`question-${i}`);
        if (questionPage) {
            const optionButtons = questionPage.querySelectorAll('.option-btn');
            optionButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const answer = this.getAttribute('data-answer');
                    handleAnswer(i, answer);
                });
            });
        }
    }
});
