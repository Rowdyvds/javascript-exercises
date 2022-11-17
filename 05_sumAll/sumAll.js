const sumAll = function(num1, num2) {
    //Check if both numbers are in fact numbers
    if (!(Number.isInteger(num1) && Number.isInteger(num2))) {
        return "ERROR";
    }
    
    //Check if both numbers are positive
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    //Check if number 2 is the lowest number, if so, swap them
    if (num2 < num1) {
        [num1, num2] = [num2, num1];
    }

    //loop through all numbers and add to the sum
    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
