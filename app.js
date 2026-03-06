const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");
const revealElements = document.querySelectorAll(".reveal");
const skillBars = document.querySelectorAll(".track i");

filters.forEach((button) => {
    button.addEventListener("click", () => {
        filters.forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");

        const selected = button.dataset.filter;
        cards.forEach((card) => {
            const category = card.dataset.category;
            const shouldShow = selected === "all" || selected === category;
            card.classList.toggle("is-hidden", !shouldShow);
        });
    });
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("is-visible");

            if (entry.target.classList.contains("skills-bars")) {
                skillBars.forEach((bar) => {
                    bar.style.width = bar.dataset.width;
                });
            }
        });
    },
    { threshold: 0.2 }
);

revealElements.forEach((el) => observer.observe(el));
