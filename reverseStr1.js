const reverseStr = (str) => {
    let prev = '';
    let splittedStr = str.split('');
    for (let i = splittedStr.length - 1; i >= 0; i--) {
        prev += splittedStr[i];
    }
    return prev;
}

console.log(reverseStr('Qoosim'));
console.log(reverseStr('This is going to be interesting'));
