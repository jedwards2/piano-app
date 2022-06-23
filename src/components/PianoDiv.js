import { data } from "../freqTest";
import PianoKey from "./PianoKey";
import findNotes from "../freqTest";

function PianoDiv({ freqBand, currentPartials, setCurrentPartials }) {
  const noteClick = (note) => {
    setCurrentPartials(findNotes(note.num, freqBand));
  };

  let keys = data.map((noteObj) => {
    return (
      <PianoKey
        note={noteObj}
        key={noteObj.name}
        noteClick={noteClick}
        chosenNotes={currentPartials}
      />
    );
  });

  return <div className="piano--div">{keys}</div>;
}

export default PianoDiv;
