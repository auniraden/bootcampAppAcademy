// Generic function to operate on two numbers based on a callback function
function operateOnNumbers(num1, num2, operation) {
  const result = operation(num1, num2);
  return result;
}

// Callback functions for specific operations
function multiplyByTwo(a, b) {
  return a * 2;
}

function divideByThree(a, b) {
  return a / 3;
}

function generateTacoMessage(num) {
  return `I ate ${num} tacos.`;
}

function generateDogMessage(weight) {
  return `I adopted a dog that weighs ${weight} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
