//Simple, given a string of words, return the length of the shortest word(s).

//String will never be empty and you do not need to account for different data types.


function findShort(s){
  //split the string into an array word by word
let words = s.split(" ")
  //create a new array of words.length from the words array
let wordsLength = words.map(word => word.length)
  //find shortest word from the word length array
let shortestWord = Math.min(...wordsLength)
return shortestWord
}

//tests
findShort("bitcoin take over the world maybe who knows perhaps"), 3)
findShort("turns out random test cases are easier than writing out basic ones"), 3)
