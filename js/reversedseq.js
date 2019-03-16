//Get the number n (n>0) to return the reversed sequence from n to 1.

//Example : n=5 >> [5,4,3,2,1]

const reverseSeq = n => {
  //create empty array
  let seq = []
  //set a counter up to n and for each counter push that number into empty array
  for(let i=1; i <= n; i++){
    seq.push(i)
  }
  //reverse the array <--answer
  return seq.reverse()
};
