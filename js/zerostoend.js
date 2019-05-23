//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
const moveZeros = function (arr) {
    // have two arrays, one for zeros one without
    let zeros = [], all = [];
    //move all zeros to one array, non zeros to the other
    arr.forEach(num => {
        if (num === 0) {
            zeros.push(num);
        } else {
            all.push(num);
        }
    });
    //combine arrays and return the combination
    return all.concat(zeros);
};

//test code
Test.assertEquals(
    JSON.stringify(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])),
    JSON.stringify([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
);

//shorter way (study it)
//var moveZeros = function (arr) {
//    return arr.filter(function (x) { return x !== 0 }).concat(arr.filter(function (x) { return x === 0; }));
//}