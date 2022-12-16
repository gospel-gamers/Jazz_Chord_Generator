// sharp and flat arrays

let notesArraySharp = 
[
  'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A'
];

let notesArrayFlat = 
[
  'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A'
];

// change to uppercase function
function changeToUpperCase(string) {
    return string.toUpperCase();
}

// join method for array
function joinArray(array) {
    return array.join(' - ');
}

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

// interval definitions for flavor chords from octave - +1octave

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

// object for number generator

let intervalsObject = {
    '1': 0,
    'b2': 1,
    '2': 2,
    'b3': 3,
    '3': 4,
    '4': 5,
    'b5': 6,
    '5': 7,
    'b6': 8,
    '6': 9,
    'b7': 10,
    '7': 11,
    '8': 12,
    'b9': 13,
    '9': 14,
    'b10': 15,
    '10': 16,
    '11': 17,
    '#11': 18,
    '12': 19,
    'b13': 20,
    '13': 21,
    'b14': 22,
    '14': 23,
}

// jazzChord class definition 

class jazzChord {
  constructor(tonic, chordType) {
    this.tonic = tonic;
    this.chordType = chordType;
  }

  chordGenerator() {
    // definitons of variables and arrays/strings to use upper or lowercase input
    let upperCaseTonic = changeToUpperCase(this.tonic);
    let tonicArray = Array.from(this.tonic);
    let upperTonicArray = Array.from(upperCaseTonic);
    let combinedTonicString;
    // if statement to avoid undefined result if no sharp or flat in the second index
    if (upperTonicArray[1]) {
        combinedTonicString = upperTonicArray[0] + tonicArray[1];
    } else {
        combinedTonicString = upperTonicArray[0]
    }
    let combinedTonicArray = Array.from(combinedTonicString);
    // other needed variables
    let tonicIndex = 0;
    let isSharp = false;
    let isFlat = false;
    let chordNotes = [];

    // TODO create logic for isMajor, isMinor, isDim, isAug

    let isMaj = false;
    let isMin = false;
    let isDim = false;
    let isAug = false;

    if (this.chordType === 'maj' || !this.chordType) {
        isMaj = true;
    } else if (this.chordType === 'min' || this.chordType === '-') {
        isMin = true;
    } else if (this.chordType === 'dim' || this.chordType === '°') {
        isDim = true;
    } else if (this.chordType === 'aug' || this.chordType === '+') {
        isAug = true;
    } else {
        throw new Error('Not a valid chord input type');
    }

    // determine whether to use sharps or flats
    // TODO fix this value for Gminor and Cminor...
    if (combinedTonicArray[1] === 'b' || combinedTonicArray[0] === 'F') {
        isFlat = true;
    } else {
        isSharp = true;
    }
    if (combinedTonicArray[1] === '#') {
        isFlat = false;
        isSharp = true;
    } 

    /* first approach at determining sharp or flat
    if (combinedTonicArray[1] === 'b') {
        isFlat = true;
    } else {
        isSharp = true;
    }
    */

    // generalize chord array to use

    let correctNotesArray = [];
    
    if (isFlat) {
        correctNotesArray = notesArrayFlat;
    } else {
        correctNotesArray = notesArraySharp;
    }

    // add scale notes logic based on chordType

    tonicIndex = correctNotesArray.indexOf(combinedTonicString);

    if (isMaj) {
        chordNotes.push(correctNotesArray[tonicIndex]);
        chordNotes.push(correctNotesArray[tonicIndex + majorThird]);
        chordNotes.push(correctNotesArray[tonicIndex + perfectFifth]);
    } else if (isMin) {
        chordNotes.push(correctNotesArray[tonicIndex]);
        chordNotes.push(correctNotesArray[tonicIndex + minorThird]);
        chordNotes.push(correctNotesArray[tonicIndex + perfectFifth]);
    } else if (isDim) {
        chordNotes.push(correctNotesArray[tonicIndex]);
        chordNotes.push(correctNotesArray[tonicIndex + minorThird]);
        chordNotes.push(correctNotesArray[tonicIndex + dimFifth]);
    } else if (isAug) {
        chordNotes.push(correctNotesArray[tonicIndex]);
        chordNotes.push(correctNotesArray[tonicIndex + majorThird]);
        chordNotes.push(correctNotesArray[tonicIndex + augFifth]);
    } else {
        //throw new Error('Not a valid chord input type');
    }
    /*
    // add chord extensions based on flavornotes
    if (this.flavorNote && (this.chordType === 'maj' || !this.chordType)) {
        chordNotes.push(correctNotesArray[tonicIndex + majorSeventh]);
    } 
    if (this.flavorNote === '9' && (this.chordType === 'maj' || !this.chordType)) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
    } 
    if (this.flavorNote === '11' && (this.chordType === 'maj' || !this.chordType)) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + perfect11th]);
    } 
    if (this.flavorNote === '13' && (this.chordType === 'maj' || !this.chordType)) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + perfect11th]);
        chordNotes.push(correctNotesArray[tonicIndex + maj13th]);
    } 
    if (this.flavorNote && (this.chordType === 'min' || !this.chordType)) {
        chordNotes.push(correctNotesArray[tonicIndex + dimSeventh]);
    } 
    if (this.flavorNote === '9' && (this.chordType === 'min' || !this.chordType)) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
    } 
    if (this.flavorNote === '11' && (this.chordType === 'min' || !this.chordType)) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + perfect11th]);
    } 
    if (this.flavorNote === '13' && (this.chordType === 'min' || !this.chordType)) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + perfect11th]);
        chordNotes.push(correctNotesArray[tonicIndex + maj13th]);
    }
    */
    return chordNotes;
  }

  chordExtension(flavorNote) {

    // create chordNotes array to work with
    let chordNotes = new jazzChord(this.tonic, this.chordType).chordGenerator();

    // definitons of variables and arrays/strings to use upper or lowercase input
    let upperCaseTonic = changeToUpperCase(this.tonic);
    let tonicArray = Array.from(this.tonic);
    let upperTonicArray = Array.from(upperCaseTonic);
    let combinedTonicString;

    let tonicIndex = 0;
    let isSharp = false;
    let isFlat = false;

    // if statement to avoid undefined result if no sharp or flat in the second index
    if (upperTonicArray[1]) {
        combinedTonicString = upperTonicArray[0] + tonicArray[1];
    } else {
        combinedTonicString = upperTonicArray[0]
    }

    let combinedTonicArray = Array.from(combinedTonicString);

    // logic for whether isMaj, isMin, isDom is true or false

    let isMaj = false;
    let isMin = false;
    let isDom = false;
    let domArray = Array.from(flavorNote);
    let domString = domArray[0] + domArray[1] + domArray[2];

    if ((this.chordType === 'maj' || !this.chordType) && (domString === 'dom')) {
        isDom = true;
    } else if (this.chordType === 'maj' || !this.chordType) {
        isMaj = true;
    } else if (this.chordType === 'min' || this.chordType === '-') {
        isMin = true;
    } else {
        throw new Error('Not a valid chord extension type. Use \'dom\' for dominant 7th chord extensions.');
    }

    // determine whether to use sharps or flats
    // TODO fix this value for Gminor and Cminor...

    if (combinedTonicArray[1] === 'b' || combinedTonicArray[0] === 'F' || (combinedTonicArray[1] === 'C' && isMin) || (combinedTonicArray[1] === 'G' && isMin)) {
        isFlat = true;
    } else {
        isSharp = true;
    }
    if (combinedTonicArray[1] === '#') {
        isFlat = false;
        isSharp = true;
    } 

    // generalize chord array to use

    let correctNotesArray = [];
    
    if (isFlat) {
        correctNotesArray = notesArrayFlat;
    } else {
        correctNotesArray = notesArraySharp;
    }

    // logic for adding chord extensions

    tonicIndex = correctNotesArray.indexOf(combinedTonicString);

    if (flavorNote && isMaj) {
        chordNotes.push(correctNotesArray[tonicIndex + majorSeventh]);
    } 
    if (flavorNote === '9' && isMaj) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
    } 
    if (flavorNote === '11' && isMaj) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + aug11th]);
    } 
    if (flavorNote === '13' && isMaj) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + aug11th]);
        chordNotes.push(correctNotesArray[tonicIndex + maj13th]);
    } 
    if (flavorNote && isMin) {
        chordNotes.push(correctNotesArray[tonicIndex + dimSeventh]);
    } 
    if (flavorNote === '9' && isMin) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
    } 
    if (flavorNote === '11' && isMin) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + perfect11th]);
    } 
    if (flavorNote === '13' && isMin) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + perfect11th]);
        chordNotes.push(correctNotesArray[tonicIndex + maj13th]);
    }
    // TODO add logic for if domstring === 'dom', then create logic for dominant chord extensions

    return chordNotes;
    
  }
}

class jazzChordNumbers {
    constructor(array) {
        this.array = array;
    }

    numberGenerator() {

        // create tonic and tonicIndex to work with
        let tonic = this.array[0];
        let tonicIndex = 0;

        // tonic Array creation
        let tonicArray = Array.from(tonic);

        // isSharp or isFlat variables and logic
        let isSharp = false;
        let isFlat = false;

        if (tonicArray[1] === 'b' || tonicArray[0] === 'F') {
            isFlat = true;
        } else {
            isSharp = true;
        }
        if (tonicArray[1] === '#') {
            isFlat = false;
            isSharp = true;
        } 

        // generalize chord array to use
        let correctNotesArray = [];
        
        if (isFlat) {
            correctNotesArray = notesArrayFlat;
        } else {
            correctNotesArray = notesArraySharp;
        }

        // logic for returning array with numbers
        tonicIndex = correctNotesArray.indexOf(tonic);
        let newTonicArray = correctNotesArray.slice(tonicIndex, correctNotesArray.length)

        // forEach method applied to create array with indices values
        let indexArray = [];
        this.array.forEach(element => {
            indexArray.push(newTonicArray.indexOf(element));
        });

        let indexArrayFinal = [];
        for (let i = 0; i<indexArray.length; i++) {
            if (indexArray[i] === 2 || indexArray[i] === 5 || indexArray[i] === 6 || indexArray[i] === 9) {
                indexArrayFinal.push(indexArray[i] + 12);
            } else {
                indexArrayFinal.push(indexArray[i]);
            }
        }

        // create final Numbers array
        let numbersArray = [];
        for (let i=0; i<indexArrayFinal.length; i++) {
            numbersArray.push(Object.keys(intervalsObject).find(key => intervalsObject[key] === indexArrayFinal[i]));
        }
        return numbersArray;
    }
    
    major9thVoicings() {
    }
    
    minor9thVoicings() {
    }
    
    major11thVoicings() {
    }
    
    minor11thVoicings() {
    }
    
    major13thVoicings() {
    }
    
    dominantVoicings() {
    }
}

class jazzChordNotes {
}



/* tests for jazzChordNumbers
let AbMaj13 = new jazzChord('ab', 'maj').chordExtension('13');
let AbMaj13Numbers = new jazzChordNumbers(AbMaj13).numberGenerator();
let AbMin13 = new jazzChord('ab', '-').chordExtension('13');
let AbMin13Numbers = new jazzChordNumbers(AbMin13).numberGenerator();

console.log(AbMaj13);
console.log(AbMin13);
console.log(AbMaj13Numbers);
console.log(AbMin13Numbers);
*/

/* tests for chordExtension
console.log(new jazzChord('c#', 'maj').chordExtension('7'));
console.log(new jazzChord('c#', 'maj').chordExtension('9'));
console.log(new jazzChord('c#', 'maj').chordExtension('11'));
console.log(new jazzChord('c#', 'maj').chordExtension('13'));

console.log(new jazzChord('c#', 'min').chordExtension('7'));
console.log(new jazzChord('c#', 'min').chordExtension('9'));
console.log(new jazzChord('c#', 'min').chordExtension('11'));
console.log(new jazzChord('c#', 'min').chordExtension('13'));
*/

/* tests for chordGenerator
console.log(new jazzChord('c#', 'maj').chordGenerator());
console.log(new jazzChord('c#', 'min').chordGenerator());
console.log(new jazzChord('db', 'maj').chordGenerator());
console.log(new jazzChord('db', 'min').chordGenerator());
console.log(new jazzChord('d', 'maj').chordGenerator());
console.log(new jazzChord('d', 'min').chordGenerator());
console.log(new jazzChord('d#', 'maj').chordGenerator());
console.log(new jazzChord('d#', 'min').chordGenerator());
console.log(new jazzChord('eb', 'maj').chordGenerator());
console.log(new jazzChord('eb', 'min').chordGenerator());
console.log(new jazzChord('e', 'maj').chordGenerator());
console.log(new jazzChord('e', 'min').chordGenerator());
console.log(new jazzChord('f', 'maj').chordGenerator());
console.log(new jazzChord('f', 'min').chordGenerator());
console.log(new jazzChord('f#', 'maj').chordGenerator());
console.log(new jazzChord('f#', 'min').chordGenerator());
console.log(new jazzChord('gb', 'maj').chordGenerator());
console.log(new jazzChord('gb', 'min').chordGenerator());
console.log(new jazzChord('g', 'maj').chordGenerator());
console.log(new jazzChord('g', 'min').chordGenerator());
console.log(new jazzChord('g#', 'maj').chordGenerator());
console.log(new jazzChord('g#', 'min').chordGenerator());
console.log(new jazzChord('ab', 'maj').chordGenerator());
console.log(new jazzChord('ab', 'min').chordGenerator());
console.log(new jazzChord('a', 'maj').chordGenerator());
console.log(new jazzChord('a', 'min').chordGenerator());
console.log(new jazzChord('a#', 'maj').chordGenerator());
console.log(new jazzChord('a#', 'min').chordGenerator());
console.log(new jazzChord('bb', 'maj').chordGenerator());
console.log(new jazzChord('bb', 'min').chordGenerator());
console.log(new jazzChord('b', 'maj').chordGenerator());
console.log(new jazzChord('b', 'min').chordGenerator() */