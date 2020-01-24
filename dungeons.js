const doc = document.getElementById("content");
let audio = undefined;

const playSound = item => {
  if (audio) {
    audio.pause();
  }

  const file =
    sounds[item].samples[
      Math.floor(Math.random() * sounds[item].samples.length)
    ];
  audio = new Audio(`sounds/${file}`);

  audio.play();
  console.log(file);
};

const renderTiles = () => {
  for (let sound in sounds) {
    const tile = document.createElement("figure");
    tile.setAttribute("class", "tile");
    tile.innerHTML = `        
            <img src="images/${sounds[sound].icon}.png" data-item="${sound}" />
            <figcaption>${sound}</figcaption>
        `;
    doc.appendChild(tile);
  }
};

document.addEventListener("click", event => {
  const item = event.target.dataset.item;

  if (item) {
    playSound(item);
  }
});

renderTiles();
