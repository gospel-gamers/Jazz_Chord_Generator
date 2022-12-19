# Jazz_Chord_Generator
 idea:

 have input like --> jazzChord('A#', '+', [7, b9, 13]) or 'A#+7b913'
'' --> maj
- --> min
° --> dim 
+ --> aug


 that outputs --> all the notes and numbers as well
 --> allow for 1st, 2nd and 3rd inversions

 separte flavorNotes into separate class method...

**9th voicings:**
***Major voicings:***
- open position voicing:
1, 3, 5, 7, 9

***closed position***
places root, 7 and 9 one octave lower ... how to implement this?:
1, 7, 9, 3+oct/10, 5+oct/12
1, 7, 9, 3, 5

***drop fifth inversion:***
1, 5, 7, 9, 3/10  

***Minor voicings:***
open voicing:
1, b3, 5, b7, 9

***closed voicing:***
1, b7, 9, b3+oct/b10, 5+oct/12

***drop fifth inversion:***
1, 5, b7, 9, b3/b10 
 
 **11th voicings:**
 **Major Voicings:**
 ***open voicing***
 1, 3, 5, 7, 9, #11
 almost always has #11 on major chords to avoid dissonance

 ***closed voicing***
1, 7, 9, 3+oct/10, #11, 5
1, 7, 9, 3, #11, 5

***Kenny Barron maj #11th voicing:***
1, 5, 9, 3, 7, #11
1, 5, 9, 3+oct/10, 7+oct, #11+oct

**Minor 11th Voicing**
***open voicing***
1, b3, 5, b7, 9, 11
for min 11th voicing, the natural 11th is used 

 ***Kenny Barron min voicing:***
 1, 5, 9, b3, b7, 11
 1, 5, 9, b3+oct/b10, b7+oct, 11+oct

Add this Voicing!!
***So What Voicing***
1, 4, b7, b3, 5
1, 4, b7, b3+oct/b10, 5+oct/12

Add the natural 7 instead of b7!!
***Herbie Hancock voicing:***
1, 5, b3, 11, 7, 9
1, 5, b3+oct/b10, 11, 7+oct, 9+oct

**13th voicings:**
***Major voicings***
**root / open voicing:**
1, 3, 5, 7, 9, 11, 13
**common voicing (No 11th):**
1, 3, 5, 13, 7, 9, 3
1, 3, 5, 6/13 , 7, 9, 3/10, 

**Minor voicings:**
not very common... due to dissonance


**Dominant Chord Voicings:**
in General 1, 3, 5, b7 ... etc
***root position:***
1, 3, 5, b7, 9, #11, 13

***nice colorful inversion 1:***
1, 5, 3/10, 6+oct/13, b7+oct, 9+oct
1, 5, 3, 13, b7, 9

***nice colorful inversion 2:***
1, 3, b7, 9, 13

**nice colorful inversion 3:***
1, b7, 3/10, 6/13, 9+oct
1, b7, 3, 13, 9

***nice colorful inversion 4:***
1, b7, 3/10, 6/13, 8+oct
1, b7, 3, 13, 8

***nice colorful inversion 5 / "Upper Structure Triad":***
1, 3, b7, 9, #11, 13