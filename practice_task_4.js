/**
 *You have an odd array(array with odd numbers). [1,3,5,7,9]. Now convert this array into an even array (array with even numbers).[2,4,6,8,10]. Do this using for loop and array.map() method. Hints:add one to any odd number and it will be become an even number?
 */

/**Using for of
const numbers = [1, 3, 5, 7, 9];

let evenNumbers = [];
for (const number of numbers) {
  let evenNumber = number + 1;
  evenNumbers.push(evenNumber);
}
console.log(evenNumbers);
 */

/**Using for loop
const numbers = [1, 3, 5, 7, 9];
let evenNumbers = [];
for (let i = 0; i <= numbers.length - 1; i++) {
  let number = numbers[i];
  const evenNumber = number + 1;
  evenNumbers.push(evenNumber);
}
console.log(evenNumbers);
 */

/** Using array.map()
 */
const numbers = [1, 3, 5, 7, 9];
const evenNumbers = numbers.map((number) => number + 1);
console.log(evenNumbers);
