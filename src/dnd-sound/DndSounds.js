import sounds from "../sounds";

import styles from "./DndSounds.module.css";

function DndSounds() {
  let audio = undefined;
  let soundPlaying = false;

  const playRandomSound = (item) => {
    const file =
      sounds[item].samples[
        Math.floor(Math.random() * sounds[item].samples.length)
      ];
    audio = new Audio(`sounds/${file}`);

    audio.play();

    audio.onended = () => {
      console.log("audio finsihed");
      soundPlaying = false;
    };

    soundPlaying = true;
    console.log(file);
  };

  const stopSound = () => {
    audio.pause();
    soundPlaying = false;
    console.log("audio stoped");
  };

  const onFigureclick = (e) => {
    const clickedSound = e.target.dataset.item;
    if (clickedSound && !soundPlaying) {
      playRandomSound(clickedSound);
    } else {
      stopSound();
    }
  };

  const listOfSounds = Object.values(sounds).map((it) => (
    <figure key={it.icon} className={styles.tile}>
      <img
        className={styles.tileImage}
        onClick={onFigureclick}
        data-item={it.icon}
        alt={it.icon}
        src={`images/${it.icon}.png`}
      />
      <figcaption className={styles.tileCaption}>{it.icon}</figcaption>
    </figure>
  ));

  return (
    <article
      className={styles.contentWrapper}
      data-testid="content"
      id="content"
    >
      {listOfSounds}
    </article>
  );
}

export default DndSounds;
