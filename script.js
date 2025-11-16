// Smooth fade-in animation
const sections = document.querySelectorAll(".section, .hero");

const revealOnScroll = () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

sections.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(40px)";
    sec.style.transition = "0.8s";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
