//  O B J E C T  ---  ///////////////

// let study = 'university';

// let person = {
//   firstName: 'Sultonqul',
//   'last-name': 'Nortoyloqov',
//   fullName: function () {
//     return 'Sultonqul Nortoyloqov';
//   },
//   age: 30,
//   subjects: ['math', 'physics', 'english'],
//   isMarried: true,
//   isDiplom: null,
//   test: undefined,
//   2019: 'Enter to the university',
//   2014: 'Olympiads first position',
//   university: {
//     name: 'AMITY',
//     GPA: 4.72,
//   },
//   symbol: Symbol(),
// };

// console.log(person);

// ACCESSING ---- //////////////////

// console.log(person.firstName);
// console.log(person['lastName']);
// console.log(person.fullName());
// console.log(person['2019']);
// console.log(person.university);
// console.log(person.university.GPA);
// console.log(person.subjects[1]);
// console.log(person['last-name']);

// console.log(person['university']);
// console.log(person[study]);

// MODIFYING --- ////////////////
// person.isDiplom = 'Bachelor';
// person['age'] = 31;
// console.log(person.isDiplom);
// console.log(person['age']);

//  ADDING --- ////////////////////
// person.technology = 'ReactJs';
// person['2022'] = 'University graduation';
// console.log(person);

// DELETING ----//////////////////
// delete person.technology;
// delete person['2022'];
// console.log(person);

// PROPERTY SHORTHAND ----////////////////
// function createMachine(name, status) {
//   return {
//     name,
//     status,
//   };
// }
// console.log(createMachine('Gentra', "Yo'q"));

// OBJECT METHOD ///////////////
// let person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greet: function () {
//     console.log('Hello, World!');
//   },
// };

// person.greet();

// METHOD SHORTHAND --- ////////////////////
// let person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greet() {
//     console.log('Hello, World!');
//   },
// };

// person.greet();

// THIS KEYWORD ---/////////////////////
// let person = {
//   firstName: 'Sultonqul',
//   lastName: 'Programmer',
//   greet() {
//     console.log(`Hello, ${this.firstName}!`);
//   },
//   getFullName() {
//     return this.firstName + ' ' + this.lastName;
//   },
// };

// console.log(person.getFullName());
// person.greet();

// IN KEYWORD ---////////////////
// const car = { make: 'Honda', model: 'Accord', year: 1998 };

// let hasMake = 'make' in car

// console.log(hasMake); // true

// OPTIONAL CHAINING   ---- ///////////////
// const adventurer = {
//   name: 'Alice',
//   cat: {
//     name: 'Dinah',
//   },
// };

// const dogName = adventurer.dog?.name;
// console.log(dogName); // undefined
// console.log('Tugadi');

// OBJECT DESTRUCTURING  --- /////////////////

// const obj = { a: 1, b: 2 };
// const { a, b: d } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
// console.log(a, d);

// const obj = { a: 1, b: { c: 2 } };
// const {
//   a,
//   b: { c: d  },
// } = obj;
// console.log(a, d);
// // Two variables are bound: `a` and `d`

// let { pr1: var1, pr2: var2, pr3, pr4: { pr41: var41, pr42: var42 } } = obj;

// SPREAD OPERATOR  ---/////////////////////
// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };

// let obj = { ...obj1, ...obj2 };
// console.log(obj);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr = [...arr1, ...arr2];
// console.log(arr);

// STACK & HEAP MEMORY
// const age = 32;
// age = 33;
// console.log(age);

// const person = {
//   name: 'John Doe',
//   age: 32,
// };

// person.age = 33;

// person = {
//   firstName: 'Jane',
//   lastName: 'Doe',
//   age: 30,
// };
// console.log(person);

// ITERATION  --- ////////////////
// const object = { a: 1, b: 2, c: 3 };

// for (let i in object) {
//   console.log(`${i}: ${object[i]}`);
// }

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"
