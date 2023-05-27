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

// guest cards

const cardLimit = 2;
let guestListData = [];

const guestCard = (guest) => {
  const guestLiCard = document.createElement('li');
  guestLiCard.id = guest.id;
  guestLiCard.classList.add('guest-card');
  const guestImgEl = document.createElement('div');
  guestImgEl.classList.add('guest-image');
  const imgEl = document.createElement('img');
  imgEl.src = guest.image;
  imgEl.id = guest.id;
  guestImgEl.appendChild(imgEl);
  const guestDetailsEl = document.createElement('div');
  guestDetailsEl.classList.add('guest-details');
  guestDetailsEl.innerHTML += `
    <p class="guest-name">${guest.name}</p>
    <p class="guest-designation">${guest.designation}</p>
    <p class="guest-brif">${guest.briefSummary}</p>
  `;
  guestLiCard.appendChild(guestImgEl);
  guestLiCard.appendChild(guestDetailsEl);
  return guestLiCard;
};

const loadFeaturedGuest = () => {
  fetch('featured-guests.json')
    .then((response) => response.json())
    .then((data) => {
      const guestsList = data.featuredGuests;
      guestListData = guestsList;
      const guestListParent = document.querySelector('.guests-list');
      let i = 0;
      while (i < cardLimit) {
        guestListParent.appendChild(guestCard(guestsList[i]));
        i += 1;
      }
    });
};

loadFeaturedGuest();

const moreBtn = document.querySelector('.mobile-more-btn');

moreBtn.addEventListener('click', () => {
  const guestListParent = document.querySelector('.guests-list');
  for (let i = cardLimit; i < guestListData.length; i += 1) {
    guestListParent.appendChild(guestCard(guestListData[i]));
  }
  moreBtn.classList.toggle('hide');
});
