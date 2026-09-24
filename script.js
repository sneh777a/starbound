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

// Navigation: mobile menu + glowing active section
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

function setActiveNav(id) {
  navItems.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
  });
}

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when a link is clicked
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      setActiveNav(link.getAttribute("href").replace("#", ""));
    });
  });
}

// Keep the navbar glowing for the section currently on screen.
const sections = document.querySelectorAll("header[id], section[id]");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      setActiveNav(visible.target.id);
    }
  },
  {
    root: null,
    threshold: [0.25, 0.5, 0.75],
    rootMargin: "-20% 0px -55% 0px"
  }
);

sections.forEach(section => sectionObserver.observe(section));

// Home is active when the page is at the very top.
if (window.scrollY < 120) {
  setActiveNav("home");
}
