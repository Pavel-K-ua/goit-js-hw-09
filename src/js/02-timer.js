import flatpickr from 'flatpickr';
import '../../node_modules/flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  daysEl: document.querySelector('span[data-days]'),
  hoursEl: document.querySelector('span[data-hours]'),
  minutesEl: document.querySelector('span[data-minutes]'),
  secondsEl: document.querySelector('span[data-seconds]'),
};

refs.startBtn.setAttribute('disabled', '');

const nowTime = new Date();
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= nowTime) {
      window.alert('Please choose a date in the future');
    }
    refs.startBtn.removeAttribute('disabled');
    let diff = selectedDates[0] - nowTime;
    refs.startBtn.addEventListener('click', onStartBtnClick);
    function onStartBtnClick() {
      const interval = setInterval(() => {
        transform();
        diff -= 1000;
        diffObj = convertMs(diff);
        render(diffObj);
        if (diff <= 1000) clearInterval(interval);
      }, 1000);
    }
  },
};
flatpickr(refs.input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function transform() {
  refs.daysEl.classList.add('trans');
  refs.hoursEl.classList.add('trans');
  refs.minutesEl.classList.add('trans');
  refs.secondsEl.classList.add('trans');
  setTimeout(() => {
    refs.daysEl.classList.remove('trans');
    refs.hoursEl.classList.remove('trans');
    refs.minutesEl.classList.remove('trans');
    refs.secondsEl.classList.remove('trans');
  }, 500);
}

function render(diffObj) {
  refs.daysEl.textContent = diffObj.days.toString().padStart(2, '0');
  refs.hoursEl.textContent = diffObj.hours.toString().padStart(2, '0');
  refs.minutesEl.textContent = diffObj.minutes.toString().padStart(2, '0');
  refs.secondsEl.textContent = diffObj.seconds.toString().padStart(2, '0');
}
