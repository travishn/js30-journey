const tick = () => {
  const currentTime = new Date();
  const secondsDegree = (currentTime.getSeconds() / 60 * 360);
  document.querySelector('.sec-hand').style.transform = `rotate(${secondsDegree}deg)`;
};

window.setInterval(tick, 1000);
