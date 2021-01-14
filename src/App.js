import "./App.css";
import packageJson from "../package.json";

import DndSounds from "./dnd-sound/DndSounds";

function App() {
  return (
    <>
      <DndSounds />
      <footer>version: {packageJson.version}</footer>
    </>
  );
}

export default App;
