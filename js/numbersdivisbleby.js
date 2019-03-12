//Complete the function which takes two arguments and returns all numbers which are divisible by given divisor. First argument is an array of numbers and the second is the divisor

//pass through array and divisor in function
function divisibleBy(numbers, divisor){
  //create an empty array for answers
  let answers = [];
  //loop through numbers array for each array item
  numbers.forEach(number =>{
    //if a number divided by the divisor has a remainder of 0 then push that into answer array
    if(number % divisor === 0){
      answers.push(number)
    }
  })
  //return answer array
  return answers
}

//test
divisibleBy([1, 2, 3, 4, 5, 6], 2)
