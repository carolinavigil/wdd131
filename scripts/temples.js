// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburgerBtn.addEventListener('click', () => {
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
    hamburgerBtn.innerHTML = "&#9776;";
  } else {
    navMenu.style.display = "flex";
    hamburgerBtn.innerHTML = "&#10005;";
  }
});

// Dynamic Footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
