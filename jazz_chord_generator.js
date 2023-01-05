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
    return chordNotes;
  }

  chordExtension(flavorNote) {

    // create chordNotes array to work with
    let chordNotes = this.chordGenerator(); // simpler version than... let chordNotes = new jazzChord(this.tonic, this.chordType).chordGenerator();

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
    let domFlavorString = domArray.slice(3).join('');
    //console.log(domFlavorString);

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
    // major chord extension
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
    // minor chord extensions
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
    // dominant chord extensions 
    if (flavorNote && isDom) {
        chordNotes.push(correctNotesArray[tonicIndex +  dimSeventh]);
    } 
    if (domArray[3] === '9' && isDom) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
    } 
    if (domFlavorString === '11' && isDom) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + aug11th]);
    } 
    if (domFlavorString === '13' && isDom) {
        chordNotes.push(correctNotesArray[tonicIndex + maj9th]);
        chordNotes.push(correctNotesArray[tonicIndex + aug11th]);
        chordNotes.push(correctNotesArray[tonicIndex + maj13th]);
    }

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
        //let numbersArray = new jazzChordNumbers(this.array).numberGenerator();
        let numbersArray = this.array;

        // check if array contains a minor chord, hence the b3
        let minorChordIndicator = numbersArray.find(value => value === 'b3');

        if (minorChordIndicator) {
            throw new Error('a major 9th voicing cannot be built with a minor chord');
        }

        // same but now whether it is Dominant
        let dominantChordIndicator = numbersArray.find(value => value === 'b7');
        if (dominantChordIndicator) {
            throw new Error('a major 9th voicing cannot be built with a dominant chord');
        }

        // check if length of chord exceeds a 9th chord
        if (numbersArray.length !== 5) {
            throw new Error('these voicings only work with a 9th chord')
        }

        // create chord voicings
        let openMaj9thVoicing = numbersArray;
        let closedMaj9thVoicing = [].concat(numbersArray[0], numbersArray.slice(-2), numbersArray.slice(1, 3)) 
        let drop5Maj9thVoicing = [].concat(closedMaj9thVoicing[0], closedMaj9thVoicing.slice(-1), closedMaj9thVoicing.slice(1, 4));

        // return answer with string interpolation
        return `${openMaj9thVoicing.join(' - ')} --> open Maj9th    \n${closedMaj9thVoicing.join(' - ')} --> closed Maj9th    \n${drop5Maj9thVoicing.join(' - ')} --> drop5 Maj9th
        `;


    }
    
    minor9thVoicings() {
        //let numbersArray = new jazzChordNumbers(this.array).numberGenerator();
        let numbersArray = this.array;

        // check if array contains a minor chord, hence the b3
        let majorChordIndicator = numbersArray.find(value => value === '3');
        if (majorChordIndicator) {
            throw new Error('a min 9th voicing cannot be built with a major or a dominant chord');
        }
        if (numbersArray.length !== 5) {
            throw new Error('these voicings only work with a 9th chord')
        }

        // create chord voicings
        let openMin9thVoicing = numbersArray;
        let closedMin9thVoicing = [].concat(numbersArray[0], numbersArray.slice(-2), numbersArray.slice(1, 3)) 
        let drop5Min9thVoicing = [].concat(closedMin9thVoicing[0], closedMin9thVoicing.slice(-1), closedMin9thVoicing.slice(1, 4));

        // return answer with string interpolation
        return `${openMin9thVoicing.join(' - ')} --> open Min9th    \n${closedMin9thVoicing.join(' - ')} --> closed Min9th    \n${drop5Min9thVoicing.join(' - ')} --> drop5 Min9th
        `;
    }
    
    major11thVoicings() {
        //let numbersArray = new jazzChordNumbers(this.array).numberGenerator();
        let numbersArray = this.array;

        // check if array contains a minor chord, hence the b3
        let minorChordIndicator = numbersArray.find(value => value === 'b3');
        if (minorChordIndicator) {
            throw new Error('a major 11th voicing cannot be built with a minor chord');
        }

        // same but with a dominant chord
        let dominantChordIndicator = numbersArray.find(value => value === 'b7');
        if (dominantChordIndicator) {
            throw new Error('a major 11th voicing cannot be built with a dominant chord');
        }

        if (numbersArray.length !== 6) {
            throw new Error('these voicings only work with an 11th chord')
        }

        // create chord voicings
        let openMaj11thVoicing = numbersArray;
        let closedMaj11thVoicing = [].concat(numbersArray[0], numbersArray.slice(3, 5), numbersArray[1], numbersArray.slice(-1), numbersArray[2]) 
        let kennyBarronMaj11thVoicing = [].concat(closedMaj11thVoicing[0], closedMaj11thVoicing.slice(-1), closedMaj11thVoicing.slice(2, 4), closedMaj11thVoicing[1], closedMaj11thVoicing[4]);

        // return answer with string interpolation
        return `${openMaj11thVoicing.join(' - ')} --> open Maj11th    \n${closedMaj11thVoicing.join(' - ')} --> closed Maj11th    \n${kennyBarronMaj11thVoicing.join(' - ')} --> Kenny Barron Maj11th
        `;
    }
    
    minor11thVoicings() {
        //let numbersArray = new jazzChordNumbers(this.array).numberGenerator();
        let numbersArray = this.array;

        // check if array contains a minor chord, hence the b3
        let majorChordIndicator = numbersArray.find(value => value === '3');
        if (majorChordIndicator) {
            throw new Error('a minor 11th voicing cannot be built with a major chord');
        }
        if (numbersArray.length !== 6) {
            throw new Error('these voicings only work with an 11th chord')
        }

        // create chord voicings
        // TODO fix herbie hancock 7th note && add 'So What' voicing
        let openMin11thVoicing = numbersArray;
        let closedMin11thVoicing = [].concat(numbersArray[0], numbersArray.slice(3, 5), numbersArray[1], numbersArray.slice(-1), numbersArray[2]) 
        let kennyBarronMin11thVoicing = [].concat(closedMin11thVoicing[0], closedMin11thVoicing.slice(-1), closedMin11thVoicing.slice(2, 4), closedMin11thVoicing[1], closedMin11thVoicing[4]);
        let herbieHanMin11thVoicing = [].concat(kennyBarronMin11thVoicing.slice(0, 2), kennyBarronMin11thVoicing[3], kennyBarronMin11thVoicing.slice(-1), kennyBarronMin11thVoicing[4], kennyBarronMin11thVoicing[2]);

        // return answer with string interpolation
        return `${openMin11thVoicing.join(' - ')} --> open Min11th    \n${closedMin11thVoicing.join(' - ')} --> closed Min11th    \n${kennyBarronMin11thVoicing.join(' - ')} --> Kenny Barron Min11th    \n${herbieHanMin11thVoicing.join(' - ')} --> Herbie Hancock Min11th Voicing
        `;
    }
    
    major13thVoicings() {
        //let numbersArray = new jazzChordNumbers(this.array).numberGenerator();
        let numbersArray = this.array;

        // check if array contains a minor chord, hence the b3
        let minorChordIndicator = numbersArray.find(value => value === 'b3');
        if (minorChordIndicator) {
            throw new Error('a major 13jth voicing cannot be built with a minor chord');
        }
        // same but for a dominant chord
        let dominantChordIndicator = numbersArray.find(value => value === 'b7');
        if (dominantChordIndicator) {
            throw new Error('a major 13th voicing cannot be built with a dominant chord');
        }
        if (numbersArray.length !== 7) {
            throw new Error('these voicings only work with an 13th chord')
        }

        // create chord voicings
        let openMaj13thVoicing = numbersArray;
        let Maj13thNo11thVoicing = [].concat(openMaj13thVoicing.slice(0, 3), openMaj13thVoicing.slice(-1), openMaj13thVoicing.slice(3, 5), openMaj13thVoicing[1]);

        // return answer with string interpolation
        return `${openMaj13thVoicing.join(' - ')} --> open Maj13th    \n${Maj13thNo11thVoicing.join(' - ')} --> Maj13thNo11th
        `;
    }
    
    dominant13thVoicings() {
        let numbersArray = this.array;

        // check if array contains a minor chord, hence the b3
        let minorChordIndicator = numbersArray.find(value => value === 'b3');
        if (minorChordIndicator) {
            throw new Error('a dominant 13th voicing cannot be built with a minor chord');
        }
        // same but for a dominant chord
        let dominantChordIndicator = numbersArray.find(value => value === '7');
        if (dominantChordIndicator) {
            throw new Error('a dominant 13th voicing cannot be built with a major chord');
        }
        if (numbersArray.length !== 7) {
            throw new Error('these voicings only work with an 13th chord')
        }

        // create chord voicings
        let openDom13thVoicing = numbersArray;

        let Dom13thVoicing1 = [].concat(openDom13thVoicing[0], openDom13thVoicing[2], openDom13thVoicing[1], openDom13thVoicing.slice(-1), openDom13thVoicing.slice(3, 5));

        let Dom13thVoicing2 = [].concat(Dom13thVoicing1[0], Dom13thVoicing1[2], Dom13thVoicing1.slice(-2), Dom13thVoicing1[3]);

        let Dom13thVoicing3 = [].concat(Dom13thVoicing2[0], Dom13thVoicing2[2], Dom13thVoicing2[1], Dom13thVoicing2.slice(-1), Dom13thVoicing2.slice(-2, -1));

        let Dom13thVoicing4 = [].concat(Dom13thVoicing3.slice(0, 4), Dom13thVoicing3[0]);

        let upperStructureTriad = [].concat(Dom13thVoicing2.slice(0, 4), openDom13thVoicing.slice(-2));

        // return answer with string interpolation
        return `${openDom13thVoicing.join(' - ')} --> open Dom13th    \n${Dom13thVoicing1.join(' - ')} --> dom13thVoicing1    \n${Dom13thVoicing2.join(' - ')} --> dom13thVoicing2    \n${Dom13thVoicing3.join(' - ')} --> dom13thVoicing3    \n${Dom13thVoicing4.join(' - ')} --> dom13thVoicing4    \n${upperStructureTriad.join(' - ')} --> Upper Structure Triad
        `;
    }
}


// prompts for user to interact with :D
// define prompt
const prompt = require('prompt-sync')();

// prompts to determine starting note and chord type
const whatNoteQ = prompt('What note will be your tonic note? Type # for sharps and b for flats.');
const whatChordQ = prompt('Do you want a major, minor, augmented or diminished chord? Type maj or press enter for major, type min or - for minor, type aug or + for augmented and dim or ° for diminished.');

// return chords if they are augmented or diminished
if (whatChordQ === 'aug' || whatChordQ === '+' || whatChordQ === 'dim' || whatChordQ === '°') {
    return console.log(new jazzChord(whatNoteQ, whatChordQ).chordGenerator().join(' - '));
}

// prompt and logic to see if chord extensions are desired, if not then return the chord
//let wantChordExtension = false;
const wantChordExtQ = prompt('Do you want to add jazzy chord extensions to your major or minor chord? Type yes if so, and type no if not.')

if (wantChordExtQ !== 'yes') {
    return console.log(new jazzChord(whatNoteQ, whatChordQ).chordGenerator().join(' - '));
}

// logic to determine which chord extension and what voicings to use

// declare variables
let whatFlavorNoteQ;
let wantVoicings = false;
let wantNumbers = false;
let wantNotes = false;
// let w;

// logic for major / dominant chord extensions and then for minor chord extensions
if (whatChordQ === 'maj' || !whatChordQ) {
    whatFlavorNoteQ = prompt('Would you like to make your current major triad chord a major 7th, 9th, 11th or 13th chord or possibly a dominant 13th chord? Type 7, 9, 11, 13 or dom13 respectively.')
    
    // determine if voicings are wanted, if not then return the chord
    let wantVoicingsQ = prompt('Do you want additional smooth voicings with your chord extension? Type yes if so and no if not.');
    if (wantVoicingsQ === 'yes') {
        wantVoicings = true;
    } else {
        wantVoicings = false;
    }

    if (!wantVoicings) {
        return console.log(new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ).join(' - '));
    }

    // determine if notes, numbers or both are wanted
    let wantNotesOrNumbersQ = prompt('Do you want your chord voicings in notes, numbers or both? Type notes, numbers or both respectively.');
    if (wantNotesOrNumbersQ === 'notes') {
        wantNotes = true;
    } else if (wantNotesOrNumbersQ === 'numbers') {
        wantNumbers = true;
    } else {
        wantNotes = true;
        wantNumbers = true;
    } 

    // booleans to determine which chord voicings should be spit out using an object;
    let maj7thChord = false;
    let maj9thChord = false;
    let maj11thChord = false;
    let maj13thChord = false;
    let dom13thChord = false;

    // ternary operation for determining which voicings to use
    whatFlavorNoteQ === '7' ? maj7thChord = true : whatFlavorNoteQ === '9' ? maj9thChord = true : whatFlavorNoteQ === '11' ? maj11thChord = true : whatFlavorNoteQ === '13' ? maj13thChord = true : dom13thChord = true; 

    // spits out voicings with notes, numbers or both
    if (wantNotes && wantNumbers) {
        if (maj7thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log([console.log(chord), console.log(chordNumbers)]);
        } else if (maj9thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return  console.log([console.log((new jazzChordNumbers(chord).major9thVoicings())), console.log((new jazzChordNumbers(chordNumbers).major9thVoicings()))]);
        } else if (maj11thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log([console.log((new jazzChordNumbers(chord).major11thVoicings())), console.log((new jazzChordNumbers(chordNumbers).major11thVoicings()))]);
        } else if (maj13thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log([console.log((new jazzChordNumbers(chord).major13thVoicings())), console.log((new jazzChordNumbers(chordNumbers).major13thVoicings()))]);
        } else {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log([console.log((new jazzChordNumbers(chord).dominant13thVoicings())), console.log((new jazzChordNumbers(chordNumbers).dominant13thVoicings()))]);
        }

    } else if (wantNotes) {
        if (maj7thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return console.log(chord);
        } else if (maj9thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return console.log(new jazzChordNumbers(chord).major9thVoicings());
        } else if (maj11thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return console.log(new jazzChordNumbers(chord).major11thVoicings());
        } else if (maj13thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return console.log(new jazzChordNumbers(chord).major13thVoicings());
        } else {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return console.log(new jazzChordNumbers(chord).dominant13thVoicings());
        }
    } else if (wantNumbers) {
        if (maj7thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return new jazzChordNumbers(chord).numberGenerator();
        } else if (maj9thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log(new jazzChordNumbers(chordNumbers).major9thVoicings());
        } else if (maj11thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log(new jazzChordNumbers(chordNumbers).major11thVoicings());
        } else if (maj13thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log(new jazzChordNumbers(chordNumbers).major13thVoicings());
        } else {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log(new jazzChordNumbers(chordNumbers).dominant13thVoicings());
        }
    }

} else if (whatChordQ === 'min' || whatChordQ === '-') {
    whatFlavorNoteQ = prompt('Would you like to make your minor chord triad a minor 7th, 9th or 11th chord? Type 7, 9, or 11 respectively.')
    
    // determine if voicings are wanted, if not then return the chord
    let wantVoicingsQ = prompt('Do you want additional smooth voicings along with your chord extension? Type yes if so and no if not.');
    if (wantVoicingsQ === 'yes') {
        wantVoicings = true;
    } else {
        wantVoicings = false;
    }

    if (!wantVoicings) {
        return console.log(new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ).join(' - '));
    }

    // determine if notes, numbers or both are wanted
    let wantNotesOrNumbersQ = prompt('Do you want your chord voicings in notes, numbers or both? Type notes, numbers or both respectively.');
    if (wantNotesOrNumbersQ === 'notes') {
        wantNotes = true;
    } else if (wantNotesOrNumbersQ === 'numbers') {
        wantNumbers = true;
    } else {
        wantNotes = true;
        wantNumbers = true;
    }

    // booleans to determine which chord voicings should be spit out using an object;
    let min7thChord = false;
    let min9thChord = false;
    let min11thChord = false;
    //let min13thChord = false;

    // logic for determining which voicings to use
    // TODO fix herbie hancock min11th setting

    whatFlavorNoteQ === '7' ? min7thChord = true : whatFlavorNoteQ === '9' ? min9thChord = true : min11thChord = true; 
    // spits out voicings with notes, numbers or both
    if (wantNotes && wantNumbers) {
        if (min7thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log([console.log(chord), console.log(chordNumbers)]);
        } else if (min9thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return  console.log([console.log((new jazzChordNumbers(chord).minor9thVoicings())), console.log((new jazzChordNumbers(chordNumbers).minor9thVoicings()))]);
        } else if (min11thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log([console.log((new jazzChordNumbers(chord).minor11thVoicings())), console.log((new jazzChordNumbers(chordNumbers).minor11thVoicings()))]);
        } 

    } else if (wantNotes) {
        if (min7thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return console.log(chord);
        } else if (min9thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return console.log(new jazzChordNumbers(chord).minor9thVoicings());
        } else if (min11thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return console.log(new jazzChordNumbers(chord).minor11thVoicings());
        } else {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return console.log(new jazzChordNumbers(chord).minor11thVoicings());
        }
    } else if (wantNumbers) {
        if (min7thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            return new jazzChordNumbers(chord).numberGenerator();
        } else if (min9thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log(new jazzChordNumbers(chordNumbers).minor9thVoicings());
        } else if (min11thChord) {
            let chord = new jazzChord(whatNoteQ, whatChordQ).chordExtension(whatFlavorNoteQ);
            let chordNumbers = new jazzChordNumbers(chord).numberGenerator();
            return console.log(new jazzChordNumbers(chordNumbers).minor11thVoicings());
        }
    } 

} 

// export statements
module.exports = {
    jazzChord,
    jazzChordNumbers
}
//export { jazzChord };
//export { jazzChordNumbers };