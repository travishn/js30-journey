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

const runApp = () => {
  const parent = document.querySelector('#main');

  for (let i = 0; i < keys.length; i++) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'key');
    newDiv.setAttribute('data-key', keys[i].action);

  }
};