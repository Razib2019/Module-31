/**
const people=[
	{name:‘Meena’, age:20},
	{name:‘Rina’, age:15},
	{name:‘Suchorita’, age:22}
]
1). Follow above array of the objects. So, You have 3 objects as array element. Can you find out the total sum from here?
20+ 15+ 22 =57. The output will be 57
What are you thinking?  Yeah! Do it with for loop. I know you can do it.
But!! Wait !! Wait !! Do the same task using array.reduce() method
 */

/** With the help of for loop
const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];

let sum = 0;
for (let i = 0; i <= people.length - 1; i++) {
  let age = people[i].age;
  sum = sum + age;
}
console.log(sum);
 */

/** With the help of array.reduce() method
 */
const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];
const ageSum = people.reduce((previous, current) => previous + current.age, 0);
console.log(ageSum);
