# ES6 Concepts

## **Closures**

A closure is a function that has access to its own private variables, as well as variables in the parent scope. It is created when a function is defined inside another function and returned.

function outer() {

`  `var x = 10;

`  `function inner() {

`    `console.log(x);

`  `}

`  `return inner;

}

var closure = outer(); // closure has access to x

closure(); // logs 10

## **this**

In JavaScript, **this** refers to the object that the function is a method of. If the function is not a method of any object, **this** refers to the global object.

var person = {

`  `name: "John",

`  `sayHello: function() {

`    `console.log("Hello, " + this.name);

`  `}

};

person.sayHello(); // logs "Hello, John"

var person = {

`  `name: "John",

`  `sayHello: function() {

`    `console.log("Hello, " + this.name);

`  `}

};

person.sayHello(); // logs "Hello, John"

## **Call, Apply, and Bind**

**call()** and **apply()** are methods that allow you to call a function with a specified **this** value and arguments.

function greet(greeting) {

`  `console.log(greeting + ", " + this.name);

}

var person = {

`  `name: "John"

};

greet.call(person, "Hello"); // logs "Hello, John"

greet.apply(person, ["Hello"]); // logs "Hello, John"

**bind()** is a method that returns a new function with a specified **this** value.

function greet(greeting) {

`  `console.log(greeting + ", " + this.name);

}

var person = {

`  `name: "John"

};

var boundGreet = greet.bind(person);

boundGreet("Hello"); // logs "Hello, John"

## **Module Scope: Export and Import**

In JavaScript, modules allow you to split your code into separate files and organize them. Modules can be exported and imported using the **export** and **import** statements.

// greeting.js

export function greet(name) {

`  `console.log("Hello, " + name);

}

// index.js

import { greet } from './greeting.js';

greet("John"); // logs "Hello, John"
