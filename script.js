// Hide loader when page is ready
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1200); // 1.2 seconds
});

// Typewriter Effect
const texts = [
  "Full-Stack Developer",
  "Building with AI & Cloud",
  "MERN + Python + GCP",
  "Open to Internships & New Grad Roles"
];

let count = 0;
let index = 0;
let currentText = "";
let isDeleting = false;

const typewriterElement = document.getElementById("typewriter");

function type() {
  if (!typewriterElement) return;

  currentText = texts[count];

  if (isDeleting) {
    typewriterElement.textContent = currentText.substring(0, index - 1);
    index--;
  } else {
    typewriterElement.textContent = currentText.substring(0, index + 1);
    index++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && index === currentText.length) {
    typeSpeed = 1500;
    isDeleting = true;
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    count = (count + 1) % texts.length;
    typeSpeed = 400;
  }

  setTimeout(type, typeSpeed);
}

type();

// Mobile Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when a link is clicked
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}
