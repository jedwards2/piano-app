import "./App.css";
import { useState } from "react";
import PianoDiv from "./components/PianoDiv";
import Slider from "@mui/material/Slider";

function App() {
  const [freqBand, setFreqBand] = useState(0.02);
  const [currentPartials, setCurrentPartials] = useState([]);

  return (
    <div className="app">
      <PianoDiv
        freqBand={freqBand}
        currentPartials={currentPartials}
        setCurrentPartials={setCurrentPartials}
      />
      <div>
        <p>Frequency Band Around Harmonics: {freqBand}</p>
      </div>
      <div className="slider--div">
        <Slider
          defaultValue={0.02}
          step={0.005}
          marks
          min={0.001}
          max={0.09}
          onChange={(e) => setFreqBand(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
