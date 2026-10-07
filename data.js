// ============================================================
// 인격 데이터
// 인격을 추가하려면 아래 객체 하나를 복사해서 배열에 이어 붙이면 됩니다.
// - image: 이미지가 없으면 이 줄을 통째로 지워도 됩니다.
// - grade: 1, 2, 3 중 하나
// - attackTypes: "참격" / "관통" / "타격"
// - skills 안의 type도 위 세 가지 중 하나
// - skills / defenseSkill 안의 sin(죄악): "분노" "색욕" "나태" "탐식" "우울" "오만" "질투"
//   (인격의 죄악 목록과 필터는 스킬의 sin 값에서 자동으로 만들어집니다)
// - notes(특이사항): 문구 목록. 예) notes: ["수비 스킬 발동 안 함", "피아식별 불가", "파괴 불가 코인"]
//   skills / defenseSkill 안에 넣으면 해당 스킬 칸에, 인격 맨 바깥에 넣으면 "특이사항" 칸에 표시됩니다.
//   검색에도 포함됩니다. 필요 없으면 줄을 지우면 됩니다.
// ============================================================

const identities = [
    {
        season: "시즌 8",
        sinner: "돈키호테",
        name: "오뜨 꾸뛰르 르 누아르 브랜드 매니저",

        // 이미지 링크
        image: "https://assets.limbusdeck.com/identities/full-uptied/haute-couture-le-noir-brand-manager-don-quixote.webp",

        grade: 3,
        attackTypes: ["관통"],
        keywords: ["화상"],

        skills: [
            {
                name: "스킬 1",
                type: "관통",
                sin: "분노",
                notes: ["피아식별 불가\n(아군 공격 가능)", "파괴 불가 코인"],
                basePower: 5,
                coinCount: 2,
                coins: [
                    {
                        power: 3,
                        effect: "화상 1 부여\n대상에게 위력 증가"
                    },
                    {
                        power: 3,
                        effect: "화상 1 부여\n다음 턴에 화상 횟수 +1"
                    }
                ],
                description: "스킬 1 설명"
            }
        ],

        defenseSkill: {
            name: "방어",
            type: "방어",
            sin: "분노",
            basePower: 10,
            description: "방어 스킬 설명"
        },

        passive: "패시브 설명",
        supportPassive: "서포트 패시브 설명"
    },

    {
        season: "Standard Fare",
        sinner: "파우스트",
        name: "예시 인격",

        // 이미지가 없으면 이 줄을 아예 빼도 됨
        image: "https://example.com/example.webp",

        grade: 2,
        attackTypes: ["타격"],
        keywords: ["진동"],

        skills: [
            {
                name: "스킬 1",
                type: "타격",
                sin: "우울",
                notes: ["수비 스킬 발동 안 함"],
                basePower: 5,
                coinCount: 2,
                coins: [
                    {
                        power: 2,
                        effect: "진동 1 부여"
                    },
                    {
                        power: 3,
                        effect: "진동 횟수 1 증가"
                    }
                ],
                description: "예시 데이터입니다."
            }
        ],

        defenseSkill: {
            name: "방어",
            type: "방어",
            sin: "우울",
            basePower: 10,
            description: "방어 스킬 설명"
        },

        passive: "패시브 설명",
        supportPassive: "서포트 패시브 설명"
    }
];
