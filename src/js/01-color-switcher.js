function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  bodyEl: document.body,
};

refs.stopBtn.setAttribute('disabled', '');
refs.bodyEl.style.transition = '0.5s';
let bodyColorSwitcher;

refs.startBtn.addEventListener('click', onStartClick);
function onStartClick(event) {
  bodyColorSwitcher = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  event.target.setAttribute('disabled', '');
  refs.stopBtn.removeAttribute('disabled');
}

refs.stopBtn.addEventListener('click', onStopClick);
function onStopClick(event) {
  clearInterval(bodyColorSwitcher);
  event.target.setAttribute('disabled', '');
  refs.startBtn.removeAttribute('disabled');
}
