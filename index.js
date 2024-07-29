/*
Requirements:


Nice to Haves:
I think OUT OF SCOPE - 3 and more seperate numbers could be input - Seems very hard without creating a function for each variation of operators e.g. addition and addition, addition and subtraction etc. 

Bug Fix:
*/

// Declarations
var numberOne = undefined;
var numberTwo = undefined;
var operatorPressed = false;
var operator = undefined;
var answer = undefined;

// Calculation
function addition(numberOne, numberTwo) {
  var trueNumberOne = Number(numberOne);
  var trueNumberTwo = Number(numberTwo);
  return trueNumberOne + trueNumberTwo;
}

function subtraction(numberOne, numberTwo) {
  var trueNumberOne = Number(numberOne);
  var trueNumberTwo = Number(numberTwo);
  return trueNumberOne - trueNumberTwo;
}

function multiplication(numberOne, numberTwo) {
  var trueNumberOne = Number(numberOne);
  var trueNumberTwo = Number(numberTwo);
  return trueNumberOne * trueNumberTwo;
}

function division(numberOne, numberTwo) {
  var trueNumberOne = Number(numberOne);
  var trueNumberTwo = Number(numberTwo);
  return trueNumberOne / trueNumberTwo;
}

function calculate(operator, numberOne, numberTwo) {
  answer = operator(numberOne, numberTwo);
  return answer;
}

//input
$(".cell").on("click", function () {
  var buttonPress = this.innerHTML;
  input(buttonPress);
});

$(document).on("keydown", function (event) {
  var buttonPress = event.key;
  console.log(event.key);
  input(buttonPress);
  if (event.key === " ") {
    input("AC");
  }
});

function numberPress(key) {
  if (operatorPressed === false) {
    if (numberOne !== undefined && numberOne.length >= 11) {
    } else if (numberOne === undefined) {
      numberOne = key;
    } else {
      numberOne = numberOne + key;
    }
    displayUpdate();
  } else {
    if (numberTwo !== undefined && numberTwo.length >= 11) {
    } else if (numberTwo === undefined) {
      numberTwo = key;
    } else {
      numberTwo = numberTwo + key;
    }
    displayUpdate();
  }
}

function input(key) {
  switch (key) {
    case "1":
      numberPress(key);
      break;
    case "2":
      numberPress(key);
      break;
    case "3":
      numberPress(key);
      break;
    case "4":
      numberPress(key);
      break;
    case "5":
      numberPress(key);
      break;
    case "6":
      numberPress(key);
      break;
    case "7":
      numberPress(key);
      break;
    case "8":
      numberPress(key);
      break;
    case "9":
      numberPress(key);
      break;
    case "0":
      numberPress(key);
      break;
    case ".":
      numberPress(key);
      break;
    case "+":
      operatorPressed = true;
      operator = addition;
      break;
    case "-":
      operatorPressed = true;
      operator = subtraction;
      break;
    case "*":
      operatorPressed = true;
      operator = multiplication;
      break;
    case "/":
      operatorPressed = true;
      operator = division;
      break;
    case "=":
      operatorPressed = true;
      calculate(operator, numberOne, numberTwo);
      displayUpdate();
      numberOne = answer;
      numberTwo = undefined;
      answer = undefined;
      break;
    case "AC":
      numberOne = undefined;
      numberTwo = undefined;
      operatorPressed = false;
      operator = undefined;
      answer = undefined;
      displayUpdate();
      break;
    case "Backspace":
      // Input functionality here
      if (operatorPressed === false) {
        numberOne = numberOne.substring(0, numberOne.length - 1);
        displayUpdate();
      } else {
        numberTwo = numberTwo.substring(0, numberTwo.length - 1);
        displayUpdate();
      }
      break;
    default:
      console.log(key);
      break;
  }
}

//Display
function displayUpdate() {
  if (isNaN(answer) === true && answer !== undefined) {
    $(".display p").html("Error");
  } else if (answer !== undefined) {
    $(".display p").html(answer);
  } else if (numberTwo !== undefined) {
    $(".display p").html(numberTwo);
  } else if (numberOne !== undefined) {
    $(".display p").html(numberOne);
  } else {
    $(".display p").html("0");
  }
  // console.log("Number one: " + numberOne)
  // console.log("Number two: " + numberTwo)
  // console.log("Answer: " + answer)
}
