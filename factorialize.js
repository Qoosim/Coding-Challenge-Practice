const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter an integer: '));

const factorialize = num => {
    let fact = 1;
    if (num < 0) {
        fact = `Error!, factorial for negative numbers does not exist!.`
    } else if (num === 0) {
        fact = `The factorial for ${num} is 1.`;
    } else {
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        fact = `Factorial for ${num} is ${fact}.`
    }

    return fact;
}

console.log(factorialize(number));
