## Asyncronous JavaScript

**_Asynchronous programming is a programming paradigm that allows you to execute tasks in a non-blocking manner. Asynchronous programming is particularly useful when working with long-running tasks or tasks that require external resources, such as network requests. In JavaScript, asynchronous programming is commonly achieved using callbacks, Promises, and Async/Await._**

## Callbacks:

Callbacks are functions that are passed as arguments to other functions and are executed when the parent function is done. Callbacks are used to handle asynchronous tasks in JavaScript. However, using callbacks can lead to callback hell, where the code becomes unreadable and hard to maintain.

Here's an example of using a callback to handle an asynchronous task:

```js
function getData(callback) {
  setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    callback(data);
  }, 2000);
}

getData((data) => {
  console.log(data);
});
```

In the above example, getData function takes a callback function as an argument and executes it after a delay of 2 seconds using setTimeout function.

## Callback hell:

When you have multiple asynchronous tasks to execute one after the other, and each of those tasks depends on the previous task's results, it's easy to end up with nested callbacks, leading to callback hell.

Here's an example of callback hell:

```js
doSomething((result1) => {
  doSomethingElse(result1, (result2) => {
    doAnotherThing(result2, (result3) => {
      console.log(result3);
    });
  });
});
```

## Promises:

Promises are objects that represent the eventual completion or failure of an asynchronous operation and its resulting value. Promises provide a cleaner and more manageable way to handle asynchronous tasks. A promise can be in one of three states: pending, fulfilled, or rejected.

Here's an example of creating a Promise object:

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    resolve(data);
  }, 2000);
});
```

In the above example, we create a new Promise object that resolves after a delay of 2 seconds using setTimeout function.

### States of Promise Object:

A Promise object can be in one of three states:

pending: The initial state, neither fulfilled nor rejected.
fulfilled: The state of a promise representing a successful operation.
rejected: The state of a promise representing a failed operation.
Here's an example of handling a Promise object using then:

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    resolve(data);
  }, 2000);
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

In the above example, we handle the promise object using then and catch. The then method takes a callback function that is executed when the promise is fulfilled, and the catch method takes a callback function that is executed when the promise is rejected.

then() with catch():

The then method can be chained with multiple functions that take the result of the previous function as their argument. The catch method can also be chained to handle any errors that occur in any of the functions in the chain.

Here's an example of using then with catch:

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

In the above example, we first fetch data from an API using the fetch function. The then method is then used to check if the response is OK or not. If the response is not OK, an error is thrown. Otherwise, we extract the JSON data using the json method and then log it to the console. Finally, any errors that occur during the process are handled using the catch method.

## Event loop

The event loop is composed of several components, including the call stack, the task queue, and the microtask queue.

### Call Stack: 
- The call stack is a data structure that keeps track of the currently executing function(s). When a function is called, it's added to the top of the call stack, and when it returns, it's removed from the top of the call stack. The call stack has a LIFO (last in, first out) structure, which means that the last function added to the stack is the first one to be executed.

### Task Queue: 
- The task queue is a data structure that contains tasks that need to be executed. Tasks can be added to the queue using methods such as setTimeout, setInterval, and requestAnimationFrame. When a task is added to the queue, the event loop will check the call stack. If the call stack is empty, the task will be executed immediately, but if the call stack is not empty, the task will wait until the call stack is empty.

### Microtask Queue: 
- The microtask queue is a data structure that contains microtasks that need to be executed. Microtasks are usually created using methods such as Promise.resolve, Promise.reject, and queueMicrotask. Microtasks have a higher priority than tasks and are executed before any new tasks are added to the task queue. When a microtask is added to the queue, it's executed immediately after the current function on the call stack completes.


The event loop is a fundamental mechanism in JavaScript that manages the execution of asynchronous code. It is responsible for executing code in a non-blocking and efficient way by continuously checking for pending tasks and executing them as soon as the call stack is empty.

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```
To understand the event loop, let's consider the following example:
In this example, we have four tasks:

- A console.log statement that prints "Start".
- A setTimeout function that registers a callback to be executed after 0 milliseconds.
- A Promise.resolve function that registers a callback to be executed when the promise is resolved.
- Another console.log statement that prints "End".

```js
Start
End
Promise
Timeout
```
Here's what happens in the event loop to produce this output:

The console.log statement on line 1 is executed and prints "Start".
The setTimeout function is executed and registers a callback to be executed after 0 milliseconds. The callback is added to the task queue.

The Promise.resolve function is executed and registers a callback to be executed when the promise is resolved. The callback is added to the microtask queue.

The console.log statement on line 6 is executed and prints "End".
The call stack is now empty, so the event loop checks the microtask queue and executes the callback from the Promise.resolve function, which prints "Promise".

The event loop then checks the task queue and executes the callback from the setTimeout function, which prints "Timeout".

# class Assignment (To be done in class)

**Q1. _Write a function that takes a callback function as an argument and returns a Promise. The Promise should resolve with the result of the callback function._**

Q2. [Handle a Rejected Promise with catch](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/handle-a-rejected-promise-with-catch)


# Class Assignment (to be done in class)

***[Handle a Fulfilled Promise with then](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/handle-a-fulfilled-promise-with-then)***
