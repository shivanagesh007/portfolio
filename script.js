// Run when DOM is ready
document.addEventListener("DOMContentLoaded", () => {

    const loader = document.querySelector(".loader");

    // 🔥 SAFETY: Remove loader no matter what
    window.addEventListener("load", () => {
        if (loader) {
            loader.style.opacity = "0";
            setTimeout(() => loader.remove(), 500);
        }
    });

    // 🧠 FALLBACK (if load event fails)
    setTimeout(() => {
        if (loader) loader.remove();
    }, 2000);

    // 🎬 Scroll reveal animation
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

    // 🌙 Navbar scroll effect
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.style.background = "rgba(5, 5, 5, 0.95)";
            navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.5)";
        } else {
            navbar.style.background = "rgba(5, 5, 5, 0.7)";
            navbar.style.boxShadow = "none";
        }
    });

    // ⚡ Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});