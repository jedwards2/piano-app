import { data } from "../freqTest";
import PianoKey from "./PianoKey";
import findNotes from "../freqTest";

function PianoDiv({
  freqBand,
  currentPartials,
  setCurrentPartials,
  currentFundamental,
  setCurrentFundamental,
}) {
  const noteClick = (note) => {
    setCurrentFundamental(note);
    setCurrentPartials(findNotes(note.num, freqBand));
  };

  let keys = data.map((noteObj) => {
    return (
      <PianoKey
        note={noteObj}
        key={noteObj.name}
        noteClick={noteClick}
        currentPartials={currentPartials}
        currentFundamental={currentFundamental}
      />
    );
  });

  return <div className="piano--div">{keys}</div>;
}

export default PianoDiv;
