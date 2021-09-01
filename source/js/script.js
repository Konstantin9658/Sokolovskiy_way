let mainPage = document.querySelector('.page__body');
let btnHeader = mainPage.querySelector('.page-header__button');
let navMenu = mainPage.querySelector('.page-header__nav-menu');
let navLinks = mainPage.querySelectorAll('.page-header__nav-link');
let btnShowMores = mainPage.querySelectorAll('.tours__card-layout-button');
let tourDesc = mainPage.querySelector('.description__card');
let linkDesc = mainPage.querySelector('.description__item-link');
let btnCard = mainPage.querySelector('.tours__card-layout-button');
let greeceBtn = mainPage.querySelector('.btn-greece');
let albaniaBtn = mainPage.querySelector('.btn-albania');
let macedoniaBtn = mainPage.querySelector('.btn-macedonia');
let montenegroBtn = mainPage.querySelector('.btn-montenegro');
let croatiaBtn = mainPage.querySelector('.btn-croatia');
let btnBuys = mainPage.querySelectorAll('.btn-buy');
let modal = mainPage.querySelector('.modal');
let modalBuy = mainPage.querySelector('.modal-buy');
let modalSuccess = mainPage.querySelector('.modal-success');
let btnSubmit = mainPage.querySelector('.modal__button');
let modalForm = mainPage.querySelector('.modal__form');
let modalCloseBuy = mainPage.querySelector('.modal__close-buy');
let modalCloseSuccess = mainPage.querySelector('.modal__close-success');
let tourDescGreece = mainPage.querySelector('.greece');
let tourDescAlbania = mainPage.querySelector('.albania');
let tourDescMacedonia = mainPage.querySelector('.macedonia');
let tourDescMontenegro = mainPage.querySelector('.montenegro');
let tourDescCroatia = mainPage.querySelector('.croatia');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

btnHeader.addEventListener('click', () => {
  if (btnHeader.classList.contains('page-header__button--burger')) {
    btnHeader.classList.remove('page-header__button--burger');
    btnHeader.classList.add('page-header__button--closed');
    navMenu.classList.add('page-header__nav-menu--show');
  } else {
    btnHeader.classList.add('page-header__button--burger');
    btnHeader.classList.remove('page-header__button--closed');
    navMenu.classList.remove('page-header__nav-menu--show');
  }
})

for (navLink of navLinks) {
  navLink.addEventListener('click', () => {
    btnHeader.classList.add('page-header__button--burger');
    btnHeader.classList.remove('page-header__button--closed');
    navMenu.classList.remove('page-header__nav-menu--show');
  })
}

// WARNING!!! Могут выпасть глаза

greeceBtn.addEventListener('click', () => {
  tourDescGreece.classList.add('description__card--show');
  tourDescAlbania.classList.remove('description__card--show');
  tourDescMacedonia.classList.remove('description__card--show');
  tourDescMontenegro.classList.remove('description__card--show');
  tourDescCroatia.classList.remove('description__card--show');
})

albaniaBtn.addEventListener('click', () => {
  tourDescAlbania.classList.add('description__card--show');
  tourDescGreece.classList.remove('description__card--show');
  tourDescMacedonia.classList.remove('description__card--show');
  tourDescMontenegro.classList.remove('description__card--show');
  tourDescCroatia.classList.remove('description__card--show');
})

macedoniaBtn.addEventListener('click', () => {
  tourDescMacedonia.classList.add('description__card--show');
  tourDescGreece.classList.remove('description__card--show');
  tourDescAlbania.classList.remove('description__card--show');
  tourDescMontenegro.classList.remove('description__card--show');
  tourDescCroatia.classList.remove('description__card--show');
})

montenegroBtn.addEventListener('click', () => {
  tourDescMontenegro.classList.add('description__card--show');
  tourDescGreece.classList.remove('description__card--show');
  tourDescAlbania.classList.remove('description__card--show');
  tourDescMacedonia.classList.remove('description__card--show');
  tourDescCroatia.classList.remove('description__card--show');

})

croatiaBtn.addEventListener('click', () => {
  tourDescCroatia.classList.add('description__card--show');
  tourDescGreece.classList.remove('description__card--show');
  tourDescAlbania.classList.remove('description__card--show');
  tourDescMacedonia.classList.remove('description__card--show');
  tourDescMontenegro.classList.remove('description__card--show');
})

// Конец кошмара

for (btnBuy of btnBuys) {
  btnBuy.addEventListener('click', () => {
    if (modal.classList.contains('modal-buy')) {
      modal.classList.add('modal--show');
    }
  })
}

modalCloseBuy.addEventListener('click', () => {
  modalBuy.classList.remove('modal--show');
})

modalCloseSuccess.addEventListener('click', () => {
  modalSuccess.classList.remove('modal--show');
})

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    modalSuccess.classList.remove('modal--show');
    modalBuy.classList.remove('modal--show');
  }
})

modalForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  modalSuccess.classList.add('modal--show');
})
