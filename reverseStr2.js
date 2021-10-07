const reverseStr = str => {
    const splittedStr = str.split('');
    const reversedStr = splittedStr.reverse().join('');
    return reversedStr;
}

console.log(reverseStr('Assalaam alaykum warohmatullah'));
console.log(reverseStr('Hello world!'));
