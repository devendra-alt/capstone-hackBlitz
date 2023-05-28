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
  const parternsSection = document.querySelector('.partners');
  const footerSection = document.querySelector('.footer');
  parternsSection.style.display = 'block';
  footerSection.style.display = 'flex';
};

mediaCreater();
