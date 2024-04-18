const toggleNavButton = document.getElementById('toggleNav');
const navLinks = document.getElementById('navLinks');

toggleNavButton.addEventListener('click', () => {
  navLinks.classList.toggle('hidden');
});
