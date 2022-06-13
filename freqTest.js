let data = [
  { name: "C8", num: "108", frq: 4186.009 },
  { name: "B7", num: "107", frq: 3951.066 },
  { name: "A#7/Bb7", num: "106", frq: 3729.31 },
  { name: "A7", num: "105", frq: 3520.0 },
  { name: "G#7/Ab7", num: "104", frq: 3322.438 },
  { name: "G7", num: "103", frq: 3135.963 },
  { name: "F#7/Eb7", num: "102", frq: 2959.955 },
  { name: "F7", num: "101", frq: 2793.826 },
  { name: "E7", num: "100", frq: 2637.02 },
  { name: "D#7/Eb7", num: "99", frq: 2489.016 },
  { name: "D7", num: "98", frq: 2349.318 },
  { name: "C#7/Db7", num: "97", frq: 2217.461 },
  { name: "C7", num: "96", frq: 2093.005 },
  { name: "B6", num: "95", frq: 1975.533 },
  { name: "A#6/Bb6", num: "94", frq: 1864.655 },
  { name: "A6", num: "93", frq: 1760.0 },
  { name: "G#6/Ab6", num: "92", frq: 1661.219 },
  { name: "G6", num: "91", frq: 1567.982 },
  { name: "F#7/Gb6", num: "90", frq: 1479.978 },
  { name: "F7", num: "89", frq: 1396.913 },
  { name: "E7", num: "88", frq: 1318.51 },
  { name: "D#6/Eb6", num: "87", frq: 1244.508 },
  { name: "D6", num: "86", frq: 1174.659 },
  { name: "C#6/Db6", num: "85", frq: 1108.731 },
  { name: "C6", num: "84", frq: 1046.502 },
  { name: "B5", num: "83", frq: 987.7666 },
  { name: "A#5/Bb5", num: "82", frq: 932.3275 },
  { name: "A5", num: "81", frq: 880.0 },
  { name: "G#5/Ab5", num: "80", frq: 830.6094 },
  { name: "G5", num: "79", frq: 783.9909 },
  { name: "F#5/Gb5", num: "78", frq: 739.9888 },
  { name: "F5", num: "77", frq: 698.4565 },
  { name: "E5", num: "76", frq: 659.2551 },
  { name: "D#5/Eb5", num: "75", frq: 622.254 },
  { name: "D5", num: "74", frq: 587.3295 },
  { name: "C#5/Db5", num: "73", frq: 554.3653 },
  { name: "C4", num: "72", frq: 523.2511 },
  { name: "B4", num: "71", frq: 493.8833 },
  { name: "A#4/Bb4", num: "70", frq: 466.1638 },
  { name: "A4", num: "69", frq: 440.0 },
  { name: "G#4/Ab4", num: "68", frq: 415.3047 },
  { name: "G4", num: "67", frq: 391.9954 },
  { name: "F#4/Gb4", num: "66", frq: 369.9944 },
  { name: "F4", num: "65", frq: 349.2282 },
  { name: "E4", num: "64", frq: 329.6276 },
  { name: "D#4/Eb4", num: "63", frq: 311.127 },
  { name: "D4", num: "62", frq: 293.6648 },
  { name: "C#4/Db4", num: "61", frq: 277.1826 },
  { name: "C4", num: "60", frq: 261.6256 },
  { name: "B3", num: "59", frq: 246.9417 },
  { name: "A#3/Bb3", num: "58", frq: 233.0819 },
  { name: "A3", num: "57", frq: 220.0 },
  { name: "G#3/Ab3", num: "56", frq: 207.6523 },
  { name: "G3", num: "55", frq: 195.9977 },
  { name: "F#3/Gb3", num: "54", frq: 184.9972 },
  { name: "F3", num: "53", frq: 174.6141 },
  { name: "E3", num: "52", frq: 164.8138 },
  { name: "D#3/Eb3", num: "51", frq: 155.5635 },
  { name: "D3", num: "50", frq: 146.8324 },
  { name: "C#3/Db3", num: "49", frq: 138.5913 },
  { name: "C3", num: "48", frq: 130.8128 },
  { name: "B2", num: "47", frq: 123.4708 },
  { name: "A#2/Bb2", num: "46", frq: 116.5409 },
  { name: "A2", num: "45", frq: 110.0 },
  { name: "G#2/Ab2", num: "44", frq: 103.8262 },
  { name: "G2", num: "43", frq: 97.99886 },
  { name: "F#2/Gb2", num: "42", frq: 92.49861 },
  { name: "F2", num: "41", frq: 87.30706 },
  { name: "E2", num: "40", frq: 82.40689 },
  { name: "D#2/Eb2", num: "39", frq: 77.78175 },
  { name: "D2", num: "38", frq: 73.41619 },
  { name: "C#2/Db2", num: "37", frq: 69.29566 },
  { name: "C2", num: "36", frq: 65.40639 },
  { name: "B1", num: "35", frq: 61.73541 },
  { name: "A#1/Bb1", num: "34", frq: 58.27047 },
  { name: "A1", num: "33", frq: 55.0 },
  { name: "G#1/Ab1", num: "32", frq: 51.91309 },
  { name: "G1", num: "31", frq: 48.99943 },
  { name: "F#1/Gb1", num: "30", frq: 46.2493 },
  { name: "F1", num: "29", frq: 43.65353 },
  { name: "E1", num: "28", frq: 41.20344 },
  { name: "D#1/Eb1", num: "27", frq: 38.89087 },
  { name: "D1", num: "26", frq: 36.7081 },
  { name: "C#1/Db1", num: "25", frq: 34.64783 },
  { name: "C1", num: "24", frq: 32.7032 },
  { name: "B0", num: "23", frq: 30.86771 },
  { name: "A#0/Bb0", num: "22", frq: 29.13524 },
  { name: "A0", num: "21", frq: 27.5 },
];

function findNotes(num) {
  let exactNotes = [];
  let closeNotes = [];

  let frq = findFrq(num);
  // let undertones = generateUndertones(frq);
  let overtones = generateOvertones(frq);
  let partials = overtones;
  // let partials = undertones.concat(overtones);
  //add to exact notes list
  partials.forEach((partial) => {
    data.forEach((noteObj) => {
      if (
        checkIfExact(noteObj.frq, partial) &&
        !exactNotes.includes(noteObj.name)
      ) {
        exactNotes.push(noteObj.name);
      }
    });
  });

  partials.forEach((partial) => {
    data.forEach((noteObj) => {
      if (
        checkIfClose(noteObj.frq, partial) &&
        !closeNotes.includes(noteObj.name)
      ) {
        closeNotes.push(noteObj.name);
      }
    });
  });

  console.log("EXACT NOTES: ", exactNotes);
  console.log(exactNotes.length);
  console.log("CLOSE NOTES: ", closeNotes);
  console.log(closeNotes.length);
}

function checkIfExact(frq, partial) {
  //Exact bounds
  const upperBound = partial * 1.01;
  const lowerBound = partial * 0.99;
  if (frq < upperBound && frq > lowerBound) {
    return true;
  } else {
    return false;
  }
}

function checkIfClose(frq, partial) {
  //Close bounds
  const upperBound = partial * 1.05;
  const lowerBound = partial * 0.95;
  if (frq < upperBound && frq > lowerBound) {
    return true;
  } else {
    return false;
  }
}

function findFrq(number) {
  let frq = "";

  //loop over data to find frequency
  let i = 0;
  while (i < data.length) {
    if (data[i].num.toString() === number) {
      frq = data[i].frq;
    }
    i += 1;
  }
  return frq;
}

function generateOvertones(frq) {
  let partials = [];
  let currentPartial = frq;
  let i = 2;

  while (currentPartial < 4200) {
    newFrq = parseFloat(frq) * i;
    newFrq = parseFloat(newFrq.toFixed(5));
    partials.push(newFrq);
    currentPartial = newFrq;
    i += 1;
  }
  return partials;
}

function generateUndertones(frq) {
  let partials = [];
  let currentPartial = frq;
  let i = 2;

  while (currentPartial > 15) {
    newFrq = parseFloat(frq) / i;
    newFrq = parseFloat(newFrq.toFixed(5));
    partials.unshift(newFrq);
    currentPartial = newFrq;
    i += 1;
  }

  return partials;
}

findNotes("21");
