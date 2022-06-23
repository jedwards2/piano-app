function PianoKey({ note, noteClick, currentPartials, currentFundamental }) {
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
      } ${currentPartials.includes(note) ? "chosen" : ""} ${
        note.name === currentFundamental.name ? "currentFund" : ""
      }`}
      onClick={() => noteClick(note)}
    ></div>
  );
}

export default PianoKey;
