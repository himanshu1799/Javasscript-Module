# Functions contd.
## At the end of the session , you will be able to : 

- Define what functional programming is and how it is used in JavaScript.
- Use the forEach() method to iterate over an array and perform a function on each element.
- Use the sort() method to sort an array based on a provided comparison function.
- Use the map() method to create a new array by performing a function on each element of an existing array.
- Use the filter() method to create a new array containing only the elements of an existing array that meet a certain condition.
- Use the reduce() method to iterate over an array and perform a function on each element, with the ability to accumulate a value over time.

## Functional Programming:
Functional Programming (FP) is a programming paradigm that focuses on using functions to solve problems. It emphasizes the use of pure functions (functions that have no side effects and return the same output for the same input), immutability (data that cannot be changed once it is created), and the avoidance of shared state and mutable data. In FP, functions are treated as first-class citizens and can be passed around as arguments to other functions, returned as values, and assigned to variables.

## forEach():
forEach() is a built-in JavaScript method that is used to loop through an array and execute a function on each element. It takes a callback function as its argument, which is called for each element in the array. The callback function takes three arguments: the current element, the index of the current element, and the array being looped through.

```js
const nums = [1, 2, 3, 4, 5];
nums.forEach(num => {
  console.log(num * 2);
});

```

Output :

```js
2
4
6
8
10

```

## sort():
sort() is a built-in JavaScript method that is used to sort the elements of an array. It can be used to sort an array of strings, numbers, or objects based on a specified property. It sorts the elements of the array in place and returns the sorted array. If no argument is provided, it sorts the elements in lexicographic order.

```js
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const sortedNames = names.sort();
console.log(sortedNames);

```
Output : 

```js
["Alice", "Bob", "Charlie", "David", "Eve"]

```
It sorts the names array in lexicographic order using the sort() method.

## map():
map() is a built-in JavaScript method that is used to create a new array by applying a function to each element of an existing array. It takes a callback function as its argument, which is called for each element in the array. The callback function takes three arguments: the current element, the index of the current element, and the array being looped through. The value returned by the callback function is used to create a new element in the new array.

```js
const nums = [1, 2, 3, 4, 5];
const doubledNums = nums.map(num => num * 2);
console.log(doubledNums);

```
This code will log the following to the console:

```
[2, 4, 6, 8, 10]
```
It creates a new array doubledNums by applying the function num * 2 to each element of the nums array using the map() method.

## filter():
filter() is a built-in JavaScript method that is used to create a new array with all the elements of an existing array that pass a certain test. It takes a callback function as its argument, which is called for each element in the array. The callback function takes three arguments: the current element, the index of the current element, and the array being looped through. The elements that pass the test are added to a new array.

```js
const people = [
  { name: 'Alice', gender: 'female' },
  { name: 'Bob', gender: 'male' },
  { name: 'Charlie', gender: 'male' },
  { name: 'David', gender: 'male' },
  { name: 'Eve', gender: 'female' }
];
const males = people.filter(person => person.gender === 'male');
console.log(males);
```

This code will log the following to the console:

```js
[  { name: "Bob", gender: "male" },  { name: "Charlie", gender: "male" },  { name: "David", gender: "male" }]
```

It creates a new array males with only the objects from the people array whose gender property is 'male' using the filter() method.
## reduce():
reduce() is a built-in JavaScript method that is used to reduce an array to a single value by applying a function to each element of the array. It takes a callback function as its argument, which is called for each element in the array. The callback function takes two arguments: the accumulator and the current element. The accumulator is the value returned by the previous invocation of the callback function, and it is initialized to the initial value provided as the second argument to reduce(). The value returned by the final invocation of the callback function is the final value of the reduce operation.

```js
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((accumulator, currentNum) => accumulator + currentNum, 0);
console.log(sum);

```

This code will log the following to the console:

```
15
```
