function findFirstDuplicate(arr) {
  const seen = {};
  for (let element of arr) {
    if (seen[element]) return element;
    seen[element] = 1;
  }
  return -1;
}

//Set solution below:
// function findFirstDuplicate(arr) {
//   const seen = new Set();
//   for (let element of arr) {
//     if (seen.has(element)) return element;
//     seen.add(element);
//   }
//   return -1;
// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("expecting 4");
  console.log(findFirstDuplicate([1, 4, 5, 8, 9, 4]));

  console.log("expecting 2");
  console.log(findFirstDuplicate([2, 3, 5, 2, 3]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
/* 
Problem: given an array, find the first element that appears more than once. return -1 if none are found
create object to store array elements
loop through the array
if object contains element, return that element.
otherwise, add it to the object as a key with the value 1;
return -1 at the end.
*/
