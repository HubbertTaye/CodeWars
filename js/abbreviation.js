// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot seperating them.

function abbrevName(name){
  let nameArray = name.split(' ')
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

//example call
abbrevName("Sam Harris")
