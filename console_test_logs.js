// functioning import statements

const jazzChord = require('./jazz_chord_generator.js');
const jazzChordNumbers = require('./jazz_chord_generator.js');

//import { jazzChord } from "./jazz_chord_generator";
//import { jazzChordNumbers } from "./jazz_chord_generator";

// console log tests

let AbDom13 = new jazzChord('Ab', 'maj').chordExtension('dom13');
let AbDom13Numbers = new jazzChordNumbers(AbDom13).numberGenerator();

console.log(new jazzChordNumbers(AbDom13).dominant13thVoicings());
console.log(new jazzChordNumbers(AbDom13Numbers).dominant13thVoicings());


let AbMaj13 = new jazzChord('Ab', 'maj').chordExtension('13');
let AbMaj13Numbers = new jazzChordNumbers(AbMaj13).numberGenerator();

console.log(AbDom13.join(' - '));
console.log(AbMaj13.join(' - '));
console.log(AbDom13Numbers.join(' - '));
console.log(AbMaj13Numbers.join(' - '));


//console.log(new jazzChordNumbers(AbMin13).major9thVoicings());
//console.log(new jazzChordNumbers(AbMin13).minor11thVoicings());
//console.log(new jazzChordNumbers(AbMin13).major9thVoicings());


/* test for chord extensions
console.log(new jazzChord('c', 'maj').chordExtension('dom'));
console.log(new jazzChord('c', 'maj').chordExtension('dom9'));
console.log(new jazzChord('c', 'maj').chordExtension('dom11'));
console.log(new jazzChord('c', 'maj').chordExtension('dom13'));

console.log(new jazzChord('c', 'min').chordExtension('7'));
console.log(new jazzChord('c', 'min').chordExtension('9'));
console.log(new jazzChord('c', 'min').chordExtension('11'));
console.log(new jazzChord('c', 'min').chordExtension('13'));
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
console.log(new jazzChord('b', 'min').chordGenerator() 
*/