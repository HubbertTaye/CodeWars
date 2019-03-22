//The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

//Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

//Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

//Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

function tickets(peopleInLine){
  let ret = 'YES'
  let vasyaBank = {
    twentyFive: 0,
    fiddy: 0,
    hunnid: 0
  }
  peopleInLine.forEach(money => {
    if(money === 25){
      vasyaBank.twentyFive ++
    }else if(money === 50){
      vasyaBank.fiddy ++
      if(vasyaBank.twentyFive > 0){
        vasyaBank.twentyFive --
      } else {
        ret = 'NO'
      }
    }else if(money === 100 ){
      vasyaBank.hunnid ++
      if(vasyaBank.twentyFive >0 && vasyaBank.fiddy >0 ){
        vasyaBank.twentyFive --
        vasyaBank.fiddy --
      }else if(vasyaBank.twentyFive >2){
        vasyaBank.twentyFive -=3
      }else{
        ret = 'NO'
      }
    }
  })
  return ret
}

//tests
tickets([25, 25, 50]) // => YES
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
