const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let wordsBinary = expr.match(/.{1,10}/g);
    let lettersBinary = [];
    let morseSigns = [];
    let regWords = []

    wordsBinary.forEach(i => {
        if( i === '**********' ) {
            lettersBinary.push(' ');
        } else {
            lettersBinary.push( i.match(/.{1,2}/g) );
        }
         } );

    lettersBinary.forEach(i => {

        if (Array.isArray(i)) {

            morseSigns.push( i.map( char => char === '10' ? '.' : char === '11' ? '-' : '' ).join('') ); 

        } else {
             morseSigns.push('')
        }
        }
    )

    morseSigns.forEach(i => {
        if(i === '') {
            regWords.push(' ');
        } else if ( typeof i === 'string') {
            for( let key in MORSE_TABLE) {
                if(key === i) {
                    regWords.push(MORSE_TABLE[key] )
                } 
            } 
        }
    })
   
    // console.log(wordsBinary);
    // console.log(lettersBinary);
    // console.log(morseSigns);
    return regWords.join('');
    };


module.exports = {
    decode
}

