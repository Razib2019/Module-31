//Filter selects elements based on a condition and returns an array with the elements that fulfilled the condition. If elements does not fulfill any conditions then it returns a empty array.
const numbers = [1, 5, 6, 4, 15];
const players = [75, 65, 67, 72, 55, 59];
// const selected = players.filter((p) => p > 70);
const selected = players.filter((p) => p > 80);
console.log(selected);
