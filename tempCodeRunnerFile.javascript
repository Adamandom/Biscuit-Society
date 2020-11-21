let array = [
    0, 0.2, 4.3,  2.4,  7.2, 5.4,
  1.7,   0, 6.3,  9.5, 10.4, 3.2,
  1.1, 2.4,   0,  2.6,    0, 9.8,
  1.1,   3, 4.1, 11.9,  0.9, 1.3,
  5.4, 5.9
]

console.log(Math.max(...array));
let mostCommonLetter = "V";

let clonedArray = array.filter(function(letter, mostCommonLetter){
    return letter !== array[(mostCommonLetter.charCodeAt(0)-65)];
  });

console.log(Math.max(...clonedArray));

100.10000000000001