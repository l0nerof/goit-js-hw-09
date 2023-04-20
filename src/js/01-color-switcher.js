function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const changeColorBtn = document.querySelector('[data-start]');
const stopChangeColorBtn = document.querySelector('[data-stop]');
stopChangeColorBtn.disabled = true;
let interval;

changeColorBtn.addEventListener('click', event => {
  interval = setInterval(() => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
  }, 1000);
  changeColorBtn.disabled = true;
  stopChangeColorBtn.disabled = false;
});

stopChangeColorBtn.addEventListener('click', event => {
  clearInterval(interval);
  changeColorBtn.disabled = false;
  stopChangeColorBtn.disabled = true;
  body.style.backgroundColor = '';
});
