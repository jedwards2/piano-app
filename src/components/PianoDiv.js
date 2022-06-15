import { data } from "../freqTest";
import PianoKey from "./PianoKey";
import findNotes from "../freqTest";
import { useState } from "react";

function PianoDiv({ freqBand }) {
  const [chosenNotes, setChosenNotes] = useState([]);
  const noteClick = (note) => {
    setChosenNotes(findNotes(note.num, freqBand));
  };

  let keys = data.map((noteObj) => {
    return (
      <PianoKey
        note={noteObj}
        key={noteObj.name}
        noteClick={noteClick}
        chosenNotes={chosenNotes}
      />
    );
  });

  return <div className="piano--div">{keys}</div>;
}

export default PianoDiv;
