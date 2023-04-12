const hours = document.querySelector('[data-hour="hour"]');
const minutes = document.querySelector('[data-hour="minute"]');
const seconds = document.querySelector('[data-hour="second"]');



function clock() {
  let data = new Date();
  let hora = data.getHours();
  let minuto = data.getMinutes();
  let segundo = data.getSeconds();
  if (hora < 10) {
    hours.innerHTML = `0${hora}`;
  } else {
    hours.innerHTML = `${hora}`;
  };
  if (minuto < 10) {
    minutes.innerHTML = `0${minuto}`;
  } else {
    minutes.innerHTML = `${minuto}`;
  };

  if (segundo < 10) {
    seconds.innerHTML = `0${segundo}`;
  } else {
    seconds.innerHTML = `${segundo}`;
  };
};
setInterval(clock, 1000);