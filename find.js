//Find returns only first element if any elements fulfill the condition and if any element does not fulfill any condition then it return undefined.
const players = [75, 65, 67, 72, 55, 59];

// const selected = players.find((player) => player > 70);
const selected = players.find((player) => player > 80);
console.log(selected);
