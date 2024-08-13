/**
You have an array of objects:
Const instructors= [
	{name:‘Nodi’, age:28, position:‘Senior’},
	{name:‘Akil’, age:26, position:‘Junior’},
	{name:‘Shobuj’, age:30, position:‘Senior’}
]
Your task is to display the instructor names that has the position senior using filter.
 */

/**
 *
 */
const instructors = [
  { name: "Nodi", age: 28, position: "Senior" },
  { name: "Akil", age: 26, position: "Junior" },
  { name: "Shobuj", age: 30, position: "Senior" },
];

const positionSenior = instructors.filter((instructor) => {
  if (instructor.position == "Senior") {
    console.log(instructor.name);
  }
});
