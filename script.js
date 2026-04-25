// ==========================
// ✨ TYPING ANIMATION
// ==========================
const texts = ["AIML Student", "Web Developer", "Problem Solver"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing-text").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1500);
    } else {
        setTimeout(type, 100);
    }
})();


// ==========================
// 🌙 DARK MODE TOGGLE
// ==========================
const themeBtn = document.getElementById("dark-mode-toggle");

themeBtn.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");

    if (currentTheme === "dark") {
        document.body.removeAttribute("data-theme");
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.body.setAttribute("data-theme", "dark");
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});


// ==========================
// 📱 MOBILE MENU TOGGLE
// ==========================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ==========================
// 🎯 SMOOTH SCROLL NAVBAR
// ==========================
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

        // Close mobile menu after click
        navLinks.classList.remove("active");
    });
});


// ==========================
// 🎓 ACADEMICS BUTTONS (FIXED)
// ==========================
function showAcademic(section) {

    const boxes = document.querySelectorAll(".academic-box");
    const buttons = document.querySelectorAll(".academic-buttons button");

    // Remove active class
    boxes.forEach(box => box.classList.remove("active"));
    buttons.forEach(btn => btn.classList.remove("active-btn"));

    // Show selected
    document.getElementById(section).classList.add("active");

    // Highlight clicked button
    event.target.classList.add("active-btn");
}


// ==========================
// 📬 CONTACT FORM VALIDATION
// ==========================
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name.length < 2) {
        alert("Please enter a valid name.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    if (message.length < 5) {
        alert("Message should be at least 5 characters.");
        return;
    }

    alert(`Thank you ${name}! Your message has been sent.`);
    this.reset();
});


// ==========================
// 🔝 SCROLL TO TOP BUTTON
// ==========================
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});