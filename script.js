const grid =
    document.getElementById("identityGrid");

const searchInput =
    document.getElementById("searchInput");

const seasonFilter =
    document.getElementById("seasonFilter");

const sinnerFilter =
    document.getElementById("sinnerFilter");

const gradeFilter =
    document.getElementById("gradeFilter");

const typeFilter =
    document.getElementById("typeFilter");

const seasonTitle =
    document.getElementById("seasonTitle");

const noResult =
    document.getElementById("noResult");

const modal =
    document.getElementById("detailModal");

const detail =
    document.getElementById("identityDetail");

const closeModal =
    document.getElementById("closeModal");


/* =========================
   필터 옵션 생성
========================= */

function setupFilters() {

    const seasons =
        [...new Set(
            identities.map(
                identity => identity.season
            )
        )].sort((a, b) => a - b);


    seasons.forEach(season => {

        const option =
            document.createElement("option");

        option.value = season;

        option.textContent =
            `시즌 ${season}`;

        seasonFilter.appendChild(option);

    });


    const sinners =
        [...new Set(
            identities.map(
                identity => identity.sinner
            )
        )].sort();


    sinners.forEach(sinner => {

        const option =
            document.createElement("option");

        option.value = sinner;

        option.textContent = sinner;

        sinnerFilter.appendChild(option);

    });

}


/* =========================
   별 표시
========================= */

function getStars(grade) {

    return "★".repeat(grade);

}


/* =========================
   카드 생성
========================= */

function createCard(identity) {

    const card =
        document.createElement("div");

    card.className =
        "identity-card";


    let tags = "";


    identity.keywords.forEach(keyword => {

        tags += `
            <span class="tag">
                ${keyword}
            </span>
        `;

    });


    card.innerHTML = `

        <div class="identity-season">
            시즌 ${identity.season}
        </div>

        <div class="identity-sinner">
            ${identity.sinner}
        </div>

        <div class="identity-name">
            ${identity.name}
        </div>

        <div class="identity-grade">
            ${getStars(identity.grade)}
        </div>

        <div class="identity-tags">
            ${tags}
        </div>

    `;


    card.addEventListener(
        "click",
        () => openDetail(identity)
    );


    return card;

}


/* =========================
   인격 표시
========================= */

function renderIdentities() {

    const search =
        searchInput.value
            .trim()
            .toLowerCase();


    const selectedSeason =
        seasonFilter.value;

    const selectedSinner =
        sinnerFilter.value;

    const selectedGrade =
        gradeFilter.value;

    const selectedType =
        typeFilter.value;


    const filtered =
        identities.filter(identity => {

            /* 시즌 */

            if (
                selectedSeason !== "all" &&
                String(identity.season)
                    !== selectedSeason
            ) {
                return false;
            }


            /* 수감자 */

            if (
                selectedSinner !== "all" &&
                identity.sinner
                    !== selectedSinner
            ) {
                return false;
            }


            /* 등급 */

            if (
                selectedGrade !== "all" &&
                String(identity.grade)
                    !== selectedGrade
            ) {
                return false;
            }


            /* 공격 유형 */

            if (
                selectedType !== "all" &&
                !identity.attackTypes.includes(
                    selectedType
                )
            ) {
                return false;
            }


            /* 검색 */

            if (search !== "") {

                let searchText = "";


                searchText +=
                    identity.sinner + " ";

                searchText +=
                    identity.name + " ";

                searchText +=
                    identity.keywords.join(" ") + " ";

                searchText +=
                    identity.attackTypes.join(" ");


                identity.skills.forEach(skill => {

                    searchText +=
                        " " + skill.name;

                    searchText +=
                        " " + skill.type;

                    searchText +=
                        " " + skill.description;


                    skill.coins.forEach(coin => {

                        searchText +=
                            " " + coin.effect;

                    });

                });


                searchText =
                    searchText.toLowerCase();


                if (
                    !searchText.includes(search)
                ) {
                    return false;
                }

            }


            return true;

        });


    grid.innerHTML = "";


    filtered.forEach(identity => {

        grid.appendChild(
            createCard(identity)
        );

    });


    if (filtered.length === 0) {

        noResult.classList.remove(
            "hidden"
        );

    } else {

        noResult.classList.add(
            "hidden"
        );

    }


    updateTitle();

}


/* =========================
   제목
========================= */

function updateTitle() {

    if (
        seasonFilter.value === "all"
    ) {

        seasonTitle.textContent =
            "모든 인격";

    } else {

        seasonTitle.textContent =
            `시즌 ${seasonFilter.value}`;

    }

}


/* =========================
   상세 정보
========================= */

function openDetail(identity) {

    let skillsHTML = "";


    identity.skills.forEach(
        (skill, skillIndex) => {

            let coinsHTML = "";


            skill.coins.forEach(
                (coin, coinIndex) => {

                    coinsHTML += `

                        <div class="coin">

                            <div class="coin-number">
                                🪙 코인 ${coinIndex + 1}
                                &nbsp; +${coin.power}
                            </div>

                            <div class="coin-effect">
                                ${coin.effect}
                            </div>

                        </div>

                    `;

                }
            );


            skillsHTML += `

                <div class="skill">

                    <div class="skill-title">
                        ${skill.name}
                    </div>

                    <div class="skill-info">

                        공격 유형:
                        ${skill.type}

                        <br>

                        기본 위력:
                        ${skill.basePower}

                        <br>

                        코인 수:
                        ${skill.coinCount}

                    </div>


                    <div class="description">
                        ${skill.description}
                    </div>


                    <div class="detail-section">

                        <h3>
                            코인 정보
                        </h3>

                        ${coinsHTML}

                    </div>

                </div>

            `;

        }
    );


    detail.innerHTML = `

        <div class="detail-header">

            <div class="detail-season">
                시즌 ${identity.season}
            </div>

            <div class="detail-sinner">
                ${identity.sinner}
            </div>

            <div class="detail-name">
                ${identity.name}
            </div>

            <div class="detail-grade">
                ${getStars(identity.grade)}
            </div>

        </div>


        <div class="detail-section">

            <h3>
                키워드
            </h3>

            <div class="identity-tags">

                ${identity.keywords
                    .map(
                        keyword =>
                        `<span class="tag">
                            ${keyword}
                        </span>`
                    )
                    .join("")
                }

            </div>

        </div>


        <div class="detail-section">

            <h3>
                스킬
            </h3>

            ${skillsHTML}

        </div>


        <div class="detail-section">

            <h3>
                방어 스킬
            </h3>

            <div class="skill">

                <div class="skill-title">
                    ${identity.defenseSkill.name}
                </div>

                <div class="skill-info">
                    ${identity.defenseSkill.type}
                    <br>
                    기본 위력:
                    ${identity.defenseSkill.basePower}
                </div>

                <div class="description">
                    ${identity.defenseSkill.description}
                </div>

            </div>

        </div>


        <div class="detail-section">

            <h3>
                패시브
            </h3>

            <div class="description">
                ${identity.passive}
            </div>

        </div>


        <div class="detail-section">

            <h3>
                서포트 패시브
            </h3>

            <div class="description">
                ${identity.supportPassive}
            </div>

        </div>

    `;


    modal.classList.remove("hidden");

    document.body.style.overflow =
        "hidden";

}


/* =========================
   모달 닫기
========================= */

function closeDetail() {

    modal.classList.add("hidden");

    document.body.style.overflow =
        "";

}


closeModal.addEventListener(
    "click",
    closeDetail
);


document
    .querySelector(".modal-background")
    .addEventListener(
        "click",
        closeDetail
    );


/* ESC */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeDetail();

        }

    }
);


/* =========================
   이벤트
========================= */

searchInput.addEventListener(
    "input",
    renderIdentities
);

seasonFilter.addEventListener(
    "change",
    renderIdentities
);

sinnerFilter.addEventListener(
    "change",
    renderIdentities
);

gradeFilter.addEventListener(
    "change",
    renderIdentities
);

typeFilter.addEventListener(
    "change",
    renderIdentities
);


/* =========================
   시작
========================= */

setupFilters();

renderIdentities();
