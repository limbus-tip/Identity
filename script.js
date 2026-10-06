function createCard(identity) {
    const card = document.createElement("div");
    card.className = "identity-card";

    // 키워드 태그
    const tags = (identity.keywords || [])
        .map(keyword => `<span class="tag">${keyword}</span>`)
        .join("");

    // 이미지가 있을 때만 이미지 표시
    const imageHTML = identity.image
        ? `
            <div class="identity-image-container">
                <img
                    class="identity-image"
                    src="${identity.image}"
                    alt="${identity.name}"
                    loading="lazy"
                    onerror="this.parentElement.style.display='none';"
                >
            </div>
        `
        : "";

    card.innerHTML = `
        ${imageHTML}

        <div class="identity-season">
            ${identity.season}
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

    card.addEventListener("click", () => {
        openDetail(identity);
    });

    return card;
}
