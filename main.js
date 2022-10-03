let searchInput = document.querySelector('.input');
let searchBtn = document.querySelector('.search-btn');

searchBtn.onclick = function(){
  let url = 'https://www.google.com/search?q='+searchInput.value;
  window.open(url, '_self');
}