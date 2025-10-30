let navbarMenu = document.getElementById("navbar-menu")
let navbarToggle = document.querySelector(".navbar-toggle")

navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
});

const words = [
    "Full-Stack Web Developer",
    "Problem Solver",
    "Creative Coder",
    "UI/UX Enthusiast",
    "Frontend Specialist",
    "Backend Integrator",
    "Responsive Design Expert",
    "Tech Innovator"
];

let i = 0; // word index
let j = 0; // letter index
let currentWord = '';
let isDeleting = false;

const typingSpan = document.querySelector('.typing');

function type() {
    currentWord = words[i];

    if (isDeleting) {
        typingSpan.textContent = currentWord.substring(0, j--);
    } else {
        typingSpan.textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length) {
        // Pause at end of word
        setTimeout(() => { isDeleting = true; type(); }, 1000);
        return;
    } else if (isDeleting && j === 0) {
        // Move to next word
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 150); // speed
}

type();
