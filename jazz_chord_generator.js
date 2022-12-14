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

// interval definitions from 1-octave:

const minorSecond = 1; 
const majorSecond = 2;
const minorThird = 3;
const majorThird = 4;
const perfectFourth = majorSecond + minorThird;
const augFourth = minorThird + minorThird;
const dimFifth = minorThird + minorThird;
const perfectFifth = majorThird + minorThird;
const augFifth = majorThird + majorThird;
const dimSixth = majorThird + majorThird;
const majorSixth = perfectFourth + majorThird;
const augSixth = perfectFifth + minorThird;
const dimSeventh = perfectFifth + minorThird;
const majorSeventh = perfectFifth + majorThird;
const octave = majorSixth + minorThird;

// interval definitions for flavor chords

const dim9th = octave + minorSecond; 
const maj9th = octave + majorSecond;
const dim10th = octave + minorThird;
const maj10th = octave + majorThird;
const perfect11th = octave + majorSecond + minorThird;
const aug11th = octave + minorThird + minorThird;
const dim12th = octave + minorThird + minorThird;
const perfect12th = octave + majorThird + minorThird;
const aug12th = octave + majorThird + majorThird;
const dim13th = octave + majorThird + majorThird;
const maj13th = octave + perfectFourth + majorThird;
const aug13th = octave + perfectFifth + minorThird;
const dim14th = octave + perfectFifth + minorThird;
const maj14th = octave + perfectFifth + majorThird;

// jazzChord class definition 

class jazzChord {
  constructor(tonic, chordType, flavorNote) {
    this.tonic = tonic;
    this.chordType = chordType;
    this.flavorNote = flavorNote;
  }
  
  noteGenerator() {
    let tonicArray = Array.from(this.tonic);
    let tonicIndex = 0;
    let isSharp = false;
    let isFlat = false;
    let chordNotes = [];

    // determine whether to use sharps or flats

    if (tonicArray[1] === 'b') {
        isFlat = true;
    } else {
        isSharp = true;
    }

    // generalize chord array to use

    let correctNotesArray = [];
    
    if (isFlat) {
        correctNotesArray = notesArrayFlat;
    } else {
        correctNotesArray = notesArraySharp;
    }

    // add scale notes logic based on chordType

    tonicIndex = correctNotesArray.indexOf(this.tonic);
    

    if (this.chordType === 'maj' || !this.chordType) {
        chordNotes.push(correctNotesArray[tonicIndex]);
        chordNotes.push(correctNotesArray[tonicIndex + majorThird]);
        chordNotes.push(correctNotesArray[tonicIndex + perfectFifth]);
    } else if (this.chordType === 'min' || this.chordType === '-') {
        chordNotes.push(correctNotesArray[tonicIndex]);
        chordNotes.push(correctNotesArray[tonicIndex + minorThird]);
        chordNotes.push(correctNotesArray[tonicIndex + perfectFifth]);
    } else if (this.chordType === 'dim' || this.chordType === '°') {
        chordNotes.push(correctNotesArray[tonicIndex]);
        chordNotes.push(correctNotesArray[tonicIndex + minorThird]);
        chordNotes.push(correctNotesArray[tonicIndex + dimFifth]);
    } else if (this.chordType === 'aug' || this.chordType === '+') {
        chordNotes.push(correctNotesArray[tonicIndex]);
        chordNotes.push(correctNotesArray[tonicIndex + majorThird]);
        chordNotes.push(correctNotesArray[tonicIndex + augFifth]);
    } else {
        throw new Error('Not a valid chord input type');
    }

    // add spiceNotes based on flavorNote

    if (this.flavorNote && (this.chordType === 'maj' || !this.chordType)) {
        chordNotes.push(correctNotesArray[tonicIndex + majorSeventh]);
    } else if (this.flavorNote === '9' && (this.chordType === 'maj' || !this.chordType)) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
    } else if (this.flavorNote === '11' && (this.chordType === 'maj' || !this.chordType)) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + perfect11th]);
    } else if (this.flavorNote === '13' && (this.chordType === 'maj' || !this.chordType)) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + perfect11th]);
        chordNotes.push(correctNotesArray[tonicIndex + maj13th]);
    } else if (this.flavorNote && (this.chordType === 'min' || !this.chordType)) {
        chordNotes.push(correctNotesArray[tonicIndex + dimSeventh]);
    } else if (this.flavorNote === '9' && (this.chordType === 'min' || !this.chordType)) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
    } else if (this.flavorNote === '11' && (this.chordType === 'min' || !this.chordType)) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + perfect11th]);
    } else if (this.flavorNote === '13' && (this.chordType === 'min' || !this.chordType)) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + perfect11th]);
        chordNotes.push(correctNotesArray[tonicIndex + maj13th]);
    }

    return chordNotes;
  }

  spiceNotes() {
    // add note add-ons to chordsNotes array
    //let spiceNoteArray = new jazzChord(this.tonic, this.chordType).noteGenerator();
    //console.log(spiceNoteArray);
    /*
    let spiceNoteArray = [];

    if (this.flavorNote && (this.chordType === 'maj' || !this.chordType)) {
        this.spiceNoteArray.push(correctNotesArray[tonicIndex + majorSeventh]);
    } else if (this.flavorNote === '9' && (this.chordType === 'maj' || !this.chordType)) {
        this.spiceNoteArray.push(correctNotesArray[tonicIndex + maj9th]);
    } else if (this.flavorNote === '11' && (this.chordType === 'maj' || !this.chordType)) {
        this.spiceNoteArray.push(correctNotesArray[tonicIndex + maj9th]);
        this.spiceNoteArray.push(correctNotesArray[tonicIndex + perfect11th]);
    } else if (this.flavorNote === '13' && (this.chordType === 'maj' || !this.chordType)) {
        this.spiceNoteArray.push(correctNotesArray[tonicIndex + maj9th]);
        this.spiceNoteArray.push(correctNotesArray[tonicIndex + perfect11th]);
        this.spiceNoteArray.push(correctNotesArray[tonicIndex + maj13th]);
    } else if (this.flavorNote && (this.chordType === 'min' || !this.chordType)) {
        this.spiceNoteArray.push(correctNotesArray[tonicIndex + dimSeventh]);
    } else if (this.flavorNote === '9' && (this.chordType === 'min' || !this.chordType)) {
        this.spiceNoteArray.push(correctNotesArray[tonicIndex + maj9th]);
    } else if (this.flavorNote === '11' && (this.chordType === 'min' || !this.chordType)) {
        this.spiceNoteArray.push(correctNotesArray[tonicIndex + maj9th]);
        this.spiceNoteArray.push(correctNotesArray[tonicIndex + perfect11th]);
    } else if (this.flavorNote === '13' && (this.chordType === 'min' || !this.chordType)) {
        this.spiceNoteArray.push(correctNotesArray[tonicIndex + maj9th]);
        this.spiceNoteArray.push(correctNotesArray[tonicIndex + perfect11th]);
        this.spiceNoteArray.push(correctNotesArray[tonicIndex + maj13th]);
    } */
    
  }

  numberGenerator() {
  }

  firstInversion() {
  }

  secondInversion() {
  }

  thirdInversion() {

  }
}

let cChordVariations = new jazzChord('C', 'maj', '7');
console.log(cChordVariations.noteGenerator());
console.log(cChordVariations.spiceNotes());