
# JavaScript Destructuring, Spread Operator, Rest Parameter, Arrow Functions

## **Array Destructuring**

Array destructuring allows you to extract values from arrays and assign them to variables in a concise way. Here's an example:

const numbers = [1, 2, 3];

const [first, second, third] = numbers;

console.log(first); // 1

console.log(second); // 2

console.log(third); // 3

## **Object Destructuring**

Object destructuring allows you to extract values from objects and assign them to variables in a concise way. Here's an example:

const person = { name: "John", age: 30 };

const { name, age } = person;

console.log(name); // "John"

console.log(age); // 30

## **Spread Operator**

The spread operator allows you to spread the elements of an array or object into another array or object. Here's an example:

const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];

console.log(newNumbers); // [1, 2, 3, 4, 5]

const person = { name: "John", age: 30 };

const newPerson = { ...person, location: "USA" };

console.log(newPerson); // { name: "John", age: 30, location: "USA" }

## **Rest Parameter**

The rest parameter allows you to represent an indefinite number of arguments as an array. Here's an example:

function sum(...numbers) {

`  `return numbers.reduce((acc, cur) => acc + cur, 0);

}

console.log(sum(1, 2, 3, 4)); // 10

## **Arrow Functions**

Arrow functions are a concise way to write functions in JavaScript. Here's an example:

const add = (a, b) => a + b;

console.log(add(1, 2)); // 3

**Difference between Normal Functions and Arrow Functions**

Arrow functions and normal functions behave differently in some cases. Here are some differences:

- Arrow functions do not have their own **this** value. Instead, **this** is inherited from the enclosing lexical scope.
- Arrow functions do not have their own **arguments** object. Instead, you can use the rest parameter to represent an indefinite number of arguments as an array.
- Arrow functions cannot be used as constructors. They do not have a **prototype** property.
- Arrow functions are always anonymous.

Here's an example that illustrates these differences:

function Person(name, age) {

`  `this.name = name;

`  `this.age = age;

`  `setInterval(() => {

`    `console.log(this.name + " is " + this.age + " years old.");

`  `}, 1000);

}

const john = new Person("John", 30);
