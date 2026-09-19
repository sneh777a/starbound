/* ========== RESET & BASE ========== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #ffffff;
  background: #030a16;
  overflow-x: hidden;
  line-height: 1.6;
}

/* ========== STARRY BACKGROUND ========== */
.stars, .twinkling {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: -1;
}

.stars {
  background-color: #030a16;
}

.twinkling {
  background: transparent;
  animation: move-twink-back 200s linear infinite;
  opacity: 0.6;
}

@keyframes move-twink-back {
  from { background-position: 0 0; }
  to { background-position: -10000px 5000px; }
}

/* ========== NAVBAR ========== */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(3, 10, 22, 0.85);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.logo {
  font-size: 1.4rem;
  font-weight: 600;
  color: #7dd3fc;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  color: #e0f2fe;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #38bdf8;
}

.hamburger {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #e0f2fe;
}

/* ========== HERO ========== */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 1.5rem 4rem;
}

.hero-content {
  max-width: 700px;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #38bdf8;
  box-shadow: 0 0 25px rgba(56, 189, 248, 0.4);
  margin-bottom: 1.5rem;
}

.hero h1 {
  font-size: 2.6rem;
  margin-bottom: 0.5rem;
}

.highlight {
  color: #38bdf8;
  text-shadow: 0 0 15px rgba(56, 189, 248, 0.5);
}

.hero h2 {
  font-size: 1.4rem;
  color: #7dd3fc;
  min-height: 2rem;
  margin-bottom: 1rem;
}

.tagline {
  color: #bae6fd;
  margin-bottom: 2rem;
  font-size: 1.05rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.btn {
  padding: 0.75rem 1.6rem;
  background: #0ea5e9;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s;
  box-shadow: 0 0 15px rgba(14, 165, 233, 0.4);
}

.btn:hover {
  background: #38bdf8;
  transform: translateY(-2px);
  box-shadow: 0 0 25px rgba(56, 189, 248, 0.6);
}

.btn-outline {
  background: transparent;
  border: 2px solid #38bdf8;
  color: #38bdf8;
  box-shadow: none;
}

.btn-outline:hover {
  background: rgba(56, 189, 248, 0.15);
}

.social-links {
  display: flex;
  gap: 1.2rem;
  justify-content: center;
}

.social-links a {
  color: #7dd3fc;
  font-size: 1.5rem;
  transition: all 0.3s;
}

.social-links a:hover {
  color: #38bdf8;
  transform: scale(1.15);
  text-shadow: 0 0 12px rgba(56, 189, 248, 0.8);
}