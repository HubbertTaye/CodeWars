//everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
//You always walk only a single block in a direction and
//you know it takes you one minute to traverse one city block
//create a function that will return true if the walk the app gives you will take you exactly ten minutes
//and return you to your starting point. Return false otherwise.



function isValidWalk(walk) {
  //insert brilliant code here
  let x = 0;
  let y = 0;
  walk.forEach(el => {
    if(el === 'n'){
      y++;
    }else if(el === 's'){
      y--;
    }else if(el === 'e'){
      x++;
    }else if(el === 'w'){
      x--;
    }
  })
  if(y===0 && x===0 && walk.length===10){
    return true
  }else{
    return false
  }
}


//tests
Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
Test.expect(!isValidWalk(['w']), 'should return false');
Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
