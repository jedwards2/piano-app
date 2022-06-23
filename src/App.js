import "./App.css";
import { useState } from "react";
import PianoDiv from "./components/PianoDiv";
import Slider from "@mui/material/Slider";
import FundamentalGraph from "./components/FundamentalGraph";
import findNotes from "./freqTest";

function App() {
  const [freqBand, setFreqBand] = useState(0.02);
  const [currentPartials, setCurrentPartials] = useState([]);
  const [currentFundamental, setCurrentFundamental] = useState({});

  return (
    <div className="app">
      <PianoDiv
        freqBand={freqBand}
        currentPartials={currentPartials}
        setCurrentPartials={setCurrentPartials}
        currentFundamental={currentFundamental}
        setCurrentFundamental={setCurrentFundamental}
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
          onChange={(e) => {
            setFreqBand(e.target.value);
            setCurrentPartials(findNotes(currentFundamental.num, freqBand));
          }}
        />
      </div>
      <div>{currentFundamental.name}</div>
      {currentFundamental.name ? (
        <FundamentalGraph
          currentPartials={currentPartials}
          currentFundamental={currentFundamental}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
