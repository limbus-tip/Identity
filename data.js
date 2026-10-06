const identities = [

    /*
    ==================================================
    인격 데이터 작성 방법
    ==================================================

    season에는 아래 중 하나를 입력:

    "시즌 1"
    "시즌 2"
    "시즌 3"
    "시즌 4"
    "시즌 5"
    "시즌 6"
    "시즌 7"
    "시즌 8"

    "Standard Fare"

    "Walpurgisnacht"

    ==================================================
    */


    {
        season: "시즌 8",

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

                        effect:
                            "출혈 1 부여"
                    },


                    {
                        power: 3,

                        effect:
                            "호흡 1 획득"
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

                        effect:
                            "출혈 1 부여"
                    },


                    {
                        power: 3,

                        effect:
                            "출혈 1 부여"
                    },


                    {
                        power: 4,

                        effect:
                            "추가 효과"
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

                        effect:
                            "특수 효과"
                    },


                    {
                        power: 5,

                        effect:
                            "특수 효과"
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

    },


    /*
    ==================================================
    예시 2
    Standard Fare
    ==================================================
    */

    {
        season: "Standard Fare",

        sinner: "파우스트",

        name: "예시 인격",

        grade: 2,


        attackTypes: [
            "타격"
        ],


        keywords: [
            "진동"
        ],


        skills: [

            {
                name: "스킬 1",

                type: "타격",

                basePower: 5,

                coinCount: 2,


                coins: [

                    {
                        power: 2,

                        effect:
                            "진동 1 부여"
                    },


                    {
                        power: 3,

                        effect:
                            "진동 횟수 1 증가"
                    }

                ],


                description:
                    "예시 데이터입니다."

            }

        ],


        defenseSkill: {

            name: "방어",

            type: "방어",

            basePower: 10,


            description:
                "방어 스킬 설명"

        },


        passive:
            "패시브 설명",


        supportPassive:
            "서포트 패시브 설명"

    },


    /*
    ==================================================
    예시 3
    Walpurgisnacht
    ==================================================
    */

    {
        season: "Walpurgisnacht",

        sinner: "돈키호테",

        name: "예시 발푸르기스 인격",

        grade: 3,


        attackTypes: [
            "관통"
        ],


        keywords: [
            "화상"
        ],


        skills: [

            {
                name: "스킬 1",

                type: "관통",

                basePower: 5,

                coinCount: 2,


                coins: [

                    {
                        power: 3,

                        effect:
                            "화상 1 부여"
                    },


                    {
                        power: 3,

                        effect:
                            "화상 1 부여"
                    }

                ],


                description:
                    "예시 발푸르기스나흐트 인격입니다."

            }

        ],


        defenseSkill: {

            name: "방어",

            type: "방어",

            basePower: 10,


            description:
                "방어 스킬 설명"

        },


        passive:
            "패시브 설명",


        supportPassive:
            "서포트 패시브 설명"

    }

];
