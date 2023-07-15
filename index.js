//test if js is working with the index.html
console.log("Hello World from index.js!");
//it is working
// lets create a calculator app with index.html and index.js
// the calculator will have 4 functions: add, subtract, multiply, divide

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

function operate(num1, operator, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

//create a function that will take in the input from the user and display it on the screen on click
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.value === "clear") {
      display.textContent = "";
    } else if (e.target.value === "equals") {
      console.log(display.textContent);
      //split the string into an array but keep the operator and numbers together
      //so that we can use the operator to call the correct function on the numbers
      //and then display the result
      const input = display.textContent.split(/([+-/*])/); //what does this do?  why does it work? how does it work?
      //explaination: https://stackoverflow.com/questions/22042156/regex-to-split-a-mathematical-expression
      console.log(input);
      //if there is more than one operator, solve the first one and then solve the second one and so on
      if (input.length > 3) {
        while (input.length > 3) {
          //modify it so that it will work with decimals and negative numbers as well
          const num1 = parseFloat(input[0]);
          const operator = input[1];
          const num2 = parseFloat(input[2]);
          //check if the operator is divide and the second number is 0 and if so, return an error
          if (operator === "/" && num2 === 0) {
            display.textContent = "Error";
            return;
          }
          const result = operate(num1, operator, num2);
          //remove the first operation from the array and replace it with the result
          input.splice(0, 3, result);
          display.textContent = result;
        }
      }
      const num1 = parseInt(input[0]);
      const operator = input[1];
      const num2 = parseInt(input[2]);

      if (operator === "/" && num2 === 0) {
        display.textContent = "Error";
        return;
      }

      display.textContent = operate(num1, operator, num2);
    } else {
      display.textContent += e.target.value;
    }
  });
});
