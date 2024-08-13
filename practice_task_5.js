/**
 *You are given an array says: [33,50,79,78,90,101,30]. Now return /get all the elements which are divisible by 10 using array.filter() method.
Now do the  same task of the question 2. But do this using array.find() method. Then compare the output of question 2 and question 3.
 */
/** Using Filter and Find Method
 */
const numbers = [33, 50, 79, 78, 90, 101, 30];
const newNumbers = numbers.filter((number) => number % 10 === 0);
console.log(newNumbers);

const newNumbers2 = newNumbers.find((number) => number % 10 === 0);
console.log(newNumbers2);
