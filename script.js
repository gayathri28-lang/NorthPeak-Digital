// ===========================
// Initialize Lucide Icons
// ===========================

lucide.createIcons();

// ===========================
// Contact Form Validation
// ===========================

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Clear previous message
    formMessage.textContent = "";

    // Check empty fields
    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all the required fields.";
        formMessage.style.color = "#dc2626";
        return;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "#dc2626";
        return;
    }

    // Success message
    formMessage.textContent = "✅ Thank you! Your message has been sent successfully.";
    formMessage.style.color = "#16a34a";

    // Reset form
    form.reset();
});

// ===========================
// Highlight Active Navigation Link
// ===========================

const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});

// ===========================
// Simple Fade-in Animation
// ===========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".service-card, .testimonial-card, .price-card").forEach((card) => {
    observer.observe(card);
});