let buttons = document.querySelectorAll('button');
let img = document.querySelectorAll('img');
let body = document.getElementById('body');

buttons.forEach((button,i) => {
  button.addEventListener('click', () => {
    body.style.backgroundImage = `url(${img[i].currentSrc})`;
    body.style.backgroundSize = 'cover';
  });
})
