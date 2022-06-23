function PianoKey({ note, noteClick, chosenNotes, currentFundamental }) {
  let offsetNote =
    (note.name.includes("D") && !note.name.includes("/")) ||
    (note.name.includes("E") && !note.name.includes("/")) ||
    (note.name.includes("G") && !note.name.includes("/")) ||
    (note.name.includes("A") && !note.name.includes("/")) ||
    (note.name.includes("B") && !note.name.includes("/"))
      ? true
      : false;

  return (
    <div
      className={`${note.name.includes("/") ? "black" : "white"} ${
        offsetNote ? "offset" : ""
      } ${chosenNotes.includes(note.name) ? "chosen" : ""} ${
        note.name === currentFundamental ? "currentFund" : ""
      }`}
      onClick={() => noteClick(note)}
    ></div>
  );
}

export default PianoKey;
