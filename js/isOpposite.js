//write a function that takes in two strings and checks if they are opposite.If they are, function must return boolean true, if they aren't return boolean false.

//opposite means: lowercase letter should be uppercase and vice versa. if strings are empty return false

//create function that takes in two param
function isOpposite(s1,s2){
  //create empty string for newly revised string to check later
let s1Rev = ""
  //loop through first string passed through
  for(let i = 0; i < s1.length; i++){
    //for each letter in the string, check to see if its lower case or upper case, and switch to the opposite case. add them to empty string
    //lower case to upper case
    if(s1.charAt(i) === s1.charAt(i).toLowerCase()){
     s1Rev += s1.charAt(i).toUpperCase()
     //upper case to lower case
    }else if(s1.charAt(i) === s1.charAt(i).toUpperCase()){
      s1Rev += s1.charAt(i).toLowerCase()
      //everything else just add to empty string
    }else{
      s1Rev += s1.charAt(i)
    }
  }
  //if empty string is still empty, then return false, if revamped s1 is the same as s2 then return true, otherwise return false.
  if(s1Rev === ""){
    return false
  }else if(s1Rev === s2){
    return true
  }else{
    return false
  }
}

//tests//
isOpposite("ab","AB") // true
isOpposite("","") // false
isOpposite("aBcde","AbCD") // false


//-----------alternative solution commented out below.-----------//
// function isOpposite(s1,s2){
//   //turn s1 into an array
//   s1 = s1.split('')
//   //create variable for empty string to edit later
//   let s1Rev = ""
//   //use forEach loop on s1 array. for each letter within the array check if lowercase or uppercase and switch to the opposite.
//   s1.forEach(letter =>{
//     if(letter === letter.toLowerCase()){
//       s1Rev += letter.toUpperCase()
//     }else if(letter === letter.toUpperCase()){
//       s1Rev += letter.toLowerCase()
//     }else{
//       s1Rev += letter
//     }
//   });
//   //if revised string is still empty, print false, print true if revised string is same as s2, otherwise print false again.
//  if(s1Rev === ""){
//     return false
//   }else if(s1Rev === s2){
//     return true
//   }else{
//     return false
//   }
// }
