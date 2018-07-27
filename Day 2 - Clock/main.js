const tick = () => {
  const currentTime = new Date();
  const secondsDegree = (currentTime.getSeconds() / 60 * 360);
  const minutesDegree = (currentTime.getMinutes() * 6) + (currentTime.getSeconds() / 60);
  const hoursDegree = (currentTime.getHours() * 30) + (currentTime.getMinutes() / 60);

  document.querySelector('.sec-hand').
    style.transform = `rotate(${secondsDegree}deg)`;

  document.querySelector('.min-hand').
    style.transform = `rotate(${minutesDegree}deg)`;

  document.querySelector('.hr-hand').
    style.transform = `rotate(${hoursDegree}deg)`;
};

window.setInterval(tick, 1000);
