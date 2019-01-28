let button = document.querySelectorAll('button');
let img = document.querySelectorAll('img');
let body = document.getElementById('body');

let buttons = [];

button.forEach(btn => {
  buttons.push(btn);
})

buttons[0].addEventListener('click', () => {
  body.style.backgroundImage = `url(${img[0].currentSrc})`;
  body.style.backgroundSize = 'cover';
});
buttons[1].addEventListener('click', () => {
  body.style.backgroundImage = `url(${img[1].currentSrc})`;
  body.style.backgroundSize = 'cover';
});
buttons[2].addEventListener('click', () => {
  body.style.backgroundImage = `url(${img[2].currentSrc})`;
  body.style.backgroundSize = 'cover';
});
buttons[3].addEventListener('click', () => {
  body.style.backgroundImage = `url(${img[3].currentSrc})`;
  body.style.backgroundSize = 'cover';
});