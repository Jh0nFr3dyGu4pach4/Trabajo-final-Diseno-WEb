// =============================================
// 1. TOGGLE TEMA CLARO / OSCURO
// =============================================
const themeBtn = document.getElementById('theme-btn');

const toggleTheme = () => {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  themeBtn.textContent = isLight ? '🌙' : '☀️';
};

// Cargar tema guardado al iniciar
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-theme');
  themeBtn.textContent = '🌙';
}

// Evento del botón
themeBtn.addEventListener('click', toggleTheme);

// =============================================
// 2. MENÚ HAMBURGUESA (MÓVIL)
// =============================================
const hamburger = document.createElement('div');
hamburger.className = 'hamburger';
hamburger.innerHTML = '☰';
hamburger.style.fontSize = '2rem';
hamburger.style.cursor = 'pointer';
hamburger.style.display = 'none';
document.querySelector('.nav').appendChild(hamburger);

hamburger.addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace (en móvil)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('active');
  });
});

// Mostrar hamburguesa solo en móvil
const checkMobile = () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (window.innerWidth <= 768) {
    hamburger.style.display = 'block';
  } else {
    hamburger.style.display = 'none';
    navLinks.classList.remove('active');
  }
};
window.addEventListener('resize', checkMobile);
checkMobile(); // ejecutar al cargar

// =============================================
// 3. ANIMACIONES AL HACER SCROLL (Scroll Reveal)
// =============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observar todos los elementos que queremos animar
document.querySelectorAll('.card, .gallery img, form, section p, section h2').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
  observer.observe(el);
});