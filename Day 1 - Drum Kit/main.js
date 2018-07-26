const keys = [
  { name: "A", action: "clap", sound: "./sounds/clap.wav", keycode: 65 },
  { name: "S", action: "hihat", sound: "./sounds/hihat.wav", keycode: 83 },
  { name: "D", action: "kick", sound: "./sounds/kick.wav", keycode: 68 },
  { name: "F", action: "openhat", sound: "./sounds/openhat.wav", keycode: 70 },
  { name: "G", action: "boom", sound: "./sounds/boom.wav", keycode: 71 },
  { name: "H", action: "ride", sound: "./sounds/ride.wav", keycode: 72 },
  { name: "J", action: "snare", sound: "./sounds/snare.wav", keycode: 74 },
  { name: "K", action: "tom", sound: "./sounds/tom.wav", keycode: 75 },
  { name: "L", action: "tink", sound: "./sounds/tink.wav", keycode: 76 }
];

const handleKeyPress = (e) => {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const selectedKey = document.querySelector(`div[data-key='${e.keyCode}']`);
  if (!audio) return; //if no associated audio element, return function early
  audio.currentTime = 0; // allows multiple presses by rewinding sound to start
  audio.play();
  selectedKey.classList.add('playing');
};

const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return; //skips if it isnt a transform => just choosing longest transition
  this.classList.remove('playing'); //this refers to newDiv because addEventListener was called and newDiv was called against it
};

const runApp = () => {
  const parent = document.querySelector('#main');

  for (let i = 0; i < keys.length; i++) {
    const newDiv = document.createElement('div');
    newDiv.className = 'key';
    newDiv.setAttribute('data-key', keys[i].keycode);

    const newKey = document.createElement('kbd');
    newKey.innerHTML = keys[i].name;

    const newSpan = document.createElement('span');
    newSpan.innerHTML = keys[i].action;
    newSpan.className = 'sound';

    const audioElement = document.createElement('audio');
    audioElement.setAttribute('data-key', keys[i].keycode);
    audioElement.setAttribute('src', keys[i].sound);

    newDiv.appendChild(newKey);
    newDiv.appendChild(newSpan);
    newDiv.appendChild(audioElement);

    parent.appendChild(newDiv);

    newDiv.addEventListener('transitionend', (e) => removeTransition(e));
  }

  document.addEventListener('keydown', (e) => handleKeyPress(e));
};