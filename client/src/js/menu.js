const iconMenu = document.querySelector('.menu__icon');
const searchForm = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');

if (iconMenu) {
  const menuBody = document.querySelector('.menu__body');

  iconMenu.addEventListener('click', () => {
    document.body.classList.toggle('disabled');
    iconMenu.classList.toggle('is-active');
    menuBody.classList.toggle('is-active');
  });
}

searchBtn.addEventListener('click', () => {
  searchForm.classList.toggle('is-active')
})

window.addEventListener('scroll', () => {
  searchForm.classList.remove('is-active')
})
