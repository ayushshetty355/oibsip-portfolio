// ===============================
// Mobile Menu
// ===============================
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
});

// Close menu when clicking nav link
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    });
});


// ===============================
// Sticky Header
// ===============================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 80);
});


// ===============================
// Active Navigation Link
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });

});


// ===============================
// Theme Toggle
// ===============================
const themeBtn = document.getElementById("theme-toggle");
const themeIcon = themeBtn.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        localStorage.setItem("theme", "light");

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    } else {

        localStorage.setItem("theme", "dark");

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }

});


// ===============================
// Scroll Reveal Animation
// ===============================
const hiddenElements = document.querySelectorAll(
    ".stat-card, .about-container, .education-card, .skill-box, .experience-card, .timeline-item, .project-card, .certificate-card, .github-card, .contact-container"
);

hiddenElements.forEach(el => el.classList.add("hidden"));

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

hiddenElements.forEach(el => observer.observe(el));


// ===============================
// Back To Top Button
// ===============================
const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        scrollTopBtn.style.opacity = "1";
        scrollTopBtn.style.pointerEvents = "auto";
    } else {
        scrollTopBtn.style.opacity = "0";
        scrollTopBtn.style.pointerEvents = "none";
    }

});


// ===============================
// Smooth Scroll
// ===============================
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


// ===============================
// Typing Text Effect
// ===============================
const typingElement = document.querySelector(".typing-text");

const words = [
    "Aspiring Software Engineer",
    "Frontend Developer",
    "React Learner",
    "AI Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent = currentWord.substring(0, charIndex++);
        
        if (charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();