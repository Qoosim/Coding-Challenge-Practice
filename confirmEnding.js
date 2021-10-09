const confirmEnding = (str, target) => {
    if (str.substring(str.length - target.length) === target) {
        return true;
    } else {
        return false;
    }
}

console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding('court', 'm'));
console.log(confirmEnding('congratulation', 'on'));
console.log(confirmEnding('He has to give me a new name', 'name'));
console.log(confirmEnding('I intend becoming great in life', 'in'));
console.log(confirmEnding('Qoosim is my friend', 'friend'));
console.log(confirmEnding('Alaje is my family name', 'name')); 

console.log('=============')

const confirmWithEndsWithMethod = (str, target) => {
    if (str.endsWith(target)) {
        return true;
    } else {
        return false;
    }
}

console.log(confirmWithEndsWithMethod('Qoosim', 'm'));
console.log(confirmWithEndsWithMethod('You are too much', 'much'));
console.log(confirmWithEndsWithMethod('Adekunle is my third name', 'third'));

