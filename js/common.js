const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
const searchAEl = searchEl.querySelector('a');

searchAEl.addEventListener('click', function () {
  searchEl.setAttribute('style', 'width: 180px;');
  setTimeout(() => {
    searchInputEl.style.display = 'inline-block';
  }, 100)
  
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //올해 년도 반환