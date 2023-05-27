// mobile menu section

const mobileMenuIcon = document.querySelector('.menu-i');
const mobileMenuClose = document.querySelector('#menu-i-close');
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('visibility');
});
mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.toggle('visibility');
});
