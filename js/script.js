document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".fade-in");

    let observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("aparecer");
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});
