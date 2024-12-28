// Sticky Navbar
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

// Typing Effect in Hero Section
const typingTexts = [
    "Welcome to My Portfolio",
    "Showcasing My Work",
    "Creating Modern Designs",
];
let typingIndex = 0;

function typeEffect() {
    const heroText = document.querySelector(".hero h2");
    if (heroText) {
        heroText.textContent = typingTexts[typingIndex];
        typingIndex = (typingIndex + 1) % typingTexts.length;
    }
}

setInterval(typeEffect, 3000);

// Projects Hover Animation
document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
        card.addEventListener("mouseover", () => {
            card.classList.add("hover");
        });
        card.addEventListener("mouseout", () => {
            card.classList.remove("hover");
        });
    });
});

document.querySelectorAll('.percent').forEach(percent => {
    const value = percent.getAttribute('data-percent');
    const circle = percent.querySelector('circle:nth-child(2)');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference - (value / 100) * circumference}`;
});


// Contact Form Submission
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Message Sent Successfully!");
            contactForm.reset();
        });
    }
});

// Dynamic Project Rendering
function renderProjects() {
    const projectGrid = document.querySelector(".project-grid");
    if (projectGrid) {
        projectData.forEach((project) => {
            const card = document.createElement("div");
            card.className = "project-card";
            card.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" class="btn">View Project</a>
            `;
            projectGrid.appendChild(card);
        });
    }
}

// Skill Bars Animation
// Skills Bar Animation
document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".skill-progress");

    const animateSkillBars = () => {
        skillBars.forEach((bar) => {
            const skillPercentage = bar.getAttribute("data-skill");
            bar.style.width = skillPercentage;
        });
    };

    // Trigger animation when the Skills section is visible
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                }
            });
        },
        { threshold: 0.5 }
    );

    const skillsSection = document.querySelector("#skills");
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});


// Initialize Page Content
document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
});
