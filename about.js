const mobileMenuIcon = document.querySelector('.menu-i');
const mobileMenuClose = document.querySelector('#menu-i-close');
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('visibility');
});
mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.toggle('visibility');
});

const mediaCreater = () => {
  const footerSection = document.querySelector('.footer');
  footerSection.style.display = 'flex';
};

mediaCreater();

function home(url) {
  if (url) window.location.href = url;
}

home(null);
