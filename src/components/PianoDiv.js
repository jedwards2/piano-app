import findNotes from "../freqTest";
import { data } from "../freqTest";
import PianoKey from "./PianoKey";

function PianoDiv() {
  let keys = data.map((noteObj) => {
    return <PianoKey note={noteObj} key={noteObj.name} />;
  });

  return <div className="piano--div">{keys}</div>;
}

export default PianoDiv;
