import flatpickr from 'flatpickr';
import '../../node_modules/flatpickr/dist/flatpickr.min.css';

// Якщо користувач вибрав дату в минулому, покажи window.alert() з текстом "Please choose a date in the future".
// Якщо користувач вибрав валідну дату (в майбутньому), кнопка «Start» стає активною.
// Кнопка «Start» повинна бути неактивною доти, доки користувач не вибрав дату в майбутньому.
// Натисканням на кнопку «Start» починається відлік часу до обраної дати з моменту натискання.

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

startBtn.setAttribute('disabled', '');


const nowTime = new Date();
// console.log(nowTime);
let selectedTime;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0] <= nowTime) {
      window.alert('Please choose a date in the future');
    } 
      startBtn.removeAttribute('disabled');
      let diff = selectedDates[0] - nowTime;
    //   console.log(diff);
startBtn.addEventListener("click", onStartBtnClick)
function onStartBtnClick() {
    const interval = setInterval(() =>{
        diff -= 1000
        diffObj = convertMs(diff);
    //   console.log(diffObj);
      daysEl.textContent = diffObj.days.toString().padStart(2, '0');
      hoursEl.textContent = diffObj.hours.toString().padStart(2, '0');
      minutesEl.textContent = diffObj.minutes.toString().padStart(2, '0');
      secondsEl.textContent = diffObj.seconds.toString().padStart(2, '0');
    if (diff === 0) clearInterval(interval)},1000)
    
}
     
      
  },
};
flatpickr(input, options);

// console.log(selectedTime)

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

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
