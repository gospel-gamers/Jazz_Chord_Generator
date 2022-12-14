//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

let notesArraySharp = 
[
  'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A'
];

let notesArrayFlat = 
[
  'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A'
];


export class Scale {
  constructor(tonic) {
    this.tonic = tonic;
  }
  
  chromatic() {
    let tonicArray = Array.from(this.tonic);
    let isSharp = false;
    let isFlat = false;
    if (tonicArray[1] === 'b' || tonicArray[0] === 'F' || tonicArray[0] === 'd' || tonicArray[0] === 'g' || tonicArray[0] === 'c' || tonicArray[0] === 'f') {
      isFlat = true;
    } else {
      isSharp = true;
    }
    if (tonicArray[1] === '#') {
      isFlat = false;
      isSharp = true;
    } 

    let startingNote;
    if (this.tonic[1]) {
      startingNote = this.tonic[0].toUpperCase() + this.tonic[1];
    } else {
      startingNote = this.tonic[0].toUpperCase();
    }

    if (isSharp) {
      let first = notesArraySharp.indexOf(startingNote);
      let result = notesArraySharp.splice(first, (first + 9));
      return result;
    } else if (isFlat) {
      let first = notesArrayFlat.indexOf(startingNote);
      let result = notesArrayFlat.splice(first, (first + 9));
      return result;
    }
    
  }

  interval(intervals) {
    // logic for determining whether to use sharps or flats
    let tonicArray = Array.from(this.tonic);
    let isSharp = false;
    let isFlat = false;
    if (tonicArray[1] === 'b' || tonicArray[0] === 'F' || tonicArray[0] === 'd' || tonicArray[0] === 'g' || tonicArray[0] === 'c' || tonicArray[0] === 'f') {
      isFlat = true;
    } else {
      isSharp = true;
    }
    if (tonicArray[1] === '#') {
      isFlat = false;
      isSharp = true;
    } 

    // building scales with interval inputs
    let intervalArray = Array.from(intervals);
    let startingNote;
    if (this.tonic[1]) {
      startingNote = this.tonic[0].toUpperCase() + this.tonic[1];
    } else {
      startingNote = this.tonic[0].toUpperCase();
    }
    let scaleArray = [startingNote];
    if (isSharp) {
      let firstNoteIndex = notesArraySharp.indexOf(startingNote);
      let counter = firstNoteIndex;
      for (let i=0; i<intervalArray.length-1; i++) {
        if (intervalArray[i] === 'm') {
          counter++;
        } else if (intervalArray[i] === 'M') {
          counter += 2;
        } else if (intervalArray[i] === 'A') {
          counter += 3;
        }
        scaleArray.push(notesArraySharp[counter]);
      }
      return scaleArray;
    } else if (isFlat) {
      let firstNoteIndex = notesArrayFlat.indexOf(startingNote);
      let counter = firstNoteIndex;
      for (let i=0; i<intervalArray.length-1; i++) {
        if (intervalArray[i] === 'm') {
          counter++;
        } else if (intervalArray[i] === 'M') {
          counter += 2;
        } else if (intervalArray[i] === 'A') {
          counter += 3;
        }
        scaleArray.push(notesArrayFlat[counter]);
      }
      return scaleArray;
    }
  }
}

// 1 console.log(new Scale('C').chromatic().join('-').join('-'));
// ? 2 too many notes at the end somehow? ... console.log(new Scale('F').chromatic().join('-'));
// 3 console.log(new Scale('C').interval('MMmMMMm').join('-'));
// 4 console.log(new Scale('G').interval('MMmMMMm').join('-'));
// 5 console.log(new Scale('F').interval('MMmMMMm').join('-'));
// 6 console.log(new Scale('f#').interval('MmMMmMM').join('-'));
// 7 correct console.log(new Scale('bb').interval('MmMMmMM').join('-'));
// 8 console.log(new Scale('d').interval('MmMMMmM').join('-'));
// 9 console.log(new Scale('Eb').interval('MMmMMmM').join('-'));
// 10 console.log(new Scale('a').interval('MMMmMMm').join('-'));
// 11 console.log(new Scale('e').interval('mMMMmMM').join('-'));
// 12 console.log(new Scale('g').interval('mMMmMMM').join('-'));
// 13 console.log(new Scale('d').interval('MmMMmAm').join('-'));
// 14 console.log(new Scale('C').interval('MmMmMmMm').join('-'));
// 15 console.log(new Scale('Db').interval('MMMMMM').join('-'));
// 16 console.log(new Scale('A').interval('MMAMA').join('-'));
// 17 console.log(new Scale('G').interval('mAMMMmm').join('-'));