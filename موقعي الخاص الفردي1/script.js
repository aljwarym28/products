const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".main-nav a");
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (navToggle) {
    navToggle.addEventListener("click", () => {
        const isOpen = document.body.classList.toggle("nav-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
        navToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
        if (navToggle) {
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });
});

const whatsappLinks = document.querySelectorAll(".whatsapp-order");

whatsappLinks.forEach((link) => {
    const product = link.dataset.product || "منتج من Saqoor Store";
    const message = `السلام عليكم، أريد الاستفسار عن ${product} من Saqoor Store`;
    link.href = `https://wa.me/9647815576089?text=${encodeURIComponent(message)}`;
});

const filterButtons = document.querySelectorAll(".filter-btn");
const productSearch = document.getElementById("productSearch");
const catalogCards = Array.from(document.querySelectorAll("#catalogGrid .product-card"));
const emptyState = document.getElementById("emptyState");

let activeFilter = "all";

function normalizeText(value) {
    return value
        .toLowerCase()
        .replace(/[أإآ]/g, "ا")
        .replace(/ى/g, "ي")
        .replace(/ة/g, "ه")
        .trim();
}

function updateCatalog() {
    if (!catalogCards.length) return;

    const query = normalizeText(productSearch?.value || "");
    let visibleCount = 0;

    catalogCards.forEach((card) => {
        const category = card.dataset.category || "";
        const title = normalizeText(card.dataset.title || card.textContent);
        const categoryMatches = activeFilter === "all" || category === activeFilter;
        const searchMatches = !query || title.includes(query);
        const shouldShow = categoryMatches && searchMatches;

        card.hidden = !shouldShow;
        if (shouldShow) visibleCount += 1;
    });

    if (emptyState) {
        emptyState.hidden = visibleCount !== 0;
    }
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        activeFilter = button.dataset.filter || "all";
        updateCatalog();
    });
});

if (productSearch) {
    productSearch.addEventListener("input", updateCatalog);
}
