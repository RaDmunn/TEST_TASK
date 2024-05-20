// Define an interface-like base class with a method to check and print the result
class FizzBuzzComponent {
  // The check method will be overridden by subclasses
  check(i) {
    throw new Error("This method should be overridden!");
  }
}

// Define a Fizz class
class Fizz extends FizzBuzzComponent {
  check(i) {
    if (i % 3 === 0 && i % 5 !== 0) {
      return "Fizz";
    }
    return null;
  }
}

// Define a Buzz class
class Buzz extends FizzBuzzComponent {
  check(i) {
    if (i % 5 === 0 && i % 3 !== 0) {
      return "Buzz";
    }
    return null;
  }
}

// Define a FizzBuzz class
class FizzBuzz extends FizzBuzzComponent {
  check(i) {
    if (i % 3 === 0 && i % 5 === 0) {
      return "FizzBuzz";
    }
    return null;
  }
}

// Define a Number class for numbers that aren't Fizz, Buzz, or FizzBuzz
class NumberCheck extends FizzBuzzComponent {
  check(i) {
    if (i % 3 !== 0 && i % 5 !== 0) {
      return i.toString();
    }
    return null;
  }
}

// Main function to print results between n and m
function printFizzBuzz(n, m) {
  if (n >= m) {
    throw new Error("n should be less than m");
  }

  // Create instances of each FizzBuzzComponent
  const components = [
    new FizzBuzz(),
    new Fizz(),
    new Buzz(),
    new NumberCheck(),
  ];

  for (let i = n + 1; i < m; i++) {
    let result = null;
    for (let component of components) {
      result = component.check(i);
      if (result !== null) {
        break;
      }
    }
    console.log(result);
  }
}

// Example usage
printFizzBuzz(1, 17);
