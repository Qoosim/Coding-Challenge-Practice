const confirmEnding = (str, target) => {
    return str.substring(str.length - target.length);
}

console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding('court', 'm'));
console.log(confirmEnding('congratulation', 'on'));
//console.log(confirmEnding('He has to give me a new name', 'name'));
