# Closure
## At the end of the session , you will be able to : 
1. Understand the concept of closures and how they work in JavaScript.
2. Explain how closures enable functions to access variables from their surrounding lexical scope, even after the outer function has returned.
3. Understand the behavior of the "this" keyword in JavaScript and how it is determined at runtime.
4. Explain how the "call", "apply", and "bind" methods can be used to set the "this" value for a function and to pass arguments to it.
5. Understand how the "export" and "import" statements are used to create and use modules in JavaScript.
6. Explain how the module scope works in JavaScript, including how it differs from the global and function scopes.
7. Understand how to use the "export" keyword to make functions, variables, and objects available for use in other modules.
8. Explain how to use the "import" keyword to import functions, variables, and objects from other modules.

JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. If inner function access the variables of outer function then it is called closure.

```js
function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    return count;
  }

  return innerFunction;
}
const innerFunc = outerFunction();

console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());
```

```sh
1
2
3
```

Let us see some more example of inner functions

```js
function outerFunction() {
  let count = 0;
  function plusOne() {
    count++;
    return count;
  }
  function minusOne() {
    count--;
    return count;
  }

  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
  };
}
const innerFuncs = outerFunction();

console.log(innerFuncs.plusOne);
console.log(innerFuncs.minusOne);
```

```sh
1
0
```
# this:

 - this refers to the object that a function is a method of.
The value of this is determined at runtime, and depends on how the function is called.
When a function is called as a method of an object, this refers to the object itself.
When a function is called without an explicit context (e.g. as a standalone function), this refers to the global object (in non-strict mode) or undefined (in strict mode).
The value of this can be explicitly set using the call, apply, or bind methods.

example 
```js
const person = {
  name: "John",
  age: 30,
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

person.sayHello(); // output: "Hello, my name is John and I am 30 years old."

```

# Call, Apply, Bind:

- call and apply are methods that can be used to explicitly set the value of this when calling a function.
call takes an object as its first argument, and any additional arguments are passed to the function as separate arguments.
apply takes an object as its first argument, and an array of arguments as its second argument.
bind is a method that returns a new function with this set to a specific value.
bind takes an object as its first argument, and any additional arguments are bound to the function and cannot be overridden when the function is called.

```js
const person1 = {
  name: "John",
  age: 30,
  sayHello(city) {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I live in ${city}.`);
  }
}

const person2 = {
  name: "Jane",
  age: 25
}

person1.sayHello.call(person2, "New York"); // output: "Hello, my name is Jane and I am 25 years old. I live in New York."

person1.sayHello.apply(person2, ["New York"]); // output: "Hello, my name is Jane and I am 25 years old. I live in New York."

const sayHelloPerson2 = person1.sayHello.bind(person2, "New York");
sayHelloPerson2(); // output: "Hello, my name is Jane and I am 25 years old. I live in New York."
```
In this example, call and apply are used to explicitly set this to person2 when calling sayHello on person1. bind is used to create a new function sayHelloPerson2 that has this set to person2 and the city argument bound to "New York".

# Module Scope: Export and Import:

-  JavaScript modules are a way to organize code into separate files, with each file exporting the parts of the code that are needed by other files.
Exported values are defined using the export keyword, and can be either named exports (exporting specific variables or functions) or default exports (exporting a single value as the default export).
Imported values are defined using the import keyword, and can be either named imports (importing specific variables or functions) or default imports (importing the default export of a module).
Imported values are accessed using dot notation (for named imports) or by assigning them to a variable (for default imports).
Module loading and execution is handled by the JavaScript runtime, and modules are only executed once, even if they are imported by multiple other modules.

example 

```js
// module1.js
const foo = () => console.log("foo");

export default foo;

// module2.js
const bar = () => console.log("bar");

export { bar };

// app.js
import foo from "./module1.js";
import { bar } from "./module2.js";

foo(); // output: "foo"
bar(); // output: "bar"
```
In this example, module1.js exports a single value (foo) as the default export, while module2.js exports a named export (bar). app.js imports both foo and bar and calls them.