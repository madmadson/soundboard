import SoundsMap from "./SoundsMap";

import styles from "./DndSounds.module.css";

function DndSounds() {
  let audio = undefined;
  let soundPlaying = false;

  const playRandomSound = (item) => {
    const file =
      SoundsMap[item].samples[
        Math.floor(Math.random() * SoundsMap[item].samples.length)
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

  const importAll = (allSongs) => {
    return allSongs.keys().map((name) => {
      // remove ./ before each filename
      return name.substring(2);
    });
  };

  const playAmberSoundsInLoop = () => {
    soundPlaying = true;

    const listOfSongs = importAll(
      require.context("../../public/sounds/amber", false, /\.(mp3)$/)
    );

    audio = new Audio(`sounds/amber/${listOfSongs[0]}`);

    audio.play();
    audio.volume = 0.2;
    audio.onended = () => {
      soundPlaying = false;
    };
    audio.addEventListener("loadeddata", () => {
      let volume = audio.volume;
      let duration = audio.duration;
      let src = audio.src;

      console.log(`volume: ${volume}`);
      console.log(`duration: ${duration}`);
      console.log(`src: ${src}`);
    });

    setTimeout(() => {
      audio.volume = 0.2;
      audio.pause();
    }, 1000);
  };

  const stopSound = () => {
    audio && audio.pause();
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

  const onAmberClick = () => {
    if (!soundPlaying) {
      playAmberSoundsInLoop();
    } else {
      stopSound();
    }
  };

  const listOfSounds = Object.values(SoundsMap).map((it) => (
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
      <figure key={"amber"} className={styles.tile}>
        <img
          className={styles.tileImage}
          onClick={onAmberClick}
          data-item={"amber"}
          alt={"amber"}
          src={`images/amber.jpg`}
        />
        <figcaption className={styles.tileCaption}>amber</figcaption>
      </figure>
      <audio controls></audio>
    </article>
  );
}

export default DndSounds;
