// A long beep is represened by a dash (-) and a short beep by a dot (.). A series of long and short beeps make up a letter, and letters are separated by spaces (). Words are separated by double spaces.
//implement a decoder for the Morse alphabet

function decode(str) {
  //split string on space
  let parts = str.split(' ')
  let morseDict = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '': ' '
  }

  let translation = parts.map(part => morseDict[part])
  return translation.join('')
}
decode(".... . .-.. .-.. ---  .-- --- .-. .-.. -..")

//decode((".... . .-.. .-.. ---  .-- --- .-. .-.. -.."), "hello world")
