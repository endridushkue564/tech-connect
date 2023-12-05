/*
 * Filename: complexCode.js
 * Description: Complex JavaScript code demonstrating various advanced techniques and concepts
 */

// Function to calculate the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

// Function to calculate the Fibonacci sequence up to a given number of terms
function fibonacci(numOfTerms) {
  let fib = [0, 1];
  while (fib.length < numOfTerms) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib;
}

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Object instantiation and usage of the Person class
const john = new Person('John', 30);
console.log(john.getInfo());

// Asynchronously fetch data from an API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call fetchData function
fetchData('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Higher-order function to filter an array based on a given criteria
function filterArray(arr, criteria) {
  return arr.filter(criteria);
}

// Usage of filterArray function
const numbers = [1, 2, 3, 4, 5];
const evens = filterArray(numbers, num => num % 2 === 0);
console.log(evens);

// Recursive function to calculate the sum of an array of numbers
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

// Usage of sumArray function
const nums = [1, 2, 3, 4, 5];
const sum = sumArray(nums);
console.log(sum);

// Random number generator using a closure
function randomNumberGenerator(min, max) {
  return () => Math.floor(Math.random() * (max - min + 1) + min);
}

// Usage of randomNumberGenerator
const generateRandomNumber = randomNumberGenerator(1, 100);
console.log(generateRandomNumber());

// Exporting modules in JavaScript
module.exports = {
  factorial,
  fibonacci,
  Person,
  fetchData,
  filterArray,
  sumArray,
  randomNumberGenerator,
};

// Importing modules in JavaScript
const {
  factorial,
  fibonacci,
  Person,
  fetchData,
  filterArray,
  sumArray,
  randomNumberGenerator,
} = require('./path/to/module');

// Call functions or use imported classes from the imported module