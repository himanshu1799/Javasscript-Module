## Asyncronous JavaScript 

Asynchronous programming is a programming paradigm that allows you to execute tasks in a non-blocking manner. Asynchronous programming is particularly useful when working with long-running tasks or tasks that require external resources, such as network requests. In JavaScript, asynchronous programming is commonly achieved using callbacks, Promises, and Async/Await.

## Callbacks:

Callbacks are functions that are passed as arguments to other functions and are executed when the parent function is done. Callbacks are used to handle asynchronous tasks in JavaScript. However, using callbacks can lead to callback hell, where the code becomes unreadable and hard to maintain.

Here's an example of using a callback to handle an asynchronous task:

```
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

```
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

```
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

```
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    resolve(data);
  }, 2000);
});

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});
```

In the above example, we handle the promise object using then and catch. The then method takes a callback function that is executed when the promise is fulfilled, and the catch method takes a callback function that is executed when the promise is rejected.

then() with catch():

The then method can be chained with multiple functions that take the result of the previous function as their argument. The catch method can also be chained to handle any errors that occur in any of the functions in the chain.

Here's an example of using then with catch:

```
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log('Error:', error);
  });

```

In the above example, we first fetch data from an API using the fetch function. The then method is then used to check if the response is OK or not. If the response is not OK, an error is thrown. Otherwise, we extract the JSON data using the json method and then log it to the console. Finally, any errors that occur during the process are handled using the catch method.