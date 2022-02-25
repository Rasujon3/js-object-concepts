// 1. using object literal
const student = { name: "Sakib AL Hasan", job: "cricketer" };
// 2. constructor
const person = new Object();
// console.log(person);

// 3.
const human = Object.create(null);
// console.log(human);
const human2 = Object.create(student);
// console.log(human2.job);
// console.log(human2.name);

// 4. class
class People {
  // syntactical sugar
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const peop = new People("Manus", 12);
// console.log(peop);

// 5. function
function Manus(name) {
  this.name = name;
}
const man = new Manus("kader");
console.log(man);
