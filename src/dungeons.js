const doc = document.getElementById("content");
let audio = undefined;
let soundPlaying = false;

const playRandomSound = item => {

  const file =
    sounds[item].samples[
      Math.floor(Math.random() * sounds[item].samples.length)
    ];
  audio = new Audio(`sounds/${file}`);

  audio.play();
  soundPlaying = true;
  console.log(file);
};

const stopSound = () =>  {

    audio.pause();
    soundPlaying = false;
    console.log('audio stoped');
}

const renderTiles = () => {
  for (let sound in sounds) {
    const tile = document.createElement("figure");
    tile.setAttribute("class", "tile");
    tile.innerHTML = `        
            <img src="src/images/${sounds[sound].icon}.png" data-item="${sound}" />
            <figcaption>${sound}</figcaption>
        `;
    doc.appendChild(tile);
  }
};

document.addEventListener("click", event => {
  const item = event.target.dataset.item;

  if (item && !soundPlaying) {
    playRandomSound(item);
  } else {
    stopSound()
  }
});

renderTiles();
