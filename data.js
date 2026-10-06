const identities = [

    {
        season: 1,

        sinner: "료슈",

        name: "테스트 인격",

        grade: 3,

        attackTypes: [
            "참격",
            "관통"
        ],

        keywords: [
            "출혈",
            "호흡"
        ],


        skills: [

            {
                name: "스킬 1",

                type: "참격",

                basePower: 4,

                coinCount: 2,

                coins: [

                    {
                        power: 3,

                        effect: "출혈 1 부여"
                    },

                    {
                        power: 3,

                        effect: "호흡 1 획득"
                    }

                ],

                description:
                    "여기에 스킬 1의 설명을 입력하세요."
            },


            {
                name: "스킬 2",

                type: "관통",

                basePower: 6,

                coinCount: 3,

                coins: [

                    {
                        power: 2,

                        effect: "출혈 1 부여"
                    },

                    {
                        power: 3,

                        effect: "출혈 1 부여"
                    },

                    {
                        power: 4,

                        effect: "추가 효과"
                    }

                ],

                description:
                    "여기에 스킬 2의 설명을 입력하세요."
            },


            {
                name: "스킬 3",

                type: "관통",

                basePower: 8,

                coinCount: 2,

                coins: [

                    {
                        power: 4,

                        effect: "특수 효과"
                    },

                    {
                        power: 5,

                        effect: "특수 효과"
                    }

                ],

                description:
                    "여기에 스킬 3의 설명을 입력하세요."
            }

        ],


        defenseSkill: {

            name: "방어",

            type: "방어",

            basePower: 10,

            description:
                "여기에 방어 스킬 설명을 입력하세요."
        },


        passive:
            "여기에 패시브 설명을 입력하세요.",


        supportPassive:
            "여기에 서포트 패시브 설명을 입력하세요."
    }

];
