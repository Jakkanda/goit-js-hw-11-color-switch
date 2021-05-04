const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyRef = document.querySelector('body');
const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
let intervalId = null;

btnStart.addEventListener('click', onBtnStartClick);

btnStop.addEventListener('click', event => {
  clearInterval(intervalId);
  btnStart.disabled = false;
});

function onBtnStartClick() {
  intervalId = setInterval(() => {
    colorSwitch(colors);
  }, 1000);
  btnStart.disabled = true;
}

function colorSwitch(arr) {
  const index = randomIntegerFromInterval(0, arr.length - 1);
  return (bodyRef.style.backgroundColor = arr[index]);
}
