// Automatically displays the current year in the footer
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = `© ${new Date().getFullYear()}`;
}


// Subtle entrance animation when sections enter the screen
const sections = document.querySelectorAll(
    ".section, .education-section, .awards-section"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.12
    }
);

sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
});
