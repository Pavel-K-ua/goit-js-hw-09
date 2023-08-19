import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  Btn: document.querySelector('[type="submit"]'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const amountValue = Number(refs.amount.value);
  const delayValue = Number(refs.delay.value);
  const stepValue = Number(refs.step.value);

  for (let i = 1; i <= amountValue; i++) {
    let totalDelay = delayValue + stepValue * (i - 1);
    setTimeout(() => {
      createPromise(i, totalDelay);
    }, totalDelay);
  }
  refs.form.reset();
}

function createPromise(position, delay) {
  // console.log(delay);
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(Notify.success(`Fulfilled promise ${position} in ${delay}`));
    } else {
      reject(Notify.failure(`Rejected promise ${position} in ${delay}`));
    }
  });

  return promise;
  // .then(( position, delay ) => {
  //   console.log(delay);
  //   Notify.success(`Fulfilled promise ${position} in ${delay}`);
  // })
  // .catch(( position, delay ) => {
  //   Notify.failure(`Rejected promise ${position} in ${delay}`);
  // });
}
